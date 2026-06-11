const items = [
  {
    role: 'IT Infrastructure Intern',
    org: 'Tech Company Name',
    period: '2024',
    description:
      'Managing cloud environments, automating tasks, supporting DevOps pipelines for production systems.',
    tags: ['AWS', 'Linux'],
  },
  {
    role: 'IT Undergraduate',
    org: 'University Name',
    period: '2021 - Present',
    description:
      'Studying Information Technology with focus on cloud computing, system admin, and software engineering.',
    tags: ['Cloud Computing', 'Networking'],
  },
];

export default function Certifications() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-2">
          <span className="text-cyan-400">04.</span> Experience & Education
        </h2>
        <div className="h-px bg-gray-800 mb-12" />

        <div className="space-y-6">
          {items.map((item) => (
            <div
              key={item.role}
              className="bg-[#11161f] border border-gray-800 rounded-lg p-6 hover:border-cyan-900/60 transition-colors"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <h3 className="text-white font-semibold">{item.role}</h3>
                <span className="text-xs text-cyan-400 border border-cyan-900/40 px-2 py-1 rounded">
                  {item.period}
                </span>
              </div>
              <p className="text-gray-500 text-sm mb-3">{item.org}</p>
              <p className="text-gray-400 text-sm mb-4">{item.description}</p>
              <div className="flex flex-wrap gap-2 text-xs">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 border border-gray-700 rounded text-gray-400"
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