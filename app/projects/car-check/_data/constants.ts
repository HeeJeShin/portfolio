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
  highlights: ["데이터는 사람이 검증, 안내는 AI", "심사 흐름 + 트랜잭션·동시성", "제보·방문 통계·테스트 통과 후 배포"],
  demo: "https://car-check-fawn-zeta.vercel.app/",
  github: "https://github.com/HeeJeShin/car-check",
};

// ============================================
// 데이터 규모 (시드 기준, 2026-10-27)
// ============================================
export const dataScale = [
  { label: "제조사", value: "6곳" },
  { label: "차종", value: "41개" },
  { label: "세대(연식 구간)", value: "101개" },
  { label: "엔진·미션 조합", value: "237개" },
  { label: "고질병 초안", value: "24건" },
];
export const dataScaleNote =
  "고질병 24건(세대 22개)은 모두 출처 확인 전 초안이라 사용자 화면에 '참고'로 표시됩니다. 출처를 확인하는 대로 심사 흐름을 거쳐 '검증됨'으로 올립니다.";

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
    effect: "단위 테스트 64개 + E2E 8개",
  },
  {
    id: "reports",
    title: "틀린 내용 제보 + 운영자 답변",
    problem: "사람이 검증해도 혼자서는 모든 차종을 알 수 없음. 차주들은 틀린 정보를 보면 바로 고쳐 주고 싶어 함",
    solution:
      "고질병 카드마다 '틀린 내용 있어요' → 무엇이 틀렸는지 체크박스로 고르고 근거 링크를 남기게 함. 로그인 없이 받되 IP당 1시간 5건으로 막고, 운영자가 답변을 단 제보만 공개(답변 전에는 개수만)",
    effect: "욕설·도배가 그대로 올라가지 않으면서, 제보가 고질병 데이터를 고치는 근거가 됨. 제보 → 답변 → 공개 흐름을 E2E로 확인",
    code: {
      file: "api/src/cars/cars.service.ts",
      url: "https://github.com/HeeJeShin/car-check/blob/master/api/src/cars/cars.service.ts",
      snippet: `// 리포트 화면: 답변이 달린 제보만 공개, 전체 개수는 따로
reports: {
  where: { answer: { not: null } },
  orderBy: { answeredAt: "desc" },
  select: { id: true, reasons: true, comment: true, answer: true, answeredAt: true, createdAt: true },
},
_count: { select: { reports: true } },`,
    },
  },
  {
    id: "stats",
    title: "방문 통계를 직접: IP 없이 방문자 세기",
    problem: "어떤 차종을 많이 보는지 알아야 검증 우선순위를 정할 수 있음. 외부 분석 도구는 무료 보관 기간이 짧고 관리 화면에서 볼 수 없음",
    solution:
      "화면마다 API에 기록하되 IP는 저장하지 않고 '날짜+IP+브라우저+비밀값'의 해시만 남김(날이 바뀌면 값도 바뀜). 구글·네이버(Yeti)·다음 로봇과 관리 화면은 제외. 관리 화면에 일별 선 그래프·많이 본 차종 TOP 10·유입 경로",
    effect: "개인을 추적하지 않고 하루 방문자를 셈. 해시에 IP가 남지 않는지·봇이 빠지는지 단위 테스트로 확인",
    code: {
      file: "api/src/stats/stats.ts",
      url: "https://github.com/HeeJeShin/car-check/blob/master/api/src/stats/stats.ts",
      snippet: `// 그날 같은 사람인지만 알 수 있는 값. 원래 IP는 되살릴 수 없고, 날이 바뀌면 값도 바뀜
export const visitorHash = (day: string, ip: string, userAgent: string, secret: string) =>
  createHash("sha256").update(\`\${day}|\${ip}|\${userAgent}|\${secret}\`).digest("hex").slice(0, 16);

// (네이버 Yeti·다음 Daumoa는 이름에 bot이 없어 따로 넣음)
const BOT = /bot|crawl|spider|slurp|yeti|daumoa|facebookexternalhit|preview|monitor|curl|wget|python-requests|headlesschrome/i;`,
    },
  },
  {
    id: "deploy-gate",
    title: "테스트를 통과해야 배포",
    problem: "master에 올리면 바로 배포돼서, 테스트가 실패한 코드도 실제 사이트에 나갈 수 있었음",
    solution:
      "Render는 render.yaml에 'CI 통과 후 배포'를 설정하고, Vercel은 GitHub Actions 두 작업(타입·단위 테스트, E2E)을 필수 검사로 지정. 실무에서 쓰던 GitLab CI → ArgoCD 흐름을 같은 구조로 재현",
    effect: "테스트가 실패하면 배포되지 않고 지금 사이트가 그대로 유지됨",
    code: {
      file: "render.yaml",
      url: "https://github.com/HeeJeShin/car-check/blob/master/render.yaml",
      snippet: `# master에 푸시해도 바로 배포하지 않고, GitHub Actions(타입 체크·단위 테스트·E2E)가 모두 통과한 뒤에만 배포
autoDeployTrigger: checksPass`,
    },
  },
  {
    id: "seo",
    title: "SEO: robots.txt·sitemap·동적 메타데이터",
    problem: "'더 뉴 그랜저 고질병'처럼 검색해서 들어와야 하는데, 검색엔진이 어떤 화면이 있는지 몰랐음",
    solution:
      "관리 화면만 막는 robots.txt, 차종·세대마다 리포트·점검 가이드 주소를 담은 sitemap.xml, 차 이름과 고질병 제목이 들어간 페이지 제목·설명",
    effect: "세대 101개의 리포트·점검 가이드 주소(239개)를 검색엔진에 알림",
    code: {
      file: "web/src/app/robots.ts",
      url: "https://github.com/HeeJeShin/car-check/blob/master/web/src/app/robots.ts",
      snippet: `rules: [{ userAgent: "*", allow: "/", disallow: "/admin" }],
sitemap: \`\${SITE_URL}/sitemap.xml\`,`,
    },
  },
  {
    id: "design-tokens",
    title: "디자인 토큰: 색을 한 곳에서 관리",
    problem: "색상값을 화면마다 직접 적어 둬서(45곳) 메인 색을 바꾸려면 파일을 일일이 찾아 고쳐야 했음. 호버 색도 버튼마다 있거나 없었음",
    solution:
      "Tailwind 4의 @theme에 메인·호버·상태 색을 변수로 모으고, 화면에는 bg-primary·hover:bg-primary-hover처럼 역할 이름만 씀. 메인 색을 빨강으로 바꾸자 '살 때 확인할 것' 안내가 위험 경고처럼 보여, 안내 상자는 회색으로 분리",
    effect: "임의 색상 클래스 45곳 → 0곳(그림·차트의 데이터 색 제외). 메인 색은 변수 한 줄만 고치면 전체 화면에 반영. 변경 후 E2E로 기존 흐름 확인",
    learning:
      "색 이름을 '파랑'이 아닌 역할로 지어야 디자인이 바뀌어도 화면 코드를 고치지 않음. 메인 색이 경고색과 같은 계열이 되면 안내까지 경고로 읽힐 수 있어, 색을 바꾼 뒤에는 화면의 의미까지 다시 확인해야 함",
    code: {
      file: "web/src/app/globals.css",
      url: "https://github.com/HeeJeShin/car-check/blob/master/web/src/app/globals.css",
      snippet: `@theme {
  --color-primary: #d7141a;
  --color-primary-hover: #a80f14;
  --color-danger: var(--color-primary);
  --text-shadow-logo: 0.05em 0.05em 0 var(--color-logo-shadow);
}`,
    },
  },
  {
    id: "responsive-header",
    title: "모바일 헤더를 JS 없이 전환 (CSS :has)",
    problem: "모바일 안쪽 화면에서 공통 헤더 밑에 뒤로 가기 줄이 한 겹 더 쌓여 일반적인 모바일 구조와 달랐음. 화면 너비를 JS로 판별해 헤더를 바꾸면 서버가 만든 HTML과 첫 렌더가 달라져 헤더가 깜빡일 수 있음",
    solution:
      "공통 헤더는 루트 레이아웃의 서버 컴포넌트로 한 번만 두고, 모바일 안쪽 화면은 뒤로·제목·닫기 한 줄(PageBar)로 대체. 어떤 헤더를 보여줄지는 미디어 쿼리와 :has()로 브라우저가 CSS 단계에서 결정",
    effect: "헤더 전환용 클라이언트 JS 없이 ISR 유지. 메인·차종·연식·리포트·점검 화면 CLS 0 (로컬 운영 빌드, 모바일 기준 측정)",
    learning:
      "화면 크기에 따른 표시 전환은 렌더링 단계에서 끝나는 CSS에 맡기는 편이 깜빡임이 없음. 다만 :has()는 구형 브라우저에서 동작하지 않아, 프로젝트의 지원 범위가 Tailwind 4 기준(Safari 16.4+, Chrome 111+, Firefox 128+) 안에 있는지 함께 확인",
    code: {
      file: "web/src/components/site-header.tsx",
      url: "https://github.com/HeeJeShin/car-check/blob/master/web/src/components/site-header.tsx",
      snippet: `// app/layout.tsx: 화면 전체를 group으로 지정
<body className="group/site flex min-h-dvh flex-col antialiased">

// components/site-header.tsx: 모바일에서 화면 안에 .page-bar가 있으면 공통 헤더를 숨김
<header className="sticky top-0 z-30 border-b max-md:group-has-[.page-bar]/site:hidden ...">`,
    },
  },
];

