export interface SoftwareTool {
  id: string;
  name: string;
  category: string;
  monthlyRetail: number;
  tagline: string;
  description: string;
  keyFeatures: string[];
  businessImpact: string;
  badgeColor: string;
  accentBg: string;
  icon: string;
  originalImageLabel: string;
  aiIntegrations?: string[];
  inDepthFeatures?: string[];
  protocolsAndIntegrations?: string[];
  fullSummary?: string;
}

export interface PricingTier {
  id: string;
  name: string;
  subtitle?: string;
  price2Year: number;
  price1Year: number;
  price: number;
  originalPrice: number;
  period: string;
  badge?: string;
  popular?: boolean;
  premiumBadge?: string;
  tagline: string;
  description: string;
  toolAllowances: {
    hostinger: string;
    fomo: string;
    uptimeRobot: string;
    mailchimp: string;
    wati: string;
    bitly: string;
  };
  features: string[];
  ctaText: string;
  spotsLeft: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatarText: string;
  rating: number;
  headline: string;
  content: string;
  metricLabel: string;
  metricValue: string;
  toolsUsed: string[];
  planTier?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface BuyerEvent {
  id: string;
  name: string;
  location: string;
  tier: string;
  timeAgo: string;
}
