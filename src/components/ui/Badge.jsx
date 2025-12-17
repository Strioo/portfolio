/**
 * Badge Component
 * Untuk menampilkan label/status seperti "Frontend Developer" atau "Available for Freelance"
 */
const Badge = ({ children, variant = 'default', icon }) => {
  const variants = {
    default: 'bg-slate-800/80 text-slate-300 border-slate-700/50',
    primary: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    success: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    accent: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  };

  return (
    <span
      className={`
        inline-flex items-center gap-2 px-4 py-2 
        text-sm font-medium rounded-full border
        backdrop-blur-sm transition-all duration-300
        hover:scale-105
        ${variants[variant]}
      `}
    >
      {icon && <span className="text-current">{icon}</span>}
      {children}
    </span>
  );
};

export default Badge;
