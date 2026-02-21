'use client'

import { useEffect, useState } from 'react'


export default function Instructors() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const instructors = [
    {
      name: 'Janani K',
      title: 'Full Stack Developer',
      bio: 'Expert in building scalable web applications with modern frameworks.',
      avatar: '👩‍💻',
      expertise: 'MERN Stack, Next.js, Cloud Architecture',
    },
    {
      name: 'Sharan M',
      title: 'Senior UI/UX Designer',
      bio: 'Creative design leader focused on intuitive and accessible user experiences.',
      avatar: '🎨',
      expertise: 'Design Systems, Prototyping, Figma, User Research',
    },
    {
      name: 'Aswin R',
      title: 'Business Strategist',
      bio: 'Driving growth and innovation through data-driven business strategies.',
      avatar: '💼',
      expertise: 'Strategic Planning, Market Analysis, Growth Hacking',
    },
    {
      name: 'Lakshanaya KM',
      title: 'Data Science Expert',
      bio: 'Specialising in AI, Machine Learning, and predictive analytics models.',
      avatar: '📊',
      expertise: 'Python, Machine Learning, Deep Learning, Big Data',
    },
  ]

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-yellow-600 uppercase tracking-widest text-sm font-light mb-4">Expert Faculty</p>
          <h2 className="font-playfair text-5xl md:text-6xl font-light text-white mt-3 mb-6">Meet Our Instructors</h2>
          <p className="text-lg text-black-400 max-w-2xl mx-auto font-light leading-relaxed">
            Learn from industry leaders and experienced professionals who are passionate about education.
          </p>
        </div>

        {/* Instructors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {instructors.map((instructor, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="bg-black-900/50 rounded-xl overflow-hidden border border-black-700 hover:border-yellow-600 hover:shadow-lg transition-all group">


                {/* Content */}
                <div className="p-6">
                  <h3 className="font-playfair text-lg font-light text-white">{instructor.name}</h3>
                  <p className="text-yellow-600 font-light text-sm mb-3">{instructor.title}</p>
                  <p className="text-black-400 text-sm font-light mb-4 leading-relaxed">{instructor.bio}</p>

                  {/* Expertise */}
                  <div className="mb-4 pb-4 border-t border-black-700/50">
                    <p className="text-xs font-light text-yellow-600/70 mb-2 uppercase tracking-widest pt-4">Expertise</p>
                    <p className="text-xs text-black-400 font-light">{instructor.expertise}</p>
                  </div>


                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
