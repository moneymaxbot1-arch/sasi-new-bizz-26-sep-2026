import React, { useState } from 'react';
import { PRICING_TIERS } from '../data/bundleData';
import { PricingTier } from '../types';
import { X, Check, ShieldCheck, Lock, Sparkles, CreditCard, ArrowRight, Download, Copy, CheckCircle2, AlertCircle } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  selectedTier: PricingTier;
  onClose: () => void;
  onSelectTier: (tier: PricingTier) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  selectedTier,
  onClose,
  onSelectTier,
}) => {
  const [includeOrderBump, setIncludeOrderBump] = useState<boolean>(true);
  const [couponCode, setCouponCode] = useState<string>('');
  const [appliedDiscount, setAppliedDiscount] = useState<number>(0);
  const [couponError, setCouponError] = useState<string>('');
  const [couponSuccess, setCouponSuccess] = useState<string>('');
  
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal' | 'applepay'>('card');
  
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [copiedKey, setCopiedKey] = useState<boolean>(false);

  if (!isOpen) return null;

  const orderBumpPrice = 7;
  const subtotal = selectedTier.price + (includeOrderBump ? orderBumpPrice : 0);
  const total = Math.max(1, subtotal - appliedDiscount);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    setCouponError('');
    setCouponSuccess('');
    const code = couponCode.trim().toUpperCase();
    if (code === 'AUTOMATE5' || code === 'SAVE5') {
      setAppliedDiscount(5);
      setCouponSuccess('Promo code applied: $5.00 discount!');
    } else if (code === 'VIP10') {
      setAppliedDiscount(Math.min(10, selectedTier.price - 5));
      setCouponSuccess('VIP code applied!');
    } else {
      setCouponError('Invalid coupon. Try using "AUTOMATE5" for $5 off.');
    }
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      alert('Please fill in your name and email address.');
      return;
    }

    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsCompleted(true);
    }, 1200);
  };

  const copyLicense = () => {
    navigator.clipboard.writeText('STACK-6X-8932-BNDL-2026-VIP');
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 2000);
  };

  const resetOrder = () => {
    setIsCompleted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl overflow-hidden my-8">
        
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full bg-slate-800/80 hover:bg-slate-700 transition-colors z-10 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!isCompleted ? (
          <div>
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-6 border-b border-slate-800">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span>Instant Activation Checkout · 256-Bit SSL Secured</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                Claim Your 6-in-1 Business Automation Suite
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Mailchimp + Hostinger + Fomo + Wati + UptimeRobot + Bitly unified bundle
              </p>
            </div>

            <form onSubmit={handleSubmitOrder} className="p-6 space-y-6">
              
              {/* Step 1: Select License Tier */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  1. Selected License Tier:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {PRICING_TIERS.map((tier) => (
                    <button
                      key={tier.id}
                      type="button"
                      onClick={() => onSelectTier(tier)}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        selectedTier.id === tier.id
                          ? 'border-emerald-400 bg-emerald-950/30 text-white shadow-md'
                          : 'border-slate-800 bg-slate-850 text-slate-400 hover:border-slate-750'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-bold text-white truncate max-w-[110px]">
                          {tier.id === 'agency' ? 'BIG Agency' : tier.name}
                        </span>
                        <span className="font-mono font-bold text-emerald-400">${tier.price}/mo</span>
                      </div>
                      <div className="text-[10px] text-slate-400 mt-1 flex items-center justify-between">
                        <span className="line-through">Reg: ${tier.originalPrice}</span>
                        <span className="text-amber-300 font-mono text-[9px]">{tier.subtitle}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Customer Contact Information */}
              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  2. Where should we send your license keys & setup portal?
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

              {/* Step 3: High-Converting Order Bump */}
              <div
                onClick={() => setIncludeOrderBump(!includeOrderBump)}
                className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                  includeOrderBump
                    ? 'border-amber-400/80 bg-amber-950/20'
                    : 'border-slate-800 bg-slate-850/50'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="pt-0.5">
                    <input
                      type="checkbox"
                      checked={includeOrderBump}
                      onChange={(e) => setIncludeOrderBump(e.target.checked)}
                      className="w-4 h-4 rounded text-emerald-500 accent-amber-400 cursor-pointer"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-amber-300">
                        ⚡ SPECIAL ADD-ON: 50+ Plug-and-Play Sales Copy & Funnel Templates
                      </span>
                      <span className="font-mono text-xs font-bold text-amber-300">+$7.00</span>
                    </div>
                    <p className="text-[11px] text-slate-300 mt-1 leading-relaxed">
                      Instant swipe files for high-converting WhatsApp broadcasts, cold email pitches, abandoned cart emails, and social proof setups. (84% of founders add this).
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 4: Promo Code Input */}
              <div className="pt-1">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Have a promo code? (Try: AUTOMATE5)"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="flex-1 px-3.5 py-2 bg-slate-800 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 uppercase font-mono"
                  />
                  <button
                    type="button"
                    onClick={handleApplyCoupon}
                    className="px-4 py-2 bg-slate-750 hover:bg-slate-700 text-xs font-semibold text-slate-200 rounded-lg cursor-pointer transition-colors"
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

              {/* Step 5: Payment Method Tabs */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  3. Select Payment Method:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`py-2 px-3 rounded-lg border text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer transition-colors ${
                      paymentMethod === 'card'
                        ? 'bg-slate-800 border-emerald-400 text-white'
                        : 'bg-slate-850 border-slate-800 text-slate-400'
                    }`}
                  >
                    <CreditCard className="w-3.5 h-3.5" />
                    <span>Credit Card</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('applepay')}
                    className={`py-2 px-3 rounded-lg border text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer transition-colors ${
                      paymentMethod === 'applepay'
                        ? 'bg-slate-800 border-emerald-400 text-white'
                        : 'bg-slate-850 border-slate-800 text-slate-400'
                    }`}
                  >
                    <span> Apple Pay</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('paypal')}
                    className={`py-2 px-3 rounded-lg border text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer transition-colors ${
                      paymentMethod === 'paypal'
                        ? 'bg-slate-800 border-emerald-400 text-white'
                        : 'bg-slate-850 border-slate-800 text-slate-400'
                    }`}
                  >
                    <span>PayPal</span>
                  </button>
                </div>
              </div>

              {/* Order Total Math */}
              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5 text-xs">
                <div className="flex justify-between text-slate-400">
                  <span>{selectedTier.name}:</span>
                  <span className="font-mono text-white font-semibold">${selectedTier.price}.00</span>
                </div>
                {includeOrderBump && (
                  <div className="flex justify-between text-slate-400">
                    <span>50+ Sales Funnel Templates:</span>
                    <span className="font-mono text-white font-semibold">+${orderBumpPrice}.00</span>
                  </div>
                )}
                {appliedDiscount > 0 && (
                  <div className="flex justify-between text-emerald-400 font-semibold">
                    <span>Promotional Discount:</span>
                    <span className="font-mono">-${appliedDiscount}.00</span>
                  </div>
                )}
                <div className="pt-2 border-t border-slate-800 flex justify-between text-sm font-bold text-white">
                  <span>First Month Due Today:</span>
                  <span className="font-mono text-lg text-emerald-400">${total}.00/mo</span>
                </div>
                <div className="text-[10px] text-slate-400 text-right">
                  Flexible monthly subscription · Cancel anytime with 1-click
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full py-4 bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 hover:from-emerald-300 hover:to-cyan-200 text-slate-950 font-black rounded-xl text-base transition-all duration-200 shadow-xl cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isProcessing ? (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                    <span>Activating Monthly Subscription...</span>
                  </div>
                ) : (
                  <>
                    <Lock className="w-4 h-4 fill-slate-950" />
                    <span>Start Subscription & Activate 6 Tools (${total}.00/mo)</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="text-center text-[11px] text-slate-300 font-medium">
                🛡️ 100% Satisfaction Guarantee · 100% Legit Original Company Licenses · Immediate 2-Minute Replacement
              </div>

            </form>
          </div>
        ) : (
          /* Order Confirmation / Success Fulfillment View */
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center text-emerald-400 mx-auto">
              <Check className="w-8 h-8 stroke-[3]" />
            </div>

            <div>
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">
                PAYMENT CONFIRMED · ORDER #STK-8492
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                Welcome to StackScale 6-in-1 Suite!
              </h3>
              <p className="text-sm text-slate-300 mt-2 max-w-md mx-auto">
                We've sent your full activation credentials and download links to <strong className="text-white">{email}</strong>.
              </p>
            </div>

            {/* License Box */}
            <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl max-w-md mx-auto text-left space-y-3">
              <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Your Master License Key:
              </div>
              <div className="flex items-center justify-between p-2.5 bg-slate-900 rounded-lg border border-slate-800 font-mono text-sm text-emerald-400">
                <span className="truncate">STACK-6X-8932-BNDL-2026-VIP</span>
                <button
                  onClick={copyLicense}
                  className="ml-2 px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-xs text-white rounded transition-colors flex items-center gap-1 cursor-pointer shrink-0"
                >
                  {copiedKey ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedKey ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <div className="text-xs text-slate-300 space-y-1 pt-1">
                <div className="flex items-center gap-1.5 text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Mailchimp, Hostinger, Fomo, Wati, UptimeRobot & Bitly Unlocked</span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-300 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Complete 6-Software Video Tutorial Library Unlocked (Easy for Beginners)</span>
                </div>
                {includeOrderBump && (
                  <div className="flex items-center gap-1.5 text-amber-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                    <span>50+ High-Conversion Sales Funnel Templates Unlocked</span>
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={() => alert(`Downloading Starter Package & Activation Guide for ${email}...`)}
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

          </div>
        )}

      </div>
    </div>
  );
};
