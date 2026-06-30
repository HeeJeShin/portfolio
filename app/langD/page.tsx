"use client";

import { useState } from "react";

type QA = { q: string; points: string[] };
type Group = { id: string; title: string; tone?: "core" | "risk"; items: QA[] };

const INTRO = `안녕하세요, 프론트엔드 개발자 신희제입니다. 소통을 기반으로 한 랭디의 방향성과, 도메인이 명확하다는 점이 마음에 들어서 지원하게 됐습니다.

저는 JSP를 Next.js로 마이그레이션한 경험이 있고, 클로드 코드도 업무에 적극적으로 도입해서 일해 왔습니다. 토이 프로젝트이긴 하지만 기획 단계까지 클로드 디자인으로 진행해 본 경험도 있고요.

어드민 페이지를 디자이너 없이 개발했을 때는, 클로드로 가이드 화면을 먼저 만들어서 사업 부서에 전달하면서 커뮤니케이션을 원활하게 풀어낸 경험도 있습니다.

랭디에서 일하게 된다면 이런 경험들을 바탕으로 빠르게 제품 개발에 기여하고 싶습니다. 감사합니다.`;

const GROUPS: Group[] = [
  {
    id: "A",
    title: "A. React→Next.js 마이그레이션 (주요 업무)",
    tone: "core",
    items: [
      {
        q: "1차는 왜 실패했고, 2차에서 무엇을 바꿨나요?",
        points: [
          "1차: 타입 정의 없이 중간 도입 → 런타임 버그 다발 / MUI+css 혼용 충돌",
          "2차: API 응답 타입 선행 정의(컴파일 단계 차단) + Tailwind로 스타일 통일",
          "결과: LCP 60%↓, 미사용 코드 99%↓, CLS 100%↓ (Lighthouse 측정)",
        ],
      },
      {
        q: "운영 중인 서비스를 멈추지 않고 점진 이관하려면?",
        points: [
          "투트랙으로 간다 — 운영 중인 서비스는 그대로 두고, 핵심 기능부터 먼저 새 스택으로 이관",
          "실제로 O2MEET 마이그레이션을 이 방식으로 진행 (서비스 유지하면서 핵심부터 단계적 전환)",
          "기능 단위로 쪼개 옮기고, 측정으로 회귀 확인",
        ],
      },
      {
        q: "CSR/SSR/렌더링 전략은 페이지별로 어떻게 판단?",
        points: [
          "공개·SEO 중요 → SSR / 인증 후 대시보드성 → CSR 위주",
          "(솔직) App Router ISR·스트리밍은 더 깊게 적용해보고 싶은 영역",
        ],
      },
    ],
  },
  {
    id: "B",
    title: "B. AI / Claude Code (우대)",
    tone: "core",
    items: [
      {
        q: "'그냥 코드 생성'과 뭐가 다른가요?",
        points: [
          "단계별 활용: 구현 방법 장단점 먼저 비교 → 구현 → 테스트 → 문서화",
          "CLAUDE.md로 팀 컨벤션 정의 → 결과물 일관성",
          "AI 제안은 항상 비판적으로 검증 후 적용 — '가장 중요한 건 검증'",
        ],
      },
      {
        q: "Claude Design으로 기획서를 만든다는 게?",
        points: [
          "목적: 의료진 없이도 환자가 자기 의료기록(수치)을 이해하게 답해주는 것",
          "의료진에게 수치 해석 지식을 PDF로 받아 → AI가 그 기준대로 답하도록 구성",
          "솔직히 구현은 Claude Code가 더 편했음 — Claude Design은 '이런 화면으로 나온다'를 의료진에게 보여줄 문서·시안용",
          "임상 연구라 서비스화는 미정, 문서 자체가 필요해서 진행한 케이스",
        ],
      },
    ],
  },
  {
    id: "C",
    title: "C. 성능 · 상태관리",
    items: [
      {
        q: "LCP 60% 개선, 무엇이 병목이었나요?",
        points: [
          "Lighthouse로 병목 식별 → 미사용 코드 제거·번들 정리·스타일 통일",
          "감이 아니라 수치로 검증",
        ],
      },
      {
        q: "서버/클라이언트 상태를 어떻게 분리?",
        points: [
          "서버 상태 = TanStack Query(캐시·Optimistic Update)",
          "클라 상태 = Zustand",
          "전역 상태 남용 → 결합도 상승 문제를 피하려는 선택",
        ],
      },
    ],
  },
  {
    id: "D",
    title: "D. 디자인 시스템 / 공용 컴포넌트",
    items: [
      {
        q: "디자이너 없이 UI 가이드를 먼저 설계했다고요?",
        points: [
          "도메인 분석 선행 → 가이드 페이지로 화면 규칙 표준화 → 사업부서와 합의",
          "DynamicForm(동적 폼+Zod 검증)·DataTable을 packages/shared로 분리해 재사용",
        ],
      },
    ],
  },
  {
    id: "E",
    title: "E. ⚠️ 약점 / 갭 (정직하게)",
    tone: "risk",
    items: [
      {
        q: "1:1·메타버스 25인 실시간 세션이 핵심인데, 실시간(WebRTC/WebSocket) 경험은?",
        points: [
          "솔직히 실시간 화상/소켓 경험은 없다(웹 푸시/알림 수준) → 인정",
          "낯선 도메인 초기 제품을 빠르게 학습해 만든 이력으로 적응력 어필",
          "다만 개념은 이해하고 있다 ↓",
          "WebSocket — 한 번 연결을 맺으면 서버가 먼저 데이터를 밀어줄 수 있는 양방향 통신. 채팅·알림·상태 동기화처럼 '서버가 실시간으로 보내줘야 하는' 데 씀",
          "WebRTC — 영상·음성 같은 미디어를 브라우저끼리(P2P) 직접 주고받는 기술. 화상 세션처럼 지연이 적어야 하고 서버 안 거치고 바로 보낼 때",
          "시그널링 — WebRTC가 P2P로 연결되기 전, 서로 주소·코덱 정보를 먼저 교환하는 단계. 이건 WebRTC가 직접 안 하고 보통 WebSocket으로 처리함",
          "정리: 연결 맺을 때까진 소켓, 실제 영상·음성은 WebRTC. 실무에선 LiveKit·Agora 같은 SDK가 이걸 묶어서 추상화해줌",
        ],
      },
      {
        q: "교육 도메인 경험이 없는데?",
        points: ["의료·관광 등 새 도메인을 매번 학습해 초기 구축 → 도메인 진입에 강함"],
      },
    ],
  },
  {
    id: "F",
    title: "F. 컬처핏 / 협업",
    items: [
      {
        q: "끝까지 파고들어 해결한 경험은?",
        points: ["Safari ITP 토큰 유실·팝업 차단을 브라우저 동작 차이까지 분석해 해결"],
      },
      {
        q: "협업에서 본인의 강점은?",
        points: [
          "받은 일만 처리하지 않고 적극적으로 먼저 제안한다",
          "피드백을 적극적으로 수용해 내 안에 갇히지 않는다",
          "말보다 화면 — 디자인 가이드·시안을 먼저 만들어 보여주며 소통 (어드민 때 디자이너 없이 가이드 만들어 사업부서에 먼저 전달)",
        ],
      },
    ],
  },
];

