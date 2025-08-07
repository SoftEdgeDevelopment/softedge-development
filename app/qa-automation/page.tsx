"use client"

import { Shield, CheckCircle, Target, ArrowRight, Bug, Clock, BarChart3, Settings, PlayCircle, FileCheck, Activity, Zap, TrendingUp, Users, Globe, Database, Smartphone, Monitor, Code, AlertTriangle, CheckSquare, ChevronDown, ChevronUp, Star, ExternalLink, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useCallback, memo, useState } from "react"

const testingStats = [
  { label: "Test Cases Automated", value: "2,500+", icon: <CheckSquare className="w-5 h-5" /> },
  { label: "Bugs Prevented", value: "1,200+", icon: <Bug className="w-5 h-5" /> },
  { label: "Testing Speed Increase", value: "85%", icon: <Zap className="w-5 h-5" /> },
  { label: "Cost Reduction", value: "70%", icon: <TrendingUp className="w-5 h-5" /> },
]

const testingApproaches = [
  {
    title: "Functional Testing",
    description: "Comprehensive validation of application functionality",
    icon: <CheckCircle className="w-6 h-6" />,
    features: ["Unit Testing", "Integration Testing", "System Testing", "User Acceptance Testing"],
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "Performance Testing",
    description: "Ensuring optimal application performance under load",
    icon: <BarChart3 className="w-6 h-6" />,
    features: ["Load Testing", "Stress Testing", "Volume Testing", "Spike Testing"],
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "Security Testing",
    description: "Identifying vulnerabilities and security flaws",
    icon: <Shield className="w-6 h-6" />,
    features: ["Penetration Testing", "Vulnerability Assessment", "Authentication Testing", "Data Protection"],
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "Mobile Testing",
    description: "Cross-platform mobile application validation",
    icon: <Smartphone className="w-6 h-6" />,
    features: ["Device Testing", "OS Compatibility", "Performance Testing", "Usability Testing"],
    color: "from-green-500 to-emerald-600",
  },
]

