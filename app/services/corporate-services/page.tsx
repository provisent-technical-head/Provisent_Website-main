'use client'

import { useState } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import EnrollmentModal from '@/components/enrollment-modal'
import { Button } from '@/components/ui/button'
import { Building2, Users, LineChart, Briefcase } from 'lucide-react'

export default function CorporateServicesPage() {
  const [isEnrollOpen, setIsEnrollOpen] = useState(false)

  return (
    <main className="bg-background text-foreground min-h-screen flex flex-col bg-neutral-950">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-black via-neutral-900 to-black text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">Corporate Training</h1>
          <p className="text-xl text-neutral-300 max-w-2xl mb-8">
            Empower your workforce with custom training solutions. We help teams stay ahead of the curve with cutting-edge technical skills.
          </p>
          <Button
            onClick={() => setIsEnrollOpen(true)}
            className="bg-yellow-600 text-white hover:bg-yellow-700 px-8 py-4 text-lg font-bold shadow-lg shadow-yellow-600/20"
          >
            Request a Consultation
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex gap-6">
              <Building2 className="w-12 h-12 text-yellow-600 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Customized Curriculum</h3>
                <p className="text-neutral-400 leading-relaxed">
                  We design training programs specifically tailored to your company's tech stack and business goals, ensuring immediate ROI.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <Users className="w-12 h-12 text-yellow-600 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Team Bootcamps</h3>
                <p className="text-neutral-400 leading-relaxed">
                  Intensive workshops designed to upskill entire departments in new technologies, methodologies, or tools.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <LineChart className="w-12 h-12 text-yellow-600 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Performance Tracking</h3>
                <p className="text-neutral-400 leading-relaxed">
                  Detailed analytics and reporting on your team's progress, engagement, and skill acquisition.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <Briefcase className="w-12 h-12 text-yellow-600 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Onboarding Solutions</h3>
                <p className="text-neutral-400 leading-relaxed">
                  Streamline your new hire process with structured technical onboarding programs that reduce ramp-up time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <EnrollmentModal isOpen={isEnrollOpen} onClose={() => setIsEnrollOpen(false)} />
    </main>
  )
}
