"use client";

import Link from "next/link";

interface ProjectHeaderProps {
  title: string;
  period: string;
  techStack: string[];
}

export const ProjectHeader = ({ title, period, techStack }: ProjectHeaderProps) => {
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
        <span className="md:hidden text-sm font-semibold text-gray-900 truncate mx-4">
          {title}
        </span>
        <div className="hidden md:flex flex-col items-end gap-1">
          <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium">
            {period}
          </span>
          <div className="flex items-center gap-1.5">
            {techStack.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};
