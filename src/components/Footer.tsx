'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              UJ
            </Link>
            <p className="mt-4 text-slate-400 text-sm">
              Perth&apos;s #1 Full Stack Developer specializing in modern web technologies and AI integrations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-slate-400 hover:text-blue-400 transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/ideas" className="text-slate-400 hover:text-purple-400 transition-colors duration-300">
                  Ideas
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-blue-400 transition-colors duration-300">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/budget" className="text-slate-400 hover:text-green-400 transition-colors duration-300">
                  Budget Calculator
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Web Development</li>
              <li>AI Integration</li>
              <li>Enterprise Solutions</li>
              <li>Cloud Infrastructure</li>
              <li>Automation</li>
              <li>Consulting</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:hellofromusama@gmail.com"
                  className="text-slate-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2"
                >
                  <span>📧</span>
                  <span>hellofromusama@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/61433695387"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-green-400 transition-colors duration-300 flex items-center gap-2"
                >
                  <span>💬</span>
                  <span>WhatsApp</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/hellofromusama/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2"
                >
                  <span>💼</span>
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/hellofromusama"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2"
                >
                  <span>👨‍💻</span>
                  <span>GitHub</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {currentYear} Usama Javed. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-slate-400">
            <span>Made with ❤️ in Perth, Australia</span>
          </div>
        </div>
      </div>
    </footer>
  );
}