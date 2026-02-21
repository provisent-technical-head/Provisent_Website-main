'use client'

import { useState } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import EnrollmentModal from '@/components/enrollment-modal'
import { Button } from '@/components/ui/button'
import { GraduationCap, MessageCircle, Target, UserCheck } from 'lucide-react'

export default function MentoringPage() {
  const [isEnrollOpen, setIsEnrollOpen] = useState(false)

  return (
    <main className="bg-background text-foreground min-h-screen flex flex-col bg-neutral-950">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-black via-neutral-900 to-black text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">1-on-1 Mentoring</h1>
          <p className="text-xl text-neutral-300 max-w-2xl mb-8">
            Get personalized guidance, career advice, and technical support from industry veterans who have walked the path before you.
          </p>
          <Button
            onClick={() => setIsEnrollOpen(true)}
            className="bg-yellow-600 text-white hover:bg-yellow-700 px-8 py-4 text-lg font-bold shadow-lg shadow-yellow-600/20"
          >
            Find a Mentor
          </Button>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-16">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting Line (Only visible on MD+) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-600/30 to-transparent"></div>

            <div className="relative text-center">
              <div className="w-24 h-24 bg-neutral-900 border-4 border-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 z-10 relative shadow-xl shadow-yellow-600/10">
                <UserCheck className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">1. Match</h3>
              <p className="text-neutral-400">We match you with a mentor based on your goals, skills, and industry.</p>
            </div>
            
            <div className="relative text-center">
              <div className="w-24 h-24 bg-neutral-900 border-4 border-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 z-10 relative shadow-xl shadow-yellow-600/10">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">2. Plan</h3>
              <p className="text-neutral-400">Create a personalized roadmap and set achievable milestones for your growth.</p>
            </div>

            <div className="relative text-center">
              <div className="w-24 h-24 bg-neutral-900 border-4 border-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 z-10 relative shadow-xl shadow-yellow-600/10">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">3. Achieve</h3>
              <p className="text-neutral-400">Regular sessions to review progress, solve blockers, and celebrate wins.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <EnrollmentModal isOpen={isEnrollOpen} onClose={() => setIsEnrollOpen(false)} />
    </main>
  )
}
