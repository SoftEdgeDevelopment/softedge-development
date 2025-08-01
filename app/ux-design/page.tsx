"use client"

import { Palette, Users, Eye, Lightbulb, ArrowRight, CheckCircle, Star, Zap, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useCallback, memo } from "react"

const technologies = [
  {
    category: "Design Tools",
    icon: <Palette className="w-4 h-4" />,
    items: ["Figma", "Adobe XD", "Sketch", "InVision", "Principle", "Framer"],
    gradient: "gradient-ux-design",
    badgeClass: "badge-ux-design",
  },
  {
    category: "Prototyping",
    icon: <Zap className="w-4 h-4" />,
    items: ["Figma", "Principle", "ProtoPie", "Marvel", "InVision", "Axure"],
    gradient: "gradient-web-dev",
    badgeClass: "badge-web-dev",
  },
  {
    category: "User Research",
    icon: <Users className="w-4 h-4" />,
    items: ["Hotjar", "Google Analytics", "Maze", "UserTesting", "Optimal Workshop", "Lookback"],
    gradient: "gradient-qa-automation",
    badgeClass: "badge-qa-automation",
  },
  {
    category: "Design Systems",
    icon: <Target className="w-4 h-4" />,
    items: ["Storybook", "Zeroheight", "Abstract", "Notion", "Confluence", "Design Tokens"],
    gradient: "gradient-ux-design",
    badgeClass: "badge-ux-design",
  },
]

const services = [
  {
    title: "User Research & Analysis",
    description: "Deep understanding of your users through comprehensive research and data analysis.",
    features: ["User Interviews", "Surveys & Analytics", "Persona Development", "Journey Mapping"],
    icon: <Users className="w-5 h-5" />,
  },
  {
    title: "UI/UX Design",
    description: "Beautiful and functional interfaces that provide exceptional user experiences.",
    features: ["Wireframing", "Visual Design", "Interactive Prototypes", "Design Systems"],
    icon: <Palette className="w-5 h-5" />,
  },
  {
    title: "Usability Testing",
    description: "Validate designs with real users to ensure optimal usability and satisfaction.",
    features: ["A/B Testing", "User Testing", "Heuristic Evaluation", "Accessibility Audit"],
    icon: <Eye className="w-5 h-5" />,
  },
  {
    title: "Design Strategy",
    description: "Strategic design thinking that aligns with your business goals and user needs.",
    features: ["Design Thinking", "Information Architecture", "Content Strategy", "Brand Guidelines"],
    icon: <Lightbulb className="w-5 h-5" />,
  },
]

const designProcess = [
  {
    step: "01",
    title: "Research",
    description: "Understanding users, market, and business requirements",
    icon: <Users className="w-5 h-5" />,
  },
  {
    step: "02",
    title: "Ideate",
    description: "Brainstorming creative solutions and exploring design possibilities",
    icon: <Lightbulb className="w-5 h-5" />,
  },
  {
    step: "03",
    title: "Design",
    description: "Creating wireframes, prototypes, and high-fidelity designs",
    icon: <Palette className="w-5 h-5" />,
  },
  {
    step: "04",
    title: "Test",
    description: "Validating designs with users and iterating based on feedback",
    icon: <Eye className="w-5 h-5" />,
  },
]

const projects = [
  {
    title: "E-commerce Mobile App",
    description: "Complete UX redesign resulting in 40% increase in conversion rates",
    technologies: ["Figma", "Principle", "Hotjar", "A/B Testing"],
    metrics: "40% increase in conversions",
  },
  {
    title: "SaaS Dashboard Redesign",
    description: "User-centered dashboard design improving user engagement by 60%",
    technologies: ["Adobe XD", "InVision", "UserTesting", "Analytics"],
    metrics: "60% better user engagement",
  },
  {
    title: "Healthcare Platform UX",
    description: "Accessible design system for healthcare professionals and patients",
    technologies: ["Figma", "Storybook", "WCAG", "User Research"],
    metrics: "100% accessibility compliance",
  },
]

