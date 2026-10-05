// Currency and localized pricing conversion helper based on selected language
export interface CurrencyConfig {
  code: string;       // 'USD' | 'INR' | 'MYR'
  symbol: string;     // '$' | '₹' | 'RM '
  rate: number;       // approximate exchange / localized price multiplier
  name: string;       // e.g. 'Indian Rupee' | 'Malaysian Ringgit' | 'US Dollar'
}

export const getCurrencyForLanguage = (langCode: string): CurrencyConfig => {
  const code = (langCode || 'en').toLowerCase();
  
  // Hindi ('hi') or Tamil ('ta') -> Indian Rupee (₹)
  // Also covers other Indian regional languages if selected ('te', 'mr', 'bn', 'ur')
  if (code === 'hi' || code === 'ta' || code === 'te' || code === 'mr') {
    return {
      code: 'INR',
      symbol: '₹',
      rate: 85, // $15 ≈ ₹1,275, $20 ≈ ₹1,700, $35 ≈ ₹2,975, $45 ≈ ₹3,825, $150 ≈ ₹12,750, $250 ≈ ₹21,250
      name: 'Indian Rupee (INR)',
    };
  }

  // Malay ('ms') -> Malaysian Ringgit (RM)
  if (code === 'ms') {
    return {
      code: 'MYR',
      symbol: 'RM ',
      rate: 4.5, // $15 ≈ RM 68, $20 ≈ RM 90, $35 ≈ RM 158, $45 ≈ RM 200, $150 ≈ RM 675, $250 ≈ RM 1,125
      name: 'Malaysian Ringgit (MYR)',
    };
  }

  // Default USD
  return {
    code: 'USD',
    symbol: '$',
    rate: 1,
    name: 'US Dollar (USD)',
  };
};

export const formatLocalizedPrice = (usdAmount: number, currency: CurrencyConfig): string => {
  if (currency.code === 'USD') {
    return `${currency.symbol}${usdAmount}`;
  }
  
  if (currency.code === 'INR') {
    // Round to clean clean currency amounts e.g. ₹1,299 or round(usd * 85)
    const converted = Math.round(usdAmount * currency.rate);
    return `${currency.symbol}${converted.toLocaleString('en-IN')}`;
  }

  if (currency.code === 'MYR') {
    const converted = Math.round(usdAmount * currency.rate);
    return `${currency.symbol}${converted.toLocaleString()}`;
  }

  return `${currency.symbol}${usdAmount}`;
};
