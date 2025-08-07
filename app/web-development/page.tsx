"use client"

import { Code, Database, Server, Globe, ArrowRight, CheckCircle, Star, Smartphone, Cloud, Layers, Zap, Monitor, Cpu, Shield, GitBranch, Rocket, Users, Target, TrendingUp, Award, ExternalLink, Play, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useCallback, memo, useState } from "react"

const technologies = [
  {
    category: "Frontend Technologies",
    icon: <Code className="w-6 h-6" />,
    items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Redux", "Next.js", "Tailwind CSS", "Bootstrap", "SASS", "jQuery", "Vue.js", "Angular", "Material-UI"],
    gradient: "from-blue-500 to-indigo-600",
    badgeClass: "bg-blue-500/20 text-blue-200 border-blue-400/30",
    description: "Modern frontend technologies for building exceptional user interfaces and experiences",
    details: {
      overview: "We specialize in cutting-edge frontend technologies that deliver exceptional user experiences. Our expertise spans the most popular and powerful frameworks in the industry.",
      keyBenefits: [
        "Component-based architecture for maintainable code",
        "Server-side rendering for optimal SEO performance",
        "Progressive web app capabilities",
        "Advanced state management solutions",
        "Mobile-first responsive design patterns",
        "Real-time data synchronization"
      ],
      useCases: [
        "Single Page Applications (SPAs)",
        "Progressive Web Apps (PWAs)",
        "E-commerce platforms",
        "Dashboard and admin panels",
        "Content management systems",
        "Real-time collaboration tools"
      ]
    }
  },
  {
    category: "Backend Technologies",
    icon: <Server className="w-6 h-6" />,
    items: ["Python", "Java", "Node.js", "Express.js", "NestJS", "GraphQL", "REST APIs", "WebSockets", "Microservices", "FastAPI", "Spring Boot"],
    gradient: "from-blue-500 to-indigo-600",
    badgeClass: "bg-blue-500/20 text-blue-200 border-blue-400/30",
    description: "Robust server-side technologies for scalable applications with enterprise-grade security",
    details: {
      overview: "Our backend expertise ensures your applications are built on solid foundations with scalable architectures, robust security, and optimal performance.",
      keyBenefits: [
        "Microservices architecture for scalability",
        "RESTful and GraphQL API development",
        "Advanced authentication and authorization",
        "Real-time WebSocket connections",
        "Database optimization and caching",
        "Automated testing and CI/CD integration"
      ],
      useCases: [
        "Enterprise API development",
        "Microservices architectures",
        "Real-time applications",
        "Data processing pipelines",
        "Authentication systems",
        "Third-party integrations"
      ]
    }
  },
  {
    category: "Database Solutions",
    icon: <Database className="w-6 h-6" />,
    items: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "SQLite", "Mongoose", "Sequelize", "TypeORM", "Firebase", "DynamoDB", "Cassandra"],
    gradient: "from-blue-500 to-indigo-600",
    badgeClass: "bg-blue-500/20 text-blue-200 border-blue-400/30",
    description: "Flexible data storage solutions for any scale with optimized query performance capabilities",
    details: {
      overview: "We design and implement database solutions that grow with your business, ensuring data integrity, security, and lightning-fast query performance.",
      keyBenefits: [
        "ACID compliance for data integrity",
        "Horizontal and vertical scaling strategies",
        "Advanced indexing and query optimization",
        "Real-time data synchronization",
        "Automated backup and disaster recovery",
        "Multi-region data replication"
      ],
      useCases: [
        "High-traffic web applications",
        "Real-time analytics platforms",
        "Content management systems",
        "E-commerce product catalogs",
        "User session management",
        "IoT data collection systems"
      ]
    }
  },
  {
    category: "Cloud & DevOps",
    icon: <Cloud className="w-6 h-6" />,
    items: ["Docker", "Kubernetes", "CI/CD Pipelines", "Jenkins", "GitHub Actions", "AWS", "GCP", "Azure", "Terraform", "Ansible", "CircleCI", "CloudFormation"],
    gradient: "from-blue-500 to-indigo-600",
    badgeClass: "bg-blue-500/20 text-blue-200 border-blue-400/30",
    description: "Modern deployment and infrastructure management with automated scaling capabilities",
    details: {
      overview: "We implement modern DevOps practices and cloud infrastructure that ensures your applications are always available, secure, and performing at their best.",
      keyBenefits: [
        "Infrastructure as Code (IaC) implementation",
        "Automated CI/CD pipeline setup",
        "Container orchestration with Kubernetes",
        "Auto-scaling based on demand",
        "Advanced monitoring and alerting",
        "Zero-downtime deployment strategies"
      ],
      useCases: [
        "Enterprise cloud migrations",
        "Containerized application deployment",
        "Multi-environment CI/CD pipelines",
        "Auto-scaling web applications",
        "Monitoring and observability setup",
        "Disaster recovery planning"
      ]
    }
  },
]

