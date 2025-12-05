<div align="center">
  
  # 🏢 Ridhira Realty
  
  ### *Your Gateway to Premium Real Estate*
  
  <p align="center">
    <strong>A Modern, AI-Powered Real Estate Platform</strong>
  </p>

  <p align="center">
    <a href="#-features">Features</a> •
    <a href="#-tech-stack">Tech Stack</a> •
    <a href="#-getting-started">Getting Started</a> •
    <a href="#-project-structure">Project Structure</a> •
    <a href="#-deployment">Deployment</a>
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/React-19.2.1-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
    <img src="https://img.shields.io/badge/TypeScript-5.8.2-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Vite-6.2.0-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
    <img src="https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind" />
  </p>

</div>

---

## 🌟 Overview

**Ridhira Realty** is a cutting-edge real estate platform that combines elegant design with powerful AI capabilities. Built with modern web technologies, it provides an immersive experience for property browsing, detailed listings, and intelligent customer support.

Whether you're searching for your dream home, exploring investment opportunities, or seeking property insights, Ridhira Realty delivers a seamless and interactive experience.

---

## ✨ Features

### 🏠 **Property Showcase**
- **Dynamic Property Grid** - Browse through beautifully displayed property listings
- **Detailed Property Pages** - Comprehensive information with high-quality images
- **Advanced Filtering** - Search and filter properties by location, price, type, and more
- **Parallax Image Galleries** - Stunning visual presentations with smooth animations

### 🤖 **AI-Powered Chat**
- **Intelligent Assistant** - Gemini AI integration for instant property queries
- **24/7 Support** - Get answers about properties, pricing, and availability
- **Natural Conversations** - Context-aware responses tailored to your needs
- **Floating Chat Widget** - Accessible from any page

### 💼 **Business Solutions**
- **Services Portfolio** - Comprehensive real estate services showcase
- **Project Highlights** - Featured developments and ongoing projects
- **Insights & Blog** - Market trends, tips, and real estate news
- **About Us** - Company history, mission, and team information

### 🎨 **User Experience**
- **Responsive Design** - Seamless experience across all devices
- **Smooth Animations** - Framer Motion powered interactions
- **Modern UI Components** - Aceternity UI and custom components
- **Fast Performance** - Optimized with Vite for lightning-fast load times
- **Interactive Maps** - Dotted world map for global property locations

### 📞 **Contact & Communication**
- **Contact Forms** - Easy inquiry submission with API integration
- **Multiple Touchpoints** - Email, phone, and social media connections
- **Newsletter Signup** - Stay updated with latest listings

---

## 🛠️ Tech Stack

### **Frontend Framework**
- **React 19.2.1** - Latest React with concurrent features
- **TypeScript 5.8.2** - Type-safe development
- **React Router 6.22.3** - Client-side routing

### **Build Tools**
- **Vite 6.2.0** - Next-generation frontend tooling
- **@vitejs/plugin-react** - Fast Refresh and JSX support

### **Styling & UI**
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion 12.23.25** - Production-ready animation library
- **Lucide React 0.555.0** - Beautiful & consistent icons
- **Custom UI Components** - Aceternity UI integration

### **AI & Backend**
- **Google Generative AI (@google/genai 1.31.0)** - Gemini AI integration
- **API Routes** - Contact and chat endpoints

### **Utilities**
- **clsx 2.1.1** - Conditional className utility
- **tailwind-merge 3.4.0** - Merge Tailwind classes intelligently

---

## 🚀 Getting Started

### **Prerequisites**

