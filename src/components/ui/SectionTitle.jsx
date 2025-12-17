/**
 * SectionTitle Component
 * Judul section yang konsisten di seluruh halaman
 */
const SectionTitle = ({ title, subtitle, align = 'center' }) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <div className={`mb-12 sm:mb-16 ${alignmentClasses[align]}`}>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
