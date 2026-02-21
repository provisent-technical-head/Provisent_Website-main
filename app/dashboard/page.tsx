'use client'

import { useEffect, useState } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { BarChart3, Clock, BookOpen, Award, Settings, LogOut, Download, Share2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function DashboardPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const enrolledCourses = [
    {
      title: 'Web Development Masterclass',
      progress: 65,
      instructor: 'John Smith',
      timeSpent: '24 hours',
      nextLesson: 'React Basics',
      thumbnail: '🌐',
    },
    {
      title: 'React Advanced Patterns',
      progress: 45,
      instructor: 'Sarah Johnson',
      timeSpent: '18 hours',
      nextLesson: 'Custom Hooks',
      thumbnail: '⚛️',
    },
    {
      title: 'UI/UX Design Fundamentals',
      progress: 90,
      instructor: 'Emma Davis',
      timeSpent: '32 hours',
      nextLesson: 'Final Project',
      thumbnail: '🎨',
    },
  ]

  const certificates = [
    { title: 'JavaScript Essentials', date: 'Dec 15, 2023', id: 'JS-2023-001' },
    { title: 'HTML & CSS Mastery', date: 'Nov 20, 2023', id: 'HTML-2023-002' },
  ]

  const stats = [
    { label: 'Courses Enrolled', value: '8', icon: BookOpen },
    { label: 'Hours Learned', value: '156', icon: Clock },
    { label: 'Certificates Earned', value: '2', icon: Award },
    { label: 'Current Streak', value: '15 days', icon: BarChart3 },
  ]

  return (
    <main className="bg-background text-foreground">
      <Navigation />

      {/* Header Section */}
      <section className="bg-gradient-to-r from-primary via-primary/98 to-primary/95 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Welcome back, Alex!</h1>
              <p className="text-white/80">You're on a 15-day learning streak. Keep it up!</p>
            </div>
            <div className={`hidden md:flex gap-3 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <button className="p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                <Settings className="w-6 h-6" />
              </button>
              <button className="p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                <LogOut className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-12 px-4 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`p-6 bg-white rounded-lg border border-border hover:border-accent transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <stat.icon className="w-6 h-6 text-accent mb-3" />
                <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
          {/* Enrolled Courses */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-8">My Courses</h2>
            <div className="space-y-4">
              {enrolledCourses.map((course, index) => (
                <div
                  key={index}
                  className={`group p-6 bg-white rounded-xl border border-border hover:border-accent hover:shadow-lg transition-all duration-500 cursor-pointer ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-accent/20 to-primary/10 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform flex-shrink-0">
                      {course.thumbnail}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold group-hover:text-accent transition-colors">{course.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">by {course.instructor}</p>
                      <p className="text-xs text-accent font-semibold">Next: {course.nextLesson}</p>
                    </div>
                    <Button variant="outline" className="flex-shrink-0 bg-transparent">
                      Continue
                    </Button>
                  </div>

                  {/* Progress Bar */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-xs text-muted-foreground">Progress</p>
                      <p className="text-sm font-semibold text-accent">{course.progress}%</p>
                    </div>
                    <div className="w-full h-2 bg-border rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-accent to-accent/60 rounded-full transition-all duration-500"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">{course.timeSpent} spent</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* Certificates */}
            <div className="sticky top-24 space-y-6">
              <div className="p-6 bg-white rounded-xl border border-border">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-accent" />
                  Certificates
                </h3>
                <div className="space-y-3">
                  {certificates.map((cert, idx) => (
                    <div key={idx} className="p-3 bg-gradient-to-r from-accent/10 to-transparent rounded-lg hover:from-accent/20 transition-all cursor-pointer group">
                      <p className="font-semibold text-sm group-hover:text-accent transition-colors">{cert.title}</p>
                      <div className="flex items-center justify-between mt-2">
                        <p className="text-xs text-muted-foreground">{cert.date}</p>
                        <Download className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="p-6 bg-gradient-to-br from-accent/10 to-primary/5 rounded-xl border border-accent/20">
                <h3 className="font-bold mb-4">Learning Tips</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>• Schedule regular study sessions</p>
                  <p>• Take notes while learning</p>
                  <p>• Join community forums</p>
                  <p>• Practice with projects</p>
                </div>
              </div>

              {/* Share Achievement */}
              <Button className="w-full bg-gradient-to-r from-accent to-accent/80 text-white hover:shadow-lg h-11 font-semibold flex items-center justify-center gap-2">
                <Share2 className="w-4 h-4" />
                Share Achievement
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Courses */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Recommended For You</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Advanced Node.js', instructor: 'Alex Martinez', level: 'Advanced' },
              { title: 'TypeScript Mastery', instructor: 'Sarah Johnson', level: 'Intermediate' },
              { title: 'Web Performance', instructor: 'Tom Wilson', level: 'Advanced' },
            ].map((course, index) => (
              <div
                key={index}
                className={`p-6 bg-white rounded-xl border border-border hover:border-accent hover:shadow-lg transition-all duration-500 cursor-pointer group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${600 + index * 100}ms` }}
              >
                <p className="text-sm text-accent font-bold mb-2">{course.level}</p>
                <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors">{course.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">by {course.instructor}</p>
                <Button variant="outline" className="w-full group-hover:border-accent group-hover:text-accent bg-transparent">
                  Explore
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
