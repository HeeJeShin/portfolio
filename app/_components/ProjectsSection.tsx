import Link from "next/link";
import { projects } from "../_data/constants";

const internalProjectIds = new Set(["car-check", "home-care", "4j", "exhibition", "smart-tourism", "o2meet-migration", "pos-kiosk", "o2meet"]);

export const ProjectsSection = () => {
  return (
    <section id="projects" className="mb-16 scroll-mt-8">
      <div className="flex items-center gap-3 mb-6 pb-2 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900">프로젝트</h2>
        <span className="text-xs text-gray-500">클릭하여 상세 구현내용 확인</span>
      </div>
      <div className="space-y-4">
        {projects.map((project) => {
          const hasDetail = internalProjectIds.has(project.id);
          // 카드 전체를 덮는 링크(상세 페이지)를 깔고, 아래 Site·GitHub 링크는 그 위(z-10)에 올려 따로 눌리게 합니다.
          // (링크 안에 링크를 넣을 수 없어서 카드를 감싸지 않고 겹쳐 둠)
          const cardHref = hasDetail ? `/projects/${project.id}` : project.github;
          return (
            <div key={project.id} className="relative bg-white rounded-xl border border-gray-200 p-5 hover:border-blue-300 hover:shadow-sm transition-all group">
              {hasDetail ? (
                <Link href={`/projects/${project.id}`} className="absolute inset-0 rounded-xl" aria-label={`${project.title} 상세 보기`} />
              ) : cardHref ? (
                <a href={cardHref} target="_blank" rel="noopener noreferrer" className="absolute inset-0 rounded-xl" aria-label={`${project.title} GitHub`} />
              ) : null}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-2">
                <div>
                  <div className="flex items-center gap-2">
                    <span
                      className={
                        project.side
                          ? "shrink-0 text-xs font-medium px-2 py-0.5 rounded bg-blue-100 text-[#191979]"
                          : "shrink-0 text-xs font-medium px-2 py-0.5 rounded bg-[#191979] text-white"
                      }
                    >
                      {project.side ? "사이드" : "실무"}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#191979] transition-colors">
                      {project.title}
                    </h3>
                  </div>
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
                    className="text-xs text-[#191979] bg-blue-50 px-2 py-0.5 rounded"
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
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="relative z-10 text-[#191979] hover:underline">
                      Site ↗
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="relative z-10 text-gray-600 hover:underline">
                      GitHub ↗
                    </a>
                  )}
                  {project.links?.map((link) => (
                    <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" className="relative z-10 text-[#191979] hover:underline">
                      {link.label} ↗
                    </a>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
