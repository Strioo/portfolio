/**
 * PrimaryButton Component
 * Tombol utama untuk CTA (Call-to-Action)
 */
const PrimaryButton = ({ children, href, onClick, className = '' }) => {
  const baseStyles = `
    inline-flex items-center justify-center gap-2
    px-6 py-3 sm:px-8 sm:py-4
    bg-gradient-to-r from-blue-600 to-blue-500
    hover:from-blue-500 hover:to-blue-400
    text-white font-semibold text-sm sm:text-base
    rounded-xl shadow-lg shadow-blue-500/25
    transition-all duration-300 ease-out
    hover:shadow-xl hover:shadow-blue-500/30
    hover:scale-[1.02] active:scale-[0.98]
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-950
    ${className}
  `;

  if (href) {
    return (
      <a href={href} className={baseStyles}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseStyles}>
      {children}
    </button>
  );
};

export default PrimaryButton;
