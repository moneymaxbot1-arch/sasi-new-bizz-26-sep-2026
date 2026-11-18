import React, { useState, useEffect } from 'react';
import { X, Send, Mail, Clock, Sparkles } from 'lucide-react';

const QUICK_TOPICS = [
  {
    label: 'Starter Plan ($15/mo)',
    message: 'Hi Bizz2u team, I have a question about the $15/mo 6-in-1 Starter subscription.',
  },
  {
    label: '6-Software Setup Help',
    message: 'Hi Bizz2u team, I need assistance setting up my 6-in-1 automation tools.',
  },
  {
    label: '2-Min License Replacement',
    message: 'Hi Bizz2u team, I need help with an instant license replacement.',
  },
  {
    label: 'Agency / Bulk Plan',
    message: 'Hi Bizz2u team, I would like to know more about the Agency plan and sub-accounts.',
  },
];

function WhatsAppIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12.031 2c-5.516 0-9.969 4.453-9.969 9.969 0 1.766.469 3.484 1.344 5l-1.406 5.141 5.266-1.375c1.469.797 3.109 1.219 4.766 1.219 5.516 0 9.969-4.453 9.969-9.969S17.547 2 12.031 2zm5.813 14.125c-.25.703-1.438 1.344-2 1.422-.531.078-1.203.109-1.938-.125-.453-.141-1.031-.328-1.766-.641-3.109-1.344-5.141-4.469-5.297-4.672-.156-.203-1.266-1.688-1.266-3.219 0-1.531.797-2.281 1.078-2.594.281-.313.609-.391.813-.391.203 0 .406.016.578.016.188 0 .438-.078.688.516.25.609.859 2.094.938 2.25.078.156.125.344.031.547-.094.203-.156.328-.313.5-.156.172-.328.391-.469.516-.156.156-.313.328-.141.641.172.313.781 1.281 1.672 2.078 1.156 1.031 2.125 1.344 2.438 1.5.313.156.484.125.672-.078.188-.203.781-.906.984-1.219.203-.313.422-.266.703-.156.281.109 1.797.844 2.109 1 .313.156.516.234.594.359.078.125.078.734-.172 1.438z" />
    </svg>
  );
}

