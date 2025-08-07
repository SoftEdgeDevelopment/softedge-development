"use client"

import { Palette, Users, Eye, Lightbulb, ArrowRight, CheckCircle, Star, Zap, Target, Heart, TrendingUp, Award, Sparkles, MousePointer, Smartphone, Monitor, Tablet, Layers, Figma, Brush, PenTool, Wand2, Compass, BarChart3, Globe, Rocket, Crown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Navigation } from "@/components/navigation"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useCallback, memo, useState } from "react"

const designTools = [
  {
    category: "Design & Prototyping",
    icon: <Palette className="w-6 h-6" />,
    description: "Creating beautiful, functional interfaces with industry-leading design tools",
    tools: [
      { name: "Figma", expertise: 98, description: "Advanced prototyping & design systems", icon: <Figma className="w-4 h-4" />, url: "https://figma.com" },
      { name: "Adobe XD", expertise: 95, description: "Interactive prototypes & wireframes", icon: <Brush className="w-4 h-4" />, url: "https://adobe.com/products/xd" },
      { name: "Sketch", expertise: 90, description: "UI design & symbol libraries", icon: <PenTool className="w-4 h-4" />, url: "https://sketch.com" },
      { name: "InVision", expertise: 92, description: "Collaborative design workflows", icon: <Layers className="w-4 h-4" />, url: "https://invisionapp.com" },
      { name: "Principle", expertise: 88, description: "Advanced micro-interactions", icon: <Wand2 className="w-4 h-4" />, url: "https://principleformac.com" },
      { name: "Framer", expertise: 91, description: "Code-based design & animations", icon: <Zap className="w-4 h-4" />, url: "https://framer.com" },
    ],
    gradient: "from-purple-500 via-purple-600 to-indigo-600",
    badgeClass: "badge-ux-design",
  },
  {
    category: "User Research & Testing",
    icon: <Users className="w-6 h-6" />,
    description: "Understanding user behavior through comprehensive research and testing",
    tools: [
      { name: "Hotjar", expertise: 94, description: "Heatmaps & user session recordings", icon: <Eye className="w-4 h-4" />, url: "https://hotjar.com" },
      { name: "Google Analytics", expertise: 91, description: "User behavior & conversion tracking", icon: <BarChart3 className="w-4 h-4" />, url: "https://analytics.google.com" },
      { name: "Maze", expertise: 89, description: "Unmoderated user testing", icon: <Compass className="w-4 h-4" />, url: "https://maze.co" },
      { name: "UserTesting", expertise: 93, description: "Remote user research sessions", icon: <Users className="w-4 h-4" />, url: "https://usertesting.com" },
      { name: "Optimal Workshop", expertise: 87, description: "Card sorting & tree testing", icon: <Target className="w-4 h-4" />, url: "https://optimalworkshop.com" },
      { name: "Lookback", expertise: 90, description: "Live user interview sessions", icon: <Globe className="w-4 h-4" />, url: "https://lookback.io" },
    ],
    gradient: "from-purple-600 via-indigo-500 to-purple-700",
    badgeClass: "badge-web-dev",
  },
  {
    category: "Design Systems & Collaboration",
    icon: <Target className="w-6 h-6" />,
    description: "Scalable design systems and collaborative workflows for teams",
    tools: [
      { name: "Storybook", expertise: 92, description: "Component library documentation", icon: <Layers className="w-4 h-4" />, url: "https://storybook.js.org" },
      { name: "Zeroheight", expertise: 88, description: "Design system documentation", icon: <Rocket className="w-4 h-4" />, url: "https://zeroheight.com" },
      { name: "Abstract", expertise: 90, description: "Design version control", icon: <Crown className="w-4 h-4" />, url: "https://abstract.com" },
      { name: "Notion", expertise: 95, description: "Design process documentation", icon: <Lightbulb className="w-4 h-4" />, url: "https://notion.so" },
      { name: "Confluence", expertise: 89, description: "Team collaboration & specs", icon: <Users className="w-4 h-4" />, url: "https://atlassian.com/software/confluence" },
      { name: "Design Tokens", expertise: 91, description: "Scalable design systems", icon: <Sparkles className="w-4 h-4" />, url: "https://designtokens.org" },
    ],
    gradient: "from-indigo-500 via-purple-600 to-purple-700",
    badgeClass: "badge-qa-automation",
  },
]

