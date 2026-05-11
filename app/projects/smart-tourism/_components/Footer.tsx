import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="border-t border-gray-200 py-12 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        {/* 프로젝트 요약 */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <span className="text-white text-xl">🗺️</span>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">프로젝트 핵심</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• <strong className="text-gray-900">KCP PG 결제</strong> - PC/Mobile 분기 처리, Callback 처리</li>
                <li>• <strong className="text-gray-900">토큰 기반 인증</strong> - 3단계 Fallback, Safari ITP 대응</li>
                <li>• <strong className="text-gray-900">쿠폰 시스템</strong> - 타입 분류, 필터링, 결제 적용</li>
                <li>• <strong className="text-gray-900">4개국어 지원</strong> - next-intl 기반 다국어 처리</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 메인 링크 */}
        <div className="text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            메인으로 돌아가기
          </Link>
        </div>
      </div>
    </footer>
  );
};
