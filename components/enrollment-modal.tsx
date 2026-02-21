'use client'

import React from "react"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'

interface EnrollmentModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function EnrollmentModal({ isOpen, onClose }: EnrollmentModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: 'Web Development Masterclass',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Format the message for WhatsApp
    const message = `Hello! I would like to enroll in your EduTech.\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCourse: ${formData.course}`
    
    // WhatsApp API URL (9361444644 is the phone number to send to)
    const whatsappUrl = `https://wa.me/919361444644?text=${encodeURIComponent(message)}`
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank')
    
    // Reset form and close modal
    setFormData({
      name: '',
      email: '',
      phone: '',
      course: 'Web Development Masterclass',
    })
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="bg-neutral-800 rounded-2xl shadow-2xl w-full max-w-md mx-4 overflow-hidden animate-in fade-in duration-300 border border-neutral-700">
        {/* Header */}
        <div className="bg-gradient-to-r from-yellow-600 to-yellow-700 px-6 py-8 text-white flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Enroll Now</h2>
            <p className="text-white/90 text-sm mt-1">Start your learning journey with Provisent</p>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/20 rounded-full p-2 transition-all"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-neutral-50 mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="John Doe"
              className="w-full px-4 py-3 bg-neutral-900 border border-neutral-600 text-neutral-50 placeholder-neutral-500 rounded-lg focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-neutral-50 mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="john@example.com"
              className="w-full px-4 py-3 bg-neutral-900 border border-neutral-600 text-neutral-50 placeholder-neutral-500 rounded-lg focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-semibold text-neutral-50 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="+91 98765 43210"
              className="w-full px-4 py-3 bg-neutral-900 border border-neutral-600 text-neutral-50 placeholder-neutral-500 rounded-lg focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition"
            />
          </div>

          {/* Course Selection */}
          <div>
            <label className="block text-sm font-semibold text-neutral-50 mb-2">
              Select Program/Course
            </label>
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-neutral-900 border border-neutral-600 text-neutral-50 rounded-lg focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition"
            >
              <option>Web Development Masterclass</option>
              <option>React Advanced Patterns</option>
              <option>Digital Marketing Strategy</option>
              <option>UI/UX Design Fundamentals</option>
              <option>Data Science Essentials</option>
              <option>Python for Beginners</option>
              <option>Java Programming</option>
              <option>C++ Development</option>
              <option>Business Finance Program</option>
              <option>Medical Coding</option>
              <option>Artificial Intelligence</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 border-neutral-600 text-neutral-50 hover:bg-neutral-700 bg-transparent"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-gradient-to-r from-yellow-600 to-yellow-700 text-white hover:from-yellow-500 hover:to-yellow-600 shadow-lg font-semibold"
            >
              Send Now
            </Button>
          </div>

          <p className="text-xs text-neutral-400 text-center pt-2">
            We'll contact you via WhatsApp to confirm your enrollment with Provisent
          </p>
        </form>
      </div>
    </div>
  )
}
