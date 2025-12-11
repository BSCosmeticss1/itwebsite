"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Zap, Shield, TrendingUp, CheckCircle, Sparkles, Target, Globe, Clock, Users, BarChart, Cpu, Settings, Leaf, Layers, Building2, ChevronRight, Award, Code, Database, Cloud, Server, Smartphone, Palette, Terminal, Wifi, ShieldCheck } from "lucide-react"
import { useEffect, useState, useRef } from "react"
import { cn } from "@/lib/utils"

function AnimatedCounter({ value, suffix = '', duration = 1500 }: { value: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement | null>(null)
  const [started, setStarted] = useState(false)
  
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !started) {
        setStarted(true)
        const start = performance.now()
        const step = (now: number) => {
          const progress = Math.min((now - start) / duration, 1)
          setCount(Math.floor(progress * value))
          if (progress < 1) requestAnimationFrame(step)
        }
        requestAnimationFrame(step)
      }
    }, { threshold: 0.6 })
    
    if (ref.current) io.observe(ref.current)
    return () => io.disconnect()
  }, [value, duration, started])
  
  return (
    <div ref={ref} className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
      {count.toLocaleString()}{suffix}
    </div>
  )
}

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [activeSlide, setActiveSlide] = useState(0)
  const [emblaApi, setEmblaApi] = useState<CarouselApi | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!emblaApi) return
    
    const onSelect = () => {
      setActiveSlide(emblaApi.selectedScrollSnap())
    }
    
    emblaApi.on('select', onSelect)
    onSelect()
    
    const interval = setInterval(() => {
      emblaApi.scrollNext()
    }, 6000)
    
    return () => {
      clearInterval(interval)
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi])

  const features = [
    {
      icon: Sparkles,
      title: "Innovative Problem Solving",
      description: "Engineer solutions beyond specs to streamline workflows, cut costs, and scale.",
      gradient: "from-blue-600 to-cyan-500",
    },
    {
      icon: TrendingUp,
      title: "Lifecycle Optimization",
      description: "Optimize from concept to post‑implementation with continuous improvements.",
      gradient: "from-purple-600 to-pink-500",
    },
    {
      icon: Users,
      title: "Collaboration First",
      description: "Co‑develop with your teams to integrate with current processes and future needs.",
      gradient: "from-emerald-600 to-teal-500",
    },
    {
      icon: Cpu,
      title: "AI Integration",
      description: "AI automation and digital twins for predictive maintenance and added value.",
      gradient: "from-orange-600 to-amber-500",
    },
  ]

  const metrics = [
    { label: "Global Clients", count: 500, suffix: "+", icon: Globe, color: "from-blue-600 to-cyan-500" },
    { label: "Successful Projects", count: 2000, suffix: "+", icon: Award, color: "from-purple-600 to-pink-500" },
    { label: "Years Experience", count: 15, suffix: "+", icon: Clock, color: "from-emerald-600 to-teal-500" },
    { label: "Team Experts", count: 250, suffix: "+", icon: Users, color: "from-orange-600 to-amber-500" },
  ]

  const technologies = [
    { name: "AWS", description: "Cloud Infrastructure", icon: Cloud, color: "from-orange-500 to-yellow-500" },
    { name: "Kubernetes", description: "Container Orchestration", icon: Server, color: "from-blue-500 to-cyan-500" },
    { name: "TensorFlow", description: "Machine Learning", icon: Cpu, color: "from-orange-600 to-yellow-600" },
    { name: "React", description: "Frontend Development", icon: Code, color: "from-cyan-500 to-blue-500" },
    { name: "Node.js", description: "Backend Services", icon: Terminal, color: "from-green-500 to-emerald-500" },
    { name: "PostgreSQL", description: "Data Management", icon: Database, color: "from-blue-600 to-indigo-600" },
    { name: "Redis", description: "Caching Layer", icon: Zap, color: "from-red-500 to-orange-500" },
    { name: "Docker", description: "Containerization", icon: Server, color: "from-blue-400 to-cyan-400" },
  ]

  const heroSlides = [
    {
      title: "Techweight – Empowering Businesses with Technology",
      subtitle: "Bring out the best in your business with Techweighten",
      image: "/fintech-office-dashboard.jpg"
    },
    {
      title: "Your business is our business.",
      subtitle: "Bring out the best in your business with Techweighten",
      image: "/professional-male-solutions-architect.jpg"
    },
    {
      title: "What Makes Us Different (USP)",
      subtitle: "Bring out the best in your business with Techweighten",
      image: "/manufacturing-smart-factory.jpg"
    },
    {
      title: "We ensure 99% uptime",
      subtitle: "Bring out the best in your business with Techweighten",
      image: "/retail-store-technology.png"
    },
  ]

  const benefits = [
    "Future-proof solutions adaptable to technological advancements and evolving standards.",
    "International best practices delivered with local market flexibility.",
    "Long‑term partnership focused on continuous innovation and improvement.",
  ]

  const serviceScope = [
    {
      icon: Server,
      title: "Infrastructure & Cloud",
      points: [
        "Cloud migration & optimization",
        "Network architecture & security",
        "Server management & scaling",
        "Disaster recovery solutions",
      ],
      color: "from-blue-600 to-cyan-500",
    },
    {
      icon: Smartphone,
      title: "Digital Products",
      points: [
        "Mobile & web applications",
        "UI/UX design systems",
        "Progressive web apps",
        "Cross-platform solutions",
      ],
      color: "from-purple-600 to-pink-500",
    },
    {
      icon: Database,
      title: "Data & Analytics",
      points: [
        "Business intelligence",
        "Data warehouse solutions",
        "Real-time analytics",
        "Predictive modeling",
      ],
      color: "from-emerald-600 to-teal-500",
    },
    {
      icon: ShieldCheck,
      title: "Security & Compliance",
      points: [
        "Security audits & testing",
        "Compliance frameworks",
        "Threat detection systems",
        "Data protection strategies",
      ],
      color: "from-orange-600 to-amber-500",
    },
    {
      icon: Wifi,
      title: "IoT & Automation",
      points: [
        "Smart system integration",
        "Process automation",
        "IoT device management",
        "Smart infrastructure",
      ],
      color: "from-indigo-600 to-purple-500",
    },
    {
      icon: BarChart,
      title: "Consulting & Strategy",
      points: [
        "Digital transformation",
        "Technology roadmapping",
        "Process optimization",
        "Innovation workshops",
      ],
      color: "from-rose-600 to-pink-500",
    },
  ]

  const processSteps = [
    { step: "01", title: "Discover", desc: "Deep dive into your business needs and goals", icon: "🔍", color: "from-blue-600 to-cyan-500" },
    { step: "02", title: "Design", desc: "Architect comprehensive, scalable solutions", icon: "📐", color: "from-purple-600 to-pink-500" },
    { step: "03", title: "Develop", desc: "Agile implementation with precision engineering", icon: "⚡", color: "from-emerald-600 to-teal-500" },
    { step: "04", title: "Deploy", desc: "Seamless launch with continuous optimization", icon: "🚀", color: "from-orange-600 to-amber-500" },
  ]

  if (!mounted) return null

  return (
    <>
      <Navigation />
      <main className="pt-0">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] overflow-hidden bg-background">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.12)_0%,transparent_50%),radial-gradient(circle_at_80%_80%,rgba(16,185,129,0.08)_0%,transparent_50%)]" />
          
          <Carousel
            setApi={setEmblaApi}
            className="w-full h-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="h-full">
              {heroSlides.map((slide, index) => (
                <CarouselItem key={index} className="relative min-h-[90vh] flex items-center">
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                      backgroundImage: `url("${slide.image}")`,
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/80 to-background/60" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                  </div>

                  <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl space-y-8">
                      

                      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight">
                        {slide.title}
                      </h1>

                      <p className="text-xl text-foreground/70 font-light max-w-2xl leading-relaxed">
                        {slide.subtitle}
                      </p>

                      <div className="flex flex-col sm:flex-row gap-4 pt-8">
                        <Link
                          href="/contact"
                          className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] inline-flex items-center justify-center gap-3"
                        >
                          <span>Get Started</span>
                          <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                        </Link>

                        <Link
                          href="/services"
                          className="px-8 py-4 bg-muted/30 backdrop-blur-sm text-foreground rounded-lg font-semibold hover:bg-muted/50 transition-all duration-300 inline-flex items-center justify-center border border-border"
                        >
                          Our Services
                        </Link>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300 border border-border",
                    activeSlide === index 
                      ? "w-8 bg-primary" 
                      : "bg-muted hover:bg-muted/70"
                  )}
                />
              ))}
            </div>
            
            <CarouselPrevious className="left-4 bg-muted/30 backdrop-blur-sm border-border text-foreground hover:bg-muted/50" />
            <CarouselNext className="right-4 bg-muted/30 backdrop-blur-sm border-border text-foreground hover:bg-muted/50" />
          </Carousel>
        </section>

        {/* Metrics Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, idx) => {
              const Icon = metric.icon
              return (
                <div 
                  key={idx} 
                  className="group p-8 bg-card rounded-2xl border border-border shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
                  style={{ 
                    animationDelay: `${idx * 0.1}s`,
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.05)'
                  }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-all`}>
                      <Icon className={`text-primary`} size={24} />
                    </div>
                    <AnimatedCounter value={metric.count} suffix={metric.suffix} />
                  </div>
                  <div className="text-foreground/70 group-hover:text-foreground transition-colors text-lg font-medium">
                    {metric.label}
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Features Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
          
          <div className="relative z-10 text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-full border border-blue-100 mb-2">
              
              <span className="text-sm font-medium text-blue-600">Our Approach</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Strategic Technology Partnership
            </h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              We combine innovation with execution to deliver measurable business impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <div
                  key={idx}
                  className="group relative p-8 bg-card rounded-2xl border border-border shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="relative z-10">
                    <div className={`mb-6 p-4 rounded-xl bg-primary/10 w-fit`}>
                      <Icon className={`text-primary`} size={28} />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Services Section */}
        <section className="relative py-20 bg-muted/30">
          <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-full border border-blue-100 mb-4">
                
                <span className="text-sm font-medium text-blue-600">Our Services</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Comprehensive Digital Solutions
              </h2>
              <p className="text-foreground/70 max-w-2xl mx-auto mt-4 text-lg">
                End-to-end services designed to transform your digital capabilities
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceScope.map((svc, idx) => {
                const Icon = svc.icon
                return (
                  <div 
                    key={idx} 
                    className="group p-8 bg-card rounded-2xl border border-border shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                  >
                    <div className={`mb-6 p-4 rounded-xl bg-primary/10 w-fit`}>
                      <Icon className="text-primary" size={28} />
                    </div>
                    <h3 className="text-xl font-semibold mb-6 text-foreground transition-all">
                      {svc.title}
                    </h3>
                    <ul className="space-y-3">
                      {svc.points.map((p, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className={`mt-1 p-1 rounded-full bg-primary/10`}>
                            <CheckCircle className={`w-3 h-3 text-primary`} />
                          </div>
                          <span className="text-foreground/70 text-sm">{p}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link
                      href="/services"
                      className="mt-8 inline-flex items-center gap-2 text-primary hover:opacity-80 transition-colors group"
                    >
                      <span className="font-medium text-sm">Learn more</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="relative">
            <div className="text-center mb-16 space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-full border border-blue-100 mb-4">
                
                <span className="text-sm font-medium text-blue-600">Technology Stack</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Built with Modern Excellence
              </h2>
              <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
                Leveraging the latest tools and frameworks for optimal performance
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {technologies.map((tech, idx) => {
                const Icon = tech.icon
                return (
                  <div
                    key={idx}
                    className="group relative p-6 bg-card rounded-xl border border-border shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                  >
                    <div className="text-center space-y-4">
                      <div className={`flex justify-center mb-2 p-3 rounded-lg bg-primary/10`}>
                        <Icon className={`text-primary`} size={24} />
                      </div>
                      <div className="font-semibold text-foreground transition-all">
                        {tech.name}
                      </div>
                      <div className="text-xs text-foreground/60">
                        {tech.description}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-full border border-blue-100 mb-4">
              <BarChart className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-600">Our Process</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Proven Methodology
            </h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              A systematic approach to delivering exceptional results
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 bg-gradient-to-r from-blue-100 via-gray-200 to-gray-100 -translate-y-1/2" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {processSteps.map((step, idx) => (
                <div key={idx} className="group relative">
                    <div className="relative p-8 bg-card rounded-2xl border border-border shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                    <div className={`absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg`}>
                      {step.step}
                    </div>
                    
                    <div className="space-y-4">
                      <div className="text-3xl mb-4">{step.icon}</div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {step.title}
                      </h3>
                      <p className="text-foreground/70">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden max-w-6xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent" />
            <div className="absolute top-0 -left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 -right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
            
            <div className="relative z-10 p-12 lg:p-16">
              <div className="max-w-2xl mx-auto text-center space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white">
                  <Sparkles className="w-5 h-5" />
                  <span className="text-sm font-medium">Ready to Transform?</span>
                </div>

                <h2 className="text-4xl sm:text-5xl font-bold text-primary-foreground">
                  Let's Build Something <span className="text-primary-foreground/90">Exceptional</span> Together
                </h2>
                
                <p className="text-lg text-primary-foreground/80 leading-relaxed">
                  Schedule a consultation and discover how we can accelerate your digital transformation
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                  <Link
                    href="/contact"
                    className="group relative px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] inline-flex items-center justify-center gap-3"
                  >
                    <span className="relative">Start Your Journey</span>
                    <ArrowRight className="relative group-hover:translate-x-2 transition-transform" size={20} />
                  </Link>
                  
                  <Link
                    href="/contact"
                    className="px-8 py-4 bg-white/10 backdrop-blur-sm text-primary-foreground rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 inline-flex items-center justify-center border border-white/20"
                  >
                    Book a Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
