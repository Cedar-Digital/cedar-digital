import Image from 'next/image'
import Team from '@/public/images/Josh.png'

export default function Story() {
  return (
    <section className="relative bg-black text-white">

      {/* Blurred shape */}
      <div className="absolute top-0 -mt-32 left-1/2 -translate-x-1/2 ml-10 blur-2xl opacity-70 pointer-events-none -z-10" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
          <defs>
            <linearGradient id="bs4-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
              <stop offset="0%" stopColor="#000000"></stop>
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0"></stop>
            </linearGradient>
          </defs>
          <path fill="url(#bs4-a)" fillRule="evenodd" d="m0 0 461 369-284 58z" transform="matrix(1 0 0 -1 0 427)"></path>
        </svg>
      </div>

      <div className="px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="pb-12 md:pb-20">

            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h2 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white">Our story (so far)</h2>
            </div>

            <div className="md:flex justify-between space-x-6 md:space-x-8 lg:space-x-14">
              <figure className="min-w-[240px]">
                <Image className="sticky top-8 mx-auto mb-12 md:mb-0 rounded-lg -rotate-[4deg]" src={Team} width={420} height={280} alt="Team" />
              </figure>
              <div className="max-w-[548px] mx-auto">
                <div className="text-white space-y-6">
                  <p>
                    Hi, I’m Joshua Joseph, the founder of Cedar Digital. My journey into the digital space began during my varsity years, where I studied Computer Science and discovered my passion for innovation and problem-solving. With a vision to create impactful digital solutions, I launched Cedar Digital—a company that has since evolved into a holding company for all the projects I embark on.
                  </p>
                  <p>
                    Cedar Digital is the umbrella under which our ventures thrive, and I’m proud to call Earth Service Marketers (ESM) and Inflame our two flagship projects.
                  </p>
                  <p>
                    ESM specializes in advertising for earth-moving equipment and outdoor services, bringing niche expertise and tailored marketing strategies to clients in industries that are often overlooked. It’s a testament to how precision and focus can drive outstanding results.
                  </p>
                  <p>
                    Inflame, on the other hand, is our influencer marketing platform—a cutting-edge solution that connects businesses with influencers to create authentic, impactful campaigns. This project represents our commitment to staying ahead in the dynamic world of digital marketing and building platforms that foster meaningful connections.
                  </p>
                  <p>
                    At Cedar Digital, we are dedicated to transforming ideas into thriving ventures. Whether it’s crafting bespoke marketing campaigns, scaling businesses, or pioneering new platforms, our focus is always on creating sustainable success.
                  </p>
                  <p>
                    For me, this journey is far from over. I’m driven by the challenge of scaling these ventures and exploring what’s next. Thank you for being a part of our story—I can’t wait to see how we can grow together!
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}