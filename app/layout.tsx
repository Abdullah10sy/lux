import type { Metadata } from "next"
import { Instrument_Sans } from "next/font/google"
import "./globals.css"

const instrumentSans = Instrument_Sans({ 
  subsets: ["latin"], 
  variable: "--font-instrument-sans",
  weight: ["400", "500", "600", "700"]
})

export const metadata: Metadata = {
  title: "Abuu is solving problems through strategic design and compelling visuals",
  description: "A sleek and modern portfolio website template designed for creatives to showcase their work with elegance and clarity.",
  openGraph: {
    title: "Luzia - Portfolio Template",
    description: "A sleek and modern portfolio website template designed for creatives to showcase their work with elegance and clarity.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${instrumentSans.variable} font-sans antialiased bg-[#111] text-white`}>
        {children}
      </body>
    </html>
  )
}
