'use client'

import { useEffect, useState } from 'react'
import { Star, Quote } from 'lucide-react'

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const testimonials = [
    {
      name: 'Ananya Sharma',
      role: 'Student',
      content:
        'The Web Development Masterclass completely transformed my career. I went from zero coding knowledge to landing my first developer job in just 6 months.',
      rating: 5,
    },
    {
      name: 'Rahul Verma',
      role: 'Student',
      content:
        'The business strategy courses helped me get promoted to Product Manager. The practical case studies and mentorship were invaluable.',
      rating: 5,
    },
    {
      name: 'Priya Patel',
      role: 'Student',
      content:
        'Provisent EduTech gives the best design education. The instructors are industry leaders who share real, applicable knowledge.',
      rating: 5,
    },
    {
      name: 'Karthik S',
      role: 'Student',
      content:
        'The data science path structured my learning perfectly. Every course built on the previous one, creating a complete skill set.',
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-neutral-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-yellow-600 uppercase tracking-widest text-sm font-light mb-4">Success Stories</p>
          <h2 className="font-playfair text-5xl md:text-6xl font-light text-white mt-3 mb-6">What Our Students Say</h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed">
            Real results from real learners. See how Provisent transformed their careers.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="h-full bg-black/40 rounded-xl border border-yellow-600/20 p-8 hover:border-yellow-600 hover:bg-black hover:shadow-lg hover:shadow-yellow-600/10 transition-all group backdrop-blur-sm">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-600 text-yellow-600" />
                  ))}
                </div>

                {/* Quote */}
                <Quote className="w-8 h-8 text-yellow-600/40 mb-4" />
                <p className="text-neutral-300 mb-6 leading-relaxed font-light">{testimonial.content}</p>

                {/* Author */}
                <div className="pt-6 border-t border-yellow-600/20">
                    <p className="font-playfair text-white font-light text-lg mb-1">{testimonial.name}</p>
                    <p className="text-xs text-yellow-600 font-light uppercase tracking-widest">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
