import FadeIn from '../components/FadeIn';
import Magnet from '../components/Magnet';
import ContactButton from '../components/ContactButton';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
];

export default function HeroSection() {
  return (
    <section
      className="relative h-screen flex flex-col"
      style={{ overflowX: 'clip' }}
    >
      {/* Navbar */}
      <FadeIn delay={0} y={-20} as="nav">
        <div className="flex justify-between px-6 md:px-10 pt-6 md:pt-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70"
            >
              {link.label}
            </a>
          ))}
        </div>
      </FadeIn>

      {/* Hero heading */}
      <div className="overflow-hidden mt-6 sm:mt-4 md:-mt-5 w-full">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]">
            Hi, i&apos;m praty
            ush
          </h1>
        </FadeIn>
      </div>

      {/* Hero illustration */}
      <Magnet
        padding={150}
        strength={3}
        activeTransition="transform 0.3s ease-out"
        inactiveTransition="transform 0.6s ease-in-out"
        className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px]"
      >
        <FadeIn delay={0.6} y={30}>
          <svg
            viewBox="0 0 520 460"
            className="w-full h-auto select-none pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="termGlow" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#646973" />
                <stop offset="100%" stopColor="#BBCCD7" />
              </linearGradient>
            </defs>
            {/* terminal window */}
            <rect x="40" y="60" width="440" height="300" rx="24" fill="#101114" stroke="#D7E2EA" strokeWidth="2" />
            <rect x="40" y="60" width="440" height="46" rx="24" fill="#181A1E" stroke="#D7E2EA" strokeWidth="2" />
            <circle cx="70" cy="83" r="7" fill="#BE4C00" />
            <circle cx="94" cy="83" r="7" fill="#B600A8" />
            <circle cx="118" cy="83" r="7" fill="#7621B0" />
            {/* code lines */}
            <rect x="66" y="140" width="180" height="12" rx="6" fill="url(#termGlow)" opacity="0.9" />
            <rect x="66" y="168" width="260" height="12" rx="6" fill="url(#termGlow)" opacity="0.6" />
            <rect x="96" y="196" width="220" height="12" rx="6" fill="url(#termGlow)" opacity="0.75" />
            <rect x="96" y="224" width="150" height="12" rx="6" fill="url(#termGlow)" opacity="0.5" />
            <rect x="66" y="252" width="200" height="12" rx="6" fill="url(#termGlow)" opacity="0.85" />
            <rect x="66" y="280" width="120" height="12" rx="6" fill="url(#termGlow)" opacity="0.4" />
            {/* blinking cursor */}
            <rect x="196" y="280" width="10" height="16" rx="2" fill="#BBCCD7" />
            {/* floating brackets */}
            <text x="30" y="430" fontSize="90" fontWeight="900" fill="url(#termGlow)" opacity="0.85">{'<'}</text>
            <text x="440" y="430" fontSize="90" fontWeight="900" fill="url(#termGlow)" opacity="0.85">{'/>'}</text>
          </svg>
        </FadeIn>
      </Magnet>

      {/* Bottom bar */}
      <div className="mt-auto flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 relative z-20">
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            an aspiring ai/ml engineer building intelligent systems, one line of code at a time
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
