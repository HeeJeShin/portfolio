"use client";

import Link from "next/link";
import { ProjectHeader } from "@/app/_components/ProjectHeader";
import { getProjectById } from "@/app/_data/constants";

// 공통 데이터에서 프로젝트 정보 가져오기
const project = getProjectById("o2meet-migration")!;

const techStack = ["Next.js 14", "TypeScript", "Zustand", "Tailwind CSS", "Zod"];

const lighthouseMetrics = [
  { metric: "LCP (최대 콘텐츠 표시)", before: "50.1s", after: "20.1s", improvement: "60%↓" },
  { metric: "TTI (인터랙티브 시간)", before: "50.1s", after: "20.4s", improvement: "59%↓" },
  { metric: "CLS (레이아웃 안정성)", before: "0.248", after: "0.000", improvement: "100%↓" },
  { metric: "미사용 JavaScript", before: "1,262KB", after: "25KB", improvement: "98%↓" },
  { metric: "미사용 CSS", before: "879KB", after: "0KB", improvement: "100%↓" },
];

const firstAttemptIssues = [
  {
    issue: "어설픈 TypeScript 도입으로 버그 다발",
    detail: "초기부터 타입을 정의하지 않고 중간에 수정하면서 진행 → 타입 불일치로 런타임 버그 다수 발생",
  },
  {
    issue: "Pages Router → App Router 전환 혼란",
    detail: "처음 Pages Router로 시작했다가 중간에 App Router로 전환하며 시간 소요",
  },
  {
    issue: "MUI와 기존 CSS 파일 혼용으로 스타일 충돌",
    detail: "JSP에서 사용하던 .css 파일과 MUI를 함께 사용하니 스타일 우선순위 충돌 발생",
  },
];

const secondAttemptImprovements = [
  {
    title: "TypeScript 타입 선행 정의",
    before: "중간에 타입 수정하면서 진행 → 타입 불일치로 런타임 버그 다발",
    after: "API 응답 타입을 먼저 정의하고 개발 시작 → 컴파일 단계에서 에러 방지",
  },
  {
    title: "Tailwind CSS로 스타일 통일",
    before: "MUI + 기존 .css 파일 혼용 → 스타일 우선순위 충돌",
    after: "Tailwind CSS로 통일 → 충돌 없이 일관된 스타일링",
  },
  {
    title: "App Router 처음부터 적용",
    before: "Pages Router → App Router 전환 작업 필요",
    after: "App Router 기반으로 설계, 서버 컴포넌트 활용",
  },
  {
    title: "컴포넌트/상태 관리 설계 선행",
    before: "JSP를 급하게 옮기다 보니 컴포넌트 분리가 어중간함",
    after: "페이지별 컴포넌트 구조와 store 구조를 먼저 설계 후 개발",
  },
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
              {project.period}
            </span>
            <span className="text-gray-400">|</span>
            <span className="text-gray-600 text-sm">프론트엔드</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            O2MEET JSP → Next.js 마이그레이션
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mb-4">
            1차 마이그레이션 실패 경험을 바탕으로 2차에서 부족한 점을 개선하여
            <strong className="text-blue-600"> LCP 60% 개선, 미사용 코드 99% 감소</strong>를 달성했습니다.
          </p>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              {project.demo.replace("https://", "")} 바로가기
            </a>
          )}
        </section>

        {/* Lighthouse 성능 측정 결과 */}
        <section id="lighthouse" className="mb-12 scroll-mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Lighthouse 성능 측정 결과</h2>
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-100 mb-6">
            <p className="text-gray-700 mb-4">
              JSP 기반 <strong>bookizcon.com</strong>과 Next.js로 마이그레이션한 <strong>{project.demo?.replace("https://", "").replace("/", "")}</strong>을
              Lighthouse로 측정하여 성능을 비교했습니다.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-blue-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">지표</th>
                    <th className="text-center py-3 px-4 font-semibold text-red-600">Before (JSP)</th>
                    <th className="text-center py-3 px-4 font-semibold text-blue-600">After (Next.js)</th>
                    <th className="text-center py-3 px-4 font-semibold text-green-600">개선율</th>
                  </tr>
                </thead>
                <tbody>
                  {lighthouseMetrics.map((item, i) => (
                    <tr key={i} className="border-b border-blue-100">
                      <td className="py-3 px-4 text-gray-700">{item.metric}</td>
                      <td className="py-3 px-4 text-center text-gray-600">{item.before}</td>
                      <td className="py-3 px-4 text-center font-medium text-blue-600">{item.after}</td>
                      <td className="py-3 px-4 text-center font-bold text-green-600">{item.improvement}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl border border-gray-200 p-5 text-center">
              <p className="text-3xl font-bold text-blue-600 mb-1">60%</p>
              <p className="text-sm text-gray-600">LCP 개선</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-5 text-center">
              <p className="text-3xl font-bold text-blue-600 mb-1">99%</p>
              <p className="text-sm text-gray-600">미사용 코드 감소</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-5 text-center">
              <p className="text-3xl font-bold text-blue-600 mb-1">100%</p>
              <p className="text-sm text-gray-600">CLS 개선</p>
            </div>
          </div>
        </section>

        {/* 1차 마이그레이션 실패 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">1차 마이그레이션 실패 ({project.firstAttemptPeriod})</h2>
          <div className="bg-red-50 rounded-xl p-6 border border-red-100 mb-6">
            <p className="text-gray-700">
              첫 번째 마이그레이션 시도에서 <strong className="text-red-600">여러 기술적 문제점</strong>을 발견했습니다.
              이 경험이 2차 마이그레이션 성공의 밑거름이 되었습니다.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-4">1차에서 발견한 문제점</h3>
            <div className="space-y-4">
              {firstAttemptIssues.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
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

        {/* 2차 마이그레이션 성공 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">2차 마이그레이션 성공 ({project.period})</h2>
          <div className="bg-green-50 rounded-xl p-6 border border-green-100 mb-6">
            <p className="text-gray-700">
              1차 실패 경험을 바탕으로 <strong className="text-green-600">부족한 점을 개선</strong>하여
              2차 마이그레이션을 성공적으로 완료했습니다.
            </p>
          </div>
          <div className="space-y-4">
            {secondAttemptImprovements.map((item, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm">
                    {i + 1}
                  </span>
                  {item.title}
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-red-50 rounded-lg p-4">
                    <p className="text-xs font-medium text-red-600 mb-2">1차 (문제)</p>
                    <p className="text-sm text-gray-700">{item.before}</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="text-xs font-medium text-green-600 mb-2">2차 (개선)</p>
                    <p className="text-sm text-gray-700">{item.after}</p>
                  </div>
                </div>
              </div>
            ))}
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
