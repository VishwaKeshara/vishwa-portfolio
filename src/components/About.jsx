export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[1.15fr_0.85fr] items-center">
        <div>
          <p className="text-cyan-400 text-sm mb-3 uppercase tracking-[0.35em]">About</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">A bit more about me</h2>
          <p className="text-gray-300 leading-8 mb-6">
            Third-year Information Technology undergraduate at SLIIT with hands-on experience in AWS cloud services, Linux administration, Infrastructure as Code (Terraform), Kubernetes, CI/CD, and Git. I am focused on cloud automation and platform engineering with practical project experience.
          </p>
          <ul className="space-y-3 text-gray-400">
            <li>• Build scalable cloud infrastructure using AWS and Infrastructure as Code.</li>
            <li>• Deploy and manage containerized workloads with Kubernetes and Amazon EKS.</li>
            <li>• Implement CI/CD pipelines and Git-based workflows for automated delivery.</li>
          </ul>
        </div>

        <div className="rounded-3xl border border-cyan-900/40 bg-[#11161f] p-8 shadow-xl shadow-cyan-500/5">
          <p className="text-cyan-400 text-sm uppercase tracking-[0.35em] mb-4">Skills spotlight</p>
          <div className="grid gap-4">
            {[
              { label: 'Cloud Platforms', value: 'AWS (EC2, VPC, IAM, S3, EBS, ELB, CloudWatch)' },
              { label: 'Infrastructure as Code', value: 'Terraform' },
              { label: 'Containers & CI/CD', value: 'Docker, Kubernetes, Amazon EKS, GitHub, CodePipeline' },
            ].map((item) => (
              <div key={item.label} className="rounded-3xl border border-gray-800 bg-white/5 p-4">
                <p className="text-sm text-gray-400">{item.label}</p>
                <p className="mt-2 text-white font-medium">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
