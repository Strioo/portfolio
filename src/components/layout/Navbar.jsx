import { useState } from 'react';
import { navLinks } from '../../lib/data';

/**
 * Navbar Component
 * Navigasi utama dengan responsive hamburger menu
 */
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="bg-body/95 backdrop-blur-2xl border-b border-slate-800/60 shadow-lg shadow-black/5">
        <div className="container-custom">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo - Enhanced Design */}
            <a 
              href="#hero" 
              className="group relative flex items-center gap-2 text-2xl lg:text-3xl font-bold text-white hover:text-accent transition-all duration-300"
            >
              <div className="relative">
                <span className="relative z-10">Wahid</span>
                <span className="text-accent">.</span>
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
              </div>
            </a>

            {/* Desktop Navigation - Enhanced */}
            <div className="hidden md:flex items-center gap-2 lg:gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className="relative px-4 lg:px-5 py-2.5 text-slate-300 hover:text-white text-base lg:text-lg font-semibold transition-all duration-300 group"
                >
                  <span className="relative z-10">{link.name}</span>
                  {/* Underline effect */}
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-3/4 rounded-full" />
                  {/* Hover background */}
                  <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 rounded-lg transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* CTA Button - Desktop Enhanced */}
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-accent hover:bg-accent-hover text-white text-sm font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-accent/20 hover:shadow-accent/40 hover:scale-105 hover:-translate-y-0.5"
            >
              <span>My Works</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>

            {/* Mobile Menu Button - Enhanced */}
            <button
              className="md:hidden relative p-3 text-slate-300 hover:text-white transition-colors rounded-lg hover:bg-accent/10"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation - Enhanced */}
          {isOpen && (
            <div className="md:hidden py-6 border-t border-slate-800/50 animate-fadeIn">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    className="relative px-4 py-3.5 text-slate-300 hover:text-white text-lg font-semibold transition-all duration-300 rounded-xl hover:bg-accent/10 hover:translate-x-2 group"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="relative z-10">{link.name}</span>
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-accent group-hover:h-8 transition-all duration-300 rounded-full" />
                  </a>
                ))}
                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center justify-center gap-2 px-5 py-3 bg-accent hover:bg-accent-hover text-white text-base font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-accent/20 hover:shadow-accent/40"
                  onClick={() => setIsOpen(false)}
                >
                  <span>My Works</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
