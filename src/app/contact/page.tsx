"use client";

import { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create mailto link with form data
      const mailtoLink = `mailto:usama.javed@example.com?subject=${encodeURIComponent(
        formData.subject
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;

      // Open default email client
      window.location.href = mailtoLink;

      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setSubmitStatus("error");
    }

    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              UJ
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/#about" className="hover:text-blue-400 transition-all duration-300 hover:scale-105">About</Link>
              <Link href="/#projects" className="hover:text-blue-400 transition-all duration-300 hover:scale-105">Projects</Link>
              <Link href="/#skills" className="hover:text-blue-400 transition-all duration-300 hover:scale-105">Skills</Link>
              <Link href="/contact" className="text-blue-400">Contact</Link>
              <Link href="/tech-stack" className="hover:text-blue-400 transition-all duration-300 hover:scale-105">Tech Stack</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-2xl text-slate-300 mb-16">
            Let&apos;s discuss your project and bring your ideas to life
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-700">
              <h2 className="text-3xl font-bold mb-8 text-blue-400">Send a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:from-slate-600 disabled:to-slate-700 text-white py-4 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:scale-100 shadow-lg hover:shadow-blue-500/25"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>

                {submitStatus === "success" && (
                  <div className="text-green-400 text-center p-4 bg-green-400/10 rounded-lg border border-green-400/20">
                    Your email client should open with the message pre-filled!
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="text-red-400 text-center p-4 bg-red-400/10 rounded-lg border border-red-400/20">
                    Something went wrong. Please try again or email me directly.
                  </div>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-8 text-purple-400">Let&apos;s Connect</h2>
                <p className="text-slate-300 text-lg leading-relaxed mb-8">
                  I&apos;m always interested in discussing new opportunities, innovative projects,
                  and potential collaborations. Whether you have a specific project in mind or
                  just want to connect, I&apos;d love to hear from you.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-6 bg-slate-900/50 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">✉️</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-400 mb-1">Email</h3>
                    <a href="mailto:usama.javed@example.com" className="text-slate-300 hover:text-blue-400 transition-colors">
                      usama.javed@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-6 bg-slate-900/50 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">💼</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-purple-400 mb-1">LinkedIn</h3>
                    <a
                      href="https://linkedin.com/in/usamajaved"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-300 hover:text-purple-400 transition-colors"
                    >
                      linkedin.com/in/usamajaved
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-6 bg-slate-900/50 rounded-xl border border-slate-700 hover:border-green-500/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">👨‍💻</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-green-400 mb-1">GitHub</h3>
                    <a
                      href="https://github.com/hellofromusama"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-300 hover:text-green-400 transition-colors"
                    >
                      github.com/hellofromusama
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-6 bg-slate-900/50 rounded-xl border border-slate-700 hover:border-yellow-500/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-yellow-400 mb-1">Location</h3>
                    <span className="text-slate-300">Australia</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-8 rounded-2xl border border-blue-500/20">
                <h3 className="text-2xl font-semibold text-blue-400 mb-4">Response Time</h3>
                <p className="text-slate-300">
                  I typically respond to emails within 24 hours. For urgent inquiries,
                  feel free to mention it in your subject line.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}