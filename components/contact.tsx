import Image from 'next/image'
import Particles from './particles'
import Illustration from '@/public/images/glow-bottom.svg'

export default function Hero() {
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
              alt="Hero Illustration"
            />
          </div>
        </div>

        <div className="pt-32 pb-16 md:pt-52 md:pb-32">
          {/* Hero content */}
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-black" data-aos="fade-down">Schedule a Call</h2>
            <div className="mb-17 text-black" data-aos="fade-down">
              {/* Calendar iframe */}
              <iframe
                src="https://api.leadconnectorhq.com/widget/booking/VFq5bKrRGXDIZ5Km2Xcj"
                style={{ width: '100%', height: '1500px', border: 'none', overflow: 'hidden' }}
                scrolling="no"
                id="VFq5bKrRGXDIZ5Km2Xcj_1736433218173"
              ></iframe>
              <br />
              <script
                src="https://link.msgsndr.com/js/form_embed.js"
                type="text/javascript"
              ></script>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}