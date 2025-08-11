'use client';

import Link from 'next/link';
import Logo from './logo';
import MobileMenu from './mobile-menu';

export default function Header() {
  // Smooth scrolling handler
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const rect = element.getBoundingClientRect();
      const offset = window.pageYOffset || document.documentElement.scrollTop;
      const topPosition = rect.top + offset - 80; // Account for fixed header

      window.scrollTo({
        top: topPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 backdrop-blur-md px-3 shadow-lg border border-white/20 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-black/5">
          
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            <ul className="flex grow flex-wrap items-center justify-center gap-4 text-sm lg:gap-8">
              <li>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="flex items-center transition text-slate-600 hover:text-slate-900 font-medium"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll('about')}
                  className="flex items-center transition text-slate-600 hover:text-slate-900 font-medium"
                >
                  About Joshua
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll('companies')}
                  className="flex items-center transition text-slate-600 hover:text-slate-900 font-medium"
                >
                  Our Companies
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll('contact')}
                  className="flex items-center transition text-slate-600 hover:text-slate-900 font-medium"
                >
                  Contact
                </button>
              </li>
            </ul>
          </nav>

          {/* CTA */}
          <ul className="flex flex-1 items-center justify-end gap-3">
            <li>
              <button
                onClick={() => handleScroll('contact')}
                className="btn-sm bg-slate-900 text-white hover:bg-slate-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Let's Connect
              </button>
            </li>
          </ul>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}