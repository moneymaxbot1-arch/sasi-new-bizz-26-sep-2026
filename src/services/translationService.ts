export interface LanguageOption {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
  region: string;
  isRTL?: boolean;
  isQuick?: boolean;
}

export const LANGUAGES_32: LanguageOption[] = [
  // Top Quick Languages on menu
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸', region: 'Global', isQuick: true },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்', flag: '🇮🇳', region: 'India, Sri Lanka, Singapore', isQuick: true },
  { code: 'zh-CN', name: 'Chinese', nativeName: '简体中文', flag: '🇨🇳', region: 'China, Singapore', isQuick: true },
  { code: 'ms', name: 'Malay', nativeName: 'Bahasa Melayu', flag: '🇲🇾', region: 'Malaysia, Brunei, Singapore', isQuick: true },

  // Other languages
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳', region: 'India' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', flag: '🇸🇦', region: 'Middle East & North Africa', isRTL: true },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸', region: 'Spain & Latin America' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷', region: 'France, Canada, Africa' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪', region: 'Germany, Austria, Switzerland' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語', flag: '🇯🇵', region: 'Japan' },
  { code: 'ko', name: 'Korean', nativeName: '한국어', flag: '🇰🇷', region: 'South Korea' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português', flag: '🇧🇷', region: 'Brazil & Portugal' },
  { code: 'ru', name: 'Russian', nativeName: 'Русский', flag: '🇷🇺', region: 'Russia & Eastern Europe' },
  { code: 'it', name: 'Italian', nativeName: 'Italiano', flag: '🇮🇹', region: 'Italy, Switzerland' },
  { code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia', flag: '🇮🇩', region: 'Indonesia' },
  { code: 'tr', name: 'Turkish', nativeName: 'Türkçe', flag: '🇹🇷', region: 'Turkey' },
  { code: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt', flag: '🇻🇳', region: 'Vietnam' },
  { code: 'th', name: 'Thai', nativeName: 'ไทย', flag: '🇹🇭', region: 'Thailand' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা', flag: '🇧🇩', region: 'Bangladesh, India' },
  { code: 'ur', name: 'Urdu', nativeName: 'اردو', flag: '🇵🇰', region: 'Pakistan, India', isRTL: true },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు', flag: '🇮🇳', region: 'India' },
  { code: 'mr', name: 'Marathi', nativeName: 'मराठी', flag: '🇮🇳', region: 'India' },
  { code: 'nl', name: 'Dutch', nativeName: 'Nederlands', flag: '🇳🇱', region: 'Netherlands, Belgium' },
  { code: 'pl', name: 'Polish', nativeName: 'Polski', flag: '🇵🇱', region: 'Poland' },
  { code: 'sv', name: 'Swedish', nativeName: 'Svenska', flag: '🇸🇪', region: 'Sweden' },
  { code: 'tl', name: 'Filipino', nativeName: 'Tagalog', flag: '🇵🇭', region: 'Philippines' },
  { code: 'uk', name: 'Ukrainian', nativeName: 'Українська', flag: '🇺🇦', region: 'Ukraine' },
  { code: 'el', name: 'Greek', nativeName: 'Ελληνικά', flag: '🇬🇷', region: 'Greece, Cyprus' },
  { code: 'fa', name: 'Persian', nativeName: 'فارسی', flag: '🇮🇷', region: 'Iran', isRTL: true },
  { code: 'he', name: 'Hebrew', nativeName: 'עברית', flag: '🇮🇱', region: 'Israel', isRTL: true },
  { code: 'ro', name: 'Romanian', nativeName: 'Română', flag: '🇷🇴', region: 'Romania, Moldova' },
  { code: 'cs', name: 'Czech', nativeName: 'Čeština', flag: '🇨🇿', region: 'Czech Republic' },
];

export const QUICK_LANGUAGES = LANGUAGES_32.filter(l => l.isQuick);

// Helper to set Google Translate cookie and change language
export const setAppLanguage = (langCode: string) => {
  try {
    const lang = LANGUAGES_32.find(l => l.code === langCode);
    
    // Set text direction
    if (lang?.isRTL) {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }

    localStorage.setItem('bizz2u_lang', langCode);
    localStorage.removeItem('bizz2u_currency');

    // Notify all components about language and currency update
    window.dispatchEvent(new CustomEvent('bizz2u_language_changed', { detail: { langCode } }));
    window.dispatchEvent(new CustomEvent('bizz2u_currency_changed', { detail: { langCode } }));

    // If English, clear translation cookie to return to native state
    if (langCode === 'en') {
      document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=.${window.location.hostname}; path=/;`;
      
      const select = document.querySelector('.goog-te-combo') as HTMLSelectElement | null;
      if (select) {
        select.value = 'en';
        select.dispatchEvent(new Event('change'));
      } else {
        window.location.reload();
      }
      return;
    }

    // Set Google translate cookie for current domain and root
    const cookieValue = `/en/${langCode}`;
    document.cookie = `googtrans=${cookieValue}; path=/`;
    document.cookie = `googtrans=${cookieValue}; domain=.${window.location.hostname}; path=/`;

    // Trigger select element if already loaded
    const select = document.querySelector('.goog-te-combo') as HTMLSelectElement | null;
    if (select) {
      select.value = langCode;
      select.dispatchEvent(new Event('change'));
    } else {
      // Trigger Google Translate script initialization if not already loaded
      loadGoogleTranslateScript(langCode);
    }
  } catch (err) {
    console.error('Translation error:', err);
  }
};

export const getSavedLanguage = (): string => {
  try {
    return localStorage.getItem('bizz2u_lang') || 'en';
  } catch {
    return 'en';
  }
};

let scriptLoaded = false;
export const loadGoogleTranslateScript = (targetLang?: string) => {
  if (scriptLoaded) return;
  scriptLoaded = true;

  // Define global init function
  (window as unknown as { googleTranslateElementInit: () => void }).googleTranslateElementInit = () => {
    try {
      const g = (window as unknown as { google: { translate: { TranslateElement: new (config: unknown, container: string) => void } } }).google;
      if (g && g.translate && g.translate.TranslateElement) {
        new g.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: LANGUAGES_32.map(l => l.code).join(','),
            autoDisplay: false,
          },
          'google_translate_element'
        );

        if (targetLang && targetLang !== 'en') {
          setTimeout(() => {
            const select = document.querySelector('.goog-te-combo') as HTMLSelectElement | null;
            if (select) {
              select.value = targetLang;
              select.dispatchEvent(new Event('change'));
            }
          }, 400);
        }
      }
    } catch (e) {
      console.warn('Translate init error:', e);
    }
  };

  const script = document.createElement('script');
  script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
  script.async = true;
  document.body.appendChild(script);
};
