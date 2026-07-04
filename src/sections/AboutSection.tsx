import { Moon, Cpu, GitBranch, Boxes } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';
import ContactButton from '../components/ContactButton';

const ABOUT_COPY =
  "BSc. CSIT undergraduate with a strong foundation in programming, data structures, and a growing focus on machine learning and applied AI. I bring hands-on coding ability, fast learning speed, and a collaborative mindset to every project.";

function CornerIcon({ Icon }: { Icon: typeof Moon }) {
  return (
    <div className="w-full h-full rounded-full flex items-center justify-center bg-gradient-to-b from-[#646973]/20 to-[#BBCCD7]/10 border border-[#D7E2EA]/15">
      <Icon className="text-[#BBCCD7] w-1/2 h-1/2" strokeWidth={1.25} />
    </div>
  );
}

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 md:px-10 py-16 sm:py-20 md:py-24"
      style={{ overflowX: 'clip' }}
    >
      {/* Corner decorations - hidden on mobile, shown on sm+ */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="hidden sm:block absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[80px] sm:w-[140px] md:w-[180px] lg:w-[210px] aspect-square"
      >
        <CornerIcon Icon={Moon} />
      </FadeIn>

      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="hidden sm:block absolute bottom-[8%] left-[1%] sm:left-[6%] md:left-[10%] w-[80px] sm:w-[120px] md:w-[160px] lg:w-[180px] aspect-square"
      >
        <CornerIcon Icon={GitBranch} />
      </FadeIn>

      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="hidden sm:block absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[80px] sm:w-[140px] md:w-[180px] lg:w-[210px] aspect-square"
      >
        <CornerIcon Icon={Cpu} />
      </FadeIn>

      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="hidden sm:block absolute bottom-[8%] right-[1%] sm:right-[6%] md:right-[10%] w-[80px] sm:w-[130px] md:w-[170px] lg:w-[220px] aspect-square"
      >
        <CornerIcon Icon={Boxes} />
      </FadeIn>

      {/* Content */}
      <div className="flex flex-col items-center gap-8 sm:gap-12 md:gap-16 w-full max-w-4xl">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(2.5rem, 10vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        <div className="flex flex-col items-center gap-10 sm:gap-16 md:gap-24 w-full">
          <AnimatedText
            text={ABOUT_COPY}
            className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[90%] sm:max-w-[560px]"
            style={{ fontSize: 'clamp(0.95rem, 2vw, 1.35rem)' }}
          />

          <FadeIn delay={0.1}>
            <ContactButton />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}