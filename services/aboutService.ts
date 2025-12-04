
import { HeroSectionData, FeatureItem, StatItem } from '../types';
import { Icons } from '../components/ui/Icons';

const HERO_DATA: HeroSectionData = {
  title: "Knowledge First.<br/>Trust Always.",
  subtitle: "Redefining property investment through transparency, data-driven insights, and a vision for sustainable returns.",
  subTitleLabel: "About Ridhira Realty",
  backgroundImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
};

const INTRO_TEXT = {
  lead: "Ridhira Realty LLC was founded with one vision — to redefine how property investment is experienced. We believe that real estate decisions should be made through knowledge, not hype.",
  body: "With a foundation rooted in transparency, advisory excellence, and technology-driven insights, Ridhira helps clients identify the right opportunities and achieve sustainable returns."
};

const CORE_VALUES: FeatureItem[] = [
  {
    title: "Trust",
    description: "Every interaction built on honesty, clarity, and accountability."
  },
  {
    title: "Transparency",
    description: "Every property and process is fully verified and visible."
  },
  {
    title: "Technology",
    description: "Leveraging analytics, automation, and AI to empower decisions."
  },
  {
    title: "Intelligence",
    description: "Transforming raw data into actionable foresight."
  },
  {
    title: "Integrity",
    description: "Ethical guidance — always in the client’s best interest."
  }
];

const DIFFERENTIATORS_LIST = [
  "Data-Intelligence Core (price per sq.ft, yield models, supply ratios)",
  "Global Investor Orientation (NRIs, GCC HNIs, Europe buyers)",
  "Transparency & Compliance (escrow vetted projects)",
  "Beyond Listings (valuations, Golden Visa advisory, dashboards)"
];

const TEAM_EXPERTISE: FeatureItem[] = [
  { icon: Icons.Square, title: "Market Analytics & Forecasting" },
  { icon: Icons.MapPin, title: "Real-Estate Finance & Planning" },
  { icon: Icons.Star, title: "Legal Compliance (RERA/DLD)" },
  { icon: Icons.BedDouble, title: "AI-Driven Portfolio Advisory" },
  { icon: Icons.Search, title: "Golden Visa & Residency Strategy" }
];

const PROMISES = [
  "Actionable market intelligence before recommendations",
  "Zero hidden fees & full documentation transparency",
  "RERA & DLD-verified projects only",
  "Education through each stage",
  "Long-term ROI focus over quick sales"
];

const VISION = {
  text: "Aligned with Dubai Vision 2040 and RAK Vision 2030, we aim to lead the AI-driven investment era. Our upcoming Investor Dashboard lets clients track returns, compare communities and receive alerts — bringing institutional-grade tools to individual investors.",
  subsections: [
    {
      title: "Sustainability & Community",
      description: "We champion projects with green certifications and community value, encouraging investments that balance profitability and purpose."
    },
    {
      title: "Global Presence & Outreach",
      description: "Through our UAE and India network, we serve individual investors, HNIs, and corporates. We regularly host Investor Workshops and Roadshows to educate buyers entering the UAE market."
    }
  ],
  futureOutlook: "We will continue building analytics tools and AI platforms to make advisory more accurate and accessible. As the UAE transforms into an AI-first economy, Ridhira Realty will remain your bridge between intelligence and investment."
};

export const aboutService = {
  getHeroData: async () => HERO_DATA,
  getIntroText: async () => INTRO_TEXT,
  getCoreValues: async () => CORE_VALUES,
  getDifferentiatorsList: async () => DIFFERENTIATORS_LIST,
  getTeamExpertise: async () => TEAM_EXPERTISE,
  getPromises: async () => PROMISES,
  getVision: async () => VISION
};
