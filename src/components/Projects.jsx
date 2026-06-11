import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-2">
          <span className="text-cyan-400">03.</span> Projects
        </h2>
        <div className="h-px bg-gray-800 mb-12" />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className="bg-[#11161f] border border-gray-800 rounded-lg p-6 hover:border-cyan-900/60 transition-colors flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl">☁️</span>
                <div className="flex gap-3 text-gray-400">
                  <a href={p.github} aria-label="GitHub" className="hover:text-cyan-400">
                    GitHub
                  </a>
                  <a href={p.demo} aria-label="Live demo" className="hover:text-cyan-400">
                    Live
                  </a>
                </div>
              </div>
              <h3 className="text-white font-semibold mb-2">{p.title}</h3>
              <p className="text-gray-400 text-sm mb-4 flex-1">{p.description}</p>
              <div className="flex flex-wrap gap-2 text-xs">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 border border-gray-700 rounded text-cyan-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}