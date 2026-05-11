"use client";

import {
  Header,
  HeroSection,
  KcpPaymentSection,
  AuthSection,
  CouponSection,
  CommunitySection,
  ComponentDesignSection,
  I18nSection,
  TechStackSection,
  Footer,
} from "./_components";

const SmartTourismProject = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="max-w-5xl mx-auto px-6 py-12">
        <HeroSection />
        <KcpPaymentSection />
        <AuthSection />
        <CouponSection />
        <CommunitySection />
        <ComponentDesignSection />
        <I18nSection />
        <TechStackSection />
      </main>

      <Footer />
    </div>
  );
};

export default SmartTourismProject;
