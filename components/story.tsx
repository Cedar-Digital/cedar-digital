import Image from 'next/image';
import Team from '@/public/images/Josh.png';
import PageIllustration from '@/public/images/page-illustration.svg';

export default function Story() {
  return (
    <section className="relative bg-white text-black">

      {/* Blurred shape */}
      <div
        className="absolute top-0 -mt-32 left-1/2 -translate-x-1/2 ml-10 blur-2xl opacity-30 pointer-events-none -z-10"
        aria-hidden="true"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
          <defs>
            <linearGradient id="bs4-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
              <stop offset="0%" stopColor="#000000"></stop>
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0"></stop>
            </linearGradient>
          </defs>
          <path
            fill="url(#bs4-a)"
            fillRule="evenodd"
            d="m0 0 461 369-284 58z"
            transform="matrix(1 0 0 -1 0 427)"
          ></path>
        </svg>
      </div>

      {/* Page Illustration */}
      <div
        className="absolute bottom-0 right-0 opacity-10 pointer-events-none -z-10"
        aria-hidden="true"
      >
        <Image src={PageIllustration} alt="Page Illustration" />
      </div>

      <div className="px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="pb-12 md:pb-20">

            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h2 className="h2 text-black">Our story (so far)</h2>
            </div>

            <div className="md:flex justify-between space-x-6 md:space-x-8 lg:space-x-14">
              <figure className="min-w-[240px]">
                <Image
                  className="sticky top-8 mx-auto mb-12 md:mb-0 rounded-lg -rotate-[4deg]"
                  src={Team}
                  width={420}
                  height={280}
                  alt="Team"
                />
              </figure>
              <div className="max-w-[548px] mx-auto">
                <div className="space-y-6 text-black">
                  <p>
                    Hi, I’m Joshua Joseph, the founder of Cedar Digital. My journey into the digital space began during my varsity years, where I studied Computer Science and discovered my passion for innovation and problem-solving. I launched Cedar Digital as a company that has since evolved into a holding company for all the projects I embark on.
                  </p>
                  <p>
                    Cedar Digital is the umbrella under which our ventures thrive, and I’m proud to call Earth Service Marketers (ESM) and Inflame our two flagship projects.
                  </p>
                  <p>
                    ESM specializes in advertising for earth-moving equipment and outdoor services, bringing niche expertise and tailored marketing strategies to clients in industries that are often overlooked.
                  </p>
                  <p>
                    Inflame, on the other hand, is our influencer marketing platform—a cutting-edge solution that connects businesses with influencers to create authentic, impactful campaigns. (Soon to be launched)
                  </p>
                  <p>
                    At Cedar Digital, we are dedicated to transforming ideas into thriving ventures. Whether it’s crafting bespoke marketing campaigns, scaling businesses, or pioneering new platforms, our focus is always on creating sustainable success.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
