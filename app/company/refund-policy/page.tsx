'use client'

import React from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export default function RefundPolicyPage() {
  return (
    <main className="bg-background text-foreground min-h-screen flex flex-col bg-neutral-950">
      <Navigation />

      <section className="bg-gradient-to-br from-black via-neutral-900 to-black text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Refund/Cancellation Policy</h1>
        </div>
      </section>

      <section className="py-20 bg-neutral-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert prose-lg max-w-none text-neutral-300">
            <p className="mb-8 font-light leading-relaxed">
              We are committed to ensuring your satisfaction with any product, service, course, or workshop you have purchased from us. Please read the following terms carefully as they govern our refund policy.
            </p>

            <h2 className="text-white mt-8 font-bold text-2xl">Workshops:</h2>
            <p className="leading-relaxed">
              No refunds or credits will be granted against payments related to workshops.
            </p>

            <h2 className="text-white mt-8 font-bold text-2xl">Courses:</h2>
            <p className="leading-relaxed mb-4">
              We do not offer refunds for courses. Please carefully consider your schedule and commitment before enrolling.
            </p>
            <p className="leading-relaxed">
              You may transfer your enrollment to a subsequent cohort. A nominal administrative fee will apply for such transfers.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
