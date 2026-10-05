import { SoftwareTool, PricingTier, Testimonial, FaqItem, BuyerEvent } from '../types';

export const SOFTWARE_TOOLS: SoftwareTool[] = [
  {
    id: 'mailchimp',
    name: 'Mailchimp',
    category: 'Email Marketing Automation & AI Integration',
    monthlyRetail: 162,
    tagline: 'Email marketing automation with multi-LLM AI integration & custom SMTP control',
    description: 'Email Marketing Automation that lets you continue using your favorite AI apps such as ChatGPT, Claude, Google Gemini, Grok, Meta Llama, DeepSeek, and Qwen3 alongside Mailchimp for enhanced email marketing performance.',
    fullSummary: 'Send emails directly from your own SMTP servers, ensuring maximum control, privacy, and deliverability. Avail Mailchimp at a flat promotional bundle rate starting at $15 per month. Seamlessly integrate preferred SMTP services like Amazon SES, Mailgun, and SendGrid. Craft visually appealing emails quickly using the built-in drag-and-drop builder, import subscriber lists in Excel format, build automated drip campaigns, and analyze real-time open, click, and bounce rates powered by leading AI models. Connect seamlessly to Telegram, Instagram, Facebook, and WhatsApp using API keys.',
    keyFeatures: [
      'Built-in Drag-and-Drop visual email template builder',
      'Direct custom SMTP integration (Amazon SES, Mailgun, SendGrid)',
      'Excel list format 1-click bulk import & automated segmentation',
      'Real-time tracking of clicks, opens, and bounce rate metrics'
    ],
    inDepthFeatures: [
      'Email Marketing Automation with multi-model AI copy & sequence generation',
      'Send emails directly from your own SMTP servers for maximum control & deliverability',
      'Available at flat rate of $15 per month starting package, suitable for all business sizes',
      'Seamlessly integrate preferred SMTP services like Amazon SES, Mailgun, and custom relays',
      'Craft visually stunning, mobile-responsive emails quickly with intuitive drag-and-drop',
      'Effortlessly import email lists in Excel spreadsheet format for streamlined campaign management',
      'Set up triggered automated email sequences to boost customer engagement and repeat orders',
      'Real-time analytics tracking opens, click-throughs, unsubscribes, and bounce rates',
      'AI performance insights powered by ChatGPT, Claude, Google Gemini, Grok, DeepSeek, and Qwen3',
      'Integrate with Telegram, Instagram, Facebook, and WhatsApp using API keys for cross-channel sync'
    ],
    aiIntegrations: ['ChatGPT', 'Claude', 'Google Gemini', 'Grok', 'Meta Llama', 'DeepSeek', 'Qwen3'],
    protocolsAndIntegrations: ['Amazon SES', 'Mailgun', 'Custom SMTP', 'Excel (.xlsx)', 'WhatsApp API', 'Telegram API', 'Instagram API', 'Facebook API'],
    businessImpact: '+310% higher repeat customer purchase frequency with zero per-subscriber penalties',
    badgeColor: '#FFE01B',
    accentBg: 'from-amber-500/20 to-amber-900/10',
    icon: 'Mail',
    originalImageLabel: 'Billed Monthly · Email Marketing'
  },
  {
    id: 'hostinger',
    name: 'Hostinger',
    category: 'SSD Web Hosting & Managed Cloud',
    monthlyRetail: 9,
    tagline: 'SSD Hosting with unlimited storage & bandwidth, free CDN, US servers & 1-click AI/CMS apps',
    description: 'Enjoy high-speed SSD Hosting with unlimited storage and bandwidth, providing ample space for your online empire to thrive. Includes complimentary Content Delivery Network (CDN) and free SSL certificates.',
    fullSummary: 'Install your preferred open-source and AI platforms with a single click—including OpenAI, Cloak AI, WordPress, ChatGPT, Claude, Google Gemini, Grok, Meta Llama, DeepSeek, Qwen3, Joomla, OpenCart, and Drupal. Host unlimited websites under a single plan with unlimited data transfer on robust US-based cloud servers. Features custom intuitive control panels, free email accounts, automated malware scanning, 24/7 dedicated support, and over 80 free 1-click web apps.',
    keyFeatures: [
      'SSD Cloud Hosting with Unlimited Storage & Unlimited Bandwidth',
      'Complimentary Global Content Delivery Network (CDN) & Free SSL',
      '1-Click installer for 80+ apps (WordPress, OpenAI, Cloak AI, Drupal, OpenCart)',
      'High-uptime US enterprise servers with 24/7 specialized technical support'
    ],
    inDepthFeatures: [
      'SSD Hosting with unlimited storage and bandwidth for unrestricted business growth',
      'Complimentary integrated Content Delivery Network (CDN) ensuring rapid sub-second global loading',
      'Free Wildcard SSL Certificates included to safeguard transactions and build buyer trust',
      '1-Click installation for open-source & AI platforms: WordPress, Joomla, Drupal, OpenCart, OpenAI, Cloak AI',
      'Full compatibility with ChatGPT, Claude, Google Gemini, Grok, Meta Llama, DeepSeek, Qwen3',
      'Host as many websites as you need under a single plan with flexible scalability',
      'Seamless site performance with unlimited data transfer for high-traffic campaigns',
      'Robust enterprise cloud server infrastructure located in the United States',
      'Intuitive custom-built control panel with enhanced features and effortless navigation',
      'Complimentary professional domain email services and security shielding',
      'Routine automated malware scans and proactive threat defense',
      'Round-the-clock 24/7 dedicated customer assistance with WordPress hosting specialists',
      'High uptime commitment guarantee ensuring your website stays online for customers 24/7',
      'Access to over 80 free website applications to extend functionality without coding'
    ],
    aiIntegrations: ['OpenAI', 'Cloak AI', 'ChatGPT', 'Claude', 'Google Gemini', 'Grok', 'Meta Llama', 'DeepSeek', 'Qwen3'],
    protocolsAndIntegrations: ['WordPress', 'Joomla', 'OpenCart', 'Drupal', 'LiteSpeed Cache', 'US Cloud Datacenters', 'Free CDN', '80+ 1-Click Apps'],
    businessImpact: 'Sub-second 0.8s load times keep 40% more visitors from bouncing and boost Google SEO',
    badgeColor: '#673DE6',
    accentBg: 'from-indigo-500/20 to-indigo-900/10',
    icon: 'Server',
    originalImageLabel: 'Billed Monthly · Web Hosting'
  },
  {
    id: 'fomo',
    name: 'Fomo',
    category: 'Social Proof Marketing Platform',
    monthlyRetail: 50,
    tagline: 'Automated social proof notifications, live counters, review feeds & lead collectors',
    description: 'Fully automated notifications triggered at the right time and place for maximum visitor engagement. Leverages the psychological power of social proof non-intrusively to act as your 24/7 virtual sales team.',
    fullSummary: 'Trigger welcome popups, discount offers, verified reviews, live conversions counters, and interactive emoji score feedback. Includes built-in email collectors, countdown timers for scarcity and urgency, YouTube video widget embeds, social share multipliers, request collectors, and transparent cookie compliance banners.',
    keyFeatures: [
      'Automated real-time purchase popups & live conversions counters',
      'Lead generation email collector & request collector widgets',
      'FOMO countdown timers, discount coupon popups & video displays',
      'Interactive emoji feedback, score ratings & cookie consent banners'
    ],
    inDepthFeatures: [
      'Fully automated notifications triggered at the exact right time and page for peak engagement',
      'Versatile use cases: welcome messages, discount offers, verified customer reviews, and urgency alerts',
      'Harness non-intrusive social proof to instill confidence and create an automated virtual sales team',
      'Craft 100% customizable informational message bars and announcement banners',
      'Showcase recent live conversions and cumulative conversion counters to establish credible social proof',
      'Wide variety of notification widgets: coupons, live visitor counters, video displays, and emoji reactions',
      'Effortlessly collect emails and capture qualified leads directly with the built-in email collector',
      'Induce psychological urgency and FOMO with animated countdown timers linked to lead capture',
      'Display randomized authentic client reviews and testimonials to boost purchase credibility',
      'Engage visitors interactively with emoji feedback widgets for instant sentiment analysis',
      'Streamline inquiries with the request collector for structured lead data gathering',
      'Easily embed informative YouTube videos as discreet corner widgets to enrich user experience',
      'Social share widgets to encourage visitors to share your content and multiply organic referral traffic',
      'Score feedback features facilitating easy evaluation of customer satisfaction',
      'Transparent cookie consent and compliance notification bars'
    ],
    aiIntegrations: ['Dynamic AI Copy Generators', 'Automated Timing Engine', 'Smart Sentiment Classifiers'],
    protocolsAndIntegrations: ['Shopify Webhooks', 'WooCommerce', 'WordPress', 'Webflow', 'YouTube Embeds', 'Custom CSS/JS', '1-Line Embed Script'],
    businessImpact: '+34% direct lift in checkout completion rates by validating authentic buyer demand',
    badgeColor: '#FF6B4A',
    accentBg: 'from-orange-500/20 to-orange-900/10',
    icon: 'Flame',
    originalImageLabel: 'Billed Monthly · Social Proof Marketing Platform'
  },
  {
    id: 'wati',
    name: 'WATi',
    category: 'WhatsApp & Omnichannel Marketing CRM',
    monthlyRetail: 314,
    tagline: 'WhatsApp & Telegram Chatbot CRM with no 24-hr rule restriction & OpenAI tech',
    description: 'Effortlessly create and deploy AI chatbots across Telegram, Instagram, Facebook, and WhatsApp Business accounts in simple steps. Send promotional broadcasts, notifications, and automated sequence messages at any time.',
    fullSummary: 'Benefit from industry-leading 98% open rates with no 24-hour rule restriction across Telegram, Instagram, Facebook, and WhatsApp. Centralized live-chat team inbox, WhatsApp Catalog eCommerce checkout, OpenAI conversational language technology, and rich third-party webhook integrations with ChatGPT, Claude, Google Gemini, Grok, Meta Llama, DeepSeek, Qwen3, Typeform, WooCommerce, and Shopify. Supports automated COD to Prepaid conversion, SMS/email fallback APIs, and auto-responders (Mailchimp, Sendinblue, ActiveCampaign).',
    keyFeatures: [
      'Official WhatsApp, Telegram, Instagram & Facebook Chatbot builder',
      'High open rates with NO 24-hour rule restriction on broadcasts',
      'Automated time-interval message sequences (minutes, hours, days)',
      'Full WhatsApp & Telegram Catalog eCommerce store with in-chat checkout'
    ],
    inDepthFeatures: [
      'Effortlessly build Chatbots for Telegram, Instagram, Facebook, and WhatsApp Business accounts',
      'Connect WATi in just a few simple steps for a hassle-free, no-code omnichannel setup',
      'Send promotional broadcasts, alerts, and transactional notifications whenever you want',
      'Benefit from sky-high 98% open rates with no 24-hour window restrictions across connected channels',
      'Set up automated sequence drip messages triggered across minutes, hours, or days',
      'Centralized live-chat team inbox covering both Telegram and WhatsApp with custom agent roles',
      'Interactive questionnaires storing answers as dynamic variables in custom fields for micro-segmentation',
      'Boost sales potential with WhatsApp & Telegram Catalog: run full eCommerce checkout inside chat',
      'Multi-agent team management with role-based activity permissions on specific modules',
      'Harness OpenAI language models for natural conversational interactions and personalized replies',
      'Connect webhook providers: ChatGPT, Claude, Google Gemini, Grok, Meta Llama, DeepSeek, Qwen3',
      'Seamless WooCommerce integration for automated order alerts and Cash-on-Delivery (COD) to Prepaid conversion',
      'Shopify, Amazon, and eCommerce webhook automation workflows for real-time fulfillment updates',
      'Configurable APIs for sending automated SMS and fallback emails when users provide details',
      'Auto-responder sync with Mailchimp, Sendinblue (Brevo), and ActiveCampaign for subscriber storage',
      'Integrate AI web forms, WP Elementor, and Google Forms with webhook support for instant WhatsApp triggers',
      'Comprehensive REST API endpoints for developers to send custom text, templates, and add subscribers'
    ],
    aiIntegrations: ['OpenAI Language Tech', 'ChatGPT', 'Claude', 'Google Gemini', 'Grok', 'Meta Llama', 'DeepSeek', 'Qwen3'],
    protocolsAndIntegrations: ['WhatsApp Cloud API', 'Telegram Bot API', 'Instagram Direct API', 'Facebook Messenger', 'Shopify', 'WooCommerce', 'WP Elementor', 'Google Forms', 'Typeform', 'Amazon', 'ActiveCampaign', 'Mailchimp'],
    businessImpact: '98% open rates and 45% click-through rates that dramatically out-convert traditional SMS & email',
    badgeColor: '#25D366',
    accentBg: 'from-emerald-500/20 to-emerald-900/10',
    icon: 'MessageSquare',
    originalImageLabel: 'Billed Monthly · WhatsApp Marketing'
  },
  {
    id: 'uptimerobot',
    name: 'UptimeRobot',
    category: 'Server, Website & API Monitoring Tool',
    monthlyRetail: 80,
    tagline: 'Ultimate Server/Website/API monitoring with AI provider integration & incident management',
    description: 'The ultimate Server, Website, and API Monitoring Tool. Can be integrated with popular AI providers like OpenAI, Cloak AI, WordPress, ChatGPT, Claude, Google Gemini, Grok, Meta Llama, DeepSeek, and Qwen3 using API keys.',
    fullSummary: 'Monitor webpages, servers, and REST APIs with real-time insights: up/down status, total downtime percentage, average response time, and comprehensive weekly reports. Create public status pages with separate links, manage and report incidents with full analysis history, track status counts, and receive instant alerts via Email, SMS, Telegram, and webhooks whenever your digital infrastructure encounters an issue.',
    keyFeatures: [
      'Continuous Server, Webpage & REST API uptime and latency checks',
      'AI integration with ChatGPT, Claude, Gemini, Grok, Llama, DeepSeek & Qwen3',
      'Dedicated incident management with outage analysis and root-cause reports',
      'Custom branded public status pages for servers, webpages, and APIs'
    ],
    inDepthFeatures: [
      'Ultimate Server/Website/API Monitoring tool providing continuous 30-second ping verification',
      'Integrated with popular AI providers: OpenAI, Cloak AI, WordPress, ChatGPT, Claude, Gemini, Grok, Llama, DeepSeek, Qwen3',
      'Real-time webpage monitoring: up and down status, total downtime percentage, weekly status trends',
      'Core server monitoring metrics: uptime %, downtime %, average response latency, and historical performance',
      'Seamless REST API monitoring to verify payload response codes, latency spikes, and endpoint health',
      'Public status pages for servers, webpages, or APIs with dedicated links to build client transparency',
      'Easily update and maintain public status page details for clear communication during scheduled maintenance',
      'Full Incident Management: report incidents, log root causes, and track resolution timelines effortlessly',
      'Quickly add incidents for servers, webpages, or APIs to streamline response workflows',
      'Dedicated user profile and multi-user access management for team operations',
      'Instant automated email and SMS alerts whenever websites or servers experience downtime',
      'Comprehensive outage analysis and incident history reports to eliminate recurring technical bottlenecks',
      'Covers all aspects of your digital infrastructure: frontend pages, backend servers, databases, and APIs'
    ],
    aiIntegrations: ['OpenAI', 'Cloak AI', 'ChatGPT', 'Claude', 'Google Gemini', 'Grok', 'Meta Llama', 'DeepSeek', 'Qwen3'],
    protocolsAndIntegrations: ['HTTP(s) Checks', 'Ping (ICMP)', 'Port Monitoring', 'API Endpoints', 'Email Alerts', 'SMS Gateways', 'Telegram Webhooks', 'Public Branded Status Pages'],
    businessImpact: 'Prevents thousands of dollars in lost holiday sales by detecting gateway and server failures within 30 seconds',
    badgeColor: '#17C964',
    accentBg: 'from-teal-500/20 to-teal-900/10',
    icon: 'Activity',
    originalImageLabel: 'Billed Monthly · Monitor Your Website\'s'
  },
  {
    id: 'bitly',
    name: 'Bitly',
    category: 'URL Shortener, Dynamic QR & Bio Link Suite (Toliyos Engine)',
    monthlyRetail: 35,
    tagline: 'Custom short URLs, dynamic QR codes, branded bio pages, GDPR compliance & 120+ web tools',
    description: 'Simplify lengthy URLs with zero effort. Create personalized bio link pages reflecting your brand identity, generate unique QR codes with custom colors and logos, and optimize links with scheduling, expiration limits, and GDPR/CCPA compliance.',
    fullSummary: 'Includes dynamic QR codes for vCard, WiFi, Calendar events, and geolocation; downloadable dynamic files; and digital contact cards with scan tracking. Compliant with GDPR, CCPA, and PECR regulations. Integrates with leading AI providers (OpenAI, Cloak AI, WordPress, ChatGPT, Claude, Google Gemini, Grok, Meta Llama, DeepSeek, Qwen3) for intelligent attribution tracking. Includes bonus access to 120+ web utility tools and custom domain mapping.',
    keyFeatures: [
      'Branded URL shortener with scheduling, expiration dates & password protection',
      'Custom QR Codes for vCard, WiFi, Calendar & Location with logos and custom colors',
      'Personalized Link-in-Bio pages with SEO settings and sensitive content warnings',
      'GDPR, CCPA & PECR compliant analytics with 120+ bonus web utility tools'
    ],
    inDepthFeatures: [
      'Simplify lengthy, messy URLs effortlessly to ensure professional elegance and higher click-through',
      'Create personalized, adaptable bio link pages that reflect and symbolize your unique brand identity',
      'Generate QR codes with unique custom colors, embedded brand logos, and distinct shape geometries',
      'Advanced link optimization: set automated scheduling, expiration limits, and target country routing',
      'Bio-link pages equipped with customizable SEO meta tags, password protection, and sensitive content warnings',
      'Dynamic QR codes for vCard contact cards, one-tap WiFi connection, Calendar events, and physical locations',
      'Generate advanced links that are downloadable to dynamic files and trackable digital assets',
      'Create digital contact cards (vCards) that update dynamically without reprinting QR codes',
      'Downloadable dynamic calendar invitations with real-time RSVP and attendance tracking',
      'Detailed analytics fully compliant with global GDPR, CCPA, and PECR privacy regulations',
      'Seamless integration with AI providers: OpenAI, Cloak AI, WordPress, ChatGPT, Claude, Gemini, Grok, Llama, DeepSeek, Qwen3',
      'Zero privacy concerns with automated data protection and anonymized click metrics',
      'Categorize and manage resources easily with multi-tier project folder organization',
      'Bonus access to an extensive suite of 120+ useful web utility tools for online operations',
      'Connect custom branded domains or use high-reputation predefined ones for trusted click rates',
      'Maintain a unified, cohesive online presence with comprehensive built-in click intelligence'
    ],
    aiIntegrations: ['OpenAI', 'Cloak AI', 'ChatGPT', 'Claude', 'Google Gemini', 'Grok', 'Meta Llama', 'DeepSeek', 'Qwen3'],
    protocolsAndIntegrations: ['Custom Branded Domains', 'vCard 4.0', 'iCal (.ics)', 'WiFi WPA2/3 QR', 'GDPR/CCPA Engine', '120+ Web Tools Suite', 'Project Folder Manager'],
    businessImpact: '100% attribution clarity across every social channel, ad campaign, and offline packaging QR code',
    badgeColor: '#EE6123',
    accentBg: 'from-amber-600/20 to-amber-950/10',
    icon: 'Link2',
    originalImageLabel: 'Billed Monthly · URL shortener, QR Code and a Link-in-bio solution'
  }
];

