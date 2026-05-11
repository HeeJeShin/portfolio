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
    </section>
  );
};
