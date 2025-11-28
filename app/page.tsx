"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowRight, Zap, Shield, TrendingUp, CheckCircle } from "lucide-react"
import { useEffect, useState } from "react"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Accelerate your digital transformation with cutting-edge technology",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security standards for your critical infrastructure",
    },
    {
      icon: TrendingUp,
      title: "Growth Focused",
      description: "Scale your business with solutions designed for expansion",
    },
  ]

  const metrics = [
    { label: "Global Clients", value: "500+" },
    { label: "Successful Projects", value: "2,000+" },
    { label: "Years Experience", value: "15+" },
    { label: "Team Members", value: "250+" },
  ]

  const technologies = [
    { name: "AWS", description: "Cloud Infrastructure" },
    { name: "Kubernetes", description: "Container Orchestration" },
    { name: "AI/ML", description: "Machine Learning" },
    { name: "React", description: "Frontend Development" },
    { name: "Node.js", description: "Backend Services" },
    { name: "PostgreSQL", description: "Data Management" },
  ]

  const benefits = [
    "Expert team with 15+ years avg experience",
    "24/7 dedicated support and monitoring",
    "Proven track record of successful deliverables",
    "Custom solutions tailored to your needs",
    "Agile methodology for fast iterations",
    "Transparent reporting and communication",
  ]

  if (!mounted) return null

  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20 flex items-center justify-center overflow-hidden relative">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
            <div
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
            <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float-up"></div>
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className={`${mounted ? "animate-fade-in-up" : "opacity-0"}`}>
              <h1 className="text-5xl sm:text-7xl font-bold mb-6 text-balance">
                Enterprise IT{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Reimagined
                </span>
              </h1>
              <p className="text-xl text-foreground/70 mb-8 text-balance max-w-2xl mx-auto leading-relaxed">
                Transform your business with innovative IT solutions, cloud infrastructure, advanced security, and
                digital strategy tailored for enterprise scale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-3 bg-gradient-to-r from-primary to-accent rounded-lg font-semibold text-primary-foreground hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2 smooth-hover"
                >
                  Get Started <ArrowRight size={20} />
                </Link>
                <Link
                  href="/solutions"
                  className="px-8 py-3 border border-primary rounded-lg font-semibold text-primary hover:bg-primary/10 transition-all duration-300 smooth-hover"
                >
                  Explore Solutions
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Metrics Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, idx) => (
              <div key={idx} className="text-center animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">{metric.value}</div>
                <div className="text-foreground/70">{metric.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4">Why Choose Robust IT</h2>
            <div className="divider-line mb-4"></div>
            <p className="text-foreground/70 text-lg">Industry-leading solutions for modern enterprises</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <div
                  key={idx}
                  className="p-8 bg-card border border-border rounded-xl hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group animate-fade-in-up smooth-hover"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-foreground/70">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* Technology Stack Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4">Our Technology Stack</h2>
            <div className="divider-line mb-4"></div>
            <p className="text-foreground/70 text-lg">Built with cutting-edge enterprise technologies</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, idx) => (
              <div
                key={idx}
                className="p-6 bg-card border border-border rounded-lg text-center hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group animate-fade-in-up smooth-hover"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <div className="font-semibold text-primary group-hover:text-accent transition-colors">{tech.name}</div>
                <div className="text-sm text-foreground/60 mt-1">{tech.description}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-card/30 rounded-2xl border border-border/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 animate-fade-in-up text-center">Why Partnership with Robust IT?</h2>
            <div className="divider-line mb-12"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 animate-fade-in-up"
                  style={{ animationDelay: `${idx * 0.08}s` }}
                >
                  <CheckCircle className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="text-lg font-semibold">{benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4">Our Process</h2>
            <div className="divider-line mb-4"></div>
            <p className="text-foreground/70 text-lg">A proven methodology for delivering excellence</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery", desc: "Understand your needs and goals" },
              { step: "02", title: "Strategy", desc: "Develop comprehensive solutions" },
              { step: "03", title: "Execution", desc: "Implement with precision" },
              { step: "04", title: "Support", desc: "Continuous optimization" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-card border border-border rounded-lg animate-fade-in-up smooth-hover hover:border-primary"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="text-5xl font-bold text-primary/30 mb-2">{item.step}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-foreground/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto animate-fade-in-up">
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 rounded-2xl p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-shimmer opacity-50"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Enterprise?</h2>
              <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
                Let's discuss how Robust IT can accelerate your digital journey and drive real business value.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3 bg-primary rounded-lg font-semibold text-primary-foreground hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105 smooth-hover"
              >
                Schedule Consultation <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