const automationTools = [
  {
    category: "Web Automation",
    tools: [
      { name: "Selenium WebDriver", expertise: 95, description: "Cross-browser automation" },
      { name: "Cypress", expertise: 90, description: "Modern web testing" },
      { name: "Playwright", expertise: 85, description: "Multi-browser automation" },
      { name: "TestCafe", expertise: 80, description: "Node.js web testing" },
    ],
    icon: <Globe className="w-5 h-5" />,
    gradient: "gradient-qa-automation",
    badgeClass: "badge-qa-automation",
    description: "Advanced web automation tools for comprehensive browser testing and validation",
    details: {
      overview: "We specialize in cutting-edge web automation technologies that deliver comprehensive testing coverage across all browsers and platforms. Our expertise spans the most powerful and reliable testing frameworks in the industry.",
      keyBenefits: [
        "Cross-browser compatibility testing",
        "Parallel test execution for faster results",
        "Advanced element detection and interaction",
        "Comprehensive reporting and analytics",
        "CI/CD pipeline integration",
        "Real-time test monitoring and alerts"
      ],
      useCases: [
        "End-to-end user journey testing",
        "Regression testing automation",
        "Cross-browser compatibility validation",
        "Performance and load testing",
        "API testing and validation",
        "Mobile web application testing"
      ]
    }
  },
  {
    category: "API Testing",
    tools: [
      { name: "Postman", expertise: 95, description: "API development & testing" },
      { name: "REST Assured", expertise: 90, description: "Java API testing" },
      { name: "Newman", expertise: 85, description: "Command line collection runner" },
      { name: "Insomnia", expertise: 80, description: "API client & testing" },
    ],
    icon: <Database className="w-5 h-5" />,
    gradient: "gradient-web-dev",
    badgeClass: "badge-web-dev",
    description: "Comprehensive API testing solutions for robust backend validation and integration testing",
    details: {
      overview: "Our API testing expertise ensures your backend services are reliable, secure, and performant. We use industry-leading tools to validate API functionality, performance, and security.",
      keyBenefits: [
        "Automated API endpoint validation",
        "Performance and load testing",
        "Security vulnerability assessment",
        "Data validation and schema testing",
        "Integration testing automation",
        "Comprehensive test reporting"
      ],
      useCases: [
        "RESTful API testing",
        "GraphQL endpoint validation",
        "Microservices testing",
        "Third-party API integration",
        "Database connectivity testing",
        "Authentication and authorization testing"
      ]
    }
  },
  {
    category: "Mobile Testing",
    tools: [
      { name: "Appium", expertise: 90, description: "Cross-platform mobile automation" },
      { name: "Espresso", expertise: 85, description: "Android UI testing" },
      { name: "XCUITest", expertise: 80, description: "iOS automation framework" },
      { name: "Detox", expertise: 75, description: "React Native testing" },
    ],
    icon: <Smartphone className="w-5 h-5" />,
    gradient: "gradient-ux-design",
    badgeClass: "badge-ux-design",
    description: "Advanced mobile testing frameworks for iOS and Android application validation",
    details: {
      overview: "We provide comprehensive mobile testing solutions that ensure your applications work flawlessly across all devices and operating systems. Our mobile testing expertise covers native, hybrid, and cross-platform applications.",
      keyBenefits: [
        "Cross-platform mobile automation",
        "Device-specific testing capabilities",
        "Performance and battery optimization testing",
        "Gesture and touch interaction validation",
        "Network condition simulation",
        "App store compliance testing"
      ],
      useCases: [
        "Native iOS and Android apps",
        "React Native applications",
        "Hybrid mobile applications",
        "Mobile web applications",
        "Wearable device applications",
        "IoT mobile interfaces"
      ]
    }
  },
  {
    category: "Performance Tools",
    tools: [
      { name: "JMeter", expertise: 90, description: "Load testing application" },
      { name: "K6", expertise: 85, description: "Modern load testing" },
      { name: "Gatling", expertise: 80, description: "High-performance testing" },
      { name: "Artillery", expertise: 75, description: "Modern performance toolkit" },
    ],
    icon: <Activity className="w-5 h-5" />,
    gradient: "gradient-mission",
    badgeClass: "badge-mission",
    description: "High-performance testing tools for load, stress, and scalability validation",
    details: {
      overview: "Our performance testing expertise ensures your applications can handle real-world traffic and usage patterns. We use advanced tools to simulate various load conditions and identify performance bottlenecks.",
      keyBenefits: [
        "Scalable load testing scenarios",
        "Real-time performance monitoring",
        "Bottleneck identification and analysis",
        "Stress and spike testing capabilities",
        "Resource utilization optimization",
        "Performance regression detection"
      ],
      useCases: [
        "Web application load testing",
        "API performance validation",
        "Database performance testing",
        "Microservices stress testing",
        "CDN and caching optimization",
        "Mobile app performance testing"
      ]
    }
  },
]

const testingMethodologies = [
  {
    phase: "01",
    title: "Test Strategy & Planning",
    description: "Comprehensive test planning and strategy development",
    duration: "1-2 weeks",
    deliverables: ["Test Strategy Document", "Test Plan", "Risk Assessment", "Resource Planning"],
    icon: <Target className="w-6 h-6" />,
  },
  {
    phase: "02",
    title: "Framework Development",
    description: "Building robust and scalable automation frameworks",
    duration: "2-3 weeks",
    deliverables: ["Automation Framework", "Test Data Management", "Reporting Setup", "CI/CD Integration"],
    icon: <Code className="w-6 h-6" />,
  },
  {
    phase: "03",
    title: "Test Implementation",
    description: "Creating comprehensive test suites and scenarios",
    duration: "3-4 weeks",
    deliverables: ["Automated Test Scripts", "Test Data Sets", "Environment Setup", "Smoke Tests"],
    icon: <Settings className="w-6 h-6" />,
  },
  {
    phase: "04",
    title: "Execution & Monitoring",
    description: "Continuous testing execution and result analysis",
    duration: "Ongoing",
    deliverables: ["Test Execution Reports", "Defect Reports", "Performance Metrics", "Maintenance"],
    icon: <Monitor className="w-6 h-6" />,
  },
]

