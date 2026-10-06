// Real-time market currency configurations and localized price conversion
export interface CurrencyConfig {
  code: string;       // e.g. 'MYR', 'USD', 'INR', 'SGD', 'AUD', 'AED', 'EUR', 'GBP'
  symbol: string;     // e.g. 'RM ', '$', '₹', 'S$', 'A$', 'AED '
  symbolPrefix?: string;
  rate: number;       // Exact multiplier per 1 USD based on current market exchange rate
  name: string;       // e.g. 'Malaysian Ringgit', 'US Dollar'
  flag: string;       // National flag emoji
  exchangeNote: string; // Live benchmark note e.g. '$15 = RM61'
}

// Supported global currencies aligned with user audiences and global exchange markets
export const SUPPORTED_CURRENCIES: CurrencyConfig[] = [
  {
    code: 'USD',
    symbol: '$',
    rate: 1,
    name: 'US Dollar',
    flag: '🇺🇸',
    exchangeNote: '$15 USD = $15.00',
  },
  {
    code: 'MYR',
    symbol: 'RM ',
    // Actual market exchange rate benchmark: $15 USD = RM 61 MYR (61 / 15 ≈ 4.0666667 MYR per 1 USD)
    rate: 61 / 15,
    name: 'Malaysian Ringgit',
    flag: '🇲🇾',
    exchangeNote: '$15 USD = RM 61 (1 USD ≈ RM 4.07)',
  },
  {
    code: 'INR',
    symbol: '₹',
    // Actual market exchange rate: 1 USD ≈ 87.0 INR ($15 = ₹1,305)
    rate: 87.0,
    name: 'Indian Rupee',
    flag: '🇮🇳',
    exchangeNote: '$15 USD = ₹1,305 (1 USD ≈ ₹87.0)',
  },
  {
    code: 'SGD',
    symbol: 'S$',
    // Actual market exchange rate: 1 USD ≈ 1.34 SGD ($15 = S$20)
    rate: 1.34,
    name: 'Singapore Dollar',
    flag: '🇸🇬',
    exchangeNote: '$15 USD = S$20.10 (1 USD ≈ S$1.34)',
  },
  {
    code: 'AUD',
    symbol: 'A$',
    // Actual market exchange rate: 1 USD ≈ 1.54 AUD ($15 = A$23)
    rate: 1.54,
    name: 'Australian Dollar',
    flag: '🇦🇺',
    exchangeNote: '$15 USD = A$23.10 (1 USD ≈ A$1.54)',
  },
  {
    code: 'AED',
    symbol: 'AED ',
    // Official pegged market exchange rate: 1 USD = 3.6725 AED ($15 = AED 55)
    rate: 3.6725,
    name: 'UAE Dirham (Dubai)',
    flag: '🇦🇪',
    exchangeNote: '$15 USD = AED 55 (1 USD = AED 3.67)',
  },
  {
    code: 'TWD',
    symbol: 'NT$',
    // Actual market exchange rate: 1 USD ≈ 32.4 TWD ($15 = NT$486)
    rate: 32.4,
    name: 'New Taiwan Dollar',
    flag: '🇹🇼',
    exchangeNote: '$15 USD = NT$486 (1 USD ≈ NT$32.4)',
  },
  {
    code: 'HKD',
    symbol: 'HK$',
    // Pegged market exchange rate: 1 USD ≈ 7.78 HKD ($15 = HK$117)
    rate: 7.78,
    name: 'Hong Kong Dollar',
    flag: '🇭🇰',
    exchangeNote: '$15 USD = HK$117 (1 USD ≈ HK$7.78)',
  },
  {
    code: 'KRW',
    symbol: '₩',
    // Actual market exchange rate: 1 USD ≈ 1,420 KRW ($15 = ₩21,300)
    rate: 1420,
    name: 'South Korean Won',
    flag: '🇰🇷',
    exchangeNote: '$15 USD = ₩21,300 (1 USD ≈ ₩1,420)',
  },
  {
    code: 'EUR',
    symbol: '€',
    // Actual market exchange rate: 1 USD ≈ 0.94 EUR ($15 = €14)
    rate: 0.94,
    name: 'Euro',
    flag: '🇪🇺',
    exchangeNote: '$15 USD = €14.10 (1 USD ≈ €0.94)',
  },
  {
    code: 'GBP',
    symbol: '£',
    // Actual market exchange rate: 1 USD ≈ 0.79 GBP ($15 = £12)
    rate: 0.79,
    name: 'British Pound',
    flag: '🇬🇧',
    exchangeNote: '$15 USD = £11.85 (1 USD ≈ £0.79)',
  },
  {
    code: 'CAD',
    symbol: 'C$',
    // Actual market exchange rate: 1 USD ≈ 1.40 CAD ($15 = C$21)
    rate: 1.40,
    name: 'Canadian Dollar',
    flag: '🇨🇦',
    exchangeNote: '$15 USD = C$21.00 (1 USD ≈ C$1.40)',
  },
  {
    code: 'JPY',
    symbol: '¥',
    // Actual market exchange rate: 1 USD ≈ 152 JPY ($15 = ¥2,280)
    rate: 152,
    name: 'Japanese Yen',
    flag: '🇯🇵',
    exchangeNote: '$15 USD = ¥2,280 (1 USD ≈ ¥152)',
  },
  {
    code: 'CNY',
    symbol: '¥',
    // Actual market exchange rate: 1 USD ≈ 7.24 CNY ($15 = ¥109)
    rate: 7.24,
    name: 'Chinese Yuan',
    flag: '🇨🇳',
    exchangeNote: '$15 USD = ¥109 (1 USD ≈ ¥7.24)',
  },
  {
    code: 'THB',
    symbol: '฿',
    // Actual market exchange rate: 1 USD ≈ 34.5 THB ($15 = ฿518)
    rate: 34.5,
    name: 'Thai Baht',
    flag: '🇹🇭',
    exchangeNote: '$15 USD = ฿518 (1 USD ≈ ฿34.5)',
  },
  {
    code: 'IDR',
    symbol: 'Rp ',
    // Actual market exchange rate: 1 USD ≈ 16,300 IDR ($15 = Rp 244,500)
    rate: 16300,
    name: 'Indonesian Rupiah',
    flag: '🇮🇩',
    exchangeNote: '$15 USD = Rp 244,500 (1 USD ≈ Rp 16,300)',
  },
  {
    code: 'PHP',
    symbol: '₱',
    // Actual market exchange rate: 1 USD ≈ 58.5 PHP ($15 = ₱878)
    rate: 58.5,
    name: 'Philippine Peso',
    flag: '🇵🇭',
    exchangeNote: '$15 USD = ₱878 (1 USD ≈ ₱58.5)',
  },
  {
    code: 'VND',
    symbol: '₫',
    // Actual market exchange rate: 1 USD ≈ 25,400 VND ($15 = ₫381,000)
    rate: 25400,
    name: 'Vietnamese Dong',
    flag: '🇻🇳',
    exchangeNote: '$15 USD = ₫381,000 (1 USD ≈ ₫25,400)',
  },
];

