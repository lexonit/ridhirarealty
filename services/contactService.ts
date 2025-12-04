
import { HeroSectionData, FeatureItem } from '../types';
import { Icons } from '../components/ui/Icons';

const HERO_DATA: HeroSectionData = {
  title: "Get in Touch",
  subtitle: "Begin your journey towards exceptional real estate opportunities. Our advisors are ready to assist you.",
  subTitleLabel: "Connect With Us",
  backgroundImage: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop"
};

const CONTACT_INFO: FeatureItem[] = [
  {
    title: "Phone",
    description: "+971-561705995",
    icon: Icons.Phone
  },
  {
    title: "Email",
    description: "info@ridhirarealty.com",
    icon: Icons.Mail
  },
  {
    title: "Office",
    description: "Biz Space Business Center,<br/>Deira, Dubai- UAE",
    icon: Icons.MapPin
  }
];

export const contactService = {
  getHeroData: async () => HERO_DATA,
  getContactInfo: async () => CONTACT_INFO
};