const successMetrics = [
  {
    metric: "99.5%",
    label: "Test Coverage",
    description: "Comprehensive coverage across all application layers",
    icon: <CheckCircle className="w-8 h-8" />,
    trend: "+15%",
  },
  {
    metric: "60%",
    label: "Faster Releases",
    description: "Accelerated deployment cycles through automation",
    icon: <Clock className="w-8 h-8" />,
    trend: "+25%",
  },
  {
    metric: "85%",
    label: "Bug Reduction",
    description: "Significant decrease in production defects",
    icon: <Bug className="w-8 h-8" />,
    trend: "+30%",
  },
  {
    metric: "70%",
    label: "Cost Savings",
    description: "Reduced testing costs through automation",
    icon: <TrendingUp className="w-8 h-8" />,
    trend: "+20%",
  },
]

const technologyDocs: Record<string, string> = {
  "Selenium WebDriver": "https://selenium.dev/documentation/",
  "Cypress": "https://docs.cypress.io/",
  "Playwright": "https://playwright.dev/docs/",
  "TestCafe": "https://testcafe.io/documentation/",
  "Postman": "https://learning.postman.com/docs/",
  "REST Assured": "https://rest-assured.io/",
  "Newman": "https://learning.postman.com/docs/collections/using-newman-cli/",
  "Insomnia": "https://docs.insomnia.rest/",
  "Appium": "https://appium.io/docs/",
  "Espresso": "https://developer.android.com/training/testing/espresso",
  "XCUITest": "https://developer.apple.com/documentation/xctest",
  "Detox": "https://wix.github.io/Detox/",
  "JMeter": "https://jmeter.apache.org/usermanual/",
  "K6": "https://k6.io/docs/",
  "Gatling": "https://gatling.io/docs/",
  "Artillery": "https://www.artillery.io/docs"
}

