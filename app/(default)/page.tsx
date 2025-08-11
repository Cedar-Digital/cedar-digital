export const metadata = {
  title: 'Cedar Digital - The Holding Company for Joshua Joseph\'s Ventures',
  description: 'From bold ideas to scalable ventures — building the future, one company at a time. Cedar Digital is the holding company for innovative ventures including Earth Service Marketers and Inflame.',
}

import Hero from '@/components/hero'
import AboutJoshua from '@/components/about-joshua'
import CompaniesPortfolio from '@/components/companies-portfolio'
import Philosophy from '@/components/philosophy'
import ContactCollaborate from '@/components/contact-collaborate'
import Footer from '@/components/ui/footer'

export default function Home() {
  return (
    <>
      <Hero />
      <AboutJoshua />
      <CompaniesPortfolio />
      <Philosophy />
      <ContactCollaborate />
      <Footer />
    </>
  )
}