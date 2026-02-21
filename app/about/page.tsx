'use client'

import { useEffect, useState } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import EnrollmentModal from '@/components/enrollment-modal'
import { Button } from '@/components/ui/button'
import { Award, Users, Lightbulb, Globe, CheckCircle2, ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [isEnrollOpen, setIsEnrollOpen] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const values = [
    { icon: Lightbulb, title: 'Innovation', description: 'Cutting-edge curriculum designed for modern careers' },
    { icon: Users, title: 'Community', description: 'Vibrant community of learners supporting each other' },
    { icon: Award, title: 'Excellence', description: 'Expert instructors with real-world industry experience' },
    { icon: Globe, title: 'Accessibility', description: 'Quality education available to everyone, everywhere' },
  ]

  const milestones = [
    { year: '2018', event: 'Founded Provisent EduTech with a vision to democratize education' },
    { year: '2019', event: 'Launched 50+ comprehensive programs across multiple domains' },
    { year: '2020', event: 'Reached 100K+ students globally during rapid growth phase' },
    { year: '2021', event: 'Introduced AI-powered learning paths and personalization' },
    { year: '2022', event: 'Expanded to 500K+ active learners across 120+ countries' },
    { year: '2025', event: 'Became industry leader in affordable quality education' },
  ]

  const team = [
    { name: 'Aswathi S', role: 'HR Manager', image: '/aswathi.png' },
    { name: 'Nawin Kumar S', role: 'Head of Operation', image: '/nawin.png' },
    { name: 'Saranya S', role: 'Board of Director', image: null },
    { name: 'Suresh Kumar D', role: 'Investor', image: null },
    { name: 'Janani K', role: 'Full stack developer', image: null },
    { name: 'Sharan M', role: 'Senior UI UX designer', image: null },
    { name: 'Aswin R', role: 'Business strategist', image: null },
    { name: 'Lakshanaya KM', role: 'Data science Expert', image: null },
  ]

  const stats = [
    { number: '500K+', label: 'Active Students' },
    { number: '120+', label: 'Countries' },
    { number: '150+', label: 'Expert Programs' },
    { number: '95%', label: 'Success Rate' },
  ]

  return (
    <main className="bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-black via-black-900 to-black text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">About Provisent EduTech</h1>
          <p className="text-xl text-black-300 max-w-2xl mb-8">Transforming lives through accessible, world-class education and professional development programs.</p>
          <Button
            onClick={() => setIsEnrollOpen(true)}
            className="bg-yellow-600 text-white hover:bg-yellow-700 px-8 py-4 text-lg font-bold"
          >
            Start Learning Today
          </Button>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-black-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-white">Our Mission</h2>
              <p className="text-lg text-black-300 mb-6 leading-relaxed">
                We believe that quality education should be accessible to everyone, regardless of their background or location. Our mission is to empower learners worldwide with practical, industry-relevant skills through innovative, affordable, and inclusive educational programs.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                  <p className="text-white">Expert-led courses from industry professionals</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                  <p className="text-white">Flexible learning paths tailored to your goals</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                  <p className="text-white">Globally recognized certifications</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-yellow-600/20 to-yellow-600/5 rounded-2xl p-12 border border-yellow-600/30">
              <div className="text-6xl font-bold text-yellow-600 mb-4">500K+</div>
              <p className="text-xl text-white mb-8 font-semibold">Students Transformed Worldwide</p>
              <p className="text-black-400">And counting. Join our growing community of learners and professionals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gradient-to-r from-black to-black-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-yellow-600 mb-2">{stat.number}</div>
                <p className="text-black-300 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-black-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="bg-black-900 rounded-xl border border-yellow-600/30 p-8 hover:shadow-xl hover:border-yellow-600 transition-all duration-300 group">
                  <Icon className="w-12 h-12 text-yellow-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                  <p className="text-black-400">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-b from-black-950 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Our Journey</h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-yellow-600 via-yellow-600/50 to-transparent"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex md:gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="md:w-1/2 md:text-right">
                    <div className="bg-black-900 rounded-lg p-6 border border-yellow-600/30 hover:shadow-lg transition-all">
                      <h3 className="text-2xl font-bold text-yellow-600 mb-2">{milestone.year}</h3>
                      <p className="text-white font-semibold">{milestone.event}</p>
                    </div>
                  </div>
                  {/* Center dot */}
                  <div className="hidden md:flex justify-center">
                    <div className="w-6 h-6 bg-yellow-600 rounded-full border-4 border-black relative z-10"></div>
                  </div>
                  <div className="md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-black-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">Our Leadership Team</h2>
          <p className="text-center text-black-400 text-lg mb-16">Experienced professionals dedicated to your success</p>
          
          {/* CEO Section */}
          <div className="flex justify-center mb-16">
            <div className="group bg-black-800 rounded-xl border border-yellow-600/30 overflow-hidden hover:shadow-xl hover:border-yellow-600 transition-all duration-300 hover:-translate-y-1 max-w-sm w-full">
               <div className="h-1 bg-gradient-to-r from-yellow-600 via-yellow-600/70 to-transparent"></div>
               <div className="p-8 flex flex-col items-center text-center">
                  <div className="relative w-48 h-64 rounded-xl overflow-hidden mb-6 border-2 border-yellow-600/50 group-hover:border-yellow-600 transition-colors bg-neutral-900 shadow-2xl shadow-yellow-900/20">
                    <Image 
                      src="/ceo.png" 
                      alt="S.Prajan, CEO" 
                      fill
                      className="object-cover object-top"
                      priority
                    />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-yellow-500 transition-colors">S.Prajan</h3>
                  <p className="text-yellow-600 font-bold text-lg tracking-widest uppercase">CEO & Founder</p>
               </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div key={index} className="group bg-black-800 rounded-xl border border-yellow-600/30 overflow-hidden hover:shadow-xl hover:border-yellow-600 transition-all duration-300 hover:-translate-y-1">
                <div className="h-1 bg-gradient-to-r from-yellow-600 via-yellow-600/70 to-transparent"></div>
                <div className="p-6 flex flex-col items-center text-center">
                  {member.image ? (
                     <div className="w-32 h-32 rounded-2xl overflow-hidden mb-4 border-2 border-yellow-600/50 group-hover:border-yellow-600 transition-colors bg-neutral-900 shadow-lg shadow-black/50 relative">
                        <Image 
                            src={member.image} 
                            alt={member.name} 
                            fill
                            className="object-cover object-top"
                        />
                     </div>
                  ) : (
                      <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-yellow-600 to-yellow-600/70 flex items-center justify-center text-4xl font-bold text-white mb-4 shadow-lg shadow-black/50 border-2 border-transparent group-hover:border-yellow-400/50 transition-colors">
                        {member.name.charAt(0)}
                      </div>
                  )}
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-yellow-500 transition-colors">{member.name}</h3>
                  <p className="text-yellow-600/80 font-medium text-sm mb-3 tracking-wide">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-black-950 to-yellow-600/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Why Choose Provisent EduTech?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Affordable Pricing', desc: 'Quality education without breaking the bank' },
              { title: 'Lifetime Access', desc: 'Learn at your own pace with lifetime course access' },
              { title: 'Expert Instructors', desc: 'Learn from industry professionals and thought leaders' },
              { title: 'Job Ready Skills', desc: 'Practical skills demanded by top employers' },
              { title: 'Global Community', desc: 'Connect with learners from around the world' },
              { title: 'Certifications', desc: 'Earn recognized certificates to advance your career' },
            ].map((feature, index) => (
              <div key={index} className="bg-black-900 rounded-lg border border-yellow-600/30 p-8 hover:shadow-lg transition-all hover:-translate-y-1">
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-black-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Begin Your Learning Journey?</h2>
          <p className="text-xl text-black-300 mb-8">Join thousands of students transforming their careers with Provisent EduTech</p>
          <Button
            onClick={() => setIsEnrollOpen(true)}
            className="bg-yellow-600 text-white hover:bg-yellow-700 px-8 py-4 text-lg font-bold inline-flex items-center gap-2"
          >
            Enroll Now <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Enrollment Modal */}
      <EnrollmentModal isOpen={isEnrollOpen} onClose={() => setIsEnrollOpen(false)} />

      <Footer />
    </main>
  )
}
