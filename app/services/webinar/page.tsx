'use client'

import { useState } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import EnrollmentModal from '@/components/enrollment-modal'
import { Button } from '@/components/ui/button'
import { Calendar, Video, Users, Mic } from 'lucide-react'

export default function WebinarPage() {
  const [isEnrollOpen, setIsEnrollOpen] = useState(false)

  return (
    <main className="bg-background text-foreground min-h-screen flex flex-col bg-neutral-950">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-black via-neutral-900 to-black text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">Webinars & Workshops</h1>
          <p className="text-xl text-neutral-300 max-w-2xl mb-8">
            Join our live interactive sessions on trending technologies, career development, and industry insights.
          </p>
          <Button
            onClick={() => setIsEnrollOpen(true)}
            className="bg-yellow-600 text-white hover:bg-yellow-700 px-8 py-4 text-lg font-bold shadow-lg shadow-yellow-600/20"
          >
            Register for Next Webinar
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl border border-yellow-600/20 bg-neutral-950 hover:border-yellow-600/50 transition-all text-center">
              <div className="mx-auto w-16 h-16 bg-yellow-600/10 rounded-full flex items-center justify-center mb-6">
                <Video className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Live Demonstrations</h3>
              <p className="text-neutral-400">See experts code and problem-solve in real-time.</p>
            </div>
            <div className="p-8 rounded-xl border border-yellow-600/20 bg-neutral-950 hover:border-yellow-600/50 transition-all text-center">
              <div className="mx-auto w-16 h-16 bg-yellow-600/10 rounded-full flex items-center justify-center mb-6">
                <Mic className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Q&A Sessions</h3>
              <p className="text-neutral-400">Ask your burning questions and get direct answers from professionals.</p>
            </div>
            <div className="p-8 rounded-xl border border-yellow-600/20 bg-neutral-950 hover:border-yellow-600/50 transition-all text-center">
              <div className="mx-auto w-16 h-16 bg-yellow-600/10 rounded-full flex items-center justify-center mb-6">
                <Calendar className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Weekly Schedule</h3>
              <p className="text-neutral-400">Consistent learning opportunities every week on diverse topics.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <EnrollmentModal isOpen={isEnrollOpen} onClose={() => setIsEnrollOpen(false)} />
    </main>
  )
}
