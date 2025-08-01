"use client"

import {
  Shield,
  CheckCircle,
  Target,
  ArrowRight,
  Bug,
  Clock,
  BarChart3,
  Settings,
  PlayCircle,
  FileCheck,
  Activity,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useCallback, memo } from "react"

const technologies = [
  {
    category: "Test Automation",
    icon: <PlayCircle className="w-4 h-4" />,
    items: ["Selenium", "Cypress", "Playwright", "WebDriver", "TestNG", "JUnit"],
    gradient: "gradient-qa-automation",
    badgeClass: "badge-qa-automation",
  },
  {
    category: "API Testing",
    icon: <Settings className="w-4 h-4" />,
    items: ["Postman", "REST Assured", "Newman", "Insomnia", "SoapUI", "GraphQL"],
    gradient: "gradient-web-dev",
    badgeClass: "badge-web-dev",
  },
  {
    category: "Performance Testing",
    icon: <BarChart3 className="w-4 h-4" />,
    items: ["JMeter", "K6", "LoadRunner", "Artillery", "Gatling", "BlazeMeter"],
    gradient: "gradient-ux-design",
    badgeClass: "badge-ux-design",
  },
  {
    category: "CI/CD Integration",
    icon: <Activity className="w-4 h-4" />,
    items: ["Jenkins", "GitHub Actions", "GitLab CI", "Docker", "Kubernetes", "Azure DevOps"],
    gradient: "gradient-qa-automation",
    badgeClass: "badge-qa-automation",
  },
]

const services = [
  {
    title: "Test Automation Framework",
    description: "Custom automation frameworks tailored to your application architecture.",
    features: ["Cross-browser Testing", "Parallel Execution", "Detailed Reporting", "CI/CD Integration"],
    icon: <Shield className="w-5 h-5" />,
  },
  {
    title: "API Testing Suite",
    description: "Comprehensive API testing covering functionality, performance, and security.",
    features: ["REST & GraphQL", "Data Validation", "Error Handling", "Load Testing"],
    icon: <Target className="w-5 h-5" />,
  },
  {
    title: "Performance Testing",
    description: "Load, stress, and performance testing to ensure optimal application performance.",
    features: ["Load Testing", "Stress Testing", "Volume Testing", "Performance Monitoring"],
    icon: <BarChart3 className="w-5 h-5" />,
  },
  {
    title: "Mobile Testing",
    description: "Automated testing for mobile applications across different devices and platforms.",
    features: ["iOS & Android", "Device Testing", "Responsive Testing", "App Store Testing"],
    icon: <FileCheck className="w-5 h-5" />,
  },
]

const benefits = [
  {
    title: "60% Faster Testing",
    description: "Automated tests run significantly faster than manual testing",
    icon: <Clock className="w-6 h-6" />,
    gradient: "gradient-web-dev",
  },
  {
    title: "95% Bug Detection",
    description: "Early detection of critical bugs before production deployment",
    icon: <Bug className="w-6 h-6" />,
    gradient: "gradient-qa-automation",
  },
  {
    title: "80% Cost Reduction",
    description: "Significant reduction in testing costs through automation",
    icon: <BarChart3 className="w-6 h-6" />,
    gradient: "gradient-ux-design",
  },
]

const projects = [
  {
    title: "E-commerce Testing Suite",
    description: "Complete automation framework for online shopping platform",
    technologies: ["Selenium", "TestNG", "Jenkins", "Allure"],
    metrics: "500+ test cases automated",
  },
  {
    title: "API Testing Framework",
    description: "Comprehensive API testing solution for microservices architecture",
    technologies: ["REST Assured", "Postman", "Newman", "Docker"],
    metrics: "200+ API endpoints covered",
  },
  {
    title: "Mobile App Testing",
    description: "Cross-platform mobile testing automation for iOS and Android",
    technologies: ["Appium", "TestNG", "BrowserStack", "Firebase"],
    metrics: "50+ devices tested simultaneously",
  },
]

const BenefitCard = memo(({ benefit, index }: { benefit: (typeof benefits)[0]; index: number }) => (
  <Card
    key={index}
    className="backdrop-blur-xl bg-white/5 border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-300 group hover:scale-105"
  >
    <CardContent className="p-6 text-center">
      <div className={`inline-flex p-3 rounded-full ${benefit.gradient} mb-4`}>
        <div className="text-white">{benefit.icon}</div>
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
      <p className="text-white/80 text-sm">{benefit.description}</p>
    </CardContent>
  </Card>
))

BenefitCard.displayName = "BenefitCard"

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
        <div className="p-3 rounded-xl gradient-qa-automation mr-4 mt-1 shadow-lg">{service.icon}</div>
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
          <Badge key={techIndex} className="badge-qa-automation text-[10px] px-1 py-0">
            {tech}
          </Badge>
        ))}
      </div>
      <div className="flex items-center text-green-400 text-sm">
        <CheckCircle className="w-3 h-3 mr-1" />
        {project.metrics}
      </div>
    </CardContent>
  </Card>
))

ProjectCard.displayName = "ProjectCard"

export default function QAAutomationPage() {
  const router = useRouter()

  const handleStartTesting = useCallback(() => {
    router.push("/#contact")
    setTimeout(() => {
      const element = document.getElementById("contact")
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }, 100)
  }, [router])

  const handleViewReports = useCallback(() => {
    router.push("/portfolio")
  }, [router])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-10 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-600 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-emerald-600 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-teal-600 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      <div className="relative z-10">
        <Navigation />

        {/* Hero Section */}
        <section className="pt-20 pb-12 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <Card className="backdrop-blur-xl bg-white/5 border-white/10 shadow-2xl">
              <CardContent className="p-8">
                <div className="inline-flex p-4 rounded-full gradient-qa-automation mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent mb-4">
                  QA Automation
                </h1>
                <p className="text-white/80 text-lg max-w-3xl mx-auto mb-6">
                  Ensure the highest quality of your software with our comprehensive QA automation solutions. We create
                  robust testing frameworks that catch bugs early and accelerate your development cycle.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Button
                    onClick={handleStartTesting}
                    className="gradient-qa-automation text-white border-0 hover:scale-105 transition-all font-medium shadow-lg"
                  >
                    Start Testing
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

        {/* Benefits Section */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Why Choose QA Automation?</h2>
              <p className="text-white/80 max-w-2xl mx-auto text-sm">
                Automated testing delivers measurable benefits that transform your development process.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <BenefitCard key={benefit.title} benefit={benefit} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Testing Technologies & Tools</h2>
              <p className="text-white/80 max-w-2xl mx-auto text-sm">
                We use industry-leading tools and frameworks to deliver comprehensive testing solutions.
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
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Our QA Automation Services</h2>
              <p className="text-white/80 max-w-2xl mx-auto text-sm">
                Comprehensive testing solutions covering all aspects of quality assurance.
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
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Testing Success Stories</h2>
              <p className="text-white/80 max-w-2xl mx-auto text-sm">
                Real projects where our QA automation solutions delivered exceptional results.
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
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Ready to Automate Your Testing Process?
                </h2>
                <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                  Let's discuss your testing requirements and create a comprehensive QA automation strategy that ensures
                  your software quality.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Button
                    onClick={handleStartTesting}
                    className="gradient-qa-automation text-white border-0 hover:scale-105 transition-all font-medium shadow-lg"
                  >
                    Start Testing Today
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button
                    onClick={handleViewReports}
                    variant="outline"
                    className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:scale-105 transition-all"
                  >
                    View Test Reports
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