const services = [
  {
    title: "Full-Stack Web Applications",
    description: "End-to-end web solutions with modern architecture and seamless user experiences.",
    features: ["Custom UI/UX Design", "API Development", "Database Architecture", "Performance Optimization"],
    icon: <Globe className="w-6 h-6" />,
    metrics: { projects: "50+", satisfaction: "100%", performance: "< 2s load" },
    gradient: "from-blue-500 to-blue-600"
  },
  {
    title: "E-commerce Platforms",
    description: "Complete online stores with payment processing and inventory management systems.",
    features: ["Payment Integration", "Inventory Management", "Admin Dashboard", "Mobile Commerce"],
    icon: <Smartphone className="w-6 h-6" />,
    metrics: { conversions: "+40%", uptime: "99.9%", transactions: "1M+" },
    gradient: "from-blue-500 to-blue-600"
  },
  {
    title: "API Development & Integration",
    description: "Scalable APIs and seamless third-party integrations for connected applications.",
    features: ["RESTful APIs", "GraphQL", "Microservices", "Real-time Features"],
    icon: <Layers className="w-6 h-6" />,
    metrics: { endpoints: "200+", response: "< 100ms", reliability: "99.99%" },
    gradient: "from-blue-500 to-blue-600"
  },
  {
    title: "Cloud Solutions & DevOps",
    description: "Modern cloud infrastructure with continuous automated deployment and monitoring.",
    features: ["Auto Scaling", "CI/CD Pipelines", "Monitoring", "Security"],
    icon: <Cloud className="w-6 h-6" />,
    metrics: { uptime: "99.9%", deployments: "500+", scaling: "Auto" },
    gradient: "from-blue-500 to-blue-600"
  },
]

const showcaseProjects = [
  {
    title: "Enterprise SaaS Platform",
    description: "Multi-tenant SaaS application serving 10,000+ users with real-time analytics",
    image: "/assets/project-01.png",
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "AWS"],
    metrics: { users: "10K+", uptime: "99.9%", performance: "A+" },
    category: "Enterprise"
  },
  {
    title: "E-commerce Marketplace",
    description: "High-performance marketplace with advanced search and recommendation engine",
    image: "/assets/project-02.png",
    technologies: ["Next.js", "GraphQL", "MongoDB", "Stripe", "Vercel"],
    metrics: { transactions: "$1M+", conversion: "+35%", speed: "< 1s" },
    category: "E-commerce"
  },
  {
    title: "Real-time Collaboration Tool",
    description: "WebSocket-powered collaboration platform with live editing capabilities",
    image: "/assets/project-03.png",
    technologies: ["Vue.js", "Socket.io", "Express", "Docker", "GCP"],
    metrics: { concurrent: "1K+", latency: "< 50ms", sync: "Real-time" },
    category: "Collaboration"
  },
]

