'use client'

import { useEffect, useState } from 'react'
import { Code, Briefcase, Palette, TrendingUp, GraduationCap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function LearningPaths() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const paths = [
    {
      icon: Code,
      title: 'Web Developer',
      description: 'Master full-stack web development from basics to deployment',
      courses: 12,
      duration: '24 weeks',
      color: 'from-yellow-600/10 to-yellow-600/5',
      borderColor: 'border-yellow-600/20',
      category: 'Programming',
    },
    {
      icon: Briefcase,
      title: 'Business Professional',
      description: 'Develop leadership and management skills for career growth',
      courses: 10,
      duration: '20 weeks',
      color: 'from-yellow-600/10 to-yellow-600/5',
      borderColor: 'border-yellow-600/20',
      category: 'Business',
    },
    {
      icon: Palette,
      title: 'UI/UX Designer',
      description: 'Create beautiful and functional digital experiences',
      courses: 8,
      duration: '16 weeks',
      color: 'from-yellow-600/10 to-yellow-600/5',
      borderColor: 'border-yellow-600/20',
      category: 'Design',
    },
    {
      icon: TrendingUp,
      title: 'Data Scientist',
      description: 'Analyze data and build predictive models with Python',
      courses: 14,
      duration: '28 weeks',
      color: 'from-yellow-600/10 to-yellow-600/5',
      borderColor: 'border-yellow-600/20',
      category: 'Programming',
    },
  ]

  return (
    <section className="py-20 bg-neutral-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-yellow-600 uppercase tracking-widest text-sm font-light mb-4">Structured Learning</p>
          <h2 className="font-playfair text-5xl md:text-6xl font-light text-white mt-3 mb-6">Learning Paths</h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed">
            Follow a structured path tailored to your career goals. Each path includes curated courses in the right order.
          </p>
        </div>

        {/* Paths Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {paths.map((path, index) => {
            const Icon = path.icon
            return (
              <div
                key={index}
                className={`transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative h-full p-8 rounded-xl border border-neutral-700 hover:border-yellow-600 bg-neutral-900/50 hover:bg-neutral-900 hover:shadow-lg transition-all cursor-pointer group overflow-hidden">
                  {/* Animated background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative z-10">
                    <Icon className="w-12 h-12 text-yellow-600 mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="font-playfair text-xl font-light text-white mb-3">{path.title}</h3>
                    <p className="text-neutral-400 text-sm font-light mb-6 min-h-12">{path.description}</p>

                    <div className="space-y-3 mb-6 pb-6 border-t border-neutral-700/50">
                      <div className="flex items-center justify-between text-sm pt-4">
                        <span className="text-neutral-400">{path.courses} Courses</span>
                        <span className="font-light text-yellow-600">{path.duration}</span>
                      </div>
                    </div>

                    <Link href={`/programs?category=${path.category}`} className="block">
                        <Button className="w-full bg-yellow-600 text-white hover:bg-yellow-700 font-light uppercase tracking-wider transition-all">
                        <GraduationCap className="w-4 h-4 mr-2" />
                        Start Path
                        </Button>
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
