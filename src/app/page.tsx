import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              UJ
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
              <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
              <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
              <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center text-4xl font-bold">
                UJ
              </div>
            </div>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Usama Javed
            </span>
          </h1>
          <h2 className="text-2xl sm:text-3xl text-slate-300 mb-8 font-light">
            Full Stack Developer & Digital Solutions Architect
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            Passionate about creating innovative web applications and digital experiences.
            Specializing in modern technologies, cloud solutions, and enterprise development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white px-8 py-4 rounded-full font-semibold transition-all"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">
                Building Digital Solutions
              </h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                I'm a passionate full stack developer with expertise in modern web technologies,
                cloud platforms, and enterprise solutions. I love turning complex problems into
                simple, beautiful, and intuitive designs.
              </p>
              <p className="text-slate-300 mb-6 leading-relaxed">
                With experience across various industries, I've developed scalable applications,
                automated business processes, and created seamless user experiences that drive
                business growth.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm">React</span>
                <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm">Next.js</span>
                <span className="px-4 py-2 bg-green-500/20 text-green-300 rounded-full text-sm">Node.js</span>
                <span className="px-4 py-2 bg-yellow-500/20 text-yellow-300 rounded-full text-sm">TypeScript</span>
              </div>
            </div>
            <div className="space-y-6">
              <div className="p-6 bg-slate-900/50 rounded-lg border border-slate-700">
                <h4 className="text-xl font-semibold mb-3 text-purple-400">Frontend Excellence</h4>
                <p className="text-slate-300">
                  Creating responsive, accessible, and performant user interfaces with modern frameworks.
                </p>
              </div>
              <div className="p-6 bg-slate-900/50 rounded-lg border border-slate-700">
                <h4 className="text-xl font-semibold mb-3 text-blue-400">Backend Architecture</h4>
                <p className="text-slate-300">
                  Designing robust APIs, database systems, and scalable server-side solutions.
                </p>
              </div>
              <div className="p-6 bg-slate-900/50 rounded-lg border border-slate-700">
                <h4 className="text-xl font-semibold mb-3 text-green-400">Cloud & DevOps</h4>
                <p className="text-slate-300">
                  Deploying applications on cloud platforms with CI/CD pipelines and monitoring.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-slate-900/30 rounded-lg border border-slate-700">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Frontend</h3>
              <div className="space-y-2">
                <div className="text-slate-300">React / Next.js</div>
                <div className="text-slate-300">TypeScript / JavaScript</div>
                <div className="text-slate-300">Tailwind CSS</div>
                <div className="text-slate-300">HTML5 / CSS3</div>
              </div>
            </div>
            <div className="p-6 bg-slate-900/30 rounded-lg border border-slate-700">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Backend</h3>
              <div className="space-y-2">
                <div className="text-slate-300">Node.js / Express</div>
                <div className="text-slate-300">Python / Django</div>
                <div className="text-slate-300">PostgreSQL / MongoDB</div>
                <div className="text-slate-300">RESTful APIs</div>
              </div>
            </div>
            <div className="p-6 bg-slate-900/30 rounded-lg border border-slate-700">
              <h3 className="text-xl font-semibold mb-4 text-green-400">Tools & Cloud</h3>
              <div className="space-y-2">
                <div className="text-slate-300">AWS / Azure</div>
                <div className="text-slate-300">Docker / Kubernetes</div>
                <div className="text-slate-300">Git / GitHub</div>
                <div className="text-slate-300">VS Code</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project placeholders - to be customized with real projects */}
            <div className="bg-slate-900/50 rounded-lg border border-slate-700 overflow-hidden hover:border-blue-500/50 transition-colors">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-blue-400">Project One</h3>
                <p className="text-slate-300 mb-4">
                  A modern web application built with Next.js and TypeScript.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Next.js</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">TypeScript</span>
                </div>
                <div className="flex gap-3">
                  <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">Live Demo</a>
                  <a href="#" className="text-slate-400 hover:text-slate-300 transition-colors">GitHub</a>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/50 rounded-lg border border-slate-700 overflow-hidden hover:border-purple-500/50 transition-colors">
              <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-purple-400">Project Two</h3>
                <p className="text-slate-300 mb-4">
                  Full-stack application with React frontend and Node.js backend.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm">Node.js</span>
                </div>
                <div className="flex gap-3">
                  <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">Live Demo</a>
                  <a href="#" className="text-slate-400 hover:text-slate-300 transition-colors">GitHub</a>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/50 rounded-lg border border-slate-700 overflow-hidden hover:border-green-500/50 transition-colors">
              <div className="h-48 bg-gradient-to-br from-green-500 to-blue-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-green-400">Project Three</h3>
                <p className="text-slate-300 mb-4">
                  Enterprise solution with cloud deployment and microservices.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">AWS</span>
                  <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm">Docker</span>
                </div>
                <div className="flex gap-3">
                  <a href="#" className="text-green-400 hover:text-green-300 transition-colors">Live Demo</a>
                  <a href="#" className="text-slate-400 hover:text-slate-300 transition-colors">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-slate-300 mb-12">
            Ready to bring your ideas to life? I'd love to hear about your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="mailto:usama@example.com"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg"
            >
              Send me an email
            </a>
            <div className="flex gap-6">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
                LinkedIn
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-purple-400 transition-colors">
                GitHub
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-700">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p>&copy; 2024 Usama Javed. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}