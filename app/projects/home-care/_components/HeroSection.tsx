import { projectInfo } from "../_data/constants";

export const HeroSection = () => {
  const { period, demo, github, spec, prototype, research, highlights } = projectInfo;

  return (
    <section className="mb-16">
      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3 mb-4">
        <span className="px-3 py-1 border border-gray-300 text-gray-700 rounded-full text-sm font-medium w-fit">
          {period}
        </span>
        <span className="hidden md:inline text-gray-400">|</span>
        <span className="text-gray-600 text-sm">의료 헬스케어 도메인 · Claude Design + Claude Code</span>
      </div>
      <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
        홈펌프 항암제 자가관리 웹앱
      </h1>
      <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
        퇴원 후 <strong className="text-gray-900">2박 3일(44시간)</strong> 동안 환자가 안심하고 홈펌프를 자가 점검할 수 있도록 돕는 모바일 웹앱.
        <br />
        <strong className="text-gray-900">Claude Design</strong>으로 디자인하고 <strong className="text-gray-900">Claude Code</strong>로 구현한 AI 협업 프로젝트.
      </p>

      {/* 프로젝트 배경 */}
      <div className="mt-8 bg-gray-50 rounded-xl p-6 border border-gray-200">
        <h3 className="font-bold text-gray-900 mb-3">
          프로젝트 배경
        </h3>
        <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
          <p>
            <strong className="text-gray-900">서울대학교병원 임상간호연구</strong>에 개발자로 참여하게 되었습니다.
          </p>
          <p>
            <strong className="text-gray-900">팀명:</strong> {research.team}<br/>
            <strong className="text-gray-900">소속:</strong> {research.department}<br/>
            <strong className="text-gray-900">연구제목:</strong> {research.title}
          </p>
          <p>
            퇴원 후 자가관리 시 환자가 불안해하는 문제를 해결하기 위한 <strong className="text-gray-900">임상간호연구</strong>에 개발자로 참여했습니다.
          </p>
          <p>
            <strong className="text-gray-900">Claude Design</strong>으로 요구사항을 정리하고 기획서를 작성한 뒤,
            <strong className="text-gray-900">Claude Code</strong>로 기술명세서 기반 구현을 진행했습니다.
          </p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {highlights.map((highlight) => (
            <span
              key={highlight}
              className="px-2 py-1 bg-blue-100 text-[#191979] text-xs rounded-full font-medium"
            >
              {highlight}
            </span>
          ))}
        </div>
      </div>

      {/* AI 기반 개발 프로세스 */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="bg-blue-50 rounded-lg p-3 border border-blue-100">
          <p className="text-xs text-gray-500 mb-1">기획</p>
          <p className="text-sm font-medium text-gray-900">Claude Design</p>
        </div>
        <div className="bg-blue-50 rounded-lg p-3 border border-blue-100">
          <p className="text-xs text-gray-500 mb-1">명세</p>
          <p className="text-sm font-medium text-gray-900">기술명세서 직접 정의</p>
        </div>
        <div className="bg-blue-50 rounded-lg p-3 border border-blue-100">
          <p className="text-xs text-gray-500 mb-1">구현</p>
          <p className="text-sm font-medium text-gray-900">Claude Code</p>
        </div>
        <div className="bg-blue-50 rounded-lg p-3 border border-blue-100">
          <p className="text-xs text-gray-500 mb-1">아키텍처</p>
          <p className="text-sm font-medium text-gray-900">서버리스 PWA</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 mt-6">
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#191979] text-white rounded-lg hover:bg-[#191979]/90 transition-colors text-sm font-medium"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          서비스 보기
        </a>
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          GitHub
        </a>
        <a
          href={prototype}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
          </svg>
          기획서
        </a>
        <a
          href={spec}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          기술 명세서
        </a>
      </div>
    </section>
  );
};
