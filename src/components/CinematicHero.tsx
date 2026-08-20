import React, { useState } from 'react';
import {
  Search,
  User,
  Menu,
  X,
  Star,
  Clock,
  Calendar,
  Play,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

export function CinematicHero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Movies', delay: '100ms' },
    { name: 'TV Series', delay: '150ms' },
    { name: "Editor's Pick", delay: '200ms' },
    { name: 'Interviews', delay: '250ms' },
    { name: 'User Reviews', delay: '300ms' },
  ];

  return (
    <div className="relative w-screen h-screen overflow-hidden flex flex-col bg-black text-white font-['Inter',sans-serif] select-none">
      {/* BACKGROUND VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-0 pointer-events-none"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_094145_4a271a6c-3869-4f1c-8aa7-aeb0cb227994.mp4"
      />

      {/* BOTTOM BLUR OVERLAY (No gradient darkening) */}
      <div
        className="fixed inset-0 pointer-events-none z-[1] backdrop-blur-xl [mask-image:linear-gradient(to_top,black_0%,transparent_45%)] [-webkit-mask-image:linear-gradient(to_top,black_0%,transparent_45%)]"
        aria-hidden="true"
      />

      {/* NAVBAR */}
      <header className="relative z-50 w-full">
        <nav
          aria-label="Main Navigation"
          className="flex items-center justify-between px-4 sm:px-6 md:px-12 py-4 md:py-6"
        >
          {/* Left: Text Logo */}
          <div
            className="animate-blur-fade-up h-8 md:h-10 flex items-center text-xl md:text-2xl font-bold tracking-widest uppercase cursor-pointer"
            style={{ animationDelay: '0ms' }}
          >
            CINEMATIC
          </div>

          {/* Center (Desktop links) */}
          <ul className="hidden lg:flex items-center gap-8 list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={`#${link.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  className="animate-blur-fade-up text-sm font-medium text-white/90 hover:text-gray-300 transition-colors duration-200"
                  style={{ animationDelay: link.delay }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Controls */}
          <div className="flex items-center gap-3">
            {/* Search Pill Button (sm and up) */}
            <button
              type="button"
              className="animate-blur-fade-up hidden sm:flex items-center gap-2 px-4 md:px-6 py-2 rounded-full liquid-glass text-sm font-medium text-white hover:bg-white/10 transition-colors duration-200 cursor-pointer"
              style={{ animationDelay: '350ms' }}
              aria-label="Search"
            >
              <span>Search</span>
              <Search className="w-[18px] h-[18px]" />
            </button>

            {/* User Profile Button (sm and up) */}
            <button
              type="button"
              className="animate-blur-fade-up hidden sm:flex items-center justify-center w-10 h-10 rounded-full liquid-glass text-white hover:bg-white/10 transition-colors duration-200 cursor-pointer"
              style={{ animationDelay: '400ms' }}
              aria-label="User Profile"
            >
              <User className="w-[18px] h-[18px]" />
            </button>

            {/* Hamburger Button (below lg) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="animate-blur-fade-up lg:hidden relative w-10 h-10 rounded-full liquid-glass flex items-center justify-center text-white transition-colors duration-200 cursor-pointer overflow-hidden"
              style={{ animationDelay: '350ms' }}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              <Menu
                className={`w-[18px] h-[18px] absolute transition-all duration-500 ease-out ${
                  mobileMenuOpen ? 'rotate-180 opacity-0 scale-50' : 'rotate-0 opacity-100 scale-100'
                }`}
              />
              <X
                className={`w-[18px] h-[18px] absolute transition-all duration-500 ease-out ${
                  mobileMenuOpen ? 'rotate-0 opacity-100 scale-100' : '-rotate-180 opacity-0 scale-50'
                }`}
              />
            </button>
          </div>
        </nav>

        {/* MOBILE MENU DROPDOWN (below lg) */}
        <div
          className={`lg:hidden absolute top-[72px] left-0 w-full z-40 bg-gray-900/95 backdrop-blur-lg border-t border-b border-gray-800 shadow-2xl transition-all duration-500 ease-out ${
            mobileMenuOpen
              ? 'translate-y-0 opacity-100 pointer-events-auto'
              : '-translate-y-4 opacity-0 pointer-events-none'
          }`}
        >
          <div className="px-4 py-4 flex flex-col gap-2">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={`#${link.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 px-3 rounded-lg text-sm font-medium text-white hover:bg-gray-800/50 transition-all duration-300 transform"
                style={{
                  transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(-10px)',
                  transitionDelay: `${idx * 50}ms`,
                }}
              >
                {link.name}
              </a>
            ))}

            {/* Below sm search/user extra section */}
            <div className="sm:hidden pt-3 border-t border-gray-800 flex items-center justify-between gap-3 mt-2">
              <button
                type="button"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-full liquid-glass text-sm font-medium text-white"
              >
                <span>Search</span>
                <Search className="w-[18px] h-[18px]" />
              </button>
              <button
                type="button"
                className="flex items-center justify-center w-10 h-10 rounded-full liquid-glass text-white"
                aria-label="User Profile"
              >
                <User className="w-[18px] h-[18px]" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* HERO CONTENT */}
      <div className="flex-1 flex flex-col justify-end px-4 sm:px-6 md:px-12 pb-8 md:pb-16 z-10">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8">
          {/* Left Side */}
          <div className="flex-1 w-full text-left">
            {/* Metadata Row */}
            <div
              className="animate-blur-fade-up flex flex-wrap items-center gap-3 sm:gap-6 mb-6 md:mb-8 text-xs sm:text-sm text-gray-300"
              style={{ animationDelay: '300ms' }}
            >
              <div className="flex items-center gap-1.5 font-medium text-white">
                <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-white text-white" />
                <span>8.7/10 IMDB</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>132 min</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <span>April, 2025</span>
              </div>
            </div>

            {/* Title */}
            <h1
              className="animate-blur-fade-up text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-[-0.04em] mb-4 md:mb-6 text-white leading-tight"
              style={{ animationDelay: '400ms' }}
            >
              Step Through. Work Smarter.
            </h1>

            {/* Description */}
            <p
              className="animate-blur-fade-up text-base sm:text-lg md:text-xl text-gray-400 mb-6 md:mb-12 max-w-2xl leading-relaxed"
              style={{ animationDelay: '500ms' }}
            >
              A voyage through forgotten realms, where past and future intertwine.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                type="button"
                className="animate-blur-fade-up bg-white text-black rounded-full font-medium px-6 sm:px-8 py-2.5 sm:py-3 flex items-center gap-2.5 hover:bg-gray-200 transition-colors duration-200 cursor-pointer"
                style={{ animationDelay: '600ms' }}
              >
                <Play className="w-[18px] h-[18px] fill-black stroke-none" />
                <span>Watch Now</span>
              </button>

              <button
                type="button"
                className="animate-blur-fade-up rounded-full font-medium liquid-glass px-6 sm:px-8 py-2.5 sm:py-3 text-white hover:bg-white/10 transition-colors duration-200 cursor-pointer"
                style={{ animationDelay: '700ms' }}
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right Side (Navigation Arrows) */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-start md:justify-end">
            <button
              type="button"
              className="animate-blur-fade-up rounded-full liquid-glass px-4 sm:px-6 py-2.5 sm:py-3 text-white text-sm font-medium flex items-center gap-2 hover:bg-white/10 transition-colors duration-200 cursor-pointer"
              style={{ animationDelay: '800ms' }}
            >
              <ChevronLeft className="w-[18px] h-[18px]" />
              <span>Previous</span>
            </button>

            <button
              type="button"
              className="animate-blur-fade-up rounded-full liquid-glass px-4 sm:px-6 py-2.5 sm:py-3 text-white text-sm font-medium flex items-center gap-2 hover:bg-white/10 transition-colors duration-200 cursor-pointer"
              style={{ animationDelay: '900ms' }}
            >
              <span>Next</span>
              <ChevronRight className="w-[18px] h-[18px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CinematicHero;
