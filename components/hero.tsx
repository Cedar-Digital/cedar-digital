import Image from 'next/image';
import Particles from './particles';
import Illustration from '@/public/images/glow-bottom.svg';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      <div className="relative w-full px-4 sm:px-6">
        {/* Particles animation */}
        <Particles className="absolute inset-0 -z-10" quantity={50} />

        {/* Illustration */}
        <div
          className="absolute inset-0 -z-10 -mx-28 rounded-b-[3rem] pointer-events-none overflow-hidden opacity-30"
          aria-hidden="true"
        >
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 -z-10">
            <Image
              src={Illustration}
              className="max-w-none"
              width={2146}
              priority
              alt="Hero Illustration"
            />
          </div>
        </div>

        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent -z-10" />

        <div className="pt-32 pb-16 md:pt-52 md:pb-32">
          {/* Hero content */}
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8" data-aos="fade-down">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                Building the Future
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight" data-aos="fade-down">
              Cedar Digital
              <span className="block text-3xl md:text-4xl font-normal text-white/80 mt-2">
                The Holding Company
              </span>
            </h1>
            
            <p
              className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              From bold ideas to scalable ventures — building the future, one company at a time.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              <button
                onClick={() => document.getElementById('companies')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-8 py-4 bg-white text-slate-900 rounded-full font-semibold text-lg hover:bg-white/90 transition-all duration-300 transform hover:scale-105"
              >
                Explore Our Companies
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </button>
              
              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300"
              >
                Meet Joshua Joseph
              </button>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" data-aos="fade-up" data-aos-delay="800">
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}