import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="border-t border-gray-200 py-12 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        {/* 해커톤 안내 */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <span className="text-white text-xl">🏆</span>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">1박2일 해커톤 프로젝트</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                주최측에서 제공한 <strong className="text-gray-900">Google Gemini AI API</strong>를 활용하여
                24시간 내에 프로토타입을 완성했습니다. 백엔드 서버 구축 없이 프론트엔드와 AI API만으로
                도면 분석 및 수용인원 계산 기능을 구현했습니다.
              </p>
              <p className="text-sm text-gray-500 mt-2">
                짧은 시간 내 핵심 기능에 집중하여 빠르게 동작하는 MVP를 완성하는 데 주력했습니다.
              </p>
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
