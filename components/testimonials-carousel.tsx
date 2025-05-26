'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Particles from './particles';
import Highlighter, { HighlighterItem } from './highlighter';

import CarouselImg01 from '@/public/images/carousel-icon-01.svg';
import CarouselImg02 from '@/public/images/carousel-icon-02.svg';
import CarouselImg03 from '@/public/images/carousel-icon-03.svg';
import CarouselImg04 from '@/public/images/carousel-icon-04.svg';
import CarouselImg05 from '@/public/images/carousel-icon-05.svg';

// Import Swiper
import Swiper, { Navigation } from 'swiper';
import 'swiper/swiper.min.css';
Swiper.use([Navigation]);

export default function TestimonialsCarousel() {
  const [swiperInitialized, setSwiperInitialized] = useState<boolean>(false);

  useEffect(() => {
    const carousel = new Swiper('.stellar-carousel', {
      breakpoints: {
        320: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      },
      grabCursor: true,
      loop: false,
      centeredSlides: false,
      initialSlide: 0,
      spaceBetween: 24,
      navigation: {
        nextEl: '.carousel-next',
        prevEl: '.carousel-prev',
      },
    });
    setSwiperInitialized(true);
  }, []);

  const items = [
    {
      img: CarouselImg04,
      title: 'Custom Software Solutions',
      description:
        'Streamline your business with bespoke applications and platforms designed to meet your unique needs and enhance efficiency.',
    },
    {
      img: CarouselImg01,
      title: 'Targeted Paid Marketing',
      description:
        'Boost your reach with precise paid ad campaigns tailored to your audience. From Meta Ads to Google PPC, we ensure your message lands where it matters most.',
    },
    {
      img: CarouselImg05,
      title: 'FPV Drone Footage',
      description:
        'Take your marketing to new heights with stunning drone footage – perfect for capturing unique perspectives and creating standout content.',
    },
    {
      img: CarouselImg02,
      title: 'Content Creation that Converts',
      description:
        'From scroll-stopping visuals to engaging videos, we craft content that drives action and elevates your brand.',
    },
    {
      img: CarouselImg03,
      title: 'Social Media Campaigns',
      description:
        'Grow your online presence with powerful campaigns – paid influencer partnerships, organic strategies, and end-to-end management for all platforms.',
    },
    {
      img: CarouselImg05,
      title: 'Website Development',
      description:
        'Your digital storefront matters. We design and develop websites that not only look great but drive conversions and reflect your brand identity.',
    },
  ];

  return (
    <section className="relative bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <div>
              <div className="inline-flex font-medium text-black pb-3">
                Our Services
              </div>
            </div>
            <h2 className="h2 text-black pb-4">What's Possible</h2>
            <p className="text-lg text-black/70">
              Discover the range of services we provide to help your business
              thrive in the digital landscape.
            </p>
          </div>

          {/* Carousel */}
          <div className="relative before:absolute before:inset-0 before:-translate-x-full before:z-20 before:bg-gradient-to-l before:from-transparent before:to-white after:absolute after:inset-0 after:translate-x-full after:z-20 after:bg-gradient-to-r after:from-transparent after:to-white">
            <div className="stellar-carousel swiper-container group">
              <Highlighter className="swiper-wrapper w-fit" refresh={swiperInitialized}>
                {items.map((item, idx) => (
                  <HighlighterItem key={idx} className="swiper-slide h-auto group/slide">
                    <a href="/contact" className="block h-full">
                      <div className="relative h-full bg-white rounded-[inherit] z-20 overflow-hidden min-h-[350px]">
                        <Particles
                          className="absolute inset-0 -z-10 opacity-0 group-[.swiper-slide-active]/slide:opacity-100 group-hover/slide:opacity-100 transition-opacity duration-500 ease-in-out"
                          quantity={3}
                          refresh={swiperInitialized}
                        />
                        <div
                          className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square"
                          aria-hidden="true"
                        >
                          <div className="absolute inset-0 translate-z-0 rounded-full bg-black blur-[60px]" />
                        </div>
                        <div className="flex flex-col p-6 h-full space-y-4 relative text-black">
                          <Image
                            className="mb-3"
                            src={item.img}
                            width={56}
                            height={56}
                            alt={item.title}
                          />
                          <div className="grow space-y-2">
                            <div className="font-bold text-lg mb-1">{item.title}</div>
                            <div className="text-black/70 mb-3">{item.description}</div>
                          </div>
                          <div className="flex-grow" />
                          <div className="absolute bottom right-6">
                            <span className="text-sm font-medium text-black/70 hover:text-black inline-flex items-center transition duration-150 ease-in-out group">
                              Learn More
                              <span className="tracking-normal text-black group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                                -&gt;
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </HighlighterItem>
                ))}
              </Highlighter>
            </div>
          </div>

          {/* Arrows */}
          <div className="flex mt-8 justify-end">
            <button className="carousel-prev relative z-20 w-12 h-12 flex items-center justify-center group">
              <span className="sr-only">Previous</span>
              <svg
                className="w-4 h-4 fill-black group-hover:fill-gray-700 transition duration-150 ease-in-out"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z" />
              </svg>
            </button>
            <button className="carousel-next relative z-20 w-12 h-12 flex items-center justify-center group">
              <span className="sr-only">Next</span>
              <svg
                className="w-4 h-4 fill-black group-hover:fill-gray-700 transition duration-150 ease-in-out"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
