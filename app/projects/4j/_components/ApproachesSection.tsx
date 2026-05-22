export const ApproachesSection = () => {
  const approaches = [
    {
      id: "ai-analysis",
      title: "AI 도면 분석 프롬프트 설계",
      problem: "Gemini AI에 도면 이미지를 어떻게 분석시킬지, 도면이 아닌 이미지는 어떻게 처리할지",
      solution: "도면 분석용 프롬프트 직접 작성 + 도면이 아닌 경우 \"OOO 관련 이미지네요~ 도면을 올려주세요\" 안내 처리",
      effect: "도면 분석 + 비도면 이미지 예외처리까지 완료",
    },
    {
      id: "monitoring",
      title: "혼잡도 모니터링 대시보드",
      problem: "심사위원 중간평가: \"혼잡할 때 주최측이 알 수 있는 방법이 있나요?\"",
      solution: "CCTV 인원 추정 등으로 데이터가 수집된다는 가정 하에, 혼잡도 시각화 대시보드 구현",
      effect: "인원 데이터만 있으면 바로 사용 가능한 모니터링 서비스 제공",
    },
  ];

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">기술적 접근법</h2>

      <div className="space-y-4">
        {approaches.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl border border-gray-200 p-5"
          >
            <h3 className="font-bold text-gray-900 mb-3">{item.title}</h3>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-xs font-medium text-gray-500 mb-2">문제</p>
                <p className="text-sm text-gray-700">{item.problem}</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-xs font-medium text-gray-500 mb-2">해결</p>
                <p className="text-sm text-gray-700">{item.solution}</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-xs font-medium text-gray-500 mb-2">효과</p>
                <p className="text-sm font-medium text-[#191979]">{item.effect}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
