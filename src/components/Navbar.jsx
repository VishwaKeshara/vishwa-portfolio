const links = ['About', 'Skills', 'Projects', 'DevOps', 'Contact'];

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0a0e14]/95 backdrop-blur-xl border-b border-cyan-900/40">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a
          href="#hero"
          className="!text-cyan-400 text-cyan-400 font-bold tracking-[0.35em] hover:text-cyan-300"
          aria-label="Go to top"
        >
          VK
        </a>

        <ul className="hidden md:flex gap-8 text-sm text-gray-400">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="hover:text-cyan-400 transition-colors duration-200"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://github.com/VishwaKeshara"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 text-sm transition-colors"
          >
            GitHub
          </a>
          <a
            href="#contact"
            className="rounded-full border border-cyan-400 px-4 py-2 text-sm text-cyan-400 hover:bg-cyan-400/10 transition-all"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
