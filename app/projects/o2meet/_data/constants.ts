// O2Meet 티켓 구매 시스템 구현 기능 정리

// 기술 스택
export const techStack = [
  "Spring Boot",
  "JSP/JSTL",
  "jQuery",
  "JavaScript (ES6+)",
  "RESTful API",
  "AJAX (Axios)",
];

// 성과 지표
export const metrics = [
  { label: "결제 방식", value: "동적 처리", desc: "어드민 설정값 기반 결제수단 선택" },
  { label: "API 연동", value: "15+", desc: "상품/주문/결제/사용자 API" },
];

// ============================================
// 내가 구현/개선한 핵심 포인트
// ============================================

// 1. 서버 버그 우회 - 중복 데이터 제거 로직
export const serverBugWorkaround = {
  problem: "서버에서 ordersCartGoodsItemList에 동일 아이템이 중복 반환되는 버그",
  solution: "클라이언트에서 Set 자료구조로 중복 제거 후 처리",
  code: `
// createOrder 함수 내 중복 제거 로직
cartData.ordersCartGoodsList?.forEach(goods => {
  if (goods.ordersCartGoodsItemList && goods.ordersCartGoodsItemList.length > 1) {
    const uniqueItems = [];
    const seen = new Set();
    goods.ordersCartGoodsItemList.forEach(item => {
      const key = \`\${item.itemNo}-\${item.itemOptionNo}\`;
      if (!seen.has(key)) {
        seen.add(key);
        uniqueItems.push(item);
      }
    });
    goods.ordersCartGoodsItemList = uniqueItems;
  }
});`,
  impact: "결제 오류 및 중복 주문 방지",
};

// 2. 복합결제 상태 관리
export const mixPaymentStateManagement = {
  problem: "여러 결제수단(카드+현금, 카드+제로페이 등)으로 나눠 결제 시 상태 관리 복잡",
  solution: "mixPayInfo 객체로 결제 상태 추적, 부분 성공/실패 시 롤백 처리",
  flow: [
    "paymentRequestProcess: 개별 결제 요청",
    "mixpaySuccessCallback: 부분 결제 성공 시 콜백",
    "completeMixPayment: 모든 결제 완료 후 최종 확정",
    "cancelMixPayment: 실패 시 이미 결제된 건 전체 취소",
  ],
};

// 3. 상품 유효성 검증 로직 (validateGoods)
export const validationLogic = {
  title: "다중 조건 상품 유효성 검증",
  checks: [
    {
      name: "사용여부 검사",
      code: `if (goods.useYn == "N") return false`,
    },
    {
      name: "판매기간 검증",
      code: `
// 날짜만 비교 (시간 제외)
periodStart.setHours(0, 0, 0, 0);
periodEnd.setHours(0, 0, 0, 0);
today.setHours(0, 0, 0, 0);
if (today < periodStart || today > periodEnd) return false;`,
    },
    {
      name: "회원유형별 판매대상 필터링",
      desc: "goodsSubList(신규) + typeCd2(레거시) 양쪽 호환",
      code: `
// 신규 로직: goodsSubList 기반
for (let goodsSub of goods.goodsSubList) {
  if (goodsSub.masterCd == 'UPC') {
    goodsUserPartCdList.push(goodsSub.detailCd);
  }
}
// 레거시 호환: typeCd2 CSV 파싱
let typeCd2Csv = goods.typeCd2.replaceAll("[", "").replaceAll("]", "");
goodsUserPartCdList = typeCd2Csv.split(",").map(c => c.trim());`,
    },
  ],
};

// 4. 비동기 패턴 통일 (async/await + callback 양립)
export const asyncPatterns = {
  problem: "레거시 콜백 기반 코드와 신규 async/await 코드 혼재",
  solution: "동일 기능에 대해 두 패턴 모두 제공하여 점진적 마이그레이션 지원",
  examples: [
    {
      callback: "saveCancelOrderUsingCallback(data, callback)",
      async: "saveCancelOrder(data) // returns Promise",
    },
    {
      callback: "callGoodsApi(goodsNo, callbackFunction)",
      async: "callCartIdData(cartOrderNo) // async function, returns data",
    },
  ],
};

// 5. 데이터 정규화 - setGoodsInfo
export const dataNormalization = {
  title: "복잡한 상품 데이터 정규화",
  problem: "goodsInfo 객체가 items > itemdetails > options > details 로 깊게 중첩",
  solution: "setGoodsInfo 함수로 필요한 값만 추출하여 flat한 객체로 반환",
  code: `
function setGoodsInfo(goodsInfo, itemNo, itemOptionNo) {
  const item = goodsInfo.items.find(el => el.itemNo === itemNo);
  const itemDetail = item?.itemdetails?.find(el => el?.langCd === lang);
  const option = item?.options?.find(el => el?.itemOptionNo === itemOptionNo);
  const optionDetail = option?.details.find(el => el?.langCd === lang);

  return {
    itemTitle: itemDetail?.title,
    itemCd: item?.itemCd,
    itemUnitCd: itemDetail?.itemUnitCd ?? 'KRW',
    uniqueYn: item?.uniqueYn,
    vatExmptYn: item?.vatExmptYn,
    itemPrice: itemDetail?.itemPrice ?? 1,
    isQrsend: item?.isQrsend ?? 'N',
    optionTitle: optionDetail?.title,
    itemOptionDetailNo: optionDetail?.id,
  };
}`,
};

