import Link from "next/link";
import { projectMetrics } from "../_data/constants";

export const HeroSection = () => {
  return (
    <section className="mb-12">
      {/* 서비스 링크 */}
      <div className="mb-6 flex flex-wrap gap-3">
        <Link
          href="https://tour.inje.go.kr/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors text-sm font-medium"
        >
          <span>인제 스마트관광</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </Link>
        <Link
          href="https://itour.yongin.go.kr/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors text-sm font-medium"
        >
          <span>용인 스마트관광</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </Link>
      </div>

      <div className="flex items-center gap-4 mb-6">

        <div>
          <h1 className="text-3xl font-bold text-gray-900">스마트관광 플랫폼</h1>
          <p className="text-gray-600 mt-1"> 스마트관광 정보 및 예약 서비스</p>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-8">
        <strong className="text-gray-900"> 스마트관광 플랫폼</strong>의 프론트엔드를 개발했습니다.
        관광지, 숙박, 체험상품 예약 및 결제 기능을 제공하며,
        <strong className="text-gray-900"> KCP PG 결제 연동</strong>,
        <strong className="text-gray-900"> 토큰 기반 로그인 유지</strong>,
        <strong className="text-gray-900"> 쿠폰 시스템</strong>,
        <strong className="text-gray-900"> 커뮤니티</strong> 등
        실제 서비스 운영에 필요한 핵심 기능을 구현했습니다.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {projectMetrics.map((metric) => (
          <div key={metric.label} className="bg-blue-50 rounded-xl p-4 border border-blue-100">
            <p className="text-2xl font-bold text-blue-700">{metric.value}</p>
            <p className="text-sm text-gray-600">{metric.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
