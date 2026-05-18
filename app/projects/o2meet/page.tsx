"use client";

import Link from "next/link";
import { ProjectHeader } from "@/app/_components/ProjectHeader";

const techStack = ["JSP", "jQuery", "KCP", "async/await"];

const features = [
  "온라인 전시관, 컨퍼런스, 티켓 구매 및 등록 서비스 프론트엔드 개발",
  "여러 행사에서 공통적으로 사용되는 API 호출 부분 공통화 작업",
  "복잡한 마이페이지 UI/UX 및 데이터 처리 구현",
  "상품 관리 및 결제 시스템 프론트엔드 구현",
  "KCP 결제 모듈 연동 및 복잡한 결제 프로세스 구현",
  "환불 처리 시스템 개발 및 KCP 환불 요청 API 연동",
];

const achievements = [
  { label: "등록솔루션 개발 기간", value: "2주 → 3-5일", desc: "마이페이지 포함" },
  { label: "프로젝트별 별도 개발", value: "불필요", desc: "재사용 가능한 시스템" },
];

const subProjects = [
  {
    name: "북키즈콘 (BookizCon)",
    period: "2025.02 - 2025.10",
    url: "https://bookizcon.com",
    desc: "어린이 놀이/교육 전시 및 글로벌 컨퍼런스 플랫폼",
    features: ["VOD 컨텐츠 시청", "입장티켓/컨퍼런스 구매", "사전등록 할인 및 쿠폰"],
  },
  {
    name: "SPP",
    period: "2024.04 - 2024.10",
    url: null,
    desc: "만화, 숏폼 콘텐츠 스타트업 비즈니스 미팅 및 전시회",
    features: ["세분화된 관심 분야 선택", "콘텐츠 전시/홍보 페이지", "비즈매칭 솔루션"],
  },
];

export default function O2MeetPage() {
  return (
    <div className="min-h-screen bg-white">
      <ProjectHeader
        title="O2MEET 온라인 행사 플랫폼"
        period="2022.05 - 현재"
        techStack={["JSP", "jQuery", "KCP 결제"]}
      />

      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Hero */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              2022.05 - 현재
            </span>
            <span className="text-gray-400">|</span>
            <span className="text-gray-600 text-sm">프론트엔드 5, 백엔드 4, 기획 4</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            O2MEET 온라인 행사 플랫폼
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
            웹사이트 솔루션, 비즈매칭 솔루션, 전시 패키지, 회의 패키지, 상품/결제 솔루션을 제공하는
            <strong className="text-blue-600"> 온라인 행사 플랫폼</strong>입니다.
          </p>
        </section>

        {/* 성과 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">성과</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {achievements.map((item) => (
              <div key={item.label} className="bg-blue-50 rounded-xl p-6 border border-blue-100 text-center">
                <p className="text-sm text-gray-600 mb-1">{item.label}</p>
                <p className="text-2xl font-bold text-blue-600 mb-1">{item.value}</p>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 주요 기능 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">담당 업무</h2>
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <ul className="space-y-3">
              {features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 서브 프로젝트 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">참여 프로젝트</h2>
          <div className="space-y-4">
            {subProjects.map((project) => (
              <div key={project.name} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">{project.name}</h3>
                    <p className="text-sm text-gray-500">{project.period}</p>
                  </div>
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-500 transition-colors"
                    >
                      사이트 방문 →
                    </a>
                  )}
                </div>
                <p className="text-gray-600 mb-3">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.features.map((f) => (
                    <span key={f} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">
                      {f}
                    </span>
                  ))}
                </div>
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
