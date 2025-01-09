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
            <div className="mb-6" data-aos="fade-down">

            </div>
            <h1 className="h1 text-white pb-4" data-aos="fade-down">
              Welcome to Cedar Digital
            </h1>
            <p
              className="text-lg text-white/80 mb-8"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              Cedar Digital was born as a consultancy dedicated to building and
              scaling businesses, providing innovative strategies and solutions
              to help brands thrive in a competitive landscape.{" "}
            </p>
            <div
              className="max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              <div>
                <a
                  className="btn text-white bg-black hover:bg-gray-800 w-full transition duration-150 ease-in-out group"
                  href="/contact"
                >
                  Contact{" "}
                  <span className="tracking-normal text-white group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                    -&gt;
                  </span>
                </a>
              </div>
              <div>
                <a
                  className="btn text-black hover:text-black bg-gray-100 hover:bg-gray-200 w-full transition duration-150 ease-in-out"
                  href="/join"
                >
                  <svg
                    className="shrink-0 fill-black mr-3"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                  >
                    <path d="m1.999 0 1 2-1 2 2-1 2 1-1-2 1-2-2 1zM11.999 0l1 2-1 2 2-1 2 1-1-2 1-2-2 1zM11.999 10l1 2-1 2 2-1 2 1-1-2 1-2-2 1zM6.292 7.586l2.646-2.647L11.06 7.06 8.413 9.707zM0 13.878l5.586-5.586 2.122 2.121L2.12 16z" />
                  </svg>
                  <span>Join Our Team</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}