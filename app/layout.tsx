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
    default: "SoftEdge Development | Expert Web Development, QA Automation & UX Design Services in Seattle",
    template: "%s | SoftEdge Development",
  },
  description:
    "Leading Seattle-based software development company specializing in full-stack web development, quality assurance automation, and user experience design. Custom React, Node.js, and cloud solutions for businesses.",
  keywords: [
    "web development Seattle",
    "QA automation testing",
    "UX design services",
    "full stack developer",
    "React development",
    "Node.js development",
    "software testing automation",
    "custom web applications",
    "Seattle software company",
    "quality assurance services",
    "user experience design",
    "mobile app development",
    "API development",
    "cloud deployment",
    "DevOps services",
    "agile development",
    "software consulting",
  ],
  authors: [{ name: "SoftEdge Development", url: "https://softedgedevelopment.com" }],
  creator: "SoftEdge Development",
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
    siteName: "SoftEdge Development",
    title: "SoftEdge Development | Expert Web Development, QA Automation & UX Design Services",
    description:
      "Leading Seattle-based software development company specializing in full-stack web development, quality assurance automation, and user experience design. Custom React, Node.js, and cloud solutions for businesses.",
    images: [
      {
        url: "/assets/softedge-homepage.png",
        width: 1200,
        height: 630,
        alt: "SoftEdge Development - Web Development, QA Automation, UX Design Services",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SoftEdge Development | Expert Web Development, QA Automation & UX Design Services",
    description:
      "Leading Seattle-based software development company specializing in full-stack web development, quality assurance automation, and user experience design.",
    images: ["/assets/softedge-homepage.png"],
    creator: "@softedgedev",
    site: "@softedgedev",
  },
  alternates: {
    canonical: "https://softedgedevelopment.com",
  },
  category: "Technology",
  classification: "Software Development Services",
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
              description:
                "Leading Seattle-based software development company specializing in full-stack web development, quality assurance automation, and user experience design.",
              url: "https://softedgedevelopment.com",
              logo: {
                "@type": "ImageObject",
                url: "https://softedgedevelopment.com/assets/softedge-homepage.png",
                width: 1200,
                height: 630,
              },
              image: "https://softedgedevelopment.com/assets/softedge-homepage.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-206-739-7583",
                contactType: "customer service",
                email: "contact@softedgedevelopment.com",
                availableLanguage: ["English"],
                areaServed: {
                  "@type": "State",
                  name: "Washington",
                },
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Seattle",
                addressRegion: "WA",
                addressCountry: "US",
              },
              foundingDate: "2022",
              numberOfEmployees: "1-10",
              sameAs: ["https://linkedin.com/company/softedge-development", "https://github.com/softedgedevelopment"],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Software Development Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Web Development",
                      description: "Full-stack web development using React, Node.js, and modern technologies",
                      provider: {
                        "@type": "Organization",
                        name: "SoftEdge Development",
                      },
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "QA Automation",
                      description: "Comprehensive quality assurance and test automation services",
                      provider: {
                        "@type": "Organization",
                        name: "SoftEdge Development",
                      },
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "UX Design",
                      description: "User experience design and interface optimization services",
                      provider: {
                        "@type": "Organization",
                        name: "SoftEdge Development",
                      },
                    },
                  },
                ],
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                reviewCount: "25",
                bestRating: "5",
                worstRating: "1",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
