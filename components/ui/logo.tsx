import Link from 'next/link'
import Image from 'next/image'
import LogoImg from '@/public/images/cedar-nav-logo.png'

export default function Logo() {
  return (
    <Link className="inline-flex" href="/" aria-label="Cruip">
      <Image className="max-w-none" src={LogoImg} width={150} height={150} priority alt="Stellar" />
    </Link>
  )
}