const toneRing: Record<NonNullable<Group["tone"]>, string> = {
  core: "border-blue-200 bg-blue-50",
  risk: "border-amber-200 bg-amber-50",
};

// ── 과제 정리 (랭디 프론트엔드 과제) ──────────────────────────────
const ASSIGN_NOTE = `면접 직전 빠르게 보는 용. 막히면 "표시는 프론트 / 판단은 서버", "진짜는 하나" 로 돌아오면 됨.
⚠️ 스펙(스택·App Router·FSD권장·수업시간·언어색·버튼조건)은 README가 정한 것 / 그 외는 내 판단. 스펙을 "내가 정했다"고 말하지 말 것.`;

const ASSIGNMENT: { title: string; body: string }[] = [
  {
    title: "★ 빠른 개념 (헷갈리는 것)",
    body: `[분리 3축 — 섞지 말 것]
① 페이지(/mypage·/booking·/classroom) = 화면·라우트 → README가 정함
② FSD 계층(views→…→shared) = 코드 폴더 → README 권장 + 내 적용
③ 도메인 모델(lesson↔booking) = 데이터 모델 → 내 판단
· Q1-1이 묻는 건 ③. "계층 책임 분리"=②. "강의실/신청 페이지"=①.

[수강권 = 저장 안 하고 계산]
· 받은횟수 − 예약개수. 따로 저장하면 실제 예약수랑 어긋남(sync bug).
· ⚠️ "그냥 스테이트로 관리"라고 하면 반대 뜻. "예약 목록 하나만 상태로 두고 거기서 계산"이 맞음.

[FSD = 폴더 잡는 방법론]
· views→widgets→features→entities→shared, 위→아래로만 의존. 폴더 이름=책임.

[Zustand vs React Query(=TanStack Query)]
· ⚡ React Query = TanStack Query (같은 거!) 이름만 바뀜.
· React Query = 서버 데이터 담당. 캐시 + 자동 refetch·로딩/에러·중복요청 방지. 🪑도서관 책
· Zustand = 클라 데이터 담당. 서버 무관한 내 앱 값(테마·시계·폼선택). 훅으로. 🪑내 노트
· 왜 둘 다: 데이터가 두 종류라서. ⚠️ 서버 데이터를 Zustand에 복사 금지(동기화 버그 → "진짜는 하나").

[자주 쓰는 말]
· 트레이드오프 = 하나 얻으면 하나 포기. "정답이 아니라 득실 따져 골랐다".`,
  },
  {
    title: "1. 도메인 모델링 (핵심)",
    body: `Q1-1. lesson/booking 왜 분리?
→ 책임이 달라서. 수업=완료·결석 상태, 예약=누가 언제 신청·수강권 깎음 행위. 취소·재예약 생각해 두 모델로 나누고 외래키로 연결. (README가 시킨 거 아니라 내 모델링 판단.)

Q1-2. 잔여 수강권 관리?
→ 따로 저장 안 하고 계산. 규모상 무리 없고, 저장하면 실제 예약수랑 어긋날 위험. 정확성 우선.

Q1-3. 수업 상태 표현?
→ 둘로 나눔 — 서버가 정해 저장하는 상태(예약·완료·결석·취소) + 시간 지나면 저절로 바뀌는 단계(예습전·예습·수업중·복습). 단계는 프론트가 시작시각·현재시각 비교해 계산. (진짜 판단은 서버가 다시 검증.)

Q1-4. enum 대신 as const?
→ enum은 런타임 역매핑·트리셰이킹 불리. as const로 두고 union 뽑으면 타입안전 + 값 순회 둘 다.`,
  },
  {
    title: "2. 아키텍처 FSD (핵심)",
    body: `Q2-1. FSD + App Router?
→ app은 라우팅만, 페이지 조립은 views로. FSD pages가 Next 옛 라우터랑 이름 겹쳐서.

Q2-2. API가 feature/lib 깊이 import?
→ 방향(app→feature)은 정상. index 타면 "use client" UI까지 서버로 딸려와서, 검증 순수함수만 공유하려고 lib만 콕 집음.

Q2-3. 공통 UI 많이 만든 게 FSD 위반?
→ 아니, shared/ui가 FSD가 정한 공통 UI 자리. 규칙 하나: shared는 도메인 모름(색·라벨은 props로만). 도메인 박힌 LessonCard는 entities/lesson/ui에.

Q2-4. 재사용 가능한 구조는 어디에? (★README 평가 항목)
→ 셋으로 둠: ① shared/ui 프리미티브(Button·Card·Chip·Modal·RadioGroup) ② 순수 함수 lib을 서버·클라가 공유(슬롯·가용성·날짜 검증을 조회 때랑 예약 때 같은 함수로 → 안 어긋남, ⭐제일 강함) ③ config SSOT(정책·라벨·색맵·라우트, 한 곳 바꾸면 다 따라옴). + 패턴 재사용: RadioGroup을 언어·시간·선생님 카드에 다.`,
  },
  {
    title: "3. 비즈니스 로직 & 실시간 (핵심)",
    body: `Q3-1. 시간 로직 어느 계층?
→ (lesson, now) 받는 순수함수로 entities/lib에. 컴포넌트는 얇은 훅으로 호출만. now만 넣으면 테스트 결정적.

Q3-2. "지금"을 어떻게 공급?
→ 전역 useNow 하나, 타이머 1개만 돌려 모든 카드에 같은 "지금" 뿌림(useSyncExternalStore 구독). 카드 몇 개든 타이머 하나라 비용 일정.`,
  },
  {
    title: "4. 렌더링·데이터·캐싱 (가산점)",
    body: `🎯 이 섹션 = 내가 '첫 화면이 깜빡이거나 덜컹거리지 않게' 처리한 작업들.

Q4-1. 페이지별 렌더링?
→ 기준 "내용이 주소(필터·정렬)에 따라 달라지나?". 달라지는 목록은 서버가 데이터 미리 받아서(prefetch) 화면이랑 같이 보냄 → 처음부터 채워져 안 깜빡. 데이터 없는 강의실은 가볍게.

Q4-2. 첫화면 깜빡임 제거?
→ 서버가 미리 받아 보내도 브라우저가 못 알아보면 또 받아옴. 그래서 데이터에 이름표(캐시 키)를 붙여 서버·클라가 똑같이 맞춤. 이름표 만드는 함수를 한 곳(factory)에 둬 항상 동일.

Q4-3. Suspense 경계?
→ 깜빡이는 영역을 툴바 한 줄로 최소화(본문은 서버가 미리 챙김). 로딩 표시를 진짜 내용이랑 같은 높이로 만들어 화면 안 밀림.`,
  },
  {
    title: "5. 상태 경계 (단골)",
    body: `Q5-1. Query vs Zustand?
→ 네트워크=Query, 정렬·필터=URL, 순수 클라(테마·시계·폼언어)=Zustand, 잠깐=useState. 서버데이터는 Zustand에 절대 복사 안 함.

Q5-2. 정렬·필터 왜 URL?
→ 공유·북마크·새로고침 복원 가치. App Router가 서버에서 바로 읽어 첫화면 정확, Query 캐시키랑 1:1. 이상한 값은 기본값으로.

Q5-3. Zustand hydration?
→ Zustand엔 서버데이터 안 넣어서 mismatch 안 남.

Q5-4. 유저 값을 store에 두기도 하잖아요? 언제?
→ "복사 금지"는 자주 바뀌고 다시 받아오는 데이터 얘기. store가 맞는 것도 있음: ① 로그인 상태·토큰 ② 유저가 바꾸는 설정(테마·언어 — 이 과제도 언어는 Zustand) ③ 세션 내내 거의 안 바뀌는 기본정보. 기준: 자주 바뀜·재요청→Query / 세션 거의 고정·전역 즉시 읽기→store.`,
  },
  {
    title: "6. API·에러 (가산점)",
    body: `Q6-1. API 직접 + 에러 정규화?
→ Route Handler + db.json. 에러 모양 제각각이라 fetch 감싸는 한 곳에서 전부 ApiError로 통일. 화면은 코드만 보고 분기.

Q6-2. 예약 차단 상태코드?
→ 4xx를 둘로 — 400=요청 자체 잘못(영업시간 밖·기간 밖·필수값), 409=상태 충돌(선생님불가·이미참·내일정겹침·수강권소진). 사유별 code 문자열로. 화면+서버 두 군데서 막음.
숫자: 201생성·400잘못·404없음·409충돌·500서버.

Q6-3. JSON DB 동시성?
→ 한계 있음(read-modify-write race). 일부러 안 막고 한계만 명시 — 평가 대상은 프론트 에러처리지 파일 동시성 아님. 진짜 해결은 DB 트랜잭션이라 범위 밖.

Q6-4. 404/에러 페이지?
→ not-found.tsx(404+홈링크), error.tsx(에러 바운더리, reset() 재시도라 use client). 헤더는 루트 레이아웃에 둬 에러 화면에도 길 남김.`,
  },
  {
    title: "7. 폼·예약 흐름 (UX 가산점)",
    body: `Q7-1. 다단계 폼 상태? (언어 → 선생님 → 주제 → 날짜/시간 순서로 고름)
→ 언어만 Zustand에: 언어는 폼 입력이면서 동시에 페이지 테마 색까지 바꿈(폼 바깥까지 영향) → 어디서든 읽게 전역에 둠
→ 나머지(선생님·주제·날짜)와 제출 검증은 RHF+zod가 담당 (폼 안에서만 쓰는 값)
→ 언어 바뀌면 폼 리셋: 선생님·주제가 언어에 종속(영어 선생님은 일본어 못 가르침)이라, 언어를 바꾸면 아래 선택이 다 무효 → 처음부터 다시

Q7-2. 왜 스테퍼?
→ 선택이 순서대로 의존적(선생님 정해야 요일 나옴). 한 화면에 다 펼치면 헷갈림. 단, 주제 바꿔도 날짜·시간은 안 지움(선생님 종속이지 주제 무관).

Q7-3. 선생님 가능 요일만?
→ 기본 date input은 요일 제한 안 돼서 커스텀 달력. 가용성 순수함수 재사용 + 서버 2중 검증.

Q7-4. 슬롯 어디서 계산?
→ 서버. 순수함수 하나가 선생님시간 ∩ 영업시간 − 예약 − 점심 − 기간밖. 조회·예약검증이 같은 함수라 안 어긋남. 전체 예약목록은 클라에 안 내림.`,
  },
  {
    title: "8. 스타일·접근성·성능 (가산점)",
    body: `Q8-1. 언어 테마 색 전환?
→ 색 값은 과제 스펙. 내가 한 건 토큰으로 모아 data-language 속성 하나로 --color-primary 통째 전환. 런타임 비용 0.

Q8-2. 커스텀 라디오 접근성?
→ 네이티브 input radio 숨기고 라벨만 칩처럼. 방향키·스페이스·스크린리더 다 브라우저 기본으로. 커스텀 키보드 코드 0줄.

Q8-3. 성능 최적화?
→ Lighthouse 측정. 리렌더는 구조로(시계 하나·폼 uncontrolled·캐시키 일치). memo 남발 안 함 — 구조 먼저, 병목 보이면 그때.`,
  },
  {
    title: "9. 프론트 기초 (핵심 + 내 과제 연결)",
    body: `· useEffect — cleanup으로 타이머·구독 해제, 의존성 빠지면 stale. / 내 과제: 전역 시계 타이머 정리.
· controlled/uncontrolled — state가 값 가짐(리렌더) vs DOM이 가짐(ref). / RHF uncontrolled라 폼 리렌더 0.
· useSyncExternalStore — React 바깥 값(전역 시계)을 안전 구독(React18). useEffect로 하면 티어링 위험. / 전역 시계.
· useMemo/useCallback/memo — useMemo=계산 결과(값) 캐싱 / useCallback=함수 / memo=props 같으면 렌더 스킵. 남발 금지. / 무거운 배열변환만 useMemo.
· 리스트 key — index는 삽입·정렬 때 꼬임 → 안정적 id. / lesson.id.
· CSR/SSR/SSG/RSC — 브라우저/요청마다서버/빌드시/서버전용·번들0. / URL 종속 목록은 SSR prefetch.
· 하이드레이션/미스매치 — 서버가 '죽은 그림' 먼저, 브라우저서 React가 기능 붙여 살림. 서버≠브라우저면 경고. 원인: 시각·랜덤·localStorage. / 시간 UI는 살아난 뒤 갱신.
· Web Vitals(LCP/CLS/INP) — 큰콘텐츠/레이아웃튐/반응속도. / 치수·자리표시자로 CLS, prefetch로 LCP.
· 디바운스 — 연달아 입력 시 멈출 때까지 기다렸다 한 번만. / 과제 정렬·필터는 토글이라 안 씀.
· div onClick vs button — button은 포커스·키보드·스크린리더 기본. / 클릭 span→button, 모달 Esc·포커스 트랩.
· 번들 — analyzer 측정, 라우트 코드분할, use client 최소화, dynamic import.
· type vs interface — 확장·선언병합=interface, 유니온·유틸=type. / as const 유니온 위주.`,
  },
  {
    title: "10. 기술 선택",
    body: `Q10-1. 왜 Next14/React18?
→ 채용사 스택 정합(버전은 자유라 내 선택). 들어가서 바로 맞물리게. React18 표준 API만.

Q10-2. 왜 Zustand?
→ 전역 클라 상태가 테마·시계·폼언어 정도라 Redux는 과함. 서버캐싱은 Query가. Zustand는 프로바이더 없이 훅 구독이라 서버컴포넌트랑 잘 맞음.`,
  },
  {
    title: "11. 압박·약점",
    body: `Q11-1. level 뺐다 넣음?
→ 다른 개념. 뺀 건 수업 난이도 태그, 넣은 건 학생↔선생님 실력 매칭. 부활 아니라 정제.

Q11-2. 선호시간·학습목적 안 씀?
→ 역할 나눔. 실력=필터, 선호시간=추천(별·상단정렬, 필터 아님), 학습목적=표시까지만.

Q11-3. 테스트가 단위뿐?
→ 68개 단위를 비즈니스 로직(시간·슬롯·가용성·추천·달력)에 집중. 컴포넌트·E2E는 다음 우선순위.

Q11-4. 신규 빈 화면 버그?
→ 의도. 0회면 빈 화면 맞음. 평가용 데모 데이터 넣어둠. 잔여수도 같은 데이터에서 계산돼 일관.

Q11-5. 이전 프로젝트 왜 FSD 안 씀? (⚠️ "도메인 때문" 금지 — 단계·규모·인원)
→ 1인·속도 우선이라 타입별 구조. FSD 이득은 여럿일 때 큼, 혼자면 분류비용만. 한계도 겪음 → 협업·확장이면 FSD.`,
  },
  {
    title: "12. 협업·기획 (README 평가 항목)",
    body: `Q12-1. 마크업 UI/UX 개선?
→ 비활성 버튼 이유 툴팁("10시간 전부터"), 빈 화면→안내+신청 버튼, 정적 마크업→실제 데이터·현재시각 연결, 클릭 span→button·모달 키보드.

Q12-2. 디자이너 색 vs 대비?
→ 대립 말고 양쪽 만족안: 큰 색 원본 + 작은 글씨만 진하게. 감 아닌 대비 수치로 합의.

Q12-3. 기획 없는 모바일 왜?
→ 범위 초과 맞음. 근데 비용 통제 — 데스크탑 영향 0, 페이지 2개라 햄버거로. "왜 + 비용통제" 같이.

Q12-4. 판단 어떻게?
→ 모든 결정을 선택지·장단점·이유로 PR 기록. 모호한 도메인은 랭디 실제 상품 보고 재해석.

Q12-5. 선생님 정보 왜 넣음?
→ "수업 선택"이 모호 → 랭디 실제 보니 선생님이 가능시간 여는 구조 → "선생님 선택 + 가능시간 예약"으로 재해석. 관찰 근거.`,
  },
  {
    title: "13. 역질문 / 자기객관화",
    body: `[역질문] 실제 코드도 FSD? 계층 규칙 lint 강제? / 서버·클라 상태 경계 팀 합의? / 디자인시스템 접근성 기준? / 프론트가 먼저면 API 계약 어떻게?

[개선점] 계층 의존 eslint-plugin-boundaries 강제 / 컴포넌트·E2E 보강 / 글로벌 에러 토스트 / 예약 낙관적 업데이트 / 실제 DB면 수강권 인덱싱·트랜잭션.`,
  },
  {
    title: "14. 교과서 vs 나 (먼저 꺼내면 강함)",
    body: `· 리렌더: 교과서=memo / 나=구조 먼저, memo는 측정 후
· 외부 구독: 교과서=useEffect / 나=useSyncExternalStore (tearing 방지)
· CSR/SSR: 섞되 classroom은 dynamic 정상 (억지 static 오답)
· Next 마이그레이션 원칙(점진·use client leaf)을 이 과제에서 실천
· 상태 도구: Query/URL/Zustand 3축, 서버데이터 복사 X
· TS: as const→union (enum 회피)
· 레거시: 정적 마크업을 데이터 연결로 점진 개선`,
  },
  {
    title: "15. AI를 어떻게 부렸나 (스파게티 방지·검증)",
    body: `· 설계 먼저(코드 말고): 도메인·계층·상태경계를 선택지·장단점·이유로
· SSOT 강제: "가정 바뀌어도 한 곳만 고치게" (정책·색·검증 단일지점)
· 과한 추상화 차단: "모양 같다고 합치지 말고 의미 같을 때만"
· 계층 배치 지정: 로직은 lib 순수함수, 컴포넌트는 결과만
· 검증 게이트: 매번 typecheck·test·build·실측, 단위 68개
· 결정 기록: PR_BODY 결정 1~36
· 종합: 골격 정하고·선 긋고·게이트 지킴. AI=빠른 손, 안전망은 가이드+검증.`,
  },
  {
    title: "16. 과제 요구사항 대응",
    body: `Q16-1. 종료시간 계산 / 활성화 조건?
→ 값(25/30/20분·10시간전)은 과제 스펙. 내가 한 건 entities/lib 순수함수로 계산 + phase·버튼을 다른 축으로.

Q16-2. 폴더 길찾기?
→ 계층 이름=책임, 의존 한 방향, 같은 종류 같은 자리(lib·model·ui·api). 위치로 책임 짐작.

Q16-3. FSD 적용?
→ 알고 채택. pages→views, API deep import — 두 곳만 이유 남기고 조정.

Q16-4. PR 의사결정 형식?
→ PR_BODY에 결정 1~36을 ①선택지 ②장단점 ③이유로. 어느 거 찍어도 3단계로 답함.

Q16-5. PR vs 문서?
→ PR은 열되 설명을 PR_BODY.md로 연결 — 36개 구조화 + 코드와 버전관리.`,
  },
  {
    title: "17. 웹소켓 / WebRTC (공고 연관 — 개념만)",
    body: `· 웹소켓: 한 연결로 양방향 push. 처음 HTTP로 연결(Upgrade 핸드셰이크) 후 열어둠. 폴링보다 효율.
· 끊기면: 상태 명시(connecting/connected/disconnected) + 지수 백오프 재연결 + heartbeat. 재연결 시 놓친 메시지 동기화.
· WebRTC: 미디어는 P2P 직접, 시그널링(SDP offer/answer·ICE)은 보통 웹소켓으로. NAT면 TURN.
· 솔직: 구축 경험 없어도 원리 이해 → 끊김·재연결 엣지 많아 AI 코드 검증하려면 원리부터.`,
  },
  {
    title: "부록 — 한 문장 치트시트",
    body: `· 분리 3축: ①페이지=README ②FSD계층 ③도메인모델=내판단. Q1-1은 ③
· 도메인: 세션·예약 분리(FK 연결), 잔여·점유는 저장 안 하고 계산
· 상태: 서버 저장 상태 + 시각 계산 단계 분리, 버튼은 독립 임계값
· 실시간: 전역 타이머 하나로 모두에게 같은 "지금"
· 시간 처리: 표시는 프론트(매순간 바뀜), 진짜 판단은 서버 재검증
· 아키텍처: FSD 5계층 단방향, pages는 views로
· 공통 UI: shared/ui는 FSD 정상. 규칙="shared는 도메인 모름"
· 재사용: ①shared/ui ②순수함수 서버·클라 공유 ③config SSOT
· 상태 경계: Query=서버 / URL=필터정렬 / Zustand=테마·시계 / useState=일시
· 렌더링: URL 종속은 서버 prefetch + 캐시키 일치로 깜빡임 0
· 에러: ApiError로 통일 / 4xx를 400(요청)·409(충돌), 사유별 코드
· 404·에러: not-found.tsx·error.tsx(reset, use client), 헤더는 루트 레이아웃
· 색상: 큰 색 원본, 작은 글씨만 진한 토큰
· 종료시간: 언어별 25/30/20 매핑 한 곳에서 계산 (값은 스펙)
· 실제 API면: 계산이 기본, 정합성은 DB 트랜잭션, 성능은 측정 후
· 이전 프로젝트: 1인·속도라 타입별, 한계 겪음 → 협업이면 FSD
· AI 가이드: 설계 먼저 → SSOT 강제 → 의미 같을 때만 공통화 → 검증 게이트 → 결정 기록
· 웹소켓: 한 연결 양방향 push / 끊기면 상태명시+지수백오프 / 미디어=WebRTC·시그널링=웹소켓
· 태도: 정확성 먼저, 최적화는 측정 후, 결정은 다 기록`,
  },
];

