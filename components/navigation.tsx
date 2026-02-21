'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import EnrollmentModal from './enrollment-modal'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isEnrollOpen, setIsEnrollOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-[#503a00] via-black via-60% to-black backdrop-blur-md border-b border-yellow-600/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-28">
          {/* Logo */}
          <Link href="/" className="h-24 w-24 flex items-center justify-center rounded-xl transform hover:scale-105 transition-all duration-300">
            <Image 
              src="/logo.jpeg" 
              alt="Provisent"
              width={250}
              height={250}
              className="h-20 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-12">
            <Link href="/" className="text-neutral-300 hover:text-yellow-600 transition text-sm font-light uppercase tracking-widest">
              Home
            </Link>
            <Link href="/programs" className="text-neutral-300 hover:text-yellow-600 transition text-sm font-light uppercase tracking-widest">
              Programs
            </Link>
            <Link href="/services/certifications" className="text-neutral-300 hover:text-yellow-600 transition text-sm font-light uppercase tracking-widest">
              Certificates
            </Link>
            <Link href="/about" className="text-neutral-300 hover:text-yellow-600 transition text-sm font-light uppercase tracking-widest">
              About
            </Link>
            <Link href="/contact" className="text-neutral-300 hover:text-yellow-600 transition text-sm font-light uppercase tracking-widest">
              Contact
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex gap-4 items-center">
            <Button 
              onClick={() => setIsEnrollOpen(true)}
              className="bg-yellow-700 text-white hover:bg-yellow-600 px-8 py-2.5 text-sm font-light uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-yellow-700/50"
            >
              Enroll Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-yellow-700/30 bg-neutral-900 px-4">
            <Link 
              href="/" 
              onClick={() => setIsOpen(false)}
              className="block py-3 text-neutral-100 hover:text-yellow-600 font-medium border-b border-neutral-800"
            >
              Home
            </Link>
            <Link 
              href="/programs" 
              onClick={() => setIsOpen(false)}
              className="block py-3 text-neutral-100 hover:text-yellow-600 font-medium border-b border-neutral-800"
            >
              Programs
            </Link>
            <Link 
              href="/services/certifications" 
              onClick={() => setIsOpen(false)}
              className="block py-3 text-neutral-100 hover:text-yellow-600 font-medium border-b border-neutral-800"
            >
              Certificates
            </Link>
            <Link 
              href="/about" 
              onClick={() => setIsOpen(false)}
              className="block py-3 text-neutral-100 hover:text-yellow-600 font-medium border-b border-neutral-800"
            >
              About
            </Link>
            <Link 
              href="/contact" 
              onClick={() => setIsOpen(false)}
              className="block py-3 text-neutral-100 hover:text-yellow-600 font-medium border-b border-neutral-800"
            >
              Contact
            </Link>
            <div className="flex flex-col gap-2 mt-4">
              <Button 
                onClick={() => {
                  setIsEnrollOpen(true)
                  setIsOpen(false)
                }}
                className="w-full bg-gradient-to-r from-yellow-700 to-yellow-600 text-white hover:from-yellow-600 hover:to-yellow-500 font-semibold py-3"
              >
                Enroll Now
              </Button>
            </div>
          </div>
        )}

        {/* Enrollment Modal */}
        <EnrollmentModal isOpen={isEnrollOpen} onClose={() => setIsEnrollOpen(false)} />
      </div>
    </nav>
  )
}
