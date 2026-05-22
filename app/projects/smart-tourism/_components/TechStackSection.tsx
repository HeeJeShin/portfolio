import { techStack } from "../_data/constants";

export const TechStackSection = () => {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">기술 스택</h2>
      <div className="flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 bg-blue-100 text-[#191979] text-xs rounded-full font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
};
