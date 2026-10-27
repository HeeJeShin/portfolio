import { retrospective } from "../_data/constants";

export const RetrospectiveSection = () => {
  const { decisions, envNote, deployLessons, approach, learning, next } = retrospective;

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">회고</h2>

      {/* 직접 맡으며 판단한 것 */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
        <h3 className="font-bold text-gray-900 text-lg mb-4">인프라를 직접 맡으며 판단한 것</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {decisions.map((item) => (
            <div key={item.title} className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm font-medium text-gray-900 mb-2">{item.title}</p>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-gray-500">{envNote}</p>
      </div>

      {/* 실제로 배포하며 확인한 것 */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
        <h3 className="font-bold text-gray-900 text-lg mb-4">실제로 배포하며 확인한 것 (2026.10.27)</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {deployLessons.map((item) => (
            <div key={item.title} className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm font-medium text-gray-900 mb-2">{item.title}</p>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 접근 · 익히는 방식 */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
          <h3 className="font-bold text-gray-900 mb-3">어떻게 접근했나</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            {approach.map((text) => (
              <li key={text} className="flex items-start gap-2">
                <span className="text-[#191979] mt-0.5">→</span>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
          <h3 className="font-bold text-gray-900 mb-3">어떻게 익히고 있나</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            {learning.map((text) => (
              <li key={text} className="flex items-start gap-2">
                <span className="text-[#191979] mt-0.5">→</span>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 다음에 다르게 할 것 */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="font-bold text-gray-900 mb-3">다음에 다르게 할 것</h3>
        <ul className="space-y-2 text-sm text-gray-700">
          {next.map((text) => (
            <li key={text} className="flex items-start gap-2">
              <span className="text-green-600 mt-0.5">✓</span>
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
