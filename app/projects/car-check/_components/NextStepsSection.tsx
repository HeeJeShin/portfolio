import { nextSteps } from "../_data/constants";

export const NextStepsSection = () => {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">다음 단계</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {nextSteps.map((step) => (
          <div key={step.title} className="bg-gray-50 rounded-lg p-4">
            <p className="text-sm font-medium text-gray-900 mb-1">
              <span className="text-[#191979] mr-1">→</span>
              {step.title}
            </p>
            <p className="text-sm text-gray-600">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
