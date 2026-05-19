// POS/키오스크 결제 시스템 구현 기능 정리

// 기술 스택
export const techStack = [
  "Spring Boot",
  "JSP/JSTL",
  "jQuery",
  "JavaScript (ES6+)",
  "CefSharp (C# 브라우저)",
  "RESTful API",
];

// 성과 지표
export const metrics = [
  { label: "디바이스 통합", value: "100%", desc: "키오스크/POS 단일 코드베이스" },
  { label: "영수증 출력", value: "3종", desc: "일반/입장권/주방주문서" },
  { label: "결제 방식", value: "동적 처리", desc: "어드민 설정값 기반 결제수단 선택" },
];

// ============================================
// 내가 구현/개선한 핵심 포인트
// ============================================

// 1. 디바이스별 분기 처리 - 단일 코드베이스로 키오스크/POS 동시 지원
export const deviceBranchingPattern = {
  problem: "키오스크와 POS가 같은 결제 로직을 사용하지만 후처리가 다름",
  solution: "URL 기반 디바이스 감지 + CefSharp 존재 여부로 환경 판단",
  code: `
// 디바이스 감지
const isPos = window.location.pathname.includes('pos');
const isCefSharp = window?.CefSharp !== undefined;

// 디바이스별 분기 처리
if (isPos) {
  handleReceiptPrint();
  setTimeout(() => {
    // POS: 주방 주문서 3초 뒤 출력
    if (sessionStorage.getItem('salesChannelCd') === 'DIK003') {
      printReceiptByString(adminReceiptString, "", "", "", "");
    }
  }, 3000);
} else {
  // 키오스크: 서명패드 + UI 표시
  if (paymentTotal > 50000) {
    Kiosk_OPEN('#signPad', callback);
  }
}`,
  benefits: [
    "코드 중복 제거 - 결제 로직 1벌 유지",
    "유지보수 용이 - 공통 수정 시 양쪽 적용",
    "테스트 효율 - 하나의 플로우로 양쪽 검증",
  ],
};

// 2. 영수증 출력 타이밍 제어
export const receiptTimingControl = {
  problem: "영수증 + 입장권 동시 출력 시 프린터 버퍼 충돌",
  solution: "setTimeout으로 순차 출력, 적정 딜레이 테스트 후 2.7초로 확정",
  code: `
function printKioskTicket(adminReceiptString, receiptString, orderId, signImg) {
  const exQrData = orderId + "exchange";  // 교환 QR
  const reQrData = orderId + "receipt";   // 영수증 QR

  // 1차: 입장권 출력
  printReceiptByString(adminReceiptString, "", "", "", exQrData);

  // 2차: 2.7초 후 영수증 출력 (프린터 버퍼 비우기 대기)
  setTimeout(() => {
    printReceiptByString(
      receiptString.headerInfo,
      receiptString.goodsData,
      receiptString.paymentInfo,
      signImg,
      reQrData
    );
  }, 2700);
}`,
};

// 3. 결제 실패 복구 UX
export const paymentFailureRecovery = {
  problem: "결제 실패 시 사용자가 당황하고 키오스크 앞에서 멈춤",
  solution: "에러 코드별 분기 처리 + 자동 타이머 + 재결제 버튼",
  errorHandling: [
    {
      code: "R203",
      meaning: "사용자 결제 취소",
      action: "재결제 UI 표시, 중복결제 카운트 초기화, 30초 타이머",
    },
    {
      code: "기타",
      meaning: "결제 오류",
      action: "에러 메시지 표시 + 30초 후 자동 이전화면",
    },
  ],
  code: `
if (resultText.RES_CD === "R203") {
  // 사용자 취소 - 재결제 옵션 제공
  count = 0;  // 중복결제 방지 카운트 초기화
  $('#textBox').html(retryHtml);
  kioskTimeChk(30);
} else {
  // 시스템 오류 - 에러 표시 후 자동 복귀
  $('#errorTextBox').html(\`에러: \${resultText.RES_MSG}\`);
  kioskTimeChk(30);
}`,
};

// 4. 영수증 데이터 구조화
export const receiptDataStructure = {
  title: "영수증 데이터 정규화",
  problem: "API 응답과 영수증 출력 포맷이 다름",
  solution: "receipt 객체로 정규화 후 출력 함수에 전달",
  code: `
const receipt = {
  ...getBasicDikidikiReceiptObject(),  // 기본 정보 (상호, 사업자번호 등)
  orderNo: orderNo,
  timestamp: getCurrentTimestamp(),
  goods: receipt1.goods,
  totalAmount: payResProReqBody.paymentTotal,
  discountAmount: 0,
  // VAT 계산
  taxableAmount: getPrincipalExcludingVATFromApprovalAmount(paymentTotal),
  tax: getVATFromApprovalAmount(paymentTotal),
  // 결제 정보
  cardType: resultText.PROC_CODE === 'C01' ? '현금' : resultText.AC_NAME,
  cardNumber: resultText.CARD_BIN,
  approvalNumber: resultText.AUTH_NO,
  approvalDateTime: convertTimestamp(getPaymentDt(resultText.OTX_DT)),
};`,
};

// 5. C# (CefSharp) 연동
export const cefSharpIntegration = {
  problem: "웹 → 네이티브(C#) 통신 필요 (프린터, POS 주문목록 갱신)",
  solution: "CefSharp.PostMessage로 JSON 메시지 전송",
  code: `
// POS 주문 목록 갱신 요청
if (window?.CefSharp !== undefined) {
  CefSharp.PostMessage({ callPos: "getAdminOrderList" });
}

// 환경 분기 (개발/운영)
if (window?.CefSharp === undefined) {
  console.log('포스기로 주문완료 신호보냄');
  kioskAlert('포스환경이 아님으로 인식됨!');
}`,
};

// 6. 자동 복귀 타이머
export const autoReturnTimer = {
  problem: "키오스크/POS에서 사용자가 화면 앞에서 이탈 시 다음 고객 대기",
  solution: "결제 완료/실패 후 자동 타이머로 초기화면 복귀",
  code: `
function kioskTimeChk(time = 30) {
  let timeRemaining = time;
  _countdown = setInterval(function () {
    $(".timer").text("남은 시간: " + timeRemaining + "초");
    if (timeRemaining === 0) {
      clearInterval(_countdown);
      if (window?.CefSharp !== undefined) {
        history.back();  // POS기에서만 뒤로가기
      }
    } else {
      timeRemaining--;
    }
  }, 1000);
}`,
};

// 카테고리 코드 (업무 도메인)
export const categoryCodes = {
  DIK002: "디키디키 입장권",
  DIK003: "POS 판매채널 (주방 주문서 출력)",
  DIK004: "F&B 상품 (주방 주문서 출력)",
};
