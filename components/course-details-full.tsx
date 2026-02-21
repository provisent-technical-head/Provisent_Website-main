'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, Star, Users, Clock, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'
import EnrollmentModal from './enrollment-modal'

interface CoursePlan {
  name: string
  price: string
  description: string
  features: string[]
}

interface SyllabusModule {
  title: string
  topics: string[]
}

interface Review {
  id: string
  name: string
  rating: number
  comment: string
  date: string
}

interface CourseDetailsProps {
  courseTitle: string
  instructor: string
  rating: number
  reviews: number
  students: number
  duration: string
  syllabus: SyllabusModule[]
  plans: CoursePlan[]
  reviews_list: Review[]
  description: string
}

export default function CourseDetailsFull({
  courseTitle,
  instructor,
  rating,
  reviews,
  students,
  duration,
  syllabus,
  plans,
  reviews_list,
  description,
}: CourseDetailsProps) {
  const [expandedModule, setExpandedModule] = useState<number | null>(0)
  const [isEnrollOpen, setIsEnrollOpen] = useState(false)
  const [reviewName, setReviewName] = useState('')
  const [reviewRating, setReviewRating] = useState(5)
  const [reviewComment, setReviewComment] = useState('')

  const handleSubmitReview = () => {
    if (reviewName && reviewComment) {
      console.log('Review submitted:', { reviewName, reviewRating, reviewComment })
      setReviewName('')
      setReviewComment('')
      setReviewRating(5)
    }
  }

  return (
    <div className="bg-gradient-to-b from-slate-950 to-slate-900 min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-slate-50 mb-4">{courseTitle}</h1>
          <p className="text-xl text-slate-300 mb-8">{description}</p>

          {/* Course Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="flex items-center gap-3 mb-2">
                <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                <span className="text-2xl font-bold text-slate-50">{rating}</span>
              </div>
              <p className="text-slate-400">({reviews} reviews)</p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="flex items-center gap-3 mb-2">
                <Users className="w-5 h-5 text-amber-500" />
                <span className="text-2xl font-bold text-slate-50">{students.toLocaleString()}</span>
              </div>
              <p className="text-slate-400">Students</p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="flex items-center gap-3 mb-2">
                <Clock className="w-5 h-5 text-amber-500" />
                <span className="text-2xl font-bold text-slate-50">{duration}</span>
              </div>
              <p className="text-slate-400">Duration</p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="flex items-center gap-3 mb-2">
                <Award className="w-5 h-5 text-amber-500" />
                <span className="text-xl font-bold text-slate-50">Certificate</span>
              </div>
              <p className="text-slate-400">On Completion</p>
            </div>
          </div>

          {/* Instructor */}
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 mb-8">
            <h3 className="text-lg font-semibold text-slate-50 mb-2">Instructor</h3>
            <p className="text-slate-300">{instructor}</p>
          </div>
        </div>

        {/* Enrollment Section */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Syllabus */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-50 mb-6">Syllabus</h2>
              <div className="space-y-3">
                {syllabus.map((module, index) => (
                  <div key={index} className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden">
                    <button
                      onClick={() => setExpandedModule(expandedModule === index ? null : index)}
                      className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-700 transition-colors"
                    >
                      <span className="text-lg font-semibold text-slate-50">{module.title}</span>
                      {expandedModule === index ? (
                        <ChevronUp className="w-5 h-5 text-amber-500" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-amber-500" />
                      )}
                    </button>
                    {expandedModule === index && (
                      <div className="px-6 py-4 bg-slate-900 border-t border-slate-700">
                        <ul className="space-y-2">
                          {module.topics.map((topic, idx) => (
                            <li key={idx} className="flex items-center gap-3 text-slate-300">
                              <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-50 mb-6">Student Reviews</h2>

              {/* Submit Review Form */}
              <div className="bg-slate-800 rounded-lg border border-slate-700 p-8 mb-8">
                <h3 className="text-xl font-semibold text-slate-50 mb-6">Share Your Experience</h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={reviewName}
                    onChange={(e) => setReviewName(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 text-slate-50 placeholder-slate-500 px-4 py-3 rounded-lg focus:outline-none focus:border-amber-500"
                  />
                  <textarea
                    placeholder="Share your experience..."
                    value={reviewComment}
                    onChange={(e) => setReviewComment(e.target.value)}
                    rows={4}
                    className="w-full bg-slate-900 border border-slate-700 text-slate-50 placeholder-slate-500 px-4 py-3 rounded-lg focus:outline-none focus:border-amber-500 resize-none"
                  ></textarea>
                  <div className="flex items-center gap-4">
                    <span className="text-slate-300">Your Rating:</span>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          onClick={() => setReviewRating(star)}
                          className="focus:outline-none transition-transform hover:scale-110"
                        >
                          <Star
                            className={`w-6 h-6 ${
                              star <= reviewRating
                                ? 'fill-amber-500 text-amber-500'
                                : 'text-slate-600'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                  <Button
                    onClick={handleSubmitReview}
                    className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-semibold py-3"
                  >
                    Submit Review
                  </Button>
                </div>
              </div>

              {/* Display Reviews */}
              <div className="space-y-4">
                {reviews_list.map((review) => (
                  <div key={review.id} className="bg-slate-800 rounded-lg border border-slate-700 p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-slate-50">{review.name}</h4>
                      <span className="text-sm text-slate-400">{review.date}</span>
                    </div>
                    <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating ? 'fill-amber-500 text-amber-500' : 'text-slate-600'
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-slate-300">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pricing Sidebar */}
          <div className="space-y-4">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-lg border p-8 ${
                  index === 1
                    ? 'bg-gradient-to-b from-amber-600/20 to-amber-600/5 border-amber-500'
                    : 'bg-slate-800 border-slate-700'
                }`}
              >
                <h3 className="text-xl font-bold text-slate-50 mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-amber-500">{plan.price}</span>
                </div>
                <p className="text-sm text-slate-300 mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-slate-300 text-sm">
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() => setIsEnrollOpen(true)}
                  className={`w-full font-semibold py-3 ${
                    index === 1
                      ? 'bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white'
                      : 'bg-slate-700 hover:bg-slate-600 text-slate-50'
                  }`}
                >
                  Enroll Now
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <EnrollmentModal isOpen={isEnrollOpen} onClose={() => setIsEnrollOpen(false)} />
    </div>
  )
}
