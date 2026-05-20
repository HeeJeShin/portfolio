"use client";

import {
  Header,
  HeroSection,
  ApproachesSection,
  FeatureSection,
  AIAnalysisSection,
  CalculationSection,
  MonitoringSection,
  TechStackSection,
  Footer,
} from "./_components";

const FourJProject = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="max-w-5xl mx-auto px-6 py-12">
        <HeroSection />
        <FeatureSection />
        <AIAnalysisSection />
        <CalculationSection />
        <MonitoringSection />
        <ApproachesSection />
        <TechStackSection />
      </main>

      <Footer />
    </div>
  );
};

export default FourJProject;
