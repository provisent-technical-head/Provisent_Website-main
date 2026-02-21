'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Check, X } from 'lucide-react'

export default function PricingPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly')
  const [isEnrollOpen, setIsEnrollOpen] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for beginners',
      monthlyPrice: 29,
      annualPrice: 290,
      color: 'from-blue-500 to-blue-600',
      features: [
        { text: 'Access to 10+ beginner courses', included: true },
        { text: 'Lifetime course access', included: true },
        { text: 'Community forum access', included: true },
        { text: 'Monthly webinars', included: false },
        { text: '1-on-1 mentoring', included: false },
        { text: 'Certificate of completion', included: false },
      ],
      popular: false,
    },
    {
      name: 'Professional',
      description: 'For career advancement',
      monthlyPrice: 79,
      annualPrice: 790,
      color: 'from-accent to-accent/80',
      features: [
        { text: 'Access to all 50+ courses', included: true },
        { text: 'Lifetime course access', included: true },
        { text: 'Community forum access', included: true },
        { text: 'Monthly webinars', included: true },
        { text: 'Priority support', included: true },
        { text: 'Certificate of completion', included: false },
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      description: 'For teams and organizations',
      monthlyPrice: 299,
      annualPrice: 2990,
      color: 'from-purple-500 to-purple-600',
      features: [
        { text: 'Access to all 50+ courses', included: true },
        { text: 'Lifetime course access', included: true },
        { text: 'Community forum access', included: true },
        { text: 'Monthly webinars', included: true },
        { text: '1-on-1 mentoring', included: true },
        { text: 'Professional certificates', included: true },
      ],
      popular: false,
    },
  ]

  return (
    <main className="bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary/98 to-primary/95 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className={`text-5xl md:text-6xl font-bold mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Simple, Transparent Pricing
          </h1>
          <p className={`text-xl text-white/80 mb-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Choose the perfect plan for your learning journey
          </p>

          {/* Billing Toggle */}
          <div className={`inline-flex gap-2 bg-white/20 backdrop-blur-sm p-1.5 rounded-full transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                billingPeriod === 'monthly'
                  ? 'bg-accent text-primary shadow-lg'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod('annual')}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                billingPeriod === 'annual'
                  ? 'bg-accent text-primary shadow-lg'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              Annual <span className="text-xs ml-1 bg-white/20 px-2 py-0.5 rounded-full">Save 17%</span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-black-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-2xl overflow-hidden transition-all hover:shadow-xl hover:-translate-y-2 ${
                  plan.popular
                    ? 'ring-2 ring-yellow-600 bg-black-900 shadow-lg'
                    : 'border border-black-700 bg-black-900 hover:border-yellow-600'
                }`}
              >
                {plan.popular && (
                  <div className="bg-gradient-to-r from-yellow-600 to-yellow-600/80 text-white text-center py-3 font-bold uppercase text-sm">
                    Most Popular
                  </div>
                )}

                <div className="p-8 space-y-6">
                  {/* Plan Info */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-black-400">{plan.description}</p>
                  </div>

                  {/* Price */}
                  <div className="space-y-2">
                    <div className="text-5xl font-bold text-white">
                      ₹{billingPeriod === 'monthly' ? plan.monthlyPrice : plan.annualPrice}
                      <span className="text-lg text-black-400 font-normal">/{billingPeriod === 'monthly' ? 'month' : 'year'}</span>
                    </div>
                    {billingPeriod === 'annual' && (
                      <p className="text-sm text-yellow-600 font-semibold">Save 20%</p>
                    )}
                  </div>

                  {/* CTA Button */}
                  <Button
                    onClick={() => setIsEnrollOpen(true)}
                    className={`w-full py-3 font-bold uppercase tracking-wide ${
                      plan.popular
                        ? 'bg-gradient-to-r from-yellow-600 to-yellow-600/80 text-white hover:shadow-lg'
                        : 'border border-black-700 text-white hover:bg-black-800'
                    }`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    Get Started
                  </Button>

                  {/* Features */}
                  <div className="space-y-4 pt-6 border-t border-black-700">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        {feature.included ? (
                          <Check className="w-5 h-5 text-yellow-600" />
                        ) : (
                          <X className="w-5 h-5 text-black-600" />
                        )}
                        <span className={feature.included ? 'text-white' : 'text-black-500 line-through'}>
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-primary/5 py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: 'Can I switch plans anytime?',
                a: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.',
              },
              {
                q: 'Do you offer refunds?',
                a: 'We offer a 30-day money-back guarantee if you\'re not satisfied with your subscription.',
              },
              {
                q: 'Are there any hidden fees?',
                a: 'No, all pricing is transparent. What you see is what you pay. No hidden charges.',
              },
              {
                q: 'Do courses have expiration dates?',
                a: 'No, all purchased courses are yours for life. You can access them anytime, anywhere.',
              },
            ].map((faq, index) => (
              <div
                key={index}
                className={`p-6 bg-white rounded-lg border border-border hover:border-accent transition-all duration-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${700 + index * 100}ms` }}
              >
                <h3 className="font-bold text-lg mb-2 text-foreground">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