// ── 스킬 숙련도 + 기술 선택 이유 ──────────────────────────────
const SKILL_LEVELS: { group: string; tone: "core" | "mid" | "low"; items: { name: string; note: string }[] }[] = [
  {
    group: "주력 (자신 있게)",
    tone: "core",
    items: [
      { name: "React / Next.js / TypeScript", note: "실무 전반 · 마이그레이션·SSR·상태설계까지 직접" },
      { name: "Tailwind CSS (테일윈드)", note: "최근 거의 다 Tailwind · 디자인 토큰 전환" },
      { name: "Claude Code", note: "일상 워크플로 · 단 항상 검증해서 적용" },
    ],
  },
  {
    group: "써봤음 (근거 있게)",
    tone: "mid",
    items: [
      { name: "TanStack Query (탠스택 쿼리) / Zustand (주스탄드)", note: "서버상태 vs 클라상태 역할 분리" },
      { name: "Vitest (비테스트)", note: "단위 테스트 216개 · E2E는 다음 단계" },
      { name: "Turborepo (터보레포) / pnpm (피엔피엠)", note: "어드민 모노레포 직접 구성 · 공유 패키지" },
      { name: "Docker (도커)", note: "multi-stage(멀티 스테이지)·standalone(스탠드얼론)·non-root(논 루트) Dockerfile 직접" },
      { name: "GitLab CI/CD", note: ".gitlab-ci.yml · dev/prod 분리 배포" },
      { name: "JavaScript", note: "비동기·이벤트루프 등 동작 원리 이해" },
    ],
  },
  {
    group: "얕게 인정 (깊은 척 X)",
    tone: "low",
    items: [
      { name: "Styled Components (스타일드 컴포넌트)", note: "예전에 써봄 · 최근엔 Tailwind 위주라 깊진 않다" },
      { name: "ArgoCD (아르고씨디)", note: "Blue-Green(블루그린)·Kustomization 적용 · 깊은 운영은 아님" },
      { name: "Google Gemini (제미나이)", note: "4J 해커톤 도면 분석 연동 1회 · 깊진 않다" },
    ],
  },
];

