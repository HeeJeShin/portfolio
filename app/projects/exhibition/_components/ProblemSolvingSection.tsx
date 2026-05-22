"use client";

import { useEffect, useState } from "react";
import { problemSolving } from "../_data/exhibition";

export const ProblemSolvingSection = () => {
  const [highlightedId, setHighlightedId] = useState<string | null>(null);

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash && problemSolving.some((item) => item.id === hash)) {
      setHighlightedId(hash);
      // 3초 후 하이라이트 제거
      const timer = setTimeout(() => setHighlightedId(null), 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">문제 해결 방식</h2>

      <div className="space-y-4">
        {problemSolving.map((item) => {
          const isHighlighted = highlightedId === item.id;

          return (
            <div
              key={item.id}
              id={item.id}
              className="bg-white rounded-xl border border-gray-200 p-5 scroll-mt-24"
            >
              <h3 className="font-bold text-gray-900 mb-3">{item.title}</h3>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-xs font-medium text-gray-500 mb-2">문제</p>
                  <p className="text-sm text-gray-700">{item.problem}</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-xs font-medium text-gray-500 mb-2">해결</p>
                  <p className="text-sm text-gray-700">{item.solution}</p>
                </div>

                <div
                  className={`rounded-lg p-4 transition-all duration-500 ${
                    isHighlighted
                      ? "bg-blue-50 border-2 border-[#191979]"
                      : "bg-gray-50"
                  }`}
                >
                  <p className="text-xs font-medium text-gray-500 mb-2">효과</p>
                  <p className="text-sm font-medium text-[#191979]">{item.effect}</p>
                  {"link" in item && item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-2 text-xs text-gray-500 hover:text-[#191979]"
                    >
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      화면 가이드 보기
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
