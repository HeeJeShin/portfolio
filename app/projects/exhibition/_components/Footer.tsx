import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="border-t border-gray-200 py-12 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
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
