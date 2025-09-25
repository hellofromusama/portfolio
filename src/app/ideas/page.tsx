"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Ideas() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    ideaType: "app",
    title: "",
    description: "",
    problem: "",
    targetAudience: "",
    budget: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const subject = encodeURIComponent(`New Idea: ${formData.title || "Untitled Project"}`);
      const body = encodeURIComponent(
        `=== NEW IDEA SUBMISSION ===\n\n` +
        `From: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Type: ${formData.ideaType === "app" ? "App Idea" : "Problem to Solve"}\n\n` +
        `Title: ${formData.title}\n\n` +
        `Description:\n${formData.description}\n\n` +
        `Problem Statement:\n${formData.problem}\n\n` +
        `Target Audience:\n${formData.targetAudience}\n\n` +
        `Budget Range: ${formData.budget}\n\n` +
        `========================\n` +
        `Let's bring this idea to life together!`
      );

      const mailtoLink = `mailto:hellofromusama@gmail.com?subject=${subject}&body=${body}`;

      // Create and click a temporary anchor element
      const link = document.createElement('a');
      link.href = mailtoLink;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setSubmitStatus("success");
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          ideaType: "app",
          title: "",
          description: "",
          problem: "",
          targetAudience: "",
          budget: "",
        });
        setSubmitStatus("idle");
      }, 3000);
    } catch {
      setSubmitStatus("error");
    }

    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const ideas = [
    { icon: "🚀", title: "Startup Ideas", desc: "Transform your vision into reality" },
    { icon: "📱", title: "Mobile Apps", desc: "iOS & Android solutions" },
    { icon: "🌐", title: "Web Platforms", desc: "Scalable web applications" },
    { icon: "🤖", title: "AI Solutions", desc: "Intelligent automation" },
    { icon: "🛍️", title: "E-commerce", desc: "Online marketplace solutions" },
    { icon: "🎮", title: "Gaming", desc: "Interactive experiences" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div
          className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl transition-all duration-1000"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
        <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

        {/* Floating Elements */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${15 + Math.random() * 10}s`
              }}
            >
              <div className="text-4xl opacity-10">💡</div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              UJ
            </Link>
            <div className="hidden md:flex space-x-8 items-center">
              <Link href="/#about" className="hover:text-blue-400 transition-all duration-300">About</Link>
              <Link href="/#projects" className="hover:text-blue-400 transition-all duration-300">Projects</Link>
              <Link href="/ideas" className="text-purple-400">Ideas</Link>
              <Link href="/contact" className="hover:text-blue-400 transition-all duration-300">Contact</Link>
              <a
                href="https://linkedin.com/in/usamajaved"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Hire Me →
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block mb-6">
            <div className="text-6xl animate-bounce-slow">💡</div>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
              Got an Idea?
            </span>
          </h1>
          <p className="text-2xl sm:text-3xl text-slate-300 mb-8">
            Let&apos;s Transform Your Vision into Reality
          </p>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Whether you have a groundbreaking app idea or a problem that needs solving,
            I&apos;m here to help bring your concepts to life with cutting-edge technology
            and innovative solutions.
          </p>
        </div>
      </section>

      {/* Idea Categories */}
      <section className="relative z-10 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
            {ideas.map((idea, index) => (
              <div
                key={index}
                className="group p-6 bg-slate-900/50 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:bg-purple-900/20"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">{idea.icon}</div>
                <h3 className="text-sm font-semibold text-purple-300 mb-1">{idea.title}</h3>
                <p className="text-xs text-slate-400">{idea.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="relative z-10 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-slate-900/90 to-purple-900/20 p-8 sm:p-12 rounded-2xl border border-purple-500/20 backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Share Your Vision
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-purple-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-purple-500/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-purple-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-purple-500/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="ideaType" className="block text-sm font-medium text-purple-300 mb-2">
                    Idea Type
                  </label>
                  <select
                    id="ideaType"
                    name="ideaType"
                    value={formData.ideaType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                  >
                    <option value="app">App Idea</option>
                    <option value="problem">Problem to Solve</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-purple-300 mb-2">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                  >
                    <option value="">Select Budget</option>
                    <option value="$1k-5k">$1,000 - $5,000</option>
                    <option value="$5k-10k">$5,000 - $10,000</option>
                    <option value="$10k-25k">$10,000 - $25,000</option>
                    <option value="$25k-50k">$25,000 - $50,000</option>
                    <option value="$50k+">$50,000+</option>
                    <option value="Equity/Partnership">Equity/Partnership</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="title" className="block text-sm font-medium text-purple-300 mb-2">
                  Project Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-purple-500/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                  placeholder="My Amazing App Idea"
                />
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-purple-300 mb-2">
                  Describe Your Idea
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-purple-500/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all resize-none"
                  placeholder="Explain your idea in detail..."
                />
              </div>

              <div>
                <label htmlFor="problem" className="block text-sm font-medium text-purple-300 mb-2">
                  What Problem Does It Solve?
                </label>
                <textarea
                  id="problem"
                  name="problem"
                  value={formData.problem}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-purple-500/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all resize-none"
                  placeholder="What problem are you trying to solve?"
                />
              </div>

              <div>
                <label htmlFor="targetAudience" className="block text-sm font-medium text-purple-300 mb-2">
                  Target Audience
                </label>
                <input
                  type="text"
                  id="targetAudience"
                  name="targetAudience"
                  value={formData.targetAudience}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-purple-500/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                  placeholder="Who will use this?"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 disabled:from-slate-600 disabled:to-slate-700 text-white py-4 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:scale-100 shadow-xl hover:shadow-purple-500/25"
              >
                {isSubmitting ? "Opening Email Client..." : "Submit Your Idea 🚀"}
              </button>

              {submitStatus === "success" && (
                <div className="text-green-400 text-center p-4 bg-green-400/10 rounded-lg border border-green-400/20">
                  <p className="mb-2">Your email client should open with your idea details!</p>
                  <p className="text-sm text-green-300">I&apos;ll review your idea and get back to you soon.</p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="text-red-400 text-center p-4 bg-red-400/10 rounded-lg border border-red-400/20">
                  <p>Something went wrong. Please try again or email directly to hellofromusama@gmail.com</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Why Work With Me */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-purple-900/10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Why Bring Your Ideas to Me?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-900/50 rounded-xl border border-purple-500/20">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-3 text-purple-400">Idea to Reality</h3>
              <p className="text-slate-300">
                I transform concepts into fully functional applications with modern technology stack
              </p>
            </div>
            <div className="p-8 bg-slate-900/50 rounded-xl border border-purple-500/20">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-3 text-purple-400">Rapid Prototyping</h3>
              <p className="text-slate-300">
                Quick MVP development to validate your ideas and get to market faster
              </p>
            </div>
            <div className="p-8 bg-slate-900/50 rounded-xl border border-purple-500/20">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-3 text-purple-400">End-to-End Support</h3>
              <p className="text-slate-300">
                From initial concept to deployment and maintenance, I&apos;m with you every step
              </p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.1; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 0.2; }
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .animate-float {
          animation: float 20s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}