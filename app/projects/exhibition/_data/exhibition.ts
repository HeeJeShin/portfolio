/**
 * Exhibition 프로젝트 - 기술 상세 정보
 * 면접/상세 설명용 참고 자료
 */

// ==========================================
// 문제 해결 사례 (협업/프로세스)
// ==========================================
export const problemSolving = [
  {
    id: "documentation",
    title: "디자이너 없이 화면 가이드로 소통",
    problem: "어드민 페이지 특성상 디자인보다 기능이 중요해서 디자이너 없이 개발 진행",
    solution: "화면 가이드 페이지 직접 제작해서 공유, 이걸 기반으로 기획/백엔드와 소통",
    effect: "디자인 시안 없이도 원활한 협업 가능",
    link: "https://exhibition.ezpmp.co.kr/GETEC/120006/guide",
  },
  {
    id: "onboarding",
    title: "팀원 투입 대비 컨벤션 문서화",
    problem: "혼자 개발하지만, 문서 없이 중간 투입되면 적응이 어렵다는 걸 경험으로 알고 있음",
    solution: "추후 팀원 추가/담당자 변경 가능성 고려해 README에 컨벤션 최대한 정리",
    effect: "인수인계나 협업 시 적응에 도움",
  },
  {
    id: "test-routine",
    title: "QA 없이 품질 보장 루틴 구축",
    problem: "QA팀 없이 개발자가 직접 품질 보장 필요",
    solution: "CSV 테스트 케이스 → Vitest 코드 → 결과 자동 반영 루틴",
    effect: "216개 테스트 케이스로 기능 검증",
  },
  {
    id: "sticky-header",
    title: "운영팀 UX 개선 직접 제안",
    problem: "여러 탭 오가며 작업 시 핵심 정보 확인 어려움",
    solution: "상세 페이지 상단 고정 헤더 직접 제안 및 구현",
    effect: "운영팀 업무 효율 개선, 상태 변경 즉시 가능",
  },
];

// ==========================================
// 기술적 접근법 (포트폴리오용)
// ==========================================
export const approaches = [
  {
    id: "admin-system",
    title: "2단계 어드민 권한 분기 구현",
    problem: "슈퍼어드민/프로젝트어드민 권한에 따라 다른 UI와 접근 범위 필요",
    solution: "로그인 응답의 roleCd로 권한 판별 → Zustand 저장 → 조건부 사이드바/라우팅 렌더링",
    effect: "권한별 사이드바 분기 (슈퍼어드민 전용 메뉴), 프로젝트 간 데이터 격리",
  },
  {
    id: "dynamic-form",
    title: "API 기반 동적 폼 렌더링",
    problem: "10+ 유사한 신청 페이지, 프로젝트마다 다른 필드 요구사항",
    solution: "백엔드 API 응답으로 폼 필드를 동적 생성하는 DynamicForm 컴포넌트",
    effect: "새 프로젝트 추가 시 프론트 코드 수정 불필요 → 요구사항 반영 속도 향상 (고객사↔사업부↔개발자 → 고객사↔사업부로 단축)",
  },
  {
    id: "token-refresh",
    title: "토큰 리프레시 Race Condition 해결",
    problem: "동시 다발적 401 에러 시 토큰 갱신 중복 호출",
    solution: "Singleton Promise 패턴으로 하나의 리프레시만 실행, 나머지는 대기",
    effect: "불필요한 API 호출 제거, 안정적인 인증 유지",
  },
  {
    id: "monorepo",
    title: "모노레포로 코드 공유 극대화",
    problem: "User/Admin 앱 간 60+ 컴포넌트/훅 중복",
    solution: "Turborepo + pnpm workspace로 packages/shared 분리",
    effect: "중복 코드 37% 절감, 한 번 수정으로 양쪽 반영",
  },
  {
    id: "state-management",
    title: "상태 종류별 도구 분리",
    problem: "API 데이터, 인증 토큰, 모달 상태를 한곳에서 관리하면 복잡해짐",
    solution: "API 데이터는 TanStack Query, 인증은 Zustand, 모달/토스트는 Context로 분리",
    effect: "각 도구의 장점 활용 (캐싱, persist, 간단한 전역상태)",
  },
];

// ==========================================
// 기술 스택 상세
// ==========================================
export const techStackDetails = {
  framework: {
    name: "Next.js 15 (App Router)",
    reason: "RSC, 동적 라우팅, 멀티테넌트 URL 구조",
  },
  language: {
    name: "TypeScript",
    usage: "타입 정의 선행 개발, 런타임 에러 90% 감소",
  },
  stateManagement: {
    server: { name: "TanStack Query", usage: "서버 상태 캐싱/동기화, Optimistic Updates" },
    client: { name: "Zustand", usage: "인증 상태, sessionStorage 연동" },
    ui: { name: "React Context", usage: "Toast, Alert, Confirm 다이얼로그" },
  },
  validation: {
    name: "Zod",
    usage: "런타임 검증, 타입 추론, 폼 유효성 검사",
  },
  testing: {
    name: "Vitest + React Testing Library",
    usage: "컴포넌트/훅 단위 테스트, Jest 대비 10배 빠름",
  },
  build: {
    name: "Turborepo + pnpm",
    usage: "모노레포 관리, 빌드 캐싱",
  },
  cicd: {
    name: "GitLab CI/CD",
    usage: "태그 기반 자동 배포 (Harbor + ArgoCD)",
  },
  styling: {
    name: "Tailwind CSS",
    usage: "유틸리티 기반 빠른 스타일링",
  },
};

