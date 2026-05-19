// O2Meet JSP → Next.js 마이그레이션

// 기술 스택
export const techStack = [
  "Next.js 14",
  "TypeScript",
  "Zustand",
  "MUI (Material-UI)",
  "Zod",
];

// 마이그레이션 성과
export const metrics = [
  { label: "초기 로딩", value: "개선", desc: "SSR로 초기 렌더링 속도 향상" },
  { label: "코드 재사용", value: "향상", desc: "컴포넌트 기반 구조로 전환" },
  { label: "유지보수", value: "용이", desc: "JSP include → React 컴포넌트" },
];

// ============================================
// 마이그레이션 배경 - JSP의 한계
// ============================================

export const jspLimitations = {
  title: "JSP 기반 시스템의 한계",
  problems: [
    {
      issue: "include를 통한 전체 페이지 삽입",
      detail: "공통 부분을 include로 삽입하면 전체 페이지가 들어가서 코드 재사용이 어려움",
    },
    {
      issue: "JavaScript로 동적 태그 생성",
      detail: "HTML을 문자열로 조립하는 방식 → 유지보수 어려움, 오타 찾기 힘듦",
      code: `
// JSP에서 흔히 쓰던 방식
let html = '';
html += '<div class="product_list">';
html += '<span class="price">' + price + '</span>';
html += '</div>';
$('#container').html(html);`,
    },
    {
      issue: "컨트롤러에서 상황별 JSP 분리",
      detail: "조건에 따라 다른 JSP를 반환하는 복잡한 구조 → 소스코드 비대화",
    },
  ],
};

// ============================================
// Next.js 전환으로 개선된 점
// ============================================

// 1. 컴포넌트 기반 구조
export const componentBasedStructure = {
  before: `
// JSP - 문자열로 HTML 조립
let html = '';
goodsList.forEach(goods => {
  html += '<li>';
  html += '<span class="name">' + goods.name + '</span>';
  html += '<span class="price">' + goods.price + '</span>';
  html += '</li>';
});
$('.list').html(html);`,
  after: `
// React - 컴포넌트로 분리
const GoodsItem = ({ goods }) => (
  <li>
    <span className="name">{goods.name}</span>
    <span className="price">{goods.price}</span>
  </li>
);

const GoodsList = ({ goodsList }) => (
  <ul className="list">
    {goodsList.map(goods => <GoodsItem key={goods.id} goods={goods} />)}
  </ul>
);`,
  benefit: "재사용 가능, 수정 시 해당 컴포넌트만 변경",
};

// 2. MUI로 빠른 UI 구현
export const muiAdoption = {
  reason: "기존 스타일 없이 빠르게 UI 구현하기 위한 전략적 선택",
  benefits: [
    "미리 구성된 컴포넌트로 개발 속도 향상",
    "프로퍼티 기반 스타일링으로 커스터마이징 용이",
    "일관된 디자인 시스템 적용",
  ],
};

// 3. HOC로 권한 분리
export const authHOC = {
  title: "관리자/사용자 권한 분리",
  code: `
// Auth, AdminAuth 컴포넌트로 권한별 접근 제어
const AdminAuth = ({ children }) => {
  const { isAdmin } = useAuthStore();

  if (!isAdmin) {
    return <Redirect to="/login" />;
  }
  return children;
};

// 사용
<AdminAuth>
  <AdminDashboard />
</AdminAuth>`,
  benefit: "경로 기반 권한 분기 (/admin/* → 관리자만 접근)",
};

// 4. Zustand 상태 관리
export const zustandStateManagement = {
  title: "전역 상태 관리 단순화",
  before: "sessionStorage + 전역 변수로 흩어진 상태 관리",
  after: `
// useAuthStore.ts
const useAuthStore = create((set) => ({
  isLoggedIn: false,
  token: null,
  userInfo: null,

  login: (token, userInfo) => set({ isLoggedIn: true, token, userInfo }),
  logout: () => set({ isLoggedIn: false, token: null, userInfo: null }),
}));

// 어느 컴포넌트에서든 동일하게 접근
const { isLoggedIn, userInfo } = useAuthStore();`,
  benefit: "여러 페이지에서 일관된 사용자 정보 접근 가능",
};

// 5. Zod 스키마 검증
export const zodValidation = {
  title: "폼 유효성 검사 공통화",
  reason: "여러 폼에서 반복되는 검증(이메일, 사용자 ID 등)을 공통화",
  whyZod: [
    "TypeScript와 강력한 통합",
    "스키마 정의 → 타입 자동 추론",
    "런타임 타입 검증으로 안정성 확보",
  ],
  code: `
// 공통 스키마 정의
const userSchema = z.object({
  email: z.string().email("올바른 이메일 형식이 아닙니다"),
  userId: z.string().min(4, "4자 이상 입력해주세요"),
  phone: z.string().regex(/^01[0-9]-\\d{4}-\\d{4}$/, "올바른 전화번호 형식이 아닙니다"),
});

// 타입 자동 추론
type User = z.infer<typeof userSchema>;
// { email: string; userId: string; phone: string; }`,
};

// ============================================
// 프로젝트 고찰 → 전시부스신청 프로젝트에 적용
// ============================================

export const projectReflections = [
  {
    lesson: "컴포넌트 설계 먼저",
    fromMigration: "JSP를 급하게 옮기다 보니 컴포넌트 분리가 어중간함",
    appliedTo: "전시부스신청에서는 페이지별 컴포넌트 구조를 먼저 설계",
  },
  {
    lesson: "상태 관리 설계 선행",
    fromMigration: "sessionStorage → Zustand 전환 시 누락된 부분 발생",
    appliedTo: "전시부스신청에서는 store 구조를 먼저 설계 후 개발",
  },
  {
    lesson: "검증 로직 공통화",
    fromMigration: "폼마다 비슷한 검증 코드 중복",
    appliedTo: "전시부스신청에서는 Zod 스키마로 검증 로직 재사용",
  },
];

// 마이그레이션 경험 → 전시부스신청에 적용
export const experienceApplied = {
  title: "마이그레이션 경험이 다음 프로젝트 품질에 영향",
  summary: `
JSP → Next.js 마이그레이션을 통해
컴포넌트 설계, 상태 관리, 타입 시스템의 중요성을 체감.

이 경험을 바탕으로 전시부스신청 프로젝트에서는:
- 처음부터 TypeScript strict 모드 적용
- Zustand store 구조 선설계
- Zod로 폼 검증 공통화
- MUI 컴포넌트 적극 활용

→ 더 깔끔한 코드베이스와 빠른 개발 속도 확보
`,
};
