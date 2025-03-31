'use client'

import { useState } from "react";
import Image from "next/image";
import { Transition } from "@headlessui/react";
import Particles from "./particles";
import Illustration from "@/public/images/glow-top.svg";

export default function Features() {
  const companies = [
    {
      id: 1,
      name: "Inflame",
      tagline: "Influencer Marketing Platform",
      description:
        "A revolutionary platform that bridges the gap between brands and authentic influencers. We're reimagining influencer marketing with AI-powered matching, real-time analytics, and seamless campaign management.",
      features: [
        "AI-powered influencer matching",
        "Real-time campaign analytics",
        "Automated payment processing",
        "Content performance tracking",
      ],
      website: "https://www.inflame.co/",
      icon: (
        <svg
          className="shrink-0 fill-white mr-3"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C6.477 2 2 6.477 2 12c0 5.524 4.477 10 10 10s10-4.476 10-10c0-5.523-4.477-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-5-8a5 5 0 0 0 10 0h-2a3 3 0 0 1-6 0H7zm1-3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm8 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
        </svg>
      ),
      bgClass: "bg-black",
    },
    {
      id: 2,
      name: "Earth Service Marketers",
      tagline: "Service Business Growth Agency",
      description:
        "A leading agency designed for service-based businesses to get more customers. We help businesses attract high-quality leads through proven digital marketing strategies, with a focus on industries like land clearing, excavation, tree removal, and more.",
      features: [
        "Google Ads Campaigns",
        "Meta Ads Management",
        "Content Creation",
        "Lead Generation",
      ],
      website: "https://www.earthservicemarketers.com/",
      icon: (
        <svg
          className="shrink-0 fill-white mr-3"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm7.931 9h-2.764a14.67 14.67 0 0 0-1.792-6.243A8.013 8.013 0 0 1 19.931 11zM12.53 4.027c1.035 1.364 2.427 3.78 2.627 6.973H12.53V4.027zm-1.06 0v6.973H8.803c.2-3.193 1.592-5.61 2.627-6.973zM7.625 4.757A14.67 14.67 0 0 0 5.833 11H3.069a8.013 8.013 0 0 1 4.556-6.243zM3.069 13h2.764a14.67 14.67 0 0 0 1.792 6.243A8.013 8.013 0 0 1 3.069 13zm8.461 6.973c-1.035-1.364-2.427-3.78-2.627-6.973H11.47v6.973zm1.06 0v-6.973h2.667c-.2 3.193-1.592 5.61-2.627 6.973zm3.905-1.73A14.67 14.67 0 0 0 18.167 13h2.764a8.013 8.013 0 0 1-4.556 6.243z" />
        </svg>
      ),
      bgClass: "bg-black",
    }
    // {
    //   id: 4,
    //   name: "Coming Soon",
    //   tagline: "Exciting New Ventures",
    //   description:
    //     "Stay tuned for our upcoming projects that will revolutionize the industry. We're working on something big and can't wait to share it with you.",
    //   features: [
    //     "Innovative Solutions",
    //     "Cutting-edge Technology",
    //     "Industry Leadership",
    //     "Global Impact",
    //   ],
    //   website: "#",
    //   icon: (
    //     <svg
    //       className="shrink-0 fill-white mr-3"
    //       xmlns="http://www.w3.org/2000/svg"
    //       width="24"
    //       height="24"
    //       viewBox="0 0 24 24"
    //     >
    //       <path d="M12 2C6.477 2 2 6.477 2 12c0 5.524 4.477 10 10 10s10-4.476 10-10c0-5.523-4.477-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-5-8a5 5 0 0 0 10 0h-2a3 3 0 0 1-6 0H7zm1-3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm8 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
    //     </svg>
    //   ),
    //   bgClass: "bg-black",
    // },
  ];

  return (
    <section className="relative">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Illustration */}
        <div
          className="absolute inset-0 -z-10 -mx-28 rounded-t-[3rem] pointer-events-none overflow-hidden"
          aria-hidden="true"
        >
          <div className="absolute left-1/2 -translate-x-1/2 top-0 -z-10">
            <Image
              src={Illustration}
              className="max-w-none"
              width={1404}
              height={658}
              alt="Features Illustration"
            />
          </div>
        </div>

        <div className="pt-16 pb-12 md:pt-52 md:pb-20">
          <div>
            {/* Section header */}
            <div className="text-center pb-12 md:pb-20">
              <div className="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-white to-white pb-3">
                Our Companies
              </div>
              <h2 className="h2 text-white mb-4">
                Building the Future Together
              </h2>
              <p className="text-lg text-white max-w-3xl mx-auto">
                Cedar Digital's portfolio companies are at the forefront of
                innovation, each bringing unique solutions to modern business
                challenges. Through technology and creativity, we're shaping the
                future of digital marketing and sustainable business.
              </p>
            </div>

            {/* Companies grid */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-6 lg:gap-12">
              {companies.map((company) => (
                <a
                  key={company.id}
                  href={company.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative group cursor-pointer overflow-hidden rounded-2xl ${company.bgClass} border border-white p-8 md:p-10 lg:p-12 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:border-white`}
                >
                  <div className="relative z-10">
                    <div className="flex items-center mb-3 md:mb-4">
                      {company.icon}
                      <h3 className="text-xl md:text-2xl font-bold text-white">
                        {company.name}
                      </h3>
                    </div>
                    <p className="text-sm md:text-base text-white font-medium mb-4 md:mb-6">
                      {company.tagline}
                    </p>
                    <p className="text-white mb-6 md:mb-8">
                      {company.description}
                    </p>
                    <div className="grid grid-cols-2 gap-4 md:gap-6">
                      {company.features.map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <svg
                            className="w-4 h-4 md:w-5 md:h-5 fill-white mr-2 flex-shrink-0"
                            viewBox="0 0 16 16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M13.382 2.618a2.25 2.25 0 0 1 0 3.182L7.05 12.132a2.25 2.25 0 0 1-3.182 0L1.618 9.882a2.25 2.25 0 0 1 3.182-3.182l.697.697L9.5 3.394a2.25 2.25 0 0 1 3.182 0Z" />
                          </svg>
                          <span className="text-sm md:text-base text-white">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Particle effect */}
                  <Particles
                    className="absolute inset-0 -z-10"
                    quantity={6}
                    staticity={30}
                  />

                  {/* Hover effect */}
                  <div className="absolute inset-0 -z-20 bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}