// ==========================================
// 아키텍처 패턴 상세 (면접용)
// ==========================================
export const architectureDetails = {
  folderStructure: `
exhibition/
├── apps/
│   ├── user/           # 사용자 부스 신청 (port 3002)
│   └── admin/          # 어드민 대시보드 (port 3003)
├── packages/
│   └── shared/         # 공용 컴포넌트, 훅, 타입
└── turbo.json          # Turborepo 설정
`,
  sharedStructure: `
shared/src/
├── components/         # 56개 공용 컴포넌트
│   ├── common/         # Button, Input, Modal, Toast
│   ├── layout/         # Header, Footer, PageWrapper
│   └── forms/          # DynamicForm, UserInfoForm
├── hooks/              # 23개 커스텀 훅
│   ├── queries/        # React Query 훅 (도메인별)
│   └── useApi.ts, useLocale.ts
├── stores/             # Zustand 스토어
├── providers/          # Context Providers
├── lib/                # fetcher, validations
└── types/              # API 타입 정의
`,
  apiPattern: {
    endpoint: "API_ENDPOINTS.PROJECT.DETAIL",
    response: "ExhibitionApiResponse<T> { resCode, resMsg, data }",
    errorHandling: "ApiError class + Toast 알림",
  },
  routingPattern: {
    user: "/[projectCd]/[siteId]/booth",
    admin: "/admin/[projectCd]/[siteId]/...",
    reason: "하나의 앱으로 여러 전시회 프로젝트 운영",
  },
};

// ==========================================
// 2단계 어드민 시스템 구현 상세 (면접용)
// ==========================================
export const adminSystemDetails = {
  // 권한 판별 흐름
  permissionFlow: {
    step1_login: {
      description: "로그인 API 호출 후 응답에서 권한 확인",
      apiResponse: `{
  resCode: "SUCCESS",
  data: {
    accessToken: "...",
    refreshToken: "...",
    adminInfo: {
      adminSeq: 1,
      adminId: "admin@example.com",
      roleCd: "SUPER_ADMIN" | "ACCOUNT_OWNER" | "EVENT_MANAGER" | "VIEWER"
    }
  }
}`,
      action: "roleCd === 'SUPER_ADMIN'이면 setIsSuperAdmin(true)",
    },
    step2_store: {
      description: "Zustand 스토어에 권한 정보 저장",
      fields: {
        common: ["accessToken", "refreshToken", "adminId", "isSuperAdmin"],
        projectAdmin: ["projectCd", "siteId (프로젝트 진입 시 저장)"],
      },
    },
    step3_conditionalUI: {
      description: "권한에 따라 다른 UI 렌더링",
      superAdmin: {
        check: "isSuperAdmin === true && isAuthenticated",
        render: "SystemSidebar (검은색 사이드바, 프로젝트 목록 메뉴)",
        redirect: "/projects",
      },
      projectAdmin: {
        check: "projectCd/siteId 존재 && URL과 일치",
        render: "AdminSidebar (흰색 사이드바, 참가신청/설정 메뉴)",
        redirect: "/{projectCd}/{siteId}/user-list",
      },
    },
    step4_guard: {
      description: "페이지 접근 시 권한 검증 (AdminGuard)",
      checks: [
        "토큰 유효성 확인 (isTokenValid)",
        "URL의 projectCd/siteId와 저장된 값 비교",
        "불일치 시 clearToken() 호출 → 로그인 페이지로 리다이렉트",
      ],
    },
  },

  // 조건부 사이드바 구현
  conditionalSidebar: {
    wrapper: {
      file: "SuperAdminSidebarWrapper.tsx",
      code: `const { isSuperAdmin, isAuthenticated } = useAdminAuthStore();
if (!isAuthenticated || !isSuperAdmin) return null;
return <SystemSidebar />;`,
    },
    superAdminMenu: ["대시보드 (준비중)", "주최사 (준비중)", "프로젝트 목록"],
    projectAdminMenu: ["기본정보", "참가신청 (정규/예비)", "관리자 프로필"],
  },

  // 프로젝트 간 격리
  projectIsolation: {
    problem: "프로젝트 A 관리자가 URL 직접 입력으로 프로젝트 B 접근 시도",
    solution: {
      store: "로그인/프로젝트 진입 시 projectCd, siteId를 sessionStorage에 저장",
      guard: "매 페이지 진입 시 URL params와 저장된 값 비교",
      action: "불일치 시 즉시 토큰 삭제 + 로그인 페이지 이동",
    },
    code: `checkAndClearIfMismatch: (projectCd, siteId) => {
  const state = get();
  if (state.projectCd !== projectCd || state.siteId !== siteId) {
    get().clearToken();  // 자동 로그아웃
    return false;
  }
  return true;
}`,
  },

  // 로그인 후 리다이렉트 로직
  loginRedirect: {
    description: "로그인 성공 후 접근 가능한 프로젝트 수에 따라 분기",
    flow: [
      "1. 로그인 성공 → fetchBoProjectList() 호출",
      "2. totalCount === 1 → 해당 프로젝트의 user-list로 바로 이동",
      "3. totalCount > 1 → /projects 목록 페이지로 이동",
    ],
    reason: "프로젝트 1개만 담당하는 관리자는 불필요한 선택 단계 생략",
  },

  // 핵심 파일
  keyFiles: {
    authStore: "packages/shared/src/stores/useAdminAuthStore.ts",
    adminGuard: "apps/admin/src/components/admin/AdminGuard.tsx",
    sidebarWrapper: "apps/admin/src/components/admin/SuperAdminSidebarWrapper.tsx",
    systemSidebar: "apps/admin/src/components/admin/SystemSidebar.tsx",
    adminSidebar: "apps/admin/src/components/admin/AdminSidebar.tsx",
    loginForm: "apps/admin/src/components/AdminLoginForm.tsx",
  },
};

