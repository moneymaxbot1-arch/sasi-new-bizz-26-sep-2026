import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause, 
  Maximize2, 
  Minimize2, 
  Upload, 
  Presentation,
  RotateCcw,
  Plus,
  LayoutGrid,
  Image as ImageIcon,
  Sparkles,
  FileCheck
} from 'lucide-react';

interface DailyWorkflowSlidesProps {
  onClaimClick?: () => void;
}

export interface SlideItem {
  id: string;
  title: string;
  imageUrl: string;
  fileName?: string;
  fileSize?: string;
  isCustom?: boolean;
}

const DEFAULT_SLIDES: SlideItem[] = [
  {
    id: 'slide-master',
    title: 'How Business Owners Automate All Their Daily Business Activities (Master Architecture)',
    imageUrl: '/images/daily_workflow_slide.svg',
    fileName: 'master_workflow_architecture.svg',
    isCustom: false
  },
  {
    id: 'slide-traffic',
    title: 'Pillar 1: Traffic Generation & Attribution (Meta + Google + Google Analytics)',
    imageUrl: '/images/slide_traffic.svg',
    fileName: 'traffic_generation_pillar.svg',
    isCustom: false
  },
  {
    id: 'slide-engagement',
    title: 'Pillar 2: Engagement & Social Proof (Vitals 40+ Apps in 1)',
    imageUrl: '/images/slide_engagement.svg',
    fileName: 'engagement_vitals_pillar.svg',
    isCustom: false
  },
  {
    id: 'slide-retargeting',
    title: 'Pillar 3: Retargeting & Sales Recovery (Mailchimp + WATi WhatsApp)',
    imageUrl: '/images/slide_retargeting.svg',
    fileName: 'retargeting_sales_pillar.svg',
    isCustom: false
  },
  {
    id: 'slide-reliability',
    title: 'Pillar 4: Website Reliability & Uptime Shield (UptimeRobot 24/7 Monitoring)',
    imageUrl: '/images/slide_reliability.svg',
    fileName: 'uptime_reliability_pillar.svg',
    isCustom: false
  }
];

