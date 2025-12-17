/**
 * RecentWorkCard Component
 * Card untuk menampilkan recent work dengan huruf besar bergradient
 * Sesuai desain referensi
 */
const RecentWorkCard = ({ title, letter, gradient, url }) => {
  return (
    <a
      href={url}
      className="group block bg-surface hover:bg-elevated rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-black/20"
    >
      <div className="flex items-center gap-4 p-4">
        {/* Letter with gradient background */}
        <div className={`relative w-20 h-20 lg:w-24 lg:h-24 rounded-xl bg-linear-to-br ${gradient} flex items-center justify-center overflow-hidden`}>
          {/* Large letter */}
          <span className="text-5xl lg:text-6xl font-bold text-white/90 lowercase">
            {letter}
          </span>
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* Project Info */}
        <div className="flex-1 min-w-0">
          <h4 className="text-white font-semibold text-base lg:text-lg truncate group-hover:text-accent transition-colors">
            {title}
          </h4>
          <p className="text-slate-400 text-sm mt-1">View Project</p>
        </div>

        {/* Arrow Icon */}
        <div className="shrink-0 w-10 h-10 rounded-full bg-elevated group-hover:bg-accent flex items-center justify-center transition-all duration-300">
          <svg 
            className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors -rotate-45" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </div>
    </a>
  );
};

export default RecentWorkCard;
