"use client"

import { useState, useCallback, useEffect, useRef } from "react"
import { Menu, X, Code, Shield, Palette } from "lucide-react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const navRef = useRef<HTMLDivElement>(null)

  const scrollToSection = useCallback(
    (sectionId: string) => {
      if (pathname !== "/") {
        // Navigate to home page first, then scroll
        router.push(`/#${sectionId}`)
        setIsMenuOpen(false)
        // Wait for navigation to complete, then scroll
        setTimeout(() => {
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
        }, 100)
        return
      }

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
      setIsMenuOpen(false)
    },
    [pathname, router],
  )

  const handleServiceNavigation = useCallback(
    (href: string) => {
      router.push(href)
      setIsMenuOpen(false)
      // Scroll to top after navigation
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
      }, 100)
    },
    [router],
  )

  const handleMenuToggle = useCallback(() => {
    setIsMenuOpen((prev) => !prev)
  }, [])

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false)
  }, [])

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isMenuOpen])

  const serviceLinks = [
    {
      href: "/web-development",
      label: "Web Dev",
      icon: <Code className="w-4 h-4" />,
      hoverClass: "hover:bg-blue-500/20 hover:text-blue-200 hover:border-blue-400/50",
    },
    {
      href: "/qa-automation",
      label: "QA",
      icon: <Shield className="w-4 h-4" />,
      hoverClass: "hover:bg-green-500/20 hover:text-green-200 hover:border-green-400/50",
    },
    {
      href: "/ux-design",
      label: "UX Design",
      icon: <Palette className="w-4 h-4" />,
      hoverClass: "hover:bg-purple-500/20 hover:text-purple-200 hover:border-purple-400/50",
    },
  ]

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/5 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent hover:scale-105 transition-transform"
            onClick={() => {
              setTimeout(() => {
                window.scrollTo({ top: 0, behavior: "smooth" })
              }, 100)
            }}
          >
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favi-1lbemBAbrnDAtnfkr34QcQ9NFCETUh.png"
              alt="SoftEdge Development"
              className="w-6 h-6"
            />
            SoftEdge Development
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {/* Regular Nav Links */}
            <button
              onClick={() => scrollToSection("home")}
              className="text-white/80 hover:text-white hover:bg-white/10 transition-all text-sm px-4 py-2 rounded-lg font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-white/80 hover:text-white hover:bg-white/10 transition-all text-sm px-4 py-2 rounded-lg font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-white/80 hover:text-white hover:bg-white/10 transition-all text-sm px-4 py-2 rounded-lg font-medium"
            >
              Our Services
            </button>

            {/* Service Links with Clean Design */}
            {serviceLinks.map((service) => (
              <button
                key={service.href}
                onClick={() => handleServiceNavigation(service.href)}
                className={`
                  flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium
                  text-white/80 hover:text-white
                  border border-white/20 bg-white/5
                  transition-all duration-300
                  ${service.hoverClass}
                  ${pathname === service.href ? "bg-white/15 text-white border-white/30" : ""}
                `}
              >
                {service.icon}
                {service.label}
              </button>
            ))}

            <button
              onClick={() => scrollToSection("contact")}
              className="text-white/80 hover:text-white hover:bg-white/10 transition-all text-sm px-4 py-2 rounded-lg font-medium"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-white" onClick={handleMenuToggle}>
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/10">
            <div className="flex flex-col space-y-3 px-2">
              <button
                onClick={() => scrollToSection("home")}
                className="w-full text-white/80 hover:text-white transition-colors text-center text-sm px-4 py-3 rounded-lg hover:bg-white/10 border border-transparent hover:border-white/20"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="w-full text-white/80 hover:text-white transition-colors text-center text-sm px-4 py-3 rounded-lg hover:bg-white/10 border border-transparent hover:border-white/20"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="w-full text-white/80 hover:text-white transition-colors text-center text-sm px-4 py-3 rounded-lg hover:bg-white/10 border border-transparent hover:border-white/20"
              >
                Our Services
              </button>

              {/* Mobile Service Links */}
              {serviceLinks.map((service) => (
                <button
                  key={service.href}
                  onClick={() => handleServiceNavigation(service.href)}
                  className={`
                    w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-medium
                    text-white/80 hover:text-white
                    border border-white/20 bg-white/5
                    transition-all duration-300
                    ${service.hoverClass}
                    ${pathname === service.href ? "bg-white/15 text-white border-white/30" : ""}
                  `}
                >
                  {service.icon}
                  {service.label}
                </button>
              ))}

              <button
                onClick={() => scrollToSection("contact")}
                className="w-full text-white/80 hover:text-white transition-colors text-center text-sm px-4 py-3 rounded-lg hover:bg-white/10 border border-transparent hover:border-white/20"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
