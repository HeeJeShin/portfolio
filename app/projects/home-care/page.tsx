"use client";

import {
  Header,
  HeroSection,
  ClaudeDesignSection,
  ApproachesSection,
  RoadmapSection,
  TechStackSection,
  Footer,
} from "./_components";

const HomeCareProject = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="max-w-5xl mx-auto px-6 py-12">
        <HeroSection />
        <ClaudeDesignSection />
        <ApproachesSection />
        <RoadmapSection />
        <TechStackSection />
      </main>

      <Footer />
    </div>
  );
};

export default HomeCareProject;
