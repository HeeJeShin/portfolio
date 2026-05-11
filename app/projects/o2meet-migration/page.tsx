"use client";

import Link from "next/link";

const techStack = ["Next.js", "TypeScript", "React Query", "Zustand", "Emotion", "Zod", "MUI"];

const highlights = [
  {
    title: "JSP 기반 시스템의 한계 극복",
    items: [
      "include를 통한 전체 페이지 삽입 방식 → 코드 재사용 어려움",
      "JavaScript로 동적 태그 생성 방식의 유지보수 문제",
      "컨트롤러에서 상황에 따라 JSP 분리하는 복잡한 구조",
    ],
  },
  {
    title: "Next.js 도입 효과",
    items: [
      "컴포넌트 기반 구조로 재사용성 및 유지보수 용이성 향상",
      "SSR을 통한 SEO 최적화 및 초기 로딩 성능 개선",
      "다이나믹 라우팅: o2meet.io/{projectCd}/{siteId} 형태 구현",
    ],
  },
];

export default function O2MeetMigrationPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-medium">돌아가기</span>
          </Link>
          <span className="text-sm text-gray-400">프로젝트 상세</span>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Hero */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              2024.12 - 2025.02
            </span>
            <span className="text-gray-400">|</span>
            <span className="text-gray-600 text-sm">프론트엔드</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            O2MEET Next.js 마이그레이션
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
            다변화하는 요구사항을 효율적으로 수용하기 위해 <strong className="text-blue-600">JSP 기반 시스템을 Next.js로 마이그레이션</strong>하여
            컴포넌트 기반 구조를 도입했습니다.
          </p>
        </section>

        {/* Highlights */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">마이그레이션 배경 및 효과</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {highlights.map((section) => (
              <div key={section.title} className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                <h3 className="font-bold text-gray-900 mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-blue-500 mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">기술 스택</h2>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-blue-50 hover:text-blue-700 transition-colors"
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
