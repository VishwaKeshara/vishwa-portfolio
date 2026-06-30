import { useState } from 'react';

const links = ['About', 'Skills', 'Projects', 'DevOps', 'Cv', 'Contact'];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0a0e14]/95 backdrop-blur-xl border-b border-cyan-900/40">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a
          href="#hero"
          className="text-cyan-400 font-bold tracking-[0.35em] hover:text-cyan-300"
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
                onClick={() => setOpen(false)}
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

        {/* Mobile controls */}
        <div className="md:hidden">
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((s) => !s)}
            className="p-2 rounded-md text-gray-300 hover:bg-white/5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="w-6 h-6">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div className={`md:hidden bg-[#0a0e14]/95 border-t border-cyan-900/30 transition-all overflow-hidden ${open ? 'max-h-96' : 'max-h-0'}`}>
        <div className="px-6 py-4 flex flex-col gap-3">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} className="text-gray-300 py-2 px-2 rounded hover:text-cyan-400">
              {l}
            </a>
          ))}

          <div className="flex flex-col gap-2 pt-2">
            <a href="https://github.com/VishwaKeshara" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400">
              GitHub
            </a>
            <a href="#contact" onClick={() => setOpen(false)} className="rounded-full border border-cyan-400 px-4 py-2 text-sm text-cyan-400 hover:bg-cyan-400/10 w-full text-center">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
