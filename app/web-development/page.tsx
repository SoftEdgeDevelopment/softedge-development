"use client"

import { Code, Database, Server, Globe, ArrowRight, CheckCircle, Star, Smartphone, Cloud, Layers } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useCallback, memo } from "react"

const technologies = [
  {
    category: "Frontend",
    icon: <Code className="w-4 h-4" />,
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "Angular"],
    gradient: "gradient-web-dev",
    badgeClass: "badge-web-dev",
  },
  {
    category: "Backend",
    icon: <Server className="w-4 h-4" />,
    items: ["Node.js", "Express.js", "Python", "Java", "GraphQL", "REST APIs"],
    gradient: "gradient-qa-automation",
    badgeClass: "badge-qa-automation",
  },
  {
    category: "Database",
    icon: <Database className="w-4 h-4" />,
    items: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase", "DynamoDB"],
    gradient: "gradient-ux-design",
    badgeClass: "badge-ux-design",
  },
  {
    category: "Cloud & DevOps",
    icon: <Cloud className="w-4 h-4" />,
    items: ["AWS", "GCP", "Docker", "Kubernetes", "CI/CD", "Vercel"],
    gradient: "gradient-web-dev",
    badgeClass: "badge-web-dev",
  },
]

const services = [
  {
    title: "Custom Web Applications",
    description: "Tailored web solutions built with modern frameworks and best practices.",
    features: ["Responsive Design", "Performance Optimization", "SEO Ready", "Cross-browser Compatible"],
    icon: <Globe className="w-5 h-5" />,
  },
  {
    title: "E-commerce Solutions",
    description: "Complete online stores with payment integration and inventory management.",
    features: ["Payment Gateway", "Inventory System", "Admin Dashboard", "Mobile Optimized"],
    icon: <Smartphone className="w-5 h-5" />,
  },
  {
    title: "API Development",
    description: "Robust and scalable APIs for seamless data integration and communication.",
    features: ["RESTful APIs", "GraphQL", "Authentication", "Rate Limiting"],
    icon: <Layers className="w-5 h-5" />,
  },
  {
    title: "Cloud Deployment",
    description: "Scalable cloud infrastructure with automated deployment and monitoring.",
    features: ["Auto Scaling", "Load Balancing", "Monitoring", "Backup Systems"],
    icon: <Cloud className="w-5 h-5" />,
  },
]

const projects = [
  {
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    metrics: "50% increase in sales",
  },
  {
    title: "SaaS Dashboard",
    description: "Analytics dashboard with real-time data visualization",
    technologies: ["Next.js", "PostgreSQL", "Chart.js", "AWS"],
    metrics: "10x faster data processing",
  },
  {
    title: "Mobile-First PWA",
    description: "Progressive web app with offline capabilities",
    technologies: ["Vue.js", "Service Workers", "Firebase", "PWA"],
    metrics: "90% mobile engagement",
  },
]