const designPhases = [
  {
    phase: "01",
    title: "Discovery & Research",
    description: "Deep dive into user needs, business goals, and market landscape through comprehensive research",
    deliverables: ["User Personas", "Journey Maps", "Competitive Analysis", "Research Report", "Stakeholder Interviews"],
    icon: <Users className="w-6 h-6" />,
    color: "from-purple-500 to-purple-600",
    bgPattern: "bg-gradient-to-br from-purple-500/10 to-pink-500/10",
  },
  {
    phase: "02",
    title: "Strategy & Planning",
    description: "Define design strategy, information architecture, and create a comprehensive project roadmap",
    deliverables: ["Design Strategy", "Site Map", "User Flows", "Content Strategy", "Technical Requirements"],
    icon: <Lightbulb className="w-6 h-6" />,
    color: "from-purple-600 to-indigo-500",
    bgPattern: "bg-gradient-to-br from-pink-500/10 to-purple-600/10",
  },
  {
    phase: "03",
    title: "Design & Prototype",
    description: "Create wireframes, high-fidelity designs, and interactive prototypes with design systems",
    deliverables: ["Wireframes", "Visual Designs", "Interactive Prototypes", "Design System", "Component Library"],
    icon: <Palette className="w-6 h-6" />,
    color: "from-indigo-500 to-purple-700",
    bgPattern: "bg-gradient-to-br from-purple-600/10 to-indigo-500/10",
  },
  {
    phase: "04",
    title: "Test & Iterate",
    description: "Validate designs with real users and refine based on comprehensive feedback and data",
    deliverables: ["Usability Reports", "A/B Test Results", "Final Designs", "Handoff Specs", "Success Metrics"],
    icon: <Eye className="w-6 h-6" />,
    color: "from-purple-700 to-purple-500",
    bgPattern: "bg-gradient-to-br from-indigo-500/10 to-purple-500/10",
  },
]

const impactMetrics = [
  {
    metric: "180%",
    label: "Average Conversion Increase",
    description: "Across redesigned user flows",
    icon: <TrendingUp className="w-8 h-8" />,
    trend: "+28% this quarter",
    color: "from-purple-500 to-purple-600",
  },
  {
    metric: "4.9/5",
    label: "User Satisfaction Score",
    description: "Post-redesign feedback",
    icon: <Heart className="w-8 h-8" />,
    trend: "+1.4 improvement",
    color: "from-purple-600 to-indigo-500",
  },
  {
    metric: "75%",
    label: "Task Completion Rate",
    description: "Improvement in usability",
    icon: <Target className="w-8 h-8" />,
    trend: "+45% increase",
    color: "from-indigo-500 to-purple-700",
  },
  {
    metric: "15+",
    label: "Design Awards Won",
    description: "Industry recognition",
    icon: <Award className="w-8 h-8" />,
    trend: "2024 achievements",
    color: "from-purple-700 to-purple-500",
  },
]

const showcaseProjects = [
  {
    title: "FinTech Mobile Banking App",
    description: "Complete UX transformation resulting in 250% increase in user engagement and industry-leading satisfaction scores",
    image: "/assets/project-01.png",
    technologies: ["Figma", "Principle", "UserTesting", "Hotjar", "Maze"],
    metrics: { engagement: "+250%", satisfaction: "4.9/5", completion: "96%" },
    category: "Mobile UX"
  },
  {
    title: "E-commerce Platform Redesign",
    description: "Strategic redesign focusing on conversion optimization and user journey enhancement",
    image: "/assets/project-02.png",
    technologies: ["Adobe XD", "Maze", "Google Analytics", "Storybook", "Lookback"],
    metrics: { conversion: "+220%", bounce: "-55%", revenue: "+380%" },
    category: "Web UX"
  },
  {
    title: "Healthcare Dashboard System",
    description: "Complex data visualization and workflow optimization for healthcare professionals",
    image: "/assets/project-03.png",
    technologies: ["Figma", "InVision", "Optimal Workshop", "Zeroheight", "Abstract"],
    metrics: { efficiency: "+180%", errors: "-80%", training: "-70%" },
    category: "Enterprise UX"
  },
]

