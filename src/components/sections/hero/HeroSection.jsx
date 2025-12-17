import { personalInfo, socialLinks } from '../../../lib/data';
import HeroStatsCard from './HeroStatsCard';

/**
 * HeroSection Component
 * Layout 2 kolom sesuai desain referensi PERSIS:
 * - Kolom 1 (Kiri): Foto + Stats + Label Role
 * - Kolom 2 (Kanan): Circle Badge + Nama + Tagline + Deskripsi + CTA + Social
 * 
 * Responsif:
 * - lg: 2 kolom horizontal
 * - md/sm: Stack vertikal
 */
const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center py-16 lg:py-20 overflow-hidden"
    >
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-150 h-150 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-125 h-125 bg-sky-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom w-full">
        {/* Main 3-Column Grid Layout - Adjusted spacing */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.6fr_auto_auto] gap-8 lg:gap-16 xl:gap-20 items-center mb-12 lg:mb-16">
          
          {/* Column 1: Text Content (LEFT) - Reduced width */}
          <div className="order-1 lg:order-1 text-center lg:text-left">
            {/* Name - Large */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-4 lg:mb-6">
              {personalInfo.name}
            </h1>
            
            {/* Decorative Line */}
            <div className="max-w-full h-1 bg-accent mb-6 lg:mb-8 mx-auto lg:mx-0" />
            
            {/* Description */}
            <p className="text-slate-300 text-base lg:text-lg leading-relaxed max-w-md">
              {personalInfo.description}
            </p>
          </div>

          {/* Column 2: Photo + Tech Cards (CENTER) - More space */}
          <div className="order-2 lg:order-2 flex justify-center">
            <HeroStatsCard />
          </div>

          {/* Column 3: Circle Badge + CTA (RIGHT) - Reordered */}
          <div className="order-3 lg:order-3 flex flex-col items-center lg:items-start gap-6 lg:gap-8">
            {/* Circle Badge - Moved to top */}
            <div className="relative w-24 h-24 lg:w-32 lg:h-32">
              <svg 
                className="w-full h-full animate-spin-slow" 
                viewBox="0 0 100 100"
              >
                <defs>
                  <path
                    id="circlePathHero"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  />
                </defs>
                <text className="fill-slate-400 text-[7.5px] uppercase tracking-[0.3em] font-semibold">
                  <textPath href="#circlePathHero">
                    {personalInfo.circleText}
                  </textPath>
                </text>
              </svg>
              {/* Center star icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-10 h-10 lg:w-14 lg:h-14 bg-accent rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30">
                  <svg className="w-5 h-5 lg:w-7 lg:h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* CTA Button - Moved to bottom */}
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border-2 border-accent hover:bg-accent text-accent hover:text-white font-semibold rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
            >
              <span>Contact me</span>
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Social Buttons Section - Separated below, full width, centered */}
        <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-6">
          {socialLinks.map((social) => (
            <a
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-7 py-4 bg-transparent border-2 border-slate-700 hover:border-accent rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
            >
              <div className="w-7 h-7 flex items-center justify-center text-slate-400 group-hover:text-accent transition-colors">
                <SocialIcon name={social.icon} />
              </div>
              <span className="text-base font-semibold text-slate-300 group-hover:text-white transition-colors">
                {social.name}
              </span>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

/**
 * SocialIcon Component
 * Render icon berdasarkan nama
 */
const SocialIcon = ({ name }) => {
  const icons = {
    github: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
    linkedin: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    instagram: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  };

  return icons[name] || null;
};

export default HeroSection;