const developmentProcess = [
  {
    step: "01",
    title: "Discovery & Planning",
    description: "Understanding requirements, defining architecture, and creating technical specifications",
    icon: <Target className="w-6 h-6" />,
    duration: "1-2 weeks",
    gradient: "from-blue-500 to-indigo-600",
    details: {
      overview: "We begin every project with a comprehensive discovery phase to understand your business goals, technical requirements, and user needs. This foundation ensures we build the right solution from the start.",
      keyActivities: [
        "Stakeholder interviews and requirements gathering",
        "Technical architecture planning and documentation",
        "User research and persona development",
        "Project timeline and milestone definition",
        "Risk assessment and mitigation planning",
        "Technology stack selection and justification"
      ],
      deliverables: [
        "Project requirements document",
        "Technical architecture blueprint",
        "User journey maps and wireframes",
        "Project timeline and milestones",
        "Risk assessment report",
        "Technology recommendations"
      ]
    }
  },
  {
    step: "02", 
    title: "Design & Prototyping",
    description: "Creating wireframes, UI designs, and interactive prototypes for validation",
    icon: <Monitor className="w-6 h-6" />,
    duration: "2-3 weeks",
    gradient: "from-blue-500 to-indigo-600",
    details: {
      overview: "Our design phase focuses on creating intuitive, accessible, and visually appealing interfaces that align with your brand and provide exceptional user experiences.",
      keyActivities: [
        "Information architecture and user flow design",
        "Wireframing and low-fidelity prototyping",
        "Visual design and brand integration",
        "Interactive prototype development",
        "Usability testing and feedback incorporation",
        "Design system creation and documentation"
      ],
      deliverables: [
        "Information architecture diagrams",
        "Wireframes and user flow maps",
        "High-fidelity visual designs",
        "Interactive clickable prototypes",
        "Usability testing reports",
        "Design system and style guide"
      ]
    }
  },
  {
    step: "03",
    title: "Development & Testing",
    description: "Agile development with continuous testing and quality assurance",
    icon: <Code className="w-6 h-6" />,
    duration: "4-8 weeks",
    gradient: "from-blue-500 to-indigo-600",
    details: {
      overview: "We follow agile development methodologies with continuous integration and testing to ensure high-quality, maintainable code that meets all requirements and performance standards.",
      keyActivities: [
        "Sprint planning and backlog management",
        "Frontend and backend development",
        "Database design and implementation",
        "API development and integration",
        "Automated testing and quality assurance",
        "Code reviews and performance optimization"
      ],
      deliverables: [
        "Fully functional web application",
        "Comprehensive test suites",
        "API documentation",
        "Code documentation and comments",
        "Performance optimization reports",
        "Security audit and compliance checks"
      ]
    }
  },
  {
    step: "04",
    title: "Deployment & Optimization",
    description: "Production deployment with performance optimization and monitoring setup",
    icon: <Rocket className="w-6 h-6" />,
    duration: "1-2 weeks",
    gradient: "from-blue-500 to-indigo-600",
    details: {
      overview: "We ensure smooth deployment to production with comprehensive monitoring, optimization, and support systems in place for ongoing success and maintenance.",
      keyActivities: [
        "Production environment setup and configuration",
        "CI/CD pipeline implementation",
        "Performance monitoring and analytics setup",
        "Security hardening and SSL configuration",
        "Load testing and optimization",
        "Team training and documentation handover"
      ],
      deliverables: [
        "Live production application",
        "CI/CD pipeline configuration",
        "Monitoring and analytics dashboards",
        "Security certificates and configurations",
        "Performance optimization report",
        "Training materials and documentation"
      ]
    }
  },
]

