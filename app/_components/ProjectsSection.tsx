import Link from "next/link";
import { projects } from "../_data/constants";

const internalProjectIds = new Set(["4j", "exhibition", "smart-tourism"]);

export const ProjectsSection = () => {
  return (
    <section id="projects" className="mb-16 scroll-mt-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
        프로젝트
      </h2>
      <div className="space-y-4">
        {projects.map((project) => {
          const hasDetail = internalProjectIds.has(project.id);
          const content = (
            <div className="bg-white rounded-xl border border-gray-200 p-5 hover:border-blue-300 hover:shadow-sm transition-all group">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-2">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-0.5">{project.subtitle}</p>
                </div>
                <span className="text-xs text-gray-400 whitespace-nowrap">
                  {project.period}
                </span>
              </div>

              <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-2">
                {project.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="text-xs text-blue-700 bg-blue-50 px-2 py-0.5 rounded"
                  >
                    {highlight}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-gray-600 bg-gray-100 px-2 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {(project.demo || project.github || project.links) && (
                <div className="flex gap-3 mt-3 pt-3 border-t border-gray-100 text-xs">
                  {project.demo && (
                    <span className="text-blue-600">Demo ↗</span>
                  )}
                  {project.github && (
                    <span className="text-gray-600">GitHub ↗</span>
                  )}
                  {project.links?.map((link) => (
                    <span key={link.label} className="text-blue-600">
                      {link.label} ↗
                    </span>
                  ))}
                </div>
              )}
            </div>
          );

          return hasDetail ? (
            <Link key={project.id} href={`/projects/${project.id}`} className="block">
              {content}
            </Link>
          ) : (
            <div key={project.id}>{content}</div>
          );
        })}
      </div>
    </section>
  );
};
