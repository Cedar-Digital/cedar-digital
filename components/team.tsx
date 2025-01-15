import Image from 'next/image'
import { StaticImageData } from 'next/image'
import Member01 from '@/public/images/Gianna.png'
import Member02 from '@/public/images/Jacques.png'
import Member03 from '@/public/images/Kait.png'


interface Item {
  img: StaticImageData
  name: string
  role: string
  twitter: string
}

export default function Team() {

  const items: Item[] = [
    {
      img: Member01,
      name: 'Gianna Da Costa',
      role: 'Account Manager',
      twitter: '#0',
    },
    {
      img: Member02,
      name: 'Jacques Fourie',
      role: 'Videographer & Editor',
      twitter: '#0',
    },
    {
      img: Member03,
      name: 'Kaitlyn Van Der Schyff',
      role: 'Account Manager',
      twitter: '#0',
    },
  ]

  return (
    <section className="relative">
      {/* Radial gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10" aria-hidden="true">
        <div className="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 w-1/3 aspect-square">
          <div className="absolute inset-0 translate-z-0 bg-white rounded-full blur-[120px] opacity-50"></div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Content */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 text-white pb-4">Couldn't Have Done It Without Them</h2>
            <p className="text-lg text-white">Without their unwavering commitment and expertise, I wouldn't have been able to achieve what I have today. Their dedication and passion have been instrumental in our success.</p>
          </div>
          {/* Team members */}
          <div className="flex flex-col sm:flex-row justify-around gap-6">
            {items.map((item, index) => ( 
              <div key={index} className="relative flex items-center justify-between py-4 pl-4 pr-3 group before:absolute before:inset-0 before:-z-10 before:border before:border-slate-300 before:bg-slate-700 before:opacity-0 hover:before:opacity-10 focus-within:before:opacity-10 before:rounded-xl before:transition-opacity">
                <div className="flex items-center space-x-4">
                  <Image className="shrink-0" src={item.img} width="48" height="48" alt={item.name} />
                  <div className="grow">
                    <div className="font-bold text-white mb-0.5">{item.name}</div>
                    <div className="text-sm text-white font-medium">{item.role}</div>
                  </div>
                </div>
                <a className="shrink-0 text-white md:opacity-0 group-hover:opacity-100 transition-opacity focus-within:opacity-100 focus:outline-none group-hover:before:absolute group-hover:before:inset-0" href={item.twitter} aria-label={`${item.name}'s Twitter`}>
                  <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                    <path d="M11.297 13.807 7.424 18H5.276l5.019-5.436L5 6h4.43l3.06 3.836L16.025 6h2.147l-4.688 5.084L19 18h-4.32l-3.383-4.193Zm3.975 2.975h1.19L8.783 7.155H7.507l7.766 9.627Z" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}