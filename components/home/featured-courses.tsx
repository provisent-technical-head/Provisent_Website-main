'use client'

import { useEffect, useState } from 'react'
import { Star, Users, Clock, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import EnrollmentModal from '../enrollment-modal'

export default function FeaturedCourses() {
  const [isVisible, setIsVisible] = useState(false)
  const [isEnrollOpen, setIsEnrollOpen] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const courses = [
    {
      id: 1,
      title: 'Web Development Masterclass',
      instructor: 'John Smith',
      rating: 4.9,
      reviews: 320,
      students: 2540,
      duration: '12 weeks',
    price: '₾441.47',
      category: 'Programming',
    },
    {
      id: 2,
      title: 'React Advanced Patterns',
      instructor: 'Sarah Johnson',
      rating: 4.8,
      reviews: 245,
      students: 1890,
      duration: '10 weeks',
    price: '₾441.47',
      category: 'Programming',
    },
    {
      id: 3,
      title: 'Digital Marketing Strategy',
      instructor: 'Mike Chen',
      rating: 4.7,
      reviews: 410,
      students: 3210,
      duration: '8 weeks',
    price: '₾441.47',
      category: 'Marketing',
    },
  ]

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-yellow-600 uppercase tracking-widest text-sm font-light mb-4">Featured</p>
          <div className="flex items-end justify-between mt-3">
            <h2 className="font-playfair text-5xl md:text-6xl font-light text-white">Top Programs This Month</h2>
            <Button className="bg-yellow-600 text-white hover:bg-yellow-700 hidden md:flex items-center gap-2">
              View All <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Courses */}
        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={course.id}
              className={`transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="bg-neutral-950 rounded-xl border border-yellow-600/20 overflow-hidden hover:shadow-xl hover:shadow-yellow-600/10 transition-all group h-full flex flex-col">
                {/* Header */}
                <div className="h-1 bg-gradient-to-r from-yellow-600 via-yellow-600/70 to-transparent"></div>
                <div className="p-6 space-y-4 flex-1 flex flex-col">
                  <div>
                    <span className="text-xs font-bold bg-yellow-600/10 text-yellow-600 px-3 py-1.5 rounded-full uppercase">
                      {course.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-yellow-600 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-sm text-neutral-400">by {course.instructor}</p>

                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(course.rating) ? 'fill-yellow-600 text-yellow-600' : 'text-neutral-800'}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-bold text-white">{course.rating}</span>
                    <span className="text-xs text-neutral-400">({course.reviews})</span>
                  </div>

                  {/* Meta */}
                  <div className="flex gap-6 text-sm text-neutral-400 border-t border-yellow-600/10 pt-4 mt-auto">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-yellow-600/70" />
                      {(course.students / 1000).toFixed(1)}K
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-yellow-600/70" />
                      {course.duration}
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="px-6 py-4 border-t border-yellow-600/10 bg-black/40 flex items-center justify-between">
                  <span className="text-2xl font-bold text-yellow-600">{course.price}</span>
                  <Button 
                    onClick={() => setIsEnrollOpen(true)}
                    className="bg-yellow-600 text-white hover:bg-yellow-700 h-10 px-4 shadow-lg border border-yellow-600/50"
                  >
                    Enroll
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enrollment Modal */}
      <EnrollmentModal isOpen={isEnrollOpen} onClose={() => setIsEnrollOpen(false)} />
    </section>
  )
}
