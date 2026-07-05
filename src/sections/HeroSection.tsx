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
      className="relative min-h-screen flex flex-col"
      style={{ overflowX: 'clip' }}
    >
      {/* Navbar */}
      <FadeIn delay={0} y={-20} as="nav">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 px-4 sm:px-6 md:px-10 pt-4 sm:pt-6 md:pt-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg transition-opacity duration-200 hover:opacity-70 whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </div>
      </FadeIn>

      {/* Hero heading */}
      <div className="overflow-hidden mt-4 xs:mt-6 sm:mt-6 md:mt-4 lg:-mt-5 w-full px-2 xs:px-3 sm:px-4">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading font-black uppercase tracking-tight leading-tight whitespace-normal w-full text-[8vw] xs:text-[8.5vw] sm:text-[9vw] md:text-[11vw] lg:text-[10vw]">
            Hi, i&apos;m pratyush shrestha
          </h1>
        </FadeIn>
      </div>

      {/* Hero illustration - responsive container */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 top-[45%] -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 w-[120px] xs:w-[140px] sm:w-[260px] md:w-[340px] lg:w-[440px] xl:w-[520px]">
        <Magnet
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
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
      </div>

      {/* Bottom bar */}
      <div className="mt-auto flex flex-col sm:flex-row justify-between items-center sm:items-end gap-3 xs:gap-4 sm:gap-2 pb-4 xs:pb-5 sm:pb-7 md:pb-8 lg:pb-10 px-3 xs:px-4 sm:px-6 md:px-10 relative z-20">
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug text-center sm:text-left max-w-[90%] sm:max-w-[160px] md:max-w-[220px] lg:max-w-[260px]"
            style={{ fontSize: 'clamp(0.6rem, 1.8vw, 1.5rem)' }}
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
