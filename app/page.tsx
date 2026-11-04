// 포트폴리오는 프로젝트 사례집으로 운영: 소개·경력·기술·학력은 이력서 PDF로 보냄 (2026-11-04)
// IntroSection·ChallengesSection·ExperienceSection·SkillsSection·EducationSection 파일은 남겨 둠
import {
  Footer,
  HashScroll,
  PrintHeader,
  ProjectsSection,
  Sidebar,
} from "./_components";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HashScroll />
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto">
        <Sidebar />
        <main className="flex-1 min-w-0 px-6 lg:px-12 py-10 lg:py-12">
          <PrintHeader />
          <ProjectsSection />
          <Footer />
        </main>
      </div>
    </div>
  );
}
