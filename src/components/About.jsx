export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[1.15fr_0.85fr] items-center">
        <div>
          <p className="text-cyan-400 text-sm mb-3 uppercase tracking-[0.35em]">About</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">A bit more about me</h2>
          <p className="text-gray-300 leading-8 mb-6">
            I am a SLIIT IT undergraduate focused on cloud-first architecture, infrastructure automation, and DevOps practices. I enjoy building reliable CI/CD pipelines, containerized applications, and deployment workflows that help teams ship faster and with greater confidence.
          </p>
          <ul className="space-y-3 text-gray-400">
            <li>• Experience building end-to-end automation using Docker and GitHub Actions.</li>
            <li>• Strong interest in AWS cloud services, Kubernetes orchestration, and monitoring.</li>
            <li>• Skilled at combining development, operations, and quality controls for modern delivery.</li>
          </ul>
        </div>

        <div className="rounded-3xl border border-cyan-900/40 bg-[#11161f] p-8 shadow-xl shadow-cyan-500/5">
          <p className="text-cyan-400 text-sm uppercase tracking-[0.35em] mb-4">Skills spotlight</p>
          <div className="grid gap-4">
            {[
              { label: 'Cloud & DevOps', value: 'AWS, Docker, Kubernetes, CI/CD' },
              { label: 'Backend', value: 'Spring Boot, Node.js, REST APIs' },
              { label: 'Frontend', value: 'React, Tailwind CSS, JavaScript' },
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
