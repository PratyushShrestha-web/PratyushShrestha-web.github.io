interface LiveProjectButtonProps {
  href?: string;
  label?: string;
  className?: string;
}

export default function LiveProjectButton({
  href,
  label = 'Live Project',
  className = '',
}: LiveProjectButtonProps) {
  const classes = `inline-block rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base transition-colors duration-200 ${
    href ? 'hover:bg-[#D7E2EA]/10' : 'opacity-40 cursor-not-allowed'
  } ${className}`;

  if (!href) {
    return (
      <span className={classes} aria-disabled="true">
        {label}
      </span>
    );
  }

  return (
    <a href={href} target="_blank" rel="noreferrer noopener" className={classes}>
      {label}
    </a>
  );
}
