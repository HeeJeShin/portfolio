"use client";

import { useState } from "react";

type QA = { q: string; points: string[] };
type Group = { id: string; title: string; tone?: "core" | "risk"; items: QA[] };

const INTRO = `안녕하세요, 프론트엔드 개발자로 지원한 신희제입니다.

저는 개발할 때 가장 중요하게 두는 게 두 가지인데, 하나는 도메인에 대한 이해이고 다른 하나는 커뮤니케이션입니다.

화면을 잘 그리는 것보다, 이 서비스가 어떤 도메인이고 사용자가 왜 이 기능을 필요로 하는지를 먼저 이해해야 제대로 된 걸 만들 수 있다고 생각합니다. 그래서 요청받은 내용 자체보다 '왜 이걸 요청했는지'에 집중하는 편입니다.

그리고 그 이해를 팀과 맞추는 커뮤니케이션을 중요하게 봅니다. 특히 비개발자와 일할 때는 기술 용어로만 말하면 전달이 안 되니까, 클로드 같은 AI로 간단한 화면을 빠르게 만들어서 그 화면을 보면서 이야기하는 방식으로 소통해왔습니다. 덕분에 불필요한 회의나 재작업을 많이 줄일 수 있었습니다.

실제로 스마트관광 같은 중개 서비스나 어드민을 개발할 때도 도메인을 먼저 파악하고 사업부서와 방향을 맞춰가며 진행했습니다. 이런 강점을 바탕으로 빠르게 적응해서 제품 개발에 기여하고 싶습니다. 감사합니다.`;

const MOTIVE = `PULE가 이미 출시된 서비스를 모바일로 확장하는 단계라는 점이 매력적이었습니다. 스마트관광에서 예약·결제·본인인증까지 실제 운영되는 중개 서비스의 전체 흐름을 직접 만들어봤고, 브라우저 호환성 같은 실사용 문제를 추적해 개선하는 데 보람을 느낍니다. 스택(Next.js·React·TS)도 겹쳐, 합류 후 바로 웹을 맡으면서 모바일도 함께 배워나갈 수 있겠다고 판단했습니다.`;

