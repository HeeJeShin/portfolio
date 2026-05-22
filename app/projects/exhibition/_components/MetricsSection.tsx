export const MetricsSection = () => {
  const metricsWithReason = [
    {
      label: "개발 기간 단축",
      value: "50%",
      desc: "6개월 → 3개월",
      reason: "공용 컴포넌트로 어드민/유저 화면 동시 개발, 백엔드와 API 응답 구조를 맞춰 API 엔드포인트만 변경하면 양쪽 적용 가능",
    },
    {
      label: "페이지 개발 시간",
      value: "70%",
      desc: "2주 → 3-5일",
      reason: "56개 공용 컴포넌트 + 23개 커스텀 훅 라이브러리 구축으로 CRUD 페이지 빠르게 생성",
    },
    {
      label: "테스트 케이스",
      value: "216개",
      desc: "자동 문서화",
      reason: "Claude Code로 테스트 케이스 작성 자동화, CSV 기반 문서화로 QA 커뮤니케이션 효율화",
    },
    {
      label: "런타임 에러",
      value: "90%↓",
      desc: "타입 시스템 도입",
      reason: "TypeScript + Zod 스키마로 API 응답 타입 검증, 컴파일 단계에서 에러 사전 차단",
    },
  ];

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">성과</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {metricsWithReason.map((metric) => (
          <div
            key={metric.label}
            className="bg-white border border-gray-200 rounded-xl p-5"
          >
            <div className="flex items-baseline gap-3 mb-2">
              <p className="text-3xl font-bold text-[#191979]">{metric.value}</p>
              <p className="font-medium text-gray-900">{metric.label}</p>
            </div>
            <p className="text-sm text-gray-700 mb-2">{metric.desc}</p>
            <p className="text-xs text-gray-500 leading-relaxed break-keep">{metric.reason}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