// Helper to look up currency by code
export const getCurrencyByCode = (currencyCode: string): CurrencyConfig => {
  const code = (currencyCode || '').toUpperCase().trim();
  const match = SUPPORTED_CURRENCIES.find(c => c.code === code);
  return match || SUPPORTED_CURRENCIES[0]; // default USD
};

// Map languages to their natural primary currency
export const getCurrencyForLanguage = (langCode: string): CurrencyConfig => {
  const code = (langCode || 'en').toLowerCase().trim();

  // Malay ('ms') -> Malaysian Ringgit (MYR), $15 = RM 61
  if (code === 'ms') {
    return getCurrencyByCode('MYR');
  }

  // Hindi ('hi'), Tamil ('ta'), Telugu ('te'), Marathi ('mr'), Bengali ('bn'), Urdu ('ur') -> Indian Rupee (INR)
  if (['hi', 'ta', 'te', 'mr', 'bn', 'ur'].includes(code)) {
    return getCurrencyByCode('INR');
  }

  // Arabic ('ar') -> UAE Dirham (Dubai AED)
  if (code === 'ar') {
    return getCurrencyByCode('AED');
  }

  // Korean ('ko') -> South Korean Won (KRW)
  if (code === 'ko') {
    return getCurrencyByCode('KRW');
  }

  // Japanese ('ja') -> Japanese Yen (JPY)
  if (code === 'ja') {
    return getCurrencyByCode('JPY');
  }

  // Chinese ('zh-CN') -> CNY
  if (code === 'zh-cn' || code === 'zh') {
    return getCurrencyByCode('CNY');
  }

  // Thai ('th') -> Thai Baht (THB)
  if (code === 'th') {
    return getCurrencyByCode('THB');
  }

  // Indonesian ('id') -> Indonesian Rupiah (IDR)
  if (code === 'id') {
    return getCurrencyByCode('IDR');
  }

  // Filipino ('tl') -> Philippine Peso (PHP)
  if (code === 'tl') {
    return getCurrencyByCode('PHP');
  }

  // Vietnamese ('vi') -> Vietnamese Dong (VND)
  if (code === 'vi') {
    return getCurrencyByCode('VND');
  }

  // Eurozone languages ('de', 'fr', 'es', 'it', 'nl', 'pt', 'el') -> EUR
  if (['de', 'fr', 'es', 'it', 'nl', 'pt', 'el'].includes(code)) {
    return getCurrencyByCode('EUR');
  }

  // Default USD
  return getCurrencyByCode('USD');
};

