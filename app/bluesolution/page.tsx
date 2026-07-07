"use client";

import { useState } from "react";

type QA = { q: string; points: string[] };
type Group = { id: string; title: string; tone?: "core" | "risk"; items: QA[] };

const INTRO = `안녕하세요, 프론트엔드 개발자 신희제입니다. 이미 출시된 서비스를 모바일로 확장해 나간다는 점과, 매장과 이용자를 잇는 중개라는 도메인이 명확하다는 점이 마음에 들어서 지원하게 됐습니다.

저는 스마트관광 플랫폼에서 예약부터 결제까지 실제 운영되는 중개 서비스를 만들어봤고, JSP를 Next.js로 마이그레이션하면서 성능을 지표로 개선한 경험도 있습니다. 클로드 코드도 업무에 적극적으로 도입해서 일해 왔고, 토이 프로젝트이긴 하지만 기획 단계까지 클로드 디자인으로 진행해 본 경험도 있고요.

어드민 페이지를 디자이너 없이 개발했을 때는, 클로드로 가이드 화면을 먼저 만들어서 사업 부서에 전달하면서 커뮤니케이션을 원활하게 풀어낸 경험도 있습니다.

블루솔루션에서 일하게 된다면 이런 경험들을 바탕으로, 검색 유입이나 결제처럼 실제 트래픽 위에서 생기는 문제들을 풀어가며 빠르게 제품 개발에 기여하고 싶습니다. 감사합니다.`;

const MOTIVE = `PULE가 이미 출시된 서비스를 모바일로 확장하는 단계라는 점이 매력적이었습니다. 스마트관광에서 예약·결제·본인인증까지 실제 운영되는 중개 서비스의 전체 흐름을 직접 만들어봤고, 브라우저 호환성 같은 실사용 문제를 추적해 개선하는 데 보람을 느낍니다. 스택(Next.js·React·TS)도 겹쳐, 합류 후 바로 웹을 맡으면서 모바일도 함께 배워나갈 수 있겠다고 판단했습니다.`;

const LEAVE = `이즈피엠피에서 4년간 여러 도메인을 빠르게 경험한 건 큰 자산이었습니다. 다만 지자체·행사 프로젝트 특성상 납품·종료되면 제가 개선을 이어가기 어려운 경우가 많았습니다. 저는 한 번 만들고 끝내는 것보다, 운영되는 서비스의 지표를 계속 개선하는 일에서 더 보람을 느낀다는 걸 알게 됐습니다. 그래서 이미 출시돼 트래픽이 흐르고 모바일로 확장하는 PULE에서, 제 결제·성능·검증 경험을 지속적으로 이어가고 싶어 지원했습니다.

(꼬리: "현 직장에선 왜 못 하나?") 이즈피엠피는 프로젝트 단위 수주 구조라 서비스가 종료되면 이어가기 어려운 특성이 있습니다. 회사 문제라기보다, 제가 하고 싶은 일과 조직의 방향이 다른 것에 가깝습니다.`;

