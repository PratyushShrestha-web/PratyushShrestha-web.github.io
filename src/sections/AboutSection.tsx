import { Moon, Cpu, GitBranch, Boxes } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';
import ContactButton from '../components/ContactButton';

const ABOUT_COPY =
  "BSc. CSIT undergraduate with a strong foundation in programming, data structures, and a growing focus on machine learning and applied AI. I bring hands-on coding ability, fast learning speed, and genuine enthusiasm for robotics and intelligent systems, and i'm always excited to grow into a confident ML practitioner. Let's build something intelligent together!";

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
      className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20"
      style={{ overflowX: 'clip' }}
    >
      {/* Corner decorations */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px] aspect-square"
      >
        <CornerIcon Icon={Moon} />
      </FadeIn>

      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px] aspect-square"
      >
        <CornerIcon Icon={GitBranch} />
      </FadeIn>

      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px] aspect-square"
      >
        <CornerIcon Icon={Cpu} />
      </FadeIn>

      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px] aspect-square"
      >
        <CornerIcon Icon={Boxes} />
      </FadeIn>

      {/* Content */}
      <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        <div className="flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
          <AnimatedText
            text={ABOUT_COPY}
            className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px]"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          />

          <FadeIn delay={0.1}>
            <ContactButton />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
