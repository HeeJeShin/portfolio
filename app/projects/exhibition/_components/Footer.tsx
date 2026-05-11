import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="border-t border-gray-200 py-12 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        {/* AI 활용 안내 */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <span className="text-white text-xl">AI</span>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">AI 활용 개발</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                이 프로젝트는 <strong className="text-gray-900">AI 도구</strong>를 활용하여 개발 효율을 높였습니다.
                모든 설계와 구현은 <strong className="text-gray-900">제가 직접 수행</strong>했으며,
                AI는 코드 작성 보조, 테스트 케이스 생성, 문서화 등의 반복 작업을 효율적으로 처리하는 데 활용했습니다.
              </p>
              <p className="text-sm text-gray-500 mt-2">
                AI는 도구일 뿐, 아키텍처 설계, 비즈니스 로직 구현, 백엔드 협업 등 모든 의사결정은 개발자의 역할입니다.
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
