// Updated: 2025-10-07 04:54 - Left list, Right photo layout
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export default function TeamSection() {
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);
  const [activeMember, setActiveMember] = useState<number>(0);

  const teamMembers: TeamMember[] = [
    {
      id: "usama-javed",
      name: "Usama Javed",
      role: "Full Stack Developer",
      company: "Digital Innovation Architect",
      image: "/team/usama-javed.png",
      socials: {
        linkedin: "https://www.linkedin.com/in/hellofromusama/",
        twitter: "https://x.com/HelloFromUsama_",
        github: "https://github.com/hellofromusama"
      }
    },
    {
      id: "member-2",
      name: "Team Member 2",
      role: "Frontend Engineer",
      company: "Tech Company",
      image: "/team/placeholder-2.jpg",
      socials: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: "member-3",
      name: "Team Member 3",
      role: "Backend Developer",
      company: "Innovation Labs",
      image: "/team/placeholder-3.jpg",
      socials: {
        linkedin: "#",
        github: "#"
      }
    },
    {
      id: "member-4",
      name: "Team Member 4",
      role: "DevOps Engineer",
      company: "Cloud Systems",
      image: "/team/placeholder-4.jpg",
      socials: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: "member-5",
      name: "Team Member 5",
      role: "UI/UX Designer",
      company: "Creative Studio",
      image: "/team/placeholder-5.jpg",
      socials: {
        linkedin: "#"
      }
    },
    {
      id: "member-6",
      name: "Team Member 6",
      role: "Product Manager",
      company: "Digital Products",
      image: "/team/placeholder-6.jpg",
      socials: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: "member-7",
      name: "Team Member 7",
      role: "Data Scientist",
      company: "AI Solutions",
      image: "/team/placeholder-7.jpg",
      socials: {
        linkedin: "#",
        github: "#"
      }
    }
  ];

  // Auto-cycle through team members
  useEffect(() => {
    if (hoveredMember === null) {
      const interval = setInterval(() => {
        setActiveMember((prev) => (prev + 1) % teamMembers.length);
      }, 3000); // Change every 3 seconds

      return () => clearInterval(interval);
    }
  }, [hoveredMember, teamMembers.length]);

  const displayedMember = hoveredMember
    ? teamMembers.find(m => m.id === hoveredMember)
    : teamMembers[activeMember];

  return (
    <section className="relative z-10 py-32 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white">
            Featured Team
          </h2>
          <Link
            href="/team"
            className="group bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-semibold transition-all duration-300 flex items-center gap-2 text-sm uppercase tracking-wider"
          >
            <span>View all team</span>
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>

        {/* Team Layout - Left List, Right Photo */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Team Members List */}
          <div className="space-y-0 border-t border-slate-800">
            {teamMembers.map((member, index) => {
              const isActive = hoveredMember === member.id || (hoveredMember === null && index === activeMember);

              return (
                <div
                  key={member.id}
                  className={`group border-b border-slate-800 py-6 cursor-pointer transition-all duration-500 ${
                    isActive ? 'bg-slate-900/50' : 'hover:bg-slate-900/30'
                  }`}
                  onMouseEnter={() => setHoveredMember(member.id)}
                  onMouseLeave={() => setHoveredMember(null)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className={`text-2xl md:text-3xl font-bold transition-all duration-300 ${
                        isActive ? 'text-white' : 'text-slate-600 group-hover:text-slate-400'
                      }`}>
                        {member.name.toUpperCase()}
                      </h3>
                      <p className={`text-sm md:text-base mt-1 transition-all duration-300 ${
                        isActive ? 'text-orange-400 opacity-100' : 'text-slate-700 opacity-0 group-hover:opacity-100'
                      }`}>
                        {member.role}, {member.company}
                      </p>
                    </div>

                    {/* Social Icons - Show on hover or active */}
                    <div className={`flex gap-3 transition-all duration-300 ${
                      isActive ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0'
                    }`}>
                      {member.socials.twitter && (
                        <a
                          href={member.socials.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-white transition-colors duration-200"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                          </svg>
                        </a>
                      )}
                      {member.socials.linkedin && (
                        <a
                          href={member.socials.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-white transition-colors duration-200"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        </a>
                      )}
                      {member.socials.github && (
                        <a
                          href={member.socials.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-white transition-colors duration-200"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Side - Large Photo Display */}
          <div className="lg:sticky lg:top-32 h-[600px] relative">
            <div className="w-full h-full relative overflow-hidden rounded-lg bg-slate-900">
              {teamMembers.map((member) => {
                const isDisplayed = displayedMember?.id === member.id;

                return (
                  <div
                    key={member.id}
                    className={`absolute inset-0 transition-opacity duration-700 ${
                      isDisplayed ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    {member.image.includes('placeholder') ? (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900">
                        <div className="text-center">
                          <div className="w-48 h-48 mx-auto rounded-full bg-slate-700/50 border-4 border-slate-600 flex items-center justify-center mb-6">
                            <span className="text-6xl font-bold text-slate-400">
                              {member.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <p className="text-slate-500 text-lg">Photo coming soon</p>
                        </div>
                      </div>
                    ) : (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
