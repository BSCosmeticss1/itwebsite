"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArrowRight, TrendingUp, BarChart3, Clock } from "lucide-react"
import { useEffect, useState } from "react"

const caseStudies = [
  {
    id: 1,
    company: "FinanceFlow Inc",
    challenge: "Legacy system modernization with performance bottlenecks",
    solution: "Cloud migration and microservices architecture on AWS",
    result: "40% cost reduction, 5x faster processing",
    metrics: [
      { label: "Processing Speed", value: "5x faster" },
      { label: "Cost Savings", value: "40%" },
      { label: "System Uptime", value: "99.99%" },
    ],
    image: "/fintech-office-dashboard.jpg",
  },
  {
    id: 2,
    company: "RetailHub Global",
    challenge: "Multi-channel integration and poor user experience",
    solution: "Unified e-commerce platform with AI recommendations",
    result: "35% increase in conversion, 60% reduction in cart abandonment",
    metrics: [
      { label: "Conversion Increase", value: "35%" },
      { label: "Cart Abandonment", value: "-60%" },
      { label: "Revenue Growth", value: "+45%" },
    ],
    image: "/retail-store-technology.png",
  },
  {
    id: 3,
    company: "HealthCare Plus",
    challenge: "Patient data management and strict compliance requirements",
    solution: "Secure HIPAA-compliant cloud infrastructure",
    result: "99.99% uptime, 100% compliance certification",
    metrics: [
      { label: "Uptime SLA", value: "99.99%" },
      { label: "Compliance Score", value: "100%" },
      { label: "Data Security", value: "Military Grade" },
    ],
    image: "/healthcare-technology-center.jpg",
  },
  {
    id: 4,
    company: "ManufactureTech Ltd",
    challenge: "IoT integration and predictive maintenance needs",
    solution: "AI-powered IoT platform with real-time monitoring",
    result: "25% reduction in downtime, predictive maintenance insights",
    metrics: [
      { label: "Downtime Reduction", value: "25%" },
      { label: "Maintenance Accuracy", value: "92%" },
      { label: "Equipment Lifetime", value: "+30%" },
    ],
    image: "/manufacturing-smart-factory.jpg",
  },
]

export default function Solutions() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <>
      <Navigation />
      <main className="pt-24">
        {/* Header */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center animate-fade-in-down">
          <h1 className="text-5xl sm:text-6xl font-bold mb-4 text-balance">Case Studies</h1>
          <div className="divider-line mb-6"></div>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            See how we've helped enterprises achieve their digital transformation goals and drive measurable business
            results.
          </p>
        </section>

        {/* Case Studies */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="space-y-20">
            {caseStudies.map((study, idx) => (
              <div key={study.id} className="group animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div
                  className={`flex flex-col ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center`}
                >
                  {/* Image */}
                  <div className="flex-1 rounded-xl overflow-hidden border border-border hover:border-primary transition-colors duration-300 group-hover:shadow-2xl group-hover:shadow-primary/20">
                    <img
                      src={study.image || "/placeholder.svg"}
                      alt={study.company}
                      className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="mb-6">
                      <h3 className="text-4xl font-bold mb-2 text-primary">{study.company}</h3>
                      <div className="divider-line"></div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-foreground/70 mb-2 uppercase tracking-wide flex items-center gap-2">
                          <BarChart3 size={18} className="text-accent" /> Challenge
                        </h4>
                        <p className="text-lg">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground/70 mb-2 uppercase tracking-wide flex items-center gap-2">
                          <TrendingUp size={18} className="text-accent" /> Solution
                        </h4>
                        <p className="text-lg">{study.solution}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground/70 mb-4 uppercase tracking-wide flex items-center gap-2">
                          <Clock size={18} className="text-accent" /> Results
                        </h4>
                        <div className="grid grid-cols-3 gap-4">
                          {study.metrics.map((metric, midx) => (
                            <div
                              key={midx}
                              className="bg-primary/10 border border-border rounded-lg p-4 text-center"
                            >
                              <div className="text-2xl font-bold text-primary">{metric.value}</div>
                              <div className="text-sm text-foreground/70">{metric.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <button className="mt-8 px-6 py-2 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors duration-300 inline-flex items-center gap-2 group/btn smooth-hover">
                      Read Full Case Study
                      <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto animate-fade-in-up">
          <div className="bg-card border border-border rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Want to Learn More?</h2>
            <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
              Discover how we can deliver similar transformative results for your organization.
            </p>
            <button className="px-8 py-3 bg-primary rounded-lg font-semibold text-primary-foreground hover:shadow-lg transition-all duration-300 hover:scale-105 smooth-hover">
              Schedule Demo
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
