'use client'

import { useParams } from 'next/navigation'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { programsData } from '@/lib/data'
import { Star, CheckCircle, Award, Clock, Users, ArrowRight, BookOpen, Wrench, Briefcase, GraduationCap, MessageSquare, ChevronDown, ChevronUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import Image from 'next/image'

export default function CourseEnrollmentPage() {
  const params = useParams()
  const courseId = Number(params.id)

  let courseDetails = null
  let categoryName = ''

  Object.entries(programsData).forEach(([category, data]) => {
    // @ts-ignore
    const found = data.courses.find(c => c.id === courseId)
    if (found) {
      courseDetails = found
      categoryName = category
    }
  })

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: 'student',
    goals: ''
  })
  const [isSubmit, setIsSubmit] = useState(false)
  const [openModuleIndex, setOpenModuleIndex] = useState<number | null>(0)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmit(true)
    setTimeout(() => {
        alert("Enrollment Request Sent! We will contact you shortly.")
        setIsSubmit(false)
    }, 1000)
  }

  if (!courseDetails) {
    return (
      <div className="bg-black min-h-screen text-white flex flex-col">
        <Navigation />
        <div className="flex-grow flex items-center justify-center">
          <h1 className="text-2xl">Course not found</h1>
        </div>
        <Footer />
      </div>
    )
  }

  // Define types for TS
  const course = courseDetails as {
      id: number;
      name: string;
      rating: number;
      students: number;
      price: number;
      learningPoints: string[];
      certificateImage: string;
      tools?: string[];
      syllabus?: { title: string; items: string[] }[];
      career?: { roles: string[]; salary: string };
      reviews?: { user: string; rating: number; comment: string }[];
  }

  // Defaults if data is missing
  const tools = course.tools || ['VS Code', 'Git', 'Slack', 'Zoom']
  const syllabus = course.syllabus || [
    { title: 'Module 1: Introduction & Fundamentals', items: ['Course Overview', 'Setting up Environment', 'Basic Concepts', 'First Project'] },
    { title: 'Module 2: Core Concepts Deep Dive', items: ['Advanced Syntax', 'Best Practices', 'Debugging Techniques', 'Case Studies'] },
    { title: 'Module 3: Advanced Topics', items: ['Performance Optimization', 'Security Basics', 'Integration Patterns', 'Final Assessment Prep'] },
    { title: 'Module 4: Capstone Project', items: ['Project Planning', 'Execution', 'Review & Feedback', 'Deployment'] }
  ]
  const career = course.career || { roles: ['Junior Developer', 'Analyst', 'Consultant'], salary: '₹4-10 LPA' }

  return (
    <div className="bg-black min-h-screen font-sans selection:bg-yellow-500/30">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-neutral-900 via-black to-black pt-20 pb-12 px-4 border-b border-yellow-900/20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
            
            {/* Left Column: Content */}
            <div className="lg:col-span-2 space-y-8">
                <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-yellow-900/20 text-yellow-500 text-xs font-bold uppercase tracking-wider mb-4 border border-yellow-700/30">
                        {categoryName} Program
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
                        {course.name}
                    </h1>
                    <div className="flex flex-wrap items-center gap-6 text-neutral-400 text-sm font-medium">
                        <div className="flex items-center gap-2 bg-neutral-900 px-3 py-1.5 rounded-lg border border-neutral-800">
                            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                            <span className="text-white">{course.rating}</span> rating
                        </div>
                        <div className="flex items-center gap-2 bg-neutral-900 px-3 py-1.5 rounded-lg border border-neutral-800">
                            <Users className="w-4 h-4 text-neutral-300" />
                            <span>{(course.students/1000).toFixed(1)}k+ Enrolled</span>
                        </div>
                        <div className="flex items-center gap-2 bg-neutral-900 px-3 py-1.5 rounded-lg border border-neutral-800">
                            <Clock className="w-4 h-4 text-neutral-300" />
                            <span>8-12 Weeks</span>
                        </div>
                    </div>
                </div>

                {/* What you'll learn */}
                <div className="bg-neutral-900/30 rounded-2xl p-8 border border-neutral-800 hover:border-neutral-700 transition-colors">
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                        <CheckCircle className="text-yellow-500 w-6 h-6" />
                        What You Will Learn
                    </h2>
                    <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                        {course.learningPoints && course.learningPoints.map((point, i) => (
                            <div key={i} className="flex items-start gap-3 group">
                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-yellow-500 flex-shrink-0 group-hover:scale-125 transition-transform" />
                                <p className="text-neutral-300 leading-relaxed font-light">{point}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tools Covered */}
                 <div className="bg-neutral-900/30 rounded-2xl p-8 border border-neutral-800">
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                        <Wrench className="text-yellow-500 w-6 h-6" />
                        Tools & Technologies
                    </h2>
                    <div className="flex flex-wrap gap-4">
                        {tools.map((tool, i) => (
                            <div key={i} className="px-6 py-3 bg-black border border-neutral-800 rounded-xl text-neutral-300 font-medium hover:border-yellow-600/50 hover:text-yellow-500 transition-colors shadow-lg shadow-black">
                                {tool}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Syllabus Accordion */}
                <div className="bg-neutral-900/30 rounded-2xl p-8 border border-neutral-800">
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                        <BookOpen className="text-yellow-500 w-6 h-6" />
                        Course Curriculum
                    </h2>
                    <div className="space-y-4">
                        {syllabus.map((module, i) => (
                            <div key={i} className="border border-neutral-800 rounded-xl overflow-hidden bg-black/50">
                                <button 
                                    onClick={() => setOpenModuleIndex(openModuleIndex === i ? null : i)}
                                    className="w-full flex items-center justify-between p-5 text-left hover:bg-neutral-900 transition-colors"
                                >
                                    <span className="font-semibold text-white text-lg">{module.title}</span>
                                    {openModuleIndex === i ? <ChevronUp className="w-5 h-5 text-yellow-500" /> : <ChevronDown className="w-5 h-5 text-neutral-500" />}
                                </button>
                                {openModuleIndex === i && (
                                    <div className="p-5 pt-0 bg-neutral-900/20 border-t border-neutral-800/50">
                                        <ul className="space-y-3 mt-4">
                                            {module.items.map((item, j) => (
                                                <li key={j} className="flex items-center gap-3 text-neutral-400">
                                                    <div className="w-1 h-1 bg-neutral-600 rounded-full" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Career Services */}
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-neutral-900 to-black p-8 rounded-2xl border border-neutral-800">
                        <Briefcase className="w-8 h-8 text-yellow-500 mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">Career Opportunities</h3>
                        <p className="text-neutral-400 mb-4 text-sm">Roles you can target after this course:</p>
                         <div className="flex flex-wrap gap-2">
                            {career.roles.map((role, i) => (
                                <span key={i} className="text-xs bg-neutral-800 text-neutral-300 px-2 py-1 rounded">{role}</span>
                            ))}
                        </div>
                    </div>
                    <div className="bg-gradient-to-br from-neutral-900 to-black p-8 rounded-2xl border border-neutral-800">
                        <GraduationCap className="w-8 h-8 text-yellow-500 mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">Average Salary Hike</h3>
                        <p className="text-neutral-400 mb-2 text-sm">Expected salary range for these roles:</p>
                        <p className="text-3xl font-bold text-white">{career.salary}</p>
                    </div>
                </div>

                {/* Certification */}
                <div className="bg-neutral-900/50 rounded-2xl p-8 border border-neutral-800 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-600/5 rounded-full blur-3xl -z-10 group-hover:bg-yellow-600/10 transition-colors" />
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                        <Award className="text-yellow-500 w-6 h-6" />
                        Professional Certifications
                    </h2>
                    
                    <div className="space-y-6">
                        <p className="text-neutral-300 leading-relaxed">
                            Upon successful completion, you will receive industry-recognized certificates. These credentials validate your skills and can be shared directly on LinkedIn.
                        </p>

                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="relative aspect-[4/3] bg-neutral-800 rounded-lg overflow-hidden border border-neutral-700 shadow-2xl group/cert">
                                <Image 
                                    src="/Program sample COMPLETION  PE.3.pdf (1).pdf.png"
                                    alt="Program Completion Certificate"
                                    fill
                                    className="object-contain hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="relative aspect-[4/3] bg-neutral-800 rounded-lg overflow-hidden border border-neutral-700 shadow-2xl group/cert">
                                <Image 
                                    src="/PROJECT COMPLETION  PE.3.pdf (1).png"
                                    alt="Project Completion Certificate"
                                    fill
                                    className="object-contain hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="relative aspect-[4/3] bg-neutral-800 rounded-lg overflow-hidden border border-neutral-700 shadow-2xl group/cert">
                                <Image 
                                    src="/INTERNHIP COMPLETION SAMPLE PE.3.pdf.png"
                                    alt="Internship Completion Certificate"
                                    fill
                                    className="object-contain hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>

                        <ul className="grid sm:grid-cols-3 gap-4 text-sm text-neutral-400 pt-4">
                            <li className="flex items-center gap-2 p-2 rounded-lg bg-neutral-900/50"><CheckCircle className="w-4 h-4 text-green-500" /> Share on LinkedIn</li>
                            <li className="flex items-center gap-2 p-2 rounded-lg bg-neutral-900/50"><CheckCircle className="w-4 h-4 text-green-500" /> Unique Verification ID</li>
                            <li className="flex items-center gap-2 p-2 rounded-lg bg-neutral-900/50"><CheckCircle className="w-4 h-4 text-green-500" /> Lifetime Validity</li>
                        </ul>
                    </div>
                </div>

                {/* Reviews */}
                {course.reviews && course.reviews.length > 0 && (
                     <div className="bg-neutral-900/30 rounded-2xl p-8 border border-neutral-800">
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <MessageSquare className="text-yellow-500 w-6 h-6" />
                            Student Success Stories
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {course.reviews.map((review, i) => (
                                <div key={i} className="bg-black p-6 rounded-xl border border-neutral-800">
                                    <div className="flex gap-1 mb-3">
                                        {[...Array(5)].map((_, j) => (
                                            <Star key={j} className={`w-4 h-4 ${j < Math.floor(review.rating) ? 'text-yellow-500 fill-yellow-500' : 'text-neutral-700'}`} />
                                        ))}
                                    </div>
                                    <p className="text-neutral-300 mb-4 text-sm italic">"{review.comment}"</p>
                                    <p className="text-white font-semibold text-sm">- {review.user}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Right Column: Enrollment Form (Sticky) */}
            <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                    <div className="bg-neutral-900/80 backdrop-blur-xl border border-yellow-600/30 rounded-2xl p-6 shadow-2xl shadow-black/50">
                        <div className="mb-6 border-b border-neutral-800 pb-6">
                            <p className="text-neutral-400 text-sm mb-1 uppercase tracking-wider font-medium">Total Program Fee</p>
                            <div className="flex items-end gap-3">
                                <span className="text-5xl font-bold text-white tracking-tight">₹{course.price.toLocaleString()}</span>
                                <span className="text-neutral-500 mb-1.5 line-through text-lg">₹{(course.price * 1.5).toLocaleString()}</span>
                            </div>
                            <div className="mt-3 flex items-center gap-2 text-yellow-500 bg-yellow-900/20 px-3 py-1.5 rounded-lg w-fit text-sm font-medium">
                                <Clock className="w-3.5 h-3.5" />
                                Limited time offer
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-neutral-300 mb-1.5 ml-1">Full Name</label>
                                <input 
                                    required
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    type="text" 
                                    className="w-full bg-black border border-neutral-800 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-yellow-600/50 focus:ring-1 focus:ring-yellow-600/50 transition-all"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-neutral-300 mb-1.5 ml-1">Email Address</label>
                                <input 
                                    required
                                    name="email"
                                    type="email" 
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full bg-black border border-neutral-800 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-yellow-600/50 focus:ring-1 focus:ring-yellow-600/50 transition-all"
                                    placeholder="your email"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-neutral-300 mb-1.5 ml-1">Phone Number</label>
                                <input 
                                    required
                                    name="phone"
                                    type="tel" 
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="w-full bg-black border border-neutral-800 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-yellow-600/50 focus:ring-1 focus:ring-yellow-600/50 transition-all"
                                    placeholder="+91 9876 43210"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-neutral-300 mb-1.5 ml-1">Current Status</label>
                                <div className="relative">
                                    <select 
                                        name="experience"
                                        value={formData.experience}
                                        onChange={handleInputChange}
                                        className="w-full bg-black border border-neutral-800 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-yellow-600/50 focus:ring-1 focus:ring-yellow-600/50 transition-all appearance-none cursor-pointer"
                                    >
                                        <option value="student">Student</option>
                                        <option value="professional">Working Professional</option>
                                        <option value="freelancer">Freelancer</option>
                                        <option value="other">Other</option>
                                    </select>
                                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none w-5 h-5" />
                                </div>
                            </div>

                            <Button 
                                disabled={isSubmit}
                                className="w-full bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-500 hover:to-yellow-600 text-white font-bold py-6 text-lg mt-2 shadow-lg shadow-yellow-900/20 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
                            >
                                {isSubmit ? 'Processing...' : 'Complete Enrollment'}
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>

                            <p className="text-xs text-neutral-500 text-center mt-4 px-4 leading-relaxed">
                                By enrolling, you agree to our Terms of Service. A dedicated mentor will be assigned to you within 24 hours.
                            </p>
                        </form>
                    </div>

                    {/* Support Box */}
                    <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6 text-center">
                        <p className="text-white font-medium mb-1">Need help deciding?</p>
                        <p className="text-sm text-neutral-400 mb-4">Talk to our career counselor for free.</p>
                        <Button variant="outline" className="w-full border-neutral-700 text-neutral-300 hover:text-white hover:bg-neutral-800">
                            Request Callback
                        </Button>
                    </div>
                </div>
            </div>

        </div>
      </section>

      <Footer />
    </div>
  )
}
