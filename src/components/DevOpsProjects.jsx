import { devopsProjects } from '../data/projects';

export default function DevOpsProjects() {
  return (
    <section id="devops" className="pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          {devopsProjects.map((p) => (
            <div
              key={p.title}
              className="group relative overflow-hidden rounded-3xl border border-gray-800 bg-[#11161f] p-6 transition hover:-translate-y-1 hover:border-cyan-900/60"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="relative flex items-start justify-between mb-4">
                <span className="text-3xl">⚙️</span>
                <div className="flex gap-3 text-sm text-gray-400">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    GitHub
                  </a>
                  <a
                    href={p.demo || p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Live demo"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    Demo
                  </a>
                </div>
              </div>
              <div className="relative">
                <h3 className="text-white font-semibold mb-3 text-xl">{p.title}</h3>
                <p className="text-gray-400 text-sm mb-5 min-h-[88px]">{p.description}</p>
                <div className="flex flex-wrap gap-2 text-xs">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-gray-700 bg-white/5 px-3 py-1 text-cyan-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
