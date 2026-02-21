'use client'

import { useState } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import EnrollmentModal from '@/components/enrollment-modal'
import { Button } from '@/components/ui/button'
import { Laptop, BookOpen, Video, Award } from 'lucide-react'

export default function ELearningPage() {
  const [isEnrollOpen, setIsEnrollOpen] = useState(false)

  return (
    <main className="bg-background text-foreground min-h-screen flex flex-col bg-neutral-950">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-black via-neutral-900 to-black text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">E-Learning</h1>
          <p className="text-xl text-neutral-300 max-w-2xl mb-8">
            Experience world-class education from the comfort of your home. Our e-learning platform provides flexible, self-paced courses designed to fit your schedule.
          </p>
          <Button
            onClick={() => setIsEnrollOpen(true)}
            className="bg-yellow-600 text-white hover:bg-yellow-700 px-8 py-4 text-lg font-bold shadow-lg shadow-yellow-600/20"
          >
            Start Learning
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl border border-yellow-600/20 bg-neutral-950 hover:border-yellow-600/50 transition-all">
              <Laptop className="w-10 h-10 text-yellow-600 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Interactive Content</h3>
              <p className="text-neutral-400">Engage with dynamic video lessons, quizzes, and hands-on projects.</p>
            </div>
            <div className="p-8 rounded-xl border border-yellow-600/20 bg-neutral-950 hover:border-yellow-600/50 transition-all">
              <BookOpen className="w-10 h-10 text-yellow-600 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Comprehensive Library</h3>
              <p className="text-neutral-400">Access a vast library of resources, cheat sheets, and study guides.</p>
            </div>
            <div className="p-8 rounded-xl border border-yellow-600/20 bg-neutral-950 hover:border-yellow-600/50 transition-all">
              <Video className="w-10 h-10 text-yellow-600 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Expert Instructors</h3>
              <p className="text-neutral-400">Learn from industry veterans who bring real-world experience to every lesson.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <EnrollmentModal isOpen={isEnrollOpen} onClose={() => setIsEnrollOpen(false)} />
    </main>
  )
}