const LEAVE = `솔직히 말씀드리면, 한 회사에서 4년 넘게 일하다 보니 환경이 익숙해지면서 제가 조금씩 안주하게 되는 걸 느꼈습니다. 지금 상태로 계속 일할 수도 있었지만, 개발자로서 익숙한 곳에만 머무르면 더 이상 성장하기 어렵다고 생각했습니다. 여기서 더 있으면 계속 안주하게 될 것 같아서, 새로운 환경에서 다시 긴장감을 갖고 성장하고 싶어 이직을 결심했습니다.

(꼬리: "그럼 우리 회사에서도 안주하지 않나요?") 제가 안주하고 있다는 걸 스스로 알아차렸다는 것 자체가 중요하다고 생각합니다. 익숙해질 때쯤 새로 배우거나 개선할 지점을 찾는 편이고, 블루솔루션은 모바일 확장이나 성능 개선처럼 도전할 거리가 계속 있어서 안주할 틈이 없을 것 같습니다.`;

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
        q: "★ LCP 60% 어떻게 줄였나? (진짜 버전: API 의존 LCP요소)",
        points: [
          "LCP 요소 = 메인의 어드민 등록 영상 + 스와이프 이미지 배너 → 전부 API 응답에 의존해 그려짐",
          "① 기존엔 메인에서 안 쓰는 API까지 다 호출 → 네트워크 밀림. 첫 화면에 필요한 호출만 남김(공지 등은 뒤로)",
          "② 미사용 코드 99% 제거 → 번들↓ → 파싱·실행 빨라져 렌더 앞당김",
          "③ (여유되면) 히어로 이미지 preload/fetchpriority=high, lazy 미적용, WebP/CDN, 크리티컬 요청 우선·병렬",
          "재측정: Lighthouse 전후 비교로 60% 확인 — '감이 아니라 지표로'",
          "⚠️ ③은 실제로 한 것만. LCP 요소가 데이터 의존이라 API 정리가 인과로 성립",
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
          "서버 상태(비동기·stale·캐싱·무효화)=TanStack Query / 클라 상태(모달·필터·폼)=Zustand",
          "전역 하나에 다 넣으면 캐시 무효화 로직이 퍼져 결합도↑ → 책임 분리",
          "Redux 안 쓴 것도 이 규모엔 보일러플레이트 비용>이득이라",
          "키워드 3개: stale / 캐싱·무효화 내장 / 결합도",
        ],
      },
      {
        q: "수정하면 목록 어떻게 갱신? (솔직 답변!)",
        points: [
          "솔직히 그 프로젝트에선 '수정 후 화면 새로고침'으로 처리했음",
          "단점 인지: 전체 새로고침은 다른 데이터까지 다시 받고 깜빡임 발생",
          "→ 지금이라면 invalidateQueries로 그 목록 캐시만 무효화해 부분 갱신이 더 낫다",
          "⚠️ invalidate/Optimistic 실제 안 했으면 '했다'고 하지 말 것 (파고들면 무너짐)",
          "이 솔직+개선 프레임이 오히려 신뢰↑ (랭디 지적 정면 반박)",
        ],
      },
      {
        q: "테스트 216개 기준은?",
        points: [
          "유틸·훅·핵심 폼 로직 위주, 커버리지 숫자보다 회귀 방지가 목적",
          "TS 타입 시스템으로 런타임 에러 90%↓",
        ],
      },
      {
        q: "AI가 짠 테스트를 어떻게 신뢰? (자주 찌름)",
        points: [
          "① 실제 동작 직접 확인 → 테스트 통과 여부와 실제 동작이 일치하는지 봄(불일치=테스트가 잘못됨)",
          "② AI에 가드레일 선행: 공통 컴포넌트·함수 규칙·훅을 내가 먼저 만들고 CLAUDE.md에 규칙 정의",
          "→ AI 산출물이 내 공통 요소를 제대로 썼는지/임의로 바꿨는지 중점 확인",
          "핵심 로직은 직접 읽고, 정형적 부분은 동작 확인으로 커버 (전부 읽는다/안 읽는다 둘 다 말하지 말 것)",
          "➕ 업그레이드: 코드를 일부러 깨뜨려 테스트가 실패하는지 확인(가짜 테스트 거름) — 실제 할 때만",
        ],
      },
      {
        q: "컴포넌트 재사용/디자인시스템 개선 경험?",
        points: [
          "DynamicForm(동적 폼+Zod 검증)·DataTable을 packages/shared로 분리해 재사용",
          "디자이너 없이 진행 → 도메인 분석 후 UI 가이드 페이지로 화면 규칙 표준화",
          "이 가이드로 사업부서와 회의하며 방향 합의",
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
      {
        q: "웹푸시 크로스브라우저 분기는 왜? (모바일 근거)",
        points: [
          "웹푸시 = Service Worker(백그라운드) + Notification/Push API 조합",
          "권한 요청(Notification.requestPermission)은 user gesture 안에서만",
          "iOS Safari는 16.4+ & 홈스크린 PWA 추가 시에만 푸시 지원",
          "→ 표준 API지만 지원·권한이 브라우저마다 달라 feature detection으로 분기",
        ],
      },
      {
        q: "모노레포(Turborepo+pnpm)는 왜? (어드민)",
        points: [
          "apps/user·apps/admin·packages/shared 3-tier — 타입·컴포넌트·로직 공유",
          "pnpm workspace: 의존성 심볼릭 링크로 중복 설치 제거·디스크 절약",
          "Turborepo: 변경된 패키지만 빌드/캐시(incremental) → CI 시간↓",
          "→ PULE 웹+RN앱 코드 공유 구조와 직결되는 경험 (역질문 연결)",
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
  {
    id: "H",
    title: "H. 모바일·PWA (HomeCare — RN 대비 근거)",
    tone: "core",
    items: [
      {
        q: "모바일 환경 대응 경험? (RN 아니어도)",
        points: [
          "HomeCare: 홈펌프 항암제 자가관리 웹앱 (Next.js 16/React 19)",
          "웹푸시(하루 3회 체크 알림), PWA, Safari/Chrome/PWA 환경별 알림 권한 처리",
          "PDF 내보내기(의료진 제출용), 응급 연락처 즉시 연결",
          "→ RN 실무는 없어도 '모바일 사용 환경 문제'는 직접 대응해봄",
        ],
      },
      {
        q: "AI(Claude) 활용 + 검증 방식? (JD 요건)",
        points: [
          "Claude Design으로 기획서 먼저 만들어 의료진과 화면으로 소통",
          "생성 코드는 직접 읽고 → 테스트로 동작 검증 → 이해 못 하면 반영 안 함",
          "CLAUDE.md로 팀 컨벤션 정의 → 결과물 일관성, 테스트/리포팅 자동화",
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
  "(확인) 공고엔 'PULE 모바일 앱'으로 나오는데, 웹 서비스명(pule.co.kr)도 PULE인가요?",
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

type Mock = { q: string; a: string[]; tip: string };
const MOCK: Mock[] = [
  {
    q: "1. 간단한 자기소개 (강점 위주)",
    a: [
      "안녕하세요, 도메인 이해와 커뮤니케이션이 강점인 프론트엔드 개발자 신희제입니다.",
      "화면을 그리는 것보다 이 서비스가 어떤 도메인이고 사용자가 왜 이 기능을 필요로 하는지를 먼저 이해하려 하고, 요청받은 내용보다 '왜 요청했는지'에 집중합니다.",
      "비개발자와 일할 땐 AI로 화면을 빠르게 만들어 그 화면을 보며 소통해 회의·재작업을 줄여왔습니다. 스마트관광·어드민에서도 도메인을 먼저 파악하고 사업부서와 방향을 맞춰 진행했습니다. 이런 강점으로 빠르게 기여하고 싶습니다.",
    ],
    tip: "이직 얘기는 넣지 말고 강점으로만 닫기. 물으면 그때 답변.",
  },
  {
    q: "2. 이직 사유 / (꼬리) 여기서도 안주하지 않나요?",
    a: [
      "솔직히, 한 회사에서 4년 넘게 일하다 보니 익숙해지면서 조금씩 안주하게 되는 걸 느꼈습니다. 개발자로서 익숙한 곳에만 머무르면 성장이 어렵다고 생각해, 새 환경에서 다시 긴장감을 갖고 성장하고 싶어 이직을 결심했습니다.",
      "(꼬리 방어) 제가 안주하고 있다는 걸 스스로 알아차렸다는 것 자체가 중요하다고 생각합니다. 익숙해질 때쯤 새로 배우거나 개선할 지점을 찾는 편이고, 블루솔루션은 모바일 확장·성능 개선처럼 도전거리가 계속 있어 안주할 틈이 없을 것 같습니다.",
    ],
    tip: "'주변 개발자도 권했다'는 빼기. '안주할 틈 없다'로 회사와 연결해 닫기.",
  },
  {
    q: "3. LCP를 60% 어떻게 줄였나? (구체적으로)",
    a: [
      "메인 화면의 가장 큰 요소가 어드민 등록 영상과 스와이프 이미지 배너였는데, 전부 API 응답에 의존해 그려졌습니다. 그래서 그 요소들의 페인트 시점이 곧 LCP였고, 데이터가 늦으면 LCP도 늦어졌습니다.",
      "기존엔 메인에서 안 쓰는 API까지 다 호출해 네트워크가 밀렸는데, 마이그레이션하며 첫 화면에 필요한 호출만 남기고 공지 같은 비크리티컬은 뒤로 미뤘습니다. 거기에 미사용 코드를 걷어내 번들도 가벼워져 파싱·실행이 빨라졌고요.",
      "결과적으로 가장 큰 콘텐츠가 더 일찍 페인트됐고, Lighthouse로 전후를 측정해 60% 개선을 확인했습니다. 감이 아니라 지표로요.",
    ],
    tip: "'API 정리가 왜 LCP를?' → LCP 요소가 데이터 의존이라 성립. 안 한 최적화는 지어내지 말 것.",
  },
  {
    q: "4. React Query와 Zustand를 왜 나눴나?",
    a: [
      "서버 상태와 클라이언트 상태는 성질이 달라서 나눴습니다. 서버 상태는 비동기고 시간이 지나면 낡아서(stale) 캐싱·리페치·중복제거·무효화가 필요한데, TanStack Query가 이걸 내장합니다. 목록·상세·테이블이 여기 해당했고요.",
      "모달·필터·폼 임시값처럼 서버와 동기화할 필요 없는 순수 UI 상태는 가볍고 provider도 필요 없는 Zustand에 뒀습니다. selector로 필요한 값만 구독해 리렌더도 막고요.",
      "한 스토어에 다 넣으면 캐싱·무효화 로직을 직접 만들어야 하고 컴포넌트로 새어 결합도가 올라갑니다. Redux는 보일러플레이트가 크고 서버 캐싱이 없어 이 규모엔 비용이 더 컸습니다.",
    ],
    tip: "키워드 3개: stale / 캐싱·무효화 내장 / 결합도.",
  },
  {
    q: "5. (꼬리) 수정하면 목록을 어떻게 최신으로?",
    a: [
      "솔직히 그 프로젝트에선 수정 후 화면을 새로고침하는 방식으로 처리했습니다. 동작은 됐지만, 전체 새로고침은 다른 데이터까지 다시 받고 깜빡이는 단점이 있어요.",
      "그래서 지금이라면 invalidateQueries로 그 목록 캐시만 무효화해 부분만 다시 받는 방식이 더 낫다고 생각합니다.",
    ],
    tip: "invalidateQueries·Optimistic 실제로 안 했으면 '했다'고 하지 말 것. 이 솔직+개선 프레임이 오히려 신뢰↑.",
  },
  {
    q: "6. 본인 코드를 어떻게 검증하고 PR 올리나?",
    a: [
      "세 단계로 검증합니다. ① 타입 선행 — 타입을 잡아놓아 잘못된 데이터 접근은 빌드 단계에서 걸러집니다.",
      "② Vitest 단위 테스트 — 제가 테스트할 케이스를 정의하고 Claude Code로 코드를 빠르게 짠 뒤 결과를 직접 확인합니다. CLAUDE.md에 규칙을 정해 '테스트 해줘' 한 번에 테스트가 돌고 산출물로 문서화되게 만들어 팀이 같은 기준으로 검증하게 했습니다.",
      "③ 엣지 케이스 수동 확인 — 성공 케이스만이 아니라 빈 값·에러 응답·네트워크 실패·크로스 브라우저(특히 Safari)까지 확인하고 PR을 올립니다.",
    ],
    tip: "면접관이 콕 집는 '엣지 케이스'를 꼭 포함. '저는 3단계로'로 뼈대 먼저.",
  },
  {
    q: "7. (꼬리) AI가 짠 테스트를 어떻게 신뢰하나?",
    a: [
      "무조건 믿지 않습니다. 첫째, 실제 동작을 직접 확인해서 테스트 통과 여부와 실제 동작이 일치하는지 봅니다. 통과했는데 실제로 안 되면 거기서 걸립니다.",
      "둘째, 애초에 AI가 자유롭게 못 하도록 공통 컴포넌트·함수 규칙·훅을 제가 먼저 만들어두고 CLAUDE.md에 규칙을 정의합니다. 그래서 AI 산출물이 제 공통 요소를 제대로 썼는지, 임의로 바꿨는지를 중점 확인합니다.",
      "핵심 로직은 직접 읽고, 정형적인 부분은 동작 확인으로 커버합니다.",
    ],
    tip: "전부 읽는다/안 읽는다 둘 다 말하지 말 것. (업그레이드) 코드를 일부러 깨뜨려 테스트가 실패하는지 확인 — 실제 할 때만.",
  },
  {
    q: "8. Safari 결제/로그인 문제 어떻게 해결? ★",
    a: [
      "기획이 로그인 유지였는데 iOS Safari에서만 금방 풀렸습니다. Chrome·안드로이드는 정상이었고요. '특정 브라우저에서만'이라는 점에서 스토리지 정책을 의심했고, 쿠키 만료를 확인하니 너무 일찍 사라지고 있었습니다. 원인은 Safari ITP가 스크립트로 심은 쿠키 수명을 7일로 제한하는 정책이었습니다.",
      "그래서 쿠키 하나에만 의존하지 않고 localStorage·메모리에 함께 두어 유지되게 했습니다. localStorage는 XSS 우려가 있었지만, 액세스 토큰 수명이 1시간이고 만료되면 리프레시로 재발급하는 구조라 노출 위험이 제한적이라 판단했습니다.",
      "마지막으로 iOS 실기기에서 시간이 지나도 로그인 유지·결제 완료까지 반복 확인했습니다.",
    ],
    tip: "'원인을 어떻게 찾았나'(범위 좁히기)를 꼭 넣기. ITP 용어 쓰기. 저장 방식 2중/3중 일관되게.",
  },
  {
    q: "9. RN 실무 경험 없는데 괜찮나?",
    a: [
      "실무 경험은 없습니다, 솔직히. 다만 학원에서 RN 프로젝트를 해본 적은 있고, 무엇보다 React 개발자로 입사했는데도 회사 상황에 맞춰 JSP를 맡아 실무로 배워 끝까지 완주한 경험이 있습니다. 그래서 필요한 스택은 책임지고 배워 마무리하는 데 자신이 있습니다.",
      "RN도 웹 React와 컴포넌트 개념은 같고 DOM 대신 네이티브 컴포넌트를 쓰는 정도로는 이해하고 있어 완전히 처음은 아닙니다. 이렇게 미리 방향을 알려주시면 출근 전까지 준비할 시간도 있어서, 바로 투입되더라도 빠르게 학습해 합류하겠습니다.",
    ],
    tip: "핵심 키워드 '완주·책임지고'. 백엔드 먼저 꺼내지 말 것. '합류하겠다'로 단정.",
  },
  {
    q: "10. 궁금한 점 있으세요? (역질문)",
    a: [
      "① 수습 3개월 동안은 웹 운영과 RN 신규 개발 중 어느 쪽에 더 무게가 실릴까요? 미리 준비해두고 싶어서요.",
      "② PULE 앱이 RN 신규 구축이라 하셨는데, 웹 코드베이스와 컴포넌트·타입을 얼마나 공유하나요? 모노레포로 가는지 궁금합니다. (저는 어드민에서 Turborepo 모노레포를 해봤습니다)",
      "(마무리) 오늘 말씀 들어보니 제 중개 서비스·결제·성능 경험이 PULE에 바로 쓰일 것 같아 더 하고 싶어졌습니다. 감사합니다.",
    ],
    tip: "2개만 묻고 마무리 멘트로 관심 있게 닫기. 연봉·복지만 묻지 말 것.",
  },
];

const toneRing: Record<"core" | "risk", string> = {
  core: "border-blue-200 bg-blue-50",
  risk: "border-amber-200 bg-amber-50",
};

type Tab = "intro" | "mock" | "qa" | "reverse";

export default function BlueSolutionPage() {
  const [tab, setTab] = useState<Tab>("intro");

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="sticky top-0 z-10 border-b border-gray-200 bg-white/90 px-5 pt-3 backdrop-blur">
        <h1 className="text-lg font-bold">블루솔루션(PULE) 면접 치트시트</h1>
        <p className="text-xs text-gray-500">
          통합본(기술 위주) · 면접 가는 길에 폰으로 · 신희제
        </p>
        <div className="mt-3 flex gap-1">
          {(
            [
              ["intro", "자기소개·동기"],
              ["mock", "모의면접"],
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

        {tab === "mock" && (
          <>
            <section className="mb-4 rounded-2xl border border-blue-200 bg-blue-50 p-4">
              <h2 className="mb-2 text-sm font-bold text-blue-700">
                🎭 모의면접 실전 모델답변 (이걸로 연습)
              </h2>
              <p className="text-[13px] leading-relaxed text-gray-700">
                핵심 3원칙 — ① &quot;뭘 했나&quot;에서 멈추지 말고 &quot;왜/어떻게&quot;까지 · ②
                &quot;저는 N가지로&quot;로 뼈대 먼저 · ③ 모르면 솔직하게(안 한 걸 했다고 X)
              </p>
            </section>
            <div className="space-y-2.5">
              {MOCK.map((m, i) => (
                <details
                  key={i}
                  className="group rounded-2xl border border-gray-200 bg-white"
                >
                  <summary className="flex cursor-pointer list-none items-start gap-2 px-4 py-3 text-[15px] font-bold marker:hidden">
                    <span className="mt-0.5 text-blue-600 transition-transform group-open:rotate-90">
                      ▶
                    </span>
                    <span>{m.q}</span>
                  </summary>
                  <div className="border-t border-gray-100 px-5 py-3">
                    {m.a.map((para, j) => (
                      <p
                        key={j}
                        className="mb-2 text-[14px] leading-relaxed text-gray-800 last:mb-0"
                      >
                        {para}
                      </p>
                    ))}
                    <p className="mt-3 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-[13px] leading-relaxed text-amber-800">
                      ⚠️ {m.tip}
                    </p>
                  </div>
                </details>
              ))}
            </div>
            <p className="mt-6 text-center text-xs text-gray-400">
              내가 결정 → 내가 검증 · 대안→기준→결론 · 지표로 닫기
            </p>
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
