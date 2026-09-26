import React, { useState, useEffect } from 'react';
import { PRICING_TIERS } from '../data/bundleData';
import { PricingTier } from '../types';
import {
  X,
  Check,
  ShieldCheck,
  Lock,
  Sparkles,
  CreditCard,
  ArrowRight,
  Download,
  Copy,
  CheckCircle2,
  AlertCircle,
  Building2,
  Smartphone,
  Star,
  Zap,
} from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  selectedTier: PricingTier;
  onClose: () => void;
  onSelectTier: (tier: PricingTier) => void;
}

const MALAYSIAN_BANKS = [
  { id: 'maybank', name: 'Maybank2u', code: 'MBB' },
  { id: 'cimb', name: 'CIMB Clicks', code: 'CIMB' },
  { id: 'public', name: 'Public Bank Online', code: 'PBE' },
  { id: 'rhb', name: 'RHB Now', code: 'RHB' },
  { id: 'hongleong', name: 'Hong Leong Connect', code: 'HLB' },
  { id: 'ambank', name: 'AmOnline', code: 'AMB' },
  { id: 'bankislam', name: 'Bank Islam', code: 'BIMB' },
  { id: 'affin', name: 'Affin Always', code: 'ABB' },
  { id: 'alliance', name: 'Alliance Online', code: 'ABMB' },
  { id: 'uob', name: 'UOB Personal Banking', code: 'UOB' },
];

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  selectedTier,
  onClose,
  onSelectTier,
}) => {
  // Sync selected tier and cycle
  const [activeTierId, setActiveTierId] = useState<string>(selectedTier?.id || 'starter');
  const [billingCycle, setBillingCycle] = useState<'2year' | '1year'>('2year');

  const [couponCode, setCouponCode] = useState<string>('');
  const [appliedDiscount, setAppliedDiscount] = useState<number>(0);
  const [couponError, setCouponError] = useState<string>('');
  const [couponSuccess, setCouponSuccess] = useState<string>('');

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [paymentMethod, setPaymentMethod] = useState<'fpx' | 'tng' | 'card' | 'paypal'>('fpx');
  const [selectedBank, setSelectedBank] = useState<string>('maybank');
  const [tngPhone, setTngPhone] = useState<string>('');

  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [copiedKey, setCopiedKey] = useState<boolean>(false);

  useEffect(() => {
    if (selectedTier) {
      setActiveTierId(selectedTier.id);
      if (selectedTier.period?.includes('1 year')) {
        setBillingCycle('1year');
      } else {
        setBillingCycle('2year');
      }
    }
  }, [selectedTier]);

  if (!isOpen) return null;

  const currentTier = PRICING_TIERS.find((t) => t.id === activeTierId) || PRICING_TIERS[0];
  const is2Year = billingCycle === '2year';
  const months = is2Year ? 24 : 12;
  const monthlyRate = is2Year ? currentTier.price2Year : currentTier.price1Year;
  const packageTotal = monthlyRate * months;
  const finalTotal = Math.max(1, packageTotal - appliedDiscount);

  // Approximate MYR conversion (1 USD ≈ 4.70 MYR)
  const myrRate = 4.7;
  const myrTotal = (finalTotal * myrRate).toFixed(2);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    setCouponError('');
    setCouponSuccess('');
    const code = couponCode.trim().toUpperCase();
    if (code === 'AUTOMATE5' || code === 'SAVE5') {
      setAppliedDiscount(5);
      setCouponSuccess('Promo code applied: $5.00 discount!');
    } else if (code === 'VIP10') {
      setAppliedDiscount(10);
      setCouponSuccess('VIP code applied: $10.00 discount!');
    } else {
      setCouponError('Invalid coupon. Try using "AUTOMATE5" for $5 off.');
    }
  };

  const handleSelectTierCard = (tier: PricingTier) => {
    setActiveTierId(tier.id);
    onSelectTier({
      ...tier,
      price: is2Year ? tier.price2Year : tier.price1Year,
      period: is2Year ? '/month (2 years)' : '/month (1 year)',
    });
  };

  const handleToggleCycle = (cycle: '2year' | '1year') => {
    setBillingCycle(cycle);
    onSelectTier({
      ...currentTier,
      price: cycle === '2year' ? currentTier.price2Year : currentTier.price1Year,
      period: cycle === '2year' ? '/month (2 years)' : '/month (1 year)',
    });
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      alert('Please fill in your name and email address.');
      return;
    }
    if (paymentMethod === 'tng' && !tngPhone.trim()) {
      alert('Please enter your Touch \'n Go registered mobile phone number.');
      return;
    }

    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsCompleted(true);
    }, 1400);
  };

  const copyLicense = () => {
    navigator.clipboard.writeText('BIZZ-6X-8932-BNDL-2026-VIP');
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 2000);
  };

  const resetOrder = () => {
    setIsCompleted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#0B101D] border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden my-4 sm:my-8 flex flex-col max-h-[92vh]">
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Checkout"
          className="absolute top-4 right-4 p-2.5 text-slate-400 hover:text-white rounded-full bg-slate-800/80 hover:bg-slate-700 transition-colors z-20 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!isCompleted ? (
          <div className="flex flex-col h-full overflow-hidden">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-slate-950 via-[#0e1628] to-slate-950 px-6 py-5 border-b border-slate-800 shrink-0">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span>Instant Activation Checkout · 256-Bit SSL Secured</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                Complete Your Bizz2u 6-in-1 Suite Order
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Mailchimp + Hostinger + Fomo + WATi + UptimeRobot + Bitly unified company licenses
              </p>
            </div>

            {/* Scrollable Form Body */}
            <form onSubmit={handleSubmitOrder} className="p-5 sm:p-7 space-y-6 overflow-y-auto custom-scrollbar">
              
              {/* SECTION 1: 3 Separate Options similar to 3 price section on website */}
              <div className="space-y-3.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-1">
                  <div>
                    <span className="text-xs font-black text-white uppercase tracking-wider flex items-center gap-1.5">
                      <span>1. SELECT YOUR PACKAGE & DURATION:</span>
                    </span>
                    <p className="text-[11px] text-slate-400">
                      Choose your tier and 1-Year or 2-Year total package option.
                    </p>
                  </div>

                  {/* 1-Year or 2-Year Package Selector Toggle */}
                  <div className="inline-flex p-1 rounded-xl bg-slate-900 border border-slate-700/80 shadow-inner shrink-0 self-start sm:self-auto">
                    <button
                      type="button"
                      onClick={() => handleToggleCycle('2year')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                        is2Year
                          ? 'bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-950 shadow-md font-black'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {is2Year && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      <span>2-Year Package</span>
                      <span className="text-[10px] font-mono px-1 py-0.2 rounded bg-amber-500/20 text-slate-950 font-black">
                        SAVE 40%
                      </span>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleToggleCycle('1year')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                        !is2Year
                          ? 'bg-emerald-400 text-slate-950 shadow-md font-black'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {!is2Year && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      <span>1-Year Package</span>
                      <span className="text-[10px] font-mono text-slate-400">
                        Standard
                      </span>
                    </button>
                  </div>
                </div>

                {/* 3 Price Cards (Starter, Growth, BIG Agency) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 items-stretch">
                  {PRICING_TIERS.map((tier) => {
                    const isSelected = activeTierId === tier.id;
                    const isStarter = tier.id === 'starter';
                    const isGrowth = tier.id === 'growth';
                    const isAgency = tier.id === 'agency';

                    const tierMonthly = is2Year ? tier.price2Year : tier.price1Year;
                    const tierTotal = tierMonthly * months;

                    return (
                      <div
                        key={tier.id}
                        onClick={() => handleSelectTierCard(tier)}
                        className={`relative rounded-2xl p-4 sm:p-4.5 flex flex-col justify-between transition-all cursor-pointer ${
                          isSelected
                            ? isGrowth
                              ? 'bg-gradient-to-b from-[#18160B] to-[#0D1220] border-2 border-amber-400 shadow-[0_0_25px_rgba(245,158,11,0.35)] ring-1 ring-amber-400/50'
                              : isStarter
                              ? 'bg-gradient-to-b from-[#091715] to-[#0D1220] border-2 border-emerald-400 shadow-[0_0_25px_rgba(52,211,153,0.3)] ring-1 ring-emerald-400/50'
                              : 'bg-gradient-to-b from-[#091522] to-[#0D1220] border-2 border-cyan-400 shadow-[0_0_25px_rgba(56,189,248,0.3)] ring-1 ring-cyan-400/50'
                            : 'bg-slate-900/60 border border-slate-800 hover:border-slate-700 hover:bg-slate-900/90'
                        }`}
                      >
                        {/* Popular / Recommended Badge for Growth */}
                        {isGrowth && (
                          <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-gradient-to-r from-amber-400 to-yellow-300 text-slate-950 font-black text-[10px] rounded-full shadow-md whitespace-nowrap flex items-center gap-1 uppercase tracking-wider">
                            <Star className="w-3 h-3 fill-slate-950" />
                            <span>★ MOST POPULAR</span>
                          </div>
                        )}

                        {/* Top Tier Title & Check indicator */}
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-2">
                            <div className="flex items-center gap-1.5">
                              <span
                                className={`text-sm sm:text-base font-black tracking-tight ${
                                  isSelected ? 'text-white' : 'text-slate-200'
                                }`}
                              >
                                {tier.id === 'agency' ? 'BIG Agency' : tier.name}
                              </span>
                              {tier.premiumBadge && (
                                <span className="px-1.5 py-0.2 rounded text-[9px] font-black bg-rose-500/20 text-rose-300 border border-rose-500/30 uppercase">
                                  {tier.premiumBadge}
                                </span>
                              )}
                            </div>
                            <div
                              className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 border ${
                                isSelected
                                  ? isGrowth
                                    ? 'bg-amber-400 border-amber-400 text-slate-950'
                                    : isStarter
                                    ? 'bg-emerald-400 border-emerald-400 text-slate-950'
                                    : 'bg-cyan-400 border-cyan-400 text-slate-950'
                                  : 'border-slate-700 bg-slate-800 text-transparent'
                              }`}
                            >
                              <Check className="w-3.5 h-3.5 stroke-[3]" />
                            </div>
                          </div>

                          <p className="text-[11px] text-slate-400 line-clamp-1 mb-3">
                            {tier.subtitle}
                          </p>

                          {/* Rate & Total Payment Display */}
                          <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 mb-3 text-center">
                            <div className="flex items-baseline justify-center gap-1">
                              <span
                                className={`text-2xl sm:text-3xl font-black font-mono tracking-tight ${
                                  isGrowth
                                    ? 'text-amber-400'
                                    : isStarter
                                    ? 'text-emerald-400'
                                    : 'text-cyan-400'
                                }`}
                              >
                                ${tierMonthly}
                              </span>
                              <span className="text-[11px] font-mono text-slate-400">/mo</span>
                            </div>

                            {/* Total Package Payment Clearly Highlighted */}
                            <div className="mt-1 pt-1.5 border-t border-slate-800 flex flex-col items-center justify-center">
                              <span className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">
                                {is2Year ? '2-Year Package Total:' : '1-Year Package Total:'}
                              </span>
                              <span className="text-sm font-extrabold text-white font-mono">
                                Total: ${tierTotal}.00
                              </span>
                              <span className="text-[10px] text-slate-500 font-mono">
                                ({months} Months Full Access)
                              </span>
                            </div>
                          </div>

                          {/* Mini Spec Checklist */}
                          <div className="space-y-1.5 text-[11px] text-slate-300">
                            <div className="flex items-center gap-1.5">
                              <Check className={`w-3.5 h-3.5 shrink-0 ${isGrowth ? 'text-amber-400' : isStarter ? 'text-emerald-400' : 'text-cyan-400'}`} />
                              <span className="truncate">Hostinger: {tier.toolAllowances.hostinger}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <Check className={`w-3.5 h-3.5 shrink-0 ${isGrowth ? 'text-amber-400' : isStarter ? 'text-emerald-400' : 'text-cyan-400'}`} />
                              <span className="truncate">Mailchimp: {tier.toolAllowances.mailchimp}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <Check className={`w-3.5 h-3.5 shrink-0 ${isGrowth ? 'text-amber-400' : isStarter ? 'text-emerald-400' : 'text-cyan-400'}`} />
                              <span className="truncate">WATi: {tier.toolAllowances.wati}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <Check className={`w-3.5 h-3.5 shrink-0 ${isGrowth ? 'text-amber-400' : isStarter ? 'text-emerald-400' : 'text-cyan-400'}`} />
                              <span className="truncate">Bitly: {tier.toolAllowances.bitly}</span>
                            </div>
                          </div>
                        </div>

                        {/* Card Footer Button Indicator */}
                        <div className="mt-3.5 pt-2 border-t border-slate-800/80">
                          <button
                            type="button"
                            className={`w-full py-1.5 px-2 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                              isSelected
                                ? isGrowth
                                  ? 'bg-amber-400 text-slate-950 font-black'
                                  : isStarter
                                  ? 'bg-emerald-400 text-slate-950 font-black'
                                  : 'bg-cyan-400 text-slate-950 font-black'
                                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800'
                            }`}
                          >
                            {isSelected ? '✓ Selected Plan' : 'Select Plan'}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* SECTION 2: Customer Contact Information */}
              <div className="space-y-2">
                <label className="text-xs font-black text-white uppercase tracking-wider">
                  2. CUSTOMER & ACTIVATION CREDENTIALS:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-800/80 border border-slate-700 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-hidden focus:border-emerald-400"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      required
                      placeholder="your.email@business.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-800/80 border border-slate-700 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-hidden focus:border-emerald-400"
                    />
                  </div>
                </div>
              </div>

              {/* SECTION 3: Payment Method Tabs (FPX Malaysian, Touchngo, Card, PayPal) */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-black text-white uppercase tracking-wider">
                    3. SELECT PAYMENT METHOD:
                  </label>
                  <span className="text-[11px] text-emerald-400 font-mono font-semibold">
                    FPX & Touch 'n Go Supported 🇲🇾
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {/* Option 1: FPX Malaysian Online Banking */}
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('fpx')}
                    className={`py-2.5 px-3 rounded-xl border text-xs font-bold flex flex-col items-center justify-center gap-1 cursor-pointer transition-all ${
                      paymentMethod === 'fpx'
                        ? 'bg-slate-800 border-emerald-400 text-white shadow-md ring-1 ring-emerald-400/50'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-1.5">
                      <Building2 className="w-4 h-4 text-emerald-400" />
                      <span className="text-sm font-black text-white">FPX</span>
                    </div>
                    <span className="text-[10px] text-emerald-400 font-medium font-mono">
                      Malaysian Banking
                    </span>
                  </button>

                  {/* Option 2: Touch 'n Go eWallet */}
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('tng')}
                    className={`py-2.5 px-3 rounded-xl border text-xs font-bold flex flex-col items-center justify-center gap-1 cursor-pointer transition-all ${
                      paymentMethod === 'tng'
                        ? 'bg-slate-800 border-cyan-400 text-white shadow-md ring-1 ring-cyan-400/50'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-1.5">
                      <Smartphone className="w-4 h-4 text-cyan-400" />
                      <span className="text-sm font-black text-cyan-300">Touch 'n Go</span>
                    </div>
                    <span className="text-[10px] text-cyan-400 font-medium font-mono">
                      eWallet / DuitNow
                    </span>
                  </button>

                  {/* Option 3: Credit / Debit Card */}
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`py-2.5 px-3 rounded-xl border text-xs font-bold flex flex-col items-center justify-center gap-1 cursor-pointer transition-all ${
                      paymentMethod === 'card'
                        ? 'bg-slate-800 border-emerald-400 text-white shadow-md ring-1 ring-emerald-400/50'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-1.5">
                      <CreditCard className="w-4 h-4 text-emerald-400" />
                      <span className="text-xs font-bold">Credit/Debit</span>
                    </div>
                    <span className="text-[10px] text-slate-400 font-mono">
                      Visa / Mastercard
                    </span>
                  </button>

                  {/* Option 4: PayPal */}
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('paypal')}
                    className={`py-2.5 px-3 rounded-xl border text-xs font-bold flex flex-col items-center justify-center gap-1 cursor-pointer transition-all ${
                      paymentMethod === 'paypal'
                        ? 'bg-slate-800 border-blue-400 text-white shadow-md ring-1 ring-blue-400/50'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm font-black text-blue-400 font-serif">P</span>
                      <span className="text-xs font-bold">PayPal</span>
                    </div>
                    <span className="text-[10px] text-slate-400 font-mono">
                      Global Express
                    </span>
                  </button>
                </div>

                {/* FPX Detailed Bank Selection Panel */}
                {paymentMethod === 'fpx' && (
                  <div className="p-4 rounded-2xl bg-slate-950 border border-emerald-500/40 space-y-3 animate-in fade-in duration-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono text-xs font-bold">
                          FPX Online Banking
                        </span>
                        <span className="text-xs text-slate-300">
                          Select your Malaysian bank:
                        </span>
                      </div>
                      <span className="text-xs font-mono font-bold text-emerald-400">
                        ≈ RM {myrTotal} MYR
                      </span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {MALAYSIAN_BANKS.map((b) => (
                        <button
                          key={b.id}
                          type="button"
                          onClick={() => setSelectedBank(b.id)}
                          className={`p-2.5 rounded-xl border text-left text-xs font-bold transition-all cursor-pointer flex items-center justify-between ${
                            selectedBank === b.id
                              ? 'bg-emerald-950/40 border-emerald-400 text-white shadow-xs'
                              : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:border-slate-700'
                          }`}
                        >
                          <span className="truncate">{b.name}</span>
                          {selectedBank === b.id && <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />}
                        </button>
                      ))}
                    </div>
                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      💡 You will be redirected to the official {MALAYSIAN_BANKS.find(b => b.id === selectedBank)?.name} FPX gateway to authorize payment securely.
                    </p>
                  </div>
                )}

                {/* Touch 'n Go Detailed Panel */}
                {paymentMethod === 'tng' && (
                  <div className="p-4 rounded-2xl bg-slate-950 border border-cyan-500/40 space-y-3 animate-in fade-in duration-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono text-xs font-bold">
                          Touch 'n Go eWallet
                        </span>
                        <span className="text-xs text-slate-300">
                          Malaysia DuitNow / TNG Pay
                        </span>
                      </div>
                      <span className="text-xs font-mono font-bold text-cyan-400">
                        ≈ RM {myrTotal} MYR
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[11px] font-mono text-slate-300">
                        Touch 'n Go Registered Mobile Number:
                      </label>
                      <div className="flex gap-2">
                        <span className="px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs font-mono text-slate-300 flex items-center">
                          +60 🇲🇾
                        </span>
                        <input
                          type="tel"
                          placeholder="12-345 6789"
                          value={tngPhone}
                          onChange={(e) => setTngPhone(e.target.value)}
                          className="flex-1 px-3.5 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-hidden focus:border-cyan-400 font-mono"
                        />
                      </div>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      📱 A direct Touch 'n Go payment prompt or DuitNow QR will appear on your smartphone to confirm the RM {myrTotal} transfer.
                    </p>
                  </div>
                )}

                {/* Credit Card Detailed Panel */}
                {paymentMethod === 'card' && (
                  <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 animate-in fade-in duration-200">
                    <div className="space-y-1.5">
                      <label className="text-[11px] text-slate-400">Card Number</label>
                      <input
                        type="text"
                        placeholder="4242 •••• •••• 4242"
                        className="w-full px-3.5 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white font-mono focus:outline-hidden focus:border-emerald-400"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <label className="text-[11px] text-slate-400">MM / YY</label>
                        <input
                          type="text"
                          placeholder="12/28"
                          className="w-full px-3.5 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white font-mono focus:outline-hidden focus:border-emerald-400"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[11px] text-slate-400">CVC / CVV</label>
                        <input
                          type="text"
                          placeholder="123"
                          className="w-full px-3.5 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white font-mono focus:outline-hidden focus:border-emerald-400"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* PayPal Detailed Panel */}
                {paymentMethod === 'paypal' && (
                  <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-center space-y-2 animate-in fade-in duration-200">
                    <p className="text-xs text-slate-300">
                      You will be securely routed to PayPal to complete your transaction in USD (${finalTotal}.00).
                    </p>
                  </div>
                )}
              </div>

              {/* Promo Code Input */}
              <div className="pt-1">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Have a promo code? (Try: AUTOMATE5)"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="flex-1 px-3.5 py-2 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500 uppercase font-mono"
                  />
                  <button
                    type="button"
                    onClick={handleApplyCoupon}
                    className="px-4 py-2 bg-slate-750 hover:bg-slate-700 text-xs font-bold text-slate-200 rounded-xl cursor-pointer transition-colors"
                  >
                    Apply
                  </button>
                </div>
                {couponSuccess && (
                  <div className="text-xs text-emerald-400 mt-1.5 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{couponSuccess}</span>
                  </div>
                )}
                {couponError && (
                  <div className="text-xs text-rose-400 mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{couponError}</span>
                  </div>
                )}
              </div>

              {/* Order Total Breakdown Box */}
              <div className="p-4.5 bg-slate-950 rounded-2xl border border-slate-800 space-y-2 text-xs">
                <div className="flex justify-between items-center text-slate-300">
                  <span className="font-semibold">
                    Package Selected: {currentTier.id === 'agency' ? 'BIG Agency' : currentTier.name}
                  </span>
                  <span className="font-mono text-emerald-400 font-bold">
                    ${monthlyRate}.00/mo
                  </span>
                </div>

                <div className="flex justify-between items-center text-slate-400">
                  <span>Selected Package Duration:</span>
                  <span className="font-mono text-white font-medium">
                    {is2Year ? '2-Year Package (24 Months)' : '1-Year Package (12 Months)'}
                  </span>
                </div>

                <div className="flex justify-between items-center text-slate-400">
                  <span>Standard Package Calculation ({months} mos × ${monthlyRate}/mo):</span>
                  <span className="font-mono text-white font-semibold">
                    ${packageTotal}.00
                  </span>
                </div>

                {appliedDiscount > 0 && (
                  <div className="flex justify-between items-center text-emerald-400 font-semibold">
                    <span>Promotional Discount:</span>
                    <span className="font-mono">-${appliedDiscount}.00</span>
                  </div>
                )}

                <div className="pt-2.5 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <span className="text-sm font-black text-white">
                      TOTAL PAYMENT DUE TODAY:
                    </span>
                    <div className="text-[11px] text-slate-400">
                      One-time payment for full {is2Year ? '2-Year' : '1-Year'} suite access
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-xl sm:text-2xl font-black text-emerald-400">
                      ${finalTotal}.00
                    </span>
                    {(paymentMethod === 'fpx' || paymentMethod === 'tng') && (
                      <div className="text-xs font-mono font-bold text-cyan-300">
                        ≈ RM {myrTotal} MYR
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Checkout Submit Button */}
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full py-4 bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 hover:from-emerald-300 hover:to-cyan-200 text-slate-950 font-black rounded-2xl text-base transition-all duration-200 shadow-xl cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isProcessing ? (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                    <span>
                      Connecting to {paymentMethod === 'fpx' ? 'FPX Banking Gateway' : paymentMethod === 'tng' ? 'Touch \'n Go Gateway' : 'Secure Gateway'}...
                    </span>
                  </div>
                ) : (
                  <>
                    <Lock className="w-4 h-4 fill-slate-950" />
                    <span>
                      Pay Total ${finalTotal}.00 {paymentMethod === 'fpx' ? `via FPX (${MALAYSIAN_BANKS.find(b => b.id === selectedBank)?.name})` : paymentMethod === 'tng' ? 'via Touch \'n Go' : ''} & Activate
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="text-center text-[11px] text-slate-300 font-medium space-y-1">
                <div>🛡️ 100% Satisfaction Guarantee · 100% Legit Original Company Licenses · Immediate 2-Minute Replacement</div>
                <div className="text-slate-400">
                  Official Support: <a href="mailto:Bizzsoft2u@gmail.com" className="text-emerald-400 underline font-semibold hover:text-emerald-300 font-mono">Bizzsoft2u@gmail.com</a>
                </div>
              </div>

            </form>
          </div>
        ) : (
          /* Order Confirmation / Success View */
          <div className="p-8 text-center space-y-6 overflow-y-auto">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center text-emerald-400 mx-auto">
              <Check className="w-8 h-8 stroke-[3]" />
            </div>

            <div>
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">
                PAYMENT CONFIRMED · ORDER #BIZ-8492
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                Welcome to Bizz2u 6-in-1 Suite!
              </h3>
              <p className="text-sm text-slate-300 mt-2 max-w-md mx-auto">
                Payment of <strong className="text-emerald-400 font-mono">${finalTotal}.00 USD</strong> received successfully via{' '}
                <strong className="text-white">
                  {paymentMethod === 'fpx'
                    ? `FPX Online Banking (${MALAYSIAN_BANKS.find((b) => b.id === selectedBank)?.name})`
                    : paymentMethod === 'tng'
                    ? 'Touch \'n Go eWallet'
                    : paymentMethod === 'card'
                    ? 'Credit / Debit Card'
                    : 'PayPal'}
                </strong>.
                We've sent your full activation credentials and download links to <strong className="text-white">{email}</strong>.
              </p>
            </div>

            {/* License Box */}
            <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl max-w-md mx-auto text-left space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-400 uppercase tracking-wider font-semibold">
                <span>Your Master License Key:</span>
                <span className="text-emerald-400 font-mono lowercase">
                  {is2Year ? '2-year active' : '1-year active'}
                </span>
              </div>
              <div className="flex items-center justify-between p-2.5 bg-slate-900 rounded-lg border border-slate-800 font-mono text-sm text-emerald-400">
                <span className="truncate">BIZZ-6X-8932-BNDL-2026-VIP</span>
                <button
                  onClick={copyLicense}
                  className="ml-2 px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-xs text-white rounded transition-colors flex items-center gap-1 cursor-pointer shrink-0"
                >
                  {copiedKey ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedKey ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <div className="text-xs text-slate-300 space-y-1.5 pt-1">
                <div className="flex items-center gap-1.5 text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>
                    <strong>Package:</strong> {currentTier.id === 'agency' ? 'BIG Agency' : currentTier.name} ({is2Year ? '24 Months Full Access' : '12 Months Full Access'})
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Mailchimp, Hostinger, Fomo, WATi, UptimeRobot & Bitly Unlocked</span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-300 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Complete 6-Software Video Tutorial Library Unlocked</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={() => alert(`Downloading ${currentTier.name} Package & Activation Guide for ${email}...`)}
                className="w-full sm:w-auto px-6 py-3 bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold rounded-xl text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <Download className="w-4 h-4" />
                <span>Download Quick-Start Guide (.PDF)</span>
              </button>
              <button
                onClick={resetOrder}
                className="w-full sm:w-auto px-5 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-sm transition-colors cursor-pointer"
              >
                Done / Close Window
              </button>
            </div>

            <div className="pt-2 text-xs text-slate-400 border-t border-slate-800/80">
              Need assistance or activation help? Contact our official support team:{' '}
              <a href="mailto:Bizzsoft2u@gmail.com" className="text-emerald-400 underline font-semibold hover:text-emerald-300 font-mono">
                Bizzsoft2u@gmail.com
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
