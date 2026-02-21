'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import EnrollmentModal from '@/components/enrollment-modal'
import { Button } from '@/components/ui/button'
import { Code2, Briefcase, Stethoscope, Palette, Wrench, Zap, Star, Users, Clock, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

import { programsData } from '@/lib/data'

const currencies = {
  INR: { symbol: '₹', rate: 1, name: 'Indian Rupee' },
  USD: { symbol: '$', rate: 0.012, name: 'US Dollar' },
  EUR: { symbol: '€', rate: 0.011, name: 'Euro' },
  GBP: { symbol: '£', rate: 0.0095, name: 'British Pound' },
  AED: { symbol: 'AED', rate: 0.044, name: 'UAE Dirham' },
}

type CategoryKey = keyof typeof programsData
type CurrencyCode = keyof typeof currencies

export default function ProgramsPageContent() {
  const searchParams = useSearchParams()
  const initialCategory = searchParams.get('category') as CategoryKey | null
  
  const [activeCategory, setActiveCategory] = useState<CategoryKey>(
    (initialCategory && programsData[initialCategory]) ? initialCategory : 'Programming'
  )
  const [isEnrollOpen, setIsEnrollOpen] = useState(false)
  const [currency, setCurrency] = useState<CurrencyCode>('INR')

  const categories = Object.keys(programsData) as CategoryKey[]
  const currentProgram = programsData[activeCategory]
  const CurrentIcon = currentProgram.icon

  const formatPrice = (priceInINR: number) => {
    const { symbol, rate } = currencies[currency]
    const convertedPrice = Math.round(priceInINR * rate)
    return `${symbol}${convertedPrice.toLocaleString()}`
  }

  return (
    <div className="bg-black min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-neutral-950 to-black py-16 px-4 relative">
        {/* Currency Selector */}
        <div className="absolute top-4 right-4 md:right-8 z-10">
          <div className="relative group">
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value as CurrencyCode)}
              className="appearance-none bg-neutral-900 border border-neutral-800 text-white text-xs font-medium pl-3 pr-8 py-2 rounded-lg cursor-pointer hover:border-yellow-600/50 focus:outline-none focus:border-yellow-600 transition-colors min-w-[100px]"
            >
              {Object.keys(currencies).map((code) => (
                <option key={code} value={code}>
                  {code}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-neutral-400 pointer-events-none group-hover:text-yellow-500 transition-colors" />
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-center">
            Professional Programs & Courses
          </h1>
          <p className="text-xl text-neutral-400 text-center max-w-3xl mx-auto mb-8">
            Choose from 25+ comprehensive programs designed by industry experts. Get certified and advance your career with Provisent.
          </p>
        </div>
      </section>

      {/* Category Selector */}
      <section className="py-12 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category) => {
              const Icon = programsData[category].icon
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                    activeCategory === category
                      ? 'bg-gradient-to-r from-yellow-600 to-yellow-700 text-white shadow-lg'
                      : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700 border border-neutral-700'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {category}
                </button>
              )
            })}
          </div>

          {/* Category Description */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <CurrentIcon className="w-8 h-8 text-yellow-600" />
              <h2 className="text-3xl font-bold text-white">{activeCategory}</h2>
            </div>
            <p className="text-neutral-400 max-w-2xl mx-auto">{currentProgram.description}</p>
          </div>

          {/* Courses Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentProgram.courses.map((course) => (
              <div
                key={course.id}
                className="bg-neutral-950 rounded-lg border border-yellow-600/20 overflow-hidden hover:border-yellow-600 transition-all hover:shadow-xl hover:shadow-yellow-600/10 group"
              >
                {/* Top accent bar */}
                <div className="h-1 bg-gradient-to-r from-yellow-600 to-yellow-500"></div>

                <div className="p-6">
                  {/* Course Name */}
                  <h3 className="text-lg font-bold text-white mb-4 group-hover:text-yellow-600 transition-colors">
                    {course.name}
                  </h3>

                  {/* Rating and Stats */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(course.rating)
                                ? 'fill-yellow-600 text-yellow-600'
                                : 'text-neutral-700'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm font-semibold text-neutral-300">{course.rating}</span>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-neutral-400">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4 text-yellow-600" />
                        {(course.students / 1000).toFixed(1)}K
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4 text-yellow-600" />
                        8-12 weeks
                      </div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-neutral-700">
                    <span className="text-2xl font-bold text-yellow-600">{formatPrice(course.price)}</span>
                    <Link href={`/programs/${course.id}`}>
                      <Button className="bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-500 hover:to-yellow-600 text-white font-semibold py-2 px-4">
                        Enroll
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-neutral-950 to-neutral-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Learning?</h2>
          <p className="text-xl text-neutral-400 mb-8">
            Join thousands of students who have transformed their careers with Provisent.
          </p>
          <Button
            onClick={() => setIsEnrollOpen(true)}
            className="bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-500 hover:to-yellow-600 text-white font-bold py-4 px-8 text-lg"
          >
            Get Started Today
          </Button>
        </div>
      </section>

      <EnrollmentModal isOpen={isEnrollOpen} onClose={() => setIsEnrollOpen(false)} />
      <Footer />
    </div>
  )
}
