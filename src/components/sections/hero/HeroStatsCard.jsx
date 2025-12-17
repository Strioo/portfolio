import { personalInfo } from '../../../lib/data';

/**
 * HeroStatsCard Component
 * Foto profil dengan background kreatif organic shape
 * + Floating tech stack cards dengan real icons
 * + Label role di bawah
 */
const HeroStatsCard = () => {
  return (
    <div className="relative w-full max-w-112.5 mx-auto">
      {/* Creative Organic Background Shape - Solid dengan bentuk unik */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        {/* Main Background Shape - Organic blob */}
        <div 
          className="absolute w-[95%] h-[85%]"
          style={{
            background: 'linear-gradient(135deg, rgba(30, 39, 54, 0.6) 0%, rgba(20, 27, 45, 0.8) 100%)',
            borderRadius: '63% 37% 54% 46% / 55% 48% 52% 45%',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
          }}
        />
        
        {/* Accent glow behind */}
        <div 
          className="absolute w-full h-[90%] -z-10"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(34, 197, 94, 0.15) 0%, transparent 70%)',
            borderRadius: '60% 40% 50% 50% / 50% 45% 55% 50%',
            filter: 'blur(30px)',
          }}
        />
      </div>

      {/* Photo Container - Menembus background */}
      <div className="relative">
        {/* Main Photo with proper aspect ratio */}
        <div className="relative w-full aspect-3/4 max-w-95 mx-auto overflow-hidden rounded-[2.5rem]">
          <img
            src="/images/my-photo-hero-section.png"
            alt={personalInfo.name}
            className="w-full h-full object-cover object-top shadow-2xl relative z-10"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500"%3E%3Crect fill="%23374151" width="400" height="500"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%239ca3af" font-size="20"%3EPhoto%3C/text%3E%3C/svg%3E';
            }}
          />
          
          {/* Gradient Overlay untuk menutupi bagian bawah */}
          <div 
            className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none z-20"
            style={{
              background: 'linear-gradient(to bottom, transparent 0%, rgba(11, 17, 32, 0.4) 50%, rgba(11, 17, 32, 0.95) 100%)',
            }}
          />
        </div>

        {/* Floating Tech Stack Cards - Posisi diperbaiki agar tidak tertutup */}
        
        {/* Card 1 - React - Top Left */}
        <div className="absolute top-4 -left-8 lg:top-6 lg:-left-12 animate-float z-10">
          <div className="group relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-[#61dafb] rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
            
            {/* Card */}
            <div className="relative bg-linear-to-br from-[#1a2332] to-[#141b2d] backdrop-blur-xl border border-slate-700/50 rounded-2xl p-3 shadow-2xl hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#61dafb]/10 rounded-xl flex items-center justify-center border border-[#61dafb]/20">
                  <img 
                    src="/icons/reactjs.png" 
                    alt="React" 
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <span className="text-sm font-bold text-white pr-2">React</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 - TypeScript - Top Right */}
        <div className="absolute top-8 -right-8 lg:top-12 lg:-right-12 animate-float-delayed">
          <div className="group relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-[#3178c6] rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
            
            {/* Card */}
            <div className="relative bg-linear-to-br from-[#1a2332] to-[#141b2d] backdrop-blur-xl border border-slate-700/50 rounded-2xl p-3 shadow-2xl hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#3178c6]/10 rounded-xl flex items-center justify-center border border-[#3178c6]/20">
                  <img 
                    src="/icons/Typescript.png" 
                    alt="TypeScript" 
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <span className="text-sm font-bold text-white pr-2">TypeScript</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 - Tailwind - Bottom Left - Adjusted position */}
        <div className="absolute bottom-32 -left-8 lg:bottom-36 lg:-left-12 animate-float z-10">
          <div className="group relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-[#38bdf8] rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
            
            {/* Card */}
            <div className="relative bg-linear-to-br from-[#1a2332] to-[#141b2d] backdrop-blur-xl border border-slate-700/50 rounded-2xl p-3 shadow-2xl hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#38bdf8]/10 rounded-xl flex items-center justify-center border border-[#38bdf8]/20">
                  <img 
                    src="/icons/tailwindcss.png" 
                    alt="Tailwind CSS" 
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <span className="text-sm font-bold text-white pr-2">Tailwind</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Label Role di bawah foto */}
      <div className="mt-8 text-center">
        <span className="inline-block text-slate-400 text-xs lg:text-sm font-semibold tracking-[0.25em] uppercase">
          {personalInfo.roleLabel}
        </span>
      </div>
    </div>
  );
};

export default HeroStatsCard;
