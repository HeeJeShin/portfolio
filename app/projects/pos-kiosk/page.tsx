"use client";

import Image from "next/image";
import Link from "next/link";
import { ProjectHeader } from "@/app/_components/ProjectHeader";

const techStack = ["JavaScript", "jQuery", "JSP", "CefSharp", "KCP 결제"];

const achievements = [
  { label: "디바이스 통합", value: "100%", desc: "키오스크/POS 단일 코드베이스" },
  { label: "영수증 출력", value: "3종", desc: "일반/입장권/주방주문서" },
  { label: "결제 방식", value: "동적 처리", desc: "어드민 설정값 기반 결제수단 선택" },
];

const kioskScreenshots = [
  { src: "/키오스크_초기대기화면.png", label: "초기 대기 화면" },
  { src: "/키오스크_메인화면_상품리스트.png", label: "상품 리스트" },
  { src: "/키오스크_장바구니.png", label: "장바구니" },
  { src: "/키오스크_결제화면_담은상품.png", label: "결제 화면" },
  { src: "/키오스크_결제완료화면_영수증출력버튼.png", label: "결제 완료" },
];

const posScreenshots = [
  { src: "/포스기본화면.png", label: "기본 화면" },
  { src: "/포스_상품장바구니.png", label: "장바구니" },
  { src: "/포스_결제화면.png", label: "결제 화면" },
];

const coreImplementations = [
  {
    title: "디바이스별 분기 처리 - 단일 코드베이스",
    problem: "키오스크와 POS가 같은 결제 로직을 사용하지만 후처리가 다름",
    solution: "URL 기반 디바이스 감지 + CefSharp 존재 여부로 환경 판단",
    benefits: [
      "코드 중복 제거 - 결제 로직 1벌 유지",
      "유지보수 용이 - 공통 수정 시 양쪽 적용",
      "테스트 효율 - 하나의 플로우로 양쪽 검증",
    ],
    code: `// 디바이스 감지
const isPos = window.location.pathname.includes('pos');
const isCefSharp = window?.CefSharp !== undefined;

// 디바이스별 분기 처리
if (isPos) {
  handleReceiptPrint();
  setTimeout(() => {
    // POS: 주방 주문서 3초 뒤 출력
    if (salesChannelCd === 'DIK003') {
      printReceiptByString(adminReceiptString);
    }
  }, 3000);
} else {
  // 키오스크: 서명패드 + UI 표시
  if (paymentTotal > 50000) {
    Kiosk_OPEN('#signPad', callback);
  }
}`,
  },
  {
    title: "영수증 출력 타이밍 제어",
    problem: "영수증 + 입장권 동시 출력 시 프린터 버퍼 충돌",
    solution: "setTimeout으로 순차 출력, 테스트 후 2.7초로 확정",
    code: `function printKioskTicket(adminReceiptString, receiptString, orderId) {
  const exQrData = orderId + "exchange";  // 교환 QR
  const reQrData = orderId + "receipt";   // 영수증 QR

  // 1차: 입장권 출력
  printReceiptByString(adminReceiptString, "", "", "", exQrData);

  // 2차: 2.7초 후 영수증 출력 (프린터 버퍼 비우기 대기)
  setTimeout(() => {
    printReceiptByString(receiptString, signImg, reQrData);
  }, 2700);
}`,
  },
  {
    title: "결제 실패 복구 UX",
    problem: "결제 실패 시 사용자가 당황하고 키오스크 앞에서 멈춤",
    solution: "에러 코드별 분기 처리 + 자동 타이머 + 재결제 버튼",
    errorHandling: [
      { code: "R203", meaning: "사용자 결제 취소", action: "재결제 UI 표시, 30초 타이머" },
      { code: "기타", meaning: "결제 오류", action: "에러 메시지 + 30초 후 자동 복귀" },
    ],
    code: `if (resultText.RES_CD === "R203") {
  // 사용자 취소 - 재결제 옵션 제공
  count = 0;  // 중복결제 방지 카운트 초기화
  $('#textBox').html(retryHtml);
  kioskTimeChk(30);
} else {
  // 시스템 오류 - 에러 표시 후 자동 복귀
  $('#errorTextBox').html(\`에러: \${resultText.RES_MSG}\`);
  kioskTimeChk(30);
}`,
  },
  {
    title: "자동 복귀 타이머",
    problem: "사용자 이탈 시 다음 고객 대기",
    solution: "결제 완료/실패 후 자동 타이머로 초기화면 복귀",
    code: `function kioskTimeChk(time = 30) {
  let timeRemaining = time;
  _countdown = setInterval(function () {
    $(".timer").text("남은 시간: " + timeRemaining + "초");
    if (timeRemaining === 0) {
      clearInterval(_countdown);
      if (window?.CefSharp !== undefined) {
        history.back();
      }
    } else {
      timeRemaining--;
    }
  }, 1000);
}`,
  },
];

