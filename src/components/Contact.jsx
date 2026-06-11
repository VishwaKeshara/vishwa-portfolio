export default function Contact() {
  const links = [
    { label: 'Copy Email', href: 'mailto:vishwa@example.com' },
    { label: 'LinkedIn', href: '#' },
    { label: 'GitHub', href: '#' },
  ];

  return (
    <section id="contact" className="pb-24 px-6">
      <div className="max-w-3xl mx-auto flex flex-wrap justify-center gap-4">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className="px-6 py-3 border border-cyan-400 text-cyan-400 rounded hover:bg-cyan-400/10 transition-colors text-sm font-semibold"
          >
            {l.label}
          </a>
        ))}
      </div>
    </section>
  );
}