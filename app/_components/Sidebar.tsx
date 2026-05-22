"use client";

import { useEffect, useState } from "react";
import { navItems, type NavId } from "../_data/constants";

export const Sidebar = () => {
  const [activeId, setActiveId] = useState<NavId>("intro");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          setActiveId(visible[0].target.id as NavId);
        }
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: NavId) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <aside className="no-print lg:sticky lg:top-0 lg:h-screen lg:w-[380px] lg:flex-shrink-0 bg-white border-b lg:border-b-0 lg:border-r border-gray-200">
      <div className="flex flex-col h-full px-8 py-10 lg:py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">신희제</h1>
          <p className="text-base text-[#191979] font-medium">Frontend Developer</p>
          <p className="mt-3 text-sm text-gray-600 leading-relaxed break-keep">
            비즈니스 도메인에 대한 통찰과 AI 활용 능력을 무기로,<br /> 빠르고 정확하게 실질적인 결과물을 만들어내는 개발자입니다.
          </p>
        </div>

        <nav className="mb-8">
          <ul className="space-y-1">
            {navItems.map(({ id, label }) => {
              const isActive = activeId === id;
              return (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={(e) => handleNavClick(e, id)}
                    className={`flex items-center gap-3 py-2 text-sm transition-colors ${
                      isActive
                        ? "text-[#191979] font-semibold"
                        : "text-gray-600 hover:text-[#191979]"
                    }`}
                  >
                    <span
                      className={`h-px transition-all ${
                        isActive ? "w-8 bg-[#191979]" : "w-4 bg-gray-300"
                      }`}
                    />
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="mb-8 space-y-2 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-900 w-12">Email</span>
            <a href="mailto:heeheehee.hj@gmail.com" className="hover:text-[#191979] truncate">
              heeheehee.hj@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-900 w-12">Phone</span>
            <span>010-2390-2038</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-900 w-12">GitHub</span>
            <a
              href="https://github.com/HeeJeShin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#191979] hover:underline"
            >
              HeeJeShin
            </a>
          </div>
        </div>

        <div className="mt-auto">
          <a
            href="/신희제_프론트엔드개발자_이력서_public.pdf"
            download
            className="w-full px-4 py-3 bg-[#191979] text-white rounded-lg hover:bg-blue-500 transition-colors text-sm font-medium flex items-center justify-center gap-2"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
              />
            </svg>
            이력서 PDF 다운로드
          </a>
        </div>
      </div>
    </aside>
  );
};
