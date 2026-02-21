'use client'

import { useEffect, useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function FAQSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [expanded, setExpanded] = useState<number | null>(0)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const faqs = [
    {
      question: 'How long does it take to complete a course?',
      answer:
        'Most courses are designed to be completed in 8-16 weeks with 5-10 hours of study per week. However, you can learn at your own pace with lifetime access to course materials.',
    },
    {
      question: 'Do I get a certificate after completing a course?',
      answer:
        'Yes! Upon completion, you receive a verified certificate that you can add to your LinkedIn profile and resume. Our certificates are recognized by leading companies worldwide.',
    },
    {
      question: 'Can I get a refund if I\'m not satisfied?',
      answer:
        'Absolutely. We offer a 30-day money-back guarantee. If you\'re not satisfied with the course, contact us for a full refund, no questions asked.',
    },
    {
      question: 'Is there live support available?',
      answer:
        'Yes! We offer live Q&A sessions with instructors, 24/7 community support, and dedicated student success coaches to help you succeed.',
    },
    {
      question: 'What are the system requirements?',
      answer:
        'You just need a modern web browser and internet connection. Some courses may require specific software, which is always specified in the course details.',
    },
    {
      question: 'Can I share my account with others?',
      answer:
        'No, each subscription is for individual use only. However, we offer team and enterprise plans if you want to train multiple people.',
    },
  ]

  return (
    <section className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-yellow-600 uppercase tracking-widest text-sm font-light mb-4">Questions</p>
          <h2 className="font-playfair text-5xl md:text-6xl font-light text-white mt-3 mb-6">Frequently Asked Questions</h2>
          <p className="text-lg text-black-400 font-light leading-relaxed">
            Find answers to common questions about our programs and platform.
          </p>
        </div>

        {/* FAQs */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <button
                onClick={() => setExpanded(expanded === index ? null : index)}
                className="w-full text-left p-6 bg-black-900/50 border border-black-700 rounded-lg hover:border-yellow-600 transition-all group"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-light text-white group-hover:text-yellow-600 transition-colors">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-yellow-600 transition-transform duration-300 ${
                      expanded === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>

                {expanded === index && (
                  <div className="mt-4 pt-4 border-t border-black-700/50 text-black-400 font-light leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
