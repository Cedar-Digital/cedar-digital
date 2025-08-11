'use client';

'use client';

import { useState } from 'react';
import Particles from './particles';

export default function ContactCollaborate() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    type: 'collaborate',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const collaborationTypes = [
    { value: 'collaborate', label: 'Partnership Opportunity' },
    { value: 'invest', label: 'Investment Inquiry' },
    { value: 'join', label: 'Join Our Team' },
    { value: 'consult', label: 'Consulting Services' },
    { value: 'other', label: 'Other' }
  ];

  return (
    <section id="contact" className="relative bg-gradient-to-br from-slate-50 to-white py-20 md:py-32">
      {/* Background elements */}
      <Particles className="absolute inset-0 -z-10" quantity={20} />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-slate-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-slate-300/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Section */}
          <div data-aos="fade-right">
            <span className="inline-block px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-full mb-4">
              Let's Connect
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Whether you're looking to partner with us, invest in our ventures, or explore how we can help scale your business, we'd love to hear from you.
            </p>

            {/* Contact Options */}
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Email</div>
                  <a href="mailto:joshua@cedardigitalconsulting.com" className="text-slate-600 hover:text-slate-900 transition-colors">
                    joshua@cedardigitalconsulting.com
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Location</div>
                  <div className="text-slate-600">South Africa</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Response Time</div>
                  <div className="text-slate-600">Within 24 hours</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div data-aos="fade-left">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-slate-900 mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all duration-200"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="type" className="block text-sm font-semibold text-slate-900 mb-2">
                    I'm interested in *
                  </label>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all duration-200"
                  >
                    {collaborationTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell us about your project, idea, or how we can work together..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-slate-900 text-white py-4 px-8 rounded-xl font-semibold hover:bg-slate-800 transition-all duration-300 transform hover:scale-[1.02] focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}