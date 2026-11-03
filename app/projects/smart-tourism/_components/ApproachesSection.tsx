export const ApproachesSection = () => {
  const approaches = [
    {
      id: "kcp-payment",
      title: "KCP PG 결제 연동",
      problem: "PC/모바일 환경별 다른 결제 플로우가 필요하고, 결제 화면이 여러 페이지에 흩어져 있었음",
      solution: "PC는 팝업, 모바일은 페이지 전환으로 분기하고, useKcpPayment 훅으로 결제 처리를 공통화해 여러 페이지에서 재사용",
      effect: "환경별로 맞는 결제 UX, 결제 실패 유형별로 다음 행동을 안내",
      flow: ["거래등록", "PayUrl로 form submit", "KCP 인증 후 Ret_URL 리다이렉트", "백엔드에서 실결제 처리"],
      details: [
        "결제 실패는 검증 오류, 결제 호출 오류, 주문 완료 실패, 쿠폰 사용 실패로 나눠 각각 다르게 처리했습니다.",
        "숙박 예약은 사전등록(orderId 발급) → 결제 → 예약 확정 API 순서로 연계했습니다.",
      ],
    },
    {
      id: "token-auth",
      title: "토큰 기반 로그인 유지",
      summary: "쿠키와 localStorage에 함께 저장하고 메모리 → 쿠키 → localStorage 순서로 복구해, 브라우저와 관계없이 로그인을 유지합니다.",
      link: "#safari",
    },
    {
      id: "coupon",
      title: "쿠폰 시스템 구현",
      problem: "다양한 쿠폰 타입(정액/정률/중복사용) 처리 필요",
      solution: "couponManager로 쿠폰 유효성 검증 및 할인 계산 로직 통합",
      effect: "복잡한 쿠폰 정책 일관되게 처리",
    },
    {
      id: "i18n",
      title: "다국어 지원 (i18n)",
      problem: "지자체별 다른 언어 지원 요구 (한/영/중/일)",
      solution: "next-intl + 언어별 JSON 파일로 다국어 관리",
      effect: "새 언어 추가 시 JSON 파일만 추가하면 됨",
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

            {"summary" in item ? (
              <p className="text-sm text-gray-700">
                {item.summary}{" "}
                <a href={item.link} className="text-[#191979] underline whitespace-nowrap">문제 해결 방식에서 보기 →</a>
              </p>
            ) : (
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
            )}

            {"flow" in item && item.flow && item.details && (
              <div className="mt-4 bg-blue-50 border border-blue-100 rounded-lg p-4">
                <p className="text-xs font-medium text-gray-500 mb-2">결제 흐름</p>
                <div className="flex flex-col md:flex-row md:items-center gap-2 mb-3">
                  {item.flow.map((step, i) => (
                    <div key={step} className="flex items-center gap-2">
                      <span className="px-2 py-1 bg-white border border-blue-100 text-[#191979] text-xs rounded font-medium">
                        {i + 1}. {step}
                      </span>
                      {i < item.flow.length - 1 && <span className="hidden md:inline text-gray-400">→</span>}
                    </div>
                  ))}
                </div>
                <ul className="text-sm text-gray-700 space-y-1 list-disc pl-5">
                  {item.details.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