export const TOTAL_MONTHLY_RETAIL = SOFTWARE_TOOLS.reduce((acc, tool) => acc + tool.monthlyRetail, 0); // $650/mo
export const TOTAL_ANNUAL_RETAIL = TOTAL_MONTHLY_RETAIL * 12; // $7,800/yr

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter Pack',
    subtitle: 'solo business',
    price2Year: 15,
    price1Year: 20,
    price: 15,
    originalPrice: 650,
    period: '/month',
    tagline: 'Solo business setup',
    description: 'The essential 6-software suite for solo businesses and emerging founders.',
    toolAllowances: {
      hostinger: '1 Domain Hosting',
      fomo: '3,000 Unique Visitors',
      uptimeRobot: '1 WebPage / Tracking',
      mailchimp: '3000 Subscribers',
      wati: '2000 Subscribers',
      bitly: '1 Project'
    },
    features: [
      'Hostinger: 1 Domain High-Speed Hosting',
      'FOMO: 3,000 Monthly Unique Visitors',
      'UptimeRobot: 1 WebPage / Real-time Tracking',
      'Mailchimp: 3,000 Active Email Subscribers',
      'WATi: 2,000 WhatsApp Marketing Subscribers',
      'Bitly: 1 Branded Project & Custom Links',
      'Complete Beginner Video Tutorial Academy',
      '30-Day Money-Back Guarantee (Authenticity/Working) · 1-Day Full Refund'
    ],
    ctaText: 'Buy Now',
    spotsLeft: 14
  },
  {
    id: 'growth',
    name: 'Growth Pack',
    subtitle: 'Level-up with more power and enhanced features',
    price2Year: 35,
    price1Year: 45,
    price: 35,
    originalPrice: 1250,
    period: '/month',
    badge: '★ MOST POPULAR CHOICE · 89% CHOOSE THIS',
    popular: true,
    tagline: 'Level-up with more power and enhanced features',
    description: 'Level up with expanded multi-domain hosting, 10,000 subscribers, and high-volume WhatsApp broadcasting.',
    toolAllowances: {
      hostinger: '5 Domain Hosting',
      fomo: '10,000 Unique Visitors',
      uptimeRobot: '10 WebPage / Tracking',
      mailchimp: '10,000 Subscribers',
      wati: '10,000 Subscribers',
      bitly: '20 Project'
    },
    features: [
      'Hostinger: 5 Domains High-Speed Hosting',
      'FOMO: 10,000 Monthly Unique Visitors',
      'UptimeRobot: 10 WebPages / Live Tracking',
      'Mailchimp: 10,000 Active Email Subscribers',
      'WATi: 10,000 WhatsApp Marketing Subscribers',
      'Bitly: 20 Branded Campaign Projects',
      '50+ Pre-built Copy Swipe Files & Cart Recovery',
      'Priority VIP Support Desk Access'
    ],
    ctaText: 'Buy Now',
    spotsLeft: 7
  },
  {
    id: 'agency',
    name: 'BIG Agency',
    subtitle: 'Enterprise & Agency capacity',
    premiumBadge: 'Premium',
    price2Year: 150,
    price1Year: 250,
    price: 150,
    originalPrice: 2400,
    period: '/month',
    badge: 'Unlimited Commercial Rights',
    tagline: 'Enterprise scale for high-volume agencies & commerce',
    description: 'Unrestricted commercial deploy rights with 1,000 domains, 300,000 subscribers, and 500 Bitly projects.',
    toolAllowances: {
      hostinger: '1,000 Domain Hosting',
      fomo: '100,000 Unique Visitors',
      uptimeRobot: '1,000 WebPage / Tracking',
      mailchimp: '300,000 Subscribers',
      wati: '85,000 Subscribers',
      bitly: '500 Project'
    },
    features: [
      'Hostinger: 1,000 Domains High-Speed Hosting',
      'FOMO: 100,000 Monthly Unique Visitors',
      'UptimeRobot: 1,000 WebPages / Live Tracking',
      'Mailchimp: 300,000 Active Email Subscribers',
      'WATi: 85,000 WhatsApp Marketing Subscribers',
      'Bitly: 500 Branded Campaign Projects',
      'Unlimited Commercial Client Deploy Rights',
      'Done-For-You Agency Pitch Deck & Retainer Calculator'
    ],
    ctaText: 'Buy Now',
    spotsLeft: 3
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'David Chen',
    role: 'Founder & CEO',
    company: 'OrbitCommerce Inc.',
    avatarText: 'DC',
    rating: 5,
    headline: 'Automated $8,400 in recovered carts in 30 days',
    content: 'We were paying over $500 every single month for individual tool subscriptions. Grabbing this bundle for $15 seemed too good to be true, but it gave us the exact same automation horsepower. Our WhatsApp broadcasts through WATi and abandoned cart email flows in Mailchimp alone recovered $8,400 in lost orders in month one.',
    metricLabel: 'Recovered Sales',
    metricValue: '+$8,400.00',
    toolsUsed: ['WATi', 'Mailchimp', 'Fomo'],
    planTier: 'Starter Pack ($15/mo)'
  },
  {
    id: 't2',
    name: 'Sarah Jenkins',
    role: 'Head of Growth',
    company: 'MetricPulse Agency',
    avatarText: 'SJ',
    rating: 5,
    headline: 'Landing page conversion rate jumped from 2.1% to 4.8%',
    content: 'The combination of Fomo real-time buyer notifications with Bitly campaign click attribution lifted our sales landing page conversion rate from 2.1% to 4.8%. Hosting on Hostinger cut our page load times down to 0.7 seconds. The fact that the entire 6-tool suite started at only $15 is insane value.',
    metricLabel: 'Conversion Lift',
    metricValue: '+128%',
    toolsUsed: ['Fomo', 'Bitly', 'Hostinger'],
    planTier: 'Growth Pack ($35/mo)'
  },
  {
    id: 't3',
    name: 'Mateo Alvarez',
    role: 'Operations Director',
    company: 'NextGen Retail Group',
    avatarText: 'MA',
    rating: 5,
    headline: 'Instant uptime alerts saved us $12K during a gateway outage',
    content: 'UptimeRobot notified us via SMS within 20 seconds when a third-party checkout gateway had a brief hiccup. We rerouted traffic immediately, preventing an estimated $12,000 in lost holiday sales. Every single online founder needs this running in the background 24/7.',
    metricLabel: 'Downtime Prevented',
    metricValue: '100% Zero-Loss',
    toolsUsed: ['UptimeRobot', 'Hostinger', 'WATi'],
    planTier: 'Starter Pack ($15/mo)'
  },
  {
    id: 't4',
    name: 'Jessica Reynolds',
    role: 'E-Commerce Operator',
    company: 'Haven Lifestyle Brands',
    avatarText: 'JR',
    rating: 5,
    headline: 'Cut our manual customer follow-up time by 18 hours/week',
    content: 'Before Bizz2u, our small team spent 3-4 hours every single day answering standard order queries and following up on pending quotes. Setting up WATi automated interactive flows and Mailchimp welcome journeys automated 85% of customer inquiries without hiring extra staff.',
    metricLabel: 'Hours Saved Weekly',
    metricValue: '18 hrs/week',
    toolsUsed: ['WATi', 'Mailchimp'],
    planTier: 'Growth Pack ($35/mo)'
  },
  {
    id: 't5',
    name: 'Marcus Vance',
    role: 'Managing Director',
    company: 'Vance Scale Media',
    avatarText: 'MV',
    rating: 5,
    headline: 'Saved over $7,200 in annual recurring SaaS subscriptions',
    content: 'As an agency managing 12 local business clients, SaaS overhead was eating our margins alive. We deployed this 6-tool automation playbook across our portfolio. We eliminated 5 disparate monthly bills, cut costs by $600/month, and our clients are seeing faster conversions than ever.',
    metricLabel: 'Annual Cost Saved',
    metricValue: '$7,200/yr',
    toolsUsed: ['Mailchimp', 'Hostinger', 'Bitly', 'Fomo'],
    planTier: 'BIG Agency ($150/mo)'
  },
  {
    id: 't6',
    name: 'Priya Sharma',
    role: 'Co-Founder & COO',
    company: 'Aura Bloom Digital',
    avatarText: 'PS',
    rating: 5,
    headline: 'WhatsApp broadcasts converted 4.2x higher than cold email',
    content: 'Our open rates exploded from 19% on email to 97% on WATi WhatsApp broadcasts. We ran a 48-hour flash sale for our product release and generated 214 orders in under 3 hours. The automation templates included in this bundle made the entire setup take less than 20 minutes.',
    metricLabel: 'WhatsApp Open Rate',
    metricValue: '97.4%',
    toolsUsed: ['WATi', 'Bitly'],
    planTier: 'Growth Pack ($35/mo)'
  },
  {
    id: 't7',
    name: 'Alexander Lindholm',
    role: 'Chief Technology Officer',
    company: 'Nordic SaaS Labs',
    avatarText: 'AL',
    rating: 5,
    headline: 'Sub-second page speeds improved organic rankings and lead capture',
    content: 'Moving our marketing funnels to Hostinger cloud servers with LiteSpeed caching dropped our global TTFB from 1.6s to 380ms. The faster loading speed combined with Fomo live activity triggers increased our free trial signups by 64% in under three weeks.',
    metricLabel: 'Trial Signup Lift',
    metricValue: '+64.2%',
    toolsUsed: ['Hostinger', 'Fomo', 'UptimeRobot'],
    planTier: 'Growth Pack ($35/mo)'
  },
  {
    id: 't8',
    name: 'Chloe Tremblay',
    role: 'VP of Marketing',
    company: 'Kinetix Fitness Equipment',
    avatarText: 'CT',
    rating: 5,
    headline: 'Clear campaign attribution saved $3,500 in wasted ad spend',
    content: 'Using Bitly custom branded short links across our TikTok and Meta ad campaigns gave us 100% granular clarity on exactly which creatives were actually driving checkout actions. We killed the underperforming ads and scaled the winners, instantly cutting our CPA by 38%.',
    metricLabel: 'Ad CPA Reduction',
    metricValue: '-38.5%',
    toolsUsed: ['Bitly', 'UptimeRobot'],
    planTier: 'Growth Pack ($35/mo)'
  },
  {
    id: 't9',
    name: 'Tariq Al-Mansoor',
    role: 'Founder',
    company: 'Apex Logistics Software',
    avatarText: 'TA',
    rating: 5,
    headline: 'Replaced 4 full-time support tasks with automated workflows',
    content: 'The $15 starting price was the most asymmetric investment we made all year. Between the Mailchimp automated onboarding series and WATi 24/7 instant chat routing, our prospective buyers get instant answers at 2 AM on weekends, booking demos automatically on autopilot.',
    metricLabel: 'Demo Booking Surge',
    metricValue: '+89%',
    toolsUsed: ['Mailchimp', 'WATi', 'Fomo'],
    planTier: 'Starter Pack ($15/mo)'
  },
  {
    id: 't10',
    name: 'Rachel Goldberg',
    role: 'Growth Strategist',
    company: 'Cobalt Direct DTC',
    avatarText: 'RG',
    rating: 5,
    headline: 'Fomo urgency notifications boosted buyer checkout speed by 42%',
    content: 'Shoppers used to leave items in their cart for days. Once we integrated Fomo real-time purchase triggers showing verified buyer activity in real-time, urgency skyrocketed. Average time to checkout dropped from 48 hours to under 35 minutes.',
    metricLabel: 'Checkout Velocity',
    metricValue: '4.2x Faster',
    toolsUsed: ['Fomo', 'Hostinger', 'Mailchimp'],
    planTier: 'Growth Pack ($35/mo)'
  },
  {
    id: 't11',
    name: 'Jason Wu',
    role: 'Principal Consultant',
    company: 'Benchmark Growth Partners',
    avatarText: 'JW',
    rating: 5,
    headline: 'The setup templates alone are worth 100x the $15 price',
    content: 'Most bundles give you software licenses with zero context. What makes this special is the step-by-step automation blueprint. We plugged in the pre-configured Mailchimp sequences and WATi broadcast rules and had our entire sales pipeline live before lunch.',
    metricLabel: 'Setup Time',
    metricValue: '< 45 Mins',
    toolsUsed: ['Mailchimp', 'WATi', 'Bitly'],
    planTier: 'Starter Pack ($15/mo)'
  },
  {
    id: 't12',
    name: 'Danielle Brooks',
    role: 'Founder & Creative Lead',
    company: 'Studio Lumos Design',
    avatarText: 'DB',
    rating: 5,
    headline: 'Zero server crashes and peace of mind during product drops',
    content: 'During our largest annual collection drop, traffic surged 12x our normal volume. UptimeRobot verified continuous 100% availability while Hostinger handled the traffic spikes seamlessly. It felt amazing not having to stress about website downtime while sales rolled in.',
    metricLabel: 'Peak Traffic Uptime',
    metricValue: '100.0%',
    toolsUsed: ['UptimeRobot', 'Hostinger'],
    planTier: 'BIG Agency ($150/mo)'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'f1',
    question: 'Why does the bundle subscription start from as low as $15/month when retail is $650/month?',
    answer: 'This is a limited-time promotional volume partnership. Instead of paying each software company separately ($162 for Mailchimp, $314 for WATi, $80 for UptimeRobot, etc.), our enterprise volume license allows us to offer this complete 6-software package starting at just $15 per month, slashing your software overhead by 97.7%.',
    category: 'Pricing'
  },
  {
    id: 'f2',
    question: 'How do I access and activate the 6 software tools after payment?',
    answer: 'Immediately upon completing your order, you receive instant access to your private customer portal with license keys, 1-click activation links, pre-configured automation templates, and step-by-step video setup guides for Mailchimp, Hostinger, Fomo, WATi, UptimeRobot, and Bitly.',
    category: 'Access'
  },
  {
    id: 'f3',
    question: 'How does the monthly subscription billing work?',
    answer: 'The starter tier is a flexible $15/month subscription fee. You get full, continuous access to all 6 software tools, automation recipes, and ongoing updates. There are no contracts or long-term lock-ins—you can modify, pause, or cancel anytime with a single click in your billing dashboard.',
    category: 'Billing'
  },
  {
    id: 'f4',
    question: 'Are there video tutorials and is it easy for beginners?',
    answer: 'YES! All customers receive complete, step-by-step video tutorials on how to manage and operate all 6 software tools. The video tutorials are designed specifically for absolute beginners—no technical or coding experience is required. You can watch over our shoulder click-by-click and have your email funnels, WhatsApp broadcasts, hosting, and tracking running in under an hour.',
    category: 'Tutorials'
  },
  {
    id: 'f5',
    question: 'What is the 30-Day Money-Back Guarantee & "No Questions Asked" refund policy?',
    answer: 'All 6 software licenses are 100% legitimate and authentic from official original vendor companies. Our 30-Day Money-Back Guarantee & No Questions Asked policy is strictly valid if the software we provided is not working or not legit: if any customer finds that any software provided is not working, or the license code is fake or piracy, our team will refund 100% of your money within 1 day (24 hours) — no questions asked. In addition, if you need an instant license replacement, we can replace it within 2 minutes. Reach our official support desk directly at Bizzusupport@gmail.com.',
    category: 'Guarantee'
  },
  {
    id: 'f6',
    question: 'Can I use these tools for client work or agency projects?',
    answer: 'Yes! If you choose the Growth or Agency tiers, you receive expanded commercial licenses allowing you to deploy these high-converting workflows directly for your clients, charge retainer fees, and keep 100% of the profits.',
    category: 'Licensing'
  },
  {
    id: 'f7',
    question: 'How do I contact official customer support if I have questions or need assistance?',
    answer: 'You can email our official customer support desk directly anytime at Bizzusupport@gmail.com. Whether you need activation guidance, custom tier recommendations, or technical assistance, our support team replies promptly.',
    category: 'Support'
  }
];

