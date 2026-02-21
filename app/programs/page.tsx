import { Suspense } from 'react'
import { Metadata } from 'next'
import ProgramsPageContent from '@/components/programs-page-content'

export const metadata: Metadata = {
  title: 'Professional Programs & Courses | Provisent EduTech',
  description: 'Explore our comprehensive collection of professional programs in programming, business, medical, design, and more. Get certified and advance your career with Provisent EduTech.',
  keywords: 'professional courses, programming courses, business training, design courses, online certification programs',
  openGraph: {
    title: 'Professional Programs & Courses',
    description: 'Transform your career with industry-leading professional programs and certifications',
  },
}

export default function ProgramsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black flex items-center justify-center text-white">Loading programs...</div>}>
      <ProgramsPageContent />
    </Suspense>
  )
}
