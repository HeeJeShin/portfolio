import { techStack } from "../_data/constants";

export const TechStackSection = () => {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">기술 스택</h2>
      <div className="bg-white rounded-xl border border-gray-200 divide-y divide-gray-100">
        {techStack.map((group) => (
          <div key={group.category} className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 p-4">
            <p className="text-sm font-semibold text-gray-900 md:w-28 shrink-0">{group.category}</p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-blue-100 text-[#191979] text-xs rounded-full font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
