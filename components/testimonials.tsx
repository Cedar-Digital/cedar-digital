'use client';

import { useState, useRef, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import Particles from './particles';

export default function Testimonials() {
  const [active, setActive] = useState<number>(0);
  const [autorotate, setAutorotate] = useState<boolean>(true);
  const [autorotateTiming] = useState<number>(7000);

  const items = [
    {
      quote:
        'Filled our pipeline with wildfire mitigation jobs to the point where we actually had to turn our ads OFF! Cedar\'s approach to ad targeting and lead generation has been incredibly effective, helping us scale faster than we ever imagined.',
      name: 'Austin Gray',
      role: 'Founder at Bear Claw Land Services',
    },
    {
      quote:
        'In the past 2 months we\'ve pulled in $300,000 of work. Cedar\'s campaigns have consistently delivered high-quality leads, and their expertise in running targeted ads has been instrumental in driving our business growth to new heights.',
      name: 'Jacob Painter',
      role: 'Founder at Painter Land Development',
    },
    {
      quote:
        'Closed a job just 4 DAYS after running ads with Cedar. Their strategies are precise and effective, and the results speak for themselves. Partnering with them has been one of the best decisions for our business.',
      name: 'Trevor Fontaine',
      role: 'Founder at CCFM',
    },
  ];

  const testimonials = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!autorotate) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1 === items.length ? 0 : prev + 1));
    }, autorotateTiming);
    return () => clearInterval(interval);
  }, [autorotate, items.length]);

  const heightFix = () => {
    if (testimonials.current && testimonials.current.parentElement)
      testimonials.current.parentElement.style.height = `${testimonials.current.clientHeight}px`;
  };

  useEffect(() => {
    heightFix();
  }, []);

  return (
    <section className="bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="relative pb-12 md:pb-20">
          {/* Particles animation */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 -z-10 w-80 h-80 -mt-6">
            <Particles
              className="absolute inset-0 -z-10"
              quantity={10}
              staticity={40}
            />
          </div>

          {/* Carousel */}
          <div className="text-center">
            {/* Text */}
            <div className="mb-10 transition-all duration-150 delay-300 ease-in-out">
              <div className="relative flex flex-col" ref={testimonials}>
                {items.map((item, index) => (
                  <Transition
                    key={index}
                    show={active === index}
                    enter="transition ease-in-out duration-500 delay-200 order-first"
                    enterFrom="opacity-0 -translate-x-4"
                    enterTo="opacity-100 translate-x-0"
                    leave="transition ease-out duration-300 delay-300 absolute"
                    leaveFrom="opacity-100 translate-x-0"
                    leaveTo="opacity-0 translate-x-4"
                    beforeEnter={() => heightFix()}
                  >
                    <div className="text-xl font-semibold text-black">
                      {item.quote}
                    </div>
                  </Transition>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center -m-1.5">
              {items.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActive(index);
                    setAutorotate(false);
                  }}
                  className={`btn-sm m-1.5 text-xs py-1.5 transition duration-150 ease-in-out border border-black rounded-full px-4 ${
                    active === index
                      ? 'bg-black text-white'
                      : 'bg-white text-black hover:bg-black hover:text-white'
                  }`}
                >
                  <span className="relative">
                    {item.name} - {item.role}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
