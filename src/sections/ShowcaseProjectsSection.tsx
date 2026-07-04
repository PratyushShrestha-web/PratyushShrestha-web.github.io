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
    title: 'Project Name One',
    description:
      'A short, punchy description of what this project does and the problem it solves. Swap this out with your real project.',
    tech: ['Python', 'scikit-learn', 'Pandas'],
    liveUrl: 'https://your-live-demo-link.com',
    githubUrl: 'https://github.com/pratyushshrestha/project-one',
  },
  {
    title: 'Project Name Two',
    description:
      'Another project description. Keep it to 1-2 sentences focused on the outcome, not just the tech stack.',
    tech: ['Java', 'MySQL'],
    liveUrl: 'https://your-live-demo-link.com',
    githubUrl: 'https://github.com/pratyushshrestha/project-two',
  },
];

function TechTag({ label }: { label: string }) {
  return (
    <span className="text-xs sm:text-sm uppercase tracking-wide text-[#BBCCD7] border border-[#D7E2EA]/25 rounded-full px-3 py-1">
      {label}
    </span>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <FadeIn delay={index * 0.1}>
      <div className="flex flex-col gap-5 rounded-[30px] sm:rounded-[36px] border-2 border-[#D7E2EA] p-6 sm:p-8 md:p-10 h-full">
        <div className="flex items-start justify-between gap-4">
          <span
            className="hero-heading font-black leading-none"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            {String(index + 1).padStart(2, '0')}
          </span>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${project.title} on GitHub`}
              className="w-11 h-11 rounded-full border border-[#D7E2EA]/30 flex items-center justify-center text-[#BBCCD7] transition-colors duration-200 hover:bg-[#D7E2EA]/10 flex-shrink-0"
            >
              <Github size={20} strokeWidth={1.5} />
            </a>
          )}
        </div>

        <h3 className="text-[#D7E2EA] uppercase font-medium text-xl sm:text-2xl">
          {project.title}
        </h3>

        <p className="text-[#D7E2EA] font-light leading-relaxed opacity-70 text-sm sm:text-base flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
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
      className="relative bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn delay={0}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Projects
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
