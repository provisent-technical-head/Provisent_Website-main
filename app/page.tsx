'use client'

import Navigation from '@/components/navigation'
import HeroSection from '@/components/hero-section'
import WhyChooseUs from '@/components/home/why-choose-us'
import StatsOverview from '@/components/home/stats-overview'
import FeaturedCourses from '@/components/home/featured-courses'
import LearningPaths from '@/components/home/learning-paths'
import Instructors from '@/components/home/instructors'
import Testimonials from '@/components/home/testimonials'
import FAQSection from '@/components/home/faq-section'
// import CEOSection from '@/components/home/ceo-section'
import CTASection from '@/components/home/cta-section'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <WhyChooseUs />
      <StatsOverview />
      <FeaturedCourses />
      <LearningPaths />
      <Instructors />
      {/* <CEOSection /> */}
      <Testimonials />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  )
}
