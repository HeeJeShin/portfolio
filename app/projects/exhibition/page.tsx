"use client";

import { useState } from "react";
import {
  Header,
  HeroSection,
  ArchitectureSection,
  DevelopmentApproachSection,
  UnitTestSection,
  SmsEmailSection,
  InvoiceSection,
  MetricsSection,
  AdminStructureSection,
  DataTableSection,
  DynamicFormSection,
  ClaudeCodeSection,
  TechStackSection,
  Footer,
} from "./_components";

const ExhibitionProject = () => {
  const [activeTab, setActiveTab] = useState<"regular" | "preliminary">("regular");
  const [viewMode, setViewMode] = useState<"desktop" | "mobile">("desktop");

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="max-w-5xl mx-auto px-6 py-12">
        <HeroSection />
        <ArchitectureSection />
        <DevelopmentApproachSection />
        <UnitTestSection />
        <SmsEmailSection />
        <InvoiceSection />
        <MetricsSection />
        <AdminStructureSection />
        <DataTableSection
          viewMode={viewMode}
          setViewMode={setViewMode}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <DynamicFormSection />
        <ClaudeCodeSection />
        <TechStackSection />
      </main>

      <Footer />
    </div>
  );
};

export default ExhibitionProject;
