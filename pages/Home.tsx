import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import PropertyGrid from "../components/PropertyGrid";
import AboutSection from "../components/AboutSection";
import VideoShowcase from "../components/VideoShowcase";
import GallerySection from "../components/GallerySection";
import { propertyService } from "../services/propertyService";
import { homeService } from "../services/homeService";
import { FEATURED_PROJECTS } from "../services/mockData";
import {
  FloatingElement,
  ThreeDCard,
  CometCard,
} from "../components/ui/AceternityUI";
import SectionWrapper from "../components/ui/SectionWrapper";
import { Link } from "react-router-dom";
import { Icons } from "../components/ui/Icons";
import { motion } from "framer-motion";
import { Property, FeatureItem, DeveloperLogo } from "../types";
import { Skeleton } from "../components/ui/Skeleton";
import LuxuryPropertyCard from "../components/LuxuryPropertyCard";
import SEO from "../components/SEO";
import {
  WHY_DUBAI_BACKGROUND,
  WHY_IMAGES,
  WHAT_IS_NEXT_IMAGES,
} from "../constants/images";

const Home: React.FC = () => {
  const [featuredProjects, setFeaturedProjects] = useState<Property[]>([]);
  const [latestWork, setLatestWork] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  // Image Loading States
  const [imagesLoaded, setImagesLoaded] = useState({
    rakVision: false,
    wynnResort: false,
  });

  // Content States
  const [benefits, setBenefits] = useState<string[]>([]);
  const [differentiators, setDifferentiators] = useState<FeatureItem[]>([]);
  const [whyChooseUs, setWhyChooseUs] = useState<FeatureItem[]>([]);
  const [developers, setDevelopers] = useState<DeveloperLogo[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const [allProps, fetchedBenefits, fetchedDiffs, fetchedWhy, fetchedDevs] =
        await Promise.all([
          propertyService.getAllProperties(),
          homeService.getBenefits(),
          homeService.getDifferentiators(),
          homeService.getWhyChooseUs(),
          homeService.getDevelopers(),
        ]);

      setLatestWork(allProps.slice(0, 6));
      setFeaturedProjects(allProps.filter((p) => p.featured));
      setBenefits(fetchedBenefits);
      setDifferentiators(fetchedDiffs);
      setWhyChooseUs(fetchedWhy);
      setDevelopers(fetchedDevs);

      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <main className="bg-white dark:bg-luxury-black min-h-screen transition-colors duration-300">
      <SEO
        title="Top Luxury Real Estate Agents Dubai"
        description="Discover the best luxury properties in Dubai with Ridhira Realty. We specialize in high-ROI off-plan investments, waterfront villas, and Golden Visa advisory."
      />

      {/* Video Hero Section */}
      <Hero />

      {/* About Ridhira Realty Section */}
      <SectionWrapper className="py-24 bg-slate-50 dark:bg-luxury-charcoal transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-2xl uppercase tracking-widest font-semibold block mb-4" style={{ color: 'goldenrod' }}>
                About Ridhira Realty
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-8">
                Advisory. <span className="text-amber-500 dark:text-amber-400">Intelligence.</span> Integrity.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6 text-center mb-12"
            >
              <p className="text-sm md:text-sm text-slate-700 dark:text-white/80 leading-relaxed">
                Ridhira Realty exists to transform how people invest in real
                estate — turning speculation into strategy. We combine verified data, market expertise, and human guidance
                to help clients achieve meaningful growth through Dubai and Ras
                Al Khaimah's dynamic property markets.
              </p>
              <p className="text-sm md:text-sm text-slate-800 dark:text-white italic leading-relaxed">
                Every consultation begins with education — because we believe
                clarity comes before commitment.
              </p>
              <p className="text-sm md:text-sm text-slate-800 dark:text-white italic leading-relaxed">
                  "First impressions don't sell — they educate."
                </p>
            </motion.div>

            {/* Core Values Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              {[
                { icon: Icons.ShieldCheck, label: "Trust" },
                { icon: Icons.Eye, label: "Transparency" },
                { icon: Icons.Technology, label: "Technology" },
                { icon: Icons.Intelligence, label: "Intelligence" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="flex flex-col items-center gap-3 group cursor-pointer"
                >
                  <motion.div 
                    className="w-16 h-16 rounded-full border-2 border-amber-500/50 bg-amber-500/10 flex items-center justify-center transition-all duration-300"
                    whileHover={{ 
                      scale: 1.15,
                      boxShadow: "0 0 30px rgba(218, 165, 32, 0.4), 0 0 50px rgba(255, 215, 0, 0.2)",
                    }}
                  >
                    <item.icon className="w-8 h-8" style={{ color: 'goldenrod' }} strokeWidth={1.6} />
                  </motion.div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Our Philosophy Section */}
      <SectionWrapper className="py-24 bg-white dark:bg-luxury-black transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 style={{ color: 'goldenrod' }} className="text-4xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Our Philosophy
              </h2>
              <p className="text-lg dark:text-white/90 text-slate-600 leading-relaxed mb-4">
                Our Foundation: Research. Educate. Advise. Execute.
              </p>
              <p className="text-lg text-slate-600 dark:text-white/70 leading-relaxed mb-4">
                At Ridhira Realty, we believe real estate success is built on
                knowledge.
              </p>
              <p className="text-slate-700 dark:text-white/80 mb-6 font-medium">
                Our process is clear and proven:
              </p>

              <div className="space-y-6">
                {[
                  {
                    num: "1",
                    title: "Research",
                    desc: "We analyse verified data, trends, and developer insights.",
                    icon: Icons.Search,
                  },
                  {
                    num: "2",
                    title: "Educate",
                    desc: "We empower clients with transparent comparisons and ROI projections.",
                    icon: Icons.Globe,
                  },
                  {
                    num: "3",
                    title: "Advise",
                    desc: "We craft personalized strategies aligned with your goals.",
                    icon: Icons.Briefcase,
                  },
                  {
                    num: "4",
                    title: "Execute",
                    desc: "We manage the entire process with trust, precision, and accountability.",
                    icon: Icons.ShieldCheck,
                  },
                ].map((step, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-4 items-start group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg border border-amber-500/50 bg-amber-500/10 text-amber-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {step.icon && <step.icon className="w-6 h-6" strokeWidth={1.6} />}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-slate-600 dark:text-white/70">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="mt-8 text-lg font-medium text-slate-800 dark:text-white/90 italic border-l-4 border-brand-500 pl-6"
              >
                Every decision we support is driven by intelligence, not
                impulse.
              </motion.p>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl"
            >
              <img
                src="/home/OurPhilosophy.jpg"
                alt="Our Philosophy - Strategic Real Estate Planning"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* Introduction Divider */}
      {/* <div className="h-24 md:h-32 bg-white dark:bg-luxury-black flex items-center justify-center transition-colors duration-300">
        <FloatingElement>
          <div className="w-[1px] h-12 md:h-16 bg-slate-200 dark:bg-white/20"></div>
        </FloatingElement>
      </div> */}

      {/* Services Offered Section */}
      <SectionWrapper className="py-24 bg-slate-50 dark:bg-luxury-charcoal transition-colors duration-300">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl uppercase tracking-widest font-semibold block mb-4" style={{ color: 'goldenrod' }}>
              Services Offered
            </h2>
            <h2 className="text-4xl md:text-5xl  text-slate-900 dark:text-white mb-6">
              Comprehensive Real Estate Advisory Services
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: "TrendingUp",
                title: "Investor Advisory",
                desc: "Personalized guidance to maximize ROI and portfolio growth.",
                image: "/home/services/ServicesOffered.jpg",
              },
              {
                icon: "FileCheck",
                title: "Property Valuation",
                desc: "Accurate, data-backed assessments for buying, selling, or refinancing.",
                image: "/home/services/ServicesOffered2.jpg",
              },
              {
                icon: "ShieldCheck",
                title: "Property Management",
                desc: "End-to-end management ensuring long-term returns.",
                image: "/home/services/ServicesOffered3.jpg",
              },
              {
                icon: "Globe",
                title: "Market Insights",
                desc: "Real-time analysis, reports, and investment intelligence across UAE markets.",
                image: "/home/services/ServicesOffered4.jpg",
              },
            ].map((service, idx) => {
              const IconComponent = Icons[service.icon as keyof typeof Icons];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white dark:bg-luxury-black rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 hover:border-brand-500/50 transition-all duration-300 shadow-lg dark:shadow-none hover:shadow-2xl"
                >
                  <div className="relative w-full overflow-hidden bg-slate-100 dark:bg-white/5">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 dark:text-white/70 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              View All Services
              <Icons.ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* --- LATEST WORK / OUR PROJECTS SECTION --- */}
      <SectionWrapper className="py-16 md:py-24 bg-slate-50 dark:bg-luxury-black transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-2xl uppercase tracking-widest font-semibold block mb-2" style={{ color: 'goldenrod' }}>
                Latest work{" "}
              </span>
              <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 dark:text-white">
                Our Projects
              </h2>
            </div>
            <Link
              to="/projects"
              className="group flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-slate-900 dark:text-white hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
            >
              View all Projects
              <Icons.ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="bg-white dark:bg-luxury-charcoal rounded-xl overflow-hidden border border-slate-200 dark:border-white/5"
                >
                  <Skeleton className="h-64 w-full rounded-none" />
                  <div className="p-6">
                    <Skeleton className="h-6 w-3/4 mb-4" />
                    <Skeleton className="h-4 w-1/2 mb-4" />
                    <div className="flex justify-between mt-4">
                      <Skeleton className="h-4 w-1/4" />
                      <Skeleton className="h-8 w-8 rounded-full" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {latestWork.map((project, idx) => (
                <LuxuryPropertyCard
                  key={project.id}
                  property={project}
                  index={idx}
                />
              ))}
            </div>
          )}
        </div>
      </SectionWrapper>
      {/* Featured Projects */}
      <SectionWrapper className="py-24 bg-white dark:bg-luxury-black transition-colors duration-300">
        <div className="mt-24 container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl uppercase tracking-widest font-semibold block mb-4" style={{ color: 'goldenrod' }}>
              Featured Projects
            </h2>
            <h2 className="text-4xl md:text-5xl  text-slate-900 dark:text-white mb-6">
              Curated Opportunities for Intelligent Investors
            </h2>
            {/* <p className="text-slate-600 dark:text-white/60 max-w-2xl mx-auto">Discover the next generation of investment opportunities in the UAE, from Ras Al Khaimah's visionary 2030 projects to premium resort developments.</p> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURED_PROJECTS.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 hover:border-brand-500 transition-all duration-300 shadow-md hover:shadow-xl dark:shadow-none"
              >
                <div className="relative h-80 overflow-hidden bg-slate-200 dark:bg-white/5">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-2xl  mb-2">{project.name}</h3>
                  <p className="text-sm text-white/80">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* --- WHAT IS THE NEXT & WHY DUBAI SECTION --- */}
      <SectionWrapper className="py-24 bg-slate-50 dark:bg-luxury-charcoal transition-colors duration-300">
        <div className="container mx-auto px-6">
          {/* Why Dubai & RAK - Placed Next */}
          <div className="mt-4">
            <div className="text-center mb-10">
              <h2 className="text-4xl  tracking-widest font-semibold block mb-4" style={{ color: 'goldenrod' }}>
                Why Dubai & Ras Al Khaimah
              </h2>
              <h2 className="text-4xl md:text-2xl  text-slate-900 dark:text-white mb-6">
                Two Powerhouses. One Investment Vision.
              </h2>
              <h3 className="text-xl text-slate-700 dark:text-white/90 mb-8 font-light">
                Dubai – The Global Benchmark
              </h3>
            </div>

            <div className="flex flex-col items-center gap-16 justify-center mb-24">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
                {benefits.map((benefit, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <Icons.CheckCircle className="w-5 h-5 shrink-0" style={{ color: 'goldenrod' }} />
                    <span className="text-sm md:text-base text-slate-700 dark:text-white/80">
                      {benefit}
                    </span>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: benefits.length * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <Icons.CheckCircle className="w-5 h-5 shrink-0" style={{ color: 'goldenrod' }} />
                  <span className="text-sm md:text-base text-slate-700 dark:text-white/80">
                    Unmatched Safety
                  </span>
                </motion.div>
              </div>
              <div className="flex-1 w-full">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                    className="group relative cursor-pointer"
                  >
                    <img
                      src={WHY_IMAGES.propertyTax}
                      alt="0% Tax"
                      className="w-full h-40 md:h-48 object-cover rounded-2xl border border-slate-200 dark:border-white/10 shadow-lg group-hover:shadow-2xl group-hover:border-brand-500 transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-end p-4">
                      <p className="text-white font-semibold text-sm">
                        0% Property Tax
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                    className="group relative cursor-pointer"
                  >
                    <img
                      src={WHY_IMAGES.foreignOwnership}
                      alt="100% Foreign Ownership"
                      className="w-full h-40 md:h-48 object-cover rounded-2xl border border-slate-200 dark:border-white/10 shadow-lg group-hover:shadow-2xl group-hover:border-brand-500 transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-end p-4">
                      <p className="text-white font-semibold text-sm">
                        100% Ownership
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                    className="group relative cursor-pointer"
                  >
                    <img
                      src={WHY_IMAGES.rentalYields}
                      alt="10% Yields"
                      className="w-full h-40 md:h-48 object-cover rounded-2xl border border-slate-200 dark:border-white/10 shadow-lg group-hover:shadow-2xl group-hover:border-brand-500 transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-end p-4">
                      <p className="text-white font-semibold text-sm">
                        Up to 10% Yields
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                    className="group relative cursor-pointer"
                  >
                    <img
                      src={WHY_IMAGES.infrastructure}
                      alt="World-class Infrastructure"
                      className="w-full h-40 md:h-48 object-cover rounded-2xl border border-slate-200 dark:border-white/10 shadow-lg group-hover:shadow-2xl group-hover:border-brand-500 transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-end p-4">
                      <p className="text-white font-semibold text-sm">
                        World-class Infrastructure
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                    className="group relative cursor-pointer"
                  >
                    <img
                      src={WHY_IMAGES.goldenVisa}
                      alt="Golden Visa"
                      className="w-full h-40 md:h-48 object-cover rounded-2xl border border-slate-200 dark:border-white/10 shadow-lg group-hover:shadow-2xl group-hover:border-brand-500 transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-end p-4">
                      <p className="text-white font-semibold text-sm">
                        Golden Visa Path
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* --- THE RIDHIRA DIFFERENCE --- */}
      <SectionWrapper className="py-24 bg-slate-50 dark:bg-luxury-black transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-4xl tracking-widest font-bold block mb-4" style={{ color: 'goldenrod' }}>
              The Ridhira Difference
            </span>
            <h2 className="text-2xl md:text-2xl  text-slate-900 dark:text-white mb-6">
              Why Investors Choose Ridhira
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((item, idx) => (
              // @ts-ignore
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="h-full"
              >
                <CometCard
                  className="h-full hover:border-amber-400 transition-colors duration-300"
                  contentClassName="bg-brand-900 dark:bg-brand-900 border border-brand-800"
                >
                  <div className="p-8 flex flex-col h-full">
                    <div className="mb-6">
                      {item.icon && (
                        <item.icon
                          className="w-12 h-12"
                          strokeWidth={1.5}
                          style={{ color: 'goldenrod' }}
                        />
                      )}
                    </div>
                    <h3 className="text-xl  text-white mb-4 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-brand-100/80 text-sm leading-relaxed mb-4 flex-1">
                      {item.description}
                    </p>
                    <div className="w-12 h-[2px] bg-brand-500/50 mt-auto group-hover:w-full transition-all duration-500"></div>
                  </div>
                </CometCard>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>
      {/* --- TRUSTED DEVELOPERS MARQUEE --- */}
      <SectionWrapper className="py-16 bg-slate-50 dark:bg-luxury-charcoal border-y border-slate-200 dark:border-white/5 overflow-hidden">
        <div className="text-center mb-10">
          <h2 className="text-2xl uppercase tracking-widest font-semibold block mb-4" style={{ color: 'goldenrod' }}>
            Authorized Channel Partner
          </h2>
        </div>

        <div className="relative flex overflow-hidden group">
          <div className="flex animate-scroll whitespace-nowrap gap-8 px-8 items-center">
            {[...developers, ...developers].map((dev, idx) => (
              <div
                key={`${dev.name}-${idx}`}
                className="flex-shrink-0 bg-white p-1 rounded-lg shadow-sm border border-slate-100 dark:border-white/10 opacity-90 hover:opacity-100 transition-opacity"
              >
                <img
                  src={dev.logo}
                  alt={dev.name}
                  className="h-24 md:h-24 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
      {/* <AboutSection /> */}

      {/* <SectionWrapper>
        <VideoShowcase />
      </SectionWrapper> */}

      {/* <GallerySection /> */}

      {/* --- NEW CUSTOM CTA SECTION --- */}
      <SectionWrapper id="contact" className="py-60 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/service/burj.jpg"
            className="w-full h-full"
            alt="Dubai Burj Khalifa"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Ready to Begin Your Property Journey?</h1>
          <p className="text-white/70 max-w-2xl mx-auto mb-10 text-lg font-light">
            Let Ridhira Realty guide you through the UAE’s most promising
            investment destinations — backed by research, clarity, and trust.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contact"
              className="bg-white text-brand-900 px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-brand-500 hover:text-white transition-colors shadow-lg"
            >
              Schedule a Free Consultation
            </Link>
            <a
              href="https://wa.me/971561705995"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-[#128C7E] transition-colors shadow-lg flex items-center justify-center gap-2"
            >
              <Icons.MessageSquare className="w-5 h-5" />
              Whatsapp Now
            </a>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
};

export default Home;
