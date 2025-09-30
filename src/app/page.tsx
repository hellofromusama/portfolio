"use client";

import { useState, useEffect, lazy, Suspense } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import Navigation from "@/components/Navigation";

// Lazy load heavy components
const FAQ = dynamic(() => import("@/components/FAQ"), {
  loading: () => <div className="animate-pulse bg-slate-800/30 h-96"></div>,
  ssr: false
});

const VisitorTracker = dynamic(() => import("@/components/VisitorTracker"), {
  ssr: false
});

const VisitorCounter = dynamic(() => import("@/components/VisitorCounter"), {
  ssr: false
});

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMouseTracking, setIsMouseTracking] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    // Only enable mouse tracking on desktop
    if (window.innerWidth > 768) {
      setIsMouseTracking(true);
    }
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
      <VisitorTracker />
      <VisitorCounter />

      {/* Optimized Background - Only render mouse tracking on desktop */}
      {isMouseTracking && <MouseBackground />}

      {/* Static Background Elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Navigation */}
      <Navigation currentPage="home" />

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
              <div className="p-8 bg-gradient-to-r from-slate-900/80 to-slate-800/80 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-all duration-300 group">
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

      {/* FAQ Section - Lazy Loaded */}
      <Suspense fallback={<div className="animate-pulse bg-slate-800/30 h-96"></div>}>
        <FAQ />
      </Suspense>

      {/* Footer */}
      <footer className="relative z-10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-t-2 border-blue-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* About Section */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-3">
                Usama Javed
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Full Stack Developer based in Perth, Western Australia. Specializing in Next.js 15, React 19, AI integration, and enterprise solutions. 8+ years of experience delivering cutting-edge web applications.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/in/hellofromusama/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-all duration-300 transform hover:scale-110"
                  title="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="https://github.com/usamajaved"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-700 hover:bg-slate-600 text-white p-2 rounded-lg transition-all duration-300 transform hover:scale-110"
                  title="GitHub"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a
                  href="https://wa.me/61433695387"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-lg transition-all duration-300 transform hover:scale-110"
                  title="WhatsApp"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-3 text-sm">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="text-slate-400 hover:text-blue-400 transition-colors">Home</a></li>
                <li><a href="/ideas" className="text-slate-400 hover:text-blue-400 transition-colors">Ideas</a></li>
                <li><a href="/contact" className="text-slate-400 hover:text-blue-400 transition-colors">Contact</a></li>
                <li><a href="/budget" className="text-slate-400 hover:text-blue-400 transition-colors">Budget Calculator</a></li>
                <li><a href="/fund-me" className="text-slate-400 hover:text-pink-400 transition-colors">💖 Fund Me</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-semibold mb-3 text-sm">Get in Touch</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex items-center gap-2">
                  <span>📧</span>
                  <a href="mailto:hellofromusama@gmail.com" className="hover:text-blue-400 transition-colors">
                    hellofromusama@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <span>📱</span>
                  <a href="tel:+61433695387" className="hover:text-blue-400 transition-colors">
                    +61 433 695 387
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <span>📍</span>
                  <span>Perth, Western Australia</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>🌐</span>
                  <a href="https://usamajaved.com.au" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                    usamajaved.com.au
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-slate-700/50 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
              <p className="text-center md:text-left">
                &copy; {new Date().getFullYear()} Usama Javed. All rights reserved.
              </p>
              <p className="text-center md:text-right">
                Built with ❤️ using <span className="text-blue-400 font-semibold">Next.js 15</span> & <span className="text-purple-400 font-semibold">React 19</span>
              </p>
            </div>
          </div>
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

// Separate component for mouse tracking background - only loaded on desktop
function MouseBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let rafId: number;
    let lastX = 0;
    let lastY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      // Use requestAnimationFrame for smooth updates
      if (rafId) cancelAnimationFrame(rafId);

      rafId = requestAnimationFrame(() => {
        const deltaX = Math.abs(e.clientX - lastX);
        const deltaY = Math.abs(e.clientY - lastY);

        // Only update if mouse moved significantly
        if (deltaX > 5 || deltaY > 5) {
          lastX = e.clientX;
          lastY = e.clientY;
          setMousePosition({ x: e.clientX, y: e.clientY });
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <div
        className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl transition-all duration-1000 will-change-transform"
        style={{
          transform: `translate3d(${mousePosition.x - 192}px, ${mousePosition.y - 192}px, 0)`,
        }}
      />
    </div>
  );
}