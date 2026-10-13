import { decisions } from "../_data/decisions";

const steps = [
  { key: "situation", label: "상황" },
  { key: "judgment", label: "판단" },
  { key: "action", label: "실행·설득" },
  { key: "result", label: "결과" },
] as const;

export const DecisionSection = ({ projectId }: { projectId: string }) => {
  const items = decisions[projectId];
  if (!items?.length) return null;

  return (
    <section id="decisions" className="mb-16 scroll-mt-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">판단과 근거</h2>
      <p className="text-sm text-gray-500 mb-6">무엇을 했는지보다, 왜 그렇게 판단했는지</p>
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.title} className="bg-white rounded-xl border border-gray-200 p-5">
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
      </div>
    </section>
  );
};
