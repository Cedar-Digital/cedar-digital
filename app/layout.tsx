import './css/style.css'

import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

export const metadata = {
  title: 'Cedar Digital - The Holding Company for Joshua Joseph\'s Ventures',
  description: 'From bold ideas to scalable ventures — building the future, one company at a time. Cedar Digital is the holding company for innovative ventures including Earth Service Marketers and Inflame.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-inter antialiased bg-white text-slate-900 tracking-tight`}
      >
        <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
        </div>
      </body>
    </html>
  );
}