const ProjectCard = memo(({ project, index }: { project: (typeof showcaseProjects)[0]; index: number }) => (
  <Card
    key={index}
    className="backdrop-blur-xl bg-white/5 border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-300 group overflow-hidden"
  >
    <CardContent className="p-0">
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20"></div>
        <div className="absolute top-4 left-4">
          <Badge className="bg-black/50 text-white border-0 text-xs">
            {project.category}
          </Badge>
        </div>
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="p-2 rounded-full bg-white/20 backdrop-blur-sm">
            <Eye className="w-4 h-4 text-white" />
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
            <Badge key={techIndex} className="badge-ux-design text-[10px] px-2 py-1">
              {tech}
            </Badge>
          ))}
        </div>

        {/* Metrics */}
        <div className="flex justify-between items-center pt-4 border-t border-white/10">
          {Object.entries(project.metrics).map(([key, value]) => (
            <div key={key} className="text-center">
              <div className="text-purple-400 font-bold text-sm">{value}</div>
              <div className="text-white/60 text-xs capitalize">{key}</div>
            </div>
          ))}
        </div>
      </div>
    </CardContent>
  </Card>
))

const designServices = [
  {
    title: "UX Strategy & Research",
    description: "Comprehensive UX strategy development aligned with business objectives and deep user insights",
    features: [
      "User Research & Persona Development",
      "Competitive Analysis & Benchmarking",
      "UX Audit & Heuristic Evaluation",
      "Design System Strategy & Planning",
      "Accessibility & Compliance Review",
    ],
    icon: <Lightbulb className="w-6 h-6" />,
    gradient: "from-purple-500 to-purple-600",
    duration: "2-3 weeks",
    deliverables: "8-12 key documents",
  },
  {
    title: "Interface Design & Prototyping",
    description: "Beautiful, functional interfaces with comprehensive prototypes for validation and development handoff",
    features: [
      "Wireframing & Information Architecture",
      "High-Fidelity Visual Design",
      "Interactive Prototypes & Animations",
      "Responsive Design Systems",
      "Component Library Development",
    ],
    icon: <Palette className="w-6 h-6" />,
    gradient: "from-purple-600 to-indigo-500",
    duration: "3-5 weeks",
    deliverables: "Complete design system",
  },
  {
    title: "Usability Testing & Optimization",
    description: "Data-driven design validation through comprehensive testing and continuous optimization processes",
    features: [
      "Moderated & Unmoderated User Testing",
      "A/B Testing & Conversion Analytics",
      "Heuristic Evaluation & Expert Review",
      "Accessibility Auditing & WCAG Compliance",
      "Performance Optimization & Metrics",
    ],
    icon: <Eye className="w-6 h-6" />,
    gradient: "from-indigo-500 to-purple-700",
    duration: "1-2 weeks",
    deliverables: "Detailed reports & recommendations",
  },
]

