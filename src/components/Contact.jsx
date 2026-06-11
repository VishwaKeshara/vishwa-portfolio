export default function Contact() {
  const links = [
    { label: 'Copy Email', href: 'mailto:vishk1027@gmail.com' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/vishwa-keshara-gamlath' },
    { label: 'GitHub', href: 'https://github.com/VishwaKeshara' },
  ];

  return (
    <section id="contact" className="pb-24 px-6">
      <div className="max-w-3xl mx-auto flex flex-wrap justify-center gap-4">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target={l.label !== 'Copy Email' ? '_blank' : undefined}
            rel={l.label !== 'Copy Email' ? 'noopener noreferrer' : undefined}
            className="px-6 py-3 border border-cyan-400 text-cyan-400 rounded hover:bg-cyan-400/10 transition-colors text-sm font-semibold"
          >
            {l.label}
          </a>
        ))}
      </div>
    </section>
  );
}