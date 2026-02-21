'use client'

import React from "react"

import { useState } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin, Clock, MessageSquare, Send } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Format message for WhatsApp
    const whatsappMessage = `Name: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0ASubject: ${formData.subject}%0AMessage: ${formData.message}`
    
    // Open WhatsApp with the message
    window.open(`https://wa.me/919361444644?text=${whatsappMessage}`, '_blank')
    
    setSubmitted(true)
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    
    setTimeout(() => setSubmitted(false), 5000)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hr@provisent.com',
      desc: 'We typically respond within 24 hours',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 9361444644',
      desc: 'Mon-Fri, 9 AM - 6 PM IST',
    },
    {
      icon: MapPin,
      title: 'Address',
      value: '10A, Velappa Gounder Nagar, Sahara City, Saravanampatti, Coimbatore, Tamil Nadu 641035',
      desc: 'Serving students worldwide',
    },
    {
      icon: Clock,
      title: 'Support Hours',
      value: '24/7 Online Support',
      desc: 'Always available via chat',
    },
  ]

  const faqItems = [
    {
      question: 'How do I enroll in a program?',
      answer: 'Simply click the "Enroll Now" button on any program page, fill in your details, and submit. You\'ll receive access instructions via WhatsApp within minutes.',
    },
    {
      question: 'Can I get a refund?',
      answer: 'Yes, we offer a 7-day money-back guarantee if you\'re not satisfied with your purchase. No questions asked.',
    },
    {
      question: 'Do I get a certificate after completion?',
      answer: 'Yes, all our programs include completion certificates that are recognized by industry leaders globally.',
    },
    {
      question: 'Is there lifetime access to courses?',
      answer: 'Yes! Once enrolled, you have lifetime access to all course materials, updates, and resources.',
    },
    {
      question: 'What if I need technical support?',
      answer: 'Our support team is available 24/7 through chat, email, and WhatsApp to assist you with any technical issues.',
    },
    {
      question: 'Can I download course materials?',
      answer: 'Yes, most course materials including videos, resources, and notes can be downloaded for offline learning.',
    },
  ]

  return (
    <main className="bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-black via-neutral-900 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-neutral-300 max-w-2xl">Have questions? We're here to help. Reach out to our team anytime.</p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <div key={index} className="bg-gradient-to-br from-yellow-600/10 to-yellow-600/5 rounded-xl border border-yellow-600/30 p-8 hover:shadow-lg transition-all hover:-translate-y-1">
                  <Icon className="w-8 h-8 text-yellow-600 mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">{info.title}</h3>
                  <p className="text-white font-semibold mb-1">{info.value}</p>
                  <p className="text-neutral-400 text-sm">{info.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-gradient-to-b from-neutral-800 to-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-4xl font-bold mb-2 text-white">Send us a Message</h2>
              <p className="text-neutral-400 mb-8">Fill out the form below and we'll get back to you shortly.</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-yellow-600/30 bg-neutral-800 text-white placeholder:text-neutral-500 focus:border-yellow-600 focus:ring-2 focus:ring-yellow-600/20 outline-none transition"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-yellow-600/30 bg-neutral-800 text-white placeholder:text-neutral-500 focus:border-yellow-600 focus:ring-2 focus:ring-yellow-600/20 outline-none transition"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-yellow-600/30 bg-neutral-800 text-white placeholder:text-neutral-500 focus:border-yellow-600 focus:ring-2 focus:ring-yellow-600/20 outline-none transition"
                    placeholder="+91 XXXXXXXXXX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white mb-2">Subject</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-yellow-600/30 bg-neutral-800 text-white focus:border-yellow-600 focus:ring-2 focus:ring-yellow-600/20 outline-none transition"
                  >
                    <option value="">Select a subject</option>
                    <option value="Course Inquiry">Course Inquiry</option>
                    <option value="Technical Support">Technical Support</option>
                    <option value="Billing">Billing</option>
                    <option value="Partnership">Partnership</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-yellow-600/30 bg-neutral-800 text-white placeholder:text-neutral-500 focus:border-yellow-600 focus:ring-2 focus:ring-yellow-600/20 outline-none transition resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                {submitted && (
                  <div className="bg-yellow-600/20 border border-yellow-600 text-yellow-100 p-4 rounded-lg flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-yellow-600" />
                    Message sent to WhatsApp successfully!
                  </div>
                )}

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-600 to-yellow-600/80 text-white hover:from-yellow-700 hover:to-yellow-700 px-8 py-4 text-lg font-bold inline-flex items-center justify-center gap-2 shadow-lg"
                >
                  Send Message <Send className="w-5 h-5" />
                </Button>
              </form>
            </div>

            {/* Info Section */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Quick Support</h3>
                <p className="text-black-400 mb-6">Need immediate help? Our support team is always ready to assist you.</p>
              </div>

              <div className="bg-neutral-800 rounded-xl border border-yellow-600/30 p-8 space-y-6">
                <h4 className="text-xl font-bold text-white">Response Times</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-white">Email: 24 hours</p>
                      <p className="text-sm text-neutral-400">Usually faster</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-white">WhatsApp: Instant</p>
                      <p className="text-sm text-neutral-400">Real-time support</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-white">Phone: Within 1 hour</p>
                      <p className="text-sm text-neutral-400">Business hours</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-yellow-600/10 to-yellow-600/5 rounded-xl border border-yellow-600/30 p-8">
                <h4 className="text-xl font-bold text-white mb-4">Can't wait?</h4>
                <p className="text-neutral-400 mb-6">Chat with us directly on WhatsApp for instant support.</p>
                <Button
                  onClick={() => window.open('https://wa.me/919361444644', '_blank')}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition"
                >
                  Chat on WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-neutral-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Frequently Asked Questions</h2>

          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <details key={index} className="group border border-yellow-600/30 rounded-lg hover:border-yellow-600 transition">
                <summary className="flex cursor-pointer items-center justify-between bg-gradient-to-r from-yellow-600/5 to-transparent p-6 font-semibold text-white hover:bg-yellow-600/10 transition">
                  <span>{item.question}</span>
                  <span className="transition group-open:rotate-180">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 py-4 bg-neutral-800/30 text-neutral-400 border-t border-yellow-600/30">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
