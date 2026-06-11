import profilePic from '../assets/profile.png';

const terminalLines = [
  '$ whoami',
  'Vishwa Keshara',
  '$ cat role.txt',
  'Aspiring Cloud Engineer / DevOps Infra',
  '$ ./run --explore',
  '/exec: command not found',
  '> let\'s be ambitious',
];

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6 items-center">
        {/* Left: Intro */}
        <div>
          <img
            src={profilePic}
            alt="Vishwa Keshara"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-cyan-400/30 mb-6"
          />
          <p className="text-cyan-400 text-sm mb-2">Hi, my name is</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Vishwa Keshara.
          </h1>
          <p className="text-gray-400 mb-6">
            Aspiring Cloud Engineer & IT Infrastructure
          </p>
          <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-md">
            IT undergraduate passionate about cloud infrastructure
            and DevOps. Seeking internship opportunities.
          </p>

          <div className="flex flex-wrap gap-4 mb-6">
            <a
              href="#projects"
              className="px-6 py-3 bg-cyan-400 text-[#0a0e14] font-semibold rounded hover:bg-cyan-300 transition-colors"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded hover:bg-cyan-400/10 transition-colors"
            >
              Get In Touch
            </a>
          </div>

          <div className="flex gap-4 text-xs">
            <span className="px-3 py-1 border border-gray-700 rounded text-gray-400">
              AWS
            </span>
            <span className="px-3 py-1 border border-gray-700 rounded text-gray-400">
              DevOps
            </span>
            <span className="px-3 py-1 border border-gray-700 rounded text-gray-400">
              Kubernetes
            </span>
          </div>
        </div>

        {/* Right: Terminal */}
        <div className="bg-[#11161f] border border-cyan-900/40 rounded-lg shadow-xl overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-800 bg-[#161b24]">
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
    </section>
  );
}