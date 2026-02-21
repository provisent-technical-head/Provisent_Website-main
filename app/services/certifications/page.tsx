'use client'

import { useState } from 'react'
import Image from 'next/image'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import EnrollmentModal from '@/components/enrollment-modal'
import { Button } from '@/components/ui/button'
import { Award, ShieldCheck, FileCheck, BadgeCheck } from 'lucide-react'

export default function CertificationsPage() {
  const [isEnrollOpen, setIsEnrollOpen] = useState(false)

  return (
    <main className="bg-background text-foreground min-h-screen flex flex-col bg-neutral-950">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-black via-neutral-900 to-black text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">Professional Certifications</h1>
          <p className="text-xl text-neutral-300 max-w-2xl mb-8">
            Validate your skills with globally recognized certifications. Boost your credibility and career prospects.
          </p>
          <Button
            onClick={() => setIsEnrollOpen(true)}
            className="bg-yellow-600 text-white hover:bg-yellow-700 px-8 py-4 text-lg font-bold shadow-lg shadow-yellow-600/20"
          >
            Get Certified
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Why Certification Matters</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4 p-6 bg-neutral-950 rounded-xl border border-yellow-600/20">
              <ShieldCheck className="w-12 h-12 text-yellow-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Industry Recognition</h3>
                <p className="text-neutral-400">Our certificates are recognized by top companies and organizations worldwide.</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 bg-neutral-950 rounded-xl border border-yellow-600/20">
              <BadgeCheck className="w-12 h-12 text-yellow-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Skill Validation</h3>
                <p className="text-neutral-400">Prove your expertise and competency in specific technologies and domains.</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 bg-neutral-950 rounded-xl border border-yellow-600/20">
              <FileCheck className="w-12 h-12 text-yellow-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Career Advancement</h3>
                <p className="text-neutral-400">Certified professionals often earn higher salaries and faster promotions.</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 bg-neutral-950 rounded-xl border border-yellow-600/20">
              <Award className="w-12 h-12 text-yellow-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Digital Badges</h3>
                <p className="text-neutral-400">Receive shareable digital badges for your LinkedIn and online portfolios.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificate Samples */}
      <section className="py-20 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="text-3xl font-bold text-center text-white mb-4">Our Certificates</h2>
           <p className="text-center text-neutral-400 mb-12 max-w-2xl mx-auto">
             Get certified and showcase your achievements with our official documents.
           </p>

           <div className="grid md:grid-cols-3 gap-8">
              {/* Program Completion */}
              <div className="group relative bg-neutral-900 rounded-xl overflow-hidden border border-neutral-800 hover:border-yellow-600/50 transition-all duration-300 hover:-translate-y-2 shadow-2xl">
                <div className="aspect-[4/3] w-full relative">
                   <Image 
                     src="/Program sample COMPLETION  PE.3.pdf (1).pdf.png"
                     alt="Program Completion Certificate"
                     fill
                     className="object-contain p-2"
                   />
                </div>
                <div className="p-6 border-t border-neutral-800 bg-neutral-900/50">
                   <h3 className="text-lg font-bold text-white mb-1 group-hover:text-yellow-500 transition-colors">Program Completion</h3>
                   <p className="text-sm text-neutral-500">Awarded upon finishing the full course curriculum.</p>
                </div>
              </div>

              {/* Project Completion */}
              <div className="group relative bg-neutral-900 rounded-xl overflow-hidden border border-neutral-800 hover:border-yellow-600/50 transition-all duration-300 hover:-translate-y-2 shadow-2xl">
                 <div className="aspect-[4/3] w-full relative">
                   <Image 
                     src="/PROJECT COMPLETION  PE.3.pdf (1).png"
                     alt="Project Completion Certificate"
                     fill
                     className="object-contain p-2"
                   />
                </div>
                <div className="p-6 border-t border-neutral-800 bg-neutral-900/50">
                   <h3 className="text-lg font-bold text-white mb-1 group-hover:text-yellow-500 transition-colors">Project Completion</h3>
                   <p className="text-sm text-neutral-500">Issued for successfully delivering capstone projects.</p>
                </div>
              </div>

              {/* Internship Completion */}
              <div className="group relative bg-neutral-900 rounded-xl overflow-hidden border border-neutral-800 hover:border-yellow-600/50 transition-all duration-300 hover:-translate-y-2 shadow-2xl">
                 <div className="aspect-[4/3] w-full relative">
                   <Image 
                     src="/INTERNHIP COMPLETION SAMPLE PE.3.pdf.png"
                     alt="Internship Completion Certificate"
                     fill
                     className="object-contain p-2"
                   />
                </div>
                <div className="p-6 border-t border-neutral-800 bg-neutral-900/50">
                   <h3 className="text-lg font-bold text-white mb-1 group-hover:text-yellow-500 transition-colors">Internship Completion</h3>
                   <p className="text-sm text-neutral-500">Verified proof of your practical internship experience.</p>
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
