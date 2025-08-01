"use client"

import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Shield, Eye, Lock, Database, Cookie, Mail } from "lucide-react"
import Link from "next/link"

export default function PrivacyPolicy() {
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
                  <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent mb-2">
                    Privacy Policy
                  </h1>
                  <p className="text-white/80 text-sm">Last updated: January 31, 2025</p>
                </div>

                <div className="prose prose-invert max-w-none">
                  <div className="space-y-8">
                    {/* Introduction */}
                    <section>
                      <div className="flex items-center mb-4">
                        <Eye className="w-5 h-5 text-blue-300 mr-2" />
                        <h2 className="text-xl font-bold text-white">1. Introduction</h2>
                      </div>
                      <p className="text-white/80 leading-relaxed">
                        At SoftEdge Development, we are committed to protecting your privacy and personal information.
                        This Privacy Policy explains how we collect, use, disclose, and safeguard your information when
                        you visit our website or use our services.
                      </p>
                    </section>

                    {/* Information We Collect */}
                    <section>
                      <div className="flex items-center mb-4">
                        <Database className="w-5 h-5 text-green-300 mr-2" />
                        <h2 className="text-xl font-bold text-white">2. Information We Collect</h2>
                      </div>
                      <p className="text-white/80 leading-relaxed mb-4">
                        We may collect information about you in a variety of ways:
                      </p>

                      <div className="space-y-4">
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-2">Personal Data</h3>
                          <ul className="list-disc list-inside text-white/80 space-y-1 ml-4">
                            <li>Name and contact information</li>
                            <li>Email address and phone number</li>
                            <li>Company information</li>
                            <li>Project requirements and specifications</li>
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold text-white mb-2">Usage Data</h3>
                          <ul className="list-disc list-inside text-white/80 space-y-1 ml-4">
                            <li>Website usage patterns and preferences</li>
                            <li>Browser type and version</li>
                            <li>IP address and location data</li>
                            <li>Pages visited and time spent on site</li>
                          </ul>
                        </div>
                      </div>
                    </section>

                    {/* How We Use Information */}
                    <section>
                      <div className="flex items-center mb-4">
                        <Lock className="w-5 h-5 text-purple-300 mr-2" />
                        <h2 className="text-xl font-bold text-white">3. How We Use Your Information</h2>
                      </div>
                      <p className="text-white/80 leading-relaxed mb-4">
                        We use the information we collect for various purposes:
                      </p>
                      <ul className="list-disc list-inside text-white/80 space-y-2 ml-4">
                        <li>To provide and maintain our services</li>
                        <li>To communicate with you about projects and services</li>
                        <li>To improve our website and service offerings</li>
                        <li>To send periodic emails and updates</li>
                        <li>To comply with legal obligations</li>
                        <li>To protect our rights and prevent fraud</li>
                      </ul>
                    </section>

                    {/* Information Sharing */}
                    <section>
                      <div className="flex items-center mb-4">
                        <Shield className="w-5 h-5 text-orange-300 mr-2" />
                        <h2 className="text-xl font-bold text-white">4. Information Sharing and Disclosure</h2>
                      </div>
                      <p className="text-white/80 leading-relaxed mb-4">
                        We do not sell, trade, or otherwise transfer your personal information to third parties except
                        in the following circumstances:
                      </p>
                      <ul className="list-disc list-inside text-white/80 space-y-2 ml-4">
                        <li>With your explicit consent</li>
                        <li>To trusted service providers who assist in our operations</li>
                        <li>When required by law or legal process</li>
                        <li>To protect our rights, property, or safety</li>
                        <li>In connection with a business transfer or merger</li>
                      </ul>
                    </section>

                    {/* Data Security */}
                    <section>
                      <div className="flex items-center mb-4">
                        <Lock className="w-5 h-5 text-red-300 mr-2" />
                        <h2 className="text-xl font-bold text-white">5. Data Security</h2>
                      </div>
                      <p className="text-white/80 leading-relaxed mb-4">
                        We implement appropriate security measures to protect your personal information:
                      </p>
                      <ul className="list-disc list-inside text-white/80 space-y-2 ml-4">
                        <li>SSL encryption for data transmission</li>
                        <li>Secure servers and databases</li>
                        <li>Regular security audits and updates</li>
                        <li>Limited access to personal information</li>
                        <li>Employee training on data protection</li>
                      </ul>
                    </section>

                    {/* Cookies and Tracking */}
                    <section>
                      <div className="flex items-center mb-4">
                        <Cookie className="w-5 h-5 text-yellow-300 mr-2" />
                        <h2 className="text-xl font-bold text-white">6. Cookies and Tracking Technologies</h2>
                      </div>
                      <p className="text-white/80 leading-relaxed mb-4">
                        We use cookies and similar tracking technologies to enhance your experience:
                      </p>
                      <ul className="list-disc list-inside text-white/80 space-y-2 ml-4">
                        <li>Essential cookies for website functionality</li>
                        <li>Analytics cookies to understand usage patterns</li>
                        <li>Preference cookies to remember your settings</li>
                        <li>You can control cookie settings through your browser</li>
                      </ul>
                    </section>

                    {/* Your Rights */}
                    <section>
                      <div className="flex items-center mb-4">
                        <Eye className="w-5 h-5 text-cyan-300 mr-2" />
                        <h2 className="text-xl font-bold text-white">7. Your Privacy Rights</h2>
                      </div>
                      <p className="text-white/80 leading-relaxed mb-4">
                        You have certain rights regarding your personal information:
                      </p>
                      <ul className="list-disc list-inside text-white/80 space-y-2 ml-4">
                        <li>Right to access your personal data</li>
                        <li>Right to correct inaccurate information</li>
                        <li>Right to delete your personal data</li>
                        <li>Right to restrict processing</li>
                        <li>Right to data portability</li>
                        <li>Right to opt-out of marketing communications</li>
                      </ul>
                    </section>

                    {/* Data Retention */}
                    <section>
                      <div className="flex items-center mb-4">
                        <Database className="w-5 h-5 text-indigo-300 mr-2" />
                        <h2 className="text-xl font-bold text-white">8. Data Retention</h2>
                      </div>
                      <p className="text-white/80 leading-relaxed">
                        We retain your personal information only as long as necessary to fulfill the purposes outlined
                        in this policy, comply with legal obligations, resolve disputes, and enforce our agreements.
                        Project-related data may be retained for up to 7 years for business and legal purposes.
                      </p>
                    </section>

                    {/* Changes to Policy */}
                    <section>
                      <div className="flex items-center mb-4">
                        <Shield className="w-5 h-5 text-pink-300 mr-2" />
                        <h2 className="text-xl font-bold text-white">9. Changes to This Privacy Policy</h2>
                      </div>
                      <p className="text-white/80 leading-relaxed">
                        We may update this Privacy Policy from time to time. We will notify you of any changes by
                        posting the new Privacy Policy on this page and updating the "Last updated" date. You are
                        advised to review this Privacy Policy periodically for any changes.
                      </p>
                    </section>

                    {/* Contact Information */}
                    <section>
                      <div className="flex items-center mb-4">
                        <Mail className="w-5 h-5 text-green-300 mr-2" />
                        <h2 className="text-xl font-bold text-white">10. Contact Us</h2>
                      </div>
                      <p className="text-white/80 leading-relaxed mb-4">
                        If you have any questions about this Privacy Policy or our data practices, please contact us:
                      </p>
                      <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                        <p className="text-white font-medium">SoftEdge Development</p>
                        <p className="text-white/80">Email: contact@softedgedevelopment.com</p>
                        <p className="text-white/80">Location: Seattle, Washington</p>
                        <p className="text-white/80 mt-2">
                          For privacy-related inquiries: privacy@softedgedevelopment.com
                        </p>
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
