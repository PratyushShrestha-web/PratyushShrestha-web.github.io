import { useEffect, useRef, useState } from 'react';
import {
  FileCode2,
  Braces,
  Cpu,
  Database,
  GitBranch,
  Github,
  TerminalSquare,
  BookOpenCheck,
  Users,
  Bug,
  FileText,
  MonitorSmartphone,
  Sigma,
  Network,
  type LucideIcon,
} from 'lucide-react';

interface Tag {
  label: string;
  icon: LucideIcon;
}

const ROW1_SOURCE: Tag[] = [
  { label: 'Python', icon: FileCode2 },
  { label: 'C', icon: Braces },
  { label: 'C++', icon: Braces },
  { label: 'Java', icon: FileCode2 },
  { label: 'NumPy', icon: Sigma },
  { label: 'Pandas', icon: Database },
  { label: 'scikit-learn', icon: Network },
  { label: 'Supervised Learning', icon: Cpu },
  { label: 'Data Preprocessing', icon: Database },
];

const ROW2_SOURCE: Tag[] = [
  { label: 'Git', icon: GitBranch },
  { label: 'GitHub', icon: Github },
  { label: 'VS Code', icon: TerminalSquare },
  { label: 'Jupyter Notebook', icon: BookOpenCheck },
  { label: 'Linux', icon: TerminalSquare },
  { label: 'Google Workspace', icon: MonitorSmartphone },
  { label: 'Algorithmic Thinking', icon: Cpu },
  { label: 'Debugging', icon: Bug },
  { label: 'Documentation', icon: FileText },
  { label: 'Teamwork', icon: Users },
];

const ROW1 = [...ROW1_SOURCE, ...ROW1_SOURCE, ...ROW1_SOURCE];
const ROW2 = [...ROW2_SOURCE, ...ROW2_SOURCE, ...ROW2_SOURCE];

function Chip({ tag }: { tag: Tag }) {
  const Icon = tag.icon;
  return (
    <div
      className="flex items-center gap-3 rounded-2xl border border-[#D7E2EA]/15 bg-[#141414] flex-shrink-0 px-8"
      style={{ height: '90px' }}
    >
      <Icon className="text-[#BBCCD7] flex-shrink-0" size={26} strokeWidth={1.75} />
      <span className="text-[#D7E2EA] uppercase tracking-wide font-medium text-sm sm:text-base whitespace-nowrap">
        {tag.label}
      </span>
    </div>
  );
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const sectionTop = el.getBoundingClientRect().top + window.scrollY;
      const raw = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(raw);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10"
      style={{ overflowX: 'clip' }}
    >
      <div className="flex flex-col gap-3">
        {/* Row 1 - moves right on scroll */}
        <div
          className="flex gap-3"
          style={{
            willChange: 'transform',
            transform: `translateX(${offset - 200}px)`,
          }}
        >
          {ROW1.map((tag, i) => (
            <Chip key={`row1-${i}`} tag={tag} />
          ))}
        </div>

        {/* Row 2 - moves left on scroll */}
        <div
          className="flex gap-3"
          style={{
            willChange: 'transform',
            transform: `translateX(${-(offset - 200)}px)`,
          }}
        >
          {ROW2.map((tag, i) => (
            <Chip key={`row2-${i}`} tag={tag} />
          ))}
        </div>
      </div>
    </section>
  );
}
