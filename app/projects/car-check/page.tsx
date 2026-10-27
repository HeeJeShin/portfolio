"use client";

import {
  Header,
  HeroSection,
  ApproachesSection,
  ServicesSection,
  NextStepsSection,
  TechStackSection,
  Footer,
} from "./_components";

const CarCheckProject = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="max-w-5xl mx-auto px-6 py-12">
        <HeroSection />
        <ApproachesSection />
        <ServicesSection />
        <NextStepsSection />
        <TechStackSection />
      </main>

      <Footer />
    </div>
  );
};

export default CarCheckProject;
