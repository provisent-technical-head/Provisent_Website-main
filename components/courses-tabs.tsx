'use client'

import { useState, useEffect } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Star, Users, Clock, TrendingUp, BookOpen } from 'lucide-react'
import EnrollmentModal from './enrollment-modal'

const categories = [
  'All',
  'Programming',
  'Business',
  'Design',
  'Marketing',
  'Data Science',
]

const courses = [
  {
    id: 1,
    title: 'Web Development Masterclass',
    category: 'Programming',
    instructor: 'John Smith',
    students: 2540,
    rating: 4.9,
    reviews: 320,
    duration: '12 weeks',
    price: '₹15,000',
  },
  {
    id: 2,
    title: 'React Advanced Patterns',
    category: 'Programming',
    instructor: 'Sarah Johnson',
    students: 1890,
    rating: 4.8,
    reviews: 245,
    duration: '10 weeks',
    price: '₹15,000',
  },
  {
    id: 3,
    title: 'Digital Marketing Strategy',
    category: 'Marketing',
    instructor: 'Mike Chen',
    students: 3210,
    rating: 4.7,
    reviews: 410,
    duration: '8 weeks',
    price: '₹15,000',
  },
  {
    id: 4,
    title: 'UI/UX Design Fundamentals',
    category: 'Design',
    instructor: 'Emma Davis',
    students: 2100,
    rating: 4.9,
    reviews: 285,
    duration: '10 weeks',
    price: '₹15,000',
  },
  {
    id: 5,
    title: 'Business Leadership',
    category: 'Business',
    instructor: 'Robert Wilson',
    students: 1650,
    rating: 4.8,
    reviews: 198,
    duration: '12 weeks',
    price: '₹15,000',
  },
  {
    id: 6,
    title: 'Data Science with Python',
    category: 'Data Science',
    instructor: 'Lisa Anderson',
    students: 2890,
    rating: 4.9,
    reviews: 365,
    duration: '14 weeks',
    price: '₹15,000',
  },
  {
    id: 7,
    title: 'Mobile App Development',
    category: 'Programming',
    instructor: 'Alex Martinez',
    students: 2200,
    rating: 4.8,
    reviews: 301,
    duration: '12 weeks',
    price: '₹15,000',
  },
  {
    id: 8,
    title: 'Social Media Marketing',
    category: 'Marketing',
    instructor: 'Jessica Brown',
    students: 3450,
    rating: 4.7,
    reviews: 456,
    duration: '6 weeks',
    price: '₹15,000',
  },
  {
    id: 9,
    title: 'Brand Design Masterclass',
    category: 'Design',
    instructor: 'Tom Wilson',
    students: 1780,
    rating: 4.9,
    reviews: 234,
    duration: '11 weeks',
    price: '₹15,000',
  },
  {
    id: 10,
    title: 'Financial Management',
    category: 'Business',
    instructor: 'David Lee',
    students: 1420,
    rating: 4.8,
    reviews: 165,
    duration: '10 weeks',
    price: '₹15,000',
  },
  {
    id: 11,
    title: 'Machine Learning Basics',
    category: 'Data Science',
    instructor: 'Nina Patel',
    students: 2650,
    rating: 4.9,
    reviews: 342,
    duration: '13 weeks',
    price: '₹15,000',
  },
  {
    id: 12,
    title: 'Full Stack Development',
    category: 'Programming',
    instructor: 'Carlos Rodriguez',
    students: 3100,
    rating: 4.8,
    reviews: 389,
    duration: '16 weeks',
    price: '₹15,000',
  },
]

