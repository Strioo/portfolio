/**
 * StatItem Component
 * Untuk menampilkan statistik seperti "10+ Projects", "2+ Years", dll
 */
const StatItem = ({ value, label, icon }) => {
  return (
    <div className="flex flex-col items-center sm:items-start text-center sm:text-left group">
      <div className="flex items-center gap-2 mb-1">
        {icon && (
          <span className="text-blue-400 group-hover:text-blue-300 transition-colors">
            {icon}
          </span>
        )}
        <span className="text-2xl sm:text-3xl font-bold text-white group-hover:text-blue-400 transition-colors">
          {value}
        </span>
      </div>
      <span className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
        {label}
      </span>
    </div>
  );
};

export default StatItem;
