'use client';

import { useState } from 'react';
import Image from 'next/image';
import Particles from './particles';

export default function CompaniesPortfolio() {
  const [activeCompany, setActiveCompany] = useState(0);

  const companies = [
    {
      id: 1,
      name: 'Earth Service Marketers',
      tagline: 'Specialized Marketing for Earth-Moving Services',
      description: 'ESM specializes in advertising for earth-moving equipment and outdoor services, bringing niche expertise and tailored marketing strategies to clients in industries that are often overlooked. We help businesses in land clearing, excavation, tree removal, and more attract high-quality leads through proven digital marketing strategies.',
      features: [
        'Google Ads Campaigns',
        'Meta Ads Management', 
        'Content Creation',
        'Lead Generation',
        'Industry Expertise',
        'ROI-Focused Strategies'
      ],
      website: 'https://www.earthservicemarketers.com/',
      status: 'Active',
      founded: '2022',
      bgGradient: 'from-green-600 to-emerald-700',
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm7.931 9h-2.764a14.67 14.67 0 0 0-1.792-6.243A8.013 8.013 0 0 1 19.931 11zM12.53 4.027c1.035 1.364 2.427 3.78 2.627 6.973H12.53V4.027zm-1.06 0v6.973H8.803c.2-3.193 1.592-5.61 2.627-6.973zM7.625 4.757A14.67 14.67 0 0 0 5.833 11H3.069a8.013 8.013 0 0 1 4.556-6.243zM3.069 13h2.764a14.67 14.67 0 0 0 1.792 6.243A8.013 8.013 0 0 1 3.069 13zm8.461 6.973c-1.035-1.364-2.427-3.78-2.627-6.973H11.47v6.973zm1.06 0v-6.973h2.667c-.2 3.193-1.592 5.61-2.627 6.973zm3.905-1.73A14.67 14.67 0 0 0 18.167 13h2.764a8.013 8.013 0 0 1-4.556 6.243z" />
        </svg>
      ),
    },
    {
      id: 2,
      name: 'Inflame',
      tagline: 'Next-Generation Influencer Marketing Platform',
      description: 'Inflame is our cutting-edge influencer marketing platform that connects businesses with authentic influencers to create impactful campaigns. Using AI-powered matching, real-time analytics, and seamless campaign management, we\'re revolutionizing how brands and influencers collaborate.',
      features: [
        'AI-Powered Matching',
        'Real-Time Analytics',
        'Campaign Management',
        'Performance Tracking',
        'Automated Payments',
        'Content Optimization'
      ],
      website: 'https://www.inflame.co/',
      status: 'Launching Soon',
      founded: '2024',
      bgGradient: 'from-purple-600 to-pink-600',
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 5.524 4.477 10 10 10s10-4.476 10-10c0-5.523-4.477-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-5-8a5 5 0 0 0 10 0h-2a3 3 0 0 1-6 0H7zm1-3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm8 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="companies" className="relative bg-slate-50 py-20 md:py-32">
      {/* Background particles */}
      <Particles className="absolute inset-0 -z-10" quantity={30} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-full mb-4">
            Our Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Building Tomorrow's Companies
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Each venture under Cedar Digital represents a unique opportunity to innovate, disrupt, and create lasting impact in its respective industry.
          </p>
        </div>

        {/* Company Tabs */}
        <div className="flex justify-center mb-12" data-aos="fade-up" data-aos-delay="200">
          <div className="inline-flex bg-white rounded-full p-2 shadow-lg">
            {companies.map((company, index) => (
              <button
                key={company.id}
                onClick={() => setActiveCompany(index)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCompany === index
                    ? 'bg-slate-900 text-white shadow-lg'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {company.name}
              </button>
            ))}
          </div>
        </div>

        {/* Active Company Display */}
        <div className="relative" data-aos="fade-up" data-aos-delay="400">
          {companies.map((company, index) => (
            <div
              key={company.id}
              className={`transition-all duration-500 ${
                activeCompany === index ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none'
              }`}
            >
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                {/* Company Header */}
                <div className={`bg-gradient-to-r ${company.bgGradient} p-8 md:p-12 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
                    <div className="w-full h-full rounded-full bg-white/20" />
                  </div>
                  
                  <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center mb-4">
                        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mr-4">
                          {company.icon}
                        </div>
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-3xl font-bold">{company.name}</h3>
                            <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                              company.status === 'Active' 
                                ? 'bg-green-500/20 text-green-100' 
                                : 'bg-yellow-500/20 text-yellow-100'
                            }`}>
                              {company.status}
                            </span>
                          </div>
                          <p className="text-white/80 font-medium">{company.tagline}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-sm text-white/60 mb-1">Founded</div>
                      <div className="text-2xl font-bold">{company.founded}</div>
                    </div>
                  </div>
                </div>

                {/* Company Content */}
                <div className="p-8 md:p-12">
                  <div className="grid md:grid-cols-2 gap-12">
                    {/* Description */}
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-4">About</h4>
                      <p className="text-slate-600 leading-relaxed mb-8">
                        {company.description}
                      </p>
                      
                      <div className="flex gap-4">
                        <a
                          href={company.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-6 py-3 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition-all duration-300"
                        >
                          Visit Website
                          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-4">Key Features</h4>
                      <div className="grid grid-cols-2 gap-4">
                        {company.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center">
                            <div className="w-2 h-2 bg-slate-900 rounded-full mr-3" />
                            <span className="text-slate-600 font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Future Ventures Teaser */}
        <div className="text-center mt-16" data-aos="fade-up" data-aos-delay="600">
          <div className="inline-flex items-center px-6 py-3 bg-white rounded-full shadow-lg border-2 border-dashed border-slate-300">
            <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center mr-3">
              <span className="text-slate-400 text-lg">+</span>
            </div>
            <span className="text-slate-600 font-medium">More ventures coming soon...</span>
          </div>
        </div>
      </div>
    </section>
  );
}