import { services, infraComparison } from "../_data/constants";

export const ServicesSection = () => {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">서비스 구성</h2>
      <p className="text-sm text-gray-600 mb-6">
        DB·서버·배포·에러 수집을 각각 어떤 서비스에 맡길지 직접 고르고 연결했습니다. 무료 등급으로 계속 운영할 수 있는 조합을 기준으로 했습니다.
      </p>

      {/* 요청 흐름 */}
      <div className="bg-blue-50 rounded-xl p-6 border border-blue-100 mb-6">
        <p className="text-xs font-medium text-gray-500 mb-3">사용자 요청 흐름</p>
        <div className="flex flex-wrap items-center gap-2 text-sm font-medium text-gray-900">
          <span className="bg-white rounded-lg border border-gray-200 px-3 py-1.5">브라우저</span>
          <span className="text-[#191979]">→</span>
          <span className="bg-white rounded-lg border border-gray-200 px-3 py-1.5">Vercel (화면)</span>
          <span className="text-[#191979]">→</span>
          <span className="bg-white rounded-lg border border-gray-200 px-3 py-1.5">Render (API)</span>
          <span className="text-[#191979]">→</span>
          <span className="bg-white rounded-lg border border-gray-200 px-3 py-1.5">Neon (DB)</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {services.map((service) => (
          <div key={service.name} className="bg-white rounded-xl border border-gray-200 p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-bold text-gray-900">{service.name}</span>
              <span className="px-2 py-0.5 bg-blue-100 text-[#191979] text-xs rounded">{service.role}</span>
            </div>
            <p className="text-sm text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>

      {/* 실무와 비교 */}
      <div className="mt-6 bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="font-bold text-gray-900 mb-2">실무와 달랐던 점</h3>
        <p className="text-sm text-gray-600 mb-4">
          실무에서는 인프라가 갖춰진 환경에서 개발에 집중했다면, 이 프로젝트에서는 그 부분을 직접 맡았습니다.
        </p>
        <div className="space-y-3">
          {infraComparison.map((item) => (
            <div key={item.area} className="grid md:grid-cols-[100px_1fr_1fr] gap-2 md:gap-4">
              <p className="text-sm font-bold text-gray-900">{item.area}</p>
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-xs font-medium text-gray-500 mb-1">실무</p>
                <p className="text-sm text-gray-700">{item.practice}</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-3 border border-blue-100">
                <p className="text-xs font-medium text-gray-500 mb-1">이 프로젝트</p>
                <p className="text-sm text-gray-700">{item.here}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
