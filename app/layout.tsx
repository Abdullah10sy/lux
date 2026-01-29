import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

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
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
