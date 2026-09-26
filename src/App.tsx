/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PRICING_TIERS } from './data/bundleData';
import { PricingTier } from './types';
import { UrgencyHeader } from './components/UrgencyHeader';
import { Navbar } from './components/Navbar';
import { AutomationVortexHero } from './components/AutomationVortexHero';
import { WhyAndWho } from './components/WhyAndWho';
import { CountdownTimer } from './components/CountdownTimer';
import { Hero } from './components/Hero';
import { CostComparison } from './components/CostComparison';
import { ToolShowcase } from './components/ToolShowcase';
import { InDepthSoftwareSpecs } from './components/InDepthSoftwareSpecs';
import { AutomationPlaybook } from './components/AutomationPlaybook';
import { RoiCalculator } from './components/RoiCalculator';
import { PricingSection } from './components/PricingSection';
import { Testimonials } from './components/Testimonials';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FaqSection } from './components/FaqSection';
import { CheckoutModal } from './components/CheckoutModal';
import { SocialProofPopup } from './components/SocialProofPopup';
import { MobileStickyBar } from './components/MobileStickyBar';
import { Footer } from './components/Footer';

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState<boolean>(false);
  const [selectedTier, setSelectedTier] = useState<PricingTier>(PRICING_TIERS[0]);

  const handleOpenCheckout = (tier?: PricingTier) => {
    if (tier) {
      setSelectedTier(tier);
    } else {
      setSelectedTier(PRICING_TIERS[0]); // default to $15 starter tier
    }
    setIsCheckoutOpen(true);
  };

  const handleCloseCheckout = () => {
    setIsCheckoutOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#090D16] text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-black antialiased">
      {/* Top Urgency Header */}
      <UrgencyHeader onClaimClick={() => handleOpenCheckout()} />

      {/* Main Navigation complying with Top Bar Contract */}
      <Navbar onClaimClick={() => handleOpenCheckout()} />

      {/* Website Entrance: 6-Software Orbit Animation Fusing Into Business Growth Hub */}
      <AutomationVortexHero onClaimClick={() => handleOpenCheckout()} />

      {/* Why & Who Will Benefit (4 Pillars: Traffic, Engagement, Retargeting, Website Reliability) */}
      <WhyAndWho onClaimClick={() => handleOpenCheckout()} />

      {/* Hero Section with 6-Software High Conversion Presentation */}
      <main className="flex-1">
        <Hero onClaimClick={() => handleOpenCheckout()} />

        {/* Prominent Real-Time 8-Hour Countdown Timer Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-10 mb-14 relative z-20">
          <CountdownTimer onClaimClick={() => handleOpenCheckout()} />
        </div>

        {/* Cost Comparison matching User Image: $650/mo individual vs $15 Bundle */}
        <CostComparison onClaimClick={() => handleOpenCheckout()} />

        {/* Interactive Feature Deep Dive for all 6 Software */}
        <ToolShowcase onClaimClick={() => handleOpenCheckout()} />

        {/* In-Depth Features & Functions of all 6 Software Powerhouses */}
        <InDepthSoftwareSpecs onClaimClick={() => handleOpenCheckout()} />

        {/* How the 6 tools connect into an automated sales machine */}
        <AutomationPlaybook onClaimClick={() => handleOpenCheckout()} />

        {/* Dynamic ROI and Savings Calculator */}
        <RoiCalculator onClaimClick={() => handleOpenCheckout()} />

        {/* High-Converting 3-Tier Pricing (Starting at $15/mo) */}
        <PricingSection onSelectTier={(tier) => handleOpenCheckout(tier)} />

        {/* Verifiable Customer Testimonials & Metrics (12 in-depth customer reviews) */}
        <Testimonials onClaimClick={() => handleOpenCheckout()} />

        {/* 100% Satisfaction Guarantee & Immediate 2-Minute Replacement Section */}
        <GuaranteeSection onClaimClick={() => handleOpenCheckout()} />

        {/* Interactive FAQ Accordion */}
        <FaqSection onClaimClick={() => handleOpenCheckout()} />
      </main>

      {/* Quiet Footer */}
      <Footer onClaimClick={() => handleOpenCheckout()} />

      {/* Mobile Sticky Bar (<15% viewport height) */}
      <MobileStickyBar onClaimClick={() => handleOpenCheckout()} />

      {/* Live Social Proof Urgency Popup (Like Fomo) */}
      <SocialProofPopup onClaimClick={() => handleOpenCheckout()} />

      {/* Interactive Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        selectedTier={selectedTier}
        onClose={handleCloseCheckout}
        onSelectTier={(tier) => setSelectedTier(tier)}
      />
    </div>
  );
}
