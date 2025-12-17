/**
 * Card Component
 * Card dengan efek glass morphism untuk berbagai konten
 */
const Card = ({ children, className = '', hover = true }) => {
  return (
    <div
      className={`
        glass-card p-6 sm:p-8
        ${hover ? 'hover:border-slate-700/80 hover:bg-slate-800/50 transition-all duration-300' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;
