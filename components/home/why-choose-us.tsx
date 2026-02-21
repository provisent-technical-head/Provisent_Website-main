'use client'

import { useEffect, useState } from 'react'
import { CheckCircle, Zap, Globe, Award } from 'lucide-react'

export default function WhyChooseUs() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const features = [
    {
      icon: Award,
      title: 'Industry Expert Instructors',
      description: 'Learn from professionals with decades of real-world experience in their fields.',
    },
    {
      icon: Zap,
      title: 'Interactive Live Sessions',
      description: 'Engage in real-time learning with Q&A, discussions, and hands-on practice.',
    },
    {
      icon: Globe,
      title: 'Global Community',
      description: 'Connect with learners from 150+ countries and build professional networks.',
    },
    {
      icon: CheckCircle,
      title: 'Certified & Recognized',
      description: 'Earn credentials recognized by leading companies worldwide.',
    },
  ]

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-yellow-600 uppercase tracking-widest text-sm font-light mb-4">Why Provisent</p>
          <h2 className="font-playfair text-5xl md:text-6xl font-light text-white mt-3 mb-6">Why Choose Us</h2>
          <p className="text-lg text-black-400 max-w-2xl mx-auto font-light leading-relaxed">
            We provide more than just courses. We build a complete learning ecosystem designed for your success.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className={`group transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <div className="h-full p-8 rounded-xl border border-black-700 hover:border-yellow-600 hover:shadow-lg transition-all bg-black-900/50 hover:bg-black-900 group-hover:from-yellow-600/10 group-hover:to-yellow-600/5">
                  <Icon className="w-12 h-12 text-yellow-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-playfair text-xl font-light text-white mb-3">{feature.title}</h3>
                  <p className="text-black-400 text-sm font-light leading-relaxed">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
