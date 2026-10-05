/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { ToolShowcase } from './components/ToolShowcase';
import { PricingSection } from './components/PricingSection';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
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
      {/* Main Navigation with the 4 tabs + Contact */}
      <Navbar onClaimClick={() => scrollToPricing()} />

      <main className="flex-1">
        {/* 1. 6 Software Suite */}
        <ToolShowcase onClaimClick={() => scrollToPricing()} />

        {/* 2. Pricing Plans */}
        <PricingSection />

        {/* 3. Testimonials */}
        <Testimonials onClaimClick={() => scrollToPricing()} />

        {/* 4. FAQ */}
        <FaqSection onClaimClick={() => scrollToPricing()} />
      </main>

      {/* Footer */}
      <Footer onClaimClick={() => scrollToPricing()} />
    </div>
  );
}
