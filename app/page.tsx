import {
  ContactSection,
  EducationSection,
  ExperienceSection,
  Footer,
  IntroSection,
  PersonalStatementSection,
  PrintHeader,
  ProjectsSection,
  Sidebar,
  SkillsSection,
} from "./_components";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto">
        <Sidebar />
        <main className="flex-1 min-w-0 px-6 lg:px-12 py-10 lg:py-12">
          <PrintHeader />
          <IntroSection />
          <PersonalStatementSection />
          <ExperienceSection />
          <SkillsSection />
          <ProjectsSection />
          <EducationSection />
          <ContactSection />
          <Footer />
        </main>
      </div>
    </div>
  );
}
