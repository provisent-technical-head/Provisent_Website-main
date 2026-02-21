'use client'

import Image from 'next/image'
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#503a00] via-black via-60% to-black backdrop-blur-sm text-white py-16 border-t border-yellow-600/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="h-24 w-24 flex items-center justify-center rounded-xl mb-4">
              <Image src="/logo.jpeg" alt="Provisent" width={250} height={250} className="h-20 w-auto" />
            </div>
            <p className="text-neutral-400 text-sm font-light leading-relaxed">
              Empowering learners worldwide with premium, world-class education and professional development.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-yellow-600 hover:text-yellow-500 transition hover:scale-110 duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-yellow-600 hover:text-yellow-500 transition hover:scale-110 duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-yellow-600 hover:text-yellow-500 transition hover:scale-110 duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/provisent_edutech" target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:text-yellow-500 transition hover:scale-110 duration-300">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <div className="pt-4 ">
               <Image 
                 src="https://provisent-academy.in/we-are-registered.webp" 
                 alt="Registered" 
                 width={150} 
                 height={50} 
                 className="w-auto h-20 bg-white rounded-lg p-3 opacity-80 hover:opacity-100 transition-opacity"
               />
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm uppercase tracking-widest font-bold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="/services/e-learning" className="text-neutral-400 hover:text-yellow-600 transition font-light">E-Learning</a></li>
              <li><a href="/services/bootcamp" className="text-neutral-400 hover:text-yellow-600 transition font-light">Bootcamp</a></li>
              <li><a href="/services/webinar" className="text-neutral-400 hover:text-yellow-600 transition font-light">Webinar</a></li>
              <li><a href="/services/certifications" className="text-neutral-400 hover:text-yellow-600 transition font-light">Certifications</a></li>
              <li><a href="/services/mentoring" className="text-neutral-400 hover:text-yellow-600 transition font-light">Mentoring</a></li>
              <li><a href="/services/corporate-services" className="text-neutral-400 hover:text-yellow-600 transition font-light">Corporate Services</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm uppercase tracking-widest font-bold text-white mb-6">Company</h4>
            <ul className="space-y-3">
              <li><a href="/about" className="text-neutral-400 hover:text-yellow-600 transition font-light">About us</a></li>
              <li><a href="/company/leadership" className="text-neutral-400 hover:text-yellow-600 transition font-light">Leadership</a></li>
              <li><a href="/company/careers" className="text-neutral-400 hover:text-yellow-600 transition font-light">Careers</a></li>
              <li><a href="/company/refund-policy" className="text-neutral-400 hover:text-yellow-600 transition font-light">Refund/Cancellation Policy</a></li>
            </ul>
          </div>

          {/* Newsletter & Contact & Map */}
          <div className="space-y-6">
            <div>
              <h4 className="text-sm uppercase tracking-widest font-bold text-white mb-4">Newsletter</h4>
              <p className="text-neutral-400 text-xs mb-4 font-light">Sign up our newsletter to get update information, news and free insight.</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-neutral-800 border border-neutral-700 text-white px-3 py-2 text-sm rounded-md focus:outline-none focus:border-yellow-600 w-full"
                />
                <button className="bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700 transition text-sm">OK</button>
              </div>
            </div>

             <div>
                <h4 className="text-sm uppercase tracking-widest font-bold text-white mb-2">Contact</h4>
                <a href="mailto:hr@provisent.com" className="text-neutral-400 text-sm hover:text-yellow-600 transition block mb-1">hr@provisent.com</a>
                <a href="tel:+919361444644" className="text-neutral-400 text-sm hover:text-yellow-600 transition block">+91 9361444644</a>
             </div>

             <div className="rounded-lg overflow-hidden border border-neutral-700 h-40">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3711.41539720623!2d77.0064465!3d11.088068600000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8b54509e01c58ccb%3A0xd1bc15e62291d1ba!2sGALACTIC%20HIVE!5e1!3m2!1sen!2sin!4v1769962573290!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
             </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-yellow-600/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-400 text-xs font-light uppercase tracking-widest">
            &copy; 2024 Provisent. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-neutral-400 hover:text-yellow-600 transition text-xs font-light uppercase tracking-widest">Privacy</a>
            <a href="#" className="text-neutral-400 hover:text-yellow-600 transition text-xs font-light uppercase tracking-widest">Terms</a>
            <a href="#" className="text-neutral-400 hover:text-yellow-600 transition text-xs font-light uppercase tracking-widest">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
