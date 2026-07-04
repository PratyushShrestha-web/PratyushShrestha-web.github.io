import { Github, Linkedin, FolderGit2, ArrowUpRight } from 'lucide-react';
import FadeIn from '../components/FadeIn';

interface WorkItem {
  icon: typeof Github;
  title: string;
  meta: string;
  description: string;
  href?: string;
}

const WORK_ITEMS: WorkItem[] = [
  {
    icon: Github,
    title: 'GitHub',
    meta: 'github.com/pratyushshrestha',
    description: 'Browse class assignments, small Python scripts, and self-driven experiments applying data structures and OOP concepts.',
    href: 'https://github.com/PratyushShrestha-web',
  },
  {
    icon: Linkedin,
    title: 'LinkedIn',
    meta: 'linkedin.com/in/pratyushshrestha',
    description: 'Connect with me professionally to talk AI/ML, robotics, or opportunities to collaborate.',
    href: 'https://www.linkedin.com/in/pratyush-shrestha-239384341/',
  },
  {
    icon: FolderGit2,
    title: 'Academic & Self-Driven Mini Projects',
    meta: 'BSc. CSIT · Ongoing',
    description:
      'Currently self-studying introductory machine learning (classification and regression basics) through structured online coursework, ready to ramp up on lab-specific ML/robotics stacks from day one.',
  },
];

function WorkCard({ item, index }: { item: WorkItem; index: number }) {
  const Icon = item.icon;
  const content = (
    <div className="flex items-start gap-6 sm:gap-8 rounded-[30px] sm:rounded-[36px] border-2 border-[#D7E2EA] p-6 sm:p-8 md:p-10 transition-colors duration-200 hover:bg-[#D7E2EA]/5">
      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center border border-[#D7E2EA]/30 flex-shrink-0">
        <Icon className="text-[#BBCCD7]" size={28} strokeWidth={1.5} />
      </div>
      <div className="flex flex-col gap-2 flex-1">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-[#D7E2EA] uppercase font-medium text-xl sm:text-2xl md:text-3xl">
            {item.title}
          </h3>
          {item.href && (
            <ArrowUpRight className="text-[#BBCCD7] flex-shrink-0" size={28} strokeWidth={1.5} />
          )}
        </div>
        <span className="text-[#BBCCD7] text-xs sm:text-sm uppercase tracking-widest opacity-70">
          {item.meta}
        </span>
        <p className="text-[#D7E2EA] font-light leading-relaxed opacity-70 max-w-2xl text-sm sm:text-base md:text-lg">
          {item.description}
        </p>
      </div>
    </div>
  );

  return (
    <FadeIn delay={index * 0.1}>
      {item.href ? (
        <a href={item.href} target="_blank" rel="noreferrer noopener" className="block">
          {content}
        </a>
      ) : (
        content
      )}
    </FadeIn>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="work"
      className="relative bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn delay={0}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Work
        </h2>
      </FadeIn>

      <div className="max-w-4xl mx-auto flex flex-col gap-5 sm:gap-6">
        {WORK_ITEMS.map((item, i) => (
          <WorkCard key={item.title} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}
