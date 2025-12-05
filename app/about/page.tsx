"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Sparkles, Target, CheckCircle, Shield, ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

const goals = [
  {
    title: "Customer Excellence",
    points: [
      "Provide fast, reliable, and professional IT support",
      "Maintain a customer satisfaction rate of 95%+",
    ],
  },
  {
    title: "Innovation & Technology Growth",
    points: [
      "Adopt cutting‑edge technologies to create scalable solutions",
      "Continuously improve delivery speed and quality",
    ],
  },
]

const taglines = [
  {
    group: "Professional & Strong",
    items: [
      "Empowering Business Through Smart Technology",
      "Technology That Works for You",
      "Reliable IT. Real Growth.",
    ],
  },
  {
    group: "Modern & Innovative",
    items: [
      "Smarter Tech. Stronger Business.",
      "Innovating Today. Transforming Tomorrow.",
      "Where Technology Meets Performance",
    ],
  },
  {
    group: "Security‑Focused",
    items: [
      "Secure Solutions. Seamless Performance.",
      "Protect. Innovate. Grow.",
    ],
  },
  {
    group: "Short & Catchy",
    items: [
      "Tech that Delivers",
      "Think Smart. Think TechWeighten.",
      "Powering Your Digital Future",
    ],
  },
]

export default function About() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <>
      <Navigation />
      <main className="pt-24">
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">About TechWeighten</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold mb-4">TechWeighten – Vision & Mission</h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Building secure, innovative, and future‑ready technology for African businesses
          </p>
        </section>

        <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-card border border-border rounded-xl">
              <h3 className="text-2xl font-bold mb-3 text-primary">Vision</h3>
              <p className="text-foreground/70">
                Empower African businesses with secure, innovative, and future‑ready technology that enhances
                productivity, accelerates growth, and sustains long‑term value.
              </p>
            </div>
            <div className="p-8 bg-card border border-border rounded-xl">
              <h3 className="text-2xl font-bold mb-3 text-accent">Mission</h3>
              <p className="text-foreground/70">
                Deliver high‑quality IT services, infrastructure solutions, and digital tools that help businesses
                operate smarter.
              </p>
            </div>
            <div className="p-8 bg-card border border-border rounded-xl">
              <h3 className="text-2xl font-bold mb-3">About Us</h3>
              <p className="text-foreground/70">
                TechWeighten is a forward‑thinking technology solutions company helping businesses work smarter, faster,
                and more securely. We provide reliable IT support, infrastructure services, cloud solutions, and digital
                tools that improve performance and reduce downtime. Our goal is to deliver modern, efficient, and secure
                technology that empowers growth.
              </p>
            </div>
          </div>
        </section>

        <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 rounded-full border border-accent/20">
              <Target className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Strategic Goals</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {goals.map((g, idx) => (
              <div key={idx} className="p-8 bg-card border border-border rounded-xl">
                <h4 className="text-xl font-semibold mb-4">{g.title}</h4>
                <ul className="space-y-2 text-foreground/70">
                  {g.points.map((p, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-[2px]" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full border border-primary/20">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Slogan / Tagline Options</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {taglines.map((group, idx) => (
              <div key={idx} className="p-6 bg-card border border-border rounded-xl">
                <h5 className="font-semibold mb-3">{group.group}</h5>
                <ul className="space-y-2 text-foreground/70">
                  {group.items.map((t, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-accent mt-[2px]" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <a href="/contact" className="px-8 py-3 bg-primary rounded-full font-semibold text-primary-foreground inline-flex items-center gap-2">
              Contact Us
              <ArrowRight size={18} />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

