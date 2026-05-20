import { venueTypes, congestionLevels } from "../_data/constants";

export const CalculationSection = () => {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">수용인원 계산 방식</h2>
      <p className="text-sm text-gray-500 mb-6">
        * 법적 근거(소방법, 건축법 등) 기반으로 기획 담당이 조사한 기준입니다.
        상세 내용은 <a href="/doc/행사장수용인원자동계산_20260106_4J.pptx" download className="text-blue-600 hover:underline">기획서</a>를 참고하세요.
      </p>

      {/* 행사장 유형별 기준 */}
      <div className="bg-white rounded-xl p-6 border border-gray-200 mb-6">
        <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
          <span className="text-xl">📐</span>
          행사장 유형별 1인당 면적
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {venueTypes.map((venue, idx) => (
            <div key={idx} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <div className="font-bold text-gray-900 mb-1">{venue.type}</div>
              <div className="text-blue-600 font-mono text-lg mb-1">{venue.area}</div>
              <div className="text-xs text-gray-500">{venue.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 혼잡도 레벨 */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
          <span className="text-xl">📊</span>
          혼잡도 레벨 기준
        </h3>
        <div className="flex flex-wrap gap-2">
          {congestionLevels.map((level) => (
            <div
              key={level.level}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg ${level.color} text-white`}
            >
              <span className="font-bold">Lv.{level.level}</span>
              <span>{level.label}</span>
              <span className="text-white/80 text-sm">({level.ratio})</span>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-500 mt-4">
          * 비율은 행사장 유형별 최대 수용인원 대비 현재 인원의 비율입니다.
        </p>
      </div>
    </section>
  );
};
