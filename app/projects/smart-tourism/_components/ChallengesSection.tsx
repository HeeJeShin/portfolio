export const ChallengesSection = ({ embedded = false }: { embedded?: boolean }) => {
  const challenges = [
    {
      id: "payment",
      title: "결제 로직 아키텍처 개선 제안",
      problem: "모바일 네트워크 불안정으로 결제 완료 후 DB 업데이트 누락 발생",
      solution: "프론트는 결제 요청만, 완료 처리는 백엔드에서 하도록 구조 변경 제안 및 설득",
      effect: "결제 데이터 정합성 확보, 사용자 불편 해소",
    },
  ];

  return (
    <section className={embedded ? "" : "mb-16"}>
      {!embedded && <h2 className="text-2xl font-bold text-gray-900 mb-8">문제 해결 방식</h2>}

      <div className="space-y-4">
        {challenges.map((item) => (
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