const features = [
  {
    icon: "🛒",
    title: "키오스크 UI 화면 구성",
    desc: "상품 카테고리/리스트, 장바구니, 결제 화면 전체 UI 개발",
  },
  {
    icon: "💳",
    title: "KCP 결제 연동",
    desc: "KCP 결제모듈 프론트엔드 연동 및 결제 플로우 구현",
  },
  {
    icon: "🌐",
    title: "다국어 지원",
    desc: "한국어/영어 등 다국어 UI 지원 (spring:message 활용)",
  },
  {
    icon: "📡",
    title: "CefSharp 연동",
    desc: "C# 프로그램과 JS 간 통신 (프린터, 세컨드 모니터)",
  },
];

export default function PosKioskPage() {
  return (
    <div className="min-h-screen bg-white">
      <ProjectHeader
        title="POS/Kiosk 프로젝트"
      />

      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Hero */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 border border-gray-300 text-gray-700 rounded-full text-sm font-medium">
              2024.11 - 2025.02
            </span>
            <span className="text-gray-400">|</span>
            <span className="text-gray-600 text-sm">프론트엔드 · 선임</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            POS/Kiosk 결제 시스템
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
            동대문역사문화공원역 어린이 키즈카페 <strong className="text-blue-600">&apos;디키디키&apos;</strong>용 POS/Kiosk 시스템.
            초기 프론트엔드 개발자 부재로 <strong>화면 구성 및 초기 개발을 담당</strong>했습니다.
          </p>
        </section>

        {/* 성과 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">성과</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {achievements.map((item) => (
              <div key={item.label} className="bg-white rounded-xl p-6 border border-gray-200 text-center">
                <p className="text-sm text-gray-600 mb-1">{item.label}</p>
                <p className="text-2xl font-bold text-blue-600 mb-1">{item.value}</p>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Kiosk Screenshots */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">키오스크 화면</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {kioskScreenshots.map((shot) => (
              <div key={shot.label} className="flex flex-col items-center">
                <div className="relative w-full aspect-[9/16] rounded-xl overflow-hidden border border-gray-200 bg-gray-50">
                  <Image
                    src={shot.src}
                    alt={shot.label}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="mt-2 text-xs text-gray-600 font-medium">{shot.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* POS Screenshots */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">POS 화면</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {posScreenshots.map((shot) => (
              <div key={shot.label} className="flex flex-col items-center">
                <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-gray-200 bg-gray-50">
                  <Image
                    src={shot.src}
                    alt={shot.label}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="mt-2 text-xs text-gray-600 font-medium">{shot.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 핵심 구현 포인트 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">핵심 구현 포인트</h2>
          <div className="space-y-6">
            {coreImplementations.map((impl, idx) => (
              <div key={impl.title} className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm">
                    {idx + 1}
                  </span>
                  {impl.title}
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-medium text-gray-700">문제: </span>
                    <span className="text-gray-600">{impl.problem}</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">해결: </span>
                    <span className="text-gray-600">{impl.solution}</span>
                  </div>
                  {impl.benefits && (
                    <div className="bg-gray-50 rounded-lg p-3 mt-2">
                      <p className="font-medium text-gray-700 mb-2">효과:</p>
                      <ul className="space-y-1">
                        {impl.benefits.map((b, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-600">
                            <span className="text-blue-500">•</span>
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {impl.errorHandling && (
                    <div className="bg-red-50 rounded-lg p-3 mt-2">
                      <p className="font-medium text-gray-700 mb-2">에러 처리:</p>
                      <div className="space-y-2">
                        {impl.errorHandling.map((e, i) => (
                          <div key={i} className="text-xs">
                            <code className="bg-white px-1 rounded text-red-600">{e.code}</code>
                            <span className="text-gray-500 mx-2">→</span>
                            <span className="text-gray-600">{e.meaning}: {e.action}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {impl.code && (
                    <div className="bg-gray-900 rounded-lg p-4 mt-3 overflow-x-auto">
                      <pre className="text-xs font-mono text-gray-100 whitespace-pre-wrap">{impl.code}</pre>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">주요 기능</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-xl border border-gray-200 p-5 hover:border-blue-200 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CefSharp 연동 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">C# (CefSharp) 연동</h2>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <p className="text-gray-600 mb-4">
              영수증 출력, 프린터 상태 체크, 세컨드 모니터 제어 등 하드웨어 기능은 C++ 개발자와 협업하여 연동.
              <code className="bg-gray-100 px-1 rounded text-blue-600 mx-1">CefSharp.PostMessage</code>로
              JS에서 POS 프로그램을 호출하고, 콜백으로 결과를 받는 구조입니다.
            </p>
            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-xs font-mono text-gray-100">{`// POS 주문 목록 갱신 요청
if (window?.CefSharp !== undefined) {
  CefSharp.PostMessage({ callPos: "getAdminOrderList" });
}

// 환경 분기 (개발/운영)
if (window?.CefSharp === undefined) {
  customLog('포스환경아님', result);  // 로컬 환경
}`}</pre>
            </div>
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex items-start gap-2 text-gray-600">
                <span className="text-blue-500">•</span>
                POS 프로그램에서만 동작하는 기능도 로컬에서 오류 없이 테스트 가능
              </div>
              <div className="flex items-start gap-2 text-gray-600">
                <span className="text-blue-500">•</span>
                환경별 로깅 처리로 디버깅 효율성 향상
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">기술 스택</h2>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            메인으로 돌아가기
          </Link>
        </div>
      </footer>
    </div>
  );
}
