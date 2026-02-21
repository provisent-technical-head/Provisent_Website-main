'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Star, Users, Clock, BookOpen, Award, CheckCircle, Play } from 'lucide-react'

export default function CourseDetailPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const course = {
    id: 1,
    title: 'Web Development Masterclass: From Zero to Expert',
    instructor: 'John Smith',
    category: 'Programming',
    rating: 4.9,
    reviews: 320,
    students: 2540,
    duration: '12 weeks',
    level: 'Beginner to Advanced',
    price: '₹15,000',
    description:
      'Master the art of web development with this comprehensive course. Learn HTML, CSS, JavaScript, React, and more. Build real-world projects and become a professional web developer.',
    thumbnail: '🌐',
  }

  const modules = [
    { title: 'Introduction to Web Development', lessons: 5 },
    { title: 'HTML & CSS Fundamentals', lessons: 8 },
    { title: 'JavaScript Essentials', lessons: 12 },
    { title: 'React.js Deep Dive', lessons: 15 },
    { title: 'Building Real Projects', lessons: 10 },
    { title: 'Deployment & Best Practices', lessons: 6 },
  ]

  const learningPoints = [
    'Master HTML5, CSS3, and JavaScript fundamentals',
    'Build dynamic web applications with React',
    'Learn responsive design principles',
    'Version control with Git and GitHub',
    'Deploy applications to production',
    'Best practices and industry standards',
    'Problem-solving and debugging techniques',
    'Career preparation and interview tips',
  ]

  return (
    <main className="bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary/98 to-primary/95 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="mb-4">
                <span className="inline-block bg-accent/20 text-accent px-4 py-1.5 rounded-full text-sm font-bold uppercase">
                  {course.category}
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">{course.title}</h1>
              <p className="text-xl text-white/80 mb-6">{course.description}</p>

              {/* Stats */}
              <div className="flex gap-8 mb-8 py-6 border-t border-b border-white/20">
                <div>
                  <p className="text-4xl font-bold text-accent">{course.rating}</p>
                  <p className="text-white/70">Rating ({course.reviews} reviews)</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-accent">{(course.students / 1000).toFixed(1)}K</p>
                  <p className="text-white/70">Students Enrolled</p>
                </div>
              </div>

              <Button className="bg-accent text-primary hover:bg-accent/90 px-8 py-6 text-lg font-semibold">
                Enroll Now - {course.price}
              </Button>
            </div>

            {/* Visual */}
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl blur-2xl"></div>
                <div className="relative bg-gradient-to-br from-accent/30 to-accent/10 rounded-3xl p-12 border border-white/10 flex items-center justify-center aspect-square">
                  <div className="text-9xl">{course.thumbnail}</div>
                  <div className="absolute bottom-8 right-8 bg-accent text-primary p-3 rounded-full">
                    <Play className="w-6 h-6 fill-current" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="md:col-span-2 space-y-12">
              {/* Learning Outcomes */}
              <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h2 className="text-3xl font-bold mb-6">What You'll Learn</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {learningPoints.map((point, idx) => (
                    <div key={idx} className="flex gap-3 items-start">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <p className="text-foreground">{point}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Course Structure */}
              <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h2 className="text-3xl font-bold mb-6">Course Structure</h2>
                <div className="space-y-3">
                  {modules.map((module, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-white border border-border rounded-lg hover:border-accent transition-all duration-300 flex items-center justify-between cursor-pointer group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold group-hover:bg-accent group-hover:text-white transition-all">
                          {idx + 1}
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">{module.title}</p>
                          <p className="text-sm text-muted-foreground">{module.lessons} lessons</p>
                        </div>
                      </div>
                      <Play className="w-5 h-5 text-muted-foreground group-hover:text-accent" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="sticky top-24 space-y-6">
                {/* Instructor Card */}
                <div className="p-6 bg-white rounded-xl border border-border">
                  <h3 className="font-bold text-lg mb-4">Instructor</h3>
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center text-white font-bold text-lg">
                      {course.instructor.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{course.instructor}</p>
                      <p className="text-sm text-muted-foreground">Expert Instructor</p>
                      <p className="text-xs text-accent mt-2 cursor-pointer hover:underline">View Profile →</p>
                    </div>
                  </div>
                </div>

                {/* Course Info */}
                <div className="p-6 bg-white rounded-xl border border-border space-y-4">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-accent" />
                    <div>
                      <p className="text-sm text-muted-foreground">Duration</p>
                      <p className="font-semibold">{course.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 border-t border-border pt-4">
                    <Award className="w-5 h-5 text-accent" />
                    <div>
                      <p className="text-sm text-muted-foreground">Level</p>
                      <p className="font-semibold">{course.level}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 border-t border-border pt-4">
                    <BookOpen className="w-5 h-5 text-accent" />
                    <div>
                      <p className="text-sm text-muted-foreground">Modules</p>
                      <p className="font-semibold">{modules.length} Total</p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <Button className="w-full bg-gradient-to-r from-accent to-accent/80 text-white hover:shadow-lg h-12 font-semibold text-base">
                  Enroll Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
