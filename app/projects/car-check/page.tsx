"use client";

import { DecisionSection } from "@/app/_components/DecisionSection";
import {
  Header,
  HeroSection,
  ScreensSection,
  ApproachesSection,
  ServicesSection,
  TeamPlanSection,
  RetrospectiveSection,
  TechStackSection,
  Footer,
} from "./_components";

const CarCheckProject = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="max-w-5xl mx-auto px-6 py-12">
        <HeroSection />
        <ScreensSection />
        <ApproachesSection />
        <DecisionSection projectId="car-check" />
        <ServicesSection />
        <TeamPlanSection />
        <RetrospectiveSection />
        <TechStackSection />
      </main>

      <Footer />
    </div>
  );
};

export default CarCheckProject;
