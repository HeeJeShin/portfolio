import { techStack } from "../_data/constants";

export const TechStackSection = () => {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">기술 스택</h2>
      <div className="flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-blue-50 hover:text-blue-700 transition-colors"
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
};
