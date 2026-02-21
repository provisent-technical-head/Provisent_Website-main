'use client'

import { useEffect, useState } from 'react'

export default function Partners() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const partners = [
    { name: 'Google', logo: '/logos/google.svg' },
    { name: 'Microsoft', logo: '/logos/microsoft.svg' },
    { name: 'Amazon', logo: '/logos/amazon.svg' },
    { name: 'Meta', logo: '/logos/meta.svg' },
    { name: 'Apple', logo: '/logos/apple.svg' },
    { name: 'IBM', logo: '/logos/ibm.svg' },
    { name: 'Tesla', logo: '/logos/tesla.svg' },
    { name: 'Oracle', logo: '/logos/oracle.svg' },
  ]

  return (
    <section className="py-16 bg-black-950/50 border-y border-yellow-600/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-black-400 font-light uppercase tracking-widest text-sm">Trusted by professionals at</p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{ transitionDelay: `${200 + index * 50}ms` }}
            >
              <div className="h-16 flex items-center justify-center hover:scale-110 transition-transform group">
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} logo`}
                  className="h-12 w-auto object-contain filter blackscale opacity-70 hover:blackscale-0 hover:opacity-100 transition-all"
                />
              </div>
              <p className="text-center text-sm text-black-400 font-light mt-2">{partner.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
