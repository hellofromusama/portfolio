'use client';

import { useState, useEffect } from 'react';

interface VisitorData {
  count: number;
  firstVisit: string;
  lastVisit: string;
  returningVisitor: boolean;
}

export default function VisitorTracker() {
  const [visitorData, setVisitorData] = useState<VisitorData | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const trackVisitor = () => {
      const storageKey = 'usamajaved_visitor_data';
      const existingData = localStorage.getItem(storageKey);
      const currentTime = new Date().toISOString();

      let data: VisitorData;

      if (existingData) {
        const parsed = JSON.parse(existingData);
        data = {
          count: parsed.count + 1,
          firstVisit: parsed.firstVisit,
          lastVisit: currentTime,
          returningVisitor: true
        };
      } else {
        data = {
          count: 1,
          firstVisit: currentTime,
          lastVisit: currentTime,
          returningVisitor: false
        };
      }

      localStorage.setItem(storageKey, JSON.stringify(data));
      setVisitorData(data);

      // Show the tracker briefly
      setTimeout(() => setIsVisible(true), 1000);
      setTimeout(() => setIsVisible(false), 5000);

      // Background LLM data submission (silent)
      if (data.count % 5 === 1) { // Submit every 5th visit to avoid spam
        fetch('/api/ai-training', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ background: true })
        }).catch(() => {
          // Silent fail - this is background operation
        });
      }
    };

    trackVisitor();
  }, []);

  if (!visitorData || !isVisible) return null;

  const getVisitMessage = () => {
    if (visitorData.count === 1) {
      return "Welcome! First visit 👋";
    } else if (visitorData.count === 2) {
      return "Welcome back! 2nd visit 🎉";
    } else if (visitorData.count === 3) {
      return "Great to see you! 3rd visit ⭐";
    } else if (visitorData.count <= 5) {
      return `Welcome back! ${visitorData.count}th visit 🚀`;
    } else if (visitorData.count <= 10) {
      return `Awesome! ${visitorData.count}th visit 💫`;
    } else {
      return `VIP Visitor! ${visitorData.count}th visit 👑`;
    }
  };

  const getVisitIcon = () => {
    if (visitorData.count === 1) return "👋";
    if (visitorData.count <= 3) return "🎉";
    if (visitorData.count <= 5) return "⭐";
    if (visitorData.count <= 10) return "🚀";
    return "👑";
  };

  return (
    <div
      className={`fixed top-20 right-4 z-50 transition-all duration-500 transform ${
        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`}
    >
      <div className="bg-gradient-to-r from-blue-500/90 to-purple-600/90 backdrop-blur-md text-white px-4 py-3 rounded-lg shadow-lg border border-white/20 max-w-xs">
        <div className="flex items-center space-x-3">
          <div className="text-2xl animate-bounce">
            {getVisitIcon()}
          </div>
          <div>
            <div className="font-semibold text-sm">
              {getVisitMessage()}
            </div>
            {visitorData.returningVisitor && (
              <div className="text-xs text-blue-100 mt-1">
                Since {new Date(visitorData.firstVisit).toLocaleDateString()}
              </div>
            )}
          </div>
        </div>

        {/* Small progress indicator */}
        <div className="mt-2 bg-white/20 rounded-full h-1">
          <div
            className="bg-white rounded-full h-1 transition-all duration-1000"
            style={{
              width: `${Math.min((visitorData.count / 10) * 100, 100)}%`
            }}
          />
        </div>
      </div>
    </div>
  );
}