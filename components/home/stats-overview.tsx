'use client'

import { useEffect, useState } from 'react'

export default function StatsOverview() {
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState({ courses: 0, students: 0, instructors: 0, satisfaction: 0 })

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const intervals = [
      setInterval(() => {
        setCounts((prev) => ({
          ...prev,
          courses: Math.min(prev.courses + 2, 500),
        }))
      }, 20),
      setInterval(() => {
        setCounts((prev) => ({
          ...prev,
          students: Math.min(prev.students + 50, 50000),
        }))
      }, 20),
      setInterval(() => {
        setCounts((prev) => ({
          ...prev,
          instructors: Math.min(prev.instructors + 1, 150),
        }))
      }, 20),
      setInterval(() => {
        setCounts((prev) => ({
          ...prev,
          satisfaction: Math.min(prev.satisfaction + 1, 98),
        }))
      }, 30),
    ]

    return () => intervals.forEach((interval) => clearInterval(interval))
  }, [isVisible])

  return (
    <section className="py-20 bg-gradient-to-br from-neutral-950 to-neutral-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-yellow-600/5 rounded-full blur-3xl -ml-40 -mb-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { label: 'Courses Available', value: counts.courses, suffix: '+' },
            { label: 'Active Students', value: counts.students.toLocaleString(), suffix: '+' },
            { label: 'Expert Instructors', value: counts.instructors, suffix: '+' },
            { label: 'Satisfaction Rate', value: counts.satisfaction, suffix: '%' },
          ].map((stat, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-1000 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <p className="font-playfair text-6xl md:text-7xl font-light text-yellow-600 mb-2">
                {stat.value}
                {stat.suffix}
              </p>
              <p className="text-neutral-400 text-sm font-light uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
