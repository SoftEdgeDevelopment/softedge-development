import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
  fallback: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#3b82f6" },
    { media: "(prefers-color-scheme: dark)", color: "#1e40af" },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL("https://softedgedevelopment.com"),
  title: {
    default:
      "SoftEdge Development | #1 Seattle Web Development, QA Automation & UX Design Company | Expert Software Solutions",
    template: "%s | SoftEdge Development - Premier Seattle Software Development",
  },
  description:
    "🏆 #1 Rated Seattle Software Development Company | Expert Web Development, QA Automation & UX Design Services | React, Node.js, TypeScript | 5-Star Reviews | Free Consultation | Custom Software Solutions for Businesses | Award-Winning Team",
  keywords: [
    // Primary keywords
    "Seattle web development company",
    "best software development Seattle",
    "top web developers Seattle",
    "Seattle QA automation services",
    "UX design Seattle",
    "custom software development Seattle",

    // Service-specific long-tail keywords
    "React development services Seattle",
    "Node.js developers Seattle",
    "TypeScript development company",
    "full stack web development Seattle",
    "mobile app development Seattle",
    "e-commerce development Seattle",
    "API development services",
    "cloud deployment services",

    // Industry-specific keywords
    "enterprise software development",
    "startup web development",
    "SaaS development Seattle",
    "fintech software development",
    "healthcare software development",
    "real estate software solutions",

    // Quality and service keywords
    "award winning web development",
    "5 star software development",
    "agile development methodology",
    "DevOps services Seattle",
    "software consulting Seattle",
    "digital transformation services",

    // Location-based keywords
    "Bellevue web development",
    "Redmond software development",
    "Tacoma web developers",
    "Washington state software company",
    "Pacific Northwest tech company",

    // Technology keywords
    "Next.js development services",
    "React Native app development",
    "MongoDB database development",
    "AWS cloud solutions",
    "Vercel deployment services",
    "GraphQL API development",

    // Testing and QA keywords
    "automated testing services",
    "Selenium test automation",
    "Cypress testing framework",
    "performance testing services",
    "security testing services",
    "load testing services",

    // Design keywords
    "UI UX design Seattle",
    "responsive web design",
    "mobile first design",
    "accessibility compliance",
    "user experience optimization",
    "conversion rate optimization",
  ],
  authors: [{ name: "SoftEdge Development", url: "https://softedgedevelopment.com" }],
  creator: "SoftEdge Development - Premier Seattle Software Development Company",
  publisher: "SoftEdge Development",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://softedgedevelopment.com",
    siteName: "SoftEdge Development - #1 Seattle Software Development Company",
    title: "SoftEdge Development | #1 Seattle Web Development, QA Automation & UX Design Company",
    description:
      "🏆 Award-winning Seattle software development company with 5-star reviews. Expert web development, QA automation & UX design services. React, Node.js, TypeScript specialists. Free consultation available.",
    images: [
      {
        url: "/assets/softedge-homepage.png",
        width: 1200,
        height: 630,
        alt: "SoftEdge Development - #1 Seattle Software Development Company - Web Development, QA Automation, UX Design",
        type: "image/png",
      },
      {
        url: "/assets/softedge-logo.png",
        width: 800,
        height: 400,
        alt: "SoftEdge Development Logo - Premier Seattle Software Company",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SoftEdge Development | #1 Seattle Software Development Company | 5-Star Reviews",
    description:
      "🏆 Award-winning Seattle software development company. Expert web development, QA automation & UX design. React, Node.js specialists. Free consultation.",
    images: ["/assets/softedge-homepage.png"],
    creator: "@softedgedev",
    site: "@softedgedev",
  },
  alternates: {
    canonical: "https://softedgedevelopment.com",
    languages: {
      "en-US": "https://softedgedevelopment.com",
    },
  },
  category: "Technology",
  classification: "Professional Software Development Services",
  generator: "Next.js",
  applicationName: "SoftEdge Development",
  referrer: "origin-when-cross-origin",
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
    other: {
      "msvalidate.01": "your-bing-verification-code",
    },
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "format-detection": "telephone=no",
    "google-site-verification": "your-google-verification-code",
    "msvalidate.01": "your-bing-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link
          rel="icon"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favi-1lbemBAbrnDAtnfkr34QcQ9NFCETUh.png"
          type="image/png"
        />
        <link
          rel="apple-touch-icon"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favi-1lbemBAbrnDAtnfkr34QcQ9NFCETUh.png"
        />
        <link
          rel="shortcut icon"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favi-1lbemBAbrnDAtnfkr34QcQ9NFCETUh.png"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "SoftEdge Development",
              alternateName: "SoftEdge Dev",
              description:
                "Award-winning Seattle-based software development company specializing in full-stack web development, quality assurance automation, and user experience design. 5-star rated with expert React, Node.js, and TypeScript development services.",
              url: "https://softedgedevelopment.com",
              logo: {
                "@type": "ImageObject",
                url: "https://softedgedevelopment.com/assets/softedge-logo.png",
                width: 800,
                height: 400,
              },
              image: [
                "https://softedgedevelopment.com/assets/softedge-homepage.png",
                "https://softedgedevelopment.com/assets/softedge-logo.png",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-206-739-7583",
                contactType: "customer service",
                email: "contact@softedgedevelopment.com",
                availableLanguage: ["English"],
                areaServed: [
                  {
                    "@type": "State",
                    name: "Washington",
                  },
                  {
                    "@type": "City",
                    name: "Seattle",
                  },
                  {
                    "@type": "City",
                    name: "Bellevue",
                  },
                  {
                    "@type": "City",
                    name: "Redmond",
                  },
                ],
                hoursAvailable: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "09:00",
                  closes: "18:00",
                  validFrom: "2022-01-01",
                  validThrough: "2030-12-31",
                },
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Seattle",
                addressRegion: "WA",
                addressCountry: "US",
                postalCode: "98101",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "47.6062",
                longitude: "-122.3321",
              },
              foundingDate: "2022",
              numberOfEmployees: "1-10",
              slogan: "Innovative Software Solutions for Modern Businesses",
              keywords: "web development, software development, QA automation, UX design, React, Node.js, Seattle",
              sameAs: [
                "https://linkedin.com/company/softedge-development",
                "https://github.com/softedgedevelopment",
                "https://twitter.com/softedgedev",
                "https://instagram.com/softedgedev",
                "https://medium.com/@softedgedev",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Professional Software Development Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Full-Stack Web Development",
                      description:
                        "Custom web applications using React, Next.js, Node.js, and TypeScript with cloud deployment",
                      provider: {
                        "@type": "Organization",
                        name: "SoftEdge Development",
                      },
                      areaServed: "Seattle, WA",
                      availableChannel: {
                        "@type": "ServiceChannel",
                        serviceUrl: "https://softedgedevelopment.com/web-development",
                        serviceType: "Web Development",
                      },
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "QA Automation & Testing",
                      description: "Comprehensive quality assurance, test automation, and performance testing services",
                      provider: {
                        "@type": "Organization",
                        name: "SoftEdge Development",
                      },
                      areaServed: "Seattle, WA",
                      availableChannel: {
                        "@type": "ServiceChannel",
                        serviceUrl: "https://softedgedevelopment.com/qa-automation",
                        serviceType: "Quality Assurance",
                      },
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "UX/UI Design Services",
                      description: "User experience design, interface optimization, and conversion rate optimization",
                      provider: {
                        "@type": "Organization",
                        name: "SoftEdge Development",
                      },
                      areaServed: "Seattle, WA",
                      availableChannel: {
                        "@type": "ServiceChannel",
                        serviceUrl: "https://softedgedevelopment.com/ux-design",
                        serviceType: "UX Design",
                      },
                    },
                  },
                ],
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                reviewCount: "47",
                bestRating: "5",
                worstRating: "1",
              },
              review: [
                {
                  "@type": "Review",
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                  },
                  author: {
                    "@type": "Person",
                    name: "Sarah Johnson",
                  },
                  reviewBody:
                    "Exceptional web development services. SoftEdge delivered our e-commerce platform on time and exceeded expectations.",
                },
                {
                  "@type": "Review",
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                  },
                  author: {
                    "@type": "Person",
                    name: "Michael Chen",
                  },
                  reviewBody:
                    "Outstanding QA automation services. Their testing framework caught critical bugs before launch.",
                },
              ],
              priceRange: "$$",
              paymentAccepted: ["Cash", "Credit Card", "Invoice", "PayPal"],
              currenciesAccepted: "USD",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://softedgedevelopment.com/#localbusiness",
              name: "SoftEdge Development",
              image: "https://softedgedevelopment.com/assets/softedge-logo.png",
              telephone: "+1-206-739-7583",
              email: "contact@softedgedevelopment.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Seattle",
                addressLocality: "Seattle",
                addressRegion: "WA",
                postalCode: "98101",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 47.6062,
                longitude: -122.3321,
              },
              url: "https://softedgedevelopment.com",
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "09:00",
                closes: "18:00",
              },
              priceRange: "$$",
              servesCuisine: "Software Development Services",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What web development services does SoftEdge Development offer?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "SoftEdge Development offers full-stack web development services including React and Next.js development, Node.js backend development, API integration, cloud deployment, and custom web applications for businesses of all sizes.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How much does web development cost in Seattle?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Web development costs vary based on project complexity. SoftEdge Development offers competitive pricing for Seattle area businesses with custom quotes based on your specific requirements. Contact us for a free consultation and estimate.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What makes SoftEdge Development the best choice for Seattle businesses?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "SoftEdge Development is rated #1 in Seattle with 5-star reviews, expert developers specializing in modern technologies like React and Node.js, comprehensive QA testing, and proven track record of delivering successful projects on time and within budget.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you provide QA automation and testing services?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, SoftEdge Development provides comprehensive QA automation services including Selenium and Cypress test automation, API testing, performance testing, and CI/CD pipeline integration to ensure your software is reliable and bug-free.",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
