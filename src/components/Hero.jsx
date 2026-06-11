import profilePic from '../assets/profile.png';

const terminalLines = [
  '$ whoami',
  'Vishwa Keshara',
  '$ cat role.txt',
  'SLIIT IT Undergraduate',
  'DevOps & Cloud Engineering Enthusiast',
  '$ ./deploy --aws',
  '> ready for the next challenge',
];

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-28 overflow-hidden bg-[#050b16]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.14),_transparent_24%),radial-gradient(circle_at_85%_20%,_rgba(14,165,233,0.1),_transparent_18%)]" />
      <div className="absolute right-[-140px] top-24 w-72 h-72 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute left-[-120px] bottom-0 w-72 h-72 rounded-full bg-slate-500/10 blur-3xl" />

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6 items-center">
        <div className="space-y-6">
          <img
            src={profilePic}
            alt="Vishwa Keshara"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-cyan-400/30 mb-2"
          />

          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/5 px-4 py-2 text-xs uppercase tracking-[0.25em] text-cyan-300">
            SLIIT IT Undergraduate
          </div>

          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">Hi, I'm Vishwa Keshara.</h1>
            <p className="mt-4 text-cyan-300 font-medium">DevOps & Cloud Engineering enthusiast</p>
          </div>

          <p className="text-gray-300 max-w-xl leading-8">
            SLIIT IT undergraduate with a passion for cloud infrastructure, automation, and modern deployment workflows. I built a hotel booking project using Docker, GitHub Actions, and AWS to automate delivery and improve release reliability.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-300"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-cyan-400/50 px-6 py-3 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400/10"
            >
              Get In Touch
            </a>
          </div>

          <div className="grid grid-cols-3 gap-3 text-xs text-gray-400">
            {['AWS', 'Docker', 'Kubernetes'].map((skill) => (
              <span key={skill} className="rounded-2xl border border-gray-700 bg-white/5 px-3 py-2 text-center">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="rounded-3xl border border-cyan-900/40 bg-[#11161f] p-6 shadow-[0_30px_80px_rgba(8,15,28,0.35)]">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-800 bg-[#161b24] rounded-t-3xl">
              <span className="w-3 h-3 rounded-full bg-red-500" />
              <span className="w-3 h-3 rounded-full bg-yellow-500" />
              <span className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-3 text-xs text-gray-500">vishwa@portfolio: ~</span>
            </div>
            <div className="p-5 text-sm space-y-2 font-mono">
              {terminalLines.map((line, i) => (
                <p
                  key={i}
                  className={
                    line.startsWith('$')
                      ? 'text-cyan-400'
                      : line.startsWith('>')
                      ? 'text-green-400'
                      : 'text-gray-300'
                  }
                >
                  {line}
                </p>
              ))}
              <p className="text-cyan-400">
                $ <span className="animate-pulse">_</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