// 주요 기능 - 상품 조회
export const productFeatures = [
  {
    func: "callGoodsApi",
    title: "상품 단건 조회",
    desc: "goodsNo로 상품 상세 정보 조회, 콜백 패턴으로 후속 처리",
    api: "/goods/{goodsNo}",
  },
  {
    func: "goodsImageFile",
    title: "상품 이미지 조회",
    desc: "상품 상세페이지용 이미지 파일 정보 조회",
    api: "/attach/tb_goods_detail_{lang}/{goodsNo}",
  },
  {
    func: "setGoodsImgTag",
    title: "상품 이미지 태그 생성",
    desc: "장바구니, 주문상세, 주문완료 페이지에서 사용할 이미지 HTML 태그 생성",
  },
];

// 주요 기능 - 장바구니
export const cartFeatures = [
  {
    func: "saveCartOrder",
    title: "장바구니 추가",
    desc: "상품을 장바구니에 담고, returnUrl에 따라 결제 플로우 분기",
    api: "/cart/add",
  },
  {
    func: "callMyCartData",
    title: "내 장바구니 다건 조회",
    desc: "현재 로그인 사용자의 장바구니 전체 목록 조회",
    api: "/cart/my",
  },
  {
    func: "callMyCartNo",
    title: "장바구니 단건 조회",
    desc: "cartNo로 특정 장바구니 아이템 상세 정보 조회",
    api: "/cart/{cartNo}",
  },
  {
    func: "callCartIdData",
    title: "장바구니 데이터 리턴",
    desc: "장바구니 단건 조회 후 데이터를 Promise로 반환 (async/await 지원)",
    api: "/cart/{cartOrderNo}",
  },
];

// 주요 기능 - 주문 생성
export const orderFeatures = [
  {
    func: "createOrder",
    title: "장바구니 → 주문 생성",
    desc: "장바구니 단건 또는 상품상세에서 바로 구매 시 주문 생성. 서버 중복 버그 우회 로직 포함",
    api: "/order/create-order-ready/v1",
    highlight: "ordersCartGoodsItemList 중복 제거 로직 구현",
  },
  {
    func: "createMultiOrder",
    title: "장바구니 다건 주문",
    desc: "여러 장바구니 아이템을 한 번에 주문으로 생성",
    api: "/order/create-order-ready/v1",
  },
  {
    func: "savePayOrder",
    title: "상품 바로 구매",
    desc: "장바구니 거치지 않고 바로 결제 진행",
    api: "/order/direct-buy/v1",
  },
];

// 주요 기능 - 결제 처리
export const paymentFeatures = [
  {
    func: "populatePaymentMethodOptions",
    title: "결제 수단 옵션 조회",
    desc: "프로젝트별 사용 가능한 결제 수단 목록을 동적으로 생성",
    api: "/paymentMethod/project",
  },
  {
    func: "paymentRequestProcess",
    title: "결제 요청 처리",
    desc: "복합결제 시 개별 결제 요청 처리",
    api: "/order/payment-request-process",
  },
  {
    func: "paymentCancelRequestProcess",
    title: "결제 취소 요청",
    desc: "복합결제 중 일부 결제 취소 처리",
    api: "/order/payment-cancel-request-process",
  },
];

// 주요 기능 - 복합결제
export const mixPayFeatures = [
  {
    func: "completeMixPayment",
    title: "복합결제 완료",
    desc: "여러 결제수단으로 나눠 결제한 건을 최종 완료 처리",
    api: "/order/complete-mix-payment",
  },
  {
    func: "cancelMixPayment",
    title: "복합결제 전체 취소",
    desc: "복합결제 진행 중 전체 취소 시 처리",
    api: "/order/cancel-mix-payment",
  },
];

// 주요 기능 - 주문 조회/취소
export const orderManageFeatures = [
  {
    func: "callOrderData",
    title: "주문 단건 조회",
    desc: "주문하기, 주문완료상세, 환불요청 페이지에서 사용",
    api: "/order/{orderId}/v2",
  },
  {
    func: "callMyOrders",
    title: "주문 내역 조회",
    desc: "결제완료/취소 상태별 주문 목록 조회",
    api: "/order/v2",
  },
  {
    func: "saveCancelOrder",
    title: "결제 취소 (async)",
    desc: "결제 취소 API 호출 (Promise 반환)",
    api: "/order/payment-cancel-process/v2",
  },
  {
    func: "saveCancelOrderUsingCallback",
    title: "결제 취소 (callback)",
    desc: "결제 취소 API 호출 (콜백 패턴)",
    api: "/order/payment-cancel-process/v2",
  },
];

