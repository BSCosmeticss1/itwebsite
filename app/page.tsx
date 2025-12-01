"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel"
import Link from "next/link"
import { ArrowRight, Zap, Shield, TrendingUp, CheckCircle, Sparkles, Target, Globe, Clock, Users, BarChart, Cpu, Settings, Leaf, Layers, Building2 } from "lucide-react"
import { useEffect, useState, useRef } from "react"

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
    <div ref={ref} className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
      {count}{suffix}
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
    const onSelect = () => setActiveSlide(emblaApi.selectedScrollSnap())
    onSelect()
    emblaApi.on('select', onSelect)
    return () => {
      emblaApi.off('select', onSelect as any)
    }
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    const interval = setInterval(() => {
      if (!emblaApi) return
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext()
      } else {
        emblaApi.scrollTo(0)
      }
    }, 7000)
    return () => clearInterval(interval)
  }, [emblaApi])

  const features = [
    {
      icon: Sparkles,
      title: "Innovative Problem Solving",
      description: "Engineer solutions beyond specs to streamline workflows, cut costs, and scale.",
      gradient: "from-pink-500 to-rose-400",
    },
    {
      icon: TrendingUp,
      title: "Lifecycle Optimization",
      description: "Optimize from concept to post‑implementation with continuous improvements and efficiency.",
      gradient: "from-violet-500 to-purple-400",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Co‑develop with your teams to integrate with current processes and future needs.",
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      icon: Cpu,
      title: "Technology Integration",
      description: "AI automation and digital twins for predictive maintenance and added value.",
      gradient: "from-emerald-500 to-teal-400",
    },
  ]

  const metrics = [
    { label: "Global Clients", count: 500, suffix: "+", icon: Globe },
    { label: "Successful Projects", count: 2000, suffix: "+", icon: Target },
    { label: "Years Experience", count: 15, suffix: "+", icon: Clock },
    { label: "Team Experts", count: 250, suffix: "+", icon: Users },
  ]

  const technologies = [
    { name: "AWS", description: "Cloud Infrastructure", icon: "☁️" },
    { name: "Kubernetes", description: "Container Orchestration", icon: "⚓" },
    { name: "TensorFlow", description: "Machine Learning", icon: "🧠" },
    { name: "React", description: "Frontend Development", icon: "⚛️" },
    { name: "Node.js", description: "Backend Services", icon: "🚀" },
    { name: "PostgreSQL", description: "Data Management", icon: "🗄️" },
    { name: "Redis", description: "Caching Layer", icon: "⚡" },
    { name: "Docker", description: "Containerization", icon: "🐳" },
  ]

  const benefits = [
    "Solutions designed for today and tomorrow, adaptable to advancements and evolving standards.",
    "International best practices delivered with the flexibility to meet local needs.",
    "Long‑term collaboration focused on innovation and continuous improvement.",
  ]

  const serviceScope = [
    {
      icon: Layers,
      title: "IT Infrastructure Setup & Deployment",
      points: [
        "Server and network installation and configuration",
        "Router, switch, and firewall setup",
        "Endpoint antivirus deployment and malware elimination",
        "Email platform setup and migration",
        "Office 365 or Zoho cloud system deployment",
      ],
    },
    {
      icon: Building2,
      title: "Hardware & Equipment Supply",
      points: [
        "Supply and configuration of laptops, desktops, printers, accessories",
        "Access control and CCTV systems installation and maintenance",
        "IP phones or intercom systems integration",
        "Time & attendance systems setup",
      ],
    },
    {
      icon: Cpu,
      title: "Software & Application Deployment",
      points: [
        "Installation and configuration of enterprise applications",
        "Custom software delivery and integrations",
        "Licensing management and updates",
      ],
    },
    {
      icon: Sparkles,
      title: "Website and Software Development",
      points: [
        "Corporate website design and hosting",
        "Web and mobile application development",
        "UI/UX design and optimisation",
      ],
    },
    {
      icon: Shield,
      title: "IT Support and Maintenance",
      points: [
        "Preventive and corrective maintenance",
        "Troubleshooting and system upgrades",
        "Remote and on‑site support services",
      ],
    },
    {
      icon: Target,
      title: "IT Consultancy and Advisory",
      points: [
        "IT policy development and process documentation",
        "Technology audit and risk assessment",
        "Strategic IT planning and digital transformation advisory",
      ],
    },
  ]

  const slides = [
    {
      title: "Techweight – Empowering Businesses with Technology",
      subtitle: "Bring out the best in your business with Techweighten",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1920&q=80",
    },
    {
      title: "Your business is our business.",
      subtitle: "Strategic technology tailored for growth and resilience",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80",
    },
    {
      title: "What Makes Us Different (USP)",
      subtitle: "Speed, security, and scalability — without compromise",
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1920&q=80",
    },
    {
      title: "We ensure 99% uptime",
      subtitle: "Reliability engineered across cloud, network, and apps",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1920&q=80",
    },
  ]

  const processSteps = [
    { step: "01", title: "Discovery", desc: "Deep dive into your business needs and goals", icon: "🔍" },
    { step: "02", title: "Strategy", desc: "Architect comprehensive, scalable solutions", icon: "📐" },
    { step: "03", title: "Execution", desc: "Precision implementation with agile methodology", icon: "⚡" },
    { step: "04", title: "Support", desc: "Continuous optimization and growth partnership", icon: "🔄" },
  ]

  if (!mounted) return null

  return (
    <>
      <Navigation />
      <main className="pt-16 bg-gradient-to-b from-background via-background to-gray-950">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />

          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Carousel 
              className="w-full"
              setApi={setEmblaApi}
            >
              <CarouselContent>
                {slides.map((s, idx) => (
                  <CarouselItem key={idx}>
                  <div
                    className="relative h-[48vh] sm:h-[58vh] lg:h-[65vh] rounded-3xl overflow-hidden border border-border"
                    style={{
                      backgroundImage: `url(${s.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    <div className="absolute inset-0">
                      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-transparent" />
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/20 mix-blend-multiply" />
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.45)_0%,_transparent_65%)]" />
                    </div>
                    <div className="relative z-10 flex h-full items-center justify-center text-center px-6">
                        <div className="max-w-2xl mx-auto space-y-5 rounded-3xl p-5 sm:p-7 bg-background/60/50 backdrop-blur-sm border border-white/10 shadow-xl text-left">
                          {/* Animated title */}
                          <div className="space-y-4">
                            <h1 className="text-xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white drop-shadow-md">
                              {s.title}
                            </h1>
                            <p className="text-sm sm:text-base text-white/85 font-normal max-w-2xl mx-auto leading-relaxed animate-fade-in-up drop-shadow"
                               style={{ animationDelay: '0.4s' }}>
                              {s.subtitle}
                            </p>
                          </div>

                          {/* Animated CTA buttons */}
                          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
                               style={{ animationDelay: '0.6s' }}>
                            <Link
                              href="/contact"
                              className="group relative px-7 py-3.5 bg-gradient-to-r from-primary to-accent rounded-full font-semibold text-primary-foreground hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-3 overflow-hidden"
                            >
                              <span className="relative z-10">Get Started</span>
                              <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" size={20} />
                              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </Link>
                            <Link
                              href="/solutions"
                              className="px-7 py-3.5 border border-primary/60 rounded-full font-semibold text-white hover:bg-white/10 transition-all duration-300"
                            >
                              Explore Solutions
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-6 top-1/2 -translate-y-1/2 bg-background/70 backdrop-blur-md border border-border hover:bg-background" />
              <CarouselNext className="right-6 top-1/2 -translate-y-1/2 bg-background/70 backdrop-blur-md border border-border hover:bg-background" />
              
              {/* Custom indicators */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => emblaApi?.scrollTo(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      activeSlide === idx 
                        ? 'w-8 bg-gradient-to-r from-primary to-accent' 
                        : 'bg-foreground/30 hover:bg-foreground/50'
                    }`}
                  />
                ))}
              </div>
            </Carousel>
          </div>

          {/* Floating elements */}
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </section>

        {/* Metrics Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/30 to-transparent" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {metrics.map((metric, idx) => {
              const Icon = metric.icon
              return (
                <div 
                  key={idx} 
                  className="group p-6 bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-2xl hover:border-gray-700 transition-all duration-500 hover:scale-[1.03] animate-fade-in-up"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <Icon className="text-gray-400 group-hover:text-blue-400 transition-colors" size={24} />
                    <AnimatedCounter value={metric.count} suffix={metric.suffix} />
                  </div>
                  <div className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {metric.label}
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Service Overview */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
          <div className="relative z-10 text-center mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full border border-primary/20 mb-3">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Service Overview</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
              We deliver a comprehensive suite of IT solutions
            </h2>
            <p className="text-foreground/70 text-base max-w-3xl mx-auto">
              Tailored for the evolving needs of the company sector.
            </p>
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-6 items-start">
            <div className="space-y-5 p-6 rounded-3xl bg-gradient-to-b from-background/60 to-background/30 border border-white/10 backdrop-blur-sm shadow-xl">
              <h3 className="text-2xl font-semibold">Our Approach</h3>
              <p className="text-foreground/80 text-sm sm:text-base">
                Techweight Technologies Enterprises is a technology consulting firm specialised in delivering innovative and efficient IT solutions tailored to our clients’ operational, technical, and business goals. Our focus is on delivering solutions that enhance productivity, optimize resources, and ensure digital transformation through the reliable deployment of technology.
              </p>
              <p className="text-foreground/80 text-sm sm:text-base">
                We understand the critical role of technology in driving business success, and we are committed to helping organisations achieve seamless IT operations through effective system delivery, deployment, and support.
              </p>
              <p className="text-foreground/80 text-sm sm:text-base">
                In today’s fast‑evolving technological landscape, the success of any project hinges on robust, innovative, and sustainable IT solutions. Our IT team is committed to delivering high‑performance results tailored to your specific requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: Settings, title: "Tailored Design & Development", desc: "Solutions aligned to operational goals through close collaboration." },
                { icon: Cpu, title: "Cutting‑edge Technology", desc: "Latest tools and software for precision, efficiency, and innovation." },
                { icon: Leaf, title: "Sustainability Focus", desc: "Designed to minimise environmental impact while maximising efficiency." },
                { icon: Building2, title: "Cross‑Industry Expertise", desc: "Trusted across manufacturing, oil & gas, and diverse sectors." },
              ].map((item, idx) => {
                const Icon = item.icon
                return (
                  <div key={idx} className="group p-5 rounded-2xl border border-border bg-gradient-to-b from-card/60 to-card/30 hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                    <div className="mb-4 p-3 rounded-xl bg-gradient-to-r from-primary/20 to-accent/20 w-fit">
                      <Icon className="text-primary" size={22} />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                    <p className="text-foreground/70 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20 mb-4">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-400">Why Choose Techweight</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Strategic Approach</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Innovation, lifecycle optimization, collaboration, and seamless technology integration.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <div
                  key={idx}
                  className="group relative p-8 bg-gradient-to-b from-gray-900/50 to-gray-900/20 border border-gray-800 rounded-2xl hover:border-gray-700 transition-all duration-500 hover:scale-[1.02] overflow-hidden"
                >
                  {/* Gradient border effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800/0 via-gray-800/0 to-gray-800/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div className={`mb-6 p-3 rounded-xl bg-gradient-to-br ${feature.gradient} w-fit shadow-lg`}>
                      <Icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-gray-100 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Scope of Services */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-primary/5 to-background/0" />
          <div className="relative z-10 text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-4">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Scope of Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Full‑stack IT delivery and consulting</h2>
            <p className="text-foreground/70 max-w-3xl mx-auto mt-3">Techweight Technologies offers comprehensive services across infrastructure, software, support, and advisory.</p>
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceScope.map((svc, idx) => {
              const Icon = svc.icon
              return (
                <div key={idx} className="group p-7 rounded-2xl border border-border bg-card/70 hover:border-primary/50 hover:shadow-xl transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-primary/20 to-accent/20">
                      <Icon className="text-primary" size={22} />
                    </div>
                    <h3 className="text-lg font-semibold">{svc.title}</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-foreground/70">
                    {svc.points.map((p, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-[2px]" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </section>

        {/* Technology Stack Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/5 via-transparent to-purple-900/5" />
          <div className="relative z-10">
            <div className="text-center mb-16 space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 rounded-full border border-purple-500/20 mb-4">
                <Cpu className="w-4 h-4 text-purple-400" />
                <span className="text-sm font-medium text-purple-400">Technology Stack</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
                Built with <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Cutting-Edge</span> Technologies
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Leverage the latest tools and frameworks for optimal performance
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {technologies.map((tech, idx) => (
                <div
                  key={idx}
                  className="group relative p-6 bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-xl hover:border-gray-700 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-center space-y-3">
                    <div className="text-2xl mb-2">{tech.icon}</div>
                    <div className="font-semibold text-white group-hover:text-blue-300 transition-colors">
                      {tech.name}
                    </div>
                    <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                      {tech.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden border border-border bg-gradient-to-br from-background to-secondary/20">
            
            <div className="relative z-10 p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-primary">Cross‑Cutting Themes</span>
                  </div>
                  <h2 className="text-4xl font-bold tracking-tight text-white">
                    Final Dimension
                  </h2>
                  <p className="text-gray-400 text-lg">
                    Strategic themes guiding every engagement and outcome
                  </p>
                </div>

                <div className="space-y-4">
                  {benefits.map((benefit, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-4 p-4 rounded-lg bg-gray-900/30 hover:bg-gray-900/50 transition-colors group"
                    >
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <CheckCircle className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-white group-hover:text-gray-100 transition-colors">
                          {benefit}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-500/10 rounded-full border border-violet-500/20 mb-4">
              <BarChart className="w-4 h-4 text-violet-400" />
              <span className="text-sm font-medium text-violet-400">Our Methodology</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
              A <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">Proven Process</span> for Excellence
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Systematic approach to delivering exceptional results
            </p>
          </div>

          <div className="relative">
            {/* Connection line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-800 to-transparent -translate-y-1/2" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {processSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="group relative"
                >
                  <div className="relative p-8 bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-2xl hover:border-gray-700 transition-all duration-300 hover:scale-[1.02]">
                    {/* Step number */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-violet-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {step.step}
                    </div>
                    
                    <div className="space-y-4">
                      <div className="text-3xl mb-4">{step.icon}</div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-violet-300 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
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
        <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/10" />
            
            {/* Grid pattern */}
            <div className="absolute inset-0 bg-grid-white/[0.02]" />
            
            <div className="relative z-10 p-8 lg:p-10 text-center">
              <div className="max-w-2xl mx-auto space-y-6">
                <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
                  <Sparkles className="w-5 h-5 text-white" />
                  <span className="text-sm font-medium text-white">Ready to Transform?</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                  Let's Build Something <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">Amazing</span> Together
                </h2>
                
                <p className="text-lg text-gray-300/80 leading-relaxed">
                  Schedule a consultation and discover how Techweight can accelerate your digital journey
                </p>
                
                <div className="flex justify-center pt-6">
                  <Link
                    href="/contact"
                    className="group relative px-8 py-3.5 bg-gradient-to-r from-primary to-accent rounded-full font-semibold text-primary-foreground hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-[1.02] inline-flex items-center justify-center gap-3 overflow-hidden"
                  >
                    <span className="relative z-10">Contact Us</span>
                    <ArrowRight className="relative z-10 group-hover:translate-x-2 transition-transform" size={18} />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
