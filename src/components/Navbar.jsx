const links = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0a0e14]/80 backdrop-blur-sm border-b border-cyan-900/40">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <span className="text-cyan-400 font-bold tracking-wide">VK.</span>
        <ul className="hidden md:flex gap-8 text-sm text-gray-400">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className="hover:text-cyan-400 transition-colors">
                {l}
              </a>
            </li>
          ))}
        </ul>
        <div className="text-xs text-gray-500">en | EN</div>
      </div>
    </nav>
  );
}