const GROUPS: Group[] = [
  {
    id: "A",
    title: "A. 스마트관광 — 중개+결제 (JD 최적합)",
    tone: "core",
    items: [
      {
        q: "Safari 토큰 유실 어떻게 해결? (주도한 결정)",
        points: [
          "Safari ITP가 쿠키 수명을 제한해 결제 직전 토큰이 사라지는 문제 발견",
          "트레이드오프: 쿠키만=7일 뒤 삭제 / localStorage만=XSS·서버접근 불가 → 둘을 이중 저장",
          "검증: 실기기(iOS Safari·Chrome)에서 로그인 유지·결제 완료까지 반복 확인",
          "결제 팝업 차단 이슈는 리다이렉트 방식으로 전환",
        ],
      },
      {
        q: "비즈니스 임팩트를 고려했나?",
        points: [
          "결제 직전 토큰 유실 = 결제 실패 = 매출 이탈 → 임팩트 큼",
          "둘 다 완벽하지 않아 이중화로 안정성·접근성 모두 확보",
          "닫기: '실기기에서 결제 완료를 반복 검증해 확인했습니다'",
        ],
      },
      {
        q: "결제 로직 백엔드 분리 제안 (아키텍처 주도)",
        points: [
          "결제 상태가 프론트에 몰려, 프론트가 신뢰 못 할 검증까지 떠안는 구조",
          "정합성(결제는 서버가 진실의 출처) 기준으로 백엔드 분리 제안·재설계",
          "프론트는 UI에, 결제 검증 책임은 서버로",
        ],
      },
    ],
  },
  {
    id: "B",
    title: "B. O2MEET 마이그레이션 — 성능 (LCP 60%↓)",
    tone: "core",
    items: [
      {
        q: "1차 실패 → 2차 성공, 뭘 바꿨나? (베스트 실패담)",
        points: [
          "1차: 타입 정의 없이 중간 도입 → 런타임 버그 / MUI+css 혼용 충돌",
          "2차: API 응답 타입 선행 정의(컴파일 단계 차단) + Tailwind 통일",
          "결과: LCP 60%↓, 미사용 코드 99%↓, CLS 100%↓ (Lighthouse 측정)",
        ],
      },
      {
        q: "★ LCP 60% 어떻게 줄였나? (측정→병목→조치→재측정)",
        points: [
          "① SSR 도입: 큰 요소를 서버에서 미리 렌더 → LCP 시점을 JS 실행 이전으로 당김",
          "② 미사용 코드 99% 제거: 번들 축소 → 파싱·실행 부담↓",
          "③ 스타일 통일(MUI→Tailwind): 렌더 블로킹 CSS 감소",
          "재측정으로 검증 — '감이 아니라 지표로'",
          "🔍 next/image·next/font·dynamic 실제로 했으면 추가, 안 했으면 지어내지 말 것",
        ],
      },
      {
        q: "CLS 100% 개선이란?",
        points: [
          "이미지·영역에 사이즈 예약(width/height, aspect-ratio)으로 레이아웃 밀림 제거",
        ],
      },
    ],
  },
  {
    id: "C",
    title: "C. 어드민 — 코드 검증·상태관리 (JD 직결)",
    tone: "core",
    items: [
      {
        q: "★ 본인 코드 어떻게 검증하나? (JD 핵심)",
        points: [
          "① 타입 선행 — API 응답 타입부터 정의해 잘못된 흐름을 컴파일 단계에서 차단",
          "② 자동 테스트 — 유틸·훅·핵심 로직 Vitest 216개로 회귀 방지, 결과 자동 문서화",
          "③ 엣지케이스 수동 — 빈값·에러·네트워크 실패·Safari까지 실기기 확인",
          "AI 코드도 예외 없이 같은 검증, 이해 못 한 코드는 반영 안 함",
          "닫기: 'JD의 엣지케이스까지 확인 후 PR이 이미 몸에 밴 방식'",
        ],
      },
      {
        q: "React Query와 Zustand/Redux 왜 나눴나?",
        points: [
          "서버 상태(캐시·동기화·Optimistic)=TanStack Query / 클라 상태(UI·폼)=Zustand",
          "전역 하나에 다 넣으면 캐시 무효화 로직이 퍼져 결합도↑ → 책임 분리",
          "Redux 안 쓴 것도 이 규모엔 보일러플레이트 비용>이득이라",
        ],
      },
      {
        q: "테스트 216개 기준은?",
        points: [
          "유틸·훅·핵심 폼 로직 위주, 커버리지 숫자보다 회귀 방지가 목적",
          "TS 타입 시스템으로 런타임 에러 90%↓",
        ],
      },
    ],
  },
  {
    id: "D",
    title: "D. 개발 우선순위 / 트레이드오프 (개발자 화법!)",
    tone: "core",
    items: [
      {
        q: "개발할 때 뭘 우선 적용하나?",
        points: [
          "'되돌리기 어려운 순서'로: ① 데이터계약·타입 ② 검증가능성(테스트) ③ 성능(측정 후 병목만) ④ DX·가독성",
          "요약: '나중에 고치는 비용이 큰 것부터'",
        ],
      },
      {
        q: "⚠️ PM스럽게 답하지 말 것 (이전 피드백)",
        points: [
          "❌ '유저 가치가 커서 / 임팩트가 커서 / 반응이 좋아서'",
          "✅ '리렌더·번들·결합도 기준으로 판단, 지표(LCP·에러율)로 검증'",
          "답변 끝: '…를 지표로 확인했습니다 / …를 기준으로 판단했습니다'로 닫기",
        ],
      },
    ],
  },
  {
    id: "E",
    title: "E. React Native (솔직 + 학습의지)",
    tone: "risk",
    items: [
      {
        q: "★ RN 실무 경험 있나?",
        points: [
          "해본 경험은 있지만 오래돼서, 하게 된다면 다시 공부하고 진행해야 함 (솔직하게)",
          "React 개발자로 입사했는데도 회사 상황 맞춰 JSP 프로젝트를 바로 맡아 완주한 경험 있음",
          "RN이 JSP와 같은 건 아니지만, React에서 JSP까지 책임지고 해냈는데 RN이라고 못 할 이유 없다",
          "필요한 스택은 공부해서 책임지고 마무리 → PULE 모바일도 빠르게 배워 합류",
          "⚠️ 모르는 걸 아는 척하지 말 것",
        ],
      },
      {
        q: "RN과 React 웹 차이 아는 대로?",
        points: [
          "DOM 대신 네이티브 컴포넌트(View/Text), 스타일은 CSS 아닌 StyleSheet",
          "네비게이션·브릿지 개념 (기본만이라도 준비)",
        ],
      },
    ],
  },
  {
    id: "WHY",
    title: "★★ 왜 그 기술? — 기술적 원리 (내 약점 정조준)",
    tone: "risk",
    items: [
      {
        q: "쿠키+localStorage 이중 저장은 왜?",
        points: [
          "쿠키: 요청마다 서버로 자동 전송(인증 편함), httpOnly면 XSS 방어. 단 Safari ITP가 스크립트 쿠키를 7일로 캡핑",
          "localStorage: 만료 없음(지속성)but 서버 자동전송 X + XSS 노출",
          "→ 쿠키(전송)+localStorage(지속) 장점만 합침. 로드 시 쿠키 없으면 localStorage서 복구",
        ],
      },
      {
        q: "팝업→리다이렉트는 왜?",
        points: [
          "window.open은 user activation(방금 클릭한 순간) 안에서만 팝업 허용",
          "await fetch 뒤에 열면 activation 소멸 → '임의 팝업'으로 차단",
          "→ 같은 탭 location.href 리다이렉트로 전환해 회피",
        ],
      },
      {
        q: "TS 타입 선행 + Zod는 왜?",
        points: [
          "TS는 컴파일 때만 검사, 런타임엔 type erasure로 사라짐",
          "타입 선행=빌드 단계서 잘못된 접근 차단 (any로 넣으면 효과 0 → 1차 실패 원인)",
          "Zod=런타임에 실제 응답 검증(계약위반 차단) + z.infer로 TS 타입 자동생성",
          "→ 컴파일 안전(TS)+런타임 안전(Zod) 두 경계 다 막음",
        ],
      },
      {
        q: "Tailwind는 왜? (MUI 대신)",
        points: [
          "MUI(CSS-in-JS): 런타임에 JS로 스타일 계산·주입 → 런타임 비용+번들↑",
          "기존 .css와 specificity(특이성)·주입순서 충돌 → 예측불가 오버라이드",
          "Tailwind: 빌드타임 클래스 생성+미사용 purge → 런타임 비용 0, 번들 가벼움",
          "→ 런타임 비용 감소가 LCP 개선에도 기여",
        ],
      },
      {
        q: "Query+Zustand 분리는 왜? (Redux 아님)",
        points: [
          "서버상태=비동기+stale → 캐싱·재검증·dedup·무효화 필요 → TanStack Query가 내장",
          "Redux로 하면 로딩/에러/캐시/무효화 전부 수동 리듀서 → 보일러플레이트 폭증",
          "Zustand: provider 없이 selector로 필요값만 구독→리렌더 방지 (클라 UI상태용)",
          "Optimistic: 응답 전 캐시 먼저 갱신→실패시 onError서 rollback",
        ],
      },
      {
        q: "SSR/SSG/CSR + LCP 원리",
        points: [
          "CSR: JS 다운→파싱→실행 후 렌더 → LCP 늦고 크롤러 콘텐츠 못 봄",
          "SSR: 완성 HTML 즉시 페인트(LCP↑)+이후 hydration. TTFB는 늘 수 있음",
          "SSG: 빌드타임 HTML+CDN → TTFB 최소. 갱신은 재빌드/ISR",
          "LCP개선: SSR 즉시페인트 + 번들축소(메인스레드↓) + 렌더블로킹 CSS↓(CSSOM 전엔 페인트 안 함)",
        ],
      },
    ],
  },
  {
    id: "TS",
    title: "★ 트러블슈팅 (디버깅 '과정'을 보여주기)",
    tone: "core",
    items: [
      {
        q: "문제를 어떻게 접근하나? (메타 질문)",
        points: [
          "재현 → 범위 좁히기 → 가설 검증 → 최소 수정 → 재발 방지 순",
          "'어디까지는 정상인가'를 찾아 범위를 좁힘 (특정 브라우저·데이터에서만?)",
          "로그·도구로 가설 검증 → 최소 범위만 고침 → 문서화·공통화로 재발 방지",
          "⚠️ '고친 방법'만 말하지 말고 '범위를 좁혀간 과정'을 반드시 넣을 것",
        ],
      },
      {
        q: "★ Safari에서만 로그인 풀리고 결제 실패 (베스트)",
        points: [
          "현상: iOS Safari에서만 로그인 풀리고 결제 실패, Chrome·안드로 정상",
          "좁히기: '특정 브라우저만' → 스토리지 정책 의심 → 쿠키 만료 확인 → Safari ITP가 원인",
          "해결: 토큰 쿠키+localStorage 이중 저장 (트레이드오프로 설명)",
          "검증: iOS 실기기 시간경과 후 로그인 유지·결제완료 반복 재현",
          "재발방지: Safari 크로스브라우저 체크를 배포 전 항목으로",
        ],
      },
      {
        q: "결제창 팝업이 일부 환경에서 안 뜸",
        points: [
          "원인: 비동기(API 응답) 이후 window.open → 사용자 제스처로 인정 안 돼 차단",
          "해결: 리다이렉트 방식으로 전환해 차단 회피",
        ],
      },
      {
        q: "마이그레이션 후 런타임 에러 다발 (O2MEET 1차)",
        points: [
          "좁히기: 공통점이 API 응답 다루는 지점 → 타입 없이 도입해 응답 형태 불일치",
          "해결(2차): API 응답 타입 선행 정의 → 컴파일 단계 차단",
          "검증: 런타임 에러 90%↓",
        ],
      },
      {
        q: "원인을 모를 때 정직 프레임",
        points: [
          "'정상인 경우와 비정상인 경우를 나눠 공통점을 찾는 방식으로 접근'",
          "정답을 몰랐어도 '과정'을 보여주면 점수가 된다",
        ],
      },
    ],
  },
  {
    id: "F",
    title: "F. 도메인·렌더링 (SSR/SSG/SEO)",
    tone: "core",
    items: [
      {
        q: "중개 플랫폼에서 FE가 신경 쓸 것?",
        points: [
          "검색 유입(SEO), 결제 안정성, 로딩 성능, 매장/이용자 두 사용자 흐름",
        ],
      },
      {
        q: "검색 유입 늘리려면 FE에서?",
        points: [
          "SSR/SSG로 크롤러 대응, 시맨틱 마크업, 메타데이터/OG 태그, 구조화 데이터",
        ],
      },
      {
        q: "SSR vs SSG vs CSR 언제? (자주 나옴)",
        points: [
          "자주 바뀌는 개인화=SSR/CSR, 정적 콘텐츠(매장소개)=SSG",
          "trade-off로 설명 — 데이터 갱신 주기·SEO 필요성 기준",
        ],
      },
    ],
  },
  {
    id: "G",
    title: "G. 성향·협업",
    tone: "core",
    items: [
      {
        q: "실패 경험과 배운 점?",
        points: ["O2MEET 1차 실패 → 원인 회고 → 2차 수치로 증명 (베스트)"],
      },
      {
        q: "비개발자와 소통 방법?",
        points: [
          "화면을 먼저 만들어 대화 — '요청 내용'보다 '요청 이유'에 집중",
          "AI로 단순 화면 빠르게 만들어 회의·재작업 감소",
        ],
      },
      {
        q: "단점은?",
        points: [
          "'신중함'을 근거로 설득하는 주도로 재정의",
          "'결정 전 근거를 확인해 느려 보일 수 있지만, 한번 정하면 수치·테스트로 검증해 재작업을 줄인다'",
        ],
      },
    ],
  },
];

