import Link from "next/link";

export const Header = () => {
  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-gray-500 hover:text-gray-900 text-sm flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          목록으로
        </Link>
        <div className="flex items-center gap-2">
          <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs rounded-full font-medium">
            2024.09 - 2025.01
          </span>
          <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">
            Next.js 15
          </span>
        </div>
      </div>
    </header>
  );
};
