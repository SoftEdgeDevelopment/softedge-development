"use client"
import {
  Calendar,
  Clock,
  User,
  Search,
  Filter,
  ArrowRight,
  BookOpen,
  Code,
  Palette,
  Shield,
  Cpu,
  Bot,
  Zap,
  Building,
  FileText,
  BarChart3,
  ChevronLeft,
  ChevronRight,
  Award,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { useState, useCallback, memo, useMemo } from "react"
import { Input } from "@/components/ui/input"
import Link from "next/link"

// Category icons mapping
const categoryIcons = {
  "Web Development": Code,
  "UI/UX Design": Palette,
  "Quality Assurance": Shield,
  "Software Engineering": Cpu,
  AI: Bot,
  Automation: Zap,
  "Startup & Business Growth": Building,
  "Case Studies": FileText,
  "Tech Trends & Insights": BarChart3,
}

const blogPosts = [
  {
    id: 1,
    title: "Building Scalable React Applications: Best Practices for 2024",
    excerpt:
      "Discover the latest patterns and techniques for creating maintainable, performant React applications that scale with your business needs.",
    category: "Web Development",
    author: "Alex Chen",
    date: "2024-01-15",
    readTime: "8 min read",
    image: "/assets/project-01.png",
    featured: true,
  },
  {
    id: 2,
    title: "Advanced Next.js Performance Optimization Techniques",
    excerpt:
      "Learn how to optimize your Next.js applications for maximum performance using the latest features and best practices.",
    category: "Web Development",
    author: "Sarah Rodriguez",
    date: "2024-01-14",
    readTime: "10 min read",
    image: "/assets/project-02.png",
    featured: false,
  },
  {
    id: 3,
    title: "The Psychology of User Interface Design: Creating Intuitive Experiences",
    excerpt:
      "Explore how cognitive psychology principles can guide your UI design decisions to create more intuitive and user-friendly interfaces.",
    category: "UI/UX Design",
    author: "Maya Patel",
    date: "2024-01-12",
    readTime: "6 min read",
    image: "/assets/project-09.png",
    featured: false,
  },
  {
    id: 4,
    title: "Design Systems That Scale: Building Consistent User Experiences",
    excerpt:
      "How to create and maintain design systems that grow with your product and ensure consistency across all touchpoints.",
    category: "UI/UX Design",
    author: "Jordan Kim",
    date: "2024-01-11",
    readTime: "9 min read",
    image: "/assets/project-10.png",
    featured: false,
  },
  {
    id: 5,
    title: "Automated Testing Strategies for Modern Web Applications",
    excerpt:
      "Learn how to implement comprehensive testing strategies that catch bugs early and ensure your applications are reliable and robust.",
    category: "Quality Assurance",
    author: "Marcus Johnson",
    date: "2024-01-10",
    readTime: "10 min read",
    image: "/assets/project-05.png",
    featured: false,
  },
  {
    id: 6,
    title: "End-to-End Testing with Cypress: A Complete Guide",
    excerpt:
      "Master end-to-end testing with Cypress to ensure your web applications work flawlessly from the user's perspective.",
    category: "Quality Assurance",
    author: "Lisa Zhang",
    date: "2024-01-09",
    readTime: "12 min read",
    image: "/assets/project-06.png",
    featured: false,
  },
  {
    id: 7,
    title: "AI-Powered Development: How Machine Learning is Transforming Software Engineering",
    excerpt:
      "Discover how artificial intelligence is revolutionizing the software development process, from code generation to bug detection.",
    category: "AI",
    author: "David Park",
    date: "2024-01-08",
    readTime: "12 min read",
    image: "/assets/project-07.png",
    featured: true,
  },
  {
    id: 8,
    title: "Building Intelligent Chatbots with Natural Language Processing",
    excerpt:
      "Learn how to create sophisticated chatbots that understand and respond to human language naturally using modern NLP techniques.",
    category: "AI",
    author: "Emily Watson",
    date: "2024-01-07",
    readTime: "11 min read",
    image: "/assets/project-08.png",
    featured: false,
  },
  {
    id: 9,
    title: "Microservices Architecture: Design Patterns and Best Practices",
    excerpt:
      "Explore proven patterns for building scalable microservices architectures that can handle enterprise-level complexity.",
    category: "Software Engineering",
    author: "Ryan Thompson",
    date: "2024-01-06",
    readTime: "14 min read",
    image: "/assets/project-03.png",
    featured: false,
  },
  {
    id: 10,
    title: "From Startup to Scale: Lessons Learned Building a Tech Company",
    excerpt:
      "Real insights and practical advice from our journey building SoftEdge Development from a startup idea to a thriving business.",
    category: "Startup & Business Growth",
    author: "Michael Foster",
    date: "2024-01-05",
    readTime: "15 min read",
    image: "/assets/project-04.png",
    featured: false,
  },
  {
    id: 11,
    title: "DevOps Automation: Streamlining Your Development Pipeline",
    excerpt:
      "Implement automated workflows that reduce manual work and increase deployment frequency while maintaining quality.",
    category: "Automation",
    author: "Anna Kowalski",
    date: "2024-01-04",
    readTime: "8 min read",
    image: "/assets/project-11.png",
    featured: false,
  },
  {
    id: 12,
    title: "Case Study: Transforming E-commerce with Modern Web Technologies",
    excerpt:
      "How we helped a traditional retailer increase online sales by 300% through strategic technology implementation and UX optimization.",
    category: "Case Studies",
    author: "Carlos Martinez",
    date: "2024-01-03",
    readTime: "7 min read",
    image: "/assets/project-12.png",
    featured: false,
  },
  {
    id: 13,
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt:
      "Stay ahead of the curve with insights into emerging technologies and development practices shaping the future of web development.",
    category: "Tech Trends & Insights",
    author: "Sophie Anderson",
    date: "2024-01-02",
    readTime: "9 min read",
    image: "/assets/project-01.png",
    featured: false,
  },
  {
    id: 14,
    title: "Clean Code Principles for JavaScript Developers",
    excerpt:
      "Master the art of writing clean, maintainable JavaScript code that your future self and teammates will thank you for.",
    category: "Software Engineering",
    author: "James Wilson",
    date: "2024-01-01",
    readTime: "10 min read",
    image: "/assets/project-02.png",
    featured: false,
  },
  {
    id: 15,
    title: "Mobile-First Design: Creating Responsive Experiences",
    excerpt:
      "Learn how to design and develop mobile-first applications that provide exceptional user experiences across all devices.",
    category: "UI/UX Design",
    author: "Priya Sharma",
    date: "2023-12-30",
    readTime: "8 min read",
    image: "/assets/project-11.png",
    featured: false,
  },
  {
    id: 16,
    title: "Blockchain Technology: Beyond Cryptocurrency Applications",
    excerpt:
      "Explore practical applications of blockchain technology in various industries and how it's reshaping digital trust.",
    category: "Tech Trends & Insights",
    author: "Kevin Lee",
    date: "2023-12-29",
    readTime: "13 min read",
    image: "/assets/project-12.png",
    featured: false,
  },
]

const categories = [
  "All",
  "Web Development",
  "Quality Assurance",
  "UI/UX Design",
  "Software Engineering",
  "AI",
  "Automation",
  "Startup & Business Growth",
  "Case Studies",
  "Tech Trends & Insights",
]

const BlogCard = memo(({ post }: { post: any }) => {
  const IconComponent = categoryIcons[post.category as keyof typeof categoryIcons] || BookOpen

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Web Development":
        return "badge-web-dev"
      case "Quality Assurance":
        return "badge-qa-automation"
      case "UI/UX Design":
        return "badge-ux-design"
      default:
        return "bg-gray-500/20 text-gray-200"
    }
  }

  const getCategoryGradient = (category: string) => {
    switch (category) {
      case "Web Development":
        return "from-blue-500/20 to-cyan-500/20"
      case "Quality Assurance":
        return "from-green-500/20 to-emerald-500/20"
      case "UI/UX Design":
        return "from-purple-500/20 to-pink-500/20"
      default:
        return "from-gray-500/20 to-gray-600/20"
    }
  }

  return (
    <Card className="backdrop-blur-xl bg-white/5 border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-300 group overflow-hidden h-full cursor-pointer">
      <CardContent className="p-0 h-full flex flex-col">
        {/* Project Image */}
        <div className="relative h-48 overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-br ${getCategoryGradient(post.category)}`}></div>
          <div className="absolute top-4 left-4">
            <Badge className={`${getCategoryColor(post.category)} text-xs flex items-center gap-1`}>
              <IconComponent className="w-4 h-4" />
              {post.category}
            </Badge>
          </div>
          <div className="absolute top-4 right-4">
            <Badge className="bg-black/50 text-white border-0 text-xs">{new Date(post.date).getFullYear()}</Badge>
          </div>
          {post.featured && (
            <div className="absolute bottom-4 left-4">
              <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30 text-xs">Featured</Badge>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 flex-grow flex flex-col">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-white font-bold text-lg leading-tight flex-grow">{post.title}</h3>
          </div>

          <p className="text-white/80 text-sm mb-4 leading-relaxed flex-grow">{post.excerpt}</p>

          {/* Author and Date */}
          <div className="grid grid-cols-2 gap-3 mb-4 text-xs">
            <div className="flex items-center text-white/60">
              <User className="w-3 h-3 mr-1" />
              {post.author}
            </div>
            <div className="flex items-center text-white/60">
              <Calendar className="w-3 h-3 mr-1" />
              {new Date(post.date).toLocaleDateString()}
            </div>
          </div>

          {/* Read More Button */}
          <div className="flex justify-between items-center pt-4 border-t border-white/10">
            <div className="flex items-center text-white/60 text-xs">
              <Clock className="w-3 h-3 mr-1" />
              {post.readTime}
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="text-blue-400 hover:text-white hover:bg-blue-500/20 p-0 h-auto font-medium"
            >
              Read More
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
})

BlogCard.displayName = "BlogCard"

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 9

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
      const matchesSearch =
        searchQuery === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase())

      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchQuery])

  const handleCategoryChange = useCallback((category: string) => {
    setSelectedCategory(category)
    setCurrentPage(1)
  }, [])

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    setTimeout(() => {
      const filterSection = document.querySelector('[data-section="filter-section"]')
      if (filterSection) {
        const navbarHeight = 80
        const elementPosition = filterSection.getBoundingClientRect().top + window.pageYOffset
        const offsetPosition = elementPosition - navbarHeight
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })
      }
    }, 100)
  }

  const getCategoryStats = () => {
    const stats: { [key: string]: number } = {
      All: blogPosts.length,
    }
    categories.forEach((category) => {
      if (category !== "All") {
        stats[category] = blogPosts.filter((p) => p.category === category).length
      }
    })
    return stats
  }

  const categoryStats = getCategoryStats()
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)
  const startIndex = (currentPage - 1) * postsPerPage
  const endIndex = startIndex + postsPerPage
  const currentPosts = filteredPosts.slice(startIndex, endIndex)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Enhanced Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-10 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-green-600 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-600 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-6000"></div>
        </div>
      </div>

      <div className="relative z-10">
        <Navigation />

        {/* Hero Section */}
        <section className="pt-24 pb-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 mb-6">
                <Award className="w-4 h-4 text-blue-400 mr-2" />
                <span className="text-blue-400 text-sm font-medium">SoftEdge Blog</span>
              </div>

              <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mb-6 leading-tight">
                Insights & Tutorials
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  From Our Experts
                </span>
              </h1>

              <p className="text-white/80 text-base mb-8 leading-relaxed max-w-3xl mx-auto">
                Stay updated with the latest trends in software development, quality assurance, and user experience
                design. Learn from our team of experts through comprehensive tutorials and industry insights.
              </p>

              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {/* Industry Insights Card */}
                <Card className="backdrop-blur-xl bg-gradient-to-br from-blue-500/20 to-cyan-600/20 border-blue-400/30 shadow-lg">
                  <CardContent className="px-4 py-3 text-center">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <BarChart3 className="w-4 h-4 text-blue-300" />
                      <div className="text-xl font-bold text-white">50+</div>
                    </div>
                    <div className="text-blue-200 text-xs font-medium leading-tight">Industry Insights</div>
                    <div className="text-blue-300/70 text-xs mt-1">Weekly Analysis</div>
                  </CardContent>
                </Card>

                {/* Expert Authors Card */}
                <Card className="backdrop-blur-xl bg-gradient-to-br from-blue-500/20 to-cyan-600/20 border-blue-400/30 shadow-lg">
                  <CardContent className="px-4 py-3 text-center">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <User className="w-4 h-4 text-blue-300" />
                      <div className="text-xl font-bold text-white">12+</div>
                    </div>
                    <div className="text-blue-200 text-xs font-medium leading-tight">Expert Authors</div>
                    <div className="text-blue-300/70 text-xs mt-1">Tech Specialists</div>
                  </CardContent>
                </Card>

                {/* Deep Tutorials Card */}
                <Card className="backdrop-blur-xl bg-gradient-to-br from-blue-500/20 to-cyan-600/20 border-blue-400/30 shadow-lg">
                  <CardContent className="px-4 py-3 text-center">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <BookOpen className="w-4 h-4 text-blue-300" />
                      <div className="text-xl font-bold text-white">25+</div>
                    </div>
                    <div className="text-blue-200 text-xs font-medium leading-tight">Deep Tutorials</div>
                    <div className="text-blue-300/70 text-xs mt-1">Step-by-Step</div>
                  </CardContent>
                </Card>

                {/* Monthly Readers Card */}
                <Card className="backdrop-blur-xl bg-gradient-to-br from-blue-500/20 to-cyan-600/20 border-blue-400/30 shadow-lg">
                  <CardContent className="px-4 py-3 text-center">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <Award className="w-4 h-4 text-blue-300" />
                      <div className="text-xl font-bold text-white">8K+</div>
                    </div>
                    <div className="text-blue-200 text-xs font-medium leading-tight">Monthly Readers</div>
                    <div className="text-blue-300/70 text-xs mt-1">Growing Community</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-8 px-4" data-section="filter-section">
          <div className="max-w-7xl mx-auto">
            <Card className="backdrop-blur-xl bg-white/5 border-white/10 shadow-2xl mb-8">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center">
                  {/* Search */}
                  <div className="relative w-full lg:w-80">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 w-4 h-4" />
                    <Input
                      placeholder="Search articles, topics..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/40 w-full"
                    />
                    {searchQuery && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setSearchQuery("")}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 h-auto"
                      >
                        <X className="w-4 h-4 text-white/40" />
                      </Button>
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-2">
                      {categories.map((category) => (
                        <Button
                          key={category}
                          variant={selectedCategory === category ? "default" : "outline"}
                          size="sm"
                          onClick={() => handleCategoryChange(category)}
                          className={`${
                            selectedCategory === category
                              ? "bg-blue-500 text-white border-blue-500"
                              : "bg-white/10 border-white/20 text-white hover:bg-white/20"
                          } transition-all text-xs whitespace-nowrap justify-center`}
                        >
                          {category === "All" && <Filter className="w-3 h-3 mr-1 flex-shrink-0" />}
                          {category === "Web Development" && <Code className="w-3 h-3 mr-1 flex-shrink-0" />}
                          {category === "Quality Assurance" && <Shield className="w-3 h-3 mr-1 flex-shrink-0" />}
                          {category === "UI/UX Design" && <Palette className="w-3 h-3 mr-1 flex-shrink-0" />}
                          {category === "Software Engineering" && <Cpu className="w-3 h-3 mr-1 flex-shrink-0" />}
                          {category === "AI" && <Bot className="w-3 h-3 mr-1 flex-shrink-0" />}
                          {category === "Automation" && <Zap className="w-3 h-3 mr-1 flex-shrink-0" />}
                          {category === "Startup & Business Growth" && (
                            <Building className="w-3 h-3 mr-1 flex-shrink-0" />
                          )}
                          {category === "Case Studies" && <FileText className="w-3 h-3 mr-1 flex-shrink-0" />}
                          {category === "Tech Trends & Insights" && (
                            <BarChart3 className="w-3 h-3 mr-1 flex-shrink-0" />
                          )}
                          <span className="truncate">{category}</span>
                          <span className="ml-1 opacity-70">({categoryStats[category] || 0})</span>
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Results Count */}
                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-white/60 text-sm">
                    Showing {filteredPosts.length} of {blogPosts.length} articles
                    {searchQuery && ` for "${searchQuery}"`}
                    {selectedCategory !== "All" && ` in ${selectedCategory}`}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            {currentPosts.length > 0 ? (
              <>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {currentPosts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
                </div>

                {totalPages > 1 && (
                  <div className="mt-12 flex justify-center">
                    <Card className="backdrop-blur-xl bg-white/5 border-white/10 shadow-2xl">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="bg-white/5 border-white/20 text-white hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            <ChevronLeft className="w-4 h-4 mr-1" />
                            Previous
                          </Button>

                          <div className="flex space-x-1">
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                              <Button
                                key={page}
                                variant={currentPage === page ? "default" : "outline"}
                                size="sm"
                                onClick={() => handlePageChange(page)}
                                className={
                                  currentPage === page
                                    ? "bg-blue-500 text-white border-blue-500"
                                    : "bg-white/5 border-white/20 text-white hover:bg-white/10"
                                }
                              >
                                {page}
                              </Button>
                            ))}
                          </div>

                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="bg-white/5 border-white/20 text-white hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            Next
                            <ChevronRight className="w-4 h-4 ml-1" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )}
              </>
            ) : (
              <Card className="backdrop-blur-xl bg-white/5 border-white/10 shadow-2xl">
                <CardContent className="p-12 text-center">
                  <div className="text-white/40 mb-4">
                    <Search className="w-16 h-16 mx-auto" />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-2">No Articles Found</h3>
                  <p className="text-white/60 mb-6">
                    No articles match your current search criteria. Try adjusting your filters or search terms.
                  </p>
                  <Button
                    onClick={() => {
                      setSearchQuery("")
                      setSelectedCategory("All")
                    }}
                    variant="outline"
                    className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                  >
                    Clear Filters
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-8 px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="backdrop-blur-xl bg-gradient-to-r from-blue-900/30 via-purple-900/30 to-pink-900/30 border-blue-500/20 shadow-2xl overflow-hidden">
              <CardContent className="p-12 text-center relative">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
                <div className="relative z-10">
                  <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-4 rounded-full inline-flex mb-6">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    Stay Updated with Our Latest Insights
                  </h2>
                  <p className="text-white/90 mb-6 max-w-2xl mx-auto text-sm">
                    Get the latest tutorials, industry insights, and expert tips delivered directly to your inbox. Join
                    our community of developers and tech enthusiasts.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-blue-400"
                    />
                    <Button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 hover:scale-105 transition-all font-medium shadow-lg px-8 py-3">
                      Subscribe
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                  <p className="text-white/60 text-xs mt-3">
                    No spam, unsubscribe at any time. We respect your privacy.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <Card className="backdrop-blur-xl bg-white/5 border-white/10 shadow-2xl">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-4 gap-6">
                  {/* Company Info */}
                  <div className="md:col-span-2">
                    <h3 className="text-lg font-bold text-white mb-3">SoftEdge Development</h3>
                    <p className="text-white/80 text-xs leading-relaxed mb-3">
                      At SoftEdge Development, we believe that a customer experience is the aggregate of all the
                      touchpoints that our clients experience with our services.
                    </p>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-white/10 border-white/20 text-white hover:bg-white/20 p-2"
                        onClick={() => window.open("https://medium.com/@softedgedev", "_blank")}
                      >
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                        </svg>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-white/10 border-white/20 text-white hover:bg-white/20 p-2"
                        onClick={() => window.open("https://instagram.com/softedgedev", "_blank")}
                      >
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.073-1.689-.073-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-white/10 border-white/20 text-white hover:bg-white/20 p-2"
                        onClick={() => window.open("https://x.com/softedgedev", "_blank")}
                      >
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      </Button>
                    </div>
                  </div>

                  {/* Useful Links */}
                  <div>
                    <h4 className="text-white font-medium mb-3 text-sm">Useful Links</h4>
                    <div className="space-y-1">
                      <Link
                        href="/blog"
                        className="block text-white/70 hover:text-white transition-colors text-xs text-left"
                        onClick={() => {
                          setTimeout(() => {
                            window.scrollTo({ top: 0, behavior: "smooth" })
                          }, 100)
                        }}
                      >
                        Blog
                      </Link>

                      <Link
                        href="/web-development"
                        className="block text-white/70 hover:text-white transition-colors text-xs text-left"
                        onClick={() => {
                          setTimeout(() => {
                            window.scrollTo({ top: 0, behavior: "smooth" })
                          }, 100)
                        }}
                      >
                        Web Development
                      </Link>
                      <Link
                        href="/qa-automation"
                        className="block text-white/70 hover:text-white transition-colors text-xs text-left"
                        onClick={() => {
                          setTimeout(() => {
                            window.scrollTo({ top: 0, behavior: "smooth" })
                          }, 100)
                        }}
                      >
                        Quality & Test Automation
                      </Link>
                      <Link
                        href="/ux-design"
                        className="block text-white/70 hover:text-white transition-colors text-xs text-left"
                        onClick={() => {
                          setTimeout(() => {
                            window.scrollTo({ top: 0, behavior: "smooth" })
                          }, 100)
                        }}
                      >
                        User Experience Design
                      </Link>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div>
                    <h4 className="text-white font-medium mb-3 text-sm">Contact Info</h4>
                    <div className="space-y-1">
                      <button
                        onClick={() => {
                          const email = "contact@softedgedevelopment.com"
                          const subject = "Project Inquiry - SoftEdge Development"
                          const body = `Hello SoftEdge Development,

I'm interested in discussing a project with you.

Please let me know when would be a good time to connect.

Thank you!`
                          const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
                          const link = document.createElement("a")
                          link.href = mailtoUrl
                          link.target = "_blank"
                          link.rel = "noopener noreferrer"
                          document.body.appendChild(link)
                          link.click()
                          document.body.removeChild(link)
                        }}
                        className="block text-white/70 hover:text-white transition-colors text-xs text-left cursor-pointer"
                      >
                        contact@softedgedevelopment.com
                      </button>
                      <button
                        onClick={() =>
                          window.open(
                            "https://www.google.com/maps/place/Seattle,+WA/@47.6062095,-122.3320708,11z/data=!3m1!4b1!4m6!3m5!1s0x5490102c93e83355:0x102565466944d59a!8m2!3d47.6062095!4d-122.3320708!16zL20vMGQ5anI",
                            "_blank",
                          )
                        }
                        className="block text-white/70 hover:text-white transition-colors text-xs text-left cursor-pointer"
                      >
                        Seattle, Washington
                      </button>
                      <a
                        href="/brockaltug"
                        className="block text-white/70 hover:text-white transition-colors text-xs pt-2 border-t border-white/10 mt-2"
                      >
                        View Portfolio
                      </a>
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/20 mt-6 pt-4">
                  <div className="flex flex-col md:flex-row justify-between items-center gap-3">
                    <div className="text-white/60 text-xs">© 2025 SoftEdge Development. All rights reserved.</div>
                    <div className="flex gap-4">
                      <Link
                        href="/terms-of-service"
                        className="text-white/60 hover:text-white transition-colors text-xs"
                        onClick={() => {
                          setTimeout(() => {
                            window.scrollTo({ top: 0, behavior: "smooth" })
                          }, 100)
                        }}
                      >
                        Terms of Service
                      </Link>
                      <Link
                        href="/privacy-policy"
                        className="text-white/60 hover:text-white transition-colors text-xs"
                        onClick={() => {
                          setTimeout(() => {
                            window.scrollTo({ top: 0, behavior: "smooth" })
                          }, 100)
                        }}
                      >
                        Privacy Policy
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </footer>
      </div>
    </div>
  )
}
