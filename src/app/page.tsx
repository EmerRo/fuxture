import Header from '@/components/shared/header'
import Hero from '@/components/shared/hero'
import Features from '@/components/shared/features'
import SportsSection from '@/components/shared/sports-section'
import CallToAction from '@/components/shared/call-to-action'
import Testimonials from '@/components/shared/testimonials'
import Footer from '@/components/shared/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F172A]">
      <Header />
      <Hero />
      <Features />
      <SportsSection />
      <Testimonials />
      <CallToAction />
      <Footer />
    </main>
  )
}