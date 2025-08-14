"use client"

import {
  Code,
  Shield,
  Palette,
  ArrowRight,
  ExternalLink,
  Github,
  Globe,
  Star,
  Calendar,
  Users,
  TrendingUp,
  Award,
  Filter,
  Search,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Navigation } from "@/components/navigation"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useCallback, memo, useState, useMemo } from "react"

const portfolioProjects = [
  // Web Development Projects
  {
    id: 1,
    title: "Enterprise SaaS Platform",
    description:
      "Multi-tenant SaaS application serving 10,000+ users with real-time analytics and advanced dashboard capabilities",
    longDescription:
      "A comprehensive enterprise-grade SaaS platform built with React, Node.js, and PostgreSQL. Features include real-time analytics, multi-tenant architecture, advanced user management, and scalable microservices infrastructure.",
    image: "/assets/project-01.png",
    category: "Web Development",
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "AWS", "Docker", "TypeScript"],
    metrics: { users: "10K+", uptime: "99.9%", performance: "A+", satisfaction: "4.8/5" },
    date: "2024",
    client: "Enterprise Corp",
    duration: "6 months",
    team: "8 developers",
    features: [
      "Multi-tenant architecture",
      "Real-time analytics dashboard",
      "Advanced user management",
      "API-first design",
      "Microservices infrastructure",
      "Automated CI/CD pipeline",
    ],
    results: [
      "Increased user engagement by 150%",
      "Reduced operational costs by 40%",
      "Improved system performance by 200%",
      "Achieved 99.9% uptime SLA",
    ],
    links: {
      live: "https://enterprise-saas.example.com",
      github: "https://github.com/softedge/enterprise-saas",
    },
  },
  {
    id: 2,
    title: "E-commerce Marketplace",
    description:
      "High-performance marketplace with advanced search, recommendation engine, and seamless payment integration",
    longDescription:
      "A modern e-commerce marketplace built with Next.js and GraphQL, featuring advanced search capabilities, AI-powered recommendations, and integrated payment processing with Stripe.",
    image: "/assets/project-02.png",
    category: "Web Development",
    technologies: ["Next.js", "GraphQL", "MongoDB", "Stripe", "Vercel", "TypeScript", "Tailwind CSS"],
    metrics: { transactions: "$1M+", conversion: "+35%", speed: "< 1s", users: "50K+" },
    date: "2024",
    client: "Retail Solutions Inc",
    duration: "4 months",
    team: "6 developers",
    features: [
      "Advanced product search",
      "AI-powered recommendations",
      "Integrated payment processing",
      "Vendor management system",
      "Real-time inventory tracking",
      "Mobile-responsive design",
    ],
    results: [
      "Processed over $1M in transactions",
      "Increased conversion rate by 35%",
      "Achieved sub-1 second page load times",
      "Onboarded 200+ vendors",
    ],
    links: {
      live: "https://marketplace.example.com",
      github: "https://github.com/softedge/ecommerce-marketplace",
    },
  },
  {
    id: 3,
    title: "Real-time Collaboration Tool",
    description: "WebSocket-powered collaboration platform with live editing, video conferencing, and team management",
    longDescription:
      "A comprehensive collaboration platform built with Vue.js and Socket.io, enabling real-time document editing, video conferencing, and advanced team management features.",
    image: "/assets/project-03.png",
    category: "Web Development",
    technologies: ["Vue.js", "Socket.io", "Express", "Docker", "GCP", "WebRTC", "MongoDB"],
    metrics: { concurrent: "1K+", latency: "< 50ms", sync: "Real-time", teams: "500+" },
    date: "2023",
    client: "CollabTech Solutions",
    duration: "5 months",
    team: "7 developers",
    features: [
      "Real-time document editing",
      "Video conferencing integration",
      "Team management dashboard",
      "File sharing and storage",
      "Activity tracking",
      "Cross-platform compatibility",
    ],
    results: [
      "Supported 1K+ concurrent users",
      "Achieved <50ms latency",
      "Onboarded 500+ teams",
      "99.8% user satisfaction rate",
    ],
    links: {
      live: "https://collab-tool.example.com",
      github: "https://github.com/softedge/collaboration-tool",
    },
  },
  {
    id: 4,
    title: "FinTech Trading Platform",
    description: "Secure trading platform with real-time market data, advanced charting, and portfolio management",
    longDescription:
      "A sophisticated trading platform built with React and Python, featuring real-time market data feeds, advanced technical analysis tools, and comprehensive portfolio management.",
    image: "/assets/project-04.png",
    category: "Web Development",
    technologies: ["React", "Python", "FastAPI", "PostgreSQL", "Redis", "WebSocket", "D3.js"],
    metrics: { trades: "100K+", latency: "< 10ms", volume: "$50M+", accuracy: "99.99%" },
    date: "2023",
    client: "FinTech Innovations",
    duration: "8 months",
    team: "10 developers",
    features: [
      "Real-time market data feeds",
      "Advanced charting tools",
      "Portfolio management",
      "Risk assessment algorithms",
      "Automated trading bots",
      "Regulatory compliance",
    ],
    results: [
      "Processed 100K+ trades",
      "Achieved <10ms latency",
      "Managed $50M+ in volume",
      "Maintained 99.99% accuracy",
    ],
    links: {
      live: "https://trading-platform.example.com",
      github: "https://github.com/softedge/trading-platform",
    },
  },

  // QA Automation Projects
  {
    id: 5,
    title: "Enterprise Banking Test Suite",
    description:
      "Comprehensive test automation for critical financial systems with 99.9% reliability and regulatory compliance",
    longDescription:
      "A robust testing framework for enterprise banking systems, ensuring regulatory compliance, security validation, and comprehensive functional testing across all critical financial operations.",
    image: "/assets/project-05.png",
    category: "QA Automation",
    technologies: ["Selenium", "TestNG", "Jenkins", "PostgreSQL", "Docker", "Cucumber", "JMeter"],
    metrics: { coverage: "98.5%", bugs: "95% ↓", speed: "70% ↑", compliance: "100%" },
    date: "2024",
    client: "Global Bank Corp",
    duration: "4 months",
    team: "5 QA engineers",
    features: [
      "Automated regression testing",
      "Security vulnerability scanning",
      "Performance load testing",
      "Regulatory compliance validation",
      "Cross-browser compatibility",
      "API testing framework",
    ],
    results: [
      "Achieved 98.5% test coverage",
      "Reduced bugs by 95%",
      "Increased testing speed by 70%",
      "Maintained 100% compliance",
    ],
    links: {
      github: "https://github.com/softedge/banking-test-suite",
    },
  },
  {
    id: 6,
    title: "Healthcare Management Testing",
    description: "HIPAA-compliant testing framework with advanced security validation and patient data protection",
    longDescription:
      "A comprehensive testing solution for healthcare management systems, focusing on HIPAA compliance, patient data security, and critical healthcare workflow validation.",
    image: "/assets/project-06.png",
    category: "QA Automation",
    technologies: ["Cypress", "Postman", "K6", "MongoDB", "AWS", "Newman", "Playwright"],
    metrics: { compliance: "100%", automation: "85%", defects: "90% ↓", security: "A+" },
    date: "2024",
    client: "HealthTech Solutions",
    duration: "3 months",
    team: "4 QA engineers",
    features: [
      "HIPAA compliance testing",
      "Patient data security validation",
      "Electronic health record testing",
      "Integration testing suite",
      "Mobile app testing",
      "Performance monitoring",
    ],
    results: [
      "Achieved 100% HIPAA compliance",
      "Automated 85% of test cases",
      "Reduced defects by 90%",
      "Earned A+ security rating",
    ],
    links: {
      github: "https://github.com/softedge/healthcare-testing",
    },
  },
  {
    id: 7,
    title: "E-commerce Performance Suite",
    description:
      "Load testing and performance optimization for high-traffic retail platform handling millions of users",
    longDescription:
      "A comprehensive performance testing suite designed for high-traffic e-commerce platforms, ensuring optimal performance during peak shopping seasons and flash sales.",
    image: "/assets/project-07.png",
    category: "QA Automation",
    technologies: ["JMeter", "Playwright", "Grafana", "Redis", "Kubernetes", "Artillery", "Gatling"],
    metrics: { load: "10K users", response: "< 200ms", uptime: "99.99%", throughput: "1M req/min" },
    date: "2023",
    client: "Retail Giant Inc",
    duration: "2 months",
    team: "3 QA engineers",
    features: [
      "Load testing automation",
      "Performance monitoring",
      "Stress testing scenarios",
      "Real-time analytics",
      "Scalability validation",
      "CDN optimization testing",
    ],
    results: [
      "Handled 10K concurrent users",
      "Maintained <200ms response time",
      "Achieved 99.99% uptime",
      "Processed 1M requests/minute",
    ],
    links: {
      github: "https://github.com/softedge/ecommerce-performance",
    },
  },
  {
    id: 8,
    title: "Mobile App Testing Framework",
    description: "Cross-platform mobile testing solution for iOS and Android applications with device farm integration",
    longDescription:
      "A comprehensive mobile testing framework supporting both iOS and Android platforms, with device farm integration and automated testing across multiple device configurations.",
    image: "/assets/project-08.png",
    category: "QA Automation",
    technologies: ["Appium", "Espresso", "XCUITest", "Detox", "BrowserStack", "Firebase", "TestRail"],
    metrics: { devices: "50+", platforms: "iOS/Android", coverage: "95%", automation: "80%" },
    date: "2023",
    client: "Mobile Solutions Ltd",
    duration: "3 months",
    team: "4 QA engineers",
    features: [
      "Cross-platform testing",
      "Device farm integration",
      "Automated UI testing",
      "Performance profiling",
      "Crash reporting",
      "App store validation",
    ],
    results: [
      "Tested on 50+ devices",
      "Covered iOS and Android",
      "Achieved 95% test coverage",
      "Automated 80% of test cases",
    ],
    links: {
      github: "https://github.com/softedge/mobile-testing",
    },
  },

  // UX Design Projects
  {
    id: 9,
    title: "FinTech Mobile Banking App",
    description:
      "Complete UX transformation resulting in 250% increase in user engagement and industry-leading satisfaction",
    longDescription:
      "A comprehensive UX redesign of a mobile banking application, focusing on user journey optimization, accessibility improvements, and modern design patterns to enhance user engagement and satisfaction.",
    image: "/assets/project-09.png",
    category: "UX Design",
    technologies: ["Figma", "Principle", "UserTesting", "Hotjar", "Maze", "InVision", "Sketch"],
    metrics: { engagement: "+250%", satisfaction: "4.9/5", completion: "96%", retention: "+180%" },
    date: "2024",
    client: "Digital Bank Pro",
    duration: "4 months",
    team: "3 UX designers",
    features: [
      "User journey mapping",
      "Interactive prototyping",
      "Accessibility compliance",
      "Usability testing",
      "Design system creation",
      "Mobile-first approach",
    ],
    results: [
      "Increased engagement by 250%",
      "Achieved 4.9/5 satisfaction",
      "96% task completion rate",
      "Improved retention by 180%",
    ],
    links: {
      prototype: "https://figma.com/proto/banking-app",
      case_study: "https://softedge.dev/case-studies/banking-app",
    },
  },
  {
    id: 10,
    title: "E-commerce Platform Redesign",
    description:
      "Strategic redesign focusing on conversion optimization and user journey enhancement for online retail",
    longDescription:
      "A complete e-commerce platform redesign aimed at improving conversion rates, streamlining the checkout process, and enhancing the overall shopping experience through data-driven design decisions.",
    image: "/assets/project-10.png",
    category: "UX Design",
    technologies: ["Adobe XD", "Maze", "Google Analytics", "Storybook", "Lookback", "Optimal Workshop"],
    metrics: { conversion: "+220%", bounce: "-55%", revenue: "+380%", cart: "+150%" },
    date: "2024",
    client: "ShopTech Commerce",
    duration: "3 months",
    team: "4 UX designers",
    features: [
      "Conversion optimization",
      "Checkout flow redesign",
      "Product discovery enhancement",
      "Mobile optimization",
      "A/B testing implementation",
      "Personalization features",
    ],
    results: [
      "Increased conversion by 220%",
      "Reduced bounce rate by 55%",
      "Boosted revenue by 380%",
      "Improved cart completion by 150%",
    ],
    links: {
      prototype: "https://xd.adobe.com/view/ecommerce-redesign",
      case_study: "https://softedge.dev/case-studies/ecommerce-redesign",
    },
  },
  {
    id: 11,
    title: "Healthcare Dashboard System",
    description:
      "Complex data visualization and workflow optimization for healthcare professionals and patient management",
    longDescription:
      "A sophisticated healthcare dashboard design focusing on complex data visualization, workflow optimization for medical professionals, and patient management system integration.",
    image: "/assets/project-11.png",
    category: "UX Design",
    technologies: ["Figma", "InVision", "Optimal Workshop", "Zeroheight", "Abstract", "UserTesting"],
    metrics: { efficiency: "+180%", errors: "-80%", training: "-70%", satisfaction: "4.8/5" },
    date: "2023",
    client: "MedTech Innovations",
    duration: "5 months",
    team: "5 UX designers",
    features: [
      "Data visualization design",
      "Workflow optimization",
      "Medical compliance UI",
      "Patient management interface",
      "Real-time monitoring",
      "Accessibility standards",
    ],
    results: [
      "Improved efficiency by 180%",
      "Reduced errors by 80%",
      "Decreased training time by 70%",
      "Achieved 4.8/5 satisfaction",
    ],
    links: {
      prototype: "https://figma.com/proto/healthcare-dashboard",
      case_study: "https://softedge.dev/case-studies/healthcare-dashboard",
    },
  },
  {
    id: 12,
    title: "SaaS Analytics Platform",
    description:
      "Intuitive analytics dashboard design with advanced data visualization and customizable reporting features",
    longDescription:
      "A comprehensive analytics platform design featuring intuitive data visualization, customizable dashboards, and advanced reporting capabilities for business intelligence and decision-making.",
    image: "/assets/project-12.png",
    category: "UX Design",
    technologies: ["Figma", "Framer", "D3.js", "Tableau", "Hotjar", "Mixpanel", "Amplitude"],
    metrics: { adoption: "+300%", insights: "+250%", decisions: "+200%", time: "-60%" },
    date: "2023",
    client: "Analytics Pro Corp",
    duration: "4 months",
    team: "3 UX designers",
    features: [
      "Interactive data visualization",
      "Customizable dashboards",
      "Advanced filtering system",
      "Export and sharing tools",
      "Real-time data updates",
      "Mobile responsive design",
    ],
    results: [
      "Increased adoption by 300%",
      "Improved insights by 250%",
      "Enhanced decisions by 200%",
      "Reduced analysis time by 60%",
    ],
    links: {
      prototype: "https://framer.com/share/analytics-platform",
      case_study: "https://softedge.dev/case-studies/analytics-platform",
    },
  },
]