const REVERSE: string[] = [
  "PULE 모바일 앱은 RN 신규 구축인데, 웹 코드베이스와 얼마나 공유하나요? (모노레포/컴포넌트 공유)",
  "수습 3개월 동안 기대하시는 역할은 웹 운영인가요, 모바일 신규인가요?",
  "현재 웹의 SSR/SSG 비중과, 성능 지표 중 지금 가장 개선하고 싶은 부분은?",
  "코드리뷰·PR 문화는? PR 때 검증(테스트/엣지케이스)을 어느 정도 요구하시나요?",
  "팀에서 AI 도구(Claude Code 등)를 어느 정도 활용하시나요?",
  "매장용 vs 이용자용 화면 중 FE 개발 비중이 더 큰 쪽은?",
  "이 포지션에서 1년 안에 기대하는 성장/성과는 어떤 모습인가요?",
  "(마무리) 오늘 얘기 들으니 제 결제·성능·검증 경험이 PULE에 바로 쓰일 것 같아 더 하고 싶어졌습니다.",
];

const CHECK: string[] = [
  "1분 자기소개 + 지원동기 입으로 3번",
  "LCP 60% '어떻게' 3개(SSR·번들·스타일) — 못 답하면 치명적",
  "SSR/SSG/CSR 선택 기준 trade-off로",
  "React Query vs Zustand 역할 분리",
  "RN 솔직 답변 — 모른다 인정 + 학습의지 + JSP 완주 이력",
  "스마트관광 결제·Safari 이슈 꼬리질문",
  "말버릇: '유저가 좋아할 것 같아서' ❌ → '지표로 확인' ✅",
];

