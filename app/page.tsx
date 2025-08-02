"use client"

import type React from "react"
import {
  Code,
  Shield,
  Palette,
  Mail,
  MapPin,
  Facebook,
  X,
  Linkedin,
  Instagram,
  ArrowRight,
  CheckCircle,
  Users,
  Zap,
  Star,
  Award,
  Clock,
  Globe,
} from "lucide-react"
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

export default function SoftEdgeHomepage() {
  const [missionModalOpen, setMissionModalOpen] = useState(false)
  const [approachModalOpen, setApproachModalOpen] = useState(false)
  const router = useRouter()
  const formRef = useRef<HTMLFormElement>(null)

  // Close modal when clicking outside
  const closeModal = useCallback((e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setMissionModalOpen(false)
      setApproachModalOpen(false)
    }
  }, [])

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
        <section id="home" className="min-h-[85vh] flex items-center justify-center px-4 py-16">
          <div className="max-w-6xl mx-auto w-full text-center">
            <Card className="backdrop-blur-xl bg-white/5 border-white/10 shadow-2xl">
              <CardContent className="p-6 md:p-10">
                <div className="space-y-6">
                  <div>
                    <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-3">
                      SoftEdge Development
                    </h1>
                    <p className="text-lg md:text-xl text-blue-200 mb-4">Cutting-Edge Software Solutions</p>
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
                    <div className="p-2 rounded-lg gradient-mission mr-3">
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
                    <div className="p-2 rounded-lg gradient-approach mr-3">
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
                        <div className="p-2 rounded-lg gradient-web-dev mr-3 group-hover:scale-110 transition-transform">
                          <Mail className="w-3 h-3 text-white" />
                        </div>
                        <div>
                          <div className="text-white font-medium text-sm group-hover:text-blue-200 transition-colors">
                            Email Us
                          </div>
                          <div className="text-blue-200 hover:text-blue-100 transition-colors text-xs">
                            contact@softedgedevelopment.com
                          </div>
                        </div>
                      </div>
                      <div
                        className="flex items-center cursor-pointer group hover:bg-white/5 p-2 rounded-lg transition-all"
                        onClick={handleLocationClick}
                      >
                        <div className="p-2 rounded-lg gradient-ux-design mr-3 group-hover:scale-110 transition-transform">
                          <MapPin className="w-3 h-3 text-white" />
                        </div>
                        <div>
                          <div className="text-white font-medium text-sm group-hover:text-purple-200 transition-colors">
                            Location
                          </div>
                          <div className="text-white/80 text-xs group-hover:text-purple-200 transition-colors">
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

        {/* Footer - More Compact */}
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
                      >
                        <Facebook className="w-3 h-3" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-white/10 border-white/20 text-white hover:bg-white/20 p-2"
                      >
                        <X className="w-3 h-3" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-white/10 border-white/20 text-white hover:bg-white/20 p-2"
                      >
                        <Linkedin className="w-3 h-3" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-white/10 border-white/20 text-white hover:bg-white/20 p-2"
                      >
                        <Instagram className="w-3 h-3" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-white/10 border-white/20 text-white hover:bg-white/20 p-2"
                      >
                        <MediumIcon className="w-3 h-3" />
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
                      >
                        Web Development
                      </Link>
                      <Link
                        href="/qa-automation"
                        className="block text-white/70 hover:text-white transition-colors text-xs text-left"
                      >
                        Quality & Test Automation
                      </Link>
                      <Link
                        href="/ux-design"
                        className="block text-white/70 hover:text-white transition-colors text-xs text-left"
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
                        onClick={handleEmailClick}
                        className="block text-white/70 hover:text-white transition-colors text-xs text-left cursor-pointer"
                      >
                        contact@softedgedevelopment.com
                      </button>
                      <button
                        onClick={handleLocationClick}
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
        {/* Mission Modal */}
        {missionModalOpen && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <Card className="backdrop-blur-xl bg-gradient-to-br from-slate-800/90 to-slate-900/90 border border-pink-400/30 shadow-2xl max-w-3xl w-full transform animate-in fade-in-0 zoom-in-95 duration-300">
              <CardContent className="p-0">
                {/* Header */}
                <div className="bg-gradient-to-r from-pink-500 to-rose-500 p-6 rounded-t-lg">
                  <div className="flex items-center">
                    <div className="p-3 rounded-full bg-white/20 mr-4">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white">Our Mission</h2>
                      <p className="text-pink-100 text-sm">Empowering businesses through innovation</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="space-y-6 text-white/90 leading-relaxed">
                    <p className="text-lg">
                      At SoftEdge Development, our mission is to{" "}
                      <span className="text-pink-300 font-semibold">empower businesses</span> with innovative technology
                      solutions that drive growth, efficiency, and success. We believe that exceptional software should
                      not only meet current needs but anticipate future challenges.
                    </p>
                    <p>
                      We are committed to creating software that exceeds expectations through meticulous attention to
                      detail, cutting-edge technology implementation, and a deep understanding of our clients' unique
                      business requirements.
                    </p>
                    <p>
                      Our goal is to be the{" "}
                      <span className="text-pink-300 font-semibold">trusted technology partner</span> that transforms
                      ideas into powerful, scalable solutions that make a real difference in how businesses operate and
                      grow.
                    </p>
                  </div>

                  <div className="mt-8 flex justify-center">
                    <Button
                      onClick={() => setMissionModalOpen(false)}
                      className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white border-0 px-8 py-3 text-lg font-medium shadow-lg hover:scale-105 transition-all"
                    >
                      Close
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Approach Modal */}
        {approachModalOpen && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <Card className="backdrop-blur-xl bg-gradient-to-br from-slate-800/90 to-slate-900/90 border border-orange-400/30 shadow-2xl max-w-3xl w-full transform animate-in fade-in-0 zoom-in-95 duration-300">
              <CardContent className="p-0">
                {/* Header */}
                <div className="bg-gradient-to-r from-orange-500 to-red-500 p-6 rounded-t-lg">
                  <div className="flex items-center">
                    <div className="p-3 rounded-full bg-white/20 mr-4">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white">Our Approach</h2>
                      <p className="text-orange-100 text-sm">Innovation meets reliability</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="space-y-6 text-white/90 leading-relaxed">
                    <p className="text-lg">
                      We combine <span className="text-orange-300 font-semibold">cutting-edge technology</span> with
                      proven methodologies to deliver scalable, maintainable, and future-ready solutions. Our approach
                      is built on three core principles: innovation, reliability, and attention to detail.
                    </p>
                    <p>
                      Every project begins with a deep dive into understanding your business goals, technical
                      requirements, and user needs. We then architect solutions that not only solve today's challenges
                      but are designed to evolve with your business.
                    </p>
                    <p>
                      Our development process emphasizes{" "}
                      <span className="text-orange-300 font-semibold">clean code, comprehensive testing</span>, and
                      continuous integration to ensure that every solution we deliver is robust, secure, and performs at
                      the highest level.
                    </p>
                    <p>
                      We believe in transparent communication, agile development practices, and building long-term
                      partnerships with our clients based on trust and exceptional results.
                    </p>
                  </div>

                  <div className="mt-8 flex justify-center">
                    <Button
                      onClick={() => setApproachModalOpen(false)}
                      className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-0 px-8 py-3 text-lg font-medium shadow-lg hover:scale-105 transition-all"
                    >
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
