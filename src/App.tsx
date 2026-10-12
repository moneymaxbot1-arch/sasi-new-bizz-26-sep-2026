/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { AutomationVortexHero } from './components/AutomationVortexHero';
import { CostComparison } from './components/CostComparison';
import { WhyAndWho } from './components/WhyAndWho';
import { CountdownTimer } from './components/CountdownTimer';
import { ToolShowcase } from './components/ToolShowcase';
import { InDepthSoftwareSpecs } from './components/InDepthSoftwareSpecs';
import { AutomationPlaybook } from './components/AutomationPlaybook';
import { RoiCalculator } from './components/RoiCalculator';
import { PricingSection } from './components/PricingSection';
import { Testimonials } from './components/Testimonials';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FaqSection } from './components/FaqSection';
import { SocialProofPopup } from './components/SocialProofPopup';
import { MobileStickyBar } from './components/MobileStickyBar';
import { Footer } from './components/Footer';

export default function App() {
  const scrollToPricing = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    const pricingEl = document.getElementById('pricing');
    if (pricingEl) {
      pricingEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#090D16] text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-black antialiased w-full max-w-[100vw] overflow-x-hidden">
      {/* Main Navigation complying with Top Bar Contract */}
      <Navbar onClaimClick={() => scrollToPricing()} />

      {/* Website Entrance: 6-Software Orbit Animation Fusing Into Business Growth Hub */}
      <AutomationVortexHero onClaimClick={() => scrollToPricing()} />

      {/* Competitor Price Comparison Section: Standalone Competitors $650/mo vs Bizz2u $15/mo */}
      <CostComparison onClaimClick={() => scrollToPricing()} />

      {/* Why & Who Will Benefit (4 Pillars: Traffic, Engagement, Retargeting, Website Reliability) */}
      <WhyAndWho onClaimClick={() => scrollToPricing()} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Prominent Real-Time 15-Minute Countdown Timer Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 mb-14 relative z-20">
          <CountdownTimer onClaimClick={() => scrollToPricing()} />
        </div>

        {/* Interactive Feature Deep Dive for all 6 Software */}
        <ToolShowcase onClaimClick={() => scrollToPricing()} />

        {/* In-Depth Features & Functions of all 6 Software Powerhouses */}
        <InDepthSoftwareSpecs onClaimClick={() => scrollToPricing()} />

        {/* Verifiable Customer Testimonials & Metrics (45+ in-depth regional and global customer stories) */}
        <Testimonials onClaimClick={() => scrollToPricing()} />

        {/* How the 6 tools connect into an automated sales machine (The Complete Closed-Loop Automation System) */}
        <AutomationPlaybook onClaimClick={() => scrollToPricing()} />

        {/* Dynamic ROI and Savings Calculator */}
        <RoiCalculator onClaimClick={() => scrollToPricing()} />

        {/* High-Converting 3-Tier Pricing (Starting at $15/mo) */}
        <PricingSection />

        {/* 100% Satisfaction Guarantee & Immediate 2-Minute Replacement Section */}
        <GuaranteeSection onClaimClick={() => scrollToPricing()} />

        {/* Interactive FAQ Accordion */}
        <FaqSection onClaimClick={() => scrollToPricing()} />
      </main>

      {/* Quiet Footer */}
      <Footer onClaimClick={() => scrollToPricing()} />

      {/* Mobile Sticky Bar (<15% viewport height) */}
      <MobileStickyBar onClaimClick={() => scrollToPricing()} />

      {/* Live Social Proof Urgency Popup (Like Fomo) */}
      <SocialProofPopup onClaimClick={() => scrollToPricing()} />
    </div>
  );
}