Before you begin, ensure you have the following installed:
- **Node.js** (v18.0.0 or higher)
- **npm** or **yarn** or **pnpm**
- **Gemini API Key** (Get it from [Google AI Studio](https://ai.google.dev/))

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/lexonit/ridhirarealty.git
   cd ridhirarealty
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173`

### **Available Scripts**

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

---

## 📁 Project Structure

```
ridhirarealty/
├── app/                      # Next.js style API routes
│   └── api/
│       ├── chat/            # AI chat endpoint
│       └── contact/         # Contact form endpoint
├── components/              # React components
│   ├── AboutSection.tsx     # About company section
│   ├── AIChat.tsx          # AI chatbot component
│   ├── chat-widget.tsx     # Floating chat widget
│   ├── ContactSection.tsx  # Contact form
│   ├── features.tsx        # Features showcase
│   ├── Footer.tsx          # Footer component
│   ├── GallerySection.tsx  # Image gallery
│   ├── Hero.tsx            # Hero section
│   ├── Navbar.tsx          # Navigation bar
│   ├── PropertyGrid.tsx    # Property listings grid
│   ├── ScrollToTop.tsx     # Scroll to top button
│   ├── VideoShowcase.tsx   # Video player
│   └── ui/                 # UI component library
│       ├── AceternityUI.tsx
│       ├── animated-testimonials.tsx
│       ├── dotted-map.tsx
│       ├── flip-words.tsx
│       ├── HeroParallax.tsx
│       ├── infinite-moving-cards.tsx
│       ├── moving-border.tsx
│       ├── ParallaxScroll.tsx
│       └── world-map.tsx
├── pages/                   # Page components
│   ├── Home.tsx            # Homepage
│   ├── AboutPage.tsx       # About us page
│   ├── PropertiesPage.tsx  # Properties listing
│   ├── PropertyDetailsPage.tsx  # Property details
│   ├── ProjectsPage.tsx    # Projects showcase
│   ├── ServicesPage.tsx    # Services offered
│   ├── InsightsPage.tsx    # Blog & insights
│   ├── BlogPostPage.tsx    # Individual blog post
│   └── ContactPage.tsx     # Contact page
├── services/                # Service layer
│   ├── aboutService.ts     # About data service
│   ├── blogService.ts      # Blog data service
│   ├── contactService.ts   # Contact form service
│   ├── geminiService.ts    # AI integration service
│   ├── homeService.ts      # Homepage data
│   ├── insightsService.ts  # Insights data
│   ├── propertyService.ts  # Property data
│   ├── servicePageService.ts # Services data
│   └── mockData.ts         # Mock data for development
├── public/                  # Static assets
│   └── logo/               # Brand logos
├── App.tsx                 # Main app component
├── index.tsx               # Entry point
├── constants.ts/tsx        # App constants
├── types.ts                # TypeScript types
├── utils.ts                # Utility functions
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Project dependencies
```

---

## 🎨 Key Features Breakdown

### **1. Hero Section with Parallax**
- Eye-catching hero section with parallax scrolling effects
- Dynamic text animations using Framer Motion
- Call-to-action buttons for immediate engagement

### **2. Property Management System**
- Service-based architecture for data management
- Mock data support for development
- Easy integration with backend APIs
- Filtering and sorting capabilities

### **3. AI Chat Integration**
- Real-time chat with Gemini AI
- Context-aware property recommendations
- Natural language processing for queries
- Floating widget for easy access

### **4. Responsive Design**
- Mobile-first approach
- Tablet and desktop optimizations
- Touch-friendly interactions
- Consistent experience across devices

### **5. Performance Optimizations**
- Code splitting with React Router
- Lazy loading of images
- Optimized bundle size
- Fast page transitions

---

## 🌐 Deployment

### **Build for Production**

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### **Preview Production Build**

```bash
npm run preview
```

### **Deployment Platforms**

The app can be deployed to various platforms:

- **Vercel** (Recommended)
  ```bash
  npm i -g vercel
  vercel
  ```

- **Netlify**
  - Connect your GitHub repository
  - Build command: `npm run build`
  - Publish directory: `dist`

- **GitHub Pages**
  - Configure base in `vite.config.ts`
  - Use GitHub Actions for automated deployment

- **Custom Server**
  - Upload `dist` folder to your web server
  - Configure server to serve `index.html` for all routes

### **Environment Variables for Production**

Ensure to set the following in your deployment platform:
```
GEMINI_API_KEY=your_production_api_key
```

---

## 🔧 Configuration

### **Vite Configuration**

Customize `vite.config.ts` for:
- Build optimizations
- Plugin configurations
- Path aliases
- Environment variables

### **TypeScript Configuration**

`tsconfig.json` is configured for:
- Strict type checking
- Module resolution
- Path mappings
- JSX support

---

## 🤝 Contributing

We welcome contributions to Ridhira Realty! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to the branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

### **Development Guidelines**
- Follow TypeScript best practices
- Write clean, maintainable code
- Add comments for complex logic
- Test across different devices
- Update documentation as needed

---

## 📝 License

This project is proprietary software developed for Ridhira Realty.

---

## 📧 Contact & Support

For questions, support, or business inquiries:

- **Website**: [www.ridhirarealty.com](https://www.ridhirarealty.com)
- **Email**: info@ridhirarealty.com
- **GitHub**: [@lexonit](https://github.com/lexonit)

---

## 🙏 Acknowledgments

- **Built by**: [Lexonit](https://github.com/lexonit)
- **UI Components**: Aceternity UI
- **AI Powered by**: Google Gemini
- **Icons**: Lucide React
- **Animations**: Framer Motion

---

<div align="center">
  
  ### Made with ❤️ by Lexonit
  
  <p>
    <strong>Empowering Real Estate with Technology</strong>
  </p>

  ⭐ **Star this repo if you find it helpful!** ⭐

</div>
