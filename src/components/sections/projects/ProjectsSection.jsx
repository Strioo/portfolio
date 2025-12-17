import { projects } from '../../../lib/data';

/**
 * ProjectsSection Component
 * Menampilkan portfolio projects dengan design modern
 */
const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="relative py-20 lg:py-32 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-150 h-150 bg-blue-500/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-125 h-125 bg-cyan-500/3 rounded-full blur-3xl" />
      </div>

      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6">
            <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <span className="text-accent text-sm font-bold">MY PORTFOLIO</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Showcasing my best work in web development, from environmental education to smart village solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

/**
 * ProjectCard Component
 * Card untuk menampilkan individual project
 */
const ProjectCard = ({ project, index }) => {
  return (
    <div
      className="group relative bg-surface border border-slate-700/50 rounded-2xl overflow-hidden transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/10 hover:-translate-y-1"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Project Image */}
      <div className="relative w-full h-56 overflow-hidden bg-linear-to-br from-slate-800 to-slate-900">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 240"%3E%3Crect fill="%23374151" width="400" height="240"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%239ca3af" font-size="18" font-weight="bold"%3E${project.title}%3C/text%3E%3C/svg%3E%3C/svg%3E`;
          }}
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-surface via-surface/60 to-transparent opacity-90" />
        
        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-4 right-4 px-3 py-1.5 bg-accent/90 backdrop-blur-sm rounded-full">
            <span className="text-white text-xs font-bold">Featured</span>
          </div>
        )}
        
        {/* Category badge */}
        <div className="absolute top-4 left-4 px-3 py-1.5 bg-black/60 backdrop-blur-sm rounded-full border border-white/10">
          <span className="text-white text-xs font-semibold">{project.category}</span>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        
        <p className="text-slate-300 text-sm leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.techStack.map((tech, idx) => (
            <span 
              key={idx}
              className="px-3 py-1 bg-elevated border border-slate-700/50 text-slate-300 text-xs font-semibold rounded-lg"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-accent hover:bg-accent-hover text-white text-sm font-semibold rounded-lg transition-all duration-300 hover:scale-105"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              <span>Live Demo</span>
            </a>
          )}
          
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${project.liveUrl ? '' : 'flex-1'} inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-elevated hover:bg-slate-700 border border-slate-700/50 hover:border-slate-600 text-white text-sm font-semibold rounded-lg transition-all duration-300`}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
