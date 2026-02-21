'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-black-950 to-black-900 text-white relative overflow-hidden flex items-center">
      {/* Animated background */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-yellow-600/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <p className="text-yellow-600 uppercase tracking-widest text-sm font-light mb-4">Elevate Your Future</p>
              <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6 leading-tight tracking-tight">
                Transform Skills, Build Careers
              </h1>
            </div>

            <p className={`text-black-300 text-lg leading-relaxed max-w-md transition-all duration-1000 delay-200 font-light ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Join Provisent Academy's elite learning ecosystem. Gain industry-recognized certifications from world-class instructors and accelerate your professional journey with cutting-edge education designed for modern careers.
            </p>

            <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Link href="/programs" className='cursor-pointer'>
              <Button className="bg-yellow-600 text-white hover:bg-yellow-700 px-8 py-6 text-base font-semibold flex items-center gap-2 group">
                Explore Programs
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              </Link>
              <Button
                variant="outline"
                className="border-black-400 text-white hover:bg-black-800 px-8 py-6 text-base font-semibold bg-transparent"
              >
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className={`flex gap-12 pt-8 border-t border-black-700/50 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div>
                <p className="font-playfair text-5xl font-light text-yellow-600">50+</p>
                <p className="text-black-400 text-xs mt-2 uppercase tracking-widest font-light">Expert Programs</p>
              </div>
              <div>
                <p className="font-playfair text-5xl font-light text-yellow-600">10K+</p>
                <p className="text-black-400 text-xs mt-2 uppercase tracking-widest font-light">Active Students</p>
              </div>
              <div>
                <p className="font-playfair text-5xl font-light text-yellow-600">95%</p>
                <p className="text-black-400 text-xs mt-2 uppercase tracking-widest font-light">Success Rate</p>
              </div>
            </div>
          </div>

          {/* Right Visual - Minimal and elegant */}
          <div className="hidden md:flex items-center justify-center">
            <div className={`relative w-full max-w-md transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/15 to-transparent rounded-3xl blur-2xl"></div>
              <div className="relative bg-black-900/50 backdrop-blur-xl rounded-3xl p-8 border border-black-700 shadow-2xl">
                <div className="space-y-4 mb-8">
                  <div className="h-3 bg-black-700 rounded-full w-3/4"></div>
                  <div className="h-3 bg-black-700 rounded-full w-full"></div>
                  <div className="h-3 bg-black-700 rounded-full w-5/6"></div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-yellow-600/30 to-yellow-600/10 rounded-xl h-28 flex items-center justify-center border border-yellow-600/30 hover:from-yellow-600/40 hover:to-yellow-600/15 transition-all">
                    <span className="text-yellow-500 font-semibold">Tech</span>
                  </div>
                  <div className="bg-gradient-to-br from-yellow-600/30 to-yellow-600/10 rounded-xl h-28 flex items-center justify-center border border-yellow-600/30 hover:from-yellow-600/40 hover:to-yellow-600/15 transition-all">
                    <span className="text-yellow-500 font-semibold">Business</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