const AutomationModal = memo(({ tool, isOpen, onClose }: { tool: (typeof automationTools)[0]; isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null

  const handleTechClick = (techName: string) => {
    const docUrl = technologyDocs[techName]
    if (docUrl) {
      window.open(docUrl, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="backdrop-blur-xl bg-white/10 border-white/20 shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <CardContent className="p-0">
          {/* Header */}
          <div className={`p-6 bg-gradient-to-br ${tool.gradient} relative overflow-hidden`}>
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-white/20 shadow-lg">
                    <div className="text-white">{tool.icon}</div>
                  </div>
                  <h3 className="text-white font-bold text-2xl">{tool.category}</h3>
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
              <p className="text-white/90 text-sm leading-relaxed">{tool.details.overview}</p>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Technologies Grid */}
            <div>
              <h4 className="text-white font-semibold mb-4 flex items-center">
                <Star className="w-4 h-4 mr-2 text-yellow-400" />
                Tools & Frameworks
              </h4>
              <div className="space-y-4">
                {tool.tools.map((techTool, index) => (
                  <div key={index} className="p-4 rounded-lg bg-white/5 border border-white/10">
                    <div className="flex justify-between items-center mb-2">
                      <h5 className="text-white font-semibold cursor-pointer" onClick={() => handleTechClick(techTool.name)}>
                        {techTool.name}
                      </h5>
                      <span className="text-green-400 font-bold text-sm">{techTool.expertise}% Expertise</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2 mb-3">
                      <div
                        className="bg-gradient-to-r from-green-400 to-emerald-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${techTool.expertise}%` }}
                      ></div>
                    </div>
                    <p className="text-white/70 text-sm">{techTool.description}</p>
                  </div>
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
                {tool.details.keyBenefits.map((benefit, index) => (
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
                {tool.details.useCases.map((useCase, index) => (
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

AutomationModal.displayName = "AutomationModal"

const TestingApproachCard = memo(({ approach, index }: { approach: (typeof testingApproaches)[0]; index: number }) => (
  <Card className="backdrop-blur-xl bg-white/5 border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-500 group hover:scale-105 overflow-hidden">
    <CardContent className="p-0">
      <div className={`bg-gradient-to-r ${approach.color} p-6 text-white`}>
        <div className="flex items-center mb-3">
          {approach.icon}
          <h3 className="text-xl font-bold ml-3">{approach.title}</h3>
        </div>
        <p className="text-white/90 text-sm">{approach.description}</p>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-2 gap-3">
          {approach.features.map((feature, featureIndex) => (
            <div key={featureIndex} className="flex items-center text-sm text-white/80">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 flex-shrink-0"></div>
              {feature}
            </div>
          ))}
        </div>
      </div>
    </CardContent>
  </Card>
))

TestingApproachCard.displayName = "TestingApproachCard"

const AutomationToolCard = memo(({ toolCategory, index, onClick }: { toolCategory: (typeof automationTools)[0]; index: number; onClick: () => void }) => {
  return (
    <Card
      className="backdrop-blur-xl bg-white/5 border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-300 group cursor-pointer h-[280px] flex flex-col"
      onClick={onClick}
    >
      <CardContent className="p-0 flex flex-col h-full">
        {/* Header */}
        <div className={`p-6 bg-gradient-to-br ${toolCategory.gradient} relative overflow-hidden flex-shrink-0`}>
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-3">
              <div className="text-white">{toolCategory.icon}</div>
              <Badge className="bg-white/20 text-white border-0 text-xs">
                {toolCategory.tools.length} tools
              </Badge>
            </div>
            <h3 className="text-white font-bold text-lg mb-2">{toolCategory.category}</h3>
            <p className="text-white/90 text-sm leading-relaxed line-clamp-3">{toolCategory.description}</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-grow flex flex-col justify-end">
          <Button
            variant="ghost"
            size="sm"
            className="text-white/70 w-full py-2"
          >
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  )
})

AutomationToolCard.displayName = "AutomationToolCard"

const MethodologyCard = memo(({ methodology, index }: { methodology: (typeof testingMethodologies)[0]; index: number }) => (
  <Card className="backdrop-blur-xl bg-white/5 border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-300 group relative overflow-hidden">
    <CardContent className="p-6">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-emerald-500"></div>
      <div className="flex items-start mb-4">
        <div className="flex-shrink-0 mr-4">
          <div className="w-12 h-12 rounded-full gradient-qa-automation flex items-center justify-center text-white font-bold text-lg">
            {methodology.phase}
          </div>
        </div>
        <div className="flex-grow">
          <div className="flex items-center mb-2">
            <div className="p-2 rounded-lg bg-white/10 mr-3">
              {methodology.icon}
            </div>
            <h3 className="text-white font-bold text-lg">{methodology.title}</h3>
          </div>
          <p className="text-white/80 text-sm mb-3">{methodology.description}</p>
          <div className="flex items-center text-green-400 text-xs mb-4">
            <Clock className="w-3 h-3 mr-1" />
            Duration: {methodology.duration}
          </div>
        </div>
      </div>
      
      <div className="space-y-2">
        <h4 className="text-white font-medium text-sm mb-2">Key Deliverables:</h4>
        <div className="grid grid-cols-2 gap-2">
          {methodology.deliverables.map((deliverable, deliverableIndex) => (
            <div key={deliverableIndex} className="flex items-center text-xs text-white/70">
              <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
              {deliverable}
            </div>
          ))}
        </div>
      </div>
    </CardContent>
  </Card>
))

MethodologyCard.displayName = "MethodologyCard"

const MetricCard = memo(({ metric, index }: { metric: (typeof successMetrics)[0]; index: number }) => (
  <Card className="backdrop-blur-xl bg-white/5 border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-300 group hover:scale-105 text-center">
    <CardContent className="p-6">
      <div className="gradient-qa-automation p-4 rounded-full inline-flex mb-4">
        {metric.icon}
      </div>
      <div className="text-3xl font-bold text-white mb-2">{metric.metric}</div>
      <div className="text-green-400 font-medium mb-2">{metric.label}</div>
      <p className="text-white/70 text-sm mb-3">{metric.description}</p>
      <div className="flex items-center justify-center text-green-400 text-xs">
        <TrendingUp className="w-3 h-3 mr-1" />
        {metric.trend} improvement
      </div>
    </CardContent>
  </Card>
))

MetricCard.displayName = "MetricCard"

export default function QAAutomationPage() {
  const router = useRouter()
  const [selectedTool, setSelectedTool] = useState<(typeof automationTools)[0] | null>(null)

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

        {/* Hero Section - Dashboard Style */}
        <section className="pt-24 pb-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Left Side - Content */}
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/20 border border-green-500/30 mb-6">
                  <Shield className="w-4 h-4 text-green-400 mr-2" />
                  <span className="text-green-400 text-sm font-medium">Quality Assurance Excellence</span>
                </div>
                
                <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white via-green-200 to-emerald-300 bg-clip-text text-transparent mb-6 leading-tight">
                  Automated Testing
                  <br />
                  <span className="text-green-400">That Delivers</span>
                </h1>
                
                <p className="text-white/80 text-base mb-8 leading-relaxed max-w-xl">
                  Transform your software quality with our comprehensive QA automation solutions. 
                  We build intelligent testing frameworks that catch bugs before they reach production, 
                  ensuring your applications perform flawlessly at scale.
                </p>

                <div className="flex flex-wrap gap-4 mb-8">
                  <Button
                    onClick={handleStartTesting}
                    className="gradient-qa-automation text-white border-0 hover:scale-105 transition-all font-medium shadow-lg px-8 py-3"
                  >
                    Start Testing Journey
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Link href="/">
                    <Button
                      variant="outline"
                      className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:scale-105 transition-all px-8 py-3"
                    >
                      View Portfolio
                    </Button>
                  </Link>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {testingStats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="gradient-qa-automation p-2 rounded-lg inline-flex mb-2">
                        {stat.icon}
                      </div>
                      <div className="text-white font-bold text-lg">{stat.value}</div>
                      <div className="text-white/60 text-xs">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side - Testing Dashboard Mockup */}
              <div className="relative">
                <Card className="backdrop-blur-xl bg-white/5 border-white/10 shadow-2xl overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-white font-bold">Test Execution Dashboard</h3>
                      <div className="flex gap-2">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-green-400 text-xs">Live Testing</span>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                        <div className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          <span className="text-white text-sm">Login Flow Tests</span>
                        </div>
                        <Badge className="badge-qa-automation text-xs">Passed</Badge>
                      </div>
                      
                      <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                        <div className="flex items-center">
                          <PlayCircle className="w-4 h-4 text-blue-400 mr-2" />
                          <span className="text-white text-sm">API Integration Tests</span>
                        </div>
                        <Badge className="badge-web-dev text-xs">Running</Badge>
                      </div>
                      
                      <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                        <div className="flex items-center">
                          <AlertTriangle className="w-4 h-4 text-yellow-400 mr-2" />
                          <span className="text-white text-sm">Performance Tests</span>
                        </div>
                        <Badge className="badge-ux-design text-xs">Queued</Badge>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg border border-green-500/30">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white text-sm">Overall Coverage</span>
                        <span className="text-green-400 font-bold">94.7%</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div className="bg-gradient-to-r from-green-400 to-emerald-500 h-2 rounded-full w-[94.7%]"></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Testing Approaches Section */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="bg-green-500/20 text-green-200 border-green-400/30 text-sm px-3 py-1 mb-3">
                Testing Methodologies
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Comprehensive Testing Approaches
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto text-sm">
                We employ multiple testing methodologies to ensure complete coverage and optimal quality assurance for your applications.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {testingApproaches.map((approach, index) => (
                <TestingApproachCard key={approach.title} approach={approach} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Success Metrics Section */}
        <section className="py-8 px-4 bg-gradient-to-r from-green-900/20 to-emerald-900/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="bg-green-500/20 text-green-200 border-green-400/30 text-sm px-3 py-1 mb-3">
                Impact Metrics
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Proven Results & Impact
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto text-sm">
                Our QA automation solutions deliver measurable improvements across all key performance indicators.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {successMetrics.map((metric, index) => (
                <MetricCard key={metric.label} metric={metric} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Automation Tools Section */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="bg-green-500/20 text-green-200 border-green-400/30 text-sm px-3 py-1 mb-3">
                Testing Arsenal
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Advanced Automation Tools
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto text-sm">
                We leverage cutting-edge tools and frameworks to build robust, scalable testing solutions that ensure comprehensive quality coverage.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {automationTools.map((toolCategory, index) => (
                <AutomationToolCard 
                  key={toolCategory.category} 
                  toolCategory={toolCategory} 
                  index={index} 
                  onClick={() => setSelectedTool(toolCategory)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Featured Testing Projects Section */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="bg-green-500/20 text-green-200 border-green-400/30 text-sm px-3 py-1 mb-3">
                Success Stories
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Featured Testing Projects
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto text-sm">
                Explore some of our recent QA automation projects that showcase our expertise and deliver exceptional quality assurance results.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Enterprise Banking Platform",
                  description: "Comprehensive test automation for critical financial systems with 99.9% reliability",
                  image: "/assets/project-04.png",
                  technologies: ["Selenium", "TestNG", "Jenkins", "PostgreSQL", "Docker"],
                  metrics: { coverage: "98.5%", bugs: "95% ↓", speed: "70% ↑" },
                  category: "Financial"
                },
                {
                  title: "Healthcare Management System",
                  description: "HIPAA-compliant testing framework with advanced security validation protocols",
                  image: "/assets/project-05.png",
                  technologies: ["Cypress", "Postman", "K6", "MongoDB", "AWS"],
                  metrics: { compliance: "100%", automation: "85%", defects: "90% ↓" },
                  category: "Healthcare"
                },
                {
                  title: "E-commerce Performance Suite",
                  description: "Load testing and performance optimization for high-traffic retail platform",
                  image: "/assets/project-06.png",
                  technologies: ["JMeter", "Playwright", "Grafana", "Redis", "Kubernetes"],
                  metrics: { load: "10K users", response: "< 200ms", uptime: "99.99%" },
                  category: "E-commerce"
                }
              ].map((project, index) => (
                <Card
                  key={index}
                  className="backdrop-blur-xl bg-white/5 border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-300 group overflow-hidden"
                >
                  <CardContent className="p-0">
                    {/* Project Image */}
                    <div className="relative h-48 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20"></div>
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
                          <Badge key={techIndex} className="badge-qa-automation text-[10px] px-2 py-1">
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
              ))}
            </div>
          </div>
        </section>

        {/* Testing Methodology Section */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="bg-green-500/20 text-green-200 border-green-400/30 text-sm px-3 py-1 mb-3">
                Our Process
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Our Streamlined Testing Methodology
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto text-sm">
                We follow a structured and iterative testing methodology to ensure comprehensive coverage and continuous improvement throughout the development lifecycle.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {testingMethodologies.map((methodology, index) => (
                <MethodologyCard key={methodology.title} methodology={methodology} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-8 px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="backdrop-blur-xl bg-gradient-to-r from-green-900/30 to-emerald-900/30 border-green-500/20 shadow-2xl overflow-hidden">
              <CardContent className="p-12 text-center relative">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-green-600/10 to-emerald-600/10"></div>
                <div className="relative z-10">
                  <div className="gradient-qa-automation p-4 rounded-full inline-flex mb-6">
                    <Target className="w-8 h-8" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    Ready to Elevate Your Testing Strategy?
                  </h2>
                  <p className="text-white/90 mb-6 max-w-2xl mx-auto text-sm">
                    Let's build a comprehensive QA automation framework that ensures your software meets the highest quality standards while accelerating your development cycle.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Button
                      onClick={handleStartTesting}
                      className="gradient-qa-automation text-white border-0 hover:scale-105 transition-all font-medium shadow-lg px-8 py-3"
                    >
                      Launch Testing Initiative
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                    <Button
                      onClick={handleViewReports}
                      variant="outline"
                      className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:scale-105 transition-all px-8 py-3"
                    >
                      View Case Studies
                    </Button>
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
        </footer>
      </div>

      {/* Automation Modal */}
      {selectedTool && (
        <AutomationModal
          tool={selectedTool}
          isOpen={!!selectedTool}
          onClose={() => setSelectedTool(null)}
        />
      )}
    </div>
  )
}
