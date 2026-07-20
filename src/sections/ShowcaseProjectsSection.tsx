import { Github } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import LiveProjectButton from '../components/LiveProjectButton';

interface Project {
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
}

/**
 * Add your own projects here — each entry becomes a card below.
 * - `liveUrl` is optional. Leave it out and the "Live Demo" button shows
 *   disabled instead of linking anywhere.
 * - `githubUrl` is optional too — omit it to hide the GitHub icon on that card.
 */
const PROJECTS: Project[] = [
  {
  title: 'V6 Turbo AI',
  description:
    'A Full-Stack Formula 1 Intelligence Platform that processes live race data, analyzes FIA race-control events, visualizes circuits and championship standings, and generates AI-powered race reports.',
  tech: ['Python', 'Flask', 'Gemini API', 'OpenF1 API', 'JavaScript', 'Leaflet'],
  liveUrl: '',
  githubUrl: 'https://github.com/PratyushShrestha-web/f1-AI-Summarizer',
},
  {
    title: 'Munavya',
    description:
      'A MERN-Based Platform for Business Promotion, Profit & Loss Analysis, and Smart Insights',
    tech: ['React', 'Express.js', 'Mongodb','Nodejs',],
    liveUrl: 'https://munavya.vercel.app/',
    githubUrl: 'https://github.com/PratyushShrestha-web/Munavya',
  },

  
];

function TechTag({ label }: { label: string }) {
  return (
    <span className="text-[10px] xs:text-xs sm:text-sm uppercase tracking-wide text-[#BBCCD7] border border-[#D7E2EA]/25 rounded-full px-2 xs:px-3 py-1">
      {label}
    </span>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <FadeIn delay={index * 0.1}>
      <div className="flex flex-col gap-3 xs:gap-4 sm:gap-5 rounded-lg xs:rounded-2xl sm:rounded-[30px] md:rounded-[36px] border-2 border-[#D7E2EA] p-3 xs:p-4 sm:p-6 md:p-8 lg:p-10 h-full">
        <div className="flex items-start justify-between gap-3 xs:gap-4">
          <span
            className="hero-heading font-black leading-none"
            style={{ fontSize: 'clamp(1.25rem, 3.5vw, 3.5rem)' }}
          >
            {String(index + 1).padStart(2, '0')}
          </span>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${project.title} on GitHub`}
              className="w-8 h-8 xs:w-9 xs:h-9 sm:w-11 sm:h-11 rounded-full border border-[#D7E2EA]/30 flex items-center justify-center text-[#BBCCD7] transition-colors duration-200 hover:bg-[#D7E2EA]/10 flex-shrink-0"
            >
              <Github size={16} strokeWidth={1.5} className="xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
            </a>
          )}
        </div>

        <h3 className="text-[#D7E2EA] uppercase font-medium text-base xs:text-lg sm:text-xl md:text-2xl">
          {project.title}
        </h3>

        <p className="text-[#D7E2EA] font-light leading-relaxed opacity-70 text-xs xs:text-sm sm:text-base flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 xs:gap-2">
          {project.tech.map((t) => (
            <TechTag key={t} label={t} />
          ))}
        </div>

        <div>
          <LiveProjectButton href={project.liveUrl} label="Live Demo" />
        </div>
      </div>
    </FadeIn>
  );
}

export default function ShowcaseProjectsSection() {
  return (
    <section
      id="projects"
      className="relative bg-[#0C0C0C] rounded-t-2xl xs:rounded-t-3xl sm:rounded-t-[40px] md:rounded-t-[50px] lg:rounded-t-[60px] -mt-6 xs:-mt-8 sm:-mt-10 md:-mt-12 lg:-mt-14 z-10 px-3 xs:px-4 sm:px-8 md:px-10 py-12 xs:py-16 sm:py-20 md:py-28 lg:py-32"
    >
      <FadeIn delay={0}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-8 xs:mb-12 sm:mb-16 md:mb-24 lg:mb-28"
          style={{ fontSize: 'clamp(2rem, 9vw, 160px)' }}
        >
          Projects
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-3 xs:gap-4 sm:gap-6 md:gap-8">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
