'use client'

import { useState, useRef, useEffect } from "react";
import { Transition } from '@headlessui/react'
import Particles from './particles'

import TestimonialImg01 from '@/public/images/testimonial-01.jpg'
import TestimonialImg02 from '@/public/images/testimonial-02.jpg'
import TestimonialImg03 from '@/public/images/testimonial-03.jpg'

interface Item {
  quote: string
  name: string
  role: string
}

export default function Testimonials() {

  const [active, setActive] = useState<number>(0)
  const [autorotate, setAutorotate] = useState<boolean>(true)
  const [autorotateTiming] = useState<number>(7000)

  const items: Item[] = [
    {
      quote:
        "Filled our pipeline with wildfire mitigation jobs to the point where we actually had to turn our ads OFF! Cedar's approach to ad targeting and lead generation has been incredibly effective, helping us scale faster than we ever imagined.",
      name: "Austin Gray",
      role: "Founder at Bear Claw Land Services",
    },
    {

      quote:
        "In the past 2 months we've pulled in $300,000 of work. Cedar's campaigns have consistently delivered high-quality leads, and their expertise in running targeted ads has been instrumental in driving our business growth to new heights.",
      name: "Jacob Painter",
      role: "Founder at Painter Land Development",
    },
    {

      quote:
        "Closed a job just 4 DAYS after running ads with Cedar. Their strategies are precise and effective, and the results speak for themselves. Partnering with them has been one of the best decisions for our business.",
      name: "Trevor Fontaine",
      role: "Founder at CCFM",
    },
  ];

  const testimonials = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!autorotate) return
    const interval = setInterval(() => {
      setActive(active + 1 === items.length ? 0 : active => active + 1)
    }, autorotateTiming)
    return () => clearInterval(interval)
  }, [active, autorotate])

  const heightFix = () => {
    if (testimonials.current && testimonials.current.parentElement) testimonials.current.parentElement.style.height = `${testimonials.current.clientHeight}px`
  }

  useEffect(() => {
    heightFix()
  }, [])  

  return (
    <section>
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
                    <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white/60 via-white to-white/60">
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
                  className={`btn-sm m-1.5 text-xs py-1.5 text-white transition duration-150 ease-in-out [background:linear-gradient(theme(colors.gray.900),_theme(colors.gray.900))_padding-box,_conic-gradient(theme(colors.gray.400),_theme(colors.gray.700)_25%,_theme(colors.gray.700)_75%,_theme(colors.gray.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-gray-800/30 before:rounded-full before:pointer-events-none ${
                    active === index
                      ? "opacity-100"
                      : "opacity-30 hover:opacity-60"
                  }`}
                  key={index}
                  onClick={() => {
                    setActive(index);
                    setAutorotate(false);
                  }}
                >
                  <span className="relative">
                    <span className="text-white">{item.name}</span>{" "}
                    <span className="text-white">-</span>{" "}
                    <span>{item.role}</span>
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