const categories = ["All", "Web Development", "QA Automation", "UX Design"]

const ProjectCard = memo(
  ({
    project,
    onProjectClick,
  }: {
    project: (typeof portfolioProjects)[0]
    onProjectClick: (project: (typeof portfolioProjects)[0]) => void
  }) => {
    const getCategoryIcon = (category: string) => {
      switch (category) {
        case "Web Development":
          return <Code className="w-4 h-4" />
        case "QA Automation":
          return <Shield className="w-4 h-4" />
        case "UX Design":
          return <Palette className="w-4 h-4" />
        default:
          return <Globe className="w-4 h-4" />
      }
    }

    const getCategoryColor = (category: string) => {
      switch (category) {
        case "Web Development":
          return "badge-web-dev"
        case "QA Automation":
          return "badge-qa-automation"
        case "UX Design":
          return "badge-ux-design"
        default:
          return "bg-gray-500/20 text-gray-200"
      }
    }

    const getCategoryGradient = (category: string) => {
      switch (category) {
        case "Web Development":
          return "from-blue-500/20 to-cyan-500/20"
        case "QA Automation":
          return "from-green-500/20 to-emerald-500/20"
        case "UX Design":
          return "from-purple-500/20 to-pink-500/20"
        default:
          return "from-gray-500/20 to-gray-600/20"
      }
    }

    return (
      <Card
        className="backdrop-blur-xl bg-white/5 border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-300 group overflow-hidden h-full cursor-pointer"
        onClick={() => onProjectClick(project)}
      >
        <CardContent className="p-0 h-full flex flex-col">
          {/* Project Image */}
          <div className="relative h-48 overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-br ${getCategoryGradient(project.category)}`}></div>
            <div className="absolute top-4 left-4">
              <Badge className={`${getCategoryColor(project.category)} text-xs flex items-center gap-1`}>
                {getCategoryIcon(project.category)}
                {project.category}
              </Badge>
            </div>
            <div className="absolute top-4 right-4">
              <Badge className="bg-black/50 text-white border-0 text-xs">{project.date}</Badge>
            </div>
            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="flex gap-2">
                {project.links?.live && (
                  <Button
                    size="sm"
                    variant="ghost"
                    className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30"
                    onClick={(e) => {
                      e.stopPropagation()
                      window.open(project.links.live, "_blank")
                    }}
                  >
                    <ExternalLink className="w-4 h-4 text-white" />
                  </Button>
                )}
                {project.links?.github && (
                  <Button
                    size="sm"
                    variant="ghost"
                    className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30"
                    onClick={(e) => {
                      e.stopPropagation()
                      window.open(project.links.github, "_blank")
                    }}
                  >
                    <Github className="w-4 h-4 text-white" />
                  </Button>
                )}
                {project.links?.prototype && (
                  <Button
                    size="sm"
                    variant="ghost"
                    className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30"
                    onClick={(e) => {
                      e.stopPropagation()
                      window.open(project.links.prototype, "_blank")
                    }}
                  >
                    <ExternalLink className="w-4 h-4 text-white" />
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 flex-grow flex flex-col">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-white font-bold text-lg leading-tight flex-grow">{project.title}</h3>
              <div className="flex items-center text-yellow-400 ml-2">
                <Star className="w-4 h-4 fill-current" />
              </div>
            </div>

            <p className="text-white/80 text-sm mb-4 leading-relaxed flex-grow">{project.description}</p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-1 mb-4">
              {project.technologies.slice(0, 4).map((tech, techIndex) => (
                <Badge key={techIndex} className="bg-white/10 text-white/70 text-[10px] px-2 py-1">
                  {tech}
                </Badge>
              ))}
              {project.technologies.length > 4 && (
                <Badge className="bg-white/10 text-white/70 text-[10px] px-2 py-1">
                  +{project.technologies.length - 4} more
                </Badge>
              )}
            </div>

            {/* Project Details */}
            <div className="grid grid-cols-2 gap-3 mb-4 text-xs">
              <div className="flex items-center text-white/60">
                <Users className="w-3 h-3 mr-1" />
                {project.team}
              </div>
              <div className="flex items-center text-white/60">
                <Calendar className="w-3 h-3 mr-1" />
                {project.duration}
              </div>
            </div>

            {/* Metrics */}
            <div className="flex justify-between items-center pt-4 border-t border-white/10">
              {Object.entries(project.metrics)
                .slice(0, 3)
                .map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-green-400 font-bold text-sm">{value}</div>
                    <div className="text-white/60 text-xs capitalize">{key}</div>
                  </div>
                ))}
            </div>
          </div>
        </CardContent>
      </Card>
    )
  },
)