const benefits = [
  {
    title: "Better User Engagement",
    description: "Well-designed interfaces keep users engaged and coming back",
    icon: <Users className="w-6 h-6" />,
    gradient: "gradient-ux-design",
  },
  {
    title: "Higher Conversion Rates",
    description: "Optimized user flows lead to better business outcomes",
    icon: <Target className="w-6 h-6" />,
    gradient: "gradient-web-dev",
  },
  {
    title: "Reduced Development Costs",
    description: "Clear designs reduce development time and iterations",
    icon: <Zap className="w-6 h-6" />,
    gradient: "gradient-qa-automation",
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

const ProcessCard = memo(({ process, index }: { process: (typeof designProcess)[0]; index: number }) => (
  <Card
    key={index}
    className="backdrop-blur-xl bg-white/5 border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-300 group"
  >
    <CardContent className="p-5 text-center">
      <div className="text-purple-300 text-2xl font-bold mb-2">{process.step}</div>
      <div className="inline-flex p-2 rounded-lg gradient-ux-design mb-3">
        <div className="text-white">{process.icon}</div>
      </div>
      <h3 className="text-white font-bold text-lg mb-2">{process.title}</h3>
      <p className="text-white/80 text-sm">{process.description}</p>
    </CardContent>
  </Card>
))

ProcessCard.displayName = "ProcessCard"

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
        <div className="p-3 rounded-xl gradient-ux-design mr-4 mt-1 shadow-lg">{service.icon}</div>
        <div className="flex-grow">
          <h3 className="text-white font-bold text-xl mb-3">{service.title}</h3>
          <p className="text-white/80 text-sm mb-4 leading-relaxed">{service.description}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 mt-auto">
        {service.features.map((feature, featureIndex) => (
          <div key={featureIndex} className="flex items-center text-sm text-white/70">
            <CheckCircle className="w-3 h-3 text-purple-400 mr-2 flex-shrink-0" />
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
          <Badge key={techIndex} className="badge-ux-design text-[10px] px-1 py-0">
            {tech}
          </Badge>
        ))}
      </div>
      <div className="flex items-center text-purple-400 text-sm">
        <Star className="w-3 h-3 mr-1" />
        {project.metrics}
      </div>
    </CardContent>
  </Card>
))

ProjectCard.displayName = "ProjectCard"

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
    router.push("/portfolio")
  }, [router])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-10 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      <div className="relative z-10">
        <Navigation />

        {/* Hero Section */}
        <section className="pt-20 pb-12 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <Card className="backdrop-blur-xl bg-white/5 border-white/10 shadow-2xl">
              <CardContent className="p-8">
                <div className="inline-flex p-4 rounded-full gradient-ux-design mb-6">
                  <Palette className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-4">
                  UX Design
                </h1>
                <p className="text-white/80 text-lg max-w-3xl mx-auto mb-6">
                  We create user-centered designs that combine beautiful aesthetics with exceptional functionality. Our
                  design process ensures your users have meaningful and delightful experiences with your product.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Button
                    onClick={handleStartProject}
                    className="gradient-ux-design text-white border-0 hover:scale-105 transition-all font-medium shadow-lg"
                  >
                    Start Design Project
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
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Why Invest in UX Design?</h2>
              <p className="text-white/80 max-w-2xl mx-auto text-sm">
                Great UX design delivers measurable business results and creates lasting user relationships.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <BenefitCard key={benefit.title} benefit={benefit} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Design Process Section */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Our Design Process</h2>
              <p className="text-white/80 max-w-2xl mx-auto text-sm">
                A proven methodology that ensures successful design outcomes through user-centered thinking.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {designProcess.map((process, index) => (
                <ProcessCard key={process.step} process={process} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Design Tools & Technologies</h2>
              <p className="text-white/80 max-w-2xl mx-auto text-sm">
                We use industry-leading design tools and methodologies to create exceptional user experiences.
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
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Our UX Design Services</h2>
              <p className="text-white/80 max-w-2xl mx-auto text-sm">
                Comprehensive design services that cover every aspect of user experience.
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
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Design Success Stories</h2>
              <p className="text-white/80 max-w-2xl mx-auto text-sm">
                Real projects where our UX design solutions delivered exceptional user experiences and business results.
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
                  Ready to Transform Your User Experience?
                </h2>
                <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                  Let's collaborate to create user experiences that delight your customers and drive your business
                  success.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Button
                    onClick={handleStartProject}
                    className="gradient-ux-design text-white border-0 hover:scale-105 transition-all font-medium shadow-lg"
                  >
                    Start Design Project
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button
                    onClick={handleViewPortfolio}
                    variant="outline"
                    className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:scale-105 transition-all"
                  >
                    View Design Portfolio
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