const technologyDocs: Record<string, string> = {
  "HTML5": "https://developer.mozilla.org/en-US/docs/Web/HTML",
  "CSS3": "https://developer.mozilla.org/en-US/docs/Web/CSS",
  "JavaScript": "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  "TypeScript": "https://www.typescriptlang.org/docs/",
  "React": "https://react.dev/",
  "Redux": "https://redux.js.org/",
  "Next.js": "https://nextjs.org/docs",
  "Tailwind CSS": "https://tailwindcss.com/docs",
  "Bootstrap": "https://getbootstrap.com/docs/",
  "SASS": "https://sass-lang.com/documentation/",
  "jQuery": "https://api.jquery.com/",
  "Vue.js": "https://vuejs.org/guide/",
  "Angular": "https://angular.io/docs",
  "Material-UI": "https://mui.com/",
  "Python": "https://docs.python.org/3/",
  "Java": "https://docs.oracle.com/en/java/",
  "Node.js": "https://nodejs.org/docs/",
  "Express.js": "https://expressjs.com/",
  "NestJS": "https://docs.nestjs.com/",
  "GraphQL": "https://graphql.org/learn/",
  "REST APIs": "https://restfulapi.net/",
  "WebSockets": "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API",
  "Microservices": "https://microservices.io/",
  "FastAPI": "https://fastapi.tiangolo.com/",
  "Spring Boot": "https://spring.io/projects/spring-boot",
  "MongoDB": "https://docs.mongodb.com/",
  "PostgreSQL": "https://www.postgresql.org/docs/",
  "MySQL": "https://dev.mysql.com/doc/",
  "Redis": "https://redis.io/documentation",
  "SQLite": "https://www.sqlite.org/docs.html",
  "Mongoose": "https://mongoosejs.com/docs/",
  "Sequelize": "https://sequelize.org/docs/v6/",
  "TypeORM": "https://typeorm.io/",
  "Firebase": "https://firebase.google.com/docs",
  "DynamoDB": "https://docs.aws.amazon.com/dynamodb/",
  "Cassandra": "https://cassandra.apache.org/doc/",
  "Docker": "https://docs.docker.com/",
  "Kubernetes": "https://kubernetes.io/docs/",
  "CI/CD Pipelines": "https://docs.github.com/en/actions",
  "Jenkins": "https://www.jenkins.io/doc/",
  "GitHub Actions": "https://docs.github.com/en/actions",
  "AWS": "https://docs.aws.amazon.com/",
  "GCP": "https://cloud.google.com/docs",
  "Azure": "https://docs.microsoft.com/en-us/azure/",
  "Terraform": "https://www.terraform.io/docs",
  "Ansible": "https://docs.ansible.com/",
  "CircleCI": "https://circleci.com/docs/",
  "CloudFormation": "https://docs.aws.amazon.com/cloudformation/"
}

