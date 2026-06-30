export default function CVSection() {
  return (
    <section id="cv" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="rounded-3xl border border-cyan-900/40 bg-[#11161f] p-6 md:p-10 shadow-xl shadow-cyan-500/5">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
            <div>
              <p className="text-cyan-400 text-sm uppercase tracking-[0.35em] mb-3">One-page CV</p>
              <h2 className="text-2xl md:text-3xl font-bold text-white">KESHARA GAMLATH</h2>
              <p className="text-gray-400 mt-2">
                Malabe, Sri Lanka | +94 70 294 3487 | vishk1027@gmail.com
              </p>
              <p className="text-gray-400 mt-1">
                github.com/VishwaKeshara | linkedin: vishwa-keshara-gamlath
              </p>
            </div>

            <a
              href="/KESHARA_GAMLATH_CV.txt"
              download
              className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-300"
            >
              Download CV
            </a>
          </div>

          <div className="space-y-8 text-sm leading-7 text-gray-300">
            <div>
              <h3 className="text-white font-semibold text-base mb-2">PROFESSIONAL SUMMARY</h3>
              <p>
                Third-year Information Technology undergraduate at SLIIT with hands-on experience in AWS cloud services, Linux administration,
                Infrastructure as Code (Terraform), Kubernetes, CI/CD, and Git. Passionate about building scalable cloud infrastructure, automating
                deployments, and implementing DevOps best practices. Seeking a DevOps, Cloud, or Infrastructure Engineering internship to
                contribute technical skills and grow in cloud automation and platform engineering.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold text-base mb-2">TECHNICAL SKILLS</h3>
              <ul className="space-y-1 text-gray-300">
                <li>Cloud Platforms: Amazon Web Services (EC2, VPC, IAM, S3, EBS, Security Groups, ELB, CloudWatch)</li>
                <li>Infrastructure as Code: Terraform</li>
                <li>Containers & Orchestration: Docker, Kubernetes, Amazon EKS</li>
                <li>CI/CD & Version Control: Git, GitHub, AWS Code Pipeline, AWS Code Deploy</li>
                <li>Operating Systems: Linux, Windows Server</li>
                <li>Scripting & Programming: Bash, Python, Java</li>
                <li>Networking: TCP/IP, DNS, VPC, Subnets, Route Tables, Internet Gateway, NAT Gateway, Security Groups</li>
                <li>Tools: Visual Studio Code, VMware, Postman</li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold text-base mb-2">PROJECTS</h3>
              <div className="space-y-5">
                <div>
                  <p className="text-white font-medium">AWS Infrastructure Automation using Terraform Terraform | AWS | EC2 | VPC | IAM | S3</p>
                  <p className="text-cyan-300">TERRAFORM-WITH-AWS</p>
                  <ul className="mt-1 space-y-1">
                    <li>- Provisioned AWS infrastructure using Infrastructure as Code (Terraform).</li>
                    <li>- Automated deployment of EC2 instances and networking resources including VPC, subnets, route tables, Internet Gateway, and Security Groups.</li>
                    <li>- Implemented reusable Terraform variables and outputs, reducing manual cloud provisioning through automated deployment workflows.</li>
                  </ul>
                </div>

                <div>
                  <p className="text-white font-medium">Kubernetes Game 2048 Deployment on Amazon EKS Kubernetes | Amazon EKS | AWS | kubectl</p>
                  <p className="text-cyan-300">kubernetes-eks-game2048-deployment</p>
                  <ul className="mt-1 space-y-1">
                    <li>- Created and configured an Amazon EKS cluster for container orchestration.</li>
                    <li>- Deployed a containerized application using Kubernetes Deployments and Services with Load Balancer configuration for external access.</li>
                    <li>- Managed Kubernetes resources using kubectl, gaining practical experience with scalable application deployment.</li>
                  </ul>
                </div>

                <div>
                  <p className="text-white font-medium">AWS Cloud Cost Optimization using EBS Snapshots AWS EC2 | EBS | Snapshots</p>
                  <p className="text-cyan-300">AWS-CloudCostOptimization-with-ebs-snapshot</p>
                  <ul className="mt-1 space-y-1">
                    <li>- Implemented automated EBS snapshot lifecycle management to optimize cloud storage utilization and reduce costs.</li>
                    <li>- Improved disaster recovery readiness through snapshot-based backup strategies within AWS.</li>
                  </ul>
                </div>

                <div>
                  <p className="text-white font-medium">Linux Fundamentals for DevOps Linux | Bash | Git</p>
                  <p className="text-cyan-300">devops-linux-fundamentals</p>
                  <ul className="mt-1 space-y-1">
                    <li>- Developed and published beginner-friendly Linux documentation covering file system navigation, permissions, package management, process management, networking, and shell utilities.</li>
                    <li>- Demonstrated Git version control and technical documentation best practices to help new learners build Linux proficiency for DevOps careers.</li>
                  </ul>
                </div>

                <div>
                  <p className="text-white font-medium">Linux Fundamentals for DevOps Linux | Bash | Git</p>
                  <p className="text-cyan-300">AWS CI/CD</p>
                  <ul className="mt-1 space-y-1">
                    <li>- Developed and published beginner-friendly Linux documentation covering file system navigation, permissions, package management, process management, networking, and shell utilities.</li>
                    <li>- Demonstrated Git version control and technical documentation best practices to help new learners build Linux proficiency for DevOps careers.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold text-base mb-2">EDUCATION</h3>
              <p>BSc (Hons) in Information Technology 2023 - Present</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
