'use client'

import { useState } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import EnrollmentModal from '@/components/enrollment-modal'
import { Button } from '@/components/ui/button'
import { Briefcase, MapPin, Clock } from 'lucide-react'

const jobs = [
  {
    title: 'Senior Frontend Instructor',
    department: 'Education',
    location: 'Remote',
    type: 'Full-time'
  },
  {
    title: 'Curriculum Developer (Python)',
    department: 'Content',
    location: 'Hybrid',
    type: 'Contract'
  },
  {
    title: 'Student Success Manager',
    department: 'Operations',
    location: 'Remote',
    type: 'Full-time'
  }
]

export default function CareersPage() {
  const [isEnrollOpen, setIsEnrollOpen] = useState(false)

  return (
    <main className="bg-background text-foreground min-h-screen flex flex-col bg-neutral-950">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-black via-neutral-900 to-black text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">Join Our Team</h1>
          <p className="text-xl text-neutral-300 max-w-2xl mx-auto mb-8">
            Help us shape the next generation of tech talent. We're looking for passionate individuals to join our mission.
          </p>
          <Button className="bg-yellow-600 text-white hover:bg-yellow-700 px-8 py-4 text-lg font-bold">
            View Openings
          </Button>
        </div>
      </section>

      {/* Jobs List */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12">Open Positions</h2>
          <div className="space-y-6">
            {jobs.map((job, index) => (
              <div key={index} className="bg-neutral-950 p-8 rounded-xl border border-yellow-600/20 hover:border-yellow-600 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{job.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-neutral-400">
                    <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" /> {job.department}</span>
                    <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {job.location}</span>
                    <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {job.type}</span>
                  </div>
                </div>
                <Button variant="outline" className="border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white transition-colors">
                  Apply Now
                </Button>
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
