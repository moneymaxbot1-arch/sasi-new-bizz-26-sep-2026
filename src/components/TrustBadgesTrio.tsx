import React, { useState } from 'react';
import { 
  RotateCcw, 
  Lock, 
  Zap, 
  ShieldCheck, 
  CheckCircle2, 
  Info, 
  X, 
  Clock, 
  FileCheck, 
  Server, 
  KeyRound,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

export type TrustPillarId = 'cancel_anytime' | 'private_encrypted' | 'instant_setup';

export interface TrustPillarData {
  id: TrustPillarId;
  title: string;
  tagline: string;
  badge: string;
  icon: 'rotate' | 'lock' | 'zap';
  color: string;
  bullets: string[];
  modalDetails: {
    heading: string;
    description: string;
    highlights: { title: string; desc: string }[];
    faq: { q: string; a: string };
  };
}

export const TRUST_PILLARS: TrustPillarData[] = [
  {
    id: 'cancel_anytime',
    title: 'Cancel Anytime',
    tagline: 'Zero lock-in contracts. 1-click self-service cancellation with no hassle.',
    badge: 'Zero Commitment',
    icon: 'rotate',
    color: '#34D399', // Emerald
    bullets: [
      'Self-service cancel from your billing dashboard',
      'No hidden cancellation penalty or exit fees',
      'Keep full tool access until end of current billing cycle'
    ],
    modalDetails: {
      heading: 'Cancel Anytime Policy — Complete Transparency',
      description: 'We believe you should only pay for software that continues to deliver tangible revenue and massive time savings for your business. There are strictly no annual lock-in contracts, zero exit fees, and no retention phone calls.',
      highlights: [
        {
          title: '1-Click Dashboard Cancellation',
          desc: 'Manage your subscription directly inside your billing settings. Click "Cancel Subscription" at any time and it takes effect immediately.'
        },
        {
          title: 'Access Maintained Through Period',
          desc: 'When you cancel, all 6 software licenses remain 100% active and functional through the final day of your paid cycle.'
        },
        {
          title: 'Seamless Reactivation Anytime',
          desc: 'Your workspace settings and configuration templates are preserved safely for 60 days should you ever choose to resume.'
        }
      ],
      faq: {
        q: 'Do I have to speak with customer support to cancel?',
        a: 'No. You can cancel directly from your customer portal in two clicks. If you prefer assistance, our support team at Bizzusupport@gmail.com will also process cancellations immediately.'
      }
    }
  },
  {
    id: 'private_encrypted',
    title: '100% Private & Encrypted Data',
    tagline: 'Bank-grade 256-bit encryption. Strict zero data sharing or ad tracking.',
    badge: 'Bank-Grade AES-256',
    icon: 'lock',
    color: '#38BDF8', // Sky
    bullets: [
      'End-to-end 256-bit AES encryption at rest & TLS 1.3 in transit',
      'Zero customer data harvesting, zero 3rd-party ad broker sharing',
      'Strict multi-tenant isolation for all webhooks, lists & emails'
    ],
    modalDetails: {
      heading: '100% Private & Encrypted Data Guarantee',
      description: 'Your business assets, customer subscriber emails, WhatsApp contact phone numbers, webhook payloads, and web analytics belong exclusively to you. We enforce enterprise-grade data confidentiality across all 6 tools.',
      highlights: [
        {
          title: 'Bank-Grade AES-256 & TLS 1.3',
          desc: 'All communications, API keys, credentials, and stored records are protected using modern cryptographic encryption protocols.'
        },
        {
          title: 'Zero Third-Party Telemetry',
          desc: 'We never sell, rent, monetize, or expose your customer databases, contact lists, or campaign stats to any ad networks.'
        },
        {
          title: 'Isolated Tenant Sandboxes',
          desc: 'Each subscriber workspace operates within isolated security sandboxes with distinct credential rotations and role boundaries.'
        }
      ],
      faq: {
        q: 'Who has access to my WhatsApp leads and subscriber emails?',
        a: 'Only you and authorized members of your team. Neither StackScale nor unauthorized vendors can view or download your private contact databases.'
      }
    }
  },
  {
    id: 'instant_setup',
    title: 'Instant 3-Minute Workspace Setup',
    tagline: 'Automated instant deployment. Access all 6 tools in under 180 seconds.',
    badge: '< 180s Automated',
    icon: 'zap',
    color: '#FBBF24', // Amber
    bullets: [
      'Automated license dispatch within seconds of subscription',
      'Unified single-dashboard access to all 6 tools with 1 login',
      'Step-by-step 3-minute video onboarding playbook included'
    ],
    modalDetails: {
      heading: 'Instant 3-Minute Workspace Setup Workflow',
      description: 'No waiting hours or days for manual account creation. Our automated license provisioning engine instantly generates your verified credentials and unlocks your growth workspace in under 180 seconds.',
      highlights: [
        {
          title: 'Minute 1: Instant License Generation',
          desc: 'Your payment triggers our automated provisioning pipeline to verify and generate authentic license keys for all 6 software platforms.'
        },
        {
          title: 'Minute 2: Unified Hub Access Delivery',
          desc: 'You receive instant single-sign-on credentials and direct login links delivered directly to your confirmation screen and inbox.'
        },
        {
          title: 'Minute 3: Plug & Play Walkthrough Videos',
          desc: 'Follow the 3-minute beginner video guide to connect your domain, activate WhatsApp broadcasts, and configure live visitor social proof.'
        }
      ],
      faq: {
        q: 'What happens if I need help setting up my domain or email SMTP?',
        a: 'Our direct technical support team is available at Bizzusupport@gmail.com with priority setup assistance and emergency 2-minute license replacement.'
      }
    }
  }
];

interface TrustBadgesTrioProps {
  variant?: 'cards' | 'ribbon' | 'compact';
  className?: string;
  onClaimClick?: () => void;
}

export const TrustBadgesTrio: React.FC<TrustBadgesTrioProps> = ({
  variant = 'cards',
  className = '',
  onClaimClick
}) => {
  const [activeModalPillar, setActiveModalPillar] = useState<TrustPillarData | null>(null);

  const renderIcon = (iconType: TrustPillarData['icon'], classNameStr: string) => {
    switch (iconType) {
      case 'rotate':
        return <RotateCcw className={classNameStr} />;
      case 'lock':
        return <Lock className={classNameStr} />;
      case 'zap':
        return <Zap className={classNameStr} />;
      default:
        return <ShieldCheck className={classNameStr} />;
    }
  };

  // Compact Variant (e.g. for micro trust bars, below checkout buttons, sticky bars)
  if (variant === 'compact') {
    return (
      <>
        <div className={`flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-slate-300 ${className}`}>
          {TRUST_PILLARS.map((pillar) => (
            <button
              key={pillar.id}
              type="button"
              onClick={() => setActiveModalPillar(pillar)}
              className="group inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-emerald-500/50 transition-all text-slate-300 hover:text-white cursor-pointer"
              title={`Click to view details for ${pillar.title}`}
            >
              <span 
                style={{ color: pillar.color }} 
                className="transition-transform group-hover:scale-110"
              >
                {renderIcon(pillar.icon, 'w-3.5 h-3.5 shrink-0')}
              </span>
              <span className="font-semibold">{pillar.title}</span>
              <Info className="w-3 h-3 text-slate-500 group-hover:text-slate-300 opacity-60 group-hover:opacity-100" />
            </button>
          ))}
        </div>

        {/* Modal */}
        {activeModalPillar && (
          <TrustPillarModal 
            pillar={activeModalPillar} 
            onClose={() => setActiveModalPillar(null)}
            onClaimClick={onClaimClick}
          />
        )}
      </>
    );
  }

  // Ribbon Variant (e.g. sleek horizontal bar below Hero CTAs or directly above Pricing)
  if (variant === 'ribbon') {
    return (
      <>
        <div className={`w-full bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-emerald-500/30 rounded-2xl p-3 sm:p-4 shadow-xl backdrop-blur-md ${className}`}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-800">
            {TRUST_PILLARS.map((pillar) => (
              <div
                key={pillar.id}
                onClick={() => setActiveModalPillar(pillar)}
                className="group p-2.5 sm:px-4 flex items-center justify-between gap-3 cursor-pointer hover:bg-slate-800/40 rounded-xl transition-all"
              >
                <div className="flex items-center gap-3">
                  <div 
                    style={{ 
                      backgroundColor: `${pillar.color}15`,
                      borderColor: `${pillar.color}40`,
                      color: pillar.color
                    }}
                    className="w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform"
                  >
                    {renderIcon(pillar.icon, 'w-5 h-5')}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                        {pillar.title}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 line-clamp-1">
                      {pillar.tagline}
                    </p>
                  </div>
                </div>

                <div className="shrink-0 text-slate-500 group-hover:text-slate-300 transition-colors">
                  <Info className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {activeModalPillar && (
          <TrustPillarModal 
            pillar={activeModalPillar} 
            onClose={() => setActiveModalPillar(null)}
            onClaimClick={onClaimClick}
          />
        )}
      </>
    );
  }

  // Default 'cards' Variant (3 prominent feature guarantee cards)
  return (
    <>
      <div className={`grid grid-cols-1 md:grid-cols-3 gap-5 ${className}`}>
        {TRUST_PILLARS.map((pillar) => (
          <div
            key={pillar.id}
            className="group relative bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800 hover:border-emerald-500/60 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:shadow-emerald-950/30 transition-all duration-300 flex flex-col justify-between"
          >
            {/* Top Badge & Icon */}
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-4">
                <div 
                  style={{ 
                    backgroundColor: `${pillar.color}18`,
                    borderColor: `${pillar.color}40`,
                    color: pillar.color
                  }}
                  className="w-12 h-12 rounded-xl border flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-200"
                >
                  {renderIcon(pillar.icon, 'w-6 h-6')}
                </div>

                <span 
                  style={{ 
                    color: pillar.color,
                    borderColor: `${pillar.color}35`,
                    backgroundColor: `${pillar.color}10`
                  }}
                  className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-full border uppercase tracking-wider"
                >
                  {pillar.badge}
                </span>
              </div>

              {/* Title & Tagline */}
              <h4 className="text-xl font-extrabold text-white group-hover:text-emerald-300 transition-colors">
                {pillar.title}
              </h4>
              <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                {pillar.tagline}
              </p>

              {/* Bullet Points */}
              <ul className="mt-5 space-y-2.5">
                {pillar.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Card Action */}
            <div className="mt-6 pt-4 border-t border-slate-800/70 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setActiveModalPillar(pillar)}
                className="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5 transition-colors cursor-pointer group-hover:underline"
              >
                <span>View Guarantee Terms</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <span className="text-[10px] font-mono text-slate-500">
                100% Guaranteed
              </span>
            </div>

          </div>
        ))}
      </div>

      {/* Modal */}
      {activeModalPillar && (
        <TrustPillarModal 
          pillar={activeModalPillar} 
          onClose={() => setActiveModalPillar(null)}
          onClaimClick={onClaimClick}
        />
      )}
    </>
  );
};

interface TrustPillarModalProps {
  pillar: TrustPillarData;
  onClose: () => void;
  onClaimClick?: () => void;
}

const TrustPillarModal: React.FC<TrustPillarModalProps> = ({ pillar, onClose, onClaimClick }) => {
  return (
    <div 
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden text-slate-200 animate-scaleUp"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-800 bg-slate-900/95">
          <div className="flex items-center gap-3">
            <div 
              style={{ 
                backgroundColor: `${pillar.color}20`,
                borderColor: `${pillar.color}50`,
                color: pillar.color
              }}
              className="w-10 h-10 rounded-xl border flex items-center justify-center"
            >
              {pillar.icon === 'rotate' && <RotateCcw className="w-5 h-5" />}
              {pillar.icon === 'lock' && <Lock className="w-5 h-5" />}
              {pillar.icon === 'zap' && <Zap className="w-5 h-5" />}
            </div>
            <div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-bold">
                Official Assurance
              </div>
              <h3 className="text-lg font-bold text-white">
                "{pillar.title}" Guarantee
              </h3>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5 max-h-[75vh] overflow-y-auto">
          <div>
            <h4 className="text-base font-bold text-white mb-2">
              {pillar.modalDetails.heading}
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {pillar.modalDetails.description}
            </p>
          </div>

          {/* Highlights */}
          <div className="space-y-3 pt-2">
            <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
              How It Works & What Is Guaranteed
            </h5>
            <div className="grid grid-cols-1 gap-2.5">
              {pillar.modalDetails.highlights.map((item, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-white">{item.title}</div>
                    <div className="text-xs text-slate-400 mt-0.5 leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ callout */}
          <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 space-y-1.5">
            <div className="text-xs font-bold text-emerald-300 flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 shrink-0" />
              <span>Common Question: {pillar.modalDetails.faq.q}</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed pl-5">
              {pillar.modalDetails.faq.a}
            </p>
          </div>

          {/* Guarantee Signoff */}
          <div className="p-3.5 rounded-xl bg-slate-850 border border-slate-700/80 flex items-center justify-between text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Protected by our 30-Day Money-Back Guarantee</span>
            </div>
            <span className="font-mono text-emerald-400 font-bold">100% Risk-Free</span>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            Close
          </button>

          <button
            type="button"
            onClick={() => {
              onClose();
              if (onClaimClick) onClaimClick();
            }}
            className="px-5 py-2.5 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 text-slate-950 font-bold rounded-xl text-xs flex items-center gap-2 transition-all cursor-pointer shadow-md active:scale-98"
          >
            <span>Start Risk-Free ($15/mo)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
