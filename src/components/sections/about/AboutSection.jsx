import { education, experience, certificates } from '../../../lib/data';

/**
 * AboutSection Component
 * Menampilkan Education, Experience, dan Certificates
 */
const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative py-20 lg:py-32 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-125 h-125 bg-blue-500/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-100 h-100 bg-sky-500/3 rounded-full blur-3xl" />
      </div>

      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            My journey in technology and professional development
          </p>
        </div>

        {/* Education & Experience - Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20 lg:mb-28">
          {/* Education Column */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <div className="w-12 h-12 bg-elevated rounded-xl flex items-center justify-center border border-slate-700/50 shrink-0">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white">Education</h3>
            </div>

            {/* Timeline - Aligned with icon center (24px from left) */}
            <div className="relative pl-6">
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div key={edu.id} className="relative pl-8">
                    {/* Timeline dot - aligned with icon center */}
                    <div 
                      className="absolute w-3 h-3 bg-accent rounded-full ring-4 ring-body" 
                      style={{ left: '-6px', top: '2px' }}
                    />
                    
                    {/* Vertical line - stops before next dot */}
                    {index !== education.length - 1 && (
                      <div 
                        className="absolute w-0.5 bg-slate-700/50" 
                        style={{ 
                          left: '-0.5px',
                          top: '20px',
                          height: 'calc(100% + 12px)'
                        }}
                      />
                    )}
                    
                    {/* Content */}
                    <div className="pb-8">
                      <h4 className="text-xl font-bold text-white mb-2">{edu.institution}</h4>
                      <p className="text-accent text-sm font-semibold mb-3">{edu.period}</p>
                      <p className="text-slate-300 leading-relaxed">{edu.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Experience Column */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <div className="w-12 h-12 bg-elevated rounded-xl flex items-center justify-center border border-slate-700/50 shrink-0">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white">Experience</h3>
            </div>

            {/* Timeline - Aligned with icon center (24px from left) */}
            <div className="relative pl-6">
              <div className="space-y-8">
                {experience.map((exp, index) => (
                  <div key={exp.id} className="relative pl-8">
                    {/* Timeline dot - aligned with icon center */}
                    <div 
                      className="absolute w-3 h-3 bg-accent rounded-full ring-4 ring-body" 
                      style={{ left: '-6px', top: '2px' }}
                    />
                    
                    {/* Vertical line - stops before next dot */}
                    {index !== experience.length - 1 && (
                      <div 
                        className="absolute w-0.5 bg-slate-700/50" 
                        style={{ 
                          left: '-0.5px',
                          top: '20px',
                          height: 'calc(100% + 12px)'
                        }}
                      />
                    )}
                    
                    {/* Content */}
                    <div className="pb-8">
                      <h4 className="text-xl font-bold text-white mb-1">{exp.position}</h4>
                      <p className="text-slate-400 text-base font-semibold mb-2">{exp.company}</p>
                      <p className="text-accent text-sm font-semibold mb-3">{exp.period}</p>
                      
                      {exp.isComingSoon ? (
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                          <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-accent text-sm font-semibold">Coming Soon</span>
                        </div>
                      ) : (
                        <>
                          <p className="text-slate-300 leading-relaxed mb-4">{exp.description}</p>
                          {exp.achievements && exp.achievements.length > 0 && (
                            <ul className="space-y-2">
                              {exp.achievements.map((achievement, achievementIndex) => (
                                <li key={achievementIndex} className="flex items-start gap-2 text-slate-300">
                                  <span className="text-accent mt-1">•</span>
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Certificates Section */}
        <div>
          <div className="flex items-center gap-3 mb-10">
            <div className="w-12 h-12 bg-elevated rounded-xl flex items-center justify-center border border-slate-700/50">
              <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-white">Certificates</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="group relative bg-surface border border-slate-700/50 rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/20 hover:-translate-y-2"
              >
                {/* Certificate Image */}
                {cert.image ? (
                  <div className="relative w-full h-52 overflow-hidden bg-linear-to-br from-slate-800 to-slate-900">
                    <img 
                      src={cert.image} 
                      alt={cert.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200"%3E%3Crect fill="%23374151" width="400" height="200"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%239ca3af" font-size="16"%3ECertificate%3C/text%3E%3C/svg%3E';
                      }}
                    />
                    {/* Enhanced gradient overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-surface via-surface/60 to-transparent opacity-90" />
                    
                  </div>
                ) : (
                  <div className="w-full h-52 bg-linear-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <p className="text-slate-500 text-sm">Certificate Image</p>
                    </div>
                  </div>
                )}

                {/* Certificate Info */}
                <div className="p-6 relative z-10">
                  {/* Date badge */}
                  <div className="inline-flex items-center gap-1.5 py-1.5 mb-3">
                    <svg className="w-3.5 h-3.5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-accent text-xs font-bold">{cert.date}</span>
                  </div>

                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-accent transition-colors line-clamp-2 leading-tight">
                    {cert.name}
                  </h4>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-1 h-1 bg-accent rounded-full" />
                    <p className="text-slate-400 text-sm font-semibold">{cert.issuer}</p>
                  </div>
                  
                  <p className="text-slate-300 text-sm leading-relaxed line-clamp-3">{cert.description}</p>
                </div>

                {/* Animated border glow effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-accent/10 via-transparent to-accent/5" />
                </div>

                {/* Corner accent decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 right-0 w-full h-full bg-linear-to-bl from-accent/10 to-transparent rounded-bl-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;