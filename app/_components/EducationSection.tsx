export const EducationSection = () => {
  return (
    <section id="education" className="mb-16 scroll-mt-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
        학력
      </h2>
      <div className="bg-white rounded-xl border border-gray-200 p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-gray-900">서울사이버대학교</h3>
            <p className="text-sm text-gray-600 mt-1">컴퓨터공학과 (편입 3학년)</p>
          </div>
          <span className="text-xs text-gray-400 whitespace-nowrap">
            2025.03 - 재학 중 (2026.02 졸업예정)
          </span>
        </div>
      </div>
    </section>
  );
};
