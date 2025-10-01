'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900/20 to-slate-900 text-white">
      {/* Confetti Effect */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-${Math.random() * 20}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            >
              {['💚', '🤍', '🧡', '✨', '⭐'][Math.floor(Math.random() * 5)]}
            </div>
          ))}
        </div>
      )}

      <div className="pt-32 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Success Card */}
          <div className="bg-gradient-to-br from-slate-800/80 to-green-900/30 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-green-500/50 shadow-2xl shadow-green-500/20">
            {/* Success Icon */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full mb-4 animate-pulse">
                <svg
                  className="w-12 h-12 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Thank You for Your Support!
              </h1>
              <p className="text-lg text-slate-300 mb-2">
                Your donation has been received successfully.
              </p>
              {sessionId && (
                <p className="text-sm text-slate-400 font-mono">
                  Transaction ID: {sessionId.slice(0, 20)}...
                </p>
              )}
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent my-8"></div>

            {/* Impact Message */}
            <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6 mb-6">
              <h2 className="text-xl font-semibold mb-3 text-green-400">
                Your Impact
              </h2>
              <p className="text-slate-300 mb-4">
                Your generous contribution will directly help the people of Azad Kashmir who are facing violence and oppression. Every donation makes a real difference in providing:
              </p>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Medical care and emergency supplies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Legal assistance for affected families</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Essential support for bereaved families</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Documentation and humanitarian efforts</span>
                </li>
              </ul>
            </div>

            {/* What's Next */}
            <div className="bg-slate-900/50 rounded-xl p-6 mb-6">
              <h2 className="text-lg font-semibold mb-3 text-green-400">
                What Happens Next?
              </h2>
              <ol className="space-y-2 text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-green-400">1.</span>
                  <span>You will receive an email confirmation with your receipt</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-green-400">2.</span>
                  <span>Your donation will be allocated to urgent humanitarian needs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-green-400">3.</span>
                  <span>You can track how funds are being used on our transparency page</span>
                </li>
              </ol>
            </div>

            {/* Contact Info */}
            <div className="bg-gradient-to-br from-slate-900/50 to-green-900/20 rounded-xl p-6 mb-6 border border-slate-700">
              <h3 className="text-lg font-semibold mb-3 text-green-400">Questions or Updates?</h3>
              <p className="text-sm text-slate-300 mb-4">
                For any questions about your donation or to receive updates on how funds are being used, please contact:
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-xl">👤</span>
                  <div>
                    <p className="font-semibold text-white">Khawaja Jamal Chak</p>
                    <p className="text-xs text-slate-400">Donation Coordinator</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-xl">📧</span>
                  <a href="mailto:zaaain.jamaal@gmail.com" className="text-green-400 hover:text-green-300">
                    zaaain.jamaal@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-xl">📞</span>
                  <a href="tel:+61403053888" className="text-green-400 hover:text-green-300">
                    +61 403 053 888
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-xl">📱</span>
                  <a
                    href="https://www.instagram.com/zainjamalchak_official/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-300"
                  >
                    @zainjamalchak_official
                  </a>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/fund-kashmir/usage"
                className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-6 py-4 rounded-lg font-semibold text-center transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                View Fund Usage
              </Link>
              <Link
                href="/fund-kashmir"
                className="flex-1 bg-slate-700 hover:bg-slate-600 text-white px-6 py-4 rounded-lg font-semibold text-center transition-all duration-300"
              >
                Back to Donation Page
              </Link>
            </div>
          </div>

          {/* Share Message */}
          <div className="mt-8 text-center">
            <p className="text-slate-400 mb-4">
              Help us spread awareness about the crisis in Azad Kashmir
            </p>
            <div className="flex justify-center gap-4">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent('I just donated to support the people of Azad Kashmir. Join me in making a difference.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-green-400 transition-colors"
              >
                Share on Twitter
              </a>
              <span className="text-slate-600">•</span>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://usamajaved.com.au/fund-kashmir')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-green-400 transition-colors"
              >
                Share on Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900/20 to-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-t-4 border-green-500 border-solid rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-300">Loading...</p>
        </div>
      </div>
    }>
      <SuccessContent />
    </Suspense>
  );
}
