export const HeroSection = () => {
  return (
    <section className="mb-16">
      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3 mb-4">
        <span className="px-3 py-1 border border-gray-300 text-gray-700 rounded-full text-sm font-medium w-fit">
          2025.05 (2일)
        </span>
        <span className="hidden md:inline text-gray-400">|</span>
        <span className="text-gray-600 text-sm">솔로 프로젝트 (Claude Design + Claude Code)</span>
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
        <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-[#191979] text-white text-xs flex items-center justify-center">💡</span>
          프로젝트 배경
        </h3>
        <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
          <p>
            <strong className="text-gray-900">클라이언트는 병동 간호사인 친언니.</strong>
            병동에서 AI를 활용한 환자 자가관리 앱 도입 프로젝트를 소규모로 진행 중이었습니다.
          </p>
          <p>
            기존에는 <strong className="text-gray-900">종이 교육자료</strong>로 환자에게 홈펌프 관리법을 안내했지만,
            퇴원 후 환자들이 불안해하거나 체크 시간을 놓치는 경우가 많았습니다.
            특히 항암 치료 중인 환자에게 44시간 동안 &quot;제대로 하고 있는 건지&quot; 확신을 주는 것이 중요했습니다.
          </p>
          <p>
            이야기를 듣고 <strong className="text-gray-900">&quot;이건 내가 만들어줄 수 있겠다&quot;</strong>고 생각했습니다.
            의료 현장의 실제 니즈를 듣고, Claude Design으로 빠르게 프로토타입을 만들어 피드백을 받고,
            Claude Code로 프로덕션 코드까지 2일 만에 완성했습니다.
          </p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="px-2 py-1 bg-blue-100 text-[#191979] text-xs rounded-full font-medium">
            실제 의료 현장 니즈
          </span>
          <span className="px-2 py-1 bg-blue-100 text-[#191979] text-xs rounded-full font-medium">
            AI 협업 개발
          </span>
          <span className="px-2 py-1 bg-blue-100 text-[#191979] text-xs rounded-full font-medium">
            빠른 프로토타이핑
          </span>
        </div>
      </div>

      {/* 핵심 기능 요약 */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="bg-blue-50 rounded-lg p-3 border border-blue-100">
          <p className="text-xs text-gray-500 mb-1">주요 기능</p>
          <p className="text-sm font-medium text-gray-900">하루 3회 체크</p>
        </div>
        <div className="bg-blue-50 rounded-lg p-3 border border-blue-100">
          <p className="text-xs text-gray-500 mb-1">알림</p>
          <p className="text-sm font-medium text-gray-900">웹 푸시 알람</p>
        </div>
        <div className="bg-blue-50 rounded-lg p-3 border border-blue-100">
          <p className="text-xs text-gray-500 mb-1">기록</p>
          <p className="text-sm font-medium text-gray-900">PDF 내보내기</p>
        </div>
        <div className="bg-blue-50 rounded-lg p-3 border border-blue-100">
          <p className="text-xs text-gray-500 mb-1">안전</p>
          <p className="text-sm font-medium text-gray-900">응급 연락처</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 mt-6">
        <a
          href="https://home-care-blond.vercel.app/"
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
          href="https://github.com/HeeJeShin/home_care"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          GitHub
        </a>
      </div>
    </section>
  );
};
