"use client";

import { useState, useEffect, useRef } from "react";

export default function Hero3D() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Calculate rotation based on mouse position relative to center
      const rotateX = ((e.clientY - centerY) / rect.height) * -20; // Reduced for subtler effect
      const rotateY = ((e.clientX - centerX) / rect.width) * 20;

      setMousePosition({ x: rotateY, y: rotateX });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20 animate-gradient-shift" />

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-pink-500/10 rounded-full blur-2xl animate-pulse" />
      </div>

      {/* Main 3D container */}
      <div
        ref={containerRef}
        className="relative z-10 perspective-1000"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className="relative w-80 h-80 md:w-96 md:h-96 transition-all duration-300 ease-out preserve-3d"
          style={{
            transform: `rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg) ${
              isHovered ? "scale(1.05)" : "scale(1)"
            }`,
          }}
        >
          {/* 3D Card with layers */}
          <div className="relative w-full h-full preserve-3d">
            {/* Back layer - deepest shadow */}
            <div
              className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-600 to-purple-600 opacity-30 blur-xl"
              style={{ transform: "translateZ(-60px)" }}
            />

            {/* Middle layer - medium shadow */}
            <div
              className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500 to-purple-500 opacity-50 blur-lg"
              style={{ transform: "translateZ(-30px)" }}
            />

            {/* Front card */}
            <div
              className="absolute inset-0 rounded-3xl overflow-hidden border border-slate-700/50 backdrop-blur-sm bg-slate-900/80"
              style={{ transform: "translateZ(0px)" }}
            >
              {/* Profile Image */}
              <div className="relative w-full h-full">
                <img
                  src="/team/usama-javed.png"
                  alt="Usama Javed"
                  className="w-full h-full object-cover"
                />

                {/* Gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent" />

                {/* Shine effect */}
                <div
                  className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(
                      ${mousePosition.x + 45}deg,
                      transparent 30%,
                      rgba(255, 255, 255, 0.1) 50%,
                      transparent 70%
                    )`,
                  }}
                />
              </div>

              {/* Name overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Usama Javed
                </h3>
                <p className="text-blue-400 text-sm md:text-base">
                  Full Stack Developer & Digital Innovation Architect
                </p>
              </div>
            </div>

            {/* Floating accent layer */}
            <div
              className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-400/20 to-purple-400/20 blur-2xl"
              style={{
                transform: `translateZ(${isHovered ? "40px" : "20px"}) scale(1.1)`,
                transition: "transform 0.3s ease-out",
              }}
            />

            {/* Orbiting particles */}
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-60"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: `
                    translateZ(80px)
                    rotate(${i * 45}deg)
                    translateX(200px)
                    translateY(-50%)
                  `,
                  animation: `orbit-${i} 20s linear infinite`,
                }}
              />
            ))}
          </div>

          {/* Wireframe cube effect */}
          <div className="absolute inset-0 preserve-3d pointer-events-none opacity-20">
            {/* Top face */}
            <div
              className="absolute inset-0 border border-blue-400/30"
              style={{ transform: "rotateX(90deg) translateZ(200px)" }}
            />
            {/* Bottom face */}
            <div
              className="absolute inset-0 border border-purple-400/30"
              style={{ transform: "rotateX(90deg) translateZ(-200px)" }}
            />
            {/* Left face */}
            <div
              className="absolute inset-0 border border-pink-400/30"
              style={{ transform: "rotateY(90deg) translateZ(-200px)" }}
            />
            {/* Right face */}
            <div
              className="absolute inset-0 border border-cyan-400/30"
              style={{ transform: "rotateY(90deg) translateZ(200px)" }}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }

        .preserve-3d {
          transform-style: preserve-3d;
        }

        @keyframes gradient-shift {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }

        .animate-gradient-shift {
          animation: gradient-shift 10s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        .animate-float {
          animation: float 20s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float 20s ease-in-out infinite;
          animation-delay: -10s;
        }

        ${[...Array(8)]
          .map(
            (_, i) => `
          @keyframes orbit-${i} {
            from {
              transform: translateZ(80px) rotate(${i * 45}deg) translateX(200px);
            }
            to {
              transform: translateZ(80px) rotate(${i * 45 + 360}deg) translateX(200px);
            }
          }
        `
          )
          .join("\n")}
      `}</style>
    </div>
  );
}