const WHY_NOTE = `솔직히 선택 동기엔 "검증된 최신 스택을 적용해보자"도 있었습니다. 다만 실제로 써보니 아래처럼 문제가 줄고 협업이 편해졌어요 — 그 부분을 말하면 됩니다.`;

const WHY: QA[] = [
  {
    q: "왜 TanStack Query(탠스택 쿼리)를 선택했나?",
    points: [
      "문제: 여러 화면이 같은 서버 데이터를 각자 fetch → 중복 요청 + 화면마다 로딩/에러 처리 중복 + 데이터가 서로 어긋남",
      "해결: Query가 캐시를 공유하고 자동 refetch로 동기화 → 한 곳에서 관리, 중복 제거",
      "선택 이유: 서버 데이터를 전역 store에 복사하면 동기화 버그가 남 → 서버상태=Query, 클라상태=Zustand로 역할을 명확히 나눔",
      "협업: 데이터 패칭이 한 패턴으로 표준화돼 팀원이 새 화면 붙일 때 똑같이 따라옴",
    ],
  },
  {
    q: "왜 Zustand(주스탄드)? (Redux 아니고)",
    points: [
      "문제: 전역으로 둘 게 테마·시계·폼언어 정도뿐인데 Redux는 보일러플레이트가 과함",
      "해결: 프로바이더 없이 훅으로 구독 → 가볍게, 서버 컴포넌트와도 충돌 적음",
      "역할: 서버 캐싱은 Query가 / Zustand는 순수 클라 값만 (서버데이터 복사 금지)",
    ],
  },
  {
    q: "왜 pnpm(피엔피엠) + Turborepo(터보레포)? (모노레포)",
    points: [
      "문제: user/admin 앱이 공통 컴포넌트·타입을 따로 들고 있어 똑같은 걸 두 번 고쳐야 했음",
      "해결: packages/shared로 공통 코드 분리 → 한 곳만 고치면 양쪽 반영",
      "pnpm: 패키지를 복사 대신 연결해서 디스크 절약 + 설치 빠름 / Turborepo: 캐시 빌드로 반복 빌드 빠름",
      "협업: 새 팀원도 '공통은 shared' 한 규칙만 알면 됨",
    ],
  },
  {
    q: "왜 Vitest(비테스트)? (Jest 아니고)",
    points: [
      "문제: 손으로 검증하던 반복 작업에서 휴먼 에러가 남",
      "해결: 비즈니스 로직에 단위 테스트 216개 → 회귀를 자동으로 잡고, 결과를 자동 문서화해 동료가 활용",
      "Vitest 이유: TS·ESM(import/export) 코드를 설정 거의 없이 빠르게 테스트 + Jest와 문법 호환이라 러닝커브 낮음",
      "※ 트랩 주의: Next 프로젝트인데 왜 Vitest? → Vitest는 '테스트 돌릴 때만' Vite 엔진을 쓰는 거고, 앱이 Vite일 필요는 없음. Next 코드도 그냥 테스트됨",
    ],
  },
  {
    q: "왜 Tailwind(테일윈드)? (CSS-in-JS 아니고)",
    points: [
      "문제: 마이그레이션 때 MUI + 기존 css 혼용으로 스타일이 충돌",
      "해결: Tailwind로 통일해 충돌 제거 + 디자인 토큰을 클래스로 표준화",
      "장점: 런타임 비용 없음(빌드 타임), 팀이 같은 규칙으로 빠르게",
    ],
  },
];

