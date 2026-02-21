'use client'

import { useState } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import EnrollmentModal from '@/components/enrollment-modal'
import { Button } from '@/components/ui/button'

const leaders = [
  {
    name: 'Sarah Johnson',
    role: 'Founder & CEO',
    bio: 'Visionary leader with 15+ years in EdTech. Previously led product at major tech academies.',
    image: '👩' 
  },
  {
    name: 'Michael Chen',
    role: 'Chief Learning Officer',
    bio: 'PhD in Computer Science. Passionate about democratizing specialized knowledge.',
     image: '👨'
  },
  {
    name: 'Emma Davis',
    role: 'Head of Operations',
    bio: 'Expert in scaling operational efficiency and student support systems globally.',
     image: '👩'
  }
]

export default function LeadershipPage() {
  const [isEnrollOpen, setIsEnrollOpen] = useState(false)

  return (
    <main className="bg-background text-foreground min-h-screen flex flex-col bg-neutral-950">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-black via-neutral-900 to-black text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">Our Leadership</h1>
          <p className="text-xl text-neutral-300 max-w-2xl mx-auto mb-8">
            Meet the team dedicated to transforming the future of education.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {leaders.map((leader, index) => (
              <div key={index} className="bg-neutral-950 rounded-xl overflow-hidden border border-yellow-600/20 hover:border-yellow-600/50 hover:shadow-xl transition-all group">
                <div className="h-64 bg-neutral-800 flex items-center justify-center text-8xl grayscale group-hover:grayscale-0 transition-all duration-500">
                  {leader.image}
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-1">{leader.name}</h3>
                  <p className="text-yellow-600 font-semibold mb-4">{leader.role}</p>
                  <p className="text-neutral-400">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <EnrollmentModal isOpen={isEnrollOpen} onClose={() => setIsEnrollOpen(false)} />
    </main>
  )
}