// ==========================================
// 성과 지표
// ==========================================
export const metrics = {
  development: [
    { label: "개발 기간", before: "6개월 예상", after: "3개월", change: "50% 단축" },
    { label: "페이지 개발", before: "2주", after: "3-5일", change: "70% 단축" },
    { label: "런타임 에러", before: "QA 다수 발견", after: "거의 없음", change: "90% 감소" },
  ],
  codeQuality: [
    { label: "공용 컴포넌트", value: 56, unit: "개" },
    { label: "공용 훅", value: 23, unit: "개" },
    { label: "타입 정의", value: 40, unit: "개" },
    { label: "테스트 케이스", value: 216, unit: "개" },
  ],
  efficiency: [
    { label: "중복 코드 절감", value: "37%" },
    { label: "테스트 작성 시간", value: "90% 단축" },
    { label: "새 프로젝트 프론트 수정", value: "0%" },
  ],
};

// ==========================================
// 면접 예상 Q&A
// ==========================================
export const interviewQA = [
  {
    q: "2단계 어드민 권한 분기는 어떻게 구현했나요?",
    a: "로그인 API 응답의 roleCd로 권한을 판별합니다. roleCd === 'SUPER_ADMIN'이면 isSuperAdmin을 true로 저장하고, SuperAdminSidebarWrapper에서 이 값을 체크해서 슈퍼어드민 전용 메뉴를 조건부 렌더링합니다. 프로젝트어드민은 projectCd/siteId 기반으로 다른 사이드바와 라우팅을 보여줍니다.",
  },
  {
    q: "프로젝트 간 데이터 격리는 어떻게 보장했나요?",
    a: "프로젝트 진입 시 projectCd/siteId를 Zustand(sessionStorage)에 저장하고, AdminGuard에서 매 페이지마다 URL params와 비교합니다. 프로젝트 A 관리자가 URL 직접 입력으로 프로젝트 B에 접근하면 불일치 감지 → 즉시 토큰 삭제 → 로그인 페이지로 리다이렉트됩니다.",
  },
  {
    q: "왜 모노레포를 선택했나요?",
    a: "User앱과 Admin앱이 60개 이상의 컴포넌트와 훅을 공유해야 했습니다. packages/shared로 분리해서 중복 코드를 제거하고, Turborepo 캐싱으로 빌드 시간도 단축했습니다.",
  },
  {
    q: "상태 관리를 왜 3개로 나눴나요?",
    a: "서버 상태와 클라이언트 상태는 목적이 다릅니다. React Query는 API 데이터 캐싱/동기화에 최적화되어 있고, Zustand는 간단한 클라이언트 상태에 적합합니다. 각 도구를 장점에 맞게 사용했습니다.",
  },
  {
    q: "토큰 리프레시 문제는 어떻게 해결했나요?",
    a: "여러 요청이 동시에 401을 받으면 리프레시가 중복 호출되는 문제가 있었습니다. Singleton Promise 패턴으로 해결했습니다. 첫 번째 401이 리프레시를 시작하면, 나머지 요청들은 같은 Promise를 대기합니다.",
  },
  {
    q: "DynamicForm을 왜 설계했나요?",
    a: "전시회마다 신청 폼 구성이 다르고, 출입증/부스/홍보자료 등 10개 이상의 유사 페이지가 있었습니다. API 응답으로 폼을 동적 생성하면 새 프로젝트 시 프론트엔드 수정이 필요 없습니다.",
  },
  {
    q: "혼자 개발하면서 어려운 점은?",
    a: "추후 팀원이 추가될 때 적응이 어려울 수 있어서, README에 폴더 구조, API 패턴, 컴포넌트 사용법 등을 최대한 문서로 남겨뒀습니다.",
  },
];
