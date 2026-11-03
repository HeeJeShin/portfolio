import type { ReactNode } from "react";
import { decisions } from "../_data/decisions";

const steps = [
  { key: "situation", label: "상황" },
  { key: "judgment", label: "판단" },
  { key: "action", label: "실행·설득" },
  { key: "result", label: "결과" },
] as const;

// 문제 해결 방식: 상황 → 판단 → 실행·설득 → 결과 카드. 프로젝트별 추가 카드는 children으로 이어 붙임
export const DecisionSection = ({ projectId, children }: { projectId: string; children?: ReactNode }) => {
  const items = decisions[projectId];
  if (!items?.length) return null;

  return (
    <section id="decisions" className="mb-16 scroll-mt-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">문제 해결 방식</h2>
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.title} id={item.id} className="bg-white rounded-xl border border-gray-200 p-5 scroll-mt-8">
            <h3 className="font-bold text-gray-900 mb-3">{item.title}</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {steps.map((step) => (
                <div
                  key={step.key}
                  className={step.key === "judgment" ? "bg-blue-50 border border-blue-100 rounded-lg p-4" : "bg-gray-50 rounded-lg p-4"}
                >
                  <p className="text-xs font-medium text-gray-500 mb-2">{step.label}</p>
                  <p className={`text-sm leading-relaxed ${step.key === "result" ? "font-medium text-[#191979]" : "text-gray-700"}`}>
                    {item[step.key]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
        {children}
      </div>
    </section>
  );
};
