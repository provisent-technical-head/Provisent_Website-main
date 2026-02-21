'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Linkedin, Mail } from 'lucide-react'

export default function CEOSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="py-20 bg-gradient-to-b from-black-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-yellow-600 uppercase tracking-widest text-sm font-light mb-4">Leadership</p>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-16">Meet Our CEO</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* CEO Image */}
            <div className="flex justify-center">
              <div className="w-80 h-full rounded-2xl overflow-hidden border border-yellow-600/30 flex items-center justify-center shadow-2xl">
                <Image 
                  src="/ceo.png" 
                  alt="S.Prajan, CEO" 
                  width={320} 
                  height={480}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>

            {/* CEO Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-4xl font-light text-white mb-2">S.Prajan</h3>
                <p className="text-yellow-600 text-lg font-light mb-4">Founder & CEO</p>
                <p className="text-black-400 font-light leading-relaxed mb-6">
                  With over 20 years of experience in technology and education, S.Prajan founded Provisent EduTech with a vision to democratize quality education globally. His passion for empowering learners has transformed thousands of lives across 120+ countries.
                </p>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-3 uppercase tracking-widest text-sm">Expertise & Achievements</h4>
                <ul className="space-y-2 text-black-400 font-light">
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-600 mt-1">▪</span>
                    <span>Led the growth of Provisent EduTech from 0 to 500K+ active students</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-600 mt-1">▪</span>
                    <span>Former VP of Engineering at leading EdTech platform</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-600 mt-1">▪</span>
                    <span>Speaker at international education and technology conferences</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-600 mt-1">▪</span>
                    <span>Advocate for accessible and affordable quality education</span>
                  </li>
                </ul>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 pt-4">
                <button className="flex items-center gap-2 px-6 py-3 rounded-lg border border-yellow-600/30 hover:bg-yellow-600/10 transition-all text-yellow-600 hover:text-yellow-500">
                  <Linkedin className="w-5 h-5" />
                  <span className="font-light">LinkedIn</span>
                </button>
                <button className="flex items-center gap-2 px-6 py-3 rounded-lg border border-yellow-600/30 hover:bg-yellow-600/10 transition-all text-yellow-600 hover:text-yellow-500">
                  <Mail className="w-5 h-5" />
                  <span className="font-light">Contact</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