export default function CoursesTabs() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [isVisible, setIsVisible] = useState(false)
  const [isEnrollOpen, setIsEnrollOpen] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const filteredCourses = activeCategory === 'All' 
    ? courses 
    : courses.filter(course => course.category === activeCategory)

  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-amber-400 uppercase tracking-widest text-sm font-light mb-4">Our Collections</p>
          <h1 className="font-playfair text-5xl md:text-7xl font-light text-slate-50 mb-6">
            Explore Premium Programs
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Discover world-class programs designed by industry experts to transform your skills and accelerate your career
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-amber-600 text-slate-900'
                  : 'bg-slate-800 border border-slate-600 text-slate-50 hover:border-amber-500'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Category Tabs */}
        <div className={`flex flex-wrap gap-3 justify-center mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-accent text-white shadow-lg scale-105'
                  : 'bg-white border-2 border-border text-foreground hover:border-accent'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, index) => (
            <div
              key={course.id}
              className={`transition-all duration-700 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${300 + index * 50}ms` }}
            >
              <Card className="group h-full bg-slate-800 border border-slate-700 overflow-hidden hover:shadow-2xl transition-all duration-500 relative hover:border-amber-600">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-600/5 via-transparent to-slate-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Top accent bar */}
                <div className="h-1 bg-gradient-to-r from-amber-600 via-amber-500 to-transparent"></div>

                {/* Header with category and icon */}
                <div className="relative z-10 px-6 pt-8 pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <span className="inline-block bg-gradient-to-r from-amber-600/30 to-amber-600/10 text-amber-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide">
                      {course.category}
                    </span>
                    <BookOpen className="w-6 h-6 text-amber-600/60 group-hover:text-amber-500 transition-colors" />
                  </div>
                  <h3 className="font-playfair text-2xl font-light text-slate-50 leading-tight group-hover:text-amber-400 transition-colors duration-300">
                    {course.title}
                  </h3>
                </div>

                {/* Content */}
                <div className="relative z-10 px-6 py-4 space-y-5">
                  {/* Instructor */}
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-600 to-amber-700 flex items-center justify-center text-slate-900 text-xs font-bold">
                      {course.instructor.charAt(0)}
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Instructor</p>
                      <p className="text-sm font-semibold text-slate-50">{course.instructor}</p>
                    </div>
                  </div>

                  {/* Rating with badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(course.rating)
                                ? 'fill-amber-500 text-amber-500'
                                : 'text-slate-600'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm font-bold text-slate-50">{course.rating}</span>
                    </div>
                    <div className="bg-amber-600/20 text-amber-400 px-2 py-1 rounded text-xs font-semibold">
                      {course.reviews} reviews
                    </div>
                  </div>

                  {/* Meta info grid */}
                  <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-600/50">
                    <div className="text-center py-2">
                      <Users className="w-4 h-4 text-amber-600/60 mx-auto mb-1" />
                      <p className="text-xs text-slate-400 font-medium">{(course.students / 1000).toFixed(1)}K</p>
                    </div>
                    <div className="text-center py-2 border-l border-r border-slate-600/50">
                      <Clock className="w-4 h-4 text-amber-600/60 mx-auto mb-1" />
                      <p className="text-xs text-slate-400 font-medium">{course.duration}</p>
                    </div>
                    <div className="text-center py-2">
                      <TrendingUp className="w-4 h-4 text-amber-600/60 mx-auto mb-1" />
                      <p className="text-xs text-slate-400 font-medium">Advanced</p>
                    </div>
                  </div>
                </div>

                {/* Footer with price and button */}
                <div className="relative z-10 px-6 py-6 border-t border-slate-600/50 bg-gradient-to-r from-slate-900/5 to-transparent flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-500 mb-1">Starting at</p>
                    <p className="text-3xl font-bold text-amber-500">{course.price}</p>
                  </div>
                  <Button 
                    onClick={() => setIsEnrollOpen(true)}
                    className="bg-gradient-to-r from-amber-600 to-amber-700 text-slate-900 hover:from-amber-500 hover:to-amber-600 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-110 h-12 w-12 rounded-full p-0 flex items-center justify-center font-semibold"
                  >
                    <TrendingUp className="w-5 h-5" />
                  </Button>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Enrollment Modal */}
      <EnrollmentModal isOpen={isEnrollOpen} onClose={() => setIsEnrollOpen(false)} />
    </section>
  )
}
