/**
 * SecondaryLink Component
 * Link sekunder untuk navigasi atau CTA tambahan
 */

const ArrowIcon = () => (
  <svg
    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const SecondaryLink = ({ children, href, onClick, className = '' }) => {
  const baseStyles = `
    inline-flex items-center gap-2
    text-slate-300 hover:text-white
    font-medium text-sm sm:text-base
    transition-all duration-300
    group
    ${className}
  `;

  if (href) {
    return (
      <a href={href} className={baseStyles}>
        {children}
        <ArrowIcon />
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseStyles}>
      {children}
      <ArrowIcon />
    </button>
  );
};

export default SecondaryLink;
