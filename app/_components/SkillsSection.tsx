import { skills } from "../_data/constants";

export const SkillsSection = () => {
  return (
    <section id="skills" className="mb-16 scroll-mt-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
        기술 스택
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="bg-white rounded-lg border border-gray-200 p-4"
          >
            <h3 className="font-semibold text-gray-900 mb-2 text-sm">
              {category}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-1 bg-blue-50 text-[#191979] rounded text-xs"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
