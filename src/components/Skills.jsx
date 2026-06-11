const skillGroups = [
  {
    title: 'Cloud & Devops',
    color: 'text-cyan-400',
    skills: [
      { name: 'AWS', level: 80 },
      { name: 'Docker', level: 75 },
      { name: 'Kubernetes', level: 60 },
      { name: 'CI/CD', level: 70 },
    ],
  },
  {
    title: 'Backend',
    color: 'text-green-400',
    skills: [
      { name: 'Spring Boot', level: 80 },
      { name: 'Node.js', level: 65 },
      { name: 'REST APIs', level: 75 },
      { name: 'PostgreSQL', level: 70 },
    ],
  },
  {
    title: 'Frontend',
    color: 'text-purple-400',
    skills: [
      { name: 'React', level: 75 },
      { name: 'Tailwind CSS', level: 80 },
      { name: 'JavaScript', level: 75 },
      { name: 'HTML / CSS', level: 85 },
    ],
  },
  {
    title: 'Tools',
    color: 'text-yellow-400',
    skills: [
      { name: 'Git / GitHub', level: 85 },
      { name: 'Linux', level: 70 },
      { name: 'VS Code', level: 90 },
      { name: 'Postman', level: 75 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-2">
          <span className="text-cyan-400">02.</span> Skills & Technologies
        </h2>
        <div className="h-px bg-gray-800 mb-12" />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="bg-[#11161f] border border-gray-800 rounded-lg p-5 hover:border-cyan-900/60 transition-colors"
            >
              <h3 className={`font-semibold mb-4 ${group.color}`}>{group.title}</h3>
              <ul className="space-y-3">
                {group.skills.map((s) => (
                  <li key={s.name}>
                    <div className="flex justify-between text-xs text-gray-400 mb-1">
                      <span>{s.name}</span>
                      <span>{s.level}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-cyan-400 rounded-full"
                        style={{ width: `${s.level}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}