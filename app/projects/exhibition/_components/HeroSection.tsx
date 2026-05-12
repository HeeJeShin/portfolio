export const HeroSection = () => {
  return (
    <section className="mb-16">
      <div className="flex items-center gap-3 mb-4">
        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
          2025.02 - 2025.04
        </span>
        <span className="text-gray-400">|</span>
        <span className="text-gray-600 text-sm">백엔드 1 + 프론트엔드 1</span>
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        전시부스 신청 관리 시스템
      </h1>
      <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
        슈퍼어드민 + 프로젝트 어드민 구조의 <strong className="text-blue-600">2단계 어드민 시스템</strong>으로,
        전시회 참가신청 접수부터 입금 확인, 인보이스 발행까지 전체 워크플로우를 관리합니다.
      </p>
      <div className="flex flex-wrap gap-3 mt-6">
        <a
          href="https://ipsolution-admin.ezpmp.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors text-sm font-medium"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
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
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          유저 페이지
        </a>
      </div>
    </section>
  );
};
