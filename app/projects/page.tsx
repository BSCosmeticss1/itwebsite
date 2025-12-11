"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"

const projects = [
  {
    title: "Teechha – Educational Professional Network",
    url: "http://teechha.com/",
    image: "/teeach.JPG",
    stack: ["JavaScript", "TypeScript", "Next.js", "Node.js", "Express", "Prisma ORM", "PostgreSQL"],
    bullets: [
      "Built full‑stack educational networking platform connecting teachers and students with detailed academic profiles",
      "Implemented real‑time messaging and profile management system with Prisma ORM for efficient data handling",
      "Deployed 24/7 available platform focused on unlimited learning opportunities",
    ],
  },
  {
    title: "Employee Competency System",
    url: "https://hrmoffice.vercel.app/",
    image: "/hrm_competeny.JPG",
    stack: ["TypeScript", "Next.js", "Node.js", "Express", "PostgreSQL"],
    bullets: [
      "Role‑based HR platform with competency assessments, job profiling, and analytics serving 100+ employees",
      "Optimized database queries reducing assessment load time from 8s to 1.2s",
    ],
  },
  {
    title: "HRM Office – HR Solutions Platform",
    url: "https://hrmoffice.org/",
    image: "/hrm.JPG",
    stack: ["Next.js", "Tailwind", "Node.js", "Express", "PostgreSQL"],
    bullets: [
      "Comprehensive HR platform serving 200+ companies with training, certification, and recruitment modules",
      "Achieved 98% success rate across certification and recruitment workflows",
    ],
  },
]

export default function Projects() {
  return (
    <>
      <Navigation />
      <main className="pt-0">
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-4">
            <span className="text-sm font-medium text-primary">Key Projects</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold mb-4">Projects</h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            A selection of platforms engineered for reliability, performance, and scale
          </p>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="space-y-20">
            {projects.map((proj, idx) => (
              <div key={proj.title} className="group">
                <div className={`flex flex-col ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center`}>
                  <div className="flex-1 rounded-2xl overflow-hidden border border-border bg-card">
                    <div className="relative w-full h-[400px]">
                      <Image src={proj.image} alt={proj.title} fill priority className="object-cover" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="mb-6">
                      <h3 className="text-3xl sm:text-4xl font-bold mb-2 text-foreground">{proj.title}</h3>
                      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-foreground/70 mb-2">Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {proj.stack.map((s) => (
                            <span key={s} className="px-3 py-1 rounded-full bg-muted/40 border border-border text-sm text-foreground/80">
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>

                      <ul className="space-y-2 text-foreground/70">
                        {proj.bullets.map((b, i) => (
                          <li key={i}>{b}</li>
                        ))}
                      </ul>

                      <div className="pt-2">
                        <Link href={proj.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90">
                          View Project
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

