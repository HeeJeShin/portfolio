import { metrics } from "../_data/constants";

export const MetricsSection = () => {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">개발 생산성 성과</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {metrics.map((metric) => (
          <div key={metric.label} className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-xl p-5">
            <p className="text-3xl font-bold text-blue-600 mb-1">{metric.value}</p>
            <p className="font-medium text-gray-900 text-sm">{metric.label}</p>
            <p className="text-xs text-gray-500 mt-1">{metric.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