const toneRing: Record<"core" | "risk", string> = {
  core: "border-blue-200 bg-blue-50",
  risk: "border-amber-200 bg-amber-50",
};

type Tab = "intro" | "qa" | "reverse";

export default function BlueSolutionPage() {
  const [tab, setTab] = useState<Tab>("intro");

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="sticky top-0 z-10 border-b border-gray-200 bg-white/90 px-5 pt-3 backdrop-blur">
        <h1 className="text-lg font-bold">블루솔루션(PULE) 면접 치트시트</h1>
        <p className="text-xs text-gray-500">면접 가는 길에 폰으로 보는 용 · 신희제</p>
        <div className="mt-3 flex gap-1">
          {(
            [
              ["intro", "자기소개·동기"],
              ["qa", "예상질문"],
              ["reverse", "역질문·체크"],
            ] as [Tab, string][]
          ).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={`flex-1 rounded-t-lg border-b-2 px-3 py-2 text-sm font-semibold transition-colors ${
                tab === key
                  ? "border-blue-600 text-blue-700"
                  : "border-transparent text-gray-400"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </header>

      <main className="mx-auto w-full max-w-xl px-4 pb-20 pt-5">
        {tab === "intro" && (
          <>
            <section className="mb-5 rounded-2xl border border-blue-200 bg-blue-50 p-4">
              <h2 className="mb-2 text-sm font-bold text-blue-700">
                🎤 자기소개 (구어체 · 이걸로 연습)
              </h2>
              {INTRO.split("\n\n").map((para, i) => (
                <p key={i} className="mb-2 text-[15px] leading-relaxed last:mb-0">
                  {para}
                </p>
              ))}
            </section>

            <section className="mb-4 rounded-2xl border border-gray-200 bg-white p-4">
              <h2 className="mb-2 text-sm font-bold text-gray-900">💡 지원동기 (30초)</h2>
              <p className="text-[14px] leading-relaxed text-gray-700">{MOTIVE}</p>
            </section>

            <section className="mb-4 rounded-2xl border border-amber-200 bg-white p-4">
              <h2 className="mb-2 text-sm font-bold text-amber-700">🔁 이직 사유</h2>
              {LEAVE.split("\n\n").map((para, i) => (
                <p
                  key={i}
                  className="mb-2 text-[14px] leading-relaxed text-gray-700 last:mb-0"
                >
                  {para}
                </p>
              ))}
            </section>

            <section className="rounded-2xl border border-blue-200 bg-white p-4">
              <h2 className="mb-2 text-sm font-bold text-blue-700">
                🎯 JD ↔ 내 무기 (한 줄)
              </h2>
              <ul className="space-y-1.5 text-[13.5px] leading-relaxed text-gray-700">
                <li>중개+결제 → 스마트관광 (KCP 결제·본인인증)</li>
                <li>성능 최적화 → O2MEET LCP 60%↓</li>
                <li>코드 검증/PR → 어드민 Vitest 216개</li>
                <li>모바일 환경 → HomeCare 웹푸시·PWA·크로스브라우저</li>
                <li>AI 활용+검증 → Claude Code, CLAUDE.md 컨벤션</li>
              </ul>
            </section>
          </>
        )}

        {tab === "qa" && (
          <div className="space-y-3">
            {GROUPS.map((g) => (
              <div
                key={g.id}
                className={`rounded-2xl border ${
                  g.tone ? toneRing[g.tone] : "border-gray-200 bg-white"
                }`}
              >
                <h2 className="px-4 py-3 text-sm font-bold">{g.title}</h2>
                <div className="space-y-2 px-3 pb-3">
                  {g.items.map((it, i) => (
                    <details
                      key={i}
                      className="group rounded-xl border border-gray-200 bg-white"
                    >
                      <summary className="flex cursor-pointer list-none items-start gap-2 px-4 py-3 text-[15px] font-semibold marker:hidden">
                        <span className="mt-0.5 text-blue-600 transition-transform group-open:rotate-90">
                          ▶
                        </span>
                        <span>{it.q}</span>
                      </summary>
                      <ul className="space-y-1.5 px-5 pb-4 pl-9">
                        {it.points.map((p, j) => (
                          <li
                            key={j}
                            className="relative text-[14px] leading-relaxed text-gray-700 before:absolute before:-left-3.5 before:text-gray-400 before:content-['–']"
                          >
                            {p}
                          </li>
                        ))}
                      </ul>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "reverse" && (
          <>
            <section className="mb-5 rounded-2xl border border-blue-200 bg-blue-50 p-4">
              <h2 className="mb-2 text-sm font-bold text-blue-700">
                ❓ 내가 할 역질문 (2~3개 골라)
              </h2>
              <ul className="space-y-2 text-[14px] leading-relaxed text-gray-700">
                {REVERSE.map((r, i) => (
                  <li
                    key={i}
                    className="relative pl-4 before:absolute before:left-0 before:text-blue-500 before:content-['▸']"
                  >
                    {r}
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
              <h2 className="mb-2 text-sm font-bold text-amber-700">
                ✅ 벼락치기 체크 (이것만)
              </h2>
              <ul className="space-y-2 text-[14px] leading-relaxed text-gray-700">
                {CHECK.map((c, i) => (
                  <li
                    key={i}
                    className="relative pl-6 before:absolute before:left-0 before:text-amber-600 before:content-['□']"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </section>

            <p className="mt-6 text-center text-xs text-gray-400">
              📌 이력서에 적힌 내 프로젝트를 내 언어로 · 대안→기준→결론 · 내가 결정→내가 검증
            </p>
          </>
        )}
      </main>
    </div>
  );
}
