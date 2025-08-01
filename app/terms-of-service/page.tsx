"use client"

import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Scale, Shield, FileText, AlertTriangle, Users, Clock } from "lucide-react"
import Link from "next/link"

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-10 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-slate-600 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      <div className="relative z-10">
        <Navigation />

        {/* Header */}
        <section className="pt-20 pb-12 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Link href="/">
                <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 mb-4">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
            </div>

            <Card className="backdrop-blur-xl bg-white/5 border-white/10 shadow-2xl">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 mb-4">
                    <Scale className="w-8 h-8 text-white" />
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-2">
                    Terms of Service
                  </h1>
                  <p className="text-white/80 text-sm">Last updated: January 31, 2025</p>
                </div>

                <div className="prose prose-invert max-w-none">
                  <div className="space-y-8">
                    {/* Introduction */}
                    <section>
                      <div className="flex items-center mb-4">
                        <FileText className="w-5 h-5 text-blue-300 mr-2" />
                        <h2 className="text-xl font-bold text-white">1. Introduction</h2>
                      </div>
                      <p className="text-white/80 leading-relaxed">
                        Welcome to SoftEdge Development. These Terms of Service ("Terms") govern your use of our website
                        and services. By accessing or using our services, you agree to be bound by these Terms. If you
                        disagree with any part of these terms, then you may not access our services.
                      </p>
                    </section>

                    {/* Services */}
                    <section>
                      <div className="flex items-center mb-4">
                        <Shield className="w-5 h-5 text-green-300 mr-2" />
                        <h2 className="text-xl font-bold text-white">2. Services</h2>
                      </div>
                      <p className="text-white/80 leading-relaxed mb-4">
                        SoftEdge Development provides web development, QA automation, and UX design services. Our
                        services include but are not limited to:
                      </p>
                      <ul className="list-disc list-inside text-white/80 space-y-2 ml-4">
                        <li>Custom web application development</li>
                        <li>Full-stack development solutions</li>
                        <li>Quality assurance and testing automation</li>
                        <li>User experience and interface design</li>
                        <li>Technical consulting and support</li>
                      </ul>
                    </section>

                    {/* User Responsibilities */}
                    <section>
                      <div className="flex items-center mb-4">
                        <Users className="w-5 h-5 text-purple-300 mr-2" />
                        <h2 className="text-xl font-bold text-white">3. User Responsibilities</h2>
                      </div>
                      <p className="text-white/80 leading-relaxed mb-4">When using our services, you agree to:</p>
                      <ul className="list-disc list-inside text-white/80 space-y-2 ml-4">
                        <li>Provide accurate and complete information</li>
                        <li>Maintain the confidentiality of your account credentials</li>
                        <li>Use our services in compliance with applicable laws</li>
                        <li>Not engage in any activity that could harm our systems or other users</li>
                        <li>Respect intellectual property rights</li>
                      </ul>
                    </section>

                    {/* Payment Terms */}
                    <section>
                      <div className="flex items-center mb-4">
                        <Clock className="w-5 h-5 text-yellow-300 mr-2" />
                        <h2 className="text-xl font-bold text-white">4. Payment Terms</h2>
                      </div>
                      <p className="text-white/80 leading-relaxed mb-4">
                        Payment terms are established on a per-project basis and will be outlined in individual service
                        agreements. General payment terms include:
                      </p>
                      <ul className="list-disc list-inside text-white/80 space-y-2 ml-4">
                        <li>Payment schedules are defined in project contracts</li>
                        <li>Late payments may incur additional fees</li>
                        <li>Refunds are handled according to project-specific agreements</li>
                        <li>All prices are subject to applicable taxes</li>
                      </ul>
                    </section>

                    {/* Intellectual Property */}
                    <section>
                      <div className="flex items-center mb-4">
                        <Shield className="w-5 h-5 text-orange-300 mr-2" />
                        <h2 className="text-xl font-bold text-white">5. Intellectual Property</h2>
                      </div>
                      <p className="text-white/80 leading-relaxed">
                        Upon full payment, clients receive ownership of custom-developed code and designs created
                        specifically for their project. SoftEdge Development retains rights to general methodologies,
                        frameworks, and pre-existing intellectual property. Third-party components remain subject to
                        their respective licenses.
                      </p>
                    </section>

                    {/* Limitation of Liability */}
                    <section>
                      <div className="flex items-center mb-4">
                        <AlertTriangle className="w-5 h-5 text-red-300 mr-2" />
                        <h2 className="text-xl font-bold text-white">6. Limitation of Liability</h2>
                      </div>
                      <p className="text-white/80 leading-relaxed">
                        SoftEdge Development's liability is limited to the amount paid for services. We are not liable
                        for indirect, incidental, or consequential damages. Our services are provided "as is" without
                        warranties beyond those required by law.
                      </p>
                    </section>

                    {/* Termination */}
                    <section>
                      <div className="flex items-center mb-4">
                        <FileText className="w-5 h-5 text-gray-300 mr-2" />
                        <h2 className="text-xl font-bold text-white">7. Termination</h2>
                      </div>
                      <p className="text-white/80 leading-relaxed">
                        Either party may terminate services with written notice as specified in individual project
                        agreements. Upon termination, payment for completed work is due, and both parties must return
                        confidential information.
                      </p>
                    </section>

                    {/* Changes to Terms */}
                    <section>
                      <div className="flex items-center mb-4">
                        <Scale className="w-5 h-5 text-blue-300 mr-2" />
                        <h2 className="text-xl font-bold text-white">8. Changes to Terms</h2>
                      </div>
                      <p className="text-white/80 leading-relaxed">
                        We reserve the right to modify these Terms at any time. Changes will be posted on this page with
                        an updated revision date. Continued use of our services after changes constitutes acceptance of
                        the new Terms.
                      </p>
                    </section>

                    {/* Contact Information */}
                    <section>
                      <div className="flex items-center mb-4">
                        <Users className="w-5 h-5 text-green-300 mr-2" />
                        <h2 className="text-xl font-bold text-white">9. Contact Information</h2>
                      </div>
                      <p className="text-white/80 leading-relaxed">
                        If you have any questions about these Terms of Service, please contact us at:
                      </p>
                      <div className="mt-4 p-4 bg-white/5 rounded-lg border border-white/10">
                        <p className="text-white font-medium">SoftEdge Development</p>
                        <p className="text-white/80">Email: contact@softedgedevelopment.com</p>
                        <p className="text-white/80">Location: Seattle, Washington</p>
                      </div>
                    </section>
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
                <div className="text-center">
                  <p className="text-white/60 text-xs">© 2025 SoftEdge Development. All rights reserved.</p>
                  <div className="flex justify-center gap-4 mt-2">
                    <Link href="/terms-of-service" className="text-white/60 hover:text-white transition-colors text-xs">
                      Terms of Service
                    </Link>
                    <Link href="/privacy-policy" className="text-white/60 hover:text-white transition-colors text-xs">
                      Privacy Policy
                    </Link>
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