export const SupportChatBubble: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState(
    'Hi Bizz2u team, I would like to chat with support about the 6-in-1 automation suite.'
  );
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const rawNumber = (import.meta.env.VITE_WHATSAPP_SUPPORT_NUMBER || '').replace(/\D/g, '');
  const encodedMessage = encodeURIComponent(message.trim() || 'Hi Bizz2u team, I need support.');
  const whatsappUrl = rawNumber
    ? `https://wa.me/${rawNumber}?text=${encodedMessage}`
    : `https://wa.me/?text=${encodedMessage}`;

  return (
    <div
      className={`fixed right-3.5 sm:right-6 z-50 flex flex-col items-end transition-all duration-300 ${
        isScrolled ? 'bottom-[76px] lg:bottom-6' : 'bottom-4 sm:bottom-6'
      }`}
    >
      {/* Expandable WhatsApp Support Panel */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="Bizz2u WhatsApp Support"
          className="mb-3 w-[calc(100vw-28px)] sm:w-[350px] max-w-[360px] bg-[#0B1220] border border-slate-700/80 rounded-2xl shadow-[0_20px_55px_rgba(0,0,0,0.85),0_0_30px_rgba(16,185,129,0.2)] overflow-hidden animate-in fade-in slide-in-from-bottom-3 zoom-in-95 duration-200"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#064e3b] via-[#065f46] to-[#0f172a] px-4 py-3.5 flex items-center justify-between border-b border-emerald-500/30">
            <div className="flex items-center gap-2.5">
              <div className="relative w-9 h-9 rounded-full bg-[#25D366] text-slate-950 flex items-center justify-center shadow-md shrink-0">
                <WhatsAppIcon className="w-5 h-5" />
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#064e3b]" />
              </div>
              <div>
                <h3 className="text-sm font-extrabold text-white leading-tight">
                  Bizz2u Support
                </h3>
                <p className="text-[11px] text-emerald-200/90 flex items-center gap-1 mt-0.5">
                  <Clock className="w-3 h-3 text-emerald-300 shrink-0" />
                  <span>Typically replies in under 2 mins</span>
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close support chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 space-y-3 bg-[#090D16]/90">
            {/* Greeting Message Bubble */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-xl rounded-tl-sm p-3 text-xs text-slate-200 leading-relaxed shadow-sm">
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-400 mb-1">
                <Sparkles className="w-3 h-3" />
                <span>Bizz2u Team</span>
              </div>
              Hi there! Need help choosing a plan, activating your 6-in-1 suite, or replacing a license? Pick a topic or write your message below to chat on WhatsApp.
            </div>

            {/* Quick Topic Chips */}
            <div className="flex flex-wrap gap-1.5">
              {QUICK_TOPICS.map((topic) => {
                const isSelected = message === topic.message;
                return (
                  <button
                    key={topic.label}
                    type="button"
                    onClick={() => setMessage(topic.message)}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-emerald-500/20 border-emerald-400/60 text-emerald-300'
                        : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-emerald-500/40 hover:text-white'
                    }`}
                  >
                    {topic.label}
                  </button>
                );
              })}
            </div>

            {/* Editable Message Input */}
            <div>
              <label htmlFor="bizz2u-support-message" className="sr-only">
                Your WhatsApp support message
              </label>
              <textarea
                id="bizz2u-support-message"
                rows={2}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your question for the Bizz2u team..."
                className="w-full px-3 py-2 bg-slate-900/90 border border-slate-700/80 focus:border-emerald-400 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none resize-none"
              />
            </div>

            {/* Launch WhatsApp CTA */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#1ebe5d] text-slate-950 font-extrabold text-xs sm:text-sm transition-all duration-200 shadow-[0_0_20px_rgba(37,211,102,0.35)] hover:shadow-[0_0_26px_rgba(37,211,102,0.5)] active:scale-98"
            >
              <WhatsAppIcon className="w-4 h-4 shrink-0" />
              <span>Start WhatsApp Chat</span>
              <Send className="w-3.5 h-3.5 shrink-0" />
            </a>

            <div className="pt-1 text-center text-[11px] text-slate-400 flex items-center justify-center gap-1.5">
              <Mail className="w-3 h-3 text-emerald-400 shrink-0" />
              <span>Or email:</span>
              <a
                href="mailto:Bizzusupport@gmail.com"
                className="text-emerald-400 hover:underline font-mono"
              >
                Bizzusupport@gmail.com
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Persistent Floating 'Support' Bubble Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Close Support chat' : 'Open WhatsApp Support chat'}
        className="group flex items-center gap-2 pl-2 pr-3.5 sm:pl-2.5 sm:pr-4 py-2 sm:py-2.5 rounded-full bg-[#0B1220]/95 backdrop-blur-md border border-emerald-500/50 hover:border-[#00E599] text-white shadow-[0_8px_30px_rgba(0,0,0,0.6),0_0_22px_rgba(16,185,129,0.3)] hover:shadow-[0_10px_35px_rgba(0,0,0,0.7),0_0_28px_rgba(0,229,153,0.45)] transition-all duration-200 cursor-pointer active:scale-95"
      >
        <span className="relative flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#25D366] text-slate-950 shadow-inner shrink-0 transition-transform duration-200 group-hover:scale-105">
          {isOpen ? (
            <X className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
          ) : (
            <WhatsAppIcon className="w-4 h-4 sm:w-5 sm:h-5" />
          )}
          {!isOpen && (
            <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400 border border-[#0B1220]" />
            </span>
          )}
        </span>

        <span className="text-xs sm:text-sm font-extrabold tracking-wide text-white group-hover:text-emerald-300 transition-colors whitespace-nowrap">
          Support
        </span>
      </button>
    </div>
  );
};
