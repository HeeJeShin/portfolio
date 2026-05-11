"use client";

import { useState } from "react";
import {
  Header,
  HeroSection,
  MetricsSection,
  DomainExpertiseSection,
  ArchitectureSection,
  TypeScriptSection,
  TanStackQuerySection,
  I18nSection,
  AdminStructureSection,
  StickyHeaderSection,
  DataTableSection,
  DynamicFormSection,
  InvoiceSection,
  UnitTestSection,
  ClaudeCodeSection,
  DevelopmentApproachSection,
  CICDSection,
  SmsEmailSection,
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
        <MetricsSection />
        <DomainExpertiseSection />
        <ArchitectureSection />
        <TypeScriptSection />
        <TanStackQuerySection />
        <I18nSection />
        <AdminStructureSection />
        <StickyHeaderSection />
        <DataTableSection
          viewMode={viewMode}
          setViewMode={setViewMode}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <DynamicFormSection />
        <InvoiceSection />
        <UnitTestSection />
        <ClaudeCodeSection />
        <DevelopmentApproachSection />
        <CICDSection />
        <SmsEmailSection />
        <TechStackSection />
      </main>

      <Footer />
    </div>
  );
};

export default ExhibitionProject;
