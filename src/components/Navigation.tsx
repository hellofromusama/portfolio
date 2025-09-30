'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavigationProps {
  currentPage?: string;
}

export default function Navigation({ currentPage }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const isActivePage = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  const navItems = [
    { href: '/', label: 'Home', color: 'text-blue-400' },
    { href: '/ideas', label: 'Ideas', color: 'text-purple-400' },
    { href: '/contact', label: 'Contact', color: 'text-blue-400' },
    { href: '/budget', label: 'Budget', color: 'text-green-400' },
    { href: '/fund-me', label: '💖 Fund Me', color: 'text-pink-400' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-lg border-b-2 border-blue-500/50 shadow-lg shadow-blue-500/20' : 'bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="group text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent hover:scale-110 transition-transform duration-300">
            <span className="relative">
              UJ
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
            </span>
          </Link>

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

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative transition-all duration-300 hover:scale-105 ${
                  isActivePage(item.href)
                    ? `${item.color} font-semibold`
                    : `text-slate-300 hover:${item.color}`
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 ${isActivePage(item.href) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
            ))}

            {/* Home page specific navigation */}
            {pathname === '/' && (
              <>
                <a href="#about" className="hover:text-blue-400 transition-all duration-300 hover:scale-105">About</a>
                <a href="#projects" className="hover:text-blue-400 transition-all duration-300 hover:scale-105">Projects</a>
                <a href="#skills" className="hover:text-blue-400 transition-all duration-300 hover:scale-105">Skills</a>
              </>
            )}

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
          <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-700/50 animate-slide-down">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block text-lg transition-colors duration-300 py-2 ${
                    isActivePage(item.href)
                      ? `${item.color} font-semibold`
                      : `hover:${item.color}`
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              {/* Home page specific navigation for mobile */}
              {pathname === '/' && (
                <>
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
                </>
              )}

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

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-down {
          animation: slide-down 0.3s ease-out;
        }
      `}</style>
    </nav>
  );
}