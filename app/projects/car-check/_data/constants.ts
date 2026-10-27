// ============================================
// 프로젝트 기본 정보 (리스트 & 상세 공통)
// ============================================
export const projectInfo = {
  id: "car-check",
  title: "중구(중고차 구매 가이드)",
  subtitle: "사이드프로젝트 · NestJS + Next.js + AI",
  period: "2026.10 - 진행중",
  description:
    "차종과 연식을 넣으면 중고차를 살 때 확인할 고질병과 매장 점검 포인트를 알려주는 서비스. 사실 정보는 사람이 검증한 DB로, 안내·추천은 AI로 역할을 나눴습니다.",
  tags: ["NestJS", "Next.js", "TypeScript", "Prisma", "PostgreSQL", "Gemini API", "Playwright"],
  highlights: ["데이터는 사람이 검증, 안내는 AI", "심사 흐름 + 트랜잭션·동시성", "E2E·CI"],
  github: "https://github.com/HeeJeShin/car-check",
};

// ============================================
// 기술 스택 (상세)
// ============================================
export const techStack = [
  "NestJS 12",
  "Prisma 7",
  "PostgreSQL",
  "Next.js 16",
  "React 19",
  "TypeScript",
  "Tailwind CSS",
  "Gemini API",
  "Vitest",
  "Playwright",
  "GitHub Actions",
  "Sentry",
  "pnpm workspace",
];

// ============================================
// 기술적 접근법
// ============================================
export const approaches = [
  {
    id: "human-vs-ai",
    title: "데이터는 사람이 검증, 안내는 AI",
    problem: "고질병은 돈이 걸린 사실 정보라, AI가 그럴듯하게 지어낸 답(환각)이 섞이면 안 됨",
    solution:
      "고질병·점검법은 DB에 초안으로 넣고 사람이 검증. AI는 '무엇부터 알아볼지' 같은 안내와 차종 추천만 맡고, 추천 결과에는 DB 고질병 링크를 붙임",
    effect: "AI 키가 없어도 핵심 기능이 전부 동작",
  },
  {
    id: "review-flow",
    title: "고질병 심사 흐름 (상태 기반 로직)",
    problem: "누구나 '검증됨'으로 바꿀 수 있으면 검증의 의미가 없음",
    solution:
      "초안 → 검토 중 → 검증됨/반려. 허용되는 전이를 표 하나로 정의하고, 표에 없는 전이(초안 → 검증됨 직행)와 출처 없는 승인은 서버가 거절",
    effect: "관리 화면 버튼도 같은 표에서 만들어 규칙이 한 곳에만 있음",
  },
  {
    id: "transaction",
    title: "변경 이력 + 트랜잭션 + 동시성",
    problem: "상태만 바뀌고 이력이 안 남거나, 두 관리자가 동시에 승인하면 결과가 꼬일 수 있음",
    solution:
      "상태 변경과 이력 저장을 하나의 트랜잭션으로 묶고, '지금 상태가 내가 본 상태일 때만 바꾸기'(조건부 업데이트)로 처리",
    effect: "동시 승인 시 한 명만 성공, 나머지는 409로 안내",
  },
  {
    id: "auth",
    title: "구글 로그인 + 역할 권한 (기본값은 닫힘)",
    problem: "새 쓰기 API를 만들고 권한 표시를 깜빡하면 누구나 데이터를 바꿀 수 있음",
    solution:
      "비밀번호는 저장하지 않고 구글 ID 토큰을 검증한 뒤 자체 토큰 발급. 쓰기 API는 기본으로 ADMIN만 열리고, 에디터·공개는 따로 표시해야 열림",
    effect: "작성자(EDITOR)는 승인할 수 없게 서버에서 막음",
  },
  {
    id: "ai-limit",
    title: "AI 캐시 + 요청 제한",
    problem: "무료 Gemini 한도가 작아, 같은 질문이 반복되거나 몰리면 금방 막힘",
    solution:
      "같은 질문은 하루 동안 저장된 답을 재사용하고, 동시에 들어온 같은 질문도 한 번만 호출. IP당·서버 전체 요청 수를 제한",
    effect: "한도 초과 시 429와 '몇 초 뒤 다시' 안내",
  },
  {
    id: "test-ci",
    title: "E2E 테스트 + CI",
    problem: "권한·심사 흐름처럼 화면과 서버가 함께 맞아야 하는 기능은 단위 테스트만으로 확인이 어려움",
    solution:
      "Playwright로 '차종 검색 → 리포트', '에디터 초안 → 관리자 승인 → 사용자 화면 반영' 흐름을 브라우저로 확인. GitHub Actions에서 PR·푸시마다 실행",
    effect: "단위 테스트 46개 + E2E 4개",
  },
];

// ============================================
// 서비스 구성 (배포 준비)
// ============================================
export const services = [
  { name: "Vercel", role: "화면(Next.js)", desc: "사용자가 들어오는 주소. 조회 화면은 미리 만들어 둬서(ISR) API가 잠들어도 바로 뜸" },
  { name: "Render", role: "API 서버(NestJS)", desc: "조회·로그인·수정·AI 질문 처리. 켜질 때 DB 마이그레이션 자동 적용" },
  { name: "Neon", role: "DB(PostgreSQL)", desc: "평소용(Pooled)과 마이그레이션용(Direct) 주소를 나눠 사용" },
  { name: "Sentry", role: "에러 알림", desc: "처리 못 한 에러(500대)만 수집. 요청 본문·쿠키·사용자 정보는 보내지 않음" },
  { name: "GitHub Actions", role: "CI", desc: "타입 체크·린트·단위 테스트 → E2E. DB는 Postgres 서비스 컨테이너" },
];

// 실무에서는 인프라가 갖춰져 있어 직접 다루지 않았던 부분
export const infraComparison = [
  { area: "DB", practice: "인프라 담당이 설치·관리한 DB 주소를 받아서 사용", here: "Neon에 직접 만들고 주소 2개(평소용·마이그레이션용)를 나눠 연결" },
  { area: "서버·배포", practice: "갖춰진 서버에 정해진 절차로 배포", here: "Render·Vercel을 고르고 render.yaml·환경변수·리전을 직접 설정" },
  { area: "에러 확인", practice: "서버 로그나 사내 모니터링 도구로 확인", here: "Sentry로 500대 에러만 모아 받고, 개인정보는 보내지 않게 설정" },
];

// ============================================
// 다음 단계
// ============================================
export const nextSteps = [
  { title: "실제 배포", desc: "배포 설정은 끝났고, 서비스 계정 연결 후 공개 예정" },
  { title: "AI 응답 스트리밍(SSE)", desc: "답이 생성되는 대로 보여주고 대기·오류·재시도 상태 표시" },
  { title: "매물 상식 검사", desc: "연식·주행거리·가격의 이상 신호는 코드가 계산하고, AI는 설명만" },
  { title: "사용 지표", desc: "검색·리포트·체크리스트 사용률을 남겨 기능 개선 전후 비교" },
];
