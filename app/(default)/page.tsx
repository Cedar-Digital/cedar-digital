export const metadata = {
  title: 'Cedar Digital',
  description: 'Cedar Digital was born as a consultancy dedicated to building and scaling businesses, providing innovative strategies and solutions to help brands thrive in a competitive landscape.',
}

import Hero from '@/components/hero'
import Clients from '@/components/clients'
import Features from '@/components/features'
import Features02 from '@/components/features-02'
import Features03 from '@/components/features-03'
import TestimonialsCarousel from '@/components/testimonials-carousel'
import Features04 from '@/components/features-04'
import Team from '@/components/team'
import Testimonials from '@/components/testimonials'
import Cta from '@/components/cta'
import Story from '@/components/story'

export default function Home() {
  return (
    <>
      <Hero />
      <Clients />
      <Features />
      <Story />
      <Team />
      <TestimonialsCarousel />
      <Testimonials />
      <Cta />
    </>
  )
}
