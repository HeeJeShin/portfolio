import { projectMetrics } from "../_data/constants";

export const HeroSection = () => {
  return (
    <section className="mb-12">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center flex-shrink-0">
          <span className="text-white text-2xl">🗺️</span>
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">스마트관광 플랫폼</h1>
          <p className="text-gray-600 mt-1">용인시 관광 정보 및 예약 서비스</p>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-8">
        용인시의 관광지, 숙박, 체험상품을 예약하고 결제할 수 있는 플랫폼입니다.
        <strong className="text-gray-900"> KCP PG 결제 연동</strong>,
        <strong className="text-gray-900"> 토큰 기반 로그인 유지</strong>,
        <strong className="text-gray-900"> 쿠폰 시스템</strong> 등
        실제 서비스 운영에 필요한 핵심 기능을 구현했습니다.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {projectMetrics.map((metric) => (
          <div key={metric.label} className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-4 border border-emerald-100">
            <p className="text-2xl font-bold text-emerald-700">{metric.value}</p>
            <p className="text-sm text-gray-600">{metric.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
