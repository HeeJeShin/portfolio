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
  demo: "https://car-check-fawn-zeta.vercel.app/",
  github: "https://github.com/HeeJeShin/car-check",
};

// ============================================
// 데이터 규모 (시드 기준, 2026-10-27)
// ============================================
export const dataScale = [
  { label: "제조사", value: "6곳" },
  { label: "차종", value: "40개" },
  { label: "세대(연식 구간)", value: "98개" },
  { label: "엔진·미션 조합", value: "224개" },
  { label: "고질병 초안", value: "17건" },
];
export const dataScaleNote =
  "고질병 17건(세대 15개)은 모두 출처 확인 전 초안이라 사용자 화면에 '참고'로 표시됩니다. 출처를 확인하는 대로 심사 흐름을 거쳐 '검증됨'으로 올립니다.";

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
    effect: "AI 키가 없어도 핵심 기능이 전부 동작 (AI 꺼짐 모드를 단위 테스트로 확인)",
  },
  {
    id: "review-flow",
    title: "고질병 심사 흐름 (상태 기반 로직)",
    problem: "고질병 정보는 돈이 걸린 사실이라, 누가 썼든 근거 없이 '확실한 정보'로 보여주면 안 됨",
    solution:
      "관리 페이지(/admin)에서 에디터가 초안을 쓰고, 관리자가 출처를 확인해 승인하거나 사유를 적어 반려. 지금은 직접 넣은 데이터를 이 흐름으로 검증하고, 나중에 커뮤니티 제보와 AI로 모은 정보도 초안으로 들어와 같은 심사를 거침. 허용되는 상태 이동은 표 하나로 정의해, 그 밖의 이동(초안 → 검증됨 직행 등)은 서버가 거절",
    effect: "승인 전 정보는 '참고', 출처를 확인한 정보만 '검증됨'. 표 밖의 이동과 출처 없는 승인이 거절되는지 단위 테스트로 확인",
    code: {
      file: "api/src/issues/issue-workflow.ts",
      url: "https://github.com/HeeJeShin/car-check/blob/master/api/src/issues/issue-workflow.ts",
      snippet: `// 허용되는 상태 전이는 이 표 하나에만 둡니다. 표에 없는 전이는 전부 거절
export const TRANSITIONS: Transition[] = [
  { from: "DRAFT", to: "IN_REVIEW", label: "검토 요청", roles: ["ADMIN", "EDITOR"] },
  { from: "IN_REVIEW", to: "DRAFT", label: "검토 요청 취소", roles: ["ADMIN", "EDITOR"] },
  { from: "IN_REVIEW", to: "VERIFIED", label: "승인 (검증됨)", roles: ["ADMIN"], needs: "sourceUrl" },
  { from: "IN_REVIEW", to: "REJECTED", label: "반려", roles: ["ADMIN"], needs: "reason" },
  { from: "REJECTED", to: "DRAFT", label: "다시 고치기", roles: ["ADMIN", "EDITOR"] },
  { from: "VERIFIED", to: "DRAFT", label: "검증 취소", roles: ["ADMIN"], needs: "reason" },
];`,
    },
  },
  {
    id: "transaction",
    title: "변경 이력 + 트랜잭션 + 동시성",
    problem: "상태만 바뀌고 이력이 안 남거나, 두 관리자가 동시에 승인하면 결과가 꼬일 수 있음",
    solution:
      "상태 변경과 이력 저장을 하나의 트랜잭션으로 묶고, '지금 상태가 내가 본 상태일 때만 바꾸기'(조건부 업데이트)로 처리",
    effect: "동시 승인 시 한 명만 성공, 나머지는 409. 늦은 쪽은 상태도 이력도 저장되지 않는지 단위 테스트로 확인",
    code: {
      file: "api/src/issues/issues.service.ts",
      url: "https://github.com/HeeJeShin/car-check/blob/master/api/src/issues/issues.service.ts",
      snippet: `// transition() 중 저장 부분
return this.prisma.$transaction(async (tx) => {
  const { count } = await tx.carIssue.updateMany({
    where: { id, status: issue.status }, // 내가 본 상태 그대로일 때만
    data: { status: dto.to, ...(dto.sourceUrl && { sourceUrl: dto.sourceUrl }) },
  });
  if (count === 0) throw new ConflictException(CONFLICT);
  await tx.issueHistory.create({
    data: { issueId: id, action: "STATUS_CHANGED", fromStatus: issue.status, toStatus: dto.to, reason: dto.reason?.trim() || null, userId: user.id },
  });
  return tx.carIssue.findUniqueOrThrow({ where: { id } });
});`,
    },
  },
  {
    id: "auth",
    title: "구글 로그인 + 역할 권한 (기본값은 닫힘)",
    problem: "새 쓰기 API를 만들고 권한 표시를 깜빡하면 누구나 데이터를 바꿀 수 있음",
    solution:
      "비밀번호는 저장하지 않고 구글 ID 토큰을 검증한 뒤 자체 토큰 발급. 쓰기 API는 기본으로 ADMIN만 열리고, 에디터·공개는 따로 표시해야 열림",
    effect: "에디터 승인은 403, 표시 없는 쓰기 API는 로그인 없으면 401. 단위 테스트로 확인",
    code: {
      file: "api/src/auth/auth.guard.ts",
      url: "https://github.com/HeeJeShin/car-check/blob/master/api/src/auth/auth.guard.ts",
      snippet: `// canActivate() 중 권한 판단 부분
const isRead = req.method === "GET" || req.method === "HEAD" || req.method === "OPTIONS";
if (isRead && !roles) return true;
if (this.reflector.getAllAndOverride<boolean>(PUBLIC, targets)) return true;

// (중간: 로그인 토큰 확인)

const allowed = roles ?? ["ADMIN"];
if (!allowed.includes(user.role)) throw new ForbiddenException("이 작업은 관리자(ADMIN)만 할 수 있습니다.");`,
    },
  },
  {
    id: "ai-limit",
    title: "AI 캐시 + 요청 제한",
    problem: "무료 Gemini 한도가 작아, 같은 질문이 반복되거나 몰리면 금방 막힘",
    solution:
      "같은 질문은 하루 동안 저장된 답을 재사용하고, 동시에 들어온 같은 질문도 한 번만 호출. IP당·서버 전체 요청 수를 제한",
    effect: "한도 초과 시 429와 '몇 초 뒤 다시' 안내. 같은 질문이 동시에 와도 Gemini는 한 번만 부르는지 단위 테스트로 확인",
  },
  {
    id: "test-ci",
    title: "E2E 테스트 + CI",
    problem: "권한·심사 흐름은 화면과 서버가 함께 맞아야 해서, 함수 하나씩 검사하는 단위 테스트만으로는 실제로 되는지 알기 어려움",
    solution:
      "사람이 브라우저로 직접 눌러보던 과정을 Playwright가 대신하게 함. '차종 검색 → 리포트', '에디터가 초안 작성 → 관리자 승인 → 사용자 화면에 바로 반영'을 실제 크롬으로 확인하고, GitHub에 코드를 올릴 때마다 자동으로 실행(GitHub Actions)",
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
// 팀 프로젝트로 한다면 (가정)
// ============================================
export const teamRoles = [
  {
    role: "프론트엔드",
    owns: "web/",
    next: "분류 화면(연료·차급 필터), 모바일 매장 점검 화면 다듬기, AI 답변 스트리밍(대기·오류·재시도) 화면",
  },
  {
    role: "백엔드",
    owns: "api/",
    next: "필터 API, AI로 고질병 후보를 모으는 배치 작업, 커뮤니티 글·제보 API와 일반 사용자 로그인",
  },
  {
    role: "데이터 검증 (운영)",
    owns: "관리 페이지 /admin (EDITOR·ADMIN 권한)",
    next: "고질병 초안 17건의 출처 확인과 승인, 이후 커뮤니티 제보 심사",
  },
  {
    role: "기획·디자인",
    owns: "docs/plan.md, 화면 흐름",
    next: "분류 기준과 화면 흐름, 커뮤니티 운영 정책(신고·숨김 기준)",
  },
];

export const teamRules = [
  {
    title: "API 약속은 한 곳에서",
    desc: "Swagger 문서(/docs)와 web/src/lib/api.ts의 타입을 프론트·백엔드가 함께 보는 약속으로 두고, 바뀌면 같은 PR에서 함께 고칩니다.",
  },
  {
    title: "합치는 기준은 CI와 리뷰",
    desc: "지금은 혼자라 바로 올리지만, 팀이라면 PR로 올리고 GitHub Actions(타입 체크·린트·단위 테스트·E2E) 통과와 리뷰 1명을 합치는 조건으로 둡니다.",
  },
  {
    title: "폴더별 담당자",
    desc: "api/·web/·e2e/로 이미 나뉘어 있어, 폴더마다 담당자를 정하고(CODEOWNERS) 그 폴더 변경은 담당자가 리뷰합니다.",
  },
  {
    title: "규칙이 모인 코드는 함께 확인",
    desc: "심사 흐름 표(issue-workflow.ts)처럼 서버와 관리 화면이 같이 보는 규칙은, 바꿀 때 양쪽 담당이 함께 확인합니다.",
  },
  {
    title: "개발자가 아니어도 바로 참여",
    desc: "데이터 검증 담당은 관리 페이지 권한(EDITOR)만 받으면 됩니다. 역할 권한이 이미 있어 추가 개발이 필요 없습니다.",
  },
  {
    title: "기획 차수를 역할별로 나눠 동시에",
    desc: "예를 들어 1차 분류 화면은 프론트(화면)와 백엔드(필터 API)가 API 약속만 먼저 정하고 동시에 진행합니다.",
  },
];

// ============================================
// 회고 (car-check docs/retrospective.md 요약)
// ============================================
export const retrospective = {
  decisions: [
    {
      title: "화면·API·DB를 어디에 둘까",
      desc: "무료로 계속 운영할 수 있는지를 기준으로 Vercel(화면)·Render(API)·Neon(DB)을 고르고, 셋 다 싱가포르 리전에 맞췄습니다. Render 무료는 15분 쉬면 잠들기 때문에, 조회 화면을 미리 만들어 두는 ISR로 사용자가 깨어나기를 기다리지 않게 했습니다.",
    },
    {
      title: "DB 주소를 둘로 나눈 이유",
      desc: "평소 요청은 연결을 나눠 쓰는 풀(Pooled) 주소로 받아 동시 접속에 대비하고, 테이블을 바꾸는 마이그레이션은 풀을 거치면 실패할 수 있어 직접(Direct) 주소로만 돌게 분리했습니다.",
    },
    {
      title: "캐시를 즉시 지우는 이유",
      desc: "조회 화면은 1시간 동안 저장해 두지만, 관리자가 승인한 '검증됨'이 1시간 늦게 보이면 안 됩니다. 관리 화면에서 고치는 순간 해당 저장본을 무효화하도록 했고, 이 흐름을 E2E로 확인합니다.",
    },
  ],
  envNote: "그 밖에 Node 버전에 따른 pnpm 설치 오류 같은 환경 문제는 설치 방법을 바꾸고 README에 남겼습니다.",
  approach: [
    "백엔드에서 요구되는 역량 중 실무에서 직접 해보지 못한 부분(서버·DB 설계, 인증, 테스트 자동화, 배포)을 기준으로, 이 서비스에 필요한 순서대로 만들었습니다.",
    "새로 맡은 서비스마다 '무엇을 하고, 어떤 값을 주고받는지'를 정리해 설정 파일에 남겼습니다.",
    "회사에서 인프라 팀이 맡던 일과 나란히 놓고, 무엇을 직접 판단해야 하는지 구분했습니다.",
    "고른 이유를 문서에 남기고, 공개 배포 전에는 이력서에 '배포'를 쓰지 않았다가 실제로 올린 뒤에 반영했습니다.",
  ],
  learning: [
    "내가 실제로 쓸 서비스를 만들면서 익힙니다.",
    "AI와 함께 만들되, 이해가 안 되는 건 '왜'를 묻고 내 말로 정리합니다.",
    "README·진행 상황 표·회고로 남기고, 포트폴리오에 옮기면서 한 것과 안 한 것을 다시 확인합니다.",
  ],
  next: [
    "외부 서비스를 연결하기 전에 연결 순서와 주고받는 값을 먼저 그려 두기",
    "배포는 설정만 해두지 않고, 실제로 올려 주소를 확인하는 것까지 한 번에 끝내기",
  ],
};
