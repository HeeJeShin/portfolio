"use client";

import Link from "next/link";
import { ProjectHeader } from "@/app/_components/ProjectHeader";

const techStack = ["JSP/JSTL", "jQuery", "JavaScript (ES6+)", "KCP 결제", "RESTful API"];

const achievements = [
  { label: "결제 방식", value: "동적 처리", desc: "어드민 설정값 기반 결제수단 선택" },
  { label: "API 연동", value: "15+", desc: "상품/주문/결제/사용자 API" },
  { label: "개발 기간 단축", value: "2주 → 3-5일", desc: "등록솔루션 재사용" },
];

const coreImplementations = [
  {
    title: "서버 버그 우회 - 중복 데이터 제거",
    problem: "서버에서 ordersCartGoodsItemList에 동일 아이템이 중복 반환되는 버그",
    solution: "클라이언트에서 Set 자료구조로 중복 제거 후 처리",
    impact: "결제 오류 및 중복 주문 방지",
    code: `// createOrder 함수 내 중복 제거 로직
cartData.ordersCartGoodsList?.forEach(goods => {
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
});`,
  },
  {
    title: "복합결제 상태 관리",
    problem: "여러 결제수단(카드+현금, 카드+제로페이)으로 나눠 결제 시 상태 관리 복잡",
    solution: "mixPayInfo 객체로 결제 상태 추적, 부분 성공/실패 시 롤백 처리",
    flow: [
      "paymentRequestProcess: 개별 결제 요청",
      "mixpaySuccessCallback: 부분 결제 성공 시 콜백",
      "completeMixPayment: 모든 결제 완료 후 최종 확정",
      "cancelMixPayment: 실패 시 이미 결제된 건 전체 취소",
    ],
  },
  {
    title: "상품 유효성 검증 로직",
    problem: "판매기간, 사용여부, 회원유형별 판매대상 등 다중 조건 검증 필요",
    solution: "validateGoods 함수로 조건별 검증 로직 통합",
    checks: [
      "useYn === 'N' 상품 제외",
      "판매기간(periodStartDt ~ periodEndDt) 검증",
      "회원 유형(userPartCd)별 판매대상 필터링",
      "goodsSubList(신규) + typeCd2(레거시) 양쪽 호환",
    ],
  },
];

const asyncPattern = {
  title: "비동기 패턴 통일",
  problem: "레거시 콜백 기반 코드와 신규 async/await 코드 혼재",
  solution: "동일 기능에 대해 두 패턴 모두 제공하여 점진적 마이그레이션 지원",
  examples: [
    { callback: "saveCancelOrderUsingCallback(data, callback)", async: "saveCancelOrder(data) // Promise" },
    { callback: "callGoodsApi(goodsNo, callbackFn)", async: "callCartIdData(cartOrderNo) // async" },
  ],
};

const registrationCommonization = {
  title: "등록 솔루션 공통화",
  problem: "바이어/참관객/전시자 등 화면마다 요구사항이 다름 (필수입력, 카테고리, 검증 등)",
  solution: "공통 로직은 JS로 분리, 화면별 차이는 카테고리 코드로 추상화",
  impact: "신규 행사 등록페이지 개발기간 2주 → 3-5일 단축",
  modules: [
    { file: "register.js", desc: "등록폼 공통 (저장, 이메일검증, 약관)" },
    { file: "hub_common.js", desc: "카테고리/국가코드 동적 생성" },
    { file: "validateField.js", desc: "검증 유틸 (isEmpty, checkEmail)" },
  ],
  code: `// 바이어 등록 - 5개 카테고리 사용
commonCategory('MAD', 'radio', $('#MADBOX'), true)    // 유사행사 참여경험
commonCategory('MAK', 'checkbox', $('#MAKBOX'), false) // 주요 사업분야
commonCategory('MAP', 'checkbox', $('#MAPBOX'), false) // 관심분야

// 참관객 등록 - 3개만 사용 (같은 함수, 다른 코드)
commonCategory('MAP', 'checkbox', $('#MAPBOX'), false)

// 저장도 공통 함수로 처리
saveCheckedCategory('MADBOX', 'MAD', 'radio', 'companyDetailCategory')
postUserData(userBody, 'N', 'UAS001', 'UPC001', userId, firstNm)`,
};

const subProjects = [
  {
    name: "북키즈콘 (BookizCon)",
    period: "2024 ~ (매년 9월 초중순)",
    url: "https://bookizcon.com",
    desc: "어린이 놀이/교육 전시 및 글로벌 컨퍼런스 플랫폼",
    features: ["VOD 컨텐츠 시청", "입장티켓/컨퍼런스 구매", "사전등록 할인 및 쿠폰"],
  },
  {
    name: "SPP",
    period: "2024.04 - 2024.10 (종료)",
    url: null,
    desc: "만화, 숏폼 콘텐츠 스타트업 비즈니스 미팅 및 전시회",
    features: ["세분화된 관심 분야 선택", "콘텐츠 전시/홍보 페이지", "비즈매칭 솔루션"],
  },
  {
    name: "기타 다수 행사",
    period: "",
    url: null,
    desc: "애드아시아, 세계 환경의날, AI 글로벌 포럼, 한국 테마관광박람회, 콘텐츠 IP마켓 등 다수의 행사 프로젝트 진행",
    features: [],
  },
];