// 주요 기능 - 상품 목록 (goodsList.jsp)
export const goodsListFeatures = [
  {
    func: "setCategoryList",
    title: "카테고리 목록 세팅",
    desc: "BO에서 등록된 상품 카테고리를 셀렉트박스에 동적 생성",
    api: "/goodsCategory",
  },
  {
    func: "setSecondCategory",
    title: "2차 카테고리 세팅",
    desc: "1차 카테고리 선택 시 하위 카테고리 동적 로드",
    api: "/goodsCategory (GET)",
  },
  {
    func: "getGoodsList",
    title: "상품 목록 검색",
    desc: "카테고리, 키워드, 상품유형 필터를 적용한 상품 목록 조회",
    api: "/goods",
  },
  {
    func: "validateGoodsList",
    title: "상품 유효성 검증",
    desc: "판매기간, 사용여부, 회원유형별 판매대상 검증",
    details: [
      "useYn === 'N' 상품 제외",
      "판매기간(periodStartDt~periodEndDt) 검증",
      "회원 유형(userPartCd)별 판매대상 필터링",
      "goodsSubList 기반 신규 로직 + typeCd2 기반 레거시 호환",
    ],
  },
  {
    func: "getGoodsTypeCategory",
    title: "상품 유형 카테고리 조회",
    desc: "PDT(상품유형), PET(기타유형) 카테고리 동적 로드",
    api: "/category/{projectCd}/{siteId}/{typeCd}",
  },
];

// ============================================
// 등록 솔루션 공통화 - 개발기간 단축 핵심
// ============================================

export const registrationCommonization = {
  title: "등록 솔루션 공통화",
  problem: "바이어/참관객/전시자 등 화면마다 요구사항이 다름 (필수입력, 카테고리, 검증 등)",
  solution: "공통 로직은 JS로 분리, 화면별 차이는 카테고리 코드로 추상화",
  impact: "신규 행사 등록페이지 개발기간 2주 → 3-5일 단축",

  commonModules: [
    {
      file: "register.js",
      desc: "모든 등록폼 공통 함수",
      functions: [
        "saveCheckedCategory() - 체크한 카테고리 값 저장",
        "postUserData() - 유저 데이터 POST",
        "duplicationEmail() - 이메일 중복확인/검증",
        "getTerms() - 약관 동적 로드",
        "registeredMailSend() - 등록완료 메일 발송",
      ],
    },
    {
      file: "hub_common.js",
      desc: "카테고리/셀렉트박스 동적 생성",
      functions: [
        "commonCategory() - 카테고리 코드로 체크박스/라디오 동적 생성",
        "fn_nationcd() - 국가코드 셀렉트박스",
      ],
    },
    {
      file: "validateField.js",
      desc: "검증 유틸",
      functions: [
        "isEmpty() - 빈값 체크",
        "checkEmail() - 이메일 형식 검증",
        "removeAndFocus() - 알림 후 포커스 이동",
      ],
    },
  ],

  // 핵심: 화면별 다른 요구사항을 카테고리 코드로 추상화
  categoryAbstraction: {
    desc: "화면별 필수항목이 달라도 같은 함수로 처리",
    code: `// 바이어 등록 화면 - 5개 카테고리 사용
commonCategory('MAD', 'radio', $('#MADBOX'), true)    // 유사행사 참여경험
commonCategory('MAK', 'checkbox', $('#MAKBOX'), false) // 주요 사업분야
commonCategory('MAP', 'checkbox', $('#MAPBOX'), false) // 관심분야
commonCategory('MAO', 'checkbox', $('#MAOBOX'), true)  // 타깃연령
commonCategory('MAU', 'checkbox', $('#MAUBOX'), true)  // 참여목적

// 참관객 등록 화면 - 3개만 사용
commonCategory('MAP', 'checkbox', $('#MAPBOX'), false)
commonCategory('MAO', 'checkbox', $('#MAOBOX'), true)`,
    benefit: "BO에서 카테고리만 추가하면 프론트 수정 없이 새 항목 반영",
  },

  // 저장 로직도 공통화
  saveLogic: {
    desc: "체크된 값 저장도 공통 함수로 처리",
    code: `// 각 카테고리별 체크된 값을 companyDetailSubs에 저장
saveCheckedCategory('MADBOX', 'MAD', 'radio', 'companyDetailCategory')
saveCheckedCategory('MAKBOX', 'MAK', 'checkbox', 'companyDetailCategory')
saveCheckedCategory('MAPBOX', 'MAP', 'checkbox', 'companyDetailCategory')

// 최종 POST - 어떤 등록화면이든 동일
postUserData(userBody, 'N', 'UAS001', 'UPC001', userId, firstNm)`,
  },
};

// 기타 유틸
export const utilFeatures = [
  {
    func: "calluserData",
    title: "현재 사용자 정보 조회",
    desc: "로그인 사용자 정보 조회",
    api: "/user/me",
  },
  {
    func: "getFranchiseeInfo",
    title: "가맹점 정보 조회",
    desc: "주문 시 필요한 가맹점 정보 조회",
    api: "/o2meetFranchisee",
  },
  {
    func: "setGoodsInfo",
    title: "상품 정보 추출",
    desc: "goodsInfo에서 필요한 값(아이템, 옵션, 가격 등)을 추출하여 반환",
  },
];
