'use client'

import { Button } from "@/components/ui/button"

import { useEffect, useState } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Calendar, User, ArrowRight, Search } from 'lucide-react'

export default function BlogPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const articles = [
    {
      id: 1,
      title: 'The Future of Web Development: Trends to Watch in 2024',
      excerpt: 'Explore the latest trends shaping web development, from AI integration to WebAssembly adoption.',
      author: 'Sarah Chen',
      date: 'January 15, 2024',
      category: 'Technology',
      readTime: '8 min read',
      featured: true,
      image: '🚀',
    },
    {
      id: 2,
      title: 'How to Transition from Bootcamp to Your First Tech Job',
      excerpt: 'A comprehensive guide on landing your first role after completing a coding bootcamp.',
      author: 'Michael Brown',
      date: 'January 12, 2024',
      category: 'Career',
      readTime: '12 min read',
      featured: true,
      image: '💼',
    },
    {
      id: 3,
      title: 'Mastering React Hooks: Advanced Patterns and Best Practices',
      excerpt: 'Deep dive into React Hooks and learn advanced patterns used by top companies.',
      author: 'Emily Rodriguez',
      date: 'January 10, 2024',
      category: 'Technology',
      readTime: '10 min read',
      featured: false,
      image: '⚛️',
    },
    {
      id: 4,
      title: 'The Business Case for Continuous Learning',
      excerpt: 'Why investing in employee education leads to better business outcomes.',
      author: 'David Lee',
      date: 'January 8, 2024',
      category: 'Business',
      readTime: '6 min read',
      featured: false,
      image: '📈',
    },
    {
      id: 5,
      title: 'UX Design Principles That Every Developer Should Know',
      excerpt: 'Essential UX concepts for developers to create better user experiences.',
      author: 'Jessica Wong',
      date: 'January 5, 2024',
      category: 'Design',
      readTime: '9 min read',
      featured: false,
      image: '🎨',
    },
    {
      id: 6,
      title: 'Data Science Career Path: From Beginner to Expert',
      excerpt: 'A roadmap for building a successful career in data science and machine learning.',
      author: 'Alex Kumar',
      date: 'January 2, 2024',
      category: 'Career',
      readTime: '11 min read',
      featured: false,
      image: '📊',
    },
  ]

  const filteredArticles = searchQuery
    ? articles.filter(
        (article) =>
          article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          article.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : articles

  const featuredArticles = filteredArticles.filter((a) => a.featured)
  const regularArticles = filteredArticles.filter((a) => !a.featured)

  return (
    <main className="bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-black via-black-950 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Insights & Resources</h1>
          <p className="text-xl text-black-300 max-w-2xl mb-8">Stay updated with the latest industry trends, tips, and expert insights from our blog.</p>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-8 bg-black-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4 items-center">
            <div className="flex-1 flex items-center gap-2 px-4 py-3 rounded-lg border border-black-700 bg-black-800">
              <Search className="w-5 h-5 text-black-500" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full outline-none text-white placeholder-black-500 bg-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 bg-black-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-12">Featured Articles</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {articles.filter((a) => a.featured).map((article) => (
              <article
                key={article.id}
                className="group bg-black-900 rounded-xl border border-black-700 overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="h-1 bg-gradient-to-r from-yellow-600 via-yellow-600/70 to-transparent"></div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-4xl">{article.image}</span>
                    <div>
                      <p className="text-sm font-bold bg-yellow-600/10 text-yellow-600 px-3 py-1.5 rounded-full uppercase w-fit">
                        {article.category}
                      </p>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-600 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-black-400 mb-4 line-clamp-3">{article.excerpt}</p>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-black-400 mb-6">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {article.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {article.date}
                    </div>
                    <span>{article.readTime}</span>
                  </div>

                  <Button className="bg-yellow-600 hover:bg-yellow-700 text-white">
                    Read Article <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Featured Articles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredArticles.map((article, index) => (
                <div
                  key={article.id}
                  className={`group cursor-pointer transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className="relative rounded-2xl overflow-hidden border border-border hover:border-accent hover:shadow-2xl transition-all duration-500 bg-white">
                    {/* Image */}
                    <div className="relative h-64 bg-gradient-to-br from-accent/20 to-primary/10 flex items-center justify-center overflow-hidden">
                      <div className="text-8xl group-hover:scale-110 transition-transform duration-500">{article.image}</div>
                      <div className="absolute top-4 right-4 bg-accent text-primary px-3 py-1 rounded-full text-xs font-bold">
                        {article.category}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 line-clamp-2">{article.excerpt}</p>

                      {/* Meta */}
                      <div className="space-y-4 pt-4 border-t border-border">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <User className="w-4 h-4" />
                            {article.author}
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {article.date}
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-accent">{article.readTime}</span>
                          <ArrowRight className="w-5 h-5 text-accent group-hover:translate-x-2 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Articles */}
      <section className={`py-20 px-4 ${featuredArticles.length > 0 ? 'bg-primary/5' : ''}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">{searchQuery ? 'Search Results' : 'Latest Articles'}</h2>

          {regularArticles.length === 0 && searchQuery ? (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No articles found matching your search.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {regularArticles.map((article, index) => (
                <div
                  key={article.id}
                  className={`group p-6 bg-white rounded-xl border border-border hover:border-accent hover:shadow-lg transition-all duration-500 cursor-pointer flex gap-6 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{
                    transitionDelay: `${
                      featuredArticles.length > 0
                        ? 500 + index * 100
                        : 300 + index * 100
                    }ms`,
                  }}
                >
                  {/* Image */}
                  <div className="hidden md:flex w-32 h-32 flex-shrink-0 rounded-lg bg-gradient-to-br from-accent/20 to-primary/10 items-center justify-center text-5xl group-hover:scale-110 transition-transform">
                    {article.image}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="text-xl font-bold group-hover:text-accent transition-colors flex-1 line-clamp-2">
                        {article.title}
                      </h3>
                      <ArrowRight className="w-5 h-5 text-accent flex-shrink-0 group-hover:translate-x-2 transition-transform" />
                    </div>

                    <p className="text-muted-foreground mb-4 line-clamp-2">{article.excerpt}</p>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground flex-wrap">
                      <span className="px-2 py-1 bg-accent/10 text-accent rounded text-xs font-semibold">
                        {article.category}
                      </span>
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {article.author}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {article.date}
                      </div>
                      <span className="ml-auto text-xs font-semibold text-accent">{article.readTime}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
