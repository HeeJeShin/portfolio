"use client";

import {
  Header,
  HeroSection,
  FeatureSection,
  CalculationSection,
  AIAnalysisSection,
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
        <CalculationSection />
        <AIAnalysisSection />
        <MonitoringSection />
        <TechStackSection />
      </main>

      <Footer />
    </div>
  );
};

export default FourJProject;