ProjectCard.displayName = "ProjectCard"

export default function PortfolioPage() {
  const router = useRouter()
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedProject, setSelectedProject] = useState<(typeof portfolioProjects)[0] | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const projectsPerPage = 9

  const filteredProjects = useMemo(() => {
    return portfolioProjects.filter((project) => {
      const matchesCategory = selectedCategory === "All" || project.category === selectedCategory
      const matchesSearch =
        searchQuery === "" ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()))

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

  const handleStartProject = useCallback(() => {
    router.push("/#contact")
    setTimeout(() => {
      const element = document.getElementById("contact")
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }, 100)
  }, [router])

  const getCategoryStats = () => {
    const stats = {
      All: portfolioProjects.length,
      "Web Development": portfolioProjects.filter((p) => p.category === "Web Development").length,
      "QA Automation": portfolioProjects.filter((p) => p.category === "QA Automation").length,
      "UX Design": portfolioProjects.filter((p) => p.category === "UX Design").length,
    }
    return stats
  }

  const categoryStats = getCategoryStats()

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
                <span className="text-blue-400 text-sm font-medium">Our Work Portfolio</span>
              </div>

              <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mb-6 leading-tight">
                Featured Projects
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  & Case Studies
                </span>
              </h1>

              <p className="text-white/80 text-base mb-8 leading-relaxed max-w-3xl mx-auto">
                Explore our comprehensive portfolio showcasing innovative web development, rigorous QA automation, and
                exceptional UX design projects that have delivered measurable results for our clients.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {/* Total Projects Card */}
                <Card className="backdrop-blur-xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 border-blue-400/30 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-white mb-1">{portfolioProjects.length}</div>
                    <div className="text-blue-200 text-sm font-medium">Total Projects</div>
                  </CardContent>
                </Card>

                {/* Web Development Card */}
                <Card className="backdrop-blur-xl bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 border-cyan-400/30 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-white mb-1">{categoryStats["Web Development"]}</div>
                    <div className="text-cyan-200 text-sm font-medium">Web Development</div>
                  </CardContent>
                </Card>

                {/* QA Automation Card */}
                <Card className="backdrop-blur-xl bg-gradient-to-br from-green-500/20 to-green-600/20 border-green-400/30 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-white mb-1">{categoryStats["QA Automation"]}</div>
                    <div className="text-green-200 text-sm font-medium">QA Automation</div>
                  </CardContent>
                </Card>

                {/* UX Design Card */}
                <Card className="backdrop-blur-xl bg-gradient-to-br from-purple-500/20 to-purple-600/20 border-purple-400/30 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-white mb-1">{categoryStats["UX Design"]}</div>
                    <div className="text-purple-200 text-sm font-medium">UX Design</div>
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
                      placeholder="Search projects, technologies..."
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
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-2">
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
                          {category === "QA Automation" && <Shield className="w-3 h-3 mr-1 flex-shrink-0" />}
                          {category === "UX Design" && <Palette className="w-3 h-3 mr-1 flex-shrink-0" />}
                          <span className="truncate">{category}</span>
                          <span className="ml-1 opacity-70">
                            ({categoryStats[category as keyof typeof categoryStats]})
                          </span>
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Results Count */}
                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-white/60 text-sm">
                    Showing {filteredProjects.length} of {portfolioProjects.length} projects
                    {searchQuery && ` for "${searchQuery}"`}
                    {selectedCategory !== "All" && ` in ${selectedCategory}`}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            {(() => {
              const totalPages = Math.ceil(filteredProjects.length / projectsPerPage)
              const startIndex = (currentPage - 1) * projectsPerPage
              const endIndex = startIndex + projectsPerPage
              const currentProjects = filteredProjects.slice(startIndex, endIndex)

              return currentProjects.length > 0 ? (
                <>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {currentProjects.map((project) => (
                      <ProjectCard key={project.id} project={project} onProjectClick={setSelectedProject} />
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
                    <h3 className="text-white font-bold text-xl mb-2">No Projects Found</h3>
                    <p className="text-white/60 mb-6">
                      No projects match your current search criteria. Try adjusting your filters or search terms.
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
              )
            })()}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-8 px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="backdrop-blur-xl bg-gradient-to-r from-blue-900/30 via-purple-900/30 to-pink-900/30 border-blue-500/20 shadow-2xl overflow-hidden">
              <CardContent className="p-12 text-center relative">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
                <div className="relative z-10">
                  <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-4 rounded-full inline-flex mb-6">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Ready to Start Your Next Project?</h2>
                  <p className="text-white/90 mb-6 max-w-2xl mx-auto text-sm">
                    Let's collaborate to bring your vision to life. Whether you need web development, QA automation, or
                    UX design services, we're here to deliver exceptional results.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Button
                      onClick={handleStartProject}
                      className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 hover:scale-105 transition-all font-medium shadow-lg px-8 py-3"
                    >
                      Start Your Project
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                    <Link href="/brockaltug">
                      <Button
                        variant="outline"
                        className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:scale-105 transition-all px-8 py-3"
                      >
                        View Team Profile
                        <Users className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
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
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
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

        {/* Project Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-2 sm:p-4"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setSelectedProject(null)
              }
            }}
          >
            <Card className="backdrop-blur-xl bg-gradient-to-br from-slate-800/90 to-slate-900/90 border border-blue-400/30 shadow-2xl max-w-5xl w-full max-h-[85vh] overflow-y-auto transform animate-in fade-in-0 zoom-in-95 duration-300 mx-4">
              <CardContent className="p-0">
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-6 rounded-t-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="p-3 rounded-full bg-white/20 mr-4">
                        {selectedProject.category === "Web Development" && <Code className="w-8 h-8 text-white" />}
                        {selectedProject.category === "QA Automation" && <Shield className="w-8 h-8 text-white" />}
                        {selectedProject.category === "UX Design" && <Palette className="w-8 h-8 text-white" />}
                      </div>
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-white">{selectedProject.title}</h2>
                        <div className="flex items-center gap-3 mt-2">
                          <Badge className="bg-white/20 text-white border-0 text-sm">{selectedProject.category}</Badge>
                          <div className="flex items-center text-blue-100 text-sm">
                            <Calendar className="w-4 h-4 mr-1" />
                            {selectedProject.duration}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {selectedProject.links?.live && (
                        <Button
                          onClick={() => window.open(selectedProject.links.live, "_blank")}
                          variant="ghost"
                          size="sm"
                          className="text-white hover:bg-white/20 p-2"
                        >
                          <Globe className="w-5 h-5" />
                        </Button>
                      )}
                      {selectedProject.links?.github && (
                        <Button
                          onClick={() => window.open(selectedProject.links.github, "_blank")}
                          variant="ghost"
                          size="sm"
                          className="text-white hover:bg-white/20 p-2"
                        >
                          <Github className="w-5 h-5" />
                        </Button>
                      )}
                      {selectedProject.links?.prototype && (
                        <Button
                          onClick={() => window.open(selectedProject.links.prototype, "_blank")}
                          variant="ghost"
                          size="sm"
                          className="text-white hover:bg-white/20 p-2"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </Button>
                      )}
                      <Button
                        onClick={() => setSelectedProject(null)}
                        variant="ghost"
                        size="sm"
                        className="text-white hover:bg-white/20 p-2"
                      >
                        <X className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Project Image */}
                  <div className="mb-6">
                    <div className="relative w-full max-w-4xl mx-auto">
                      <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg border border-white/20 flex items-center justify-center">
                        {selectedProject.category === "Web Development" && <Code className="w-16 h-16 text-white/40" />}
                        {selectedProject.category === "QA Automation" && <Shield className="w-16 h-16 text-white/40" />}
                        {selectedProject.category === "UX Design" && <Palette className="w-16 h-16 text-white/40" />}
                      </div>
                    </div>
                  </div>

                  {/* Project Overview */}
                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div className="md:col-span-2">
                      <h3 className="text-xl font-bold text-white mb-3">Project Overview</h3>
                      <p className="text-white/90 leading-relaxed mb-4">{selectedProject.description}</p>
                      <p className="text-white/80 leading-relaxed text-sm">{selectedProject.longDescription}</p>
                    </div>

                    <div className="space-y-4">
                      {/* Project Details */}
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <h4 className="text-white font-semibold mb-3 flex items-center">
                          <Users className="w-4 h-4 mr-2" />
                          Project Details
                        </h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-white/70">Client:</span>
                            <span className="text-white">{selectedProject.client}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-white/70">Duration:</span>
                            <span className="text-white">{selectedProject.duration}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-white/70">Team:</span>
                            <span className="text-white">{selectedProject.team}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-white/70">Year:</span>
                            <span className="text-white">{selectedProject.date}</span>
                          </div>
                        </div>
                      </div>

                      {/* Key Metrics */}
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <h4 className="text-white font-semibold mb-3 flex items-center">
                          <TrendingUp className="w-4 h-4 mr-2" />
                          Key Metrics
                        </h4>
                        <div className="space-y-2 text-sm">
                          {Object.entries(selectedProject.metrics).map(([key, value]) => (
                            <div key={key} className="flex justify-between">
                              <span className="text-white/70 capitalize">{key}:</span>
                              <span className="text-green-400">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-white mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 text-blue-200 border-blue-400/30 text-sm px-3 py-1"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-white mb-3">Key Features</h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {selectedProject.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-white/80">
                          <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-white mb-3">Project Results</h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {selectedProject.results.map((result, index) => (
                        <div key={index} className="flex items-center text-white/80">
                          <Award className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {result}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 pt-6 border-t border-white/10">
                    {selectedProject.links?.live && (
                      <Button
                        onClick={() => window.open(selectedProject.links.live, "_blank")}
                        className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white border-0 px-6 py-2.5 text-sm font-medium shadow-lg hover:scale-105 transition-all min-w-[140px]"
                      >
                        <Globe className="w-4 h-4 mr-2" />
                        View Live Project
                      </Button>
                    )}
                    {selectedProject.links?.github && (
                      <Button
                        onClick={() => window.open(selectedProject.links.github, "_blank")}
                        variant="outline"
                        className="w-full sm:w-auto bg-white/10 border-white/20 text-white hover:bg-white/20 px-6 py-2.5 text-sm font-medium hover:scale-105 transition-all min-w-[140px]"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        {selectedProject.category === "QA Automation" ? "View Test" : "View Code"}
                      </Button>
                    )}
                    {selectedProject.links?.prototype && (
                      <Button
                        onClick={() => window.open(selectedProject.links.prototype, "_blank")}
                        variant="outline"
                        className="w-full sm:w-auto bg-white/10 border-white/20 text-white hover:bg-white/20 px-6 py-2.5 text-sm font-medium hover:scale-105 transition-all min-w-[140px]"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Prototype
                      </Button>
                    )}
                    <Button
                      onClick={() => setSelectedProject(null)}
                      variant="outline"
                      className="w-full sm:w-auto bg-white/10 border-white/20 text-white hover:bg-white/20 px-6 py-2.5 text-sm font-medium hover:scale-105 transition-all min-w-[140px]"
                    >
                      <X className="w-4 h-4 mr-2" />
                      Close
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
