"use client"

import { Shield, FileText, Scale, Eye, Lock, AlertTriangle, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import Link from "next/link"

export default function TermsOfServicePage() {
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
          <div className="max-w-4xl mx-auto text-center">
            <Card className="backdrop-blur-xl bg-white/5 border-white/10 shadow-2xl">
              <CardContent className="p-8">
                <div className="inline-flex p-4 rounded-full gradient-web-dev mb-6">
                  <Scale className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-4">
                  Terms of Service
                </h1>
                <p className="text-white/80 text-lg max-w-2xl mx-auto mb-6">
                  Please read these terms and conditions carefully before using our services.
                </p>
                <p className="text-white/60 text-sm">Last updated: January 1, 2025</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Acceptance of Terms */}
            <Card className="backdrop-blur-xl bg-white/5 border-white/10 shadow-2xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-xl gradient-web-dev mr-4 shadow-lg">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">1. Acceptance of Terms</h2>
                </div>
                <div className="text-white/80 space-y-4 leading-relaxed">
                  <p>
                    By accessing and using SoftEdge Development's services, you accept and agree to be bound by the
                    terms and provision of this agreement. If you do not agree to abide by the above, please do not use
                    this service.
                  </p>
                  <p>
                    These Terms of Service constitute a legally binding agreement made between you, whether personally
                    or on behalf of an entity ("you") and SoftEdge Development ("we," "us," or "our"), concerning your
                    access to and use of our services.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Services Description */}
            <Card className="backdrop-blur-xl bg-white/5 border-white/10 shadow-2xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-xl gradient-qa-automation mr-4 shadow-lg">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">2. Services Description</h2>
                </div>
                <div className="text-white/80 space-y-4 leading-relaxed">
                  <p>
                    SoftEdge Development provides web development, quality assurance automation, and user experience
                    design services. Our services include but are not limited to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Custom web application development</li>
                    <li>E-commerce solutions and platforms</li>
                    <li>API development and integration</li>
                    <li>Test automation frameworks and implementation</li>
                    <li>User interface and user experience design</li>
                    <li>Technical consulting and support</li>
                  </ul>
                  <p>
                    We reserve the right to modify, suspend, or discontinue any aspect of our services at any time
                    without prior notice.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* User Responsibilities */}
            <Card className="backdrop-blur-xl bg-white/5 border-white/10 shadow-2xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-xl gradient-ux-design mr-4 shadow-lg">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">3. User Responsibilities</h2>
                </div>
                <div className="text-white/80 space-y-4 leading-relaxed">
                  <p>By using our services, you agree to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Provide accurate and complete information when requested</li>
                    <li>Maintain the confidentiality of any account credentials</li>
                    <li>Use our services only for lawful purposes</li>
                    <li>Not interfere with or disrupt our services or servers</li>
                    <li>Respect intellectual property rights</li>
                    <li>Comply with all applicable laws and regulations</li>
                  </ul>
                  <p>
                    You are responsible for all activities that occur under your account and for maintaining the
                    security of your account information.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Intellectual Property */}
            <Card className="backdrop-blur-xl bg-white/5 border-white/10 shadow-2xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-xl gradient-web-dev mr-4 shadow-lg">
                    <Lock className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">4. Intellectual Property</h2>
                </div>
                <div className="text-white/80 space-y-4 leading-relaxed">
                  <p>
                    The service and its original content, features, and functionality are and will remain the exclusive
                    property of SoftEdge Development and its licensors. The service is protected by copyright,
                    trademark, and other laws.
                  </p>
                  <p>
                    Upon full payment for custom development work, you will own the rights to the final deliverables
                    created specifically for your project. However, SoftEdge Development retains the right to use
                    general methodologies, techniques, and know-how developed during the project.
                  </p>
                  <p>
                    You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly
                    perform, republish, download, store, or transmit any of our proprietary materials without prior
                    written consent.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Limitation of Liability */}
            <Card className="backdrop-blur-xl bg-white/5 border-white/10 shadow-2xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-xl gradient-qa-automation mr-4 shadow-lg">
                    <AlertTriangle className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">5. Limitation of Liability</h2>
                </div>
                <div className="text-white/80 space-y-4 leading-relaxed">
                  <p>
                    In no event shall SoftEdge Development, nor its directors, employees, partners, agents, suppliers,
                    or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages,
                    including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
                  </p>
                  <p>
                    Our total liability to you for all damages, losses, and causes of action shall not exceed the amount
                    paid by you to SoftEdge Development for the specific service giving rise to the liability.
                  </p>
                  <p>
                    We make no warranties or representations about the accuracy or completeness of our services and
                    assume no liability or responsibility for any errors or omissions in the content of our services.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Termination */}
            <Card className="backdrop-blur-xl bg-white/5 border-white/10 shadow-2xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-xl gradient-ux-design mr-4 shadow-lg">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">6. Termination</h2>
                </div>
                <div className="text-white/80 space-y-4 leading-relaxed">
                  <p>
                    We may terminate or suspend your access immediately, without prior notice or liability, for any
                    reason whatsoever, including without limitation if you breach the Terms.
                  </p>
                  <p>
                    Upon termination, your right to use the service will cease immediately. If you wish to terminate
                    your account, you may simply discontinue using the service.
                  </p>
                  <p>
                    All provisions of the Terms which by their nature should survive termination shall survive
                    termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity,
                    and limitations of liability.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="backdrop-blur-xl bg-white/5 border-white/10 shadow-2xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-xl gradient-web-dev mr-4 shadow-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">7. Contact Information</h2>
                </div>
                <div className="text-white/80 space-y-4 leading-relaxed">
                  <p>If you have any questions about these Terms of Service, please contact us at:</p>
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <p className="font-medium text-white mb-2">SoftEdge Development</p>
                    <p>Email: contact@softedgedevelopment.com</p>
                    <p>Location: Seattle, Washington</p>
                  </div>
                  <p>We will make every effort to respond to your inquiries within 48 hours during business days.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Back to Home */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="backdrop-blur-xl bg-white/5 border-white/10 shadow-2xl">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-4">Questions About Our Terms?</h2>
                <p className="text-white/80 mb-6">
                  If you have any questions about these terms of service, please don't hesitate to contact us.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Link href="/#contact">
                    <Button className="gradient-web-dev text-white border-0 hover:scale-105 transition-all font-medium shadow-lg">
                      Contact Us
                    </Button>
                  </Link>
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
      </div>
    </div>
  )
}
