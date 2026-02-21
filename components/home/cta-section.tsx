'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, Zap } from 'lucide-react'

export default function CTASection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="py-20 bg-gradient-to-br from-black-950 to-black-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl -mr-48 -mt-48 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-yellow-600/5 rounded-full blur-3xl -ml-40 -mb-40 animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <h2 className="font-playfair text-5xl md:text-7xl font-light mb-6 leading-tight text-white">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-black-300 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
            Join thousands of successful students who have already started their learning journey with Provisent EduTech.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="bg-yellow-600 text-white hover:bg-yellow-700 px-8 py-6 text-lg font-light uppercase tracking-wider flex items-center gap-2 group">
              Start Learning Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              className="border-yellow-600 text-yellow-600 hover:bg-yellow-600/10 px-8 py-6 text-lg font-light uppercase tracking-wider bg-transparent"
            >
              Schedule a Demo
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 pt-12 border-t border-black-700/50 flex flex-col sm:flex-row gap-8 justify-center items-center text-black-400">
            <div className="flex items-center gap-3">
              <Zap className="w-5 h-5 text-yellow-600" />
              <span className="font-light">30-day money-back guarantee</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-black-700/50"></div>
            <div className="flex items-center gap-3">
              <Zap className="w-5 h-5 text-yellow-600" />
              <span>Lifetime access to course materials</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/20"></div>
            <div className="flex items-center gap-3">
              <Zap className="w-5 h-5 text-yellow-600" />
              <span>24/7 support team</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
