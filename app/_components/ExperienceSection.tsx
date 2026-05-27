export const ExperienceSection = () => {
  return (
    <section id="experience" className="mb-16 scroll-mt-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
        경력 <span className="text-[#191979]">4년</span>
      </h2>
      <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900">이즈피엠피 (EZPMP)</h3>
            <p className="text-sm text-gray-600 mt-1">
              정규직 · 프론트엔드 · 선임연구원
            </p>
          </div>
          <span className="text-xs text-[#191979] font-medium bg-white px-3 py-1 rounded-full whitespace-nowrap">
            2022.05 - 2026.05.31
          </span>
        </div>
      </div>
    </section>
  );
};