// Retrieve national country currency automatically matching user's language preference
export const getActiveCurrency = (): CurrencyConfig => {
  try {
    // Strictly derive currency from customer's language preference
    const savedLang = localStorage.getItem('bizz2u_lang') || 'en';
    return getCurrencyForLanguage(savedLang);
  } catch {
    return getCurrencyByCode('USD');
  }
};

// Set and broadcast user's selected currency
export const setAppCurrency = (currencyCode: string): void => {
  try {
    const currency = getCurrencyByCode(currencyCode);
    window.dispatchEvent(new CustomEvent('bizz2u_currency_changed', { detail: { currency } }));
  } catch (err) {
    console.error('Error broadcasting currency:', err);
  }
};

// Format USD prices cleanly and authentically into the target localized currency
export const formatLocalizedPrice = (usdAmount: number, currency: CurrencyConfig): string => {
  if (!currency || currency.code === 'USD') {
    return `$${usdAmount.toLocaleString()}`;
  }

  // Malaysian Ringgit: exact actual conversion $15 = RM 61 (rate 61/15 ≈ 4.0667)
  if (currency.code === 'MYR') {
    if (usdAmount === 9) return 'RM 37';
    if (usdAmount === 15) return 'RM 61';
    if (usdAmount === 20) return 'RM 81';
    if (usdAmount === 35) return 'RM 142';
    if (usdAmount === 45) return 'RM 183';
    if (usdAmount === 50) return 'RM 203';
    if (usdAmount === 80) return 'RM 325';
    if (usdAmount === 150) return 'RM 610';
    if (usdAmount === 162) return 'RM 659';
    if (usdAmount === 250) return 'RM 1,017';
    if (usdAmount === 314) return 'RM 1,277';
    if (usdAmount === 635) return 'RM 2,582';
    if (usdAmount === 650) return 'RM 2,643';
    if (usdAmount === 7800) return 'RM 31,720';
    const converted = Math.round(usdAmount * currency.rate);
    return `RM ${converted.toLocaleString()}`;
  }

  // Indian Rupee: $15 = ₹1,305
  if (currency.code === 'INR') {
    if (usdAmount === 15) return '₹1,305';
    if (usdAmount === 20) return '₹1,740';
    if (usdAmount === 35) return '₹3,045';
    if (usdAmount === 45) return '₹3,915';
    if (usdAmount === 150) return '₹13,050';
    if (usdAmount === 250) return '₹21,750';
    const converted = Math.round(usdAmount * currency.rate);
    return `₹${converted.toLocaleString('en-IN')}`;
  }

  // Singapore Dollar: $15 = S$20
  if (currency.code === 'SGD') {
    if (usdAmount === 15) return 'S$20';
    if (usdAmount === 20) return 'S$27';
    if (usdAmount === 35) return 'S$47';
    if (usdAmount === 45) return 'S$60';
    if (usdAmount === 150) return 'S$201';
    if (usdAmount === 250) return 'S$335';
    const converted = Math.round(usdAmount * currency.rate);
    return `S$${converted.toLocaleString()}`;
  }

  // Australian Dollar: $15 = A$23
  if (currency.code === 'AUD') {
    if (usdAmount === 15) return 'A$23';
    if (usdAmount === 20) return 'A$31';
    if (usdAmount === 35) return 'A$54';
    if (usdAmount === 45) return 'A$69';
    if (usdAmount === 150) return 'A$231';
    if (usdAmount === 250) return 'A$385';
    const converted = Math.round(usdAmount * currency.rate);
    return `A$${converted.toLocaleString()}`;
  }

  // UAE Dirham: $15 = AED 55
  if (currency.code === 'AED') {
    if (usdAmount === 15) return 'AED 55';
    if (usdAmount === 20) return 'AED 73';
    if (usdAmount === 35) return 'AED 129';
    if (usdAmount === 45) return 'AED 165';
    if (usdAmount === 150) return 'AED 551';
    if (usdAmount === 250) return 'AED 918';
    const converted = Math.round(usdAmount * currency.rate);
    return `AED ${converted.toLocaleString()}`;
  }

  // New Taiwan Dollar: $15 = NT$486
  if (currency.code === 'TWD') {
    if (usdAmount === 15) return 'NT$486';
    if (usdAmount === 20) return 'NT$648';
    if (usdAmount === 35) return 'NT$1,134';
    if (usdAmount === 45) return 'NT$1,458';
    if (usdAmount === 150) return 'NT$4,860';
    if (usdAmount === 250) return 'NT$8,100';
    const converted = Math.round(usdAmount * currency.rate);
    return `NT$${converted.toLocaleString()}`;
  }

  // Hong Kong Dollar: $15 = HK$117
  if (currency.code === 'HKD') {
    if (usdAmount === 15) return 'HK$117';
    if (usdAmount === 20) return 'HK$156';
    if (usdAmount === 35) return 'HK$272';
    if (usdAmount === 45) return 'HK$350';
    if (usdAmount === 150) return 'HK$1,167';
    if (usdAmount === 250) return 'HK$1,945';
    const converted = Math.round(usdAmount * currency.rate);
    return `HK$${converted.toLocaleString()}`;
  }

  // South Korean Won: $15 = ₩21,300
  if (currency.code === 'KRW') {
    if (usdAmount === 15) return '₩21,300';
    if (usdAmount === 20) return '₩28,400';
    if (usdAmount === 35) return '₩49,700';
    if (usdAmount === 45) return '₩63,900';
    if (usdAmount === 150) return '₩213,000';
    if (usdAmount === 250) return '₩355,000';
    const converted = Math.round(usdAmount * currency.rate);
    return `₩${converted.toLocaleString()}`;
  }

  // Euro: $15 = €14
  if (currency.code === 'EUR') {
    if (usdAmount === 15) return '€14';
    if (usdAmount === 20) return '€19';
    if (usdAmount === 35) return '€33';
    if (usdAmount === 45) return '€42';
    if (usdAmount === 150) return '€141';
    if (usdAmount === 250) return '€235';
    const converted = Math.round(usdAmount * currency.rate);
    return `€${converted.toLocaleString()}`;
  }

  // British Pound: $15 = £12
  if (currency.code === 'GBP') {
    if (usdAmount === 15) return '£12';
    if (usdAmount === 20) return '£16';
    if (usdAmount === 35) return '£28';
    if (usdAmount === 45) return '£36';
    if (usdAmount === 150) return '£119';
    if (usdAmount === 250) return '£198';
    const converted = Math.round(usdAmount * currency.rate);
    return `£${converted.toLocaleString()}`;
  }

  // Canadian Dollar: $15 = C$21
  if (currency.code === 'CAD') {
    if (usdAmount === 15) return 'C$21';
    if (usdAmount === 20) return 'C$28';
    if (usdAmount === 35) return 'C$49';
    if (usdAmount === 45) return 'C$63';
    if (usdAmount === 150) return 'C$210';
    if (usdAmount === 250) return 'C$350';
    const converted = Math.round(usdAmount * currency.rate);
    return `C$${converted.toLocaleString()}`;
  }

  // Japanese Yen: $15 = ¥2,280
  if (currency.code === 'JPY') {
    if (usdAmount === 15) return '¥2,280';
    if (usdAmount === 20) return '¥3,040';
    if (usdAmount === 35) return '¥5,320';
    if (usdAmount === 45) return '¥6,840';
    if (usdAmount === 150) return '¥22,800';
    if (usdAmount === 250) return '¥38,000';
    const converted = Math.round(usdAmount * currency.rate);
    return `¥${converted.toLocaleString()}`;
  }

  // Chinese Yuan: $15 = ¥109
  if (currency.code === 'CNY') {
    if (usdAmount === 15) return '¥109';
    if (usdAmount === 20) return '¥145';
    if (usdAmount === 35) return '¥253';
    if (usdAmount === 45) return '¥326';
    if (usdAmount === 150) return '¥1,086';
    if (usdAmount === 250) return '¥1,810';
    const converted = Math.round(usdAmount * currency.rate);
    return `¥${converted.toLocaleString()}`;
  }

  // Default calculation using rate
  const converted = Math.round(usdAmount * currency.rate);
  return `${currency.symbol}${converted.toLocaleString()}`;
};

// Helper to convert plan tier string like 'Starter Pack ($15/mo)' into localized currency
export const formatTierName = (planTier: string, currency: CurrencyConfig): string => {
  if (!planTier) return 'Starter Pack ($15/mo)';
  if (currency.code === 'USD') return planTier;

  let result = planTier;
  result = result.replace('$15/mo', `${formatLocalizedPrice(15, currency)}/mo`);
  result = result.replace('$35/mo', `${formatLocalizedPrice(35, currency)}/mo`);
  result = result.replace('$150/mo', `${formatLocalizedPrice(150, currency)}/mo`);
  result = result.replace('$15', formatLocalizedPrice(15, currency));
  result = result.replace('$35', formatLocalizedPrice(35, currency));
  result = result.replace('$150', formatLocalizedPrice(150, currency));
  return result;
};
