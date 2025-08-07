"use client"

import type React from "react"
import { Code, Shield, Palette, Mail, MapPin, ArrowRight, CheckCircle, Users, Zap, Star, Award, Clock, Globe, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import Link from "next/link"
import { useState, useCallback, memo, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"

// Medium Icon Component
const MediumIcon = memo(({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
  </svg>
))

MediumIcon.displayName = "MediumIcon"

const StatCard = memo(
  ({ stat, index }: { stat: { icon: React.ReactNode; value: string; label: string }; index: number }) => (
    <div key={index} className="text-center group">
      <div className="flex items-center justify-center mb-2">
        <div className="text-blue-300 group-hover:text-blue-200 transition-colors">{stat.icon}</div>
      </div>
      <div className="text-xl md:text-2xl font-bold text-white mb-1">{stat.value}</div>
      <div className="text-white/60 text-xs">{stat.label}</div>
    </div>
  ),
)

StatCard.displayName = "StatCard"

const ServiceCard = memo(({ service, onNavigate }: { service: any; onNavigate: (href: string) => void }) => (
  <Card
    key={service.id}
    className={`backdrop-blur-xl bg-white/5 border-white/10 shadow-2xl service-card-height flex flex-col cursor-pointer transition-all duration-300 group ${
      service.id === 1 ? "hover:bg-blue-500/30" : service.id === 2 ? "hover:bg-green-500/30" : "hover:bg-purple-500/30"
    }`}
    onClick={() => onNavigate(service.href)}
  >
    <CardContent className="p-6 flex flex-col h-full">
      <div className="text-center mb-6">
        <div className={`inline-flex p-4 rounded-full ${service.gradient} mb-4`}>
          <div className="text-white">{service.icon}</div>
        </div>
        <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
        <p className="text-white/80 text-sm leading-relaxed">{service.description}</p>
      </div>

      <div className="space-y-4 flex-grow">
        <div>
          <h4 className="text-white font-medium mb-3 text-sm">Key Features:</h4>
          <div className="grid grid-cols-1 gap-2">
            {service.features.map((feature, index) => (
              <div key={index} className="flex items-center text-sm text-white/70">
                <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                {feature}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-medium mb-3 text-sm">Technologies:</h4>
          <div className="tech-grid">
            {service.technologies.map((tech) => (
              <Badge key={tech} className={`${service.badgeClass} text-xs px-2 py-1 text-center justify-center`}>
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6">
        <Button
          className={`w-full ${service.gradient} text-white border-0 hover:scale-105 hover:border-2 ${
            service.id === 1
              ? "hover:border-blue-300"
              : service.id === 2
                ? "hover:border-green-300"
                : "hover:border-purple-300"
          } transition-all text-sm py-3 font-medium pointer-events-none shadow-lg`}
        >
          Learn More
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </CardContent>
  </Card>
))

ServiceCard.displayName = "ServiceCard"

const AboutModal = memo(({ type, isOpen, onClose }: { type: 'mission' | 'approach'; isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const content = type === 'mission' ? {
    title: 'Our Mission',
    icon: <Users className="w-6 h-6" />,
    overview: 'To empower businesses with innovative technology solutions that drive growth, efficiency, and success. We create software that exceeds expectations and delivers measurable results.',
    keyPoints: [
      'Deliver cutting-edge technology solutions',
      'Drive measurable business growth',
      'Exceed client expectations consistently',
      'Foster long-term partnerships',
      'Maintain highest quality standards',
      'Provide exceptional customer service'
    ],
    values: [
      'Innovation and creativity',
      'Quality and excellence',
      'Client success focus',
      'Continuous improvement',
      'Transparency and trust',
      'Technical expertise'
    ]
  } : {
    title: 'Our Approach',
    icon: <Zap className="w-6 h-6" />,
    overview: 'We combine cutting-edge technology with proven methodologies to deliver scalable, maintainable, and future-ready solutions with meticulous attention to detail.',
    keyPoints: [
      'Agile development methodologies',
      'User-centered design principles',
      'Scalable architecture patterns',
      'Continuous integration and testing',
      'Performance optimization focus',
      'Security-first development'
    ],
    values: [
      'Best practices implementation',
      'Code quality and maintainability',
      'Comprehensive testing strategies',
      'Documentation and knowledge sharing',
      'Collaborative team approach',
      'Future-proof solutions'
    ]
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
                    <div className="text-white">{content.icon}</div>
                  </div>
                  <h3 className="text-white font-bold text-2xl">{content.title}</h3>
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
              <p className="text-white/90 text-sm leading-relaxed">{content.overview}</p>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Key Points */}
            <div>
              <h4 className="text-white font-semibold mb-4 flex items-center">
                <Star className="w-4 h-4 mr-2 text-yellow-400" />
                Key Focus Areas
              </h4>
              <div className="grid grid-cols-1 gap-3">
                {content.keyPoints.map((point, index) => (
                  <div key={index} className="flex items-start text-sm text-white/80">
                    <div className="w-2 h-2 rounded-full bg-yellow-400 mt-2 mr-3 flex-shrink-0"></div>
                    {point}
                  </div>
                ))}
              </div>
            </div>

            {/* Values */}
            <div>
              <h4 className="text-white font-semibold mb-4 flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                Core Values
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {content.values.map((value, index) => (
                  <div key={index} className="flex items-center text-sm text-white/80 bg-white/5 rounded-lg p-3">
                    <ArrowRight className="w-3 h-3 mr-2 text-green-400 flex-shrink-0" />
                    {value}
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

AboutModal.displayName = "AboutModal"

export default function SoftEdgeHomepage() {
  const [missionModalOpen, setMissionModalOpen] = useState(false)
  const [approachModalOpen, setApproachModalOpen] = useState(false)
  const router = useRouter()
  const formRef = useRef<HTMLFormElement>(null)

  // Handle service card navigation
  const handleServiceNavigation = useCallback(
    (href: string) => {
      router.push(href)
      // Scroll to top after navigation
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
      }, 100)
    },
    [router],
  )

  // Enhanced email click handler with proper mailto handling
  const handleEmailClick = useCallback(() => {
    const email = "contact@softedgedevelopment.com"
    const subject = "Project Inquiry - SoftEdge Development"
    const body = `Hello SoftEdge Development,

I'm interested in discussing a project with you.

Please let me know when would be a good time to connect.

Thank you!`

    // Create properly formatted mailto URL
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    // Method 1: Create invisible link and trigger click (most reliable)
    const link = document.createElement("a")
    link.href = mailtoUrl
    link.target = "_blank"
    link.rel = "noopener noreferrer"

    // Add to DOM temporarily
    document.body.appendChild(link)

    // Trigger click
    link.click()

    // Clean up
    document.body.removeChild(link)

    // Fallback timeout - if mail client doesn't open in 3 seconds, show fallback
    setTimeout(() => {
      // Check if user is still on the page (mail client didn't open)
      if (document.hasFocus()) {
        const userWantsManual = confirm(
          `If your email client didn't open automatically, would you like to copy the email address to your clipboard?\n\nEmail: ${email}`,
        )

        if (userWantsManual) {
          // Copy to clipboard
          if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard
              .writeText(email)
              .then(() => {
                alert(`Email address copied to clipboard: ${email}\n\nSubject: ${subject}`)
              })
              .catch(() => {
                // Fallback for clipboard
                const textArea = document.createElement("textarea")
                textArea.value = email
                textArea.style.position = "fixed"
                textArea.style.left = "-999999px"
                textArea.style.top = "-999999px"
                document.body.appendChild(textArea)
                textArea.focus()
                textArea.select()
                document.execCommand("copy")
                document.body.removeChild(textArea)
                alert(`Email address copied to clipboard: ${email}\n\nSubject: ${subject}`)
              })
          } else {
            alert(`Please email us at: ${email}\n\nSubject: ${subject}`)
          }
        }
      }
    }, 3000)
  }, [])

  // Enhanced contact form handler with proper mailto handling
  const handleContactFormSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.currentTarget
    if (!form) {
      alert("Form submission error. Please try again.")
      return
    }

    const formData = new FormData(form)
    const name = (formData.get("name") as string)?.trim()
    const email = (formData.get("email") as string)?.trim()
    const message = (formData.get("message") as string)?.trim()

    // Input validation
    if (!name || name.length < 2) {
      alert("Please enter a valid name (at least 2 characters)")
      return
    }

    if (!email) {
      alert("Please enter your email address")
      return
    }

    // Enhanced email validation
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address")
      return
    }

    if (!message || message.length < 10) {
      alert("Please enter a message (at least 10 characters)")
      return
    }

    // Sanitize inputs
    const sanitizedName = name.replace(/[<>]/g, "")
    const sanitizedEmail = email.replace(/[<>]/g, "")
    const sanitizedMessage = message.replace(/[<>]/g, "")

    const contactEmail = "contact@softedgedevelopment.com"
    const subject = `New Contact Form Submission from ${sanitizedName}`
    const body = `Name: ${sanitizedName}
Email: ${sanitizedEmail}

Message:
${sanitizedMessage}

---
This message was sent from the SoftEdge Development contact form.
Sent on: ${new Date().toLocaleString()}`

    // Create properly formatted mailto URL
    const mailtoUrl = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    // Method 1: Create invisible link and trigger click (most reliable)
    const link = document.createElement("a")
    link.href = mailtoUrl
    link.target = "_blank"
    link.rel = "noopener noreferrer"

    // Add to DOM temporarily
    document.body.appendChild(link)

    // Trigger click
    link.click()

    // Clean up
    document.body.removeChild(link)

    // Reset form immediately
    form.reset()

    // Show success message
    alert("Your email client should open with the pre-filled message. Please send the email to complete your inquiry.")

    // Fallback timeout - if mail client doesn't open in 3 seconds, show fallback
    setTimeout(() => {
      if (document.hasFocus()) {
        const fullMessage = `Email: ${contactEmail}\n\nSubject: ${subject}\n\nMessage:\n${body}`

        if (navigator.clipboard && window.isSecureContext) {
          navigator.clipboard
            .writeText(fullMessage)
            .then(() => {
              alert("Contact information and your message have been copied to clipboard!")
            })
            .catch(() => {
              // Fallback for clipboard
              const textArea = document.createElement("textarea")
              textArea.value = fullMessage
              textArea.style.position = "fixed"
              textArea.style.left = "-999999px"
              textArea.style.top = "-999999px"
              document.body.appendChild(textArea)
              textArea.focus()
              textArea.select()
              document.execCommand("copy")
              document.body.removeChild(textArea)
              alert("Contact information and your message have been copied to clipboard!")
            })
        } else {
          alert(`Please email us manually:\n\n${fullMessage}`)
        }
      }
    }, 3000)
  }, [])

  // Handle location click
  const handleLocationClick = useCallback(() => {
    // Opens Google Maps with Seattle, Washington location
    window.open(
      "https://www.google.com/maps/place/Seattle,+WA/@47.6062095,-122.3320708,11z/data=!3m1!4b1!4m6!3m5!1s0x5490102c93e83355:0x102565466944d59a!8m2!3d47.6062095!4d-122.3320708!16zL20vMGQ5anI",
      "_blank",
    )
  }, [])

  const services = [
    {
      id: 1,
      title: "Web Development",
      icon: <Code className="w-6 h-6" />,
      description:
        "Full-stack web applications with modern technologies and cloud deployment for scalable business solutions.",
      features: [
        "React & Next.js Development",
        "Node.js & API Integration",
        "Cloud Deployment & Scaling",
        "Performance Optimization",
      ],
      technologies: ["React", "Next.js", "Node.js", "TypeScript", "MongoDB", "AWS"],
      gradient: "gradient-web-dev",
      badgeClass: "badge-web-dev",
      href: "/web-development",
    },
    {
      id: 2,
      title: "QA Automation",
      icon: <Shield className="w-6 h-6" />,
      description: "Comprehensive testing solutions with advanced automation frameworks for reliable software quality.",
      features: [
        "Test Automation Frameworks",
        "API & Performance Testing",
        "CI/CD Pipeline Integration",
        "Cross-Platform Testing",
      ],
      technologies: ["Selenium", "Cypress", "Jest", "Postman", "Jenkins", "Docker"],
      gradient: "gradient-qa-automation",
      badgeClass: "badge-qa-automation",
      href: "/qa-automation",
    },
    {
      id: 3,
      title: "UX Design",
      icon: <Palette className="w-6 h-6" />,
      description: "User-centered design solutions that create engaging experiences and drive business success.",
      features: [
        "User Research & Analysis",
        "Wireframing & Prototyping",
        "Visual Design Systems",
        "Usability Testing & Optimization",
      ],
      technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Principle", "Framer"],
      gradient: "gradient-ux-design",
      badgeClass: "badge-ux-design",
      href: "/ux-design",
    },
  ]

  const stats = [
    { icon: <Award className="w-5 h-5" />, value: "25+", label: "Projects Delivered" },
    { icon: <Star className="w-5 h-5" />, value: "100%", label: "Client Satisfaction" },
    { icon: <Clock className="w-5 h-5" />, value: "24/7", label: "Support Available" },
    { icon: <Globe className="w-5 h-5" />, value: "3+", label: "Years Experience" },
  ]

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const navHeight = 64 // Height of the navbar (h-16 = 64px)
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - navHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }, [])

  // Handle hash navigation on page load
  useEffect(() => {
    const hash = window.location.hash.substring(1)
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash)
        if (element) {
          const navHeight = 64 // Height of the navbar (h-16 = 64px)
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
          const offsetPosition = elementPosition - navHeight

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          })
        }
      }, 100)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Subtle Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-10 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-slate-600 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      <div className="relative z-10">
        <Navigation />

        {/* Hero Section - More Compact */}
        <section id="home" className="pt-20 pb-12 px-4">
          <div className="max-w-6xl mx-auto w-full text-center">
            <Card className="backdrop-blur-xl bg-white/5 border-white/10 shadow-2xl">
              <CardContent className="p-6 md:p-10">
                <div className="space-y-6">
                  <div>
                    <div className="mb-6">
                      <img 
                        src="/assets/softedge-logo.png" 
                        alt="SoftEdge Development" 
                        className="mx-auto max-w-md w-full h-auto"
                      />
                    </div>
                    <p className="text-white/80 text-base max-w-2xl mx-auto leading-relaxed">
                      We deliver innovative, scalable software solutions that drive your business forward. From web
                      development to quality assurance and user experience design.
                    </p>
                  </div>

                  <div className="flex flex-wrap justify-center gap-3">
                    <Button
                      onClick={() => scrollToSection("services")}
                      size="default"
                      className="gradient-web-dev text-white border-0 hover:scale-105 transition-all font-medium shadow-lg"
                    >
                      Our Services
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                    <Button
                      onClick={() => scrollToSection("contact")}
                      variant="outline"
                      size="default"
                      className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:scale-105 transition-all"
                    >
                      Get In Touch
                    </Button>
                  </div>

                  {/* Compact Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-white/20">
                    {stats.map((stat, index) => (
                      <StatCard key={stat.label} stat={stat} index={index} />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* About Section - More Compact */}
        <section id="about" className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">About SoftEdge Development</h2>
              <p className="text-white/80 max-w-2xl mx-auto text-sm">
                We are passionate developers, designers, and QA experts dedicated to creating exceptional digital
                experiences.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card
                className="backdrop-blur-xl bg-white/5 border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-300 group cursor-pointer"
                onClick={() => setMissionModalOpen(true)}
              >
                <CardContent className="p-5">
                  <div className="flex items-center mb-3">
                    <div className="p-2 rounded-lg bg-white/20 mr-3">
                      <Users className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white">Our Mission</h3>
                  </div>
                  <p className="text-white/80 leading-relaxed text-sm">
                    To empower businesses with innovative technology solutions that drive growth, efficiency, and
                    success. We create software that exceeds expectations.
                  </p>
                </CardContent>
              </Card>

              <Card
                className="backdrop-blur-xl bg-white/5 border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-300 group cursor-pointer"
                onClick={() => setApproachModalOpen(true)}
              >
                <CardContent className="p-5">
                  <div className="flex items-center mb-3">
                    <div className="p-2 rounded-lg bg-white/20 mr-3">
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white">Our Approach</h3>
                  </div>
                  <p className="text-white/80 leading-relaxed text-sm">
                    We combine cutting-edge technology with proven methodologies to deliver scalable, maintainable, and
                    future-ready solutions with attention to detail.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Services Section - Enhanced */}
        <section id="services" className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Our Services</h2>
              <p className="text-white/80 max-w-2xl mx-auto text-sm">
                Comprehensive technology solutions to help your business thrive in the digital landscape.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} onNavigate={handleServiceNavigation} />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section - Enhanced */}
        <section id="contact" className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Get In Touch</h2>
              <p className="text-white/80 max-w-2xl mx-auto text-sm">
                Ready to start your next project? Let's discuss how we can help bring your vision to life.
              </p>
            </div>

            <Card className="backdrop-blur-xl bg-white/5 border-white/10 shadow-2xl">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-4">Contact Information</h3>
                    <div className="space-y-3">
                      <div
                        className="flex items-center cursor-pointer group hover:bg-white/5 p-2 rounded-lg transition-all"
                        onClick={handleEmailClick}
                      >
                        <div className="p-2 rounded-lg bg-white/20 mr-3 group-hover:scale-110 transition-transform">
                          <Mail className="w-3 h-3 text-white" />
                        </div>
                        <div>
                          <div className="text-white font-medium text-sm group-hover:text-white transition-colors">
                            Email Us
                          </div>
                          <div className="text-white/80 hover:text-white transition-colors text-xs">
                            contact@softedgedevelopment.com
                          </div>
                        </div>
                      </div>
                      <div
                        className="flex items-center cursor-pointer group hover:bg-white/5 p-2 rounded-lg transition-all"
                        onClick={handleLocationClick}
                      >
                        <div className="p-2 rounded-lg bg-white/20 mr-3 group-hover:scale-110 transition-transform">
                          <MapPin className="w-3 h-3 text-white" />
                        </div>
                        <div>
                          <div className="text-white font-medium text-sm group-hover:text-white transition-colors">
                            Location
                          </div>
                          <div className="text-white/80 text-xs group-hover:text-white transition-colors">
                            Seattle, Washington
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white mb-4">Send us a Message</h3>
                    <form ref={formRef} onSubmit={handleContactFormSubmit} className="space-y-3">
                      <div>
                        <label className="block text-white/80 text-xs mb-1">Name *</label>
                        <input
                          type="text"
                          name="name"
                          required
                          className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                          placeholder="Your Name"
                        />
                      </div>
                      <div>
                        <label className="block text-white/80 text-xs mb-1">Email *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label className="block text-white/80 text-xs mb-1">Message *</label>
                        <textarea
                          name="message"
                          rows={3}
                          required
                          className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-sm"
                          placeholder="Tell us about your project..."
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full gradient-web-dev text-white border-0 hover:scale-105 transition-all text-sm py-2 font-medium shadow-lg"
                      >
                        Send Message
                        <ArrowRight className="w-3 h-3 ml-2" />
                      </Button>
                      <p className="text-white/60 text-xs text-center mt-2">
                        This will open your email client with a pre-filled message to send to us.
                      </p>
                    </form>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Footer - Exact same as web development page */}
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

      {/* About Modals */}
      {missionModalOpen && (
        <AboutModal
          type="mission"
          isOpen={missionModalOpen}
          onClose={() => setMissionModalOpen(false)}
        />
      )}

      {approachModalOpen && (
        <AboutModal
          type="approach"
          isOpen={approachModalOpen}
          onClose={() => setApproachModalOpen(false)}
        />
      )}
    </div>
  )
}
