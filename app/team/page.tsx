"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Mail, Linkedin, ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

const teamMembers = [
  {
    name: "Alex Johnson",
    role: "Chief Technology Officer",
    bio: "20+ years in enterprise software architecture, leading technical vision",
    image: "/professional-male-tech-executive.jpg",
    expertise: "Cloud Architecture, Enterprise Solutions",
    social: { linkedin: "#", email: "#" },
  },
  {
    name: "Sarah Chen",
    role: "VP of Cloud Services",
    bio: "AWS Certified Solutions Architect specializing in cloud migrations",
    image: "/professional-female-cloud-engineer.jpg",
    expertise: "AWS, Cloud Infrastructure, DevOps",
    social: { linkedin: "#", email: "#" },
  },
  {
    name: "Marcus Rodriguez",
    role: "Head of Cybersecurity",
    bio: "Former military intelligence officer with 15 years security experience",
    image: "/professional-male-security-expert.jpg",
    expertise: "Security Strategy, Compliance, Incident Response",
    social: { linkedin: "#", email: "#" },
  },
  {
    name: "Emily Watson",
    role: "AI & Data Science Lead",
    bio: "PhD in Machine Learning from Stanford, founded 2 successful AI startups",
    image: "/professional-female-data-scientist.png",
    expertise: "AI/ML, Data Engineering, Analytics",
    social: { linkedin: "#", email: "#" },
  },
  {
    name: "James Park",
    role: "Solutions Architect",
    bio: "Expert in enterprise integrations and system design with 12 years experience",
    image: "/professional-male-solutions-architect.jpg",
    expertise: "System Design, Integration, Enterprise Applications",
    social: { linkedin: "#", email: "#" },
  },
  {
    name: "Lisa Thompson",
    role: "Client Success Director",
    bio: "Dedicated to ensuring clients achieve their business objectives",
    image: "/professional-female-client-manager.jpg",
    expertise: "Client Relations, Account Management, Strategy",
    social: { linkedin: "#", email: "#" },
  },
]

export default function Team() {
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
          <h1 className="text-5xl sm:text-6xl font-bold mb-4 text-balance">Meet Our Team</h1>
          <div className="divider-line mb-6"></div>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Expert professionals with deep industry experience committed to your success and driving innovation in
            enterprise IT.
          </p>
        </section>

        {/* Team Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="group animate-fade-in-up" style={{ animationDelay: `${idx * 0.08}s` }}>
                <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 smooth-hover">
                  {/* Image */}
                  <div className="relative overflow-hidden h-64">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-primary font-semibold text-sm mb-2">{member.role}</p>
                    <div className="bg-primary/5 border border-primary/20 rounded px-2 py-1 text-xs text-primary/70 inline-block mb-3">
                      {member.expertise}
                    </div>
                    <p className="text-foreground/70 text-sm mb-4 line-clamp-3">{member.bio}</p>

                    {/* Social Links */}
                    <div className="flex gap-3 pt-4 border-t border-border">
                      <a
                        href={member.social.linkedin}
                        className="p-2 bg-secondary rounded-lg text-foreground/60 hover:bg-primary hover:text-primary-foreground transition-all duration-300 smooth-hover"
                      >
                        <Linkedin size={18} />
                      </a>
                      <a
                        href={member.social.email}
                        className="p-2 bg-secondary rounded-lg text-foreground/60 hover:bg-primary hover:text-primary-foreground transition-all duration-300 smooth-hover"
                      >
                        <Mail size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Team Culture */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4">Our Culture & Values</h2>
            <div className="divider-line mb-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "Innovation", desc: "Constantly pushing boundaries of technology" },
              { value: "Excellence", desc: "Committed to highest quality in everything" },
              { value: "Integrity", desc: "Honest and transparent in all relationships" },
              { value: "Collaboration", desc: "Strong teamwork for better results" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-card border border-border rounded-lg text-center animate-fade-in-up smooth-hover hover:border-primary"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <h3 className="text-xl font-semibold mb-3 text-primary">{item.value}</h3>
                <p className="text-foreground/70 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Join Team CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto animate-fade-in-up">
          <div className="bg-card border border-border rounded-2xl p-12 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Join Our Growing Team</h2>
              <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
                We're always looking for talented professionals to join our team and help shape the future of enterprise
                IT.
              </p>
              <button className="px-8 py-3 bg-primary rounded-lg font-semibold text-primary-foreground hover:shadow-lg transition-all duration-300 hover:scale-105 smooth-hover inline-flex items-center gap-2">
                View Open Positions <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
