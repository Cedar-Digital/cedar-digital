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
      const topPosition = rect.top + offset;

      window.scrollTo({
        top: topPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white px-3 shadow-lg backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-black/20 before:[background:linear-gradient(theme(colors.white),theme(colors.white))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(black_0_0)_padding-box,_linear-gradient(black_0_0)]">
          
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            <ul className="flex grow flex-wrap items-center justify-center gap-4 text-sm lg:gap-8">
              <li>
                <button
                  onClick={() => handleScroll('hero')}
                  className="flex items-center transition text-black/70 hover:text-black"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll('about')}
                  className="flex items-center transition text-black/70 hover:text-black"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll('contact')}
                  className="flex items-center transition text-black/70 hover:text-black"
                >
                  Contact
                </button>
              </li>
            </ul>
          </nav>

          {/* CTA */}
          <ul className="flex flex-1 items-center justify-end gap-3">
            <li>
              <Link
                href="/join"
                className="btn-sm bg-black text-white hover:bg-gray-900 transition"
              >
                Join Cedar
              </Link>
            </li>
          </ul>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