// ============================================
// 화면으로 보기 (실제 화면 캡처)
// ============================================
export const screens = [
  { src: "/projects/car-check/main-m.jpg", width: 780, height: 1688, title: "첫 화면", desc: "로고와 '내 차 고질병 확인하기'부터 바로 보여요" },
  { src: "/projects/car-check/select-m.jpg", width: 780, height: 1688, title: "차종 선택", desc: "이름으로 찾거나 제조사와 차 종류로 좁혀요" },
  { src: "/projects/car-check/generation-m.jpg", width: 780, height: 1688, title: "연식 선택", desc: "연식을 넣으면 그 해에 판매된 세대만 남아요" },
  { src: "/projects/car-check/report-m.jpg", width: 780, height: 1688, title: "고질병 리포트", desc: "세대마다 다른 고질병과 확인 방법을 보여줘요" },
  { src: "/projects/car-check/report-form.jpg", width: 800, height: 1628, title: "틀린 내용 제보", desc: "고질병 카드에서 무엇이 틀렸는지 체크박스로 고르고 근거를 남겨요" },
  { src: "/projects/car-check/report-answer.jpg", width: 800, height: 1018, title: "운영자 답변 공개", desc: "운영자가 답변을 달면 제보와 함께 카드 아래에 보여요" },
  { src: "/projects/car-check/ev-checks.jpg", width: 880, height: 2394, title: "전기차 매장 점검", desc: "엔진 대신 리프트로 차 밑 배터리 팩, SOH 진단, 보증 승계를 먼저" },
  { src: "/projects/car-check/tesla-fsd.jpg", width: 800, height: 948, title: "구매 전 확인 (테슬라)", desc: "중국 생산 차는 국내 FSD 불가 — 차대번호 앞 3자리로 확인" },
];
export const pcScreens = [
  { src: "/projects/car-check/main-pc.jpg", width: 1920, height: 1200, title: "메인 화면 (PC)", desc: "공통 헤더에서 고질병·매장 점검·AI 가이드·차종 찾기로 이동해요" },
  { src: "/projects/car-check/select-pc.jpg", width: 1920, height: 1200, title: "차종 선택 (PC)", desc: "모바일과 같은 순서를 가운데 카드 하나에 담았어요" },
];
export const adminScreen = {
  src: "/projects/car-check/admin-stats.jpg",
  width: 1800,
  height: 1135,
  title: "관리 화면 방문 통계 (PC)",
  desc: "일별 방문자·페이지뷰, 많이 본 차종 TOP 10, 들어온 곳, 기기. 가리키면 그날 숫자가 보여요.",
  note: "화면 예시: 테스트 환경의 샘플 데이터예요 (실제 방문 수 아님).",
};

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
    next: "고질병 초안 24건의 출처 확인과 승인, 사용자 제보(제보함)에 답변",
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
  deployLessons: [
    {
      title: "주소는 짐작하지 않기",
      desc: "Render 서비스 이름이 이미 쓰이고 있어 주소 뒤에 글자가 붙었고, 짐작한 주소는 다른 사람의 서버였습니다. 대시보드에서 복사한 뒤 /health 응답으로 내 서버인지 확인했습니다.",
    },
    {
      title: "운영 DB 작업은 따로",
      desc: "테이블 만들기와 샘플 데이터 넣기를 스크립트 하나로 묶어 직접 실행했습니다. 시드는 전부 지우고 다시 넣기 때문에, 운영 데이터가 생긴 뒤에는 관리 화면으로만 추가하기로 정했습니다.",
    },
    {
      title: "마지막 연결은 CORS",
      desc: "화면 주소는 올려야 생기므로, 그 주소를 API의 WEB_ORIGIN에 다시 알려줘야 브라우저에서 부르는 기능(AI 가이드, 관리 화면)이 열립니다. 로컬용·배포용 환경변수 파일도 폴더마다 나란히 두어 헷갈리지 않게 했습니다.",
    },
  ],
  uiLessons: [
    {
      title: "색은 장식이 아니라 안내",
      desc: "메인 색을 빨강으로 바꾸고 로고는 빨간 글자에 검은 그림자를 줘서 첫눈에 들어오게 했고, 먼저 눌렀으면 하는 버튼도 같은 색으로 맞췄습니다. 대신 경고처럼 읽히게 된 안내 상자는 회색으로 빼서, 색이 주는 의미까지 다시 확인했습니다.",
    },
    {
      title: "어디서나 같은 헤더",
      desc: "메인과 차종 찾기의 헤더 구조가 달라 다른 서비스처럼 보였습니다. PC는 공통 헤더 하나로 맞추고, 모바일 안쪽 화면은 헤더가 두 겹으로 쌓이지 않게 뒤로 가기·제목·닫기 한 줄로 합쳤습니다.",
    },
    {
      title: "고르는 화면은 한 가지 일만",
      desc: "처음 온 사용자가 바로 시작할 수 있도록, 차종·연식 선택은 PC에서 가운데 카드 하나에 제목, 검색, 선택지를 순서대로 쌓아 지금 할 일만 보이게 했습니다.",
    },
  ],
  productionIntro:
    "사용자가 없는 지금은 비용 0원으로 전체 흐름을 직접 겪어 보는 게 목표라 무료 등급을 골랐습니다. 실사용 서비스라면 이렇게 바꾸겠습니다. (실무에서 직접 운영해 본 건 GitLab CI·ArgoCD 배포까지이고, 나머지는 이번에 겪은 한계를 바탕으로 생각해 둔 선택입니다.)",
  productionChoices: [
    { layer: "화면", now: "Vercel Hobby", prod: "Vercel Pro 또는 회사 클러스터", why: "Hobby는 개인·비상업용. 팀 권한과 회사 파이프라인과의 일관성" },
    { layer: "API", now: "Render 무료", prod: "Render 유료 · AWS ECS · 쿠버네티스", why: "무료는 15분 쉬면 잠들어 첫 요청 30초. 항상 켜짐·여러 대·무중단 배포 필요" },
    { layer: "DB", now: "Neon 무료", prod: "AWS RDS(Aurora) PostgreSQL", why: "자동 백업·특정 시점 복구, API와 같은 사설망 안에서 연결" },
    { layer: "캐시·요청 제한", now: "서버 메모리", prod: "Redis", why: "서버가 여러 대면 메모리 캐시는 공유되지 않음" },
    { layer: "배포 흐름", now: "GitHub Actions → 자동 배포", prod: "회사 표준 (GitLab CI → ArgoCD)", why: "검증된 흐름과 롤백, 스테이징 → 운영 승인 단계" },
    { layer: "비밀값", now: "설정 파일을 대시보드에 복사", prod: "시크릿 매니저", why: "손으로 복사하면 노출된다. 이번에도 DB 비밀번호를 바꿔야 했음" },
  ],
  productionCriteria:
    "고르는 기준: 사용자가 기다리지 않는가 · 데이터를 잃지 않는가 · 여러 대로 늘릴 수 있는가 · 팀 표준과 맞는가 · 비용만큼 가치가 있는가. DB는 PostgreSQL 표준이라 주소만 바꾸면 옮겨지고, 서버·화면도 특정 서비스 기능에 거의 묶이지 않게 만들어 코드를 다시 짤 필요가 없습니다.",
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
    "운영 데이터가 생기기 전에, 시드 대신 관리 화면으로 데이터를 넣는 흐름을 먼저 갖추기",
    "DB 주소처럼 비밀번호가 든 값은 설정 파일에만 두고 다른 곳에 붙이지 않기",
    "화면을 늘리기 전에 색 변수와 공통 헤더·푸터부터 정하고, 만든 뒤에는 처음 온 사용자의 눈으로 다시 보기",
  ],
};
