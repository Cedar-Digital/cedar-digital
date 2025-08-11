import Image from 'next/image';
import Particles from './particles';
import JoshuaImage from '@/public/images/Josh.png';

export default function AboutJoshua() {
  return (
    <section id="about" className="relative bg-white py-20 md:py-32">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-slate-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-slate-200 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className="relative" data-aos="fade-right">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-4 border-slate-900 rounded-full opacity-20" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-slate-900 rounded-full opacity-10" />
              
              {/* Main image */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src={JoshuaImage}
                  alt="Joshua Joseph - Founder of Cedar Digital"
                  width={600}
                  height={700}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8" data-aos="fade-left">
            <div>
              <span className="inline-block px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-full mb-4">
                Founder & Visionary
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Meet Joshua Joseph
              </h2>
              <div className="w-20 h-1 bg-slate-900 mb-8" />
            </div>

            <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
              <p>
                My journey into the digital space began during my university years, where I studied Computer Science and discovered my passion for innovation and problem-solving. What started as a student venture has evolved into something much bigger.
              </p>
              
              <p>
                Cedar Digital began as my first company during varsity, but it has since transformed into the holding company for all my entrepreneurial ventures. Today, it serves as the umbrella under which innovative projects thrive and scale.
              </p>
              
              <p>
                I believe in turning ambitious ideas into sustainable businesses that create real impact. Whether it's revolutionizing marketing for underserved industries or building cutting-edge platforms, my focus is always on creating lasting value.
              </p>
            </div>

            {/* Stats or achievements */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900">2+</div>
                <div className="text-sm text-slate-600 font-medium">Active Companies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900">5+</div>
                <div className="text-sm text-slate-600 font-medium">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900">∞</div>
                <div className="text-sm text-slate-600 font-medium">Big Ideas</div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-8">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center px-8 py-4 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition-all duration-300 transform hover:scale-105"
              >
                Let's Connect
                <span className="ml-2">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}