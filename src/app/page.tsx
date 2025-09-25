"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const projects = [
    {
      id: "n8n-automation",
      title: "N8N Automation Platform",
      description: "Enterprise automation workflows connecting 200+ services with custom business logic",
      tech: ["N8N", "Node.js", "PostgreSQL", "Docker"],
      gradient: "from-blue-500 to-purple-600",
      category: "Automation"
    },
    {
      id: "voice-ai-agent",
      title: "Voice AI Booking Agent",
      description: "AI-powered voice assistant for automated appointment scheduling and customer service",
      tech: ["OpenAI", "Speech-to-Text", "Node.js", "WebRTC"],
      gradient: "from-purple-500 to-pink-600",
      category: "AI/ML"
    },
    {
      id: "erp-system",
      title: "Enterprise Resource Planning",
      description: "Full-scale ERP solution with inventory, CRM, and financial management modules",
      tech: ["React", "Node.js", "PostgreSQL", "Redis"],
      gradient: "from-green-500 to-blue-600",
      category: "Enterprise"
    },
    {
      id: "netsuite-integration",
      title: "NetSuite Integration Suite",
      description: "Custom SuiteScripts and RESTlets for seamless third-party integrations",
      tech: ["SuiteScript", "RESTlets", "JavaScript", "OAuth"],
      gradient: "from-orange-500 to-red-600",
      category: "Integration"
    },
    {
      id: "modern-portfolio",
      title: "Modern Portfolio Website",
      description: "This responsive portfolio built with Next.js 15, featuring modern animations and optimal performance",
      tech: ["Next.js 15", "React 19", "Tailwind CSS", "TypeScript"],
      gradient: "from-cyan-500 to-blue-600",
      category: "Web Development"
    },
    {
      id: "cloud-infrastructure",
      title: "Cloud Infrastructure Platform",
      description: "Scalable microservices architecture with automated CI/CD pipelines",
      tech: ["AWS", "Docker", "Kubernetes", "Terraform"],
      gradient: "from-yellow-500 to-orange-600",
      category: "DevOps"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div
          className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl transition-all duration-1000"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              UJ
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white hover:text-blue-400 transition-colors duration-300 p-2"
                aria-label="Toggle mobile menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>

            <div className="hidden md:flex space-x-8 items-center">
              <a href="#about" className="hover:text-blue-400 transition-all duration-300 hover:scale-105">About</a>
              <a href="#projects" className="hover:text-blue-400 transition-all duration-300 hover:scale-105">Projects</a>
              <a href="#skills" className="hover:text-blue-400 transition-all duration-300 hover:scale-105">Skills</a>
              <Link href="/ideas" className="hover:text-purple-400 transition-all duration-300 hover:scale-105">Ideas</Link>
              <Link href="/contact" className="hover:text-blue-400 transition-all duration-300 hover:scale-105">Contact</Link>
              <Link href="/tech-stack" className="hover:text-blue-400 transition-all duration-300 hover:scale-105">Tech</Link>
              <a
                href="https://wa.me/61433695387"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2"
                title="Chat on WhatsApp"
              >
                <span>💬</span>
              </a>
              <a
                href="https://www.linkedin.com/in/hellofromusama/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Hire Me →
              </a>
            </div>
          </div>

          {/* Mobile menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-700/50">
              <div className="px-4 py-6 space-y-4">
                <a
                  href="#about"
                  className="block text-lg hover:text-blue-400 transition-colors duration-300 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href="#projects"
                  className="block text-lg hover:text-blue-400 transition-colors duration-300 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Projects
                </a>
                <a
                  href="#skills"
                  className="block text-lg hover:text-blue-400 transition-colors duration-300 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Skills
                </a>
                <Link
                  href="/ideas"
                  className="block text-lg hover:text-purple-400 transition-colors duration-300 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Ideas
                </Link>
                <Link
                  href="/contact"
                  className="block text-lg hover:text-blue-400 transition-colors duration-300 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                <Link
                  href="/tech-stack"
                  className="block text-lg hover:text-blue-400 transition-colors duration-300 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Tech
                </Link>

                <div className="pt-4 border-t border-slate-700/50 space-y-3">
                  <a
                    href="https://wa.me/61433695387"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300"
                    title="Chat on WhatsApp"
                  >
                    <span>💬</span>
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/hellofromusama/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Hire Me →
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className={`relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 p-1 animate-spin-slow">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center text-5xl font-bold">
                UJ
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Usama Javed
              </span>
            </h1>

            <div className="text-3xl sm:text-4xl text-slate-300 mb-8 font-light">
              <span className="text-blue-400">Full Stack Developer</span> &{" "}
              <span className="text-purple-400">Digital Innovation Architect</span>
            </div>

            <p className="text-xl text-slate-400 max-w-4xl mx-auto mb-12 leading-relaxed">
              Passionate about creating innovative web applications, enterprise solutions, and AI-powered automation systems.
              Specializing in modern technologies, cloud platforms, NetSuite integrations, and scalable architectures.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="#projects"
                className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-10 py-5 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25"
              >
                <span className="group-hover:mr-2 transition-all duration-300">View My Work</span>
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>

              <a
                href="mailto:hellofromusama@gmail.com"
                className="group border-2 border-slate-600 hover:border-blue-400 text-slate-300 hover:text-white px-10 py-5 rounded-full font-semibold transition-all duration-300 hover:bg-blue-400/10"
              >
                <span className="group-hover:mr-2 transition-all duration-300">Get In Touch</span>
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">✉</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-32 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-semibold mb-6 text-blue-400">
                  Building Digital Excellence
                </h3>
                <p className="text-slate-300 mb-6 text-lg leading-relaxed">
                  I&apos;m a passionate full stack developer with 8+ years of expertise in modern web technologies,
                  enterprise solutions, and cloud platforms. I specialize in creating scalable applications that
                  drive business growth and digital transformation.
                </p>
                <p className="text-slate-300 mb-8 text-lg leading-relaxed">
                  From AI-powered automation systems to complex ERP solutions, I&apos;ve delivered projects across
                  various industries, focusing on performance, security, and exceptional user experiences.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-6 bg-slate-900/50 rounded-lg border border-slate-700">
                  <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
                  <div className="text-slate-300">Projects Delivered</div>
                </div>
                <div className="text-center p-6 bg-slate-900/50 rounded-lg border border-slate-700">
                  <div className="text-3xl font-bold text-purple-400 mb-2">8+</div>
                  <div className="text-slate-300">Years Experience</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-8 bg-gradient-to-r from-slate-900/80 to-slate-800/80 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h4 className="text-xl font-semibold text-purple-400">Innovation Leader</h4>
                </div>
                <p className="text-slate-300">
                  Leading digital transformation initiatives with cutting-edge technologies and AI integration.
                </p>
              </div>

              <div className="p-8 bg-gradient-to-r from-slate-900/80 to-slate-800/80 rounded-xl border border-slate-700 hover:border-green-500/50 transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h4 className="text-xl font-semibold text-green-400">Performance Expert</h4>
                </div>
                <p className="text-slate-300">
                  Optimizing applications for maximum performance, scalability, and exceptional user experiences.
                </p>
              </div>

              <div className="p-8 bg-gradient-to-r from-slate-900/80 to-slate-800/80 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">🔧</span>
                  </div>
                  <h4 className="text-xl font-semibold text-blue-400">Full Stack Mastery</h4>
                </div>
                <p className="text-slate-300">
                  End-to-end development expertise from database design to responsive frontends and cloud deployment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Skills Section */}
      <section id="skills" className="relative z-10 py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Technical Expertise
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 bg-slate-900/40 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 group">
              <h3 className="text-2xl font-semibold mb-6 text-blue-400 group-hover:scale-105 transition-transform duration-300">Frontend</h3>
              <div className="space-y-3">
                <div className="text-slate-300">React / Next.js 15</div>
                <div className="text-slate-300">TypeScript / JavaScript</div>
                <div className="text-slate-300">Tailwind CSS / SCSS</div>
                <div className="text-slate-300">Vue.js / Nuxt.js</div>
                <div className="text-slate-300">HTML5 / CSS3</div>
              </div>
            </div>

            <div className="p-8 bg-slate-900/40 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-all duration-300 group">
              <h3 className="text-2xl font-semibold mb-6 text-purple-400 group-hover:scale-105 transition-transform duration-300">Backend</h3>
              <div className="space-y-3">
                <div className="text-slate-300">Node.js / Express</div>
                <div className="text-slate-300">Python / Django</div>
                <div className="text-slate-300">PHP / Laravel</div>
                <div className="text-slate-300">PostgreSQL / MongoDB</div>
                <div className="text-slate-300">RESTful APIs / GraphQL</div>
              </div>
            </div>

            <div className="p-8 bg-slate-900/40 rounded-xl border border-slate-700 hover:border-green-500/50 transition-all duration-300 group">
              <h3 className="text-2xl font-semibold mb-6 text-green-400 group-hover:scale-105 transition-transform duration-300">Cloud & DevOps</h3>
              <div className="space-y-3">
                <div className="text-slate-300">AWS / Azure / GCP</div>
                <div className="text-slate-300">Docker / Kubernetes</div>
                <div className="text-slate-300">CI/CD Pipelines</div>
                <div className="text-slate-300">Terraform / CloudFormation</div>
                <div className="text-slate-300">Vercel / Netlify</div>
              </div>
            </div>

            <div className="p-8 bg-slate-900/40 rounded-xl border border-slate-700 hover:border-orange-500/50 transition-all duration-300 group">
              <h3 className="text-2xl font-semibold mb-6 text-orange-400 group-hover:scale-105 transition-transform duration-300">Specializations</h3>
              <div className="space-y-3">
                <div className="text-slate-300">NetSuite SuiteScripts</div>
                <div className="text-slate-300">NetSuite RESTlets</div>
                <div className="text-slate-300">N8N Automation</div>
                <div className="text-slate-300">AI/ML Integration</div>
                <div className="text-slate-300">ERP Systems</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Projects Section */}
      <section id="projects" className="relative z-10 py-32 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link key={project.id} href={`/projects/${project.id}`}>
                <div className="group bg-slate-900/50 rounded-xl border border-slate-700 overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 cursor-pointer">
                  <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-sm">
                      {project.category}
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-semibold mb-4 text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 mb-6 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300 font-semibold">
                        View Details →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Let&apos;s Work Together
          </h2>
          <p className="text-2xl text-slate-300 mb-16">
            Ready to bring your ideas to life? I&apos;d love to hear about your project.
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-12">
            <a
              href="mailto:hellofromusama@gmail.com"
              className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-10 py-5 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25"
            >
              <span className="group-hover:mr-2 transition-all duration-300">Send me an email</span>
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">✉</span>
            </a>

            <Link
              href="/contact"
              className="group border-2 border-slate-600 hover:border-blue-400 text-slate-300 hover:text-white px-10 py-5 rounded-full font-semibold transition-all duration-300 hover:bg-blue-400/10"
            >
              <span className="group-hover:mr-2 transition-all duration-300">Contact Form</span>
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">📝</span>
            </Link>
          </div>

          <div className="flex justify-center gap-8">
            <a
              href="https://www.linkedin.com/in/hellofromusama/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-all duration-300 hover:scale-110"
            >
              <span className="text-2xl">💼</span>
              <span className="group-hover:underline">LinkedIn</span>
            </a>
            <a
              href="https://github.com/hellofromusama"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-slate-400 hover:text-purple-400 transition-all duration-300 hover:scale-110"
            >
              <span className="text-2xl">👨‍💻</span>
              <span className="group-hover:underline">GitHub</span>
            </a>
            <a
              href="https://x.com/HelloFromUsama_"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-all duration-300 hover:scale-110"
            >
              <span className="text-2xl">🐦</span>
              <span className="group-hover:underline">X (Twitter)</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-700/50">
        <div className="max-w-7xl mx-auto text-center text-slate-400">
          <p>&copy; 2024 Usama Javed. All rights reserved. Built with Next.js 15 & deployed on Vercel.</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}