"use client";

import {
  Header,
  HeroSection,
  ChallengesSection,
  ApproachesSection,
  TechStackSection,
  Footer,
} from "./_components";

const SmartTourismProject = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="max-w-5xl mx-auto px-6 py-12">
        <HeroSection />
        <ChallengesSection />
        <ApproachesSection />
        <TechStackSection />
      </main>

      <Footer />
    </div>
  );
};

export default SmartTourismProject;