export const DailyWorkflowSlides: React.FC<DailyWorkflowSlidesProps> = () => {
  const [slides, setSlides] = useState<SlideItem[]>(DEFAULT_SLIDES);
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isDraggingOver, setIsDraggingOver] = useState<boolean>(false);
  const [showThumbnails, setShowThumbnails] = useState<boolean>(false);
  const [uploadNotification, setUploadNotification] = useState<string | null>(null);

  const slideContainerRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const appendFileInputRef = useRef<HTMLInputElement>(null);
  const objectUrlsRef = useRef<string[]>([]);

  // Safe slide index clamping
  const activeIndex = Math.min(Math.max(0, currentSlideIndex), Math.max(0, slides.length - 1));
  const currentSlide = slides[activeIndex] || DEFAULT_SLIDES[0];
  const hasCustomUploads = slides.some(s => s.isCustom);

  // Clean up created object URLs on unmount
  useEffect(() => {
    return () => {
      objectUrlsRef.current.forEach((url) => {
        try {
          URL.revokeObjectURL(url);
        } catch {
          // ignore
        }
      });
    };
  }, []);

  // Format file size helper
  const formatBytes = (bytes: number): string => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  };

  // Convert File list into SlideItem list
  const processFiles = useCallback((fileList: FileList | File[], append = false) => {
    const validImageFiles = Array.from(fileList).filter(file => file.type.startsWith('image/'));
    
    if (validImageFiles.length === 0) {
      setUploadNotification('Please upload valid image files (PNG, JPG, SVG, WebP, etc.)');
      setTimeout(() => setUploadNotification(null), 4000);
      return;
    }

    // Natural sort: Gemini_Generated_Image (1), (2), etc.
    validImageFiles.sort((a, b) => {
      return a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: 'base' });
    });

    const newSlideItems: SlideItem[] = validImageFiles.map((file, idx) => {
      const objUrl = URL.createObjectURL(file);
      objectUrlsRef.current.push(objUrl);
      
      // Clean title from filename
      const cleanTitle = file.name
        .replace(/\.[^/.]+$/, '')
        .replace(/Gemini_Generated_Image/gi, 'Slide')
        .replace(/[_-]+/g, ' ')
        .trim();

      return {
        id: `upload-${Date.now()}-${idx}-${Math.random().toString(36).substring(2, 7)}`,
        title: cleanTitle.length > 0 ? cleanTitle : `Slide ${idx + 1}`,
        imageUrl: objUrl,
        fileName: file.name,
        fileSize: formatBytes(file.size),
        isCustom: true
      };
    });

    if (append && hasCustomUploads) {
      setSlides(prev => [...prev, ...newSlideItems]);
      setUploadNotification(`Added ${newSlideItems.length} new slides (Total: ${slides.length + newSlideItems.length} slides)`);
    } else {
      setSlides(newSlideItems);
      setCurrentSlideIndex(0);
      setUploadNotification(`Loaded ${newSlideItems.length} slides in full resolution!`);
    }

    setTimeout(() => {
      setUploadNotification(null);
    }, 4500);
  }, [hasCustomUploads, slides.length]);

  // Bulk Upload File Handlers
  const handleBulkUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      processFiles(e.target.files, false);
      // Reset input value so same files can be re-selected if desired
      e.target.value = '';
    }
  };

  const handleAppendUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      processFiles(e.target.files, true);
      e.target.value = '';
    }
  };

  // Drag and drop handlers
  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDraggingOver(true);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isDraggingOver) setIsDraggingOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // Only turn off if leaving the container boundaries
    if (e.currentTarget === e.target) {
      setIsDraggingOver(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDraggingOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      processFiles(e.dataTransfer.files, false);
    }
  };

  // Reset to original default 5 slides
  const handleResetSlides = () => {
    // Revoke previous URLs
    objectUrlsRef.current.forEach((url) => {
      try {
        URL.revokeObjectURL(url);
      } catch {
        // ignore
      }
    });
    objectUrlsRef.current = [];
    setSlides(DEFAULT_SLIDES);
    setCurrentSlideIndex(0);
    setUploadNotification('Reset to default executive slides');
    setTimeout(() => setUploadNotification(null), 3000);
  };

  // Next / Prev slide navigation
  const handleNext = useCallback(() => {
    if (slides.length <= 1) return;
    setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const handlePrev = useCallback(() => {
    if (slides.length <= 1) return;
    setCurrentSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // Keyboard navigation across all uploaded slides
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Avoid capturing input if user is in an input field
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }

      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'Home') {
        e.preventDefault();
        setCurrentSlideIndex(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        setCurrentSlideIndex(slides.length - 1);
      } else if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen();
      } else if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, isFullscreen, slides.length]);

  // Auto-play slideshow timer
  useEffect(() => {
    if (!isAutoPlaying || slides.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  // Toggle fullscreen mode
  const toggleFullscreen = () => {
    if (!isFullscreen) {
      if (slideContainerRef.current?.requestFullscreen) {
        slideContainerRef.current.requestFullscreen().catch(() => {
          setIsFullscreen(true);
        });
      } else {
        setIsFullscreen(true);
      }
    } else {
      if (document.exitFullscreen && document.fullscreenElement) {
        document.exitFullscreen().catch(() => {});
      }
      setIsFullscreen(false);
    }
  };

  // Listen to external fullscreen exit (e.g. browser Esc)
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const totalSlides = slides.length;
  const currentNumber = activeIndex + 1;
  const progressPercent = totalSlides > 0 ? ((currentNumber / totalSlides) * 100) : 0;

  return (
    <section 
      id="daily-workflow-automation" 
      className="py-12 sm:py-20 bg-[#060A13] border-t border-slate-800/80 relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-gradient-to-r from-emerald-500/8 via-cyan-500/8 to-indigo-500/8 blur-[160px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-6 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-bold tracking-wide mb-3 shadow-[0_0_20px_rgba(52,211,153,0.12)]">
            <Presentation className="w-4 h-4 text-emerald-400" />
            <span>EXECUTIVE PRESENTATION SLIDES</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight text-balance">
            How Business Owners Automate <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              All Their Daily Business Activities
            </span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto">
            Drag and drop 20, 30, 50+ slides or bulk upload unlimited images. Centered in original aspect ratio and 100% full resolution.
          </p>
        </div>

        {/* =========================================================================
            BULK PRESENTATION SLIDE CONTAINER (Drag & Drop + Fullscreen + Object URLs)
           ========================================================================= */}
        <div 
          ref={slideContainerRef}
          onDragEnter={handleDragEnter}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`relative w-full rounded-2xl sm:rounded-3xl bg-[#070B14] border shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden transition-all duration-300 flex flex-col items-center justify-between ${
            isDraggingOver 
              ? 'border-emerald-400 ring-4 ring-emerald-500/30 bg-slate-900/90' 
              : 'border-slate-800/90'
          } ${
            isFullscreen 
              ? 'fixed inset-0 z-50 rounded-none border-none p-3 sm:p-6 bg-black h-screen w-screen' 
              : 'p-2 sm:p-5 lg:p-6 min-h-[640px]'
          }`}
        >
          {/* Drag & Drop Visual Overlay */}
          {isDraggingOver && (
            <div className="absolute inset-0 z-40 bg-emerald-950/85 backdrop-blur-md flex flex-col items-center justify-center border-4 border-dashed border-emerald-400 rounded-2xl sm:rounded-3xl p-6 text-center animate-in fade-in duration-200">
              <div className="w-20 h-20 rounded-2xl bg-emerald-500/20 border border-emerald-400 flex items-center justify-center text-emerald-300 mb-4 shadow-[0_0_30px_rgba(52,211,153,0.4)] animate-bounce">
                <Upload className="w-10 h-10" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
                Drop Your Images Here
              </h3>
              <p className="text-emerald-200 text-sm sm:text-base max-w-md">
                Unlimited bulk upload (20, 30, 50+ images). We will automatically populate every slide in order without modifying or cropping your pictures!
              </p>
            </div>
          )}

          {/* Quick Notification Toast */}
          {uploadNotification && (
            <div className="absolute top-16 left-1/2 -translate-x-1/2 z-30 px-4 py-2 rounded-xl bg-emerald-950/90 border border-emerald-500/50 text-emerald-200 text-xs sm:text-sm font-semibold shadow-2xl flex items-center gap-2 backdrop-blur-md animate-in slide-in-from-top duration-200">
              <FileCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{uploadNotification}</span>
            </div>
          )}

          {/* =========================================================================
              TOP PRESENTATION TOOLBAR
             ========================================================================= */}
          <div className="w-full max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2.5 px-3 py-2 bg-slate-950/80 border border-slate-800/80 rounded-xl backdrop-blur-md z-20">
            
            {/* Left: Dynamic Slide Counter & Title Indicator */}
            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
              <span className="px-2.5 py-1 rounded-md bg-emerald-950/70 border border-emerald-500/40 text-xs font-mono font-bold text-emerald-300 whitespace-nowrap shadow-sm">
                SLIDE {currentNumber} OF {totalSlides}
              </span>
              <span className="text-xs sm:text-sm font-medium text-slate-300 truncate max-w-[180px] sm:max-w-[320px] lg:max-w-[450px]" title={currentSlide.title}>
                {currentSlide.title}
              </span>
              {hasCustomUploads && (
                <span className="hidden md:inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-cyan-950/60 border border-cyan-800/50 text-cyan-300">
                  <Sparkles className="w-3 h-3 text-cyan-400" /> Bulk Deck ({totalSlides})
                </span>
              )}
            </div>

            {/* Right: Actions & Controls */}
            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              
              {/* Play / Pause Auto-play */}
              <button
                type="button"
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className={`p-1.5 rounded-lg border text-xs flex items-center gap-1 cursor-pointer transition-colors ${
                  isAutoPlaying 
                    ? 'bg-emerald-950/60 border-emerald-500/50 text-emerald-300' 
                    : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:text-white'
                }`}
                title={isAutoPlaying ? 'Pause presentation auto-play' : 'Start auto-play (6s interval)'}
              >
                {isAutoPlaying ? <Pause className="w-3.5 h-3.5 text-emerald-400" /> : <Play className="w-3.5 h-3.5" />}
                <span className="hidden lg:inline text-[11px] font-mono">
                  {isAutoPlaying ? 'Pause' : 'Auto-Play'}
                </span>
              </button>

              {/* Previous slide */}
              <button
                type="button"
                onClick={handlePrev}
                className="p-1.5 sm:p-2 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
                aria-label="Previous slide"
                title="Previous slide (Left Arrow)"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* Next slide */}
              <button
                type="button"
                onClick={handleNext}
                className="p-1.5 sm:p-2 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
                aria-label="Next slide"
                title="Next slide (Right Arrow / Space)"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Hidden file input for unlimited bulk selection */}
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleBulkUpload} 
                multiple
                accept="image/*" 
                className="hidden" 
              />
              <input 
                type="file" 
                ref={appendFileInputRef} 
                onChange={handleAppendUpload} 
                multiple
                accept="image/*" 
                className="hidden" 
              />

              {/* Upload Images Button (Multi-file enabled) */}
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="px-2.5 py-1.5 rounded-lg bg-gradient-to-r from-emerald-600/90 to-teal-600/90 hover:from-emerald-500 hover:to-teal-500 border border-emerald-400/50 text-white font-medium transition-all text-xs flex items-center gap-1.5 cursor-pointer shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                title="Select multiple images at once (20, 30, 50+ images supported)"
              >
                <Upload className="w-3.5 h-3.5" />
                <span className="font-semibold">{hasCustomUploads ? 'Replace All' : 'Upload Images'}</span>
              </button>

              {/* Add More Slides Button (when deck is populated) */}
              {hasCustomUploads && (
                <button
                  type="button"
                  onClick={() => appendFileInputRef.current?.click()}
                  className="p-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors text-xs flex items-center gap-1 cursor-pointer"
                  title="Add more images to current slide deck"
                >
                  <Plus className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="hidden xl:inline text-[11px] font-mono">Add More</span>
                </button>
              )}

              {/* Thumbnail Grid Drawer Toggle */}
              <button
                type="button"
                onClick={() => setShowThumbnails(!showThumbnails)}
                className={`p-1.5 rounded-lg border text-xs flex items-center gap-1 cursor-pointer transition-colors ${
                  showThumbnails 
                    ? 'bg-slate-700 border-slate-500 text-white' 
                    : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:text-white'
                }`}
                title="Toggle slide thumbnail overview"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span className="hidden xl:inline text-[11px] font-mono">Overview</span>
              </button>

              {/* Reset to Default Slides (if custom images loaded) */}
              {hasCustomUploads && (
                <button
                  type="button"
                  onClick={handleResetSlides}
                  className="p-1.5 rounded-lg bg-rose-950/40 border border-rose-800/60 text-rose-300 hover:text-white hover:bg-rose-900/60 transition-colors text-xs flex items-center cursor-pointer"
                  title="Reset to default executive slide deck"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              )}

              {/* Fullscreen Toggle */}
              <button
                type="button"
                onClick={toggleFullscreen}
                className="p-1.5 sm:p-2 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
                aria-label={isFullscreen ? 'Exit full-screen' : 'Enter full-screen'}
                title="Toggle Fullscreen presentation mode (F)"
              >
                {isFullscreen ? <Minimize2 className="w-4 h-4 text-emerald-400" /> : <Maximize2 className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* =========================================================================
              DYNAMIC NAVIGATION PROGRESS BAR & SCRUBBER (Unlimited Slides Support)
             ========================================================================= */}
          <div className="w-full max-w-6xl mx-auto px-1 py-1.5 flex flex-col gap-1 z-20">
            {/* Interactive Scrubber Slider Bar */}
            <div className="relative w-full flex items-center group">
              <input
                type="range"
                min={0}
                max={Math.max(0, totalSlides - 1)}
                value={activeIndex}
                onChange={(e) => setCurrentSlideIndex(parseInt(e.target.value, 10))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400 hover:h-2 transition-all"
                title={`Jump to slide ${activeIndex + 1} of ${totalSlides}`}
              />
            </div>

            {/* Slide dots (for <= 18 slides) or sleek progress strip (for large decks 20-50+ slides) */}
            {totalSlides <= 18 ? (
              <div className="flex items-center justify-center gap-1.5 pt-1 overflow-x-auto py-1">
                {slides.map((slide, idx) => (
                  <button
                    key={slide.id}
                    onClick={() => setCurrentSlideIndex(idx)}
                    className={`transition-all rounded-full cursor-pointer shrink-0 ${
                      activeIndex === idx
                        ? 'w-6 sm:w-8 h-2 bg-gradient-to-r from-emerald-400 to-teal-400 shadow-[0_0_10px_rgba(52,211,153,0.6)]'
                        : 'w-2 h-2 bg-slate-700 hover:bg-slate-500'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                    title={`Slide ${idx + 1}: ${slide.title}`}
                  />
                ))}
              </div>
            ) : (
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 px-1 pt-0.5">
                <span className="text-emerald-400 font-bold">{Math.round(progressPercent)}% Completed</span>
                <span className="text-slate-500">Drag scrubber or use [←] [→] arrow keys to jump</span>
                <span>{activeIndex + 1} / {totalSlides} slides</span>
              </div>
            )}
          </div>

          {/* =========================================================================
              QUICK THUMBNAIL OVERVIEW DRAWER (When enabled)
             ========================================================================= */}
          {showThumbnails && (
            <div className="w-full max-w-6xl mx-auto my-2 p-3 bg-slate-950/90 border border-slate-800 rounded-xl max-h-48 overflow-y-auto z-20 backdrop-blur-md animate-in slide-in-from-top-2 duration-150">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-slate-300 font-mono">
                  All Slides ({totalSlides}) — Click any to jump
                </span>
                <button 
                  onClick={() => setShowThumbnails(false)}
                  className="text-xs text-slate-400 hover:text-white"
                >
                  Close
                </button>
              </div>
              <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2">
                {slides.map((s, idx) => (
                  <button
                    key={s.id}
                    onClick={() => {
                      setCurrentSlideIndex(idx);
                      setShowThumbnails(false);
                    }}
                    className={`relative rounded-lg overflow-hidden border p-1 text-left transition-all ${
                      activeIndex === idx
                        ? 'border-emerald-400 ring-2 ring-emerald-500/40 bg-emerald-950/50'
                        : 'border-slate-800 bg-slate-900/60 hover:border-slate-700'
                    }`}
                  >
                    <div className="w-full aspect-video bg-black/50 rounded flex items-center justify-center overflow-hidden">
                      <img 
                        src={s.imageUrl} 
                        alt={s.title}
                        className="w-full h-full object-contain" 
                      />
                    </div>
                    <div className="text-[10px] font-mono font-bold text-center mt-1 truncate text-slate-300">
                      #{idx + 1}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* =========================================================================
              THE PRESENTATION SLIDE IMAGE
              Centered, original aspect ratio intact, zero extra filtering or distortion
             ========================================================================= */}
          <div className="w-full flex-1 flex items-center justify-center p-0 relative my-auto">
            {currentSlide ? (
              <img
                key={currentSlide.id}
                src={currentSlide.imageUrl}
                alt={currentSlide.title}
                referrerPolicy="no-referrer"
                className={`w-full max-w-6xl object-contain mx-auto select-none transition-opacity duration-200 ${
                  isFullscreen 
                    ? 'max-h-[84vh] rounded-xl shadow-2xl' 
                    : 'max-h-[72vh] rounded-xl sm:rounded-2xl shadow-2xl'
                }`}
                style={{
                  aspectRatio: '16/9'
                }}
              />
            ) : (
              <div className="flex flex-col items-center justify-center text-slate-500 py-20">
                <ImageIcon className="w-12 h-12 mb-3 text-slate-600" />
                <p className="text-sm">No slide selected. Upload or drag images above.</p>
              </div>
            )}
          </div>

          {/* =========================================================================
              BOTTOM BAR: Status & Helpful Instructions
             ========================================================================= */}
          <div className="w-full max-w-6xl mx-auto flex flex-wrap items-center justify-between text-[11px] sm:text-xs text-slate-400 font-mono mt-2 px-3 pt-2 border-t border-slate-900/80 z-20">
            <div className="flex items-center gap-2">
              <span className="text-emerald-400 font-bold">100% UNMODIFIED FULL RESOLUTION</span>
              {currentSlide.fileSize && (
                <span className="text-slate-500 hidden sm:inline">· {currentSlide.fileSize}</span>
              )}
            </div>
            
            <div className="flex items-center gap-3">
              <span className="hidden sm:inline text-slate-500">
                Drag & drop 20, 30, 50+ images anywhere · [←] [→] to navigate
              </span>
              <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300">
                Full Res
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
