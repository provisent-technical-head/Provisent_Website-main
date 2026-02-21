'use client'

import { useState } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import EnrollmentModal from '@/components/enrollment-modal'
import { Button } from '@/components/ui/button'
import { Code, Terminal, Users, Zap } from 'lucide-react'

export default function BootcampPage() {
  const [isEnrollOpen, setIsEnrollOpen] = useState(false)

  return (
    <main className="bg-background text-foreground min-h-screen flex flex-col bg-neutral-950">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-black via-neutral-900 to-black text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">Bootcamps</h1>
          <p className="text-xl text-neutral-300 max-w-2xl mb-8">
            Intensive, career-focused bootcamps designed to transform you into a job-ready professional in months, not years.
          </p>
          <Button
            onClick={() => setIsEnrollOpen(true)}
            className="bg-yellow-600 text-white hover:bg-yellow-700 px-8 py-4 text-lg font-bold shadow-lg shadow-yellow-600/20"
          >
            Apply Now
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl border border-yellow-600/20 bg-neutral-950 hover:border-yellow-600/50 transition-all group">
              <Code className="w-10 h-10 text-yellow-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold text-white mb-2">Hands-on Coding</h3>
              <p className="text-neutral-400 text-sm">Build real projects that you can show off in your portfolio.</p>
            </div>
            <div className="p-6 rounded-xl border border-yellow-600/20 bg-neutral-950 hover:border-yellow-600/50 transition-all group">
              <Terminal className="w-10 h-10 text-yellow-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold text-white mb-2">Live Mentorship</h3>
              <p className="text-neutral-400 text-sm">Get real-time code reviews and guidance from senior developers.</p>
            </div>
            <div className="p-6 rounded-xl border border-yellow-600/20 bg-neutral-950 hover:border-yellow-600/50 transition-all group">
              <Users className="w-10 h-10 text-yellow-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold text-white mb-2">Peer Learning</h3>
              <p className="text-neutral-400 text-sm">Collaborate with peers in a simulated agile team environment.</p>
            </div>
            <div className="p-6 rounded-xl border border-yellow-600/20 bg-neutral-950 hover:border-yellow-600/50 transition-all group">
              <Zap className="w-10 h-10 text-yellow-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold text-white mb-2">Fast Track</h3>
              <p className="text-neutral-400 text-sm">Accelerated curriculum tailored to current market demands.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <EnrollmentModal isOpen={isEnrollOpen} onClose={() => setIsEnrollOpen(false)} />
    </main>
  )
}