export default function O2MeetPage() {
  return (
    <div className="min-h-screen bg-white">
      <ProjectHeader
        title="O2MEET 온라인 행사 플랫폼"
      />

      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Hero */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-white border border-gray-300 text-gray-700 rounded-full text-sm font-medium">
              2022.05 - 현재
            </span>
            <span className="text-gray-400">|</span>
            <span className="text-gray-600 text-sm">프론트엔드 5, 백엔드 4, 기획 4</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            O2MEET 티켓 구매/결제 시스템
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
            온라인 전시관, 컨퍼런스, 티켓 구매 및 등록 서비스의
            <strong className="text-[#191979]"> 상품/결제 프론트엔드</strong>를 담당했습니다.
            복잡한 결제 플로우와 API 연동, 마이페이지 구현을 포함합니다.
          </p>
        </section>

        {/* 성과 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">성과</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {achievements.map((item) => (
              <div key={item.label} className="bg-white rounded-xl p-6 border border-gray-200 text-center">
                <p className="text-sm text-gray-600 mb-1">{item.label}</p>
                <p className="text-2xl font-bold text-[#191979] mb-1">{item.value}</p>
                <p className="text-xs text-gray-500">{item.desc}</p>
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
                  <span className="w-6 h-6 bg-[#191979] text-white rounded-full flex items-center justify-center text-sm">
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
                  {impl.impact && (
                    <div>
                      <span className="font-medium text-gray-700">효과: </span>
                      <span className="text-[#191979]">{impl.impact}</span>
                    </div>
                  )}
                  {impl.flow && (
                    <div className="bg-gray-50 rounded-lg p-3 mt-2">
                      <p className="font-medium text-gray-700 mb-2">처리 플로우:</p>
                      <ul className="space-y-1">
                        {impl.flow.map((f, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-600">
                            <span className="text-blue-500">{i + 1}.</span>
                            <code className="text-xs bg-gray-100 px-1 rounded">{f}</code>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {impl.checks && (
                    <div className="bg-gray-50 rounded-lg p-3 mt-2">
                      <p className="font-medium text-gray-700 mb-2">검증 항목:</p>
                      <ul className="space-y-1">
                        {impl.checks.map((c, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-600">
                            <span className="text-blue-500">•</span>
                            {c}
                          </li>
                        ))}
                      </ul>
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

        {/* 비동기 패턴 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{asyncPattern.title}</h2>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="space-y-3 text-sm mb-4">
              <div>
                <span className="font-medium text-gray-700">문제: </span>
                <span className="text-gray-600">{asyncPattern.problem}</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">해결: </span>
                <span className="text-gray-600">{asyncPattern.solution}</span>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <p className="font-medium text-gray-700 mb-3">동일 기능, 두 가지 패턴 제공:</p>
              <div className="space-y-2">
                {asyncPattern.examples.map((ex, i) => (
                  <div key={i} className="grid md:grid-cols-2 gap-2 text-xs">
                    <code className="bg-gray-100 px-2 py-1 rounded text-gray-600">{ex.callback}</code>
                    <code className="bg-blue-100 px-2 py-1 rounded text-[#191979]">{ex.async}</code>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 등록 솔루션 공통화 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{registrationCommonization.title}</h2>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="space-y-3 text-sm mb-4">
              <div>
                <span className="font-medium text-gray-700">문제: </span>
                <span className="text-gray-600">{registrationCommonization.problem}</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">해결: </span>
                <span className="text-gray-600">{registrationCommonization.solution}</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">효과: </span>
                <span className="text-[#191979] font-medium">{registrationCommonization.impact}</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 mb-4">
              <p className="font-medium text-gray-700 mb-3">공통 모듈:</p>
              <div className="space-y-2">
                {registrationCommonization.modules.map((m, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <code className="bg-gray-100 px-2 py-1 rounded text-gray-700 font-medium">{m.file}</code>
                    <span className="text-gray-600">{m.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-xs font-mono text-gray-100 whitespace-pre-wrap">{registrationCommonization.code}</pre>
            </div>
          </div>
        </section>

        {/* 서브 프로젝트 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">참여 프로젝트</h2>
          <div className="space-y-4">
            {subProjects.map((project) => (
              <div key={project.name} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">{project.name}</h3>
                    <p className="text-sm text-gray-500">{project.period}</p>
                  </div>
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-[#191979] text-white rounded-full text-sm font-medium hover:bg-blue-500 transition-colors"
                    >
                      사이트 방문 →
                    </a>
                  )}
                </div>
                <p className="text-gray-600 mb-3">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.features.map((f) => (
                    <span key={f} className="px-2 py-1 bg-blue-100 text-[#191979] text-xs rounded-full font-medium">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">기술 스택</h2>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-blue-100 text-[#191979] text-xs rounded-full font-medium"
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
          <Link href="/" className="inline-flex items-center gap-2 text-[#191979] hover:text-[#191979] font-medium transition-colors">
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
