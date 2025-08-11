'use client'

import { useState, useRef, useEffect } from 'react'

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false)

  const trigger = useRef<HTMLButtonElement>(null)
  const mobileNav = useRef<HTMLDivElement>(null)

  // Smooth scrolling handler
  const handleScroll = (id: string) => {
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
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
    }
    setMobileNavOpen(false);
  };

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target as Node) || trigger.current.contains(target as Node)) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  return (
    <div className="md:hidden flex items-center justify-center ml-4">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`group inline-flex w-8 h-8 text-slate-600 hover:text-slate-900 text-center items-center justify-center transition`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg className="w-4 h-4 fill-current pointer-events-none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <rect 
            className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] -translate-y-[5px] group-[[aria-expanded=true]]:rotate-[315deg] group-[[aria-expanded=true]]:translate-y-0"
            y="7" 
            width="16" 
            height="2" 
            rx="1"
          />
          <rect 
            className="origin-center group-[[aria-expanded=true]]:rotate-45 transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)]"
            y="7" 
            width="16" 
            height="2" 
            rx="1"
          />
          <rect 
            className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] translate-y-[5px] group-[[aria-expanded=true]]:rotate-[135deg] group-[[aria-expanded=true]]:translate-y-0"
            y="7" 
            width="16" 
            height="2" 
            rx="1"
          />
        </svg>
      </button>

      {/*Mobile navigation */}
      <nav
        id="mobile-nav"
        ref={mobileNav}
        className="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out"
        style={mobileNavOpen ? { maxHeight: mobileNav.current?.scrollHeight, opacity: 1 } : { maxHeight: 0, opacity: 0.8 }}
      >
        <ul className="border border-white/20 bg-white/90 backdrop-blur-md rounded-lg px-4 py-1.5 flex flex-col items-center shadow-lg">
          <li>
            <button className="flex font-medium text-sm text-slate-600 hover:text-slate-900 py-1.5" onClick={() => handleScroll('home')}>Home</button>
          </li>
          <li>
            <button className="flex font-medium text-sm text-slate-600 hover:text-slate-900 py-1.5" onClick={() => handleScroll('about')}>About Joshua</button>
          </li>
          <li>
            <button className="flex font-medium text-sm text-slate-600 hover:text-slate-900 py-1.5" onClick={() => handleScroll('companies')}>Our Companies</button>
          </li>
          <li>
            <button className="flex font-medium text-sm text-slate-600 hover:text-slate-900 py-1.5" onClick={() => handleScroll('contact')}>Contact</button>
          </li>
        </ul>
      </nav>
    </div>
  )
}