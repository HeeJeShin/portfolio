export const ApproachesSection = () => {
  const approaches = [
    {
      id: "kcp-payment",
      title: "KCP PG 결제 연동",
      problem: "PC/모바일 환경별 다른 결제 플로우 필요",
      solution: "PC는 팝업, 모바일은 페이지 전환 방식으로 분기 처리 + API Routes로 콜백 처리",
      effect: "안정적인 결제 처리, 환경별 최적화된 UX",
    },
    {
      id: "token-auth",
      title: "토큰 기반 로그인 유지",
      problem: "Safari ITP 정책으로 쿠키 토큰 7일 후 삭제, 새로고침 시 로그아웃",
      solution: "메모리 → 쿠키 → localStorage 3단계 Fallback 전략",
      effect: "브라우저 환경 관계없이 로그인 상태 유지",
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
