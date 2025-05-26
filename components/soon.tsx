import Image from 'next/image'
import Particles from './particles'
import Illustration from '@/public/images/glow-bottom.svg'

export default function ComingSoon() {
  return (
    <section>
      <div className="relative w-full px-4 sm:px-6">
        {/* Particles animation */}
        <Particles className="absolute inset-0 -z-10" />

        {/* Illustration */}
        <div
          className="absolute inset-0 -z-10 -mx-28 rounded-b-[3rem] pointer-events-none overflow-hidden"
          aria-hidden="true"
        >
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 -z-10">
            <Image
              src={Illustration}
              className="max-w-none"
              width={2146}
              priority
              alt="Coming Soon Illustration"
            />
          </div>
        </div>

        <div className="pt-32 pb-16 md:pt-52 md:pb-32">
          {/* Coming Soon content */}
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="h1 text-black pb-4" data-aos="fade-down">
              Coming Soon
            </h1>
            <p
              className="text-lg text-black mb-8"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              We are working hard to bring you something amazing. Stay tuned for updates!
            </p>
            <p
              className="text-lg text-black mb-8"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              Interested in joining our team? Email your CV to{' '}
              <a href="mailto:joshua@cedardigitalconsulting.com" className="text-black underline">
                joshua@cedardigitalconsulting.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}