const levelTone: Record<"core" | "mid" | "low", string> = {
  core: "border-blue-200 bg-blue-50",
  mid: "border-gray-200 bg-white",
  low: "border-amber-200 bg-amber-50",
};

type Tab = "resume" | "assignment" | "skill";

export default function LangDPage() {
  const [tab, setTab] = useState<Tab>("resume");

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="sticky top-0 z-10 border-b border-gray-200 bg-white/90 px-5 pt-3 backdrop-blur">
        <h1 className="text-lg font-bold">랭디 면접 치트시트</h1>
        <p className="text-xs text-gray-500">면접 가는 길에 폰으로 보는 용 · 신희제</p>
        <div className="mt-3 flex gap-1">
          {([
            ["resume", "자기소개·이력서"],
            ["assignment", "과제 정리"],
            ["skill", "스킬"],
          ] as [Tab, string][]).map(([key, label]) => (
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
        {tab === "resume" && (
          <>
            <section className="mb-5 rounded-2xl border border-blue-200 bg-blue-50 p-4">
              <h2 className="mb-2 text-sm font-bold text-blue-700">🎤 짧은 자기소개 (약 40초)</h2>
              {INTRO.split("\n\n").map((para, i) => (
                <p key={i} className="mb-2 text-[15px] leading-relaxed last:mb-0">
                  {para}
                </p>
              ))}
            </section>

            <section className="mb-5 grid gap-2">
              <div className="rounded-xl border border-blue-200 bg-white p-3 text-sm">
                <span className="font-bold text-blue-700">가장 중요 </span>
                마이그레이션(A) + Claude Code 깊이(B) — 랭디가 정확히 보고 싶어 하는 부분
              </div>
              <div className="rounded-xl border border-amber-200 bg-white p-3 text-sm">
                <span className="font-bold text-amber-700">가장 위험 </span>
                실시간 세션(E) — 인정하되 빠른 학습·적응력으로 보완
              </div>
            </section>

            <div className="space-y-3">
              {GROUPS.map((g) => (
                <section
                  key={g.id}
                  className={`rounded-2xl border ${g.tone ? toneRing[g.tone] : "border-gray-200 bg-white"}`}
                >
                  <h2 className="px-4 py-3 text-sm font-bold">{g.title}</h2>
                  <div className="space-y-2 px-3 pb-3">
                    {g.items.map((qa, i) => (
                      <details key={i} className="group rounded-xl border border-gray-200 bg-white">
                        <summary className="flex cursor-pointer list-none items-start gap-2 px-4 py-3 text-[15px] font-semibold marker:hidden">
                          <span className="mt-0.5 text-blue-600 transition-transform group-open:rotate-90">▶</span>
                          <span>Q. {qa.q}</span>
                        </summary>
                        <ul className="space-y-1.5 px-5 pb-4 pl-9">
                          {qa.points.map((p, j) => (
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
                </section>
              ))}
            </div>

            <p className="mt-6 text-center text-xs text-gray-400">
              막히면 → &quot;표시는 프론트 / 판단은 서버&quot;, &quot;AI는 쓰되 항상 검증&quot;
            </p>
          </>
        )}

        {tab === "assignment" && (
          <>
            <section className="mb-4 rounded-2xl border border-amber-200 bg-amber-50 p-4">
              <h2 className="mb-2 text-sm font-bold text-amber-700">📝 랭디 프론트엔드 과제 — 면접 정리</h2>
              <p className="whitespace-pre-line text-[13px] leading-relaxed text-gray-700">{ASSIGN_NOTE}</p>
            </section>

            <div className="space-y-2.5">
              {ASSIGNMENT.map((s, i) => (
                <details
                  key={i}
                  className="group rounded-2xl border border-gray-200 bg-white"
                  open={i === 0}
                >
                  <summary className="flex cursor-pointer list-none items-center gap-2 px-4 py-3 text-[15px] font-bold marker:hidden">
                    <span className="text-blue-600 transition-transform group-open:rotate-90">▶</span>
                    <span>{s.title}</span>
                  </summary>
                  <div className="whitespace-pre-line border-t border-gray-100 px-5 py-4 text-[13.5px] leading-relaxed text-gray-700">
                    {s.body}
                  </div>
                </details>
              ))}
            </div>
          </>
        )}

        {tab === "skill" && (
          <>
            <section className="mb-4 rounded-2xl border border-blue-200 bg-blue-50 p-4">
              <h2 className="mb-1 text-sm font-bold text-blue-700">🧰 스킬 — &quot;어느 정도 아세요?&quot; 대비</h2>
              <p className="text-[13px] leading-relaxed text-gray-700">
                주력/보조 먼저 구분 → 근거(숫자)로 → 모르는 건 솔직히 인정 + 학습의지. 부풀리면 꼬리질문에서 위험.
              </p>
            </section>

            <div className="mb-5 space-y-3">
              {SKILL_LEVELS.map((g, i) => (
                <section key={i} className={`rounded-2xl border ${levelTone[g.tone]}`}>
                  <h3 className="px-4 py-2.5 text-sm font-bold">{g.group}</h3>
                  <div className="space-y-1.5 px-3 pb-3">
                    {g.items.map((s, j) => (
                      <div key={j} className="rounded-xl border border-gray-200 bg-white px-3 py-2">
                        <p className="text-[14px] font-semibold">{s.name}</p>
                        <p className="text-[13px] leading-relaxed text-gray-600">{s.note}</p>
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <h2 className="mb-2 px-1 text-sm font-bold text-gray-900">❓ 왜 이 기술을 썼나요? (문제 → 해결 → 협업)</h2>
            <p className="mb-3 rounded-xl border border-gray-200 bg-white px-3 py-2 text-[13px] leading-relaxed text-gray-600">
              {WHY_NOTE}
            </p>
            <div className="space-y-2">
              {WHY.map((qa, i) => (
                <details key={i} className="group rounded-2xl border border-gray-200 bg-white">
                  <summary className="flex cursor-pointer list-none items-start gap-2 px-4 py-3 text-[15px] font-semibold marker:hidden">
                    <span className="mt-0.5 text-blue-600 transition-transform group-open:rotate-90">▶</span>
                    <span>{qa.q}</span>
                  </summary>
                  <ul className="space-y-1.5 px-5 pb-4 pl-9">
                    {qa.points.map((p, j) => (
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
          </>
        )}
      </main>
    </div>
  );
}
