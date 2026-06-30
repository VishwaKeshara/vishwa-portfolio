const skillGroups = [
  {
    title: 'Cloud Platforms',
    color: 'text-cyan-400',
    skills: [
      { name: 'AWS (EC2, VPC, IAM, S3)', level: 88 },
      { name: 'EBS, Security Groups, ELB', level: 82 },
      { name: 'CloudWatch', level: 78 },
      { name: 'Windows Server', level: 70 },
    ],
  },
  {
    title: 'Infrastructure & Containers',
    color: 'text-green-400',
    skills: [
      { name: 'Terraform', level: 85 },
      { name: 'Docker', level: 78 },
      { name: 'Kubernetes', level: 74 },
      { name: 'Amazon EKS', level: 72 },
    ],
  },
  {
    title: 'CI/CD & Scripting',
    color: 'text-purple-400',
    skills: [
      { name: 'Git / GitHub', level: 88 },
      { name: 'AWS CodePipeline', level: 76 },
      { name: 'AWS CodeDeploy', level: 74 },
      { name: 'Bash / Python / Java', level: 80 },
    ],
  },
  {
    title: 'Networking & Tools',
    color: 'text-yellow-400',
    skills: [
      { name: 'TCP/IP, DNS, VPC, Subnets', level: 82 },
      { name: 'Route Tables, IGW, NAT GW', level: 78 },
      { name: 'Linux', level: 80 },
      { name: 'VS Code, VMware, Postman', level: 84 },
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