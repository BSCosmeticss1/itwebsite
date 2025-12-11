"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Cloud, Code, Lock, Database, Zap, Users, ArrowRight, CheckCircle } from "lucide-react"
import { useEffect, useState } from "react"

const services = [
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Scalable, secure cloud solutions built on AWS, Azure, and Google Cloud",
    features: ["Multi-cloud strategy", "Migration planning", "Cost optimization", "24/7 monitoring"],
    expanded:
      "Deploy, scale, and manage cloud infrastructure with enterprise-grade reliability. We handle everything from architecture design to continuous optimization, ensuring you get the maximum value from your cloud investment.",
  },
  {
    icon: Code,
    title: "Custom Development",
    description: "Bespoke software solutions tailored to your business needs",
    features: ["Full-stack development", "Mobile apps", "Enterprise software", "API integration"],
    expanded:
      "Transform your unique business challenges into elegant, scalable software solutions. Our expert engineers build custom applications using modern technologies and best practices for long-term maintainability.",
  },
  {
    icon: Lock,
    title: "Cybersecurity",
    description: "Comprehensive security solutions protecting your digital assets",
    features: ["Threat assessment", "Compliance management", "Incident response", "Security audits"],
    expanded:
      "Protect your business from evolving cyber threats with our comprehensive security framework. From threat detection to compliance certifications, we ensure your data and systems remain secure.",
  },
  {
    icon: Database,
    title: "Data & Analytics",
    description: "Turn data into actionable insights with advanced analytics",
    features: ["BI solutions", "Data engineering", "Machine learning", "Real-time analytics"],
    expanded:
      "Unlock the power of your data with advanced analytics and machine learning. Transform raw data into strategic insights that drive informed business decisions and competitive advantage.",
  },
  {
    icon: Zap,
    title: "AI & Automation",
    description: "Leverage AI to automate and optimize business processes",
    features: ["Process automation", "AI implementation", "Workflow optimization", "RPA solutions"],
    expanded:
      "Accelerate your business with intelligent automation. Our AI and RPA solutions streamline operations, reduce costs, and free your team to focus on strategic initiatives.",
  },
  {
    icon: Users,
    title: "Managed Services",
    description: "End-to-end management of your IT infrastructure and operations",
    features: ["24/7 monitoring", "Support services", "Infrastructure management", "Proactive maintenance"],
    expanded:
      "Let our expert team manage your IT infrastructure so you can focus on your core business. We provide comprehensive managed services with guaranteed uptime and responsive support.",
  },
]

export default function Services() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <>
      <Navigation />
      <main className="pt-0">
        {/* Header */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center animate-fade-in-down">
          <h1 className="text-5xl sm:text-6xl font-bold mb-4 text-balance">Our Services</h1>
          <div className="divider-line mb-6"></div>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Comprehensive IT solutions designed to drive your business forward with innovation, security, and
            scalability at every step.
          </p>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon
              return (
                <div
                  key={idx}
                  className="group p-8 bg-card border border-border rounded-xl hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-2 cursor-pointer animate-fade-in-up smooth-hover"
                  style={{ animationDelay: `${idx * 0.08}s` }}
                >
                  <div className="mb-6 p-4 bg-primary/10 rounded-lg w-fit transition-colors">
                    <Icon className="text-primary" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-foreground/70 mb-6">{service.description}</p>
                  <p className="text-foreground/60 text-sm mb-6 leading-relaxed">{service.expanded}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, fidx) => (
                      <li key={fidx} className="text-foreground/60 text-sm flex items-center gap-2">
                        <CheckCircle size={16} className="text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </section>

        {/* Service Methodology */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4">Our Service Approach</h2>
            <div className="divider-line mb-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Tailored Solutions",
                desc: "Every service is customized to your specific business requirements and goals",
              },
              {
                title: "Expert Execution",
                desc: "Delivered by our certified professionals with decades of combined experience",
              },
              {
                title: "Continuous Support",
                desc: "Ongoing optimization and support ensures your systems perform at peak efficiency",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-8 bg-card border border-border rounded-xl text-center animate-fade-in-up smooth-hover hover:border-primary"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-foreground/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto animate-fade-in-up">
          <div className="bg-card border border-border rounded-2xl p-12 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
              <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
                Contact our team to discuss your specific requirements and how we can help you achieve your business
                goals.
              </p>
              <button className="px-8 py-3 bg-primary rounded-lg font-semibold text-primary-foreground hover:shadow-lg transition-all duration-300 hover:scale-105 smooth-hover inline-flex items-center gap-2">
                Get in Touch <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
