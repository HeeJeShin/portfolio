import { metrics } from "../_data/constants";

export const MetricsSection = () => {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">성과</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="bg-white rounded-xl border border-gray-200 p-4 text-center"
          >
            <p className="text-2xl font-bold text-[#191979] mb-1">{metric.value}</p>
            <p className="text-sm font-medium text-gray-900 mb-1">{metric.label}</p>
            <p className="text-xs text-gray-500">{metric.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