const TechnologyModal = memo(({ tech, isOpen, onClose }: { tech: (typeof technologies)[0]; isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null

  const handleTechClick = (techName: string) => {
    const docUrl = technologyDocs[techName]
    if (docUrl) {
      window.open(docUrl, '_blank', 'noopener,noreferrer')
    }
  }

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <Card className="backdrop-blur-xl bg-white/10 border-white/20 shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <CardContent className="p-0">
          {/* Header */}
          <div className="p-6 bg-gradient-to-br from-blue-500 to-indigo-600 relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-white/20 shadow-lg">
                    <div className="text-white">{tech.icon}</div>
                  </div>
                  <h3 className="text-white font-bold text-2xl">{tech.category}</h3>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onClose}
                  className="text-white/70"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
              <p className="text-white/90 text-sm leading-relaxed">{tech.details.overview}</p>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Technologies Grid */}
            <div>
              <h4 className="text-white font-semibold mb-4 flex items-center">
                <Star className="w-4 h-4 mr-2 text-yellow-400" />
                Technologies We Use
              </h4>
              <div className="grid grid-cols-3 gap-3">
                {tech.items.map((item, itemIndex) => (
                  <Badge 
                    key={itemIndex} 
                    className="bg-blue-500/20 text-blue-200 border-blue-400/30 text-xs px-3 py-2 text-center justify-center cursor-pointer hover:scale-105 transition-transform"
                    onClick={() => handleTechClick(item)}
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Key Benefits */}
            <div>
              <h4 className="text-white font-semibold mb-4 flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                Key Benefits
              </h4>
              <div className="grid grid-cols-1 gap-3">
                {tech.details.keyBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start text-sm text-white/80">
                    <div className="w-2 h-2 rounded-full bg-green-400 mt-2 mr-3 flex-shrink-0"></div>
                    {benefit}
                  </div>
                ))}
              </div>
            </div>

            {/* Use Cases */}
            <div>
              <h4 className="text-white font-semibold mb-4 flex items-center">
                <Target className="w-4 h-4 mr-2 text-blue-400" />
                Common Use Cases
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {tech.details.useCases.map((useCase, index) => (
                  <div key={index} className="flex items-center text-sm text-white/80 bg-white/5 rounded-lg p-3">
                    <ArrowRight className="w-3 h-3 mr-2 text-blue-400 flex-shrink-0" />
                    {useCase}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
})

TechnologyModal.displayName = "TechnologyModal"

const ProcessModal = memo(({ process, isOpen, onClose }: { process: (typeof developmentProcess)[0]; isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <Card className="backdrop-blur-xl bg-white/10 border-white/20 shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <CardContent className="p-0">
          {/* Header */}
          <div className="p-6 bg-white/10 border-b border-white/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-white/20 shadow-lg border border-white/30">
                    <div className="text-white">{process.icon}</div>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-2xl">{process.title}</h3>
                    <Badge className="bg-white/20 text-white border-white/30 text-xs mt-1">
                      Step {process.step} • {process.duration}
                    </Badge>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onClose}
                  className="text-white/70"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
              <p className="text-white/90 text-sm leading-relaxed">{process.details.overview}</p>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Key Activities */}
            <div>
              <h4 className="text-white font-semibold mb-4 flex items-center">
                <Star className="w-4 h-4 mr-2 text-yellow-400" />
                Key Activities
              </h4>
              <div className="grid grid-cols-1 gap-3">
                {process.details.keyActivities.map((activity, index) => (
                  <div key={index} className="flex items-start text-sm text-white/80">
                    <div className="w-2 h-2 rounded-full bg-yellow-400 mt-2 mr-3 flex-shrink-0"></div>
                    {activity}
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables */}
            <div>
              <h4 className="text-white font-semibold mb-4 flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                Deliverables
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {process.details.deliverables.map((deliverable, index) => (
                  <div key={index} className="flex items-center text-sm text-white/80 bg-white/5 rounded-lg p-3">
                    <ArrowRight className="w-3 h-3 mr-2 text-green-400 flex-shrink-0" />
                    {deliverable}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
})

ProcessModal.displayName = "ProcessModal"

const TechnologyCard = memo(({ tech, index, onClick }: { tech: (typeof technologies)[0]; index: number; onClick: () => void }) => (
  <Card
    className="backdrop-blur-xl bg-white/5 border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-500 group cursor-pointer hover:scale-105 overflow-hidden h-[380px] flex flex-col"
    onClick={onClick}
  >
    <CardContent className="p-0 flex flex-col h-full">
      {/* Enhanced Header with Gradient */}
      <div className="p-4 bg-gradient-to-br from-blue-500 to-indigo-600 relative overflow-hidden flex-shrink-0">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-12 translate-x-12"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full translate-y-8 -translate-x-8"></div>
        
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-3">
            <div className="p-2 rounded-lg bg-white/20 shadow-lg backdrop-blur-sm">
              <div className="text-white">{tech.icon}</div>
            </div>
            <Badge className="bg-white/20 text-white border-0 text-xs backdrop-blur-sm">
              {tech.items.length}
            </Badge>
          </div>
          <h3 className="text-white font-bold text-lg mb-2">{tech.category}</h3>
          <p className="text-white/90 text-xs leading-relaxed">{tech.description}</p>
        </div>
      </div>

      {/* Enhanced Content Section */}
      <div className="p-4 flex-grow flex flex-col">
        {/* Featured Technologies */}
        <div className="mb-4 flex-grow">
          <h4 className="text-white/80 font-medium text-xs mb-3 flex items-center">
            <Star className="w-3 h-3 mr-1 text-yellow-400" />
            Top Technologies
          </h4>
          <div className="grid grid-cols-2 gap-2">
            {tech.items.slice(0, 8).map((item, itemIndex) => (
              <div key={itemIndex} className="flex items-center text-xs text-white/70 bg-white/5 rounded p-2 hover:bg-white/10 transition-colors">
                <div className="w-1 h-1 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 mr-2 flex-shrink-0"></div>
                <span className="truncate">{item}</span>
              </div>
            ))}
          </div>
          {tech.items.length > 8 && (
            <div className="text-center mt-3">
              <span className="text-white/60 text-xs">+{tech.items.length - 8} more technologies</span>
            </div>
          )}
        </div>

        {/* Action Button */}
        <div className="mt-auto pt-3">
          <Button
            variant="ghost"
            size="sm"
            className="w-full text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300 group-hover:bg-white/10 text-xs py-2"
          >
            <ExternalLink className="w-3 h-3 mr-1" />
            Explore Technologies
          </Button>
        </div>
      </div>
    </CardContent>
  </Card>
))

TechnologyCard.displayName = "TechnologyCard"

const ServiceCard = memo(({ service, index }: { service: (typeof services)[0]; index: number }) => (
  <Card
    key={index}
    className="backdrop-blur-xl bg-white/5 border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-300 group min-h-[400px] flex flex-col overflow-hidden"
  >
    <CardContent className="p-0 flex flex-col h-full">
      {/* Gradient Header */}
      <div className={`p-6 bg-gradient-to-br ${service.gradient} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-xl bg-white/20 shadow-lg">
              <div className="text-white">{service.icon}</div>
            </div>
            <div className="flex gap-2">
              {Object.entries(service.metrics).map(([key, value]) => (
                <div key={key} className="text-center">
                  <div className="text-white font-bold text-sm">{value}</div>
                  <div className="text-white/80 text-xs capitalize">{key}</div>
                </div>
              ))}
            </div>
          </div>
          <h3 className="text-white font-bold text-xl mb-3">{service.title}</h3>
          <p className="text-white/90 text-sm leading-relaxed">{service.description}</p>
        </div>
      </div>

      {/* Features */}
      <div className="p-6 flex-grow">
        <h4 className="text-white font-semibold mb-4 flex items-center">
          <Star className="w-4 h-4 mr-2 text-yellow-400" />
          Key Features
        </h4>
        <div className="grid grid-cols-1 gap-3">
          {service.features.map((feature, featureIndex) => (
            <div key={featureIndex} className="flex items-center text-sm text-white/80 transition-colors">
              <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
              {feature}
            </div>
          ))}
        </div>
      </div>
    </CardContent>
  </Card>
))

ServiceCard.displayName = "ServiceCard"

const ProjectCard = memo(({ project, index }: { project: (typeof showcaseProjects)[0]; index: number }) => (
  <Card
    key={index}
    className="backdrop-blur-xl bg-white/5 border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-300 group overflow-hidden"
  >
    <CardContent className="p-0">
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
        <div className="absolute top-4 left-4">
          <Badge className="bg-black/50 text-white border-0 text-xs">
            {project.category}
          </Badge>
        </div>
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="p-2 rounded-full bg-white/20 backdrop-blur-sm">
            <ExternalLink className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-white font-bold text-lg mb-2">
          {project.title}
        </h3>
        <p className="text-white/80 text-sm mb-4 leading-relaxed">{project.description}</p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-1 mb-4">
          {project.technologies.map((tech, techIndex) => (
            <Badge key={techIndex} className="bg-blue-500/20 text-blue-200 border-blue-400/30 text-[10px] px-2 py-1">
              {tech}
            </Badge>
          ))}
        </div>

        {/* Metrics */}
        <div className="flex justify-between items-center pt-4 border-t border-white/10">
          {Object.entries(project.metrics).map(([key, value]) => (
            <div key={key} className="text-center">
              <div className="text-green-400 font-bold text-sm">{value}</div>
              <div className="text-white/60 text-xs capitalize">{key}</div>
            </div>
          ))}
        </div>
      </div>
    </CardContent>
  </Card>
))

ProjectCard.displayName = "ProjectCard"

const ProcessCard = memo(({ process, index, onClick }: { process: (typeof developmentProcess)[0]; index: number; onClick: () => void }) => (
  <Card
    className="backdrop-blur-xl bg-white/5 border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-500 group cursor-pointer hover:scale-105 overflow-hidden h-[280px] relative"
    onClick={onClick}
  >
    <CardContent className="p-6 h-full flex flex-col">
      {/* Step Number Badge */}
      <div className="absolute top-4 right-4 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
        <span className="text-white font-bold text-lg">{process.step}</span>
      </div>
      
      {/* Icon */}
      <div className="mb-4">
        <div className="p-3 rounded-xl bg-white/10 shadow-lg backdrop-blur-sm inline-flex border border-white/20">
          <div className="text-white">{process.icon}</div>
        </div>
      </div>
      
      {/* Content */}
      <div className="flex-grow">
        <h3 className="text-white font-bold text-xl mb-3">
          {process.title}
        </h3>
        <p className="text-white/80 text-sm leading-relaxed mb-4">{process.description}</p>
      </div>
      
      {/* Duration Badge */}
      <div className="mt-auto">
        <Badge className="bg-white/10 text-white border-white/20 text-xs backdrop-blur-sm">
          {process.duration}
        </Badge>
      </div>
    </CardContent>
  </Card>
))

ProcessCard.displayName = "ProcessCard"

export default function WebDevelopmentPage() {
  const router = useRouter()
  const [selectedTech, setSelectedTech] = useState<(typeof technologies)[0] | null>(null)
  const [selectedProcess, setSelectedProcess] = useState<(typeof developmentProcess)[0] | null>(null)

  const handleStartProject = useCallback(() => {
    router.push("/#contact")
    setTimeout(() => {
      const element = document.getElementById("contact")
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }, 100)
  }, [router])

  const handleViewPortfolio = useCallback(() => {
    router.push("/portfolio")
  }, [router])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Enhanced Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-10 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-cyan-600 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-6000"></div>
        </div>
      </div>

      <div className="relative z-10">
        <Navigation />

        {/* Hero Section */}
        <section className="pt-24 pb-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Left Content */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Badge className="bg-blue-500/20 text-blue-200 border-blue-400/30 text-sm px-3 py-1">
                      Full-Stack Development
                    </Badge>
                  </div>
                  
                  <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent leading-tight">
                    Modern Web
                    <br />
                    <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                      Development
                    </span>
                  </h1>
                  
                  <p className="text-white/80 text-base leading-relaxed max-w-xl">
                    We craft exceptional web experiences using cutting-edge technologies. From concept to deployment, 
                    we build scalable, performant applications that drive business growth and user engagement.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: "Projects Delivered", value: "150+", icon: <Award className="w-4 h-4" /> },
                    { label: "Client Satisfaction", value: "100%", icon: <Users className="w-4 h-4" /> },
                    { label: "Avg Load Time", value: "< 2s", icon: <Zap className="w-4 h-4" /> },
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="flex items-center justify-center mb-2 text-blue-300">
                        {stat.icon}
                      </div>
                      <div className="text-xl font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-white/60 text-xs">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-3">
                  <Button
                    onClick={handleStartProject}
                    className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white border-0 hover:scale-105 transition-all font-medium shadow-lg"
                  >
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Start Your Project
                  </Button>
                  <Button
                    onClick={handleViewPortfolio}
                    variant="outline"
                    className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:scale-105 transition-all"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Portfolio
                  </Button>
                </div>
              </div>

              {/* Right Content - Interactive Demo */}
              <div className="relative">
                <Card className="backdrop-blur-xl bg-white/5 border-white/10 shadow-2xl overflow-hidden">
                  <CardContent className="p-0">
                    {/* Mock Browser */}
                    <div className="bg-gradient-to-r from-slate-700 to-slate-800 p-4 border-b border-white/10">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-400"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                          <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        </div>
                        <div className="flex-grow bg-white/10 rounded px-3 py-1 text-white/60 text-sm">
                          https://your-amazing-app.com
                        </div>
                      </div>
                    </div>
                    
                    {/* Mock App Interface */}
                    <div className="p-6 space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-2">
                          <div className="h-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded w-32"></div>
                          <div className="h-3 bg-white/20 rounded w-48"></div>
                        </div>
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl"></div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        {[1, 2, 3, 4].map((i) => (
                          <div key={i} className="space-y-2">
                            <div className="h-16 bg-gradient-to-br from-white/10 to-white/5 rounded-lg border border-white/10"></div>
                            <div className="h-2 bg-white/20 rounded w-3/4"></div>
                            <div className="h-2 bg-white/10 rounded w-1/2"></div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex gap-2 pt-4">
                        <div className="h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded flex-grow"></div>
                        <div className="h-8 w-8 bg-white/20 rounded"></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 p-3 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 shadow-lg animate-bounce">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg animate-pulse">
                  <Cpu className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Development Process Section */}
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <Badge className="bg-blue-500/20 text-blue-200 border-blue-400/30 text-sm px-3 py-1 mb-3">
                Our Process
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                From Concept to Launch
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto text-sm">
                Our proven development methodology ensures successful project delivery with transparency and quality at every step.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {developmentProcess.map((process, index) => (
                <ProcessCard 
                  key={process.step} 
                  process={process} 
                  index={index} 
                  onClick={() => setSelectedProcess(process)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section - Completely Redesigned */}
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="bg-blue-500/20 text-blue-200 border-blue-400/30 text-sm px-3 py-1 mb-3">
                Technology Stack
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Cutting-Edge Technologies
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto text-sm">
                We leverage the latest technologies and frameworks to build robust, scalable applications that stand the test of time.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {technologies.map((tech, index) => (
                <TechnologyCard 
                  key={tech.category} 
                  tech={tech} 
                  index={index} 
                  onClick={() => setSelectedTech(tech)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <Badge className="bg-blue-500/20 text-blue-200 border-blue-400/30 text-sm px-3 py-1 mb-3">
                Our Services
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Comprehensive Web Solutions
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto text-sm">
                From simple websites to complex enterprise applications, we deliver solutions that drive results and exceed expectations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <ServiceCard key={service.title} service={service} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Showcase Projects Section */}
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <Badge className="bg-blue-500/20 text-blue-200 border-blue-400/30 text-sm px-3 py-1 mb-3">
                Success Stories
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Featured Projects
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto text-sm">
                Explore some of our recent web development projects that showcase our expertise and deliver exceptional results.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {showcaseProjects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-8 px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="backdrop-blur-xl bg-gradient-to-r from-blue-900/30 to-blue-900/30 border-blue-500/20 shadow-2xl overflow-hidden">
              <CardContent className="p-12 text-center relative">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/10 to-blue-600/10"></div>
                <div className="relative z-10">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-full inline-flex mb-6">
                    <Rocket className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    Ready to Build Something Amazing?
                  </h2>
                  <p className="text-white/90 mb-6 max-w-2xl mx-auto text-sm">
                    Let's discuss your project requirements and create a custom web solution that drives your business forward and delights your users.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Button
                      onClick={handleStartProject}
                      className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white border-0 hover:scale-105 transition-all font-medium shadow-lg px-8 py-3"
                    >
                      Get Started Today
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                    <Button
                      onClick={handleViewPortfolio}
                      variant="outline"
                      className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:scale-105 transition-all px-8 py-3"
                    >
                      View Full Portfolio
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Footer - Exact same as QA automation page */}
        <section className="py-8 px-4 border-t border-white/10">
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
                      <button className="block text-white/70 hover:text-white transition-colors text-xs text-left">
                        Blog
                      </button>
                      <button className="block text-white/70 hover:text-white transition-colors text-xs text-left">
                        About Us
                      </button>
                      <button className="block text-white/70 hover:text-white transition-colors text-xs text-left">
                        Careers
                      </button>
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
                      >
                        Terms of Service
                      </Link>
                      <Link href="/privacy-policy" className="text-white/60 hover:text-white transition-colors text-xs">
                        Privacy Policy
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>

      {/* Technology Modal */}
      {selectedTech && (
        <TechnologyModal
          tech={selectedTech}
          isOpen={!!selectedTech}
          onClose={() => setSelectedTech(null)}
        />
      )}

      {/* Process Modal */}
      {selectedProcess && (
        <ProcessModal
          process={selectedProcess}
          isOpen={!!selectedProcess}
          onClose={() => setSelectedProcess(null)}
        />
      )}
    </div>
  )
}
