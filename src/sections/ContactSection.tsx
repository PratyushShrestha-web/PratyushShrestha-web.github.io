import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import ContactButton from '../components/ContactButton';

const CONTACT_INFO = [
  { icon: Mail, label: 'pratyush.shrestha@email.com', href: 'mailto:pratyush.shrestha@email.com' },
  
];

const SOCIAL_LINKS = [
  { icon: Github, href: 'https://github.com/pratyushshrestha', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/pratyushshrestha', label: 'LinkedIn' },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-28 flex flex-col items-center gap-10 sm:gap-12 text-center"
    >
      <FadeIn delay={0} y={30}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'clamp(2.5rem, 9vw, 110px)' }}
        >
          Let&apos;s work together
        </h2>
      </FadeIn>

      <FadeIn delay={0.1} y={20}>
        <p className="text-[#D7E2EA] font-light max-w-xl leading-relaxed opacity-70">
          Available immediately for an on-site internship in Dharan, and flexible with working hours.
        </p>
      </FadeIn>

      <FadeIn delay={0.2} y={20}>
        <ContactButton />
      </FadeIn>

      <FadeIn delay={0.3} y={20}>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mt-4">
          {CONTACT_INFO.map((item) => {
            const Icon = item.icon;
            const inner = (
              <span className="flex items-center gap-2 text-[#D7E2EA] text-sm sm:text-base opacity-70 hover:opacity-100 transition-opacity duration-200">
                <Icon size={18} strokeWidth={1.5} />
                {item.label}
              </span>
            );
            return item.href ? (
              <a key={item.label} href={item.href}>
                {inner}
              </a>
            ) : (
              <span key={item.label}>{inner}</span>
            );
          })}
        </div>
      </FadeIn>

      <FadeIn delay={0.4} y={20}>
        <div className="flex gap-4 mt-2">
          {SOCIAL_LINKS.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer noopener"
                className="w-11 h-11 rounded-full border border-[#D7E2EA]/30 flex items-center justify-center text-[#BBCCD7] transition-colors duration-200 hover:bg-[#D7E2EA]/10"
                aria-label={social.label}
              >
                <Icon size={20} strokeWidth={1.5} />
              </a>
            );
          })}
        </div>
      </FadeIn>
    </section>
  );
}
