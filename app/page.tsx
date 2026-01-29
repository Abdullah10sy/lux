import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { FeaturedWorks } from "@/components/featured-works"
import { Stats } from "@/components/stats"
import { Services } from "@/components/services"
import { Process } from "@/components/process"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturedWorks />
        <Stats />
        <Services />
        <Process />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
