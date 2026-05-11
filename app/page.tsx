"use client";

import Link from "next/link";

const projects = [
  {
    id: "4j",
    title: "4J - 행사장 수용인원 자동계산",
    subtitle: "사내 AI Boost Challenge 해커톤",
    period: "2026.01",
    description: "AI 기반 행사장 수용인원 자동 계산 및 실시간 혼잡도 모니터링 서비스",
    tags: ["Next.js", "TypeScript", "Google Gemini AI"],
    highlights: ["Google Gemini AI 연동", "프롬프트 설계", "실시간 모니터링"],
    demo: "https://4j-mgqp.vercel.app/",
    github: "https://github.com/HeeJeShin/4j",
  },
  {
    id: "exhibition",
    title: "전시부스 신청 관리 어드민 시스템",
    subtitle: "2단계 어드민 시스템 개발",
    period: "2025.02 - 2025.04",
    description: "슈퍼어드민 + 프로젝트 어드민 구조의 전시회 참가신청 관리 시스템",
    tags: ["Next.js", "TypeScript", "TanStack Query", "Turborepo"],
    highlights: ["50% 기간 단축", "70% 개발 시간 절감", "216개 테스트 케이스"],
    metrics: {
      period: "50%",
      dev: "70%",
      tests: "216개",
    },
  },
  {
    id: "smart-tour",
    title: "스마트관광프로젝트",
    subtitle: "인제 / 용인 스마트 관광 플랫폼",
    period: "2025.06 - 2025.11",
    description: "숙박/체험 예약, 투어패스 판매, 커뮤니티 등 스마트 관광 플랫폼",
    tags: ["Next.js", "TypeScript", "KCP 결제"],
    highlights: ["NICE 본인인증", "KCP 결제 연동", "Safari 호환성"],
    links: [
      { label: "인제", url: "https://tour.inje.go.kr/" },
      { label: "용인", url: "https://itour.yongin.go.kr/" },
    ],
  },
  {
    id: "o2meet-migration",
    title: "O2MEET Next.js 마이그레이션",
    subtitle: "JSP → Next.js 전환",
    period: "2024.12 - 2025.02",
    description: "JSP 기반 시스템을 Next.js로 마이그레이션하여 컴포넌트 기반 구조 도입",
    tags: ["Next.js", "TypeScript", "React Query", "MUI"],
    highlights: ["SSR 최적화", "다이나믹 라우팅", "재사용성 향상"],
  },
  {
    id: "pos-kiosk",
    title: "POS/Kiosk 프로젝트",
    subtitle: "디키디키 키즈카페",
    period: "2024.11 - 2025.02",
    description: "동대문역사문화공원역 어린이 키즈카페용 POS/Kiosk 시스템",
    tags: ["JavaScript", "KCP 결제", "비콘"],
    highlights: ["KCP 결제 연동", "영수증 출력", "비콘 대여/반납"],
  },
  {
    id: "o2meet",
    title: "O2MEET 온라인 행사 플랫폼",
    subtitle: "개발 및 유지보수",
    period: "2022.05 - 현재",
    description: "온라인 전시관, 컨퍼런스, 티켓 구매 등 행사 플랫폼 프론트엔드",
    tags: ["JSP", "jQuery", "KCP"],
    highlights: ["등록솔루션 2주→3-5일", "결제 시스템 구축", "공통화 작업"],
    subProjects: ["북키즈콘 (2025.02-10)", "SPP (2024.04-10)"],
  },
];

const skills = {
  Frontend: ["React", "Next.js", "TypeScript", "JavaScript"],
  "데이터 페칭": ["TanStack Query"],
  상태관리: ["Zustand"],
  스타일링: ["Tailwind CSS"],
  테스트: ["Vitest"],
  "빌드 도구": ["Turborepo", "pnpm workspace"],
  DevOps: ["Docker", "GitLab CI/CD", "ArgoCD"],
  Tools: ["Claude Code", "IntelliJ IDEA", "Figma"],
};

export default function Home() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="no-print sticky top-0 z-10 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-semibold text-gray-900">신희제</span>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/HeeJeShin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <button
              onClick={handlePrint}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
            >
              PDF 저장
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">신희제</h1>
          <p className="text-xl text-blue-600 font-medium mb-6">Frontend Developer</p>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <div className="flex items-start gap-3">
              <span className="text-blue-600 font-bold text-lg">01</span>
              <div>
                <p className="font-semibold text-gray-900">무언가를 만드는 것을 좋아합니다.</p>
                <p className="text-gray-600">
                  요리사, 바리스타를 거쳐 개발자가 된 것도 &apos;내 손으로 무언가를 만들고 싶다&apos;는 생각에서 시작되었습니다.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-blue-600 font-bold text-lg">02</span>
              <div>
                <p className="font-semibold text-gray-900">AI를 도구로 적극 활용합니다.</p>
                <p className="text-gray-600">
                  Claude Code를 일상적인 개발 파트너로 활용하며, 설계 검토, 테스트 케이스 도출, 리팩토링, 문서화까지 폭넓게 적용하고 있습니다.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-blue-600 font-bold text-lg">03</span>
              <div>
                <p className="font-semibold text-gray-900">도메인을 이해하려는 노력을 중요하게 생각합니다.</p>
                <p className="text-gray-600">
                  덕분에 디자인 리소스가 부족하거나 요구사항이 급변하는 상황에서도 유연하게 대처할 수 있었습니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
            경력 <span className="text-blue-600">4년</span>
          </h2>
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-900">이즈피엠피 (EZPMP)</h3>
                <p className="text-gray-600">정규직 | 프론트엔드 | 선임연구원</p>
              </div>
              <span className="text-sm text-blue-600 font-medium bg-blue-50 px-3 py-1 rounded-full">
                2022.05 - 재직중
              </span>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
            기술 스택
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">{category}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
            프로젝트
          </h2>
          <div className="space-y-4">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="block bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors group"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-500">{project.subtitle}</p>
                  </div>
                  <span className="text-sm text-gray-400 whitespace-nowrap">
                    {project.period}
                  </span>
                </div>

                <p className="text-gray-600 text-sm mb-4">{project.description}</p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-gray-500 bg-gray-200 px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* External Links */}
                {(project.demo || project.github || project.links) && (
                  <div className="flex gap-3 mt-4 pt-3 border-t border-gray-200">
                    {project.demo && (
                      <span className="text-xs text-blue-600 hover:underline">
                        Demo ↗
                      </span>
                    )}
                    {project.github && (
                      <span className="text-xs text-gray-600 hover:underline">
                        GitHub ↗
                      </span>
                    )}
                    {project.links?.map((link) => (
                      <span key={link.label} className="text-xs text-blue-600 hover:underline">
                        {link.label} ↗
                      </span>
                    ))}
                  </div>
                )}
              </Link>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
            학력
          </h2>
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-bold text-gray-900">서울사이버대학교</h3>
                <p className="text-gray-600">컴퓨터공학과 (편입 3학년)</p>
              </div>
              <span className="text-sm text-gray-400">
                2025.03 - 재학 중 (2026.02 졸업예정)
              </span>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
            연락처
          </h2>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="font-medium text-gray-900">010-2390-2038</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium text-gray-900">heeheehee.hj@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500">GitHub</p>
                <a
                  href="https://github.com/HeeJeShin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-blue-600 hover:underline"
                >
                  github.com/HeeJeShin
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8">
        <div className="max-w-4xl mx-auto px-6 text-center text-sm text-gray-500">
          <p>Claude Code와 함께 개발했습니다.</p>
        </div>
      </footer>
    </div>
  );
}
