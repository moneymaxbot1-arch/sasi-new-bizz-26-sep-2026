import React, { useState } from 'react';
import { SOFTWARE_TOOLS } from '../data/bundleData';
import { 
  Bot, 
  Cpu, 
  CheckCircle2, 
  ShieldCheck, 
  Share2, 
  Sparkles, 
  Zap, 
  Layers, 
  Terminal, 
  ArrowRight,
  ExternalLink,
  ChevronRight,
  Copy,
  Check
} from 'lucide-react';

interface InDepthSoftwareSpecsProps {
  onClaimClick: () => void;
}

export const InDepthSoftwareSpecs: React.FC<InDepthSoftwareSpecsProps> = ({ onClaimClick }) => {
  const [selectedToolId, setSelectedToolId] = useState<string>(SOFTWARE_TOOLS[0].id);
  const [activeTab, setActiveTab] = useState<'features' | 'ai' | 'integrations'>('features');
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const tool = SOFTWARE_TOOLS.find(t => t.id === selectedToolId) || SOFTWARE_TOOLS[0];

  const handleCopySpec = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 1800);
  };

  return (
    <section id="software-specs" className="py-24 bg-[#070A14] border-t border-slate-800/90 relative overflow-hidden">
      {/* Decorative background glows */}
      <div 
        style={{ backgroundColor: tool.badgeColor }}
        className="absolute top-1/4 right-10 w-[500px] h-[400px] rounded-full blur-[160px] opacity-10 pointer-events-none transition-all duration-700 -z-10" 
      />
      <div className="absolute bottom-10 left-10 w-[450px] h-[350px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 text-xs font-bold tracking-wide mb-3 shadow-[0_0_20px_rgba(52,211,153,0.15)]">
            <Cpu className="w-4 h-4 text-emerald-400" />
            <span>EXHAUSTIVE TECHNICAL SPECIFICATION & ARCHITECTURE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 text-balance">
            In-Depth Features & Functionalities <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              Of All 6 Software Powerhouses
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Every software in this bundle is an enterprise-grade powerhouse. Review the complete list of features, AI capabilities, supported SMTP & webhooks, and automation triggers included with your <strong className="text-emerald-400 font-mono">$15/mo</strong> starting subscription.
          </p>
        </div>

        {/* 6 Software Selector Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 p-2 bg-slate-900/90 border border-slate-800 rounded-2xl mb-8">
          {SOFTWARE_TOOLS.map((t, idx) => {
            const isSelected = t.id === selectedToolId;
            return (
              <button
                key={t.id}
                onClick={() => setSelectedToolId(t.id)}
                className={`p-3 rounded-xl flex flex-col items-center justify-center text-center transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-slate-800 border-2 text-white shadow-xl scale-[1.02]'
                    : 'bg-slate-900/50 border border-transparent text-slate-400 hover:text-white hover:bg-slate-850'
                }`}
                style={{
                  borderColor: isSelected ? t.badgeColor : 'transparent',
                  boxShadow: isSelected ? `0 0 20px ${t.badgeColor}25` : undefined
                }}
              >
                <div 
                  style={{ color: t.badgeColor }}
                  className="text-xs font-black font-mono px-2 py-0.5 rounded-md bg-slate-950 mb-1"
                >
                  0{idx + 1}
                </div>
                <span className="text-xs font-bold text-white tracking-tight">{t.name}</span>
                <span className="text-[10px] text-slate-400 font-mono mt-0.5 line-through">
                  ${t.monthlyRetail}/mo
                </span>
              </button>
            );
          })}
        </div>

        {/* Detailed Comprehensive Inspector Card */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-700/80 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
          
          {/* Top Bar with Badges & Retail Price Tag */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span 
                  style={{ backgroundColor: `${tool.badgeColor}20`, color: tool.badgeColor, borderColor: `${tool.badgeColor}40` }}
                  className="px-2.5 py-1 rounded-md text-xs font-bold font-mono border"
                >
                  TOOL {SOFTWARE_TOOLS.findIndex(t => t.id === tool.id) + 1} OF 6
                </span>
                <span className="text-xs font-semibold text-slate-300 bg-slate-800 px-2.5 py-1 rounded-md border border-slate-700">
                  {tool.category}
                </span>
                <span className="text-xs text-rose-400 line-through font-mono px-2 py-1 bg-slate-900 rounded border border-slate-800">
                  Standalone Retail: ${tool.monthlyRetail}/month
                </span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-black text-white">
                {tool.name}
              </h3>
              <p className="text-sm sm:text-base text-emerald-400 font-semibold mt-1">
                {tool.tagline}
              </p>
            </div>

            {/* Price Advantage Badge */}
            <div className="bg-slate-950/80 border border-emerald-500/40 rounded-2xl p-4 shrink-0 flex items-center gap-4">
              <div>
                <div className="text-[11px] text-slate-400 uppercase font-semibold">Included in Starter:</div>
                <div className="text-2xl font-black text-white font-mono">
                  $15<span className="text-xs font-normal text-emerald-400">/month</span>
                </div>
              </div>
              <button
                onClick={onClaimClick}
                className="px-4 py-2.5 bg-gradient-to-r from-emerald-400 to-teal-300 text-slate-950 font-bold text-xs rounded-xl shadow-md cursor-pointer hover:from-emerald-300 hover:to-cyan-200 transition-all flex items-center gap-1.5"
              >
                <span>Get in $15 Suite</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Full Detailed Summary Paragraph */}
          <div className="my-6 p-4 sm:p-5 bg-slate-950/70 border border-slate-800 rounded-2xl">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Executive System Overview:</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {tool.fullSummary || tool.description}
            </p>
          </div>

          {/* Sub-Navigation Tabs for this Software */}
          <div className="flex items-center gap-2 border-b border-slate-800 pb-3 mb-6 overflow-x-auto">
            <button
              onClick={() => setActiveTab('features')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'features'
                  ? 'bg-emerald-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white bg-slate-800/60'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Full Features List ({tool.inDepthFeatures?.length || tool.keyFeatures.length})</span>
            </button>

            {tool.aiIntegrations && tool.aiIntegrations.length > 0 && (
              <button
                onClick={() => setActiveTab('ai')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                  activeTab === 'ai'
                    ? 'bg-emerald-500 text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-white bg-slate-800/60'
                }`}
              >
                <Bot className="w-3.5 h-3.5" />
                <span>AI Integrations & Models ({tool.aiIntegrations.length})</span>
              </button>
            )}

            {tool.protocolsAndIntegrations && tool.protocolsAndIntegrations.length > 0 && (
              <button
                onClick={() => setActiveTab('integrations')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                  activeTab === 'integrations'
                    ? 'bg-emerald-500 text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-white bg-slate-800/60'
                }`}
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Protocols, APIs & Webhooks ({tool.protocolsAndIntegrations.length})</span>
              </button>
            )}
          </div>

          {/* Tab 1: Comprehensive In-Depth Features */}
          {activeTab === 'features' && (
            <div className="space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                All Included Features & Operational Capabilities:
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {(tool.inDepthFeatures || tool.keyFeatures).map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 bg-slate-850/80 border border-slate-750/70 rounded-xl flex items-start gap-3 hover:border-slate-650 transition-colors"
                  >
                    <div 
                      style={{ color: tool.badgeColor, backgroundColor: `${tool.badgeColor}15` }}
                      className="w-6 h-6 rounded-md flex items-center justify-center font-bold text-xs shrink-0 mt-0.5"
                    >
                      ✓
                    </div>
                    <span className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 2: AI Integrations & Compatible LLM Models */}
          {activeTab === 'ai' && tool.aiIntegrations && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-indigo-950/30 border border-indigo-500/30 text-xs text-indigo-200 flex items-center gap-2">
                <Bot className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>
                  Connect your favorite AI providers seamlessly via API keys to automate copy, sentiment scoring, and chatbot logic:
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {tool.aiIntegrations.map((aiName, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-slate-950 border border-slate-800 rounded-xl flex items-center justify-between gap-2"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-xs font-bold text-white">{aiName}</span>
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono">SUPPORTED</span>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-xs text-slate-300">
                <strong className="text-white">Multi-LLM Synergy:</strong> Bring your own API keys from ChatGPT, Anthropic Claude 4.5, Google Gemini, Grok, Meta Llama, DeepSeek, or Qwen3 to supercharge performance, auto-generate high-converting copy, and trigger automated webhook workflows.
              </div>
            </div>
          )}

          {/* Tab 3: Protocols, Supported APIs & Third-Party Platforms */}
          {activeTab === 'integrations' && tool.protocolsAndIntegrations && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-xs text-emerald-200 flex items-center gap-2">
                <Share2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  Native protocol support, webhook receivers, and third-party platform connectors:
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {tool.protocolsAndIntegrations.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-slate-950 border border-slate-800 rounded-xl flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="text-xs font-semibold text-slate-200">{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-xs text-slate-300">
                <strong className="text-white">Full Ecosystem Interoperability:</strong> Connect your store (Shopify, WooCommerce, Amazon), form builders (WP Elementor, Google Forms, Typeform), and custom SMTP relays (Amazon SES, Mailgun) directly into this 6-tool suite.
              </div>
            </div>
          )}

          {/* Bottom Business Outcome & Action Footer */}
          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2.5 text-xs text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>
                Verified Business Outcome: <strong className="text-emerald-400">{tool.businessImpact}</strong>
              </span>
            </div>

            <button
              onClick={onClaimClick}
              className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 hover:from-emerald-300 hover:to-cyan-200 text-slate-950 font-black rounded-xl text-xs shadow-lg transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
            >
              <Zap className="w-3.5 h-3.5 fill-slate-950" />
              <span>Unlock {tool.name} in $15/Mo Bundle</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