const ToolCard = memo(({ tool, index }: { 
  tool: (typeof designTools)[0]; 
  index: number; 
}) => (
  <Card className="backdrop-blur-xl bg-white/5 border-white/10 shadow-2xl transition-all duration-500 group relative overflow-hidden service-card-height">
    <div className={`absolute inset-0 bg-gradient-to-br ${tool.gradient} opacity-5 transition-opacity duration-500`}></div>
    <CardContent className="p-6 relative z-10 h-full flex flex-col">
      <div className={`p-4 rounded-xl bg-gradient-to-br ${tool.gradient} mb-4 flex items-center justify-between shadow-xl`}>
        <div className="flex items-center gap-3">
          <div className="text-white p-2 bg-white/20 rounded-lg">{tool.icon}</div>
          <div>
            <h3 className="text-white font-bold text-lg">{tool.category}</h3>
            <p className="text-white/80 text-sm">{tool.description}</p>
          </div>
        </div>
        <Badge className="bg-white/20 text-white text-xs px-2 py-1">
          {tool.tools.length} tools
        </Badge>
      </div>
      
      <div className="space-y-3 flex-grow">
        {tool.tools.slice(0, 3).map((item, itemIndex) => (
          <div key={itemIndex} className="bg-white/5 rounded-lg p-3 border border-white/5">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="text-purple-300">{item.icon}</div>
                <span className="text-white font-medium text-sm">{item.name}</span>
              </div>
              <Badge className={`${tool.badgeClass} text-xs px-2 py-1`}>
                {item.expertise}%
              </Badge>
            </div>
            <div className="w-full bg-white/10 rounded-full h-2 mb-2 overflow-hidden">
              <div 
                className={`h-2 rounded-full bg-gradient-to-r ${tool.gradient} transition-all duration-1000 shadow-lg`}
                style={{ width: `${item.expertise}%` }}
              ></div>
            </div>
            <p className="text-white/70 text-xs leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
      
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="ghost"
            className="w-full mt-4 text-white/80 hover:text-white hover:bg-white/10 py-2 rounded-lg transition-all duration-300 text-sm"
          >
            View Details
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-slate-900 border-white/20">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <div className={`p-3 rounded-xl bg-gradient-to-br ${tool.gradient}`}>
                {tool.icon}
              </div>
              {tool.category}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-white/80 text-lg leading-relaxed">{tool.description}</p>
            <div className="grid gap-4">
              <h4 className="text-white font-semibold text-lg mb-3">Technologies We Use:</h4>
              <div className="grid gap-4">
                {tool.tools.map((item, itemIndex) => (
                  <div key={itemIndex} className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="text-purple-300">{item.icon}</div>
                        <span className="text-white font-semibold">{item.name}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge className={`${tool.badgeClass} text-sm px-3 py-1`}>
                          {item.expertise}%
                        </Badge>
                        <Button
                          size="sm"
                          variant="outline"
                          className="bg-white/10 border-white/20 text-white hover:bg-white/20 text-xs px-3 py-1"
                          onClick={() => window.open(item.url, "_blank")}
                        >
                          Documentation
                        </Button>
                      </div>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-3 mb-3 overflow-hidden">
                      <div 
                        className={`h-3 rounded-full bg-gradient-to-r ${tool.gradient} transition-all duration-1000 shadow-lg`}
                        style={{ width: `${item.expertise}%` }}
                      ></div>
                    </div>
                    <p className="text-white/70 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </CardContent>
  </Card>
))

ToolCard.displayName = "ToolCard"

const PhaseCard = memo(({ phase, index }: { phase: (typeof designPhases)[0]; index: number }) => (
  <Card className="backdrop-blur-xl bg-white/5 border-white/10 shadow-2xl transition-all duration-500 group relative overflow-hidden h-full">
    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${phase.color}`}></div>
    <div className={`absolute inset-0 ${phase.bgPattern} transition-opacity duration-500`}></div>
    <CardContent className="p-6 relative z-10 h-full flex flex-col">
      <div className="flex items-start gap-4 mb-4">
        <div className={`p-3 rounded-xl bg-gradient-to-r ${phase.color} shadow-xl flex-shrink-0`}>
          <div className="text-white">{phase.icon}</div>
        </div>
        <div className="flex-grow min-w-0">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-purple-300 font-bold text-xl">{phase.phase}</span>
          </div>
          <h3 className="text-white font-bold text-xl mb-2">{phase.title}</h3>
          <p className="text-white/80 leading-relaxed text-sm">{phase.description}</p>
        </div>
      </div>
      
      <div className="space-y-2 flex-grow">
        <h4 className="text-white/90 font-medium mb-3 flex items-center gap-2 text-sm">
          <Sparkles className="w-4 h-4 text-purple-400" />
          Key Deliverables:
        </h4>
        <div className="grid grid-cols-1 gap-2">
          {phase.deliverables.map((deliverable, delIndex) => (
            <div key={delIndex} className="flex items-center text-sm text-white/70 bg-white/5 rounded-lg p-2">
              <CheckCircle className="w-3 h-3 text-purple-400 mr-2 flex-shrink-0" />
              <span className="text-xs">{deliverable}</span>
            </div>
          ))}
        </div>
      </div>
    </CardContent>
  </Card>
))

PhaseCard.displayName = "PhaseCard"

const MetricCard = memo(({ metric, index }: { metric: (typeof impactMetrics)[0]; index: number }) => (
  <Card className="backdrop-blur-xl bg-white/5 border-white/10 shadow-2xl transition-all duration-500 group relative overflow-hidden">
    <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-5 transition-opacity duration-500`}></div>
    <CardContent className="p-6 text-center relative z-10">
      <div className={`bg-gradient-to-br ${metric.color} p-4 rounded-xl inline-flex mb-4 shadow-xl`}>
        <div className="text-white">{metric.icon}</div>
      </div>
      <div className="text-3xl font-bold text-white mb-2">{metric.metric}</div>
      <h3 className="text-white font-semibold text-lg mb-2">{metric.label}</h3>
      <p className="text-white/70 leading-relaxed mb-3 text-sm">{metric.description}</p>
      <Badge className="badge-ux-design text-xs px-2 py-1">
        {metric.trend}
      </Badge>
    </CardContent>
  </Card>
))

MetricCard.displayName = "MetricCard"

const ServiceCard = memo(({ service, index }: { service: (typeof designServices)[0]; index: number }) => (
  <Card className="backdrop-blur-xl bg-white/5 border-white/10 shadow-2xl transition-all duration-500 group relative overflow-hidden h-full">
    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5 transition-opacity duration-500`}></div>
    <CardContent className="p-6 relative z-10 h-full flex flex-col">
      <div className={`p-4 rounded-xl bg-gradient-to-br ${service.gradient} mb-4 shadow-xl`}>
        <div className="flex items-center gap-3 mb-3">
          <div className="text-white p-2 bg-white/20 rounded-lg">{service.icon}</div>
          <h3 className="text-white font-bold text-lg">{service.title}</h3>
        </div>
        <div className="flex gap-4 text-white/80 text-xs">
          <span>⏱️ {service.duration}</span>
          <span>📋 {service.deliverables}</span>
        </div>
      </div>
      
      <p className="text-white/80 leading-relaxed mb-4 text-sm flex-grow">{service.description}</p>
      
      <div className="space-y-2">
        {service.features.map((feature, featureIndex) => (
          <div key={featureIndex} className="flex items-center text-white/70 bg-white/5 rounded-lg p-2 text-sm">
            <CheckCircle className="w-4 h-4 text-purple-400 mr-3 flex-shrink-0" />
            <span className="text-xs">{feature}</span>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
))

ServiceCard.displayName = "ServiceCard"

export default function UXDesignPage() {
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
    router.push("/brockaltug")
  }, [router])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Enhanced Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-10 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-6000"></div>
        </div>
      </div>

      <div className="relative z-10">
        <Navigation />

        {/* Hero Section */}
        <section className="pt-24 pb-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-stretch">
              {/* Left Content */}
              <div className="space-y-8">
                <Card className="backdrop-blur-xl bg-white/5 border-white/10 shadow-2xl h-full">
                  <CardContent className="p-8 h-full flex flex-col">
                    <div className="flex-grow">
                      <div className="flex items-center gap-6 mb-6">
                        <div className="gradient-ux-design p-4 rounded-xl shadow-xl">
                          <Palette className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-purple-200 bg-clip-text text-transparent leading-tight">
                            UX Design
                          </h1>
                          <p className="text-purple-300 text-lg font-medium">Crafting Exceptional Digital Experiences</p>
                        </div>
                      </div>
                      
                      <p className="text-white/80 text-base leading-relaxed mb-6">
                        We create user-centered designs that seamlessly blend beautiful aesthetics with exceptional functionality. 
                        Our comprehensive design process ensures your users have meaningful, delightful, and memorable experiences 
                        with your digital products.
                      </p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        onClick={handleStartProject}
                        size="lg"
                        className="gradient-ux-design text-white border-0 transition-all font-semibold shadow-xl px-6 py-3 text-base rounded-lg"
                      >
                        Start Design Project
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                      <Button
                        onClick={handleViewPortfolio}
                        variant="outline"
                        size="lg"
                        className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all px-6 py-3 text-base rounded-lg"
                      >
                        View Portfolio
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right Content */}
              <div className="relative">
                <Card className="backdrop-blur-xl bg-white/5 border-white/10 shadow-2xl overflow-hidden h-full">
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className="bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-indigo-500/20 rounded-xl p-6 relative overflow-hidden flex-grow">
                      {/* Browser Header */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex gap-2">
                          <div className="w-3 h-3 bg-red-400 rounded-full shadow-lg"></div>
                          <div className="w-3 h-3 bg-yellow-400 rounded-full shadow-lg"></div>
                          <div className="w-3 h-3 bg-green-400 rounded-full shadow-lg"></div>
                        </div>
                        <div className="text-white/60 text-xs font-mono">design.softedge.dev</div>
                      </div>
                      
                      {/* Design Elements */}
                      <div className="space-y-4 flex-grow">
                        <div className="flex items-center gap-4">
                          <div className="p-2 bg-gradient-to-r from-purple-600 to-indigo-500 rounded-lg shadow-lg">
                            <Monitor className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-grow space-y-2">
                            <div className="h-3 bg-gradient-to-r from-purple-600 to-indigo-500 rounded-full w-4/5 shadow-lg"></div>
                            <div className="h-2 bg-white/20 rounded-full w-3/5"></div>
                          </div>
                          <Badge className="badge-ux-design text-xs">Desktop</Badge>
                        </div>
                        
                        <div className="flex items-center gap-4">
                          <div className="p-2 bg-gradient-to-r from-purple-600 to-indigo-500 rounded-lg shadow-lg">
                            <Tablet className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-grow space-y-2">
                            <div className="h-3 bg-gradient-to-r from-purple-600 to-indigo-500 rounded-full w-3/4 shadow-lg"></div>
                            <div className="h-2 bg-white/20 rounded-full w-2/5"></div>
                          </div>
                          <Badge className="badge-web-dev text-xs">Tablet</Badge>
                        </div>
                        
                        <div className="flex items-center gap-4">
                          <div className="p-2 bg-gradient-to-r from-purple-600 to-indigo-500 rounded-lg shadow-lg">
                            <Smartphone className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-grow space-y-2">
                            <div className="h-3 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full w-5/6 shadow-lg"></div>
                            <div className="h-2 bg-white/20 rounded-full w-1/2"></div>
                          </div>
                          <Badge className="badge-qa-automation text-xs">Mobile</Badge>
                        </div>
                      </div>
                      
                      {/* Floating Elements */}
                      <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-20 blur-2xl"></div>
                      <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-pink-500 to-indigo-500 rounded-full opacity-20 blur-2xl"></div>
                      <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full opacity-15 blur-xl"></div>
                    </div>
                    
                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-4 mt-6">
                      <div className="text-center bg-white/5 rounded-lg p-3">
                        <div className="text-2xl font-bold text-purple-300 mb-1">99%</div>
                        <div className="text-white/60 text-xs">User Satisfaction</div>
                      </div>
                      <div className="text-center bg-white/5 rounded-lg p-3">
                        <div className="text-2xl font-bold text-pink-300 mb-1">200+</div>
                        <div className="text-white/60 text-xs">Projects Completed</div>
                      </div>
                      <div className="text-center bg-white/5 rounded-lg p-3">
                        <div className="text-2xl font-bold text-indigo-300 mb-1">4.9★</div>
                        <div className="text-white/60 text-xs">Average Rating</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Metrics Section */}
        <section className="py-8 px-4 bg-gradient-to-r from-purple-900/30 via-pink-900/30 to-indigo-900/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-pink-600/5"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-8">
              <Badge className="bg-purple-500/20 text-purple-200 border-purple-400/30 text-sm px-3 py-1 mb-3">
                Impact Metrics
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-white">Impact Metrics</h2>
              <p className="text-white/80 text-sm max-w-3xl mx-auto leading-relaxed">
                Measurable results from our user-centered design approach across various projects and industries, 
                demonstrating the tangible value of exceptional UX design.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {impactMetrics.map((metric, index) => (
                <MetricCard key={metric.label} metric={metric} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Design Process Section */}
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <Badge className="bg-purple-500/20 text-purple-200 border-purple-400/30 text-sm px-3 py-1 mb-3">
                Our Process
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Our Process</h2>
              <p className="text-white/80 text-sm max-w-3xl mx-auto leading-relaxed">
                A proven, iterative approach that ensures successful design outcomes through user-centered thinking, 
                data-driven decisions, and continuous validation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {designPhases.map((phase, index) => (
                <PhaseCard key={phase.phase} phase={phase} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Design Tools Arsenal */}
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <Badge className="bg-purple-500/20 text-purple-200 border-purple-400/30 text-sm px-3 py-1 mb-3">
                Technology Stack
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Technology Stack</h2>
              <p className="text-white/80 text-sm max-w-3xl mx-auto leading-relaxed">
                Industry-leading design tools and cutting-edge technologies we master to create exceptional user experiences 
                that drive engagement and business success.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {designTools.map((tool, index) => (
                <ToolCard 
                  key={tool.category} 
                  tool={tool} 
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Showcase Projects Section */}
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <Badge className="bg-purple-500/20 text-purple-200 border-purple-400/30 text-sm px-3 py-1 mb-3">
                Success Stories
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Featured Projects
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto text-sm">
                Explore some of our recent UX design projects that showcase our expertise and deliver exceptional results.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {showcaseProjects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Design Services */}
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <Badge className="bg-purple-500/20 text-purple-200 border-purple-400/30 text-sm px-3 py-1 mb-3">
                Our Services
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Our Services</h2>
              <p className="text-white/80 text-sm max-w-3xl mx-auto leading-relaxed">
                End-to-end UX design services that cover every aspect of user experience, from strategic planning 
                to final implementation and ongoing optimization.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {designServices.map((service, index) => (
                <ServiceCard key={service.title} service={service} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-8 px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="backdrop-blur-xl bg-gradient-to-r from-purple-900/30 to-purple-900/30 border-purple-500/20 shadow-2xl overflow-hidden">
              <CardContent className="p-12 text-center relative">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/10 to-purple-600/10"></div>
                <div className="relative z-10">
                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-4 rounded-full inline-flex mb-6">
                    <MousePointer className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    Ready to Transform Your User Experience?
                  </h2>
                  <p className="text-white/90 mb-6 max-w-2xl mx-auto text-sm">
                    Let's discuss your design requirements and create a custom UX solution that drives your business forward and delights your users.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Button
                      onClick={handleStartProject}
                      className="gradient-ux-design text-white border-0 hover:scale-105 transition-all font-medium shadow-lg px-8 py-3"
                    >
                      Get Started Today
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                    <Button
                      onClick={handleViewPortfolio}
                      variant="outline"
                      className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:scale-105 transition-all px-8 py-3"
                    >
                      View Design Portfolio
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Footer - Exact same as homepage */}
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
    </div>
  )
}