export const RECENT_BUYERS: BuyerEvent[] = [
  // 15 Malaysian buyers
  { id: 'my-1', name: 'Ahmad Faiz', location: 'Kuala Lumpur, Malaysia', tier: 'Growth Pack ($35/mo)', timeAgo: 'just now' },
  { id: 'my-2', name: 'Nurul Huda', location: 'Petaling Jaya, Malaysia', tier: 'Starter Pack ($15/mo)', timeAgo: '2 minutes ago' },
  { id: 'my-3', name: 'Tan Wei Loon', location: 'Penang, Malaysia', tier: 'BIG Agency ($150/mo)', timeAgo: '4 minutes ago' },
  { id: 'my-4', name: 'Siti Sarah', location: 'Johor Bahru, Malaysia', tier: 'Growth Pack ($35/mo)', timeAgo: '6 minutes ago' },
  { id: 'my-5', name: 'Lim Jian Hao', location: 'Subang Jaya, Malaysia', tier: 'Starter Pack ($15/mo)', timeAgo: '8 minutes ago' },
  { id: 'my-6', name: 'Muhammad Danial', location: 'Shah Alam, Malaysia', tier: 'Growth Pack ($35/mo)', timeAgo: '11 minutes ago' },
  { id: 'my-7', name: 'Chong Kah Seng', location: 'Ipoh, Malaysia', tier: 'BIG Agency ($150/mo)', timeAgo: '13 minutes ago' },
  { id: 'my-8', name: 'Farah Aisyah', location: 'Kuching, Sarawak, Malaysia', tier: 'Starter Pack ($15/mo)', timeAgo: '15 minutes ago' },
  { id: 'my-9', name: 'Ravin Kumar', location: 'Klang, Malaysia', tier: 'Growth Pack ($35/mo)', timeAgo: '17 minutes ago' },
  { id: 'my-10', name: 'Wong Shu Min', location: 'Kota Kinabalu, Sabah, Malaysia', tier: 'Starter Pack ($15/mo)', timeAgo: '19 minutes ago' },
  { id: 'my-11', name: 'Khairul Anuar', location: 'Melaka, Malaysia', tier: 'BIG Agency ($150/mo)', timeAgo: '22 minutes ago' },
  { id: 'my-12', name: 'Lee Chun Kit', location: 'Cyberjaya, Malaysia', tier: 'Growth Pack ($35/mo)', timeAgo: '24 minutes ago' },
  { id: 'my-13', name: 'Anis Zulaikha', location: 'Seremban, Malaysia', tier: 'Starter Pack ($15/mo)', timeAgo: '27 minutes ago' },
  { id: 'my-14', name: 'Hafizuddin R.', location: 'Kuantan, Malaysia', tier: 'Growth Pack ($35/mo)', timeAgo: '29 minutes ago' },
  { id: 'my-15', name: 'Kavitha N.', location: 'Putrajaya, Malaysia', tier: 'Starter Pack ($15/mo)', timeAgo: '32 minutes ago' },

  // 2 Singapore buyers
  { id: 'sg-1', name: 'Darren Tan', location: 'Marina Bay, Singapore', tier: 'BIG Agency ($150/mo)', timeAgo: '5 minutes ago' },
  { id: 'sg-2', name: 'Priya Mohan', location: 'Jurong East, Singapore', tier: 'Growth Pack ($35/mo)', timeAgo: '14 minutes ago' },

  // 5 India buyers
  { id: 'in-1', name: 'Arjun Sharma', location: 'Bengaluru, India', tier: 'BIG Agency ($150/mo)', timeAgo: '3 minutes ago' },
  { id: 'in-2', name: 'Neha Patel', location: 'Mumbai, India', tier: 'Growth Pack ($35/mo)', timeAgo: '9 minutes ago' },
  { id: 'in-3', name: 'Rohan Verma', location: 'Delhi NCR, India', tier: 'Starter Pack ($15/mo)', timeAgo: '16 minutes ago' },
  { id: 'in-4', name: 'Pooja Iyer', location: 'Hyderabad, India', tier: 'Growth Pack ($35/mo)', timeAgo: '21 minutes ago' },
  { id: 'in-5', name: 'Vikram Joshi', location: 'Pune, India', tier: 'BIG Agency ($150/mo)', timeAgo: '28 minutes ago' },

  // 5 Australia buyers
  { id: 'au-1', name: 'Liam O\'Connor', location: 'Sydney, Australia', tier: 'BIG Agency ($150/mo)', timeAgo: '7 minutes ago' },
  { id: 'au-2', name: 'Emma Wilson', location: 'Melbourne, Australia', tier: 'Growth Pack ($35/mo)', timeAgo: '12 minutes ago' },
  { id: 'au-3', name: 'Jack Campbell', location: 'Brisbane, Australia', tier: 'Starter Pack ($15/mo)', timeAgo: '18 minutes ago' },
  { id: 'au-4', name: 'Chloe Davies', location: 'Perth, Australia', tier: 'Growth Pack ($35/mo)', timeAgo: '25 minutes ago' },
  { id: 'au-5', name: 'Noah Taylor', location: 'Adelaide, Australia', tier: 'BIG Agency ($150/mo)', timeAgo: '33 minutes ago' },

  // Canada buyers
  { id: 'ca-1', name: 'Jonathan V.', location: 'Toronto, Ontario, Canada', tier: 'BIG Agency ($150/mo)', timeAgo: '10 minutes ago' },
  { id: 'ca-2', name: 'Sophie Tremblay', location: 'Montreal, Quebec, Canada', tier: 'Growth Pack ($35/mo)', timeAgo: '20 minutes ago' },
  { id: 'ca-3', name: 'Matthew Chen', location: 'Vancouver, BC, Canada', tier: 'Starter Pack ($15/mo)', timeAgo: '31 minutes ago' },

  // 5 Dubai buyers
  { id: 'ae-1', name: 'Tariq Al-Mansoor', location: 'Downtown Dubai, UAE', tier: 'BIG Agency ($150/mo)', timeAgo: '1 minute ago' },
  { id: 'ae-2', name: 'Zayed Al-Nuaimi', location: 'Dubai Marina, UAE', tier: 'BIG Agency ($150/mo)', timeAgo: '8 minutes ago' },
  { id: 'ae-3', name: 'Fatima Al-Hashimi', location: 'Business Bay, Dubai, UAE', tier: 'Growth Pack ($35/mo)', timeAgo: '16 minutes ago' },
  { id: 'ae-4', name: 'Karim Haddad', location: 'Jumeirah, Dubai, UAE', tier: 'Starter Pack ($15/mo)', timeAgo: '23 minutes ago' },
  { id: 'ae-5', name: 'Rashid Khan', location: 'DIFC, Dubai, UAE', tier: 'BIG Agency ($150/mo)', timeAgo: '30 minutes ago' }
];
