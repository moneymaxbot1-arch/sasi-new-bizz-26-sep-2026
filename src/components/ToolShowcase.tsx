import React, { useState } from 'react';
import { SOFTWARE_TOOLS } from '../data/bundleData';
import { Mail, Server, Flame, MessageSquare, Activity, Link2, CheckCircle2, Zap, ArrowRight } from 'lucide-react';

interface ToolShowcaseProps {
  onClaimClick: () => void;
}

export const ToolShowcase: React.FC<ToolShowcaseProps> = ({ onClaimClick }) => {
  const [activeToolId, setActiveToolId] = useState<string>(SOFTWARE_TOOLS[0].id);

  const activeTool = SOFTWARE_TOOLS.find(t => t.id === activeToolId) || SOFTWARE_TOOLS[0];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Mail': return <Mail className="w-5 h-5 text-[#FFE01B]" />;
      case 'Server': return <Server className="w-5 h-5 text-indigo-400" />;
      case 'Flame': return <Flame className="w-5 h-5 text-orange-400" />;
      case 'MessageSquare': return <MessageSquare className="w-5 h-5 text-emerald-400" />;
      case 'Activity': return <Activity className="w-5 h-5 text-teal-400" />;
      case 'Link2': return <Link2 className="w-5 h-5 text-amber-400" />;
      default: return <Zap className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="bundle-tools" className="py-20 bg-[#090D16] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-2">
            Inside The 6-in-1 Suite
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4 text-balance">
            Everything You Need to Automate Operations & Multiply Sales
          </h2>
          <p className="text-base text-slate-300">
            Click each software below to see how each tool eliminates manual work and drives measurable revenue into your business.
          </p>
        </div>

        {/* Interactive Tool Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 p-1.5 bg-slate-900 border border-slate-800 rounded-2xl mb-8">
          {SOFTWARE_TOOLS.map((tool) => {
            const isActive = tool.id === activeToolId;
            return (
              <button
                key={tool.id}
                onClick={() => setActiveToolId(tool.id)}
                className={`p-3 rounded-xl flex flex-col items-center justify-center text-center transition-all cursor-pointer ${
                  isActive
                    ? 'bg-slate-800 text-white shadow-lg border border-slate-700'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-850'
                }`}
              >
                <div className="mb-1.5">{getIcon(tool.icon)}</div>
                <span className="text-xs font-bold truncate max-w-full">{tool.name}</span>
                <span className="text-[10px] text-slate-400 font-mono mt-0.5 line-through">
                  ${tool.monthlyRetail}/mo
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Tool Detailed Spotlight View */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-700/80 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Deep Dive Copy */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 font-semibold">
                  Tool {SOFTWARE_TOOLS.findIndex(t => t.id === activeTool.id) + 1} of 6
                </span>
                <span className="text-slate-400">·</span>
                <span className="text-slate-300 font-medium">{activeTool.category}</span>
                <span className="text-slate-400">·</span>
                <span className="text-rose-400 line-through font-mono">Retail: ${activeTool.monthlyRetail}/month</span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                  {activeTool.name}
                </h3>
                <p className="text-lg text-emerald-400 font-semibold mb-3">
                  {activeTool.tagline}
                </p>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {activeTool.description}
                </p>

                {activeTool.aiIntegrations && (
                  <div className="flex flex-wrap items-center gap-1.5 pt-2">
                    <span className="text-[11px] font-bold text-amber-400 flex items-center gap-1 mr-1">
                      <Zap className="w-3 h-3 text-amber-400" />
                      Compatible with AI:
                    </span>
                    {activeTool.aiIntegrations.slice(0, 5).map((ai, i) => (
                      <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                        {ai}
                      </span>
                    ))}
                    {activeTool.aiIntegrations.length > 5 && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 text-slate-400">
                        +{activeTool.aiIntegrations.length - 5} more
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Key Features Breakdown */}
              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                  Key Capabilities Included In Bundle:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeTool.keyFeatures.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300 bg-slate-800/60 p-2.5 rounded-lg border border-slate-700/50">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Business Impact Box */}
              <div className="p-3.5 bg-emerald-950/20 border border-emerald-500/30 rounded-xl flex items-center justify-between gap-4">
                <div>
                  <div className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider">
                    Proven Direct Business Outcome
                  </div>
                  <div className="text-sm font-bold text-white">
                    {activeTool.businessImpact}
                  </div>
                </div>
                <button
                  onClick={onClaimClick}
                  className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-lg text-xs cursor-pointer whitespace-nowrap transition-colors"
                >
                  Get Tool in $15 Pack
                </button>
              </div>

            </div>

            {/* Right Column: Visual Simulated App Dashboard Card */}
            <div className="lg:col-span-5">
              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 shadow-inner space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                    <span className="text-slate-400 font-mono ml-2 text-[11px]">{activeTool.name.toLowerCase()}.app/dashboard</span>
                  </div>
                  <span className="text-emerald-400 font-mono text-[10px] bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-800">
                    STATUS: ACTIVE
                  </span>
                </div>

                {/* Dynamic mini-preview based on selected tool */}
                {activeTool.id === 'mailchimp' && (
                  <div className="space-y-3">
                    <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
                      <div className="text-xs text-slate-400">Automated Welcome Drip Journey</div>
                      <div className="text-sm font-bold text-white mt-1">New Subscriber &rarr; 20% Voucher &rarr; Upsell Follow-up</div>
                      <div className="mt-2 flex items-center justify-between text-xs text-emerald-400 font-mono">
                        <span>Open Rate: 48.2%</span>
                        <span>Revenue: +$3,840</span>
                      </div>
                    </div>
                    <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
                      <div className="text-xs text-slate-400">Abandoned Cart Recovery Sequence</div>
                      <div className="text-sm font-bold text-white mt-1">Triggers automatically 1 hour after exit</div>
                      <div className="mt-2 text-xs text-cyan-400 font-mono">Recovered Carts: 31.4% conversion</div>
                    </div>
                  </div>
                )}

                {activeTool.id === 'hostinger' && (
                  <div className="space-y-3">
                    <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
                      <div className="text-xs text-slate-400">LiteSpeed Cloud Performance</div>
                      <div className="text-sm font-bold text-emerald-400 font-mono text-lg mt-1">0.78s TTFB Load Time</div>
                      <div className="text-xs text-slate-300 mt-1">99.98% verified server uptime over 30 days</div>
                    </div>
                    <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
                      <div className="text-xs text-slate-400">Security & Backup Shield</div>
                      <div className="text-xs text-white mt-1 font-semibold">Free Wildcard SSL + Daily Cloud Snapshots Enabled</div>
                    </div>
                  </div>
                )}

                {activeTool.id === 'fomo' && (
                  <div className="space-y-3">
                    <div className="p-3.5 bg-gradient-to-r from-orange-950/40 to-slate-900 rounded-xl border border-orange-500/30 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 font-bold text-xs">
                        ⚡
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Sarah T. from Chicago purchased 4 min ago</div>
                        <div className="text-[11px] text-slate-400">Verified by Fomo Live Activity · 18 others looking</div>
                      </div>
                    </div>
                    <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-xs text-slate-300">
                      Live visitor count trigger displays dynamically to trigger fear of missing out and prompt swift checkout.
                    </div>
                  </div>
                )}

                {activeTool.id === 'wati' && (
                  <div className="space-y-3">
                    <div className="p-3 bg-slate-900 rounded-xl border border-emerald-500/30">
                      <div className="flex items-center justify-between text-xs text-emerald-400">
                        <span className="font-bold">WhatsApp Campaign: Flash Promo</span>
                        <span className="font-mono">98% OPEN RATE</span>
                      </div>
                      <div className="text-xs text-slate-200 mt-2 bg-slate-950 p-2.5 rounded-lg border border-slate-800 font-sans">
                        "Hey Alex! 👋 Your exclusive $15 bundle access expires in 3 hours. Reply YES to reserve your license!"
                      </div>
                    </div>
                    <div className="text-xs text-slate-400 flex justify-between font-mono">
                      <span>Broadcast Sent: 2,500</span>
                      <span>Replies: 1,120</span>
                    </div>
                  </div>
                )}

                {activeTool.id === 'uptimerobot' && (
                  <div className="space-y-3">
                    <div className="p-3 bg-slate-900 rounded-xl border border-teal-500/30">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-300 font-semibold">Store Checkout Monitor</span>
                        <span className="text-teal-400 font-mono font-bold">100% UP</span>
                      </div>
                      <div className="flex gap-1 mt-2.5">
                        {[...Array(24)].map((_, i) => (
                          <div key={i} className="h-6 flex-1 bg-emerald-400 rounded-xs" title="100% Uptime" />
                        ))}
                      </div>
                    </div>
                    <div className="text-xs text-slate-300">
                      Instant alerts trigger to SMS & Telegram within 30 seconds if any payment gateway fails.
                    </div>
                  </div>
                )}

                {activeTool.id === 'bitly' && (
                  <div className="space-y-3">
                    <div className="p-3 bg-slate-900 rounded-xl border border-amber-500/30">
                      <div className="text-xs text-slate-400">Branded Short Link:</div>
                      <div className="text-sm font-mono text-amber-300 font-bold mt-0.5">scale.link/vip-bundle</div>
                      <div className="mt-2 grid grid-cols-2 gap-2 text-xs font-mono">
                        <div className="bg-slate-950 p-1.5 rounded">Clicks: 14,892</div>
                        <div className="bg-slate-950 p-1.5 rounded">Conv: 12.4%</div>
                      </div>
                    </div>
                    <div className="text-xs text-slate-300">
                      Dynamic trackable QR code generation included for print and packaging.
                    </div>
                  </div>
                )}

                <div className="pt-2 text-center">
                  <span className="text-xs text-slate-400">
                    Pre-configured integration recipe included with the $15 bundle
                  </span>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
