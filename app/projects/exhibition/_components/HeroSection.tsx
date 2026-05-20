export const HeroSection = () => {
  return (
    <section className="mb-16">
      <div className="flex items-center gap-3 mb-4">
        <span className="px-3 py-1 border border-gray-300 text-gray-700 rounded-full text-sm font-medium">
          2025.02 - 2025.04
        </span>
        <span className="text-gray-400">|</span>
        <span className="text-gray-600 text-sm">서비스기획자 2 + 백엔드 1 + 프론트엔드 1</span>
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        전시부스 신청 관리 시스템
      </h1>
      <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
        슈퍼어드민 + 프로젝트 어드민 구조의 <strong className="text-gray-900">2단계 어드민 시스템</strong>으로,
        전시회 참가신청 접수부터 입금 확인, 인보이스 발행까지 전체 워크플로우를 관리합니다.
      </p>
      <div className="flex flex-wrap gap-3 mt-6">
        <a
          href="https://ipsolution-admin.ezpmp.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          어드민
        </a>
        <a
          href="https://ipsolution.ezpmp.com/GETEC/120006"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          유저 페이지
        </a>
      </div>
    </section>
  );
};
