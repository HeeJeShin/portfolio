import { features } from "../_data/constants";

export const FeatureSection = () => {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">주요 기능</h2>

      <div className="grid sm:grid-cols-3 gap-4">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl border border-gray-200 p-5"
          >
            <h3 className="font-bold text-blue-600 mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-600">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
