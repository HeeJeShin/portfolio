export const MetricsSection = () => {
  const metricsWithReason = [
    {
      label: "개발 기간 단축",
      value: "일정 내",
      desc: "첫 행사 일정 안에 두 앱 오픈 · 이후 참가기업 74개사 행사 접수에 사용",
      reason: "공용 컴포넌트로 어드민/유저 화면 동시 개발, 백엔드와 API 응답 구조를 맞춰 API 엔드포인트만 변경하면 양쪽 적용 가능",
    },
    {
      label: "테스트 케이스",
      value: "216개",
      desc: "자동 문서화",
      reason: "Claude Code로 테스트 케이스 작성 자동화, CSV 기반 문서화로 QA 커뮤니케이션 효율화",
    },
    {
      label: "공용 컴포넌트 · 훅",
      value: "56개 · 23개",
      desc: "shared 패키지에서 두 앱이 함께 사용",
      reason: "DynamicForm·DataTable 같은 공통 컴포넌트와 도메인별 쿼리 훅을 모노레포 shared 패키지에 두고, 어드민과 사용자 앱이 같은 코드를 쓰게 했습니다",
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