const TechnologyCard = memo(({ tech, index }: { tech: (typeof technologies)[0]; index: number }) => (
  <Card
    key={index}
    className="backdrop-blur-xl bg-white/5 border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-300 group min-h-[200px] flex flex-col"
  >
    <CardContent className="p-6 flex flex-col h-full">
      <div className="text-center mb-4">
        <div className={`inline-flex p-3 rounded-full ${tech.gradient} mb-3`}>
          <div className="text-white">{tech.icon}</div>
        </div>
        <h3 className="text-white font-bold text-lg mb-3">{tech.category}</h3>
      </div>
      <div className="tech-grid flex-grow">
        {tech.items.map((item, itemIndex) => (
          <Badge key={itemIndex} className={`${tech.badgeClass} text-xs px-2 py-1 text-center justify-center`}>
            {item}
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
))

TechnologyCard.displayName = "TechnologyCard"

const ServiceCard = memo(({ service, index }: { service: (typeof services)[0]; index: number }) => (
  <Card
    key={index}
    className="backdrop-blur-xl bg-white/5 border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-300 group min-h-[280px] flex flex-col"
  >
    <CardContent className="p-6 flex flex-col h-full">
      <div className="flex items-start mb-4">
        <div className="p-3 rounded-xl gradient-web-dev mr-4 mt-1 shadow-lg">{service.icon}</div>
        <div className="flex-grow">
          <h3 className="text-white font-bold text-xl mb-3">{service.title}</h3>
          <p className="text-white/80 text-sm mb-4 leading-relaxed">{service.description}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 mt-auto">
        {service.features.map((feature, featureIndex) => (
          <div key={featureIndex} className="flex items-center text-sm text-white/70">
            <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
            {feature}
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
))

ServiceCard.displayName = "ServiceCard"

const ProjectCard = memo(({ project, index }: { project: (typeof projects)[0]; index: number }) => (
  <Card
    key={index}
    className="backdrop-blur-xl bg-white/5 border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-300 group hover:scale-105"
  >
    <CardContent className="p-5">
      <h3 className="text-white font-bold text-lg mb-2">{project.title}</h3>
      <p className="text-white/80 text-sm mb-3">{project.description}</p>
      <div className="flex flex-wrap gap-1 mb-3">
        {project.technologies.map((tech, techIndex) => (
          <Badge key={techIndex} className="badge-web-dev text-[10px] px-1 py-0">
            {tech}
          </Badge>
        ))}
      </div>
      <div className="flex items-center text-green-400 text-sm">
        <Star className="w-3 h-3 mr-1" />
        {project.metrics}
      </div>
    </CardContent>
  </Card>
))

ProjectCard.displayName = "ProjectCard"

export default function WebDevelopmentPage() {
  const router = useRouter()

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
      {/* Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-10 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-cyan-600 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      <div className="relative z-10">
        <Navigation />

        {/* Hero Section */}
        <section className="pt-20 pb-12 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <Card className="backdrop-blur-xl bg-white/5 border-white/10 shadow-2xl">
              <CardContent className="p-8">
                <div className="inline-flex p-4 rounded-full gradient-web-dev mb-6">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-4">
                  Web Development
                </h1>
                <p className="text-white/80 text-lg max-w-3xl mx-auto mb-6">
                  We create modern, scalable, and high-performance web applications using cutting-edge technologies and
                  best practices. From concept to deployment, we deliver solutions that drive business growth.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Button
                    onClick={handleStartProject}
                    className="gradient-web-dev text-white border-0 hover:scale-105 transition-all font-medium shadow-lg"
                  >
                    Start Your Project
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Link href="/">
                    <Button
                      variant="outline"
                      className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:scale-105 transition-all"
                    >
                      Back to Home
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Technologies We Use</h2>
              <p className="text-white/80 max-w-2xl mx-auto text-sm">
                We leverage the latest technologies and frameworks to build robust, scalable web applications.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {technologies.map((tech, index) => (
                <TechnologyCard key={tech.category} tech={tech} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Our Web Development Services</h2>
              <p className="text-white/80 max-w-2xl mx-auto text-sm">
                Comprehensive web development solutions tailored to your business needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <ServiceCard key={service.title} service={service} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Featured Projects</h2>
              <p className="text-white/80 max-w-2xl mx-auto text-sm">
                Some of our recent web development projects that showcase our expertise and results.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="backdrop-blur-xl bg-white/5 border-white/10 shadow-2xl">
              <CardContent className="p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Build Your Web Application?</h2>
                <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                  Let's discuss your project requirements and create a custom web solution that drives your business
                  forward.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Button
                    onClick={handleStartProject}
                    className="gradient-web-dev text-white border-0 hover:scale-105 transition-all font-medium shadow-lg"
                  >
                    Get Started Today
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button
                    onClick={handleViewPortfolio}
                    variant="outline"
                    className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:scale-105 transition-all"
                  >
                    View Portfolio
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}
