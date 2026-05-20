"use client";

import Link from "next/link";
import { ProjectHeader } from "@/app/_components/ProjectHeader";

const techStack = ["Next.js 14", "TypeScript", "Zustand", "MUI", "Zod"];

const benefits = [
  "SSR/SSG로 초기 로딩 속도 개선 (JSP 대비 체감 빨라짐)",
  "컴포넌트 단위 개발로 프로젝트 구조 단순화",
  "상태 관리 라이브러리(Zustand)로 데이터 흐름 명확화",
  "TypeScript 도입으로 런타임 에러 사전 방지",
  "Hot Reload로 개발 생산성 향상",
];

const jspLimitations = [
  {
    issue: "include를 통한 전체 페이지 삽입",
    detail: "공통 부분을 include로 삽입하면 전체 페이지가 들어가서 코드 재사용이 어려움",
  },
  {
    issue: "JavaScript로 동적 태그 생성",
    detail: "HTML을 문자열로 조립하는 방식 → 유지보수 어려움, 오타 찾기 힘듦",
  },
  {
    issue: "컨트롤러에서 상황별 JSP 분리",
    detail: "조건에 따라 다른 JSP를 반환하는 복잡한 구조 → 소스코드 비대화",
  },
];

const improvements = [
  {
    title: "컴포넌트 기반 구조",
    before: `// JSP - 문자열로 HTML 조립
let html = '';
goodsList.forEach(goods => {
  html += '<li>';
  html += '<span class="name">' + goods.name + '</span>';
  html += '</li>';
});
$('.list').html(html);`,
    after: `// React - 컴포넌트로 분리
const GoodsItem = ({ goods }) => (
  <li>
    <span className="name">{goods.name}</span>
  </li>
);

const GoodsList = ({ goodsList }) => (
  <ul className="list">
    {goodsList.map(goods =>
      <GoodsItem key={goods.id} goods={goods} />
    )}
  </ul>
);`,
    benefit: "재사용 가능, 수정 시 해당 컴포넌트만 변경",
  },
  {
    title: "HOC로 권한 분리",
    desc: "Auth, AdminAuth 컴포넌트로 권한별 접근 제어",
    code: `const AdminAuth = ({ children }) => {
  const { isAdmin } = useAuthStore();
  if (!isAdmin) return <Redirect to="/login" />;
  return children;
};

// 사용
<AdminAuth>
  <AdminDashboard />
</AdminAuth>`,
    benefit: "경로 기반 권한 분기 (/admin/* → 관리자만 접근)",
  },
  {
    title: "Zustand 상태 관리",
    desc: "sessionStorage + 전역 변수 → Zustand store로 상태 중앙화",
    code: `const useAuthStore = create((set) => ({
  isLoggedIn: false,
  token: null,
  userInfo: null,
  login: (token, userInfo) =>
    set({ isLoggedIn: true, token, userInfo }),
  logout: () =>
    set({ isLoggedIn: false, token: null, userInfo: null }),
}));

// 어느 컴포넌트에서든 동일하게 접근
const { isLoggedIn, userInfo } = useAuthStore();`,
    benefit: "여러 페이지에서 일관된 사용자 정보 접근",
  },
  {
    title: "Zod 스키마 검증",
    desc: "여러 폼에서 반복되는 검증(이메일, 사용자 ID 등)을 공통화",
    code: `const userSchema = z.object({
  email: z.string().email("올바른 이메일 형식이 아닙니다"),
  userId: z.string().min(4, "4자 이상 입력해주세요"),
  phone: z.string().regex(
    /^01[0-9]-\\d{4}-\\d{4}$/,
    "올바른 전화번호 형식이 아닙니다"
  ),
});

// 타입 자동 추론
type User = z.infer<typeof userSchema>;`,
    benefit: "TypeScript와 강력한 통합, 런타임 타입 검증",
  },
];

const migrationIssues = [
  {
    title: "Pages Router → App Router 전환",
    problem: "처음엔 Pages Router로 개발 시작, 중간에 React 경력 개발자 입사 후 App Router 제안",
    solution: "App Router로 전환 작업 진행",
    reason: "App Router가 서버 컴포넌트 기본 지원, 레이아웃 중첩, 더 직관적인 라우팅 구조 제공",
  },
  {
    title: "기존 CSS 파일 스타일 충돌",
    problem: "JSP에서 쓰던 .css 파일을 그대로 가져오니 Next.js에서 스타일이 제대로 적용 안 됨",
    solution: "CSS Modules 또는 MUI로 전환",
    reason: "Next.js는 글로벌 CSS import 제한, CSS Modules 권장",
  },
  {
    title: "MUI 컴포넌트 커스터마이징 어려움",
    problem: "MUI 기본 컴포넌트 스타일을 프로젝트에 맞게 수정하기 번거로움",
    solution: "sx prop, styled() 활용했으나 여전히 불편",
    reason: "다음 프로젝트(전시부스신청)에서는 Tailwind CSS 선택",
  },
];

