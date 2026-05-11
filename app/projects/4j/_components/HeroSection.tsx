export const HeroSection = () => {
  return (
    <section className="mb-16">
      <div className="flex items-center gap-3 mb-4">
        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
          2025.04
        </span>
        <span className="text-gray-400">|</span>
        <span className="text-gray-600 text-sm">1박2일 해커톤</span>
        <div className="ml-auto flex gap-2">
          <a
            href="/doc/행사장수용인원자동계산_20260106_4J.pptx"
            download
            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors flex items-center gap-1"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            기획서
          </a>
          <a
            href="https://4j-mgqp.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-500 transition-colors"
          >
            Demo 보기 →
          </a>
        </div>
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        4J - 행사장 수용인원 자동계산
      </h1>
      <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
        <strong className="text-blue-600">AI 기반</strong> 행사장 수용인원 자동 계산 및
        실시간 혼잡도 모니터링 서비스입니다.
        도면 이미지를 업로드하면 AI가 자동으로 면적과 출입구를 분석하여 정확한 수용인원을 계산합니다.
      </p>

      {/* 해커톤 배경 */}
      <div className="mt-6 bg-gray-50 rounded-xl p-4 border border-gray-200">
        <div className="flex items-start gap-3">
          <span className="text-xl">🏆</span>
          <div>
            <h3 className="font-bold text-gray-900 text-sm mb-1">해커톤 프로젝트</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• <strong>기간:</strong> 1박2일 (약 24시간)</li>
              <li>• <strong>사전조건:</strong> Google Gemini AI API 키 (주최측 팀별 제공)</li>
              <li>• <strong>제약사항:</strong> 백엔드 서버 없이 프론트엔드만으로 구현</li>
            </ul>
            <p className="text-xs text-gray-500 mt-2">
              짧은 시간 내 AI API를 활용한 프로토타입 개발에 집중했습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
