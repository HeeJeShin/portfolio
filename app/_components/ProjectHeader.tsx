"use client";

import Link from "next/link";

interface ProjectHeaderProps {
  title: string;
}

export const ProjectHeader = ({ title }: ProjectHeaderProps) => {
  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-gray-500 hover:text-gray-900 flex items-center gap-2 shrink-0"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span className="hidden md:inline text-sm">목록으로</span>
        </Link>
        <span className="text-sm font-semibold text-gray-900 truncate mx-4">
          {title}
        </span>
        <div className="w-6 h-6" /> {/* 균형 맞추기용 spacer */}
      </div>
    </header>
  );
};