const reflections = [
  {
    lesson: "컴포넌트 설계 먼저",
    from: "JSP를 급하게 옮기다 보니 컴포넌트 분리가 어중간함",
    applied: "전시부스신청에서는 페이지별 컴포넌트 구조를 먼저 설계",
  },
  {
    lesson: "상태 관리 설계 선행",
    from: "sessionStorage → Zustand 전환 시 누락된 부분 발생",
    applied: "전시부스신청에서는 store 구조를 먼저 설계 후 개발",
  },
  {
    lesson: "검증 로직 공통화",
    from: "폼마다 비슷한 검증 코드 중복",
    applied: "전시부스신청에서는 Zod 스키마로 검증 로직 재사용",
  },
];

export default function O2MeetMigrationPage() {
  return (
    <div className="min-h-screen bg-white">
      <ProjectHeader
        title="O2MEET Next.js 마이그레이션"
      />

      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Hero */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-white border border-gray-300 text-gray-700 rounded-full text-sm font-medium">
              2024.12 - 2025.02
            </span>
            <span className="text-gray-400">|</span>
            <span className="text-gray-600 text-sm">프론트엔드</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            O2MEET JSP → Next.js 마이그레이션
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
            다변화하는 요구사항을 효율적으로 수용하기 위해
            <strong className="text-blue-600"> JSP 기반 시스템을 Next.js로 마이그레이션</strong>하여
            컴포넌트 기반 구조를 도입했습니다.
          </p>
        </section>

        {/* 성과 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Next.js 전환 효과</h2>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <ul className="space-y-3">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                  <span className="text-blue-600 font-bold">•</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* JSP 한계 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">마이그레이션 배경 - JSP의 한계</h2>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="space-y-4">
              {jspLimitations.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-gray-100 text-gray-600 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-medium text-gray-900">{item.issue}</p>
                    <p className="text-sm text-gray-600">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 개선 사항 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Next.js 전환으로 개선된 점</h2>
          <div className="space-y-6">
            {improvements.map((item, idx) => (
              <div key={item.title} className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm">
                    {idx + 1}
                  </span>
                  {item.title}
                </h3>
                {item.desc && (
                  <p className="text-sm text-gray-600 mb-3">{item.desc}</p>
                )}
                {item.before && item.after && (
                  <div className="grid md:grid-cols-2 gap-4 mb-3">
                    <div>
                      <p className="text-xs font-medium text-red-600 mb-2">Before (JSP)</p>
                      <div className="bg-gray-900 rounded-lg p-3 overflow-x-auto">
                        <pre className="text-xs font-mono text-gray-100 whitespace-pre-wrap">{item.before}</pre>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-blue-600 mb-2">After (Next.js)</p>
                      <div className="bg-gray-900 rounded-lg p-3 overflow-x-auto">
                        <pre className="text-xs font-mono text-gray-100 whitespace-pre-wrap">{item.after}</pre>
                      </div>
                    </div>
                  </div>
                )}
                {item.code && !item.before && (
                  <div className="bg-gray-900 rounded-lg p-4 mb-3 overflow-x-auto">
                    <pre className="text-xs font-mono text-gray-100 whitespace-pre-wrap">{item.code}</pre>
                  </div>
                )}
                <div className="flex items-start gap-2 text-sm">
                  <span className="text-blue-500 font-medium">효과:</span>
                  <span className="text-gray-600">{item.benefit}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 마이그레이션 중 겪은 이슈 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">마이그레이션 중 겪은 이슈</h2>
          <div className="space-y-4">
            {migrationIssues.map((issue, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="font-bold text-gray-900 mb-3">{issue.title}</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-xs font-medium text-gray-500 mb-2">문제</p>
                    <p className="text-sm text-gray-700">{issue.problem}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-xs font-medium text-gray-500 mb-2">대응</p>
                    <p className="text-sm text-gray-700">{issue.solution}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-xs font-medium text-gray-500 mb-2">배운 점</p>
                    <p className="text-sm font-medium text-blue-600">{issue.reason}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 고찰 → 전시부스신청에 적용 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">프로젝트 고찰 → 전시부스신청에 적용</h2>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <p className="text-gray-700 mb-6">
              마이그레이션 경험에서 배운 점을 바탕으로 <strong className="text-blue-600">전시부스신청 프로젝트</strong>를 더 잘 설계했습니다.
            </p>
            <div className="space-y-4">
              {reflections.map((r, i) => (
                <div key={i} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <p className="font-medium text-gray-900 mb-2">{r.lesson}</p>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="text-red-500">마이그레이션:</span>
                      <span className="text-gray-600">{r.from}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-blue-600">적용:</span>
                      <span className="text-gray-600">{r.applied}</span>
                    </div>
                  </div>
                </div>
              ))}
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
