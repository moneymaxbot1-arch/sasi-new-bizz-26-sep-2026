import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  Play, 
  Pause, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Minimize2, 
  Grid, 
  X, 
  Sliders, 
  Sun, 
  Moon, 
  Layers, 
  Clock, 
  ExternalLink,
  Copy,
  Check,
  Cpu,
  RefreshCw,
  Eye,
  EyeOff,
  ChevronDown,
  ChevronUp,
  BookOpen,
  Globe,
  Printer,
  Sparkles,
  Share2,
  ZoomIn,
  ZoomOut
} from 'lucide-react';
import { INDUSTRY_SLIDESHOW_ITEMS, SLIDESHOW_CATEGORIES, matchSlideCategory } from '../data/slideshowData';
import { SlideItem } from '../types';
import { 
  LANGUAGES_32, 
  QUICK_LANGUAGES, 
  setAppLanguage, 
  getSavedLanguage,
  LanguageOption 
} from '../services/translationService';

interface IndustrySlideshowProps {
  onClaimClick?: () => void;
  className?: string;
  initialSlideIndex?: number;
}

export const IndustrySlideshow: React.FC<IndustrySlideshowProps> = ({ 
  onClaimClick,
  className = '',
  initialSlideIndex = 0
}) => {
  // State
  const [currentIndex, setCurrentIndex] = useState<number>(initialSlideIndex);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [speedMs, setSpeedMs] = useState<number>(4000); // 4 seconds requirement
  const [transitionMode, setTransitionMode] = useState<'slide' | 'fade' | 'zoom'>('slide');
  const [slideDirection, setSlideDirection] = useState<'next' | 'prev'>('next');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isGridModalOpen, setIsGridModalOpen] = useState<boolean>(false);
  const [isCaptionVisible, setIsCaptionVisible] = useState<boolean>(true); // Option to close/hide text overlay
  const [isSectionCollapsed, setIsSectionCollapsed] = useState<boolean>(false); // Option to close/collapse section
  const [selectedCategory, setSelectedCategory] = useState<string>('All Blueprint');
  const [progress, setProgress] = useState<number>(0);
  const [failedImages, setFailedImages] = useState<Record<number, boolean>>({});

  // Full Description & Pitcher Dedicated Window State
  const [isReaderWindowOpen, setIsReaderWindowOpen] = useState<boolean>(false);
  const [readerSlideIndex, setReaderSlideIndex] = useState<number>(initialSlideIndex);
  const [currentAppLang, setCurrentAppLang] = useState<string>(() => getSavedLanguage());
  const [isReaderLangModalOpen, setIsReaderLangModalOpen] = useState<boolean>(false);
  const [readerLangSearch, setReaderLangSearch] = useState<string>('');
  const [isPitcherZoomed, setIsPitcherZoomed] = useState<boolean>(false);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  // Touch swipe support
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // References
  const containerRef = useRef<HTMLDivElement>(null);
  const thumbnailRailRef = useRef<HTMLDivElement>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Filtered items
  const filteredSlides = (selectedCategory === 'All Blueprint' || selectedCategory === 'All 36 Blueprints')
    ? INDUSTRY_SLIDESHOW_ITEMS
    : INDUSTRY_SLIDESHOW_ITEMS.filter(s => matchSlideCategory(s, selectedCategory));

  const totalSlides = filteredSlides.length;
  // Guard current index within filtered bounds
  const activeIndex = Math.min(currentIndex, Math.max(0, totalSlides - 1));
  const currentSlide: SlideItem = filteredSlides[activeIndex] || INDUSTRY_SLIDESHOW_ITEMS[0];

  // Navigation handlers
  const goToNext = useCallback(() => {
    setSlideDirection('next');
    setCurrentIndex(prev => (prev + 1) % totalSlides);
    setProgress(0);
  }, [totalSlides]);

  const goToPrev = useCallback(() => {
    setSlideDirection('prev');
    setCurrentIndex(prev => (prev - 1 + totalSlides) % totalSlides);
    setProgress(0);
  }, [totalSlides]);

  const goToIndex = (index: number) => {
    setSlideDirection(index > activeIndex ? 'next' : 'prev');
    setCurrentIndex(index);
    setProgress(0);
  };

  // Synchronize language changes across the app
  useEffect(() => {
    const handleLangChange = (e: Event) => {
      const custom = e as CustomEvent<{ langCode: string }>;
      if (custom.detail?.langCode) {
        setCurrentAppLang(custom.detail.langCode);
      }
    };
    window.addEventListener('bizz2u_language_changed', handleLangChange);
    return () => window.removeEventListener('bizz2u_language_changed', handleLangChange);
  }, []);

  // Open Full Description & Pitcher Dedicated Window
  const openReaderWindow = (index: number = activeIndex) => {
    setReaderSlideIndex(index);
    setIsReaderWindowOpen(true);
    setIsPlaying(false); // Pause slideshow autoplay while user is reading
  };

  // Dedicated window navigation
  const goToReaderPrev = () => {
    setReaderSlideIndex(prev => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToReaderNext = () => {
    setReaderSlideIndex(prev => (prev + 1) % totalSlides);
  };

  // Language selection for reader window
  const handleSelectReaderLang = (langCode: string) => {
    setCurrentAppLang(langCode);
    setAppLanguage(langCode);
    setIsReaderLangModalOpen(false);
  };

  // Optional: Open in native browser tab/window popup
  const handleOpenInBrowserWindow = (slide: SlideItem) => {
    try {
      const activeLangObj = LANGUAGES_32.find(l => l.code === currentAppLang) || LANGUAGES_32[0];
      const newWin = window.open('', '_blank');
      if (newWin) {
        newWin.document.write(`<!DOCTYPE html>
<html lang="${currentAppLang}">
<head>
  <meta charset="utf-8">
  <title>${slide.title} — Blueprint #${slide.id}</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    body { font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
  </style>
</head>
<body class="bg-slate-950 text-slate-100 min-h-screen p-4 sm:p-8 flex flex-col items-center">
  <div class="max-w-4xl w-full bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
    <div class="p-5 sm:p-6 border-b border-slate-800 flex items-center justify-between bg-slate-950/80">
      <div>
        <div class="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">Industry Blueprint #${slide.id} · ${slide.category}</div>
        <h1 class="text-xl sm:text-2xl font-black text-white mt-1">${slide.title}</h1>
      </div>
      <div class="flex items-center gap-2">
        <span class="text-xs font-mono text-slate-400 px-2.5 py-1 rounded bg-slate-800 border border-slate-700">${activeLangObj.flag} ${activeLangObj.nativeName}</span>
        <button onclick="window.print()" class="px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-bold transition-all cursor-pointer">Print / PDF</button>
      </div>
    </div>
    <div class="p-5 sm:p-6 space-y-6">
      <div class="rounded-xl overflow-hidden border border-slate-800 bg-black shadow-inner">
        <img src="${slide.imageUrl}" alt="${slide.title}" class="w-full h-auto object-contain max-h-[600px] mx-auto" />
      </div>
      <div class="space-y-4">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono text-xs font-semibold">
          <span>${slide.tagline || ''}</span>
          ${slide.stat ? `<span>·</span><span class="text-white font-bold">${slide.stat}</span><span>${slide.statLabel || ''}</span>` : ''}
        </div>
        <div class="p-5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-base leading-relaxed">
          <h2 class="text-xs uppercase font-mono text-emerald-400 font-bold mb-2 tracking-wider">Full Operational Automation Sequence:</h2>
          <p class="text-slate-100 text-base sm:text-lg leading-relaxed">${slide.description}</p>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`);
        newWin.document.close();
      }
    } catch (err) {
      console.warn('Browser pop-up prevented:', err);
    }
  };

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;

      if (isReaderWindowOpen) {
        if (e.key === 'ArrowRight') {
          e.preventDefault();
          goToReaderNext();
        } else if (e.key === 'ArrowLeft') {
          e.preventDefault();
          goToReaderPrev();
        } else if (e.key === 'Escape') {
          setIsReaderWindowOpen(false);
          setIsReaderLangModalOpen(false);
        }
        return;
      }

      if (e.key === 'ArrowRight') {
        e.preventDefault();
        goToNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goToPrev();
      } else if (e.key === ' ' || e.code === 'Space') {
        e.preventDefault();
        setIsPlaying(prev => !prev);
      } else if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        setIsFullscreen(prev => !prev);
      } else if (e.key === 'Escape') {
        if (isGridModalOpen) setIsGridModalOpen(false);
        if (isFullscreen) setIsFullscreen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrev, isFullscreen, isGridModalOpen, isReaderWindowOpen, totalSlides]);

  // Autoplay Timer (4000ms default)
  useEffect(() => {
    if (!isPlaying) {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
      return;
    }

    const stepMs = 50;
    const increment = (stepMs / speedMs) * 100;

    progressIntervalRef.current = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          goToNext();
          return 0;
        }
        return prev + increment;
      });
    }, stepMs);

    return () => {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, [isPlaying, speedMs, goToNext]);

  // Auto-scroll active thumbnail inside rail container ONLY (never scrolls the window/page)
  useEffect(() => {
    const rail = thumbnailRailRef.current;
    if (rail) {
      const activeThumb = rail.children[activeIndex] as HTMLElement;
      if (activeThumb) {
        const thumbLeft = activeThumb.offsetLeft;
        const thumbWidth = activeThumb.offsetWidth;
        const railWidth = rail.clientWidth;
        const targetScrollLeft = thumbLeft - (railWidth / 2) + (thumbWidth / 2);
        rail.scrollTo({
          left: Math.max(0, targetScrollLeft),
          behavior: 'smooth'
        });
      }
    }
  }, [activeIndex]);

  // Touch Swipe Handlers for Mobile & Tablet
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Image load error fallback
  const handleImageError = (slideId: number) => {
    setFailedImages(prev => ({ ...prev, [slideId]: true }));
  };

  if (isSectionCollapsed) {
    return (
      <div className={`w-full py-3.5 px-4 sm:px-6 transition-colors border-y ${
        isDarkMode ? 'bg-[#0B101D] border-slate-800' : 'bg-slate-100 border-slate-200'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <div className="text-xs sm:text-sm">
              <span className="font-bold text-slate-100">The 6-Tool Automation Engine</span>
              <span className="text-slate-400 text-xs hidden sm:inline ml-2">• 36 Blueprints minimized</span>
            </div>
          </div>
          <button
            onClick={() => setIsSectionCollapsed(false)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500 text-black hover:bg-emerald-400 font-bold text-xs transition-colors shadow-sm cursor-pointer"
          >
            <ChevronDown className="w-3.5 h-3.5" />
            <span>Re-open Slideshow (36 Slides)</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <section 
      id="slideshow" 
      className={`relative w-full py-10 transition-colors duration-300 ${
        isDarkMode ? 'bg-[#090D16] text-slate-100' : 'bg-slate-50 text-slate-900'
      } ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-500 mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Interactive Operational Blueprints
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              The 6-Tool Automation Engine Built to Run Your Entire Business
            </h2>
            <p className={`mt-2 text-sm sm:text-base max-w-2xl ${
              isDarkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>
              Explore all 36 high-resolution automation workflows. One complete ecosystem designed to automate any industry 100% autopilot.
            </p>
          </div>

          {/* Quick Action Bar: Dark/Light and Close Section Buttons Side-by-Side */}
          <div className="flex flex-row items-center gap-2.5 flex-nowrap shrink-0">
            {/* Dark / Light Toggle */}
            <button
              onClick={() => setIsDarkMode(prev => !prev)}
              title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className={`px-3 py-2 sm:p-2.5 rounded-lg border text-xs font-medium inline-flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer transition-colors ${
                isDarkMode 
                  ? 'border-slate-800 bg-slate-900/80 hover:bg-slate-800 text-slate-300' 
                  : 'border-slate-300 bg-white hover:bg-slate-100 text-slate-700 shadow-sm'
              }`}
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400 shrink-0" /> : <Moon className="w-4 h-4 text-slate-700 shrink-0" />}
              <span>{isDarkMode ? 'Light' : 'Dark'}</span>
            </button>

            {/* Close / Minimize Section Button if Viewers Don't Want */}
            <button
              onClick={() => setIsSectionCollapsed(true)}
              className={`px-3 py-2 sm:p-2.5 rounded-lg border text-xs font-medium inline-flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer transition-colors ${
                isDarkMode 
                  ? 'border-slate-800 bg-slate-900/80 hover:bg-rose-950/40 hover:border-rose-500/40 text-slate-400 hover:text-rose-300' 
                  : 'border-slate-300 bg-white hover:bg-rose-50 hover:border-rose-300 text-slate-600 hover:text-rose-700 shadow-sm'
              }`}
              title="Close / Hide this slideshow section"
            >
              <X className="w-4 h-4 shrink-0" />
              <span>Close Section</span>
            </button>
          </div>
        </div>

        {/* Category Filter Chips / Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 no-scrollbar">
          {SLIDESHOW_CATEGORIES.slice(0, 6).map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setCurrentIndex(0);
                setProgress(0);
              }}
              className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-emerald-500 text-black font-semibold shadow-md shadow-emerald-500/20'
                  : isDarkMode
                    ? 'bg-slate-900/60 text-slate-400 hover:bg-slate-800 hover:text-slate-200 border border-slate-800'
                    : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200 shadow-xs'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* MAIN SLIDESHOW VIEWPORT */}
        <div 
          ref={containerRef}
          className={`relative rounded-2xl overflow-hidden border transition-all duration-300 shadow-2xl ${
            isFullscreen 
              ? 'fixed inset-0 z-50 rounded-none border-none bg-black flex flex-col justify-between' 
              : isDarkMode 
                ? 'bg-slate-950/80 border-slate-800' 
                : 'bg-white border-slate-200'
          }`}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Top Floating Control Pill in Viewer */}
          <div className="absolute top-4 left-4 right-4 z-30 flex items-center justify-between pointer-events-none">
            {/* Minimal Slide Index Badge */}
            <div 
              className="pointer-events-auto flex items-center gap-1.5 px-2.5 py-1 rounded-full backdrop-blur-md bg-black/60 hover:bg-black/80 border border-white/10 text-white text-[11px] font-mono shadow-md transition-all"
              title={`Blueprint #${currentSlide.id} of ${totalSlides}: ${currentSlide.category}`}
            >
              <span className="text-emerald-400 font-bold">
                {String(currentSlide.id).padStart(2, '0')}
              </span>
              <span className="text-white/40">/</span>
              <span className="text-white/70">
                {String(totalSlides).padStart(2, '0')}
              </span>
            </div>

            {/* Top Right Controls: Autoplay Timer Indicator + Speed + Eye Toggle + Fullscreen */}
            <div className="pointer-events-auto flex items-center gap-2">
              {/* Show/Hide Text Overlay Toggle */}
              <button
                onClick={() => setIsCaptionVisible(prev => !prev)}
                className={`p-2 rounded-full backdrop-blur-md border border-white/10 transition-colors ${
                  isCaptionVisible 
                    ? 'bg-black/60 text-white hover:text-emerald-400' 
                    : 'bg-emerald-500 text-black hover:bg-emerald-400'
                }`}
                title={isCaptionVisible ? 'Close / Hide text description (Clean view)' : 'Show text description'}
                aria-label={isCaptionVisible ? 'Hide text description' : 'Show text description'}
              >
                {isCaptionVisible ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>

              {/* Autoplay Speed Dropdown */}
              <div className="flex items-center backdrop-blur-md bg-black/60 border border-white/10 rounded-full px-2 py-1 text-xs text-white">
                <Clock className="w-3.5 h-3.5 text-emerald-400 mr-1.5" />
                <select
                  value={speedMs}
                  onChange={(e) => {
                    setSpeedMs(Number(e.target.value));
                    setProgress(0);
                  }}
                  className="bg-transparent text-white text-xs font-mono focus:outline-none cursor-pointer"
                >
                  <option value={2000} className="bg-slate-900 text-white">2.0s</option>
                  <option value={4000} className="bg-slate-900 text-white">4.0s (Def)</option>
                  <option value={6000} className="bg-slate-900 text-white">6.0s</option>
                  <option value={8000} className="bg-slate-900 text-white">8.0s</option>
                </select>
              </div>

              {/* Fullscreen Toggle */}
              <button
                onClick={() => setIsFullscreen(prev => !prev)}
                className="p-2 rounded-full backdrop-blur-md bg-black/60 border border-white/10 text-white hover:bg-black/80 hover:text-emerald-400 transition-colors"
                title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
              >
                {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Carousel Slide Stage */}
          <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] lg:aspect-[16/8] min-h-[360px] sm:min-h-[460px] lg:min-h-[540px] flex items-center justify-center overflow-hidden bg-black select-none">
            {/* Active Image or Fallback */}
            <div 
              key={`${currentSlide.id}-${transitionMode}`}
              className={`w-full h-full relative transition-all duration-700 ease-out flex items-center justify-center ${
                transitionMode === 'fade' 
                  ? 'animate-in fade-in duration-500' 
                  : transitionMode === 'zoom'
                    ? 'animate-in zoom-in-95 duration-700'
                    : slideDirection === 'next'
                      ? 'animate-in slide-in-from-right-8 duration-500'
                      : 'animate-in slide-in-from-left-8 duration-500'
              }`}
            >
              {!failedImages[currentSlide.id] ? (
                <img
                  src={currentSlide.imageUrl}
                  alt={currentSlide.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover sm:object-contain object-center"
                  onError={() => handleImageError(currentSlide.id)}
                  loading="eager"
                />
              ) : (
                /* Styled Resilient SVG Fallback per Zero-Broken-Image Policy */
                <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-slate-900 via-[#0B132B] to-[#1C2541] text-center">
                  <div className="w-20 h-20 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-4 text-emerald-400 shadow-inner">
                    <Cpu className="w-10 h-10 animate-pulse" />
                  </div>
                  <span className="text-xs uppercase font-mono text-emerald-400 tracking-widest mb-1">
                    {currentSlide.tagline || `Node ${String(currentSlide.id).padStart(2, '0')}`}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white max-w-lg mb-2">
                    {currentSlide.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md line-clamp-2">
                    {currentSlide.description}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-xs text-slate-300">
                    <RefreshCw className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Slot #{currentSlide.id} • Ready for direct image swap</span>
                  </div>
                </div>
              )}

              {/* Gradient Bottom Scrim for Title Legibility - only show if caption is visible */}
              {isCaptionVisible && (
                <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none transition-opacity duration-300" />
              )}

              {/* Slide Caption Card inside the Viewport - with Close Button */}
              {/* Slide Caption Card inside the Viewport - with Close Button & Read Full Window Trigger */}
              {isCaptionVisible ? (
                <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-auto z-20 max-w-xl text-left pointer-events-auto bg-black/80 sm:bg-black/70 backdrop-blur-md p-3.5 sm:p-4 rounded-xl border border-white/15 shadow-2xl animate-in fade-in slide-in-from-bottom-2 duration-200">
                  <div className="flex items-center justify-between gap-3 mb-1.5">
                    <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400">
                      <span>{currentSlide.tagline || `Slot #${currentSlide.id}`}</span>
                      {currentSlide.stat && (
                        <>
                          <span>·</span>
                          <span className="text-white font-bold">{currentSlide.stat}</span>
                          <span className="text-slate-300 text-[11px]">{currentSlide.statLabel}</span>
                        </>
                      )}
                    </div>
                    {/* CLOSE BUTTON FOR VIEWERS WHO DON'T WANT CAPTION BLOCKING DIAGRAM */}
                    <button
                      onClick={() => setIsCaptionVisible(false)}
                      className="p-1 rounded-md bg-white/10 hover:bg-white/25 text-slate-300 hover:text-white transition-colors flex items-center gap-1 text-[11px] font-medium cursor-pointer"
                      title="Close text description (View clean slide)"
                      aria-label="Close text description"
                    >
                      <span className="hidden sm:inline">Close</span>
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <h3 className="text-base sm:text-xl font-bold text-white tracking-tight drop-shadow-md pr-2">
                    {currentSlide.title}
                  </h3>
                  
                  {/* Clickable Small Description Box to open full description in new window */}
                  <p 
                    onClick={() => openReaderWindow(activeIndex)}
                    className="mt-1 text-xs sm:text-sm text-slate-200 line-clamp-2 drop-shadow-sm max-w-lg cursor-pointer hover:text-white transition-colors"
                    title="Click to open full description & pitcher in new window"
                  >
                    {currentSlide.description}
                  </p>

                  {/* Read Full Description in New Window Action Button */}
                  <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between gap-2">
                    <button
                      onClick={() => openReaderWindow(activeIndex)}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/35 border border-emerald-500/40 text-emerald-300 hover:text-white text-xs font-semibold transition-all cursor-pointer group active:scale-95"
                      title="Open full description & pitcher diagram in new window"
                    >
                      <BookOpen className="w-3.5 h-3.5 text-emerald-400 group-hover:scale-110 transition-transform" />
                      <span>Read full description in new window</span>
                      <ExternalLink className="w-3 h-3 ml-0.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                    <span className="text-[10px] text-slate-400 font-mono hidden sm:inline">
                      Selected Language: <span className="uppercase text-emerald-400 font-bold">{currentAppLang}</span>
                    </span>
                  </div>
                </div>
              ) : (
                /* Re-open button if user wants to see caption again */
                <button
                  onClick={() => setIsCaptionVisible(true)}
                  className="absolute bottom-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full backdrop-blur-md bg-black/75 hover:bg-black text-white text-xs border border-white/15 hover:border-emerald-500/50 shadow-lg transition-all active:scale-95 group pointer-events-auto cursor-pointer"
                  title="Show Title & Details"
                >
                  <Eye className="w-3.5 h-3.5 text-emerald-400 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">Show Description</span>
                </button>
              )}
            </div>

            {/* Left Manual Navigation Arrow */}
            <button
              onClick={goToPrev}
              aria-label="Previous slide"
              className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-30 p-3 sm:p-4 rounded-full backdrop-blur-md bg-black/40 hover:bg-black/80 text-white hover:text-emerald-400 border border-white/10 hover:border-emerald-500/50 shadow-xl transition-all duration-200 active:scale-95"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Right Manual Navigation Arrow */}
            <button
              onClick={goToNext}
              aria-label="Next slide"
              className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-30 p-3 sm:p-4 rounded-full backdrop-blur-md bg-black/40 hover:bg-black/80 text-white hover:text-emerald-400 border border-white/10 hover:border-emerald-500/50 shadow-xl transition-all duration-200 active:scale-95"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Autoplay Real-Time Progress Bar */}
          <div className="w-full h-1 bg-slate-800/80 relative overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Play/Pause & Indicator Control Bar */}
          <div className={`px-4 py-3 sm:px-6 flex flex-wrap items-center justify-between gap-4 border-t ${
            isDarkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-100/70 border-slate-200'
          }`}>
            {/* Play/Pause Button */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPlaying(prev => !prev)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  isPlaying 
                    ? 'bg-emerald-500 text-black hover:bg-emerald-400' 
                    : 'bg-slate-800 text-white hover:bg-slate-700'
                }`}
                title={isPlaying ? 'Pause Autoplay' : 'Resume Autoplay (Every 4s)'}
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-3.5 h-3.5 fill-current" />
                    <span>Pause</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Play (4s)</span>
                  </>
                )}
              </button>

              <span className={`text-xs font-mono ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                Slide <span className="font-bold text-emerald-500">{activeIndex + 1}</span> of {totalSlides}
              </span>
            </div>

            {/* Micro Clickable Dot Indicators for all 36 slides */}
            <div className="flex items-center gap-1.5 max-w-[50%] overflow-x-auto py-1 no-scrollbar">
              {filteredSlides.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={() => goToIndex(idx)}
                  title={`Slide ${idx + 1}: ${slide.title}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === activeIndex
                      ? 'w-7 bg-emerald-500'
                      : isDarkMode
                        ? 'w-2 bg-slate-700 hover:bg-slate-500'
                        : 'w-2 bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>

            {/* Bottom Actions: Text Visibility Toggle + Copy Link */}
            <div className="flex items-center gap-2">
              {/* Toggle Text Overlay Button */}
              <button
                onClick={() => setIsCaptionVisible(prev => !prev)}
                className={`text-xs flex items-center gap-1.5 px-2.5 py-1 rounded-md border transition-colors ${
                  !isCaptionVisible
                    ? 'border-emerald-500 text-emerald-400 bg-emerald-500/10 font-semibold'
                    : isDarkMode
                      ? 'border-slate-800 text-slate-400 hover:text-slate-200'
                      : 'border-slate-300 text-slate-600 hover:text-slate-900'
                }`}
                title={isCaptionVisible ? "Hide text description to view clean image" : "Show text description"}
              >
                {isCaptionVisible ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                <span>{isCaptionVisible ? 'Hide Text' : 'Show Text'}</span>
              </button>
            </div>
          </div>

          {/* HORIZONTAL INTERACTIVE THUMBNAIL RAIL (All 36 Slides) */}
          <div className={`px-4 py-3 border-t overflow-hidden ${
            isDarkMode ? 'bg-slate-900/40 border-slate-800/80' : 'bg-slate-50 border-slate-200'
          }`}>
            <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-2 flex items-center justify-between">
              <span>Thumbnail Strip (Click to Jump)</span>
              <span className="text-slate-500 font-mono">Use arrow keys or touch swipe</span>
            </div>
            
            <div 
              ref={thumbnailRailRef}
              className="flex items-center gap-2 overflow-x-auto pb-2 scroll-smooth no-scrollbar"
            >
              {filteredSlides.map((slide, idx) => {
                const isActive = idx === activeIndex;
                const isBroken = failedImages[slide.id];

                return (
                  <button
                    key={slide.id}
                    onClick={() => goToIndex(idx)}
                    className={`shrink-0 relative group rounded-lg overflow-hidden border-2 transition-all duration-200 text-left ${
                      isActive 
                        ? 'border-emerald-500 scale-105 shadow-md shadow-emerald-500/20' 
                        : isDarkMode
                          ? 'border-slate-800 hover:border-slate-600 opacity-60 hover:opacity-100'
                          : 'border-slate-200 hover:border-slate-400 opacity-70 hover:opacity-100'
                    }`}
                    style={{ width: '92px', height: '62px' }}
                  >
                    {!isBroken ? (
                      <img
                        src={slide.imageUrl}
                        alt={`Thumbnail ${slide.id}`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                        loading="lazy"
                        onError={() => handleImageError(slide.id)}
                      />
                    ) : (
                      <div className="w-full h-full bg-slate-800 flex items-center justify-center text-emerald-400 p-1 text-center">
                        <Cpu className="w-4 h-4" />
                      </div>
                    )}

                    {/* Thumbnail Number Overlay */}
                    <div className="absolute top-1 left-1 px-1.5 py-0.5 rounded bg-black/70 text-white font-mono text-[9px] font-bold">
                      {String(slide.id).padStart(2, '0')}
                    </div>

                    {/* Active Glow Ring */}
                    {isActive && (
                      <div className="absolute inset-0 bg-emerald-500/10 pointer-events-none" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>



        {/* FULL DESCRIPTION & PITCHER DEDICATED READER WINDOW MODAL */}
        {isReaderWindowOpen && (() => {
          const activeReaderSlide = filteredSlides[readerSlideIndex] || currentSlide;
          const activeLangObj = LANGUAGES_32.find(l => l.code === currentAppLang) || LANGUAGES_32[0];

          const handleCopyDescription = () => {
            navigator.clipboard.writeText(`${activeReaderSlide.title}\n${activeReaderSlide.tagline}\n\n${activeReaderSlide.description}`);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
          };

          return (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
              <div className={`w-full max-w-6xl max-h-[94vh] flex flex-col rounded-2xl border shadow-2xl overflow-hidden ${
                isDarkMode ? 'bg-[#0B101D] border-slate-700/80 text-slate-100' : 'bg-white border-slate-300 text-slate-900'
              }`}>
                {/* Window Top Titlebar */}
                <div className="px-4 sm:px-6 py-3.5 border-b border-slate-800 bg-slate-950/90 flex flex-wrap items-center justify-between gap-3 shrink-0">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-emerald-400 uppercase tracking-wider">
                          Operational Blueprint #{activeReaderSlide.id}
                        </span>
                        <span className="text-slate-500">·</span>
                        <span className="text-xs text-slate-400 font-medium hidden sm:inline">
                          {activeReaderSlide.category}
                        </span>
                      </div>
                      <h3 className="text-sm sm:text-base font-extrabold text-white tracking-tight line-clamp-1">
                        {activeReaderSlide.title}
                      </h3>
                    </div>
                  </div>

                  {/* Window Controls: Language, External Window, Print, Nav, Close */}
                  <div className="flex items-center gap-2 relative">
                    {/* Language Selector Dropdown Trigger */}
                    <div className="relative">
                      <button
                        onClick={() => setIsReaderLangModalOpen(prev => !prev)}
                        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700/80 hover:border-emerald-500/50 text-xs font-semibold text-slate-200 hover:text-white transition-all cursor-pointer shadow-xs"
                        title="Change reading language"
                      >
                        <Globe className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{activeLangObj.flag}</span>
                        <span className="hidden md:inline">{activeLangObj.nativeName}</span>
                        <span className="md:hidden uppercase font-mono text-[10px]">{activeLangObj.code.split('-')[0]}</span>
                        <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform ${isReaderLangModalOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {/* Language Selection Popover */}
                      {isReaderLangModalOpen && (
                        <div className="absolute right-0 top-full mt-2 w-72 sm:w-80 max-h-80 overflow-y-auto bg-slate-900 border border-slate-700 rounded-xl shadow-2xl p-3 z-50 animate-in fade-in zoom-in-95 duration-150">
                          <div className="flex items-center justify-between pb-2 border-b border-slate-800 mb-2">
                            <div className="text-xs font-bold text-white flex items-center gap-1.5">
                              <Globe className="w-3.5 h-3.5 text-emerald-400" />
                              <span>Select Reading Language</span>
                            </div>
                            <button
                              onClick={() => setIsReaderLangModalOpen(false)}
                              className="p-1 rounded text-slate-400 hover:text-white cursor-pointer"
                            >
                              <X className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          {/* Quick top languages */}
                          <div className="grid grid-cols-2 gap-1.5 mb-2 pb-2 border-b border-slate-800">
                            <button
                              onClick={() => handleSelectReaderLang('en')}
                              className={`py-1 px-2 rounded-lg text-xs font-medium cursor-pointer transition-colors text-left flex items-center gap-1.5 ${
                                currentAppLang === 'en' 
                                  ? 'bg-emerald-500 text-black font-bold' 
                                  : 'bg-slate-800 text-slate-200 hover:bg-slate-700'
                              }`}
                            >
                              <span>🇺🇸</span>
                              <span className="truncate">English (Default)</span>
                            </button>
                            <button
                              onClick={() => handleSelectReaderLang('ms')}
                              className={`py-1 px-2 rounded-lg text-xs font-medium cursor-pointer transition-colors text-left flex items-center gap-1.5 ${
                                currentAppLang === 'ms' 
                                  ? 'bg-emerald-500 text-black font-bold' 
                                  : 'bg-slate-800 text-slate-200 hover:bg-slate-700'
                              }`}
                            >
                              <span>🇲🇾</span>
                              <span className="truncate">Melayu</span>
                            </button>
                            <button
                              onClick={() => handleSelectReaderLang('zh-CN')}
                              className={`py-1 px-2 rounded-lg text-xs font-medium cursor-pointer transition-colors text-left flex items-center gap-1.5 ${
                                currentAppLang === 'zh-CN' 
                                  ? 'bg-emerald-500 text-black font-bold' 
                                  : 'bg-slate-800 text-slate-200 hover:bg-slate-700'
                              }`}
                            >
                              <span>🇨🇳</span>
                              <span className="truncate">简体中文</span>
                            </button>
                            <button
                              onClick={() => handleSelectReaderLang('ta')}
                              className={`py-1 px-2 rounded-lg text-xs font-medium cursor-pointer transition-colors text-left flex items-center gap-1.5 ${
                                currentAppLang === 'ta' 
                                  ? 'bg-emerald-500 text-black font-bold' 
                                  : 'bg-slate-800 text-slate-200 hover:bg-slate-700'
                              }`}
                            >
                              <span>🇮🇳</span>
                              <span className="truncate">தமிழ்</span>
                            </button>
                          </div>

                          <div className="space-y-1 max-h-48 overflow-y-auto pr-1">
                            {LANGUAGES_32.map((lang) => {
                              const isSelected = currentAppLang === lang.code;
                              return (
                                <button
                                  key={lang.code}
                                  onClick={() => handleSelectReaderLang(lang.code)}
                                  className={`w-full flex items-center justify-between p-1.5 rounded-lg text-left text-xs transition-colors cursor-pointer ${
                                    isSelected
                                      ? 'bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/40'
                                      : 'hover:bg-slate-800 text-slate-300 hover:text-white'
                                  }`}
                                >
                                  <div className="flex items-center gap-2">
                                    <span>{lang.flag}</span>
                                    <span>{lang.name}</span>
                                    <span className="text-[11px] text-slate-400">({lang.nativeName})</span>
                                  </div>
                                  {isSelected && <Check className="w-3.5 h-3.5 text-emerald-400" />}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Open in Separate Browser Window Button */}
                    <button
                      onClick={() => handleOpenInBrowserWindow(activeReaderSlide)}
                      className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 hover:border-emerald-500/50 text-xs font-semibold text-slate-300 hover:text-white transition-all cursor-pointer"
                      title="Open in standalone browser window / tab"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                      <span className="hidden lg:inline">Open in New Tab</span>
                    </button>

                    {/* Print / Save PDF Button */}
                    <button
                      onClick={() => window.print()}
                      className="p-1.5 rounded-lg bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white transition-all cursor-pointer"
                      title="Print or Save PDF"
                    >
                      <Printer className="w-4 h-4" />
                    </button>

                    {/* Blueprint Previous / Next in-window Navigation */}
                    <div className="flex items-center gap-1 bg-slate-900 border border-slate-700 rounded-lg p-0.5">
                      <button
                        onClick={goToReaderPrev}
                        className="p-1 rounded text-slate-300 hover:text-white hover:bg-slate-800 cursor-pointer"
                        title="Previous Blueprint (Left Arrow)"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <span className="text-[11px] font-mono text-emerald-400 px-1 font-bold">
                        {activeReaderSlide.id}/36
                      </span>
                      <button
                        onClick={goToReaderNext}
                        className="p-1 rounded text-slate-300 hover:text-white hover:bg-slate-800 cursor-pointer"
                        title="Next Blueprint (Right Arrow)"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Close Window Button */}
                    <button
                      onClick={() => {
                        setIsReaderWindowOpen(false);
                        setIsReaderLangModalOpen(false);
                      }}
                      className="p-1.5 rounded-lg bg-slate-800 hover:bg-red-500/20 hover:text-red-400 text-slate-300 transition-colors cursor-pointer"
                      title="Close Window (Esc)"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Window Body: Pitcher Diagram (Left) & Full Description (Right) */}
                <div className="p-4 sm:p-6 overflow-y-auto flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6">
                  
                  {/* LEFT COLUMN: PITCHER DIAGRAM */}
                  <div className="lg:col-span-6 flex flex-col">
                    <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-black flex items-center justify-center shadow-2xl group min-h-[300px] sm:min-h-[420px]">
                      <img
                        src={activeReaderSlide.imageUrl}
                        alt={activeReaderSlide.title}
                        referrerPolicy="no-referrer"
                        className={`w-full h-auto object-contain transition-all duration-300 ${
                          isPitcherZoomed ? 'scale-125 cursor-zoom-out' : 'cursor-zoom-in'
                        }`}
                        onClick={() => setIsPitcherZoomed(prev => !prev)}
                      />
                      {/* Top Pitcher Badge */}
                      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-white/20 text-white font-mono text-xs font-bold shadow-lg">
                        #{activeReaderSlide.id} • {activeReaderSlide.category}
                      </div>
                      
                      {/* Zoom Action Button */}
                      <button
                        onClick={() => setIsPitcherZoomed(prev => !prev)}
                        className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-black/80 hover:bg-black backdrop-blur-md border border-white/20 hover:border-emerald-500/60 text-white text-xs font-semibold flex items-center gap-1.5 transition-all shadow-lg cursor-pointer"
                        title={isPitcherZoomed ? "Reset Zoom" : "Zoom Pitcher Diagram"}
                      >
                        {isPitcherZoomed ? <ZoomOut className="w-3.5 h-3.5 text-emerald-400" /> : <ZoomIn className="w-3.5 h-3.5 text-emerald-400" />}
                        <span>{isPitcherZoomed ? "Reset Zoom" : "Zoom In"}</span>
                      </button>
                    </div>

                    <div className="mt-3 flex items-center justify-between text-xs text-slate-400 px-1">
                      <span>Click pitcher image to zoom in/out</span>
                      <span className="font-mono text-emerald-400 font-semibold">Slot #{activeReaderSlide.id} / 36</span>
                    </div>
                  </div>

                  {/* RIGHT COLUMN: FULL DESCRIPTION & WORKFLOW SPEC */}
                  <div className="lg:col-span-6 flex flex-col justify-between">
                    <div className="space-y-4">
                      {/* Category, Tagline & Metrics */}
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className="px-2.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold uppercase">
                            {activeReaderSlide.category}
                          </span>
                          {activeReaderSlide.stat && (
                            <span className="px-2.5 py-0.5 rounded bg-emerald-950/60 border border-emerald-600/40 text-emerald-300 text-xs font-mono font-bold flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                              <span>{activeReaderSlide.stat} {activeReaderSlide.statLabel}</span>
                            </span>
                          )}
                        </div>
                        <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold">
                          {activeReaderSlide.tagline}
                        </div>
                        <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight mt-1">
                          {activeReaderSlide.title}
                        </h2>
                      </div>


                      {/* FULL DETAILED DESCRIPTION BOX */}
                      <div className="p-5 rounded-2xl bg-slate-950/90 border border-slate-800/90 text-slate-100 shadow-inner">
                        <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-800">
                          <h4 className="text-xs uppercase font-mono text-emerald-400 font-bold tracking-wider flex items-center gap-2">
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>Full Operational Automation Blueprint & Architecture:</span>
                          </h4>
                          <button
                            onClick={handleCopyDescription}
                            className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] text-slate-400 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors cursor-pointer"
                            title="Copy full description to clipboard"
                          >
                            {isCopied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                            <span>{isCopied ? 'Copied!' : 'Copy'}</span>
                          </button>
                        </div>
                        <p className="text-sm sm:text-base leading-relaxed text-slate-200 font-normal">
                          {activeReaderSlide.description}
                        </p>
                      </div>

                      {/* 6-TOOL SEQUENCE BREAKDOWN CARDS */}
                      <div className="space-y-2">
                        <div className="text-xs font-mono text-slate-400 font-semibold uppercase tracking-wider">
                          Integrated 6-Software Operational Sequence:
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                          <div className="p-2.5 rounded-xl bg-slate-900/70 border border-slate-800">
                            <div className="text-emerald-400 font-mono font-bold text-[11px]">1. Smart Link</div>
                            <div className="text-slate-300 text-[11px] mt-0.5">Campaign UTM source tagging & conversion analytics.</div>
                          </div>
                          <div className="p-2.5 rounded-xl bg-slate-900/70 border border-slate-800">
                            <div className="text-emerald-400 font-mono font-bold text-[11px]">2. WhatsApp Flow</div>
                            <div className="text-slate-300 text-[11px] mt-0.5">24/7 instant chat booking, qualification & catalog dispatch.</div>
                          </div>
                          <div className="p-2.5 rounded-xl bg-slate-900/70 border border-slate-800">
                            <div className="text-emerald-400 font-mono font-bold text-[11px]">3. Click Fomo</div>
                            <div className="text-slate-300 text-[11px] mt-0.5">Live order and inquiry activity nudges to accelerate conversions.</div>
                          </div>
                          <div className="p-2.5 rounded-xl bg-slate-900/70 border border-slate-800">
                            <div className="text-emerald-400 font-mono font-bold text-[11px]">4. Site Shield</div>
                            <div className="text-slate-300 text-[11px] mt-0.5">60-second ping monitor protecting payment & lead capture links.</div>
                          </div>
                          <div className="p-2.5 rounded-xl bg-slate-900/70 border border-slate-800">
                            <div className="text-emerald-400 font-mono font-bold text-[11px]">5. E-mail Rocket</div>
                            <div className="text-slate-300 text-[11px] mt-0.5">Automated personalized invoice, reminder & re-engagement emails.</div>
                          </div>
                          <div className="p-2.5 rounded-xl bg-slate-900/70 border border-slate-800">
                            <div className="text-emerald-400 font-mono font-bold text-[11px]">6. Cloud Hosting</div>
                            <div className="text-slate-300 text-[11px] mt-0.5">Ultra-fast hosting and CDN ensuring sub-second response times.</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Action Row in Window */}
                    <div className="mt-6 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={goToReaderPrev}
                          className="px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-200 hover:text-white transition-all flex items-center gap-1.5 cursor-pointer"
                        >
                          <ChevronLeft className="w-3.5 h-3.5" />
                          <span>Previous Blueprint</span>
                        </button>
                        <button
                          onClick={goToReaderNext}
                          className="px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-200 hover:text-white transition-all flex items-center gap-1.5 cursor-pointer"
                        >
                          <span>Next Blueprint</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="flex items-center gap-3">
                        {onClaimClick && (
                          <button
                            onClick={() => {
                              setIsReaderWindowOpen(false);
                              onClaimClick();
                            }}
                            className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-xs transition-all shadow-lg shadow-emerald-500/25 active:scale-95 cursor-pointer flex items-center gap-2"
                          >
                            <Sparkles className="w-3.5 h-3.5 fill-current" />
                            <span>Claim Suite Automation ($15/mo)</span>
                          </button>
                        )}
                      </div>
                    </div>

                  </div>

                </div>

                {/* Window Footer Status */}
                <div className="px-6 py-2.5 border-t border-slate-800/80 bg-slate-950 flex flex-wrap items-center justify-between text-[11px] text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Operational Blueprint Specification Window • Viewing in {activeLangObj.name} ({activeLangObj.nativeName})</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-500">
                    <span>Keyboard: Arrow keys to switch slides</span>
                    <span>•</span>
                    <span>Esc to exit</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })()}

        {/* ALL 36 SLIDES GRID GALLERY MODAL */}
        {isGridModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
            <div className={`w-full max-w-5xl max-h-[90vh] flex flex-col rounded-2xl border shadow-2xl overflow-hidden ${
              isDarkMode ? 'bg-slate-950 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
            }`}>
              {/* Modal Top Header */}
              <div className="px-6 py-4 border-b flex items-center justify-between border-slate-800">
                <div>
                  <h3 className="text-lg font-bold">All 36 Automation Blueprint Slides</h3>
                  <p className="text-xs text-slate-400">Click any slide to jump immediately to it in the slideshow</p>
                </div>
                <button
                  onClick={() => setIsGridModalOpen(false)}
                  className="p-2 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Grid Body */}
              <div className="p-6 overflow-y-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {INDUSTRY_SLIDESHOW_ITEMS.map((slide, idx) => {
                  const isActive = idx === activeIndex;
                  const isBroken = failedImages[slide.id];

                  return (
                    <button
                      key={slide.id}
                      onClick={() => {
                        goToIndex(idx);
                        setIsGridModalOpen(false);
                      }}
                      className={`group relative rounded-xl overflow-hidden border text-left flex flex-col transition-all duration-200 ${
                        isActive
                          ? 'border-emerald-500 ring-2 ring-emerald-500/40 bg-emerald-500/10'
                          : 'border-slate-800 hover:border-slate-600 bg-slate-900/60 hover:bg-slate-800'
                      }`}
                    >
                      <div className="aspect-[16/10] w-full bg-slate-900 relative overflow-hidden">
                        {!isBroken ? (
                          <img
                            src={slide.imageUrl}
                            alt={slide.title}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                            onError={() => handleImageError(slide.id)}
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-slate-800 text-emerald-400">
                            <Cpu className="w-6 h-6" />
                          </div>
                        )}
                        <span className="absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded bg-black/75 text-white font-mono text-[10px] font-bold">
                          #{slide.id}
                        </span>
                      </div>
                      <div className="p-2">
                        <div className="text-[10px] font-mono text-emerald-400 truncate">
                          {slide.category}
                        </div>
                        <div className="text-xs font-semibold text-slate-200 line-clamp-1 mt-0.5">
                          {slide.title}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Modal Footer */}
              <div className="px-6 py-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 bg-slate-900/40">
                <span>36 Total Industry Automation Assets</span>
                <button
                  onClick={() => setIsGridModalOpen(false)}
                  className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
