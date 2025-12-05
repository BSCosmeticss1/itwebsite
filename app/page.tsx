"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Zap, Shield, TrendingUp, CheckCircle, Sparkles, Target, Globe, Clock, Users, BarChart, Cpu, Settings, Leaf, Layers, Building2, ChevronRight, Menu, X } from "lucide-react"
import { useEffect, useState, useRef } from "react"

// Custom Navigation component matching the image design
function ImageStyleNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Workshop", href: "/workshop" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" aria-label="Techweight home" className="inline-flex items-center">
              <Image src="/thujn.jpeg" alt="Techweight logo" width={96} height={96} className="rounded-full object-cover ring-4 ring-primary" />
            </Link>
          </div>

          {/* Desktop Navigation Links - Centered */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors rounded-lg hover:bg-gray-50"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/contact"
              className="px-6 py-2 bg-primary text-white text-sm font-medium rounded-full hover:bg-primary/90 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-100">
                <Link
                  href="/contact"
                  className="block px-3 py-2 bg-primary text-white text-center rounded-lg hover:bg-primary/90"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

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
    <div ref={ref} className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary via-primary/90 to-accent bg-clip-text text-transparent">
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
    const interval = setInterval(() => {
      emblaApi.scrollNext()
    }, 5000)
    return () => clearInterval(interval)
  }, [emblaApi])

  const features = [
    {
      icon: Sparkles,
      title: "Innovative Problem Solving",
      description: "Engineer solutions beyond specs to streamline workflows, cut costs, and scale.",
      gradient: "from-primary to-accent",
    },
    {
      icon: TrendingUp,
      title: "Lifecycle Optimization",
      description: "Optimize from concept to post‑implementation with continuous improvements and efficiency.",
      gradient: "from-primary to-accent",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Co‑develop with your teams to integrate with current processes and future needs.",
      gradient: "from-primary to-accent",
    },
    {
      icon: Cpu,
      title: "Technology Integration",
      description: "AI automation and digital twins for predictive maintenance and added value.",
      gradient: "from-primary to-accent",
    },
  ]

  const metrics = [
    { label: "Global Clients", count: 500, suffix: "+", icon: Globe },
    { label: "Successful Projects", count: 2000, suffix: "+", icon: Target },
    { label: "Years Experience", count: 15, suffix: "+", icon: Clock },
    { label: "Team Experts", count: 250, suffix: "+", icon: Users },
  ]

  const technologies = [
    { name: "AWS", description: "Cloud Infrastructure", icon: "☁️", color: "from-orange-500 to-yellow-500" },
    { name: "Kubernetes", description: "Container Orchestration", icon: "⚓", color: "from-blue-500 to-cyan-500" },
    { name: "TensorFlow", description: "Machine Learning", icon: "🧠", color: "from-orange-600 to-yellow-600" },
    { name: "React", description: "Frontend Development", icon: "⚛️", color: "from-cyan-500 to-blue-500" },
    { name: "Node.js", description: "Backend Services", icon: "🚀", color: "from-green-500 to-emerald-500" },
    { name: "PostgreSQL", description: "Data Management", icon: "🗄️", color: "from-blue-600 to-indigo-600" },
    { name: "Redis", description: "Caching Layer", icon: "⚡", color: "from-red-500 to-orange-500" },
    { name: "Docker", description: "Containerization", icon: "🐳", color: "from-blue-400 to-cyan-400" },
  ]

  const heroSlides = [
    {
      title: "Techweight – Empowering Businesses with Technology",
      image: "/fintech-office-dashboard.jpg"
    },
    {
      title: "Your business is our business.",
      image: "/professional-male-solutions-architect.jpg"
    },
    {
      title: "What Makes Us Different (USP)",
      image: "/manufacturing-smart-factory.jpg"
    },
    {
      title: "We ensure 99% uptime",
      image: "/professional-female-cloud-engineer.jpg"
    },
    {
      title: "Bring out the best in your business with Techweighten",
      image: "/retail-store-technology.png"
    }
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

  const processSteps = [
    { step: "01", title: "Discovery", desc: "Deep dive into your business needs and goals", icon: "🔍", color: "from-blue-500 to-cyan-500" },
    { step: "02", title: "Strategy", desc: "Architect comprehensive, scalable solutions", icon: "📐", color: "from-purple-500 to-pink-500" },
    { step: "03", title: "Execution", desc: "Precision implementation with agile methodology", icon: "⚡", color: "from-orange-500 to-yellow-500" },
    { step: "04", title: "Support", desc: "Continuous optimization and growth partnership", icon: "🔄", color: "from-green-500 to-emerald-500" },
  ]

  if (!mounted) return null

  return (
    <>
      <ImageStyleNavigation />
      <main className="pt-24 bg-background">
        {/* Hero Section with Carousel */}
        <section className="relative min-h-[63vh] overflow-hidden">
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
                <CarouselItem key={index} className="relative min-h-[63vh] flex items-center justify-center">
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url("${slide.image}")`,
                    }}
                  >
                    {/* Blue overlay for brand look */}
                    <div className="absolute inset-0 bg-blue-900/60" />

                    {/* Subtle blue gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-700/50 to-blue-600/30" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="max-w-4xl mx-auto space-y-8">
                      {/* Main Headline */}
                      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
                        {slide.title}
                      </h1>

                      {/* Subtitle */}
                      <p className="text-lg sm:text-xl text-gray-200 font-light max-w-2xl mx-auto leading-relaxed">
                        Trusted by industry leaders worldwide
                      </p>

                      {/* CTA Buttons */}
                      <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                        <Link
                          href="/contact"
                          className="group relative px-8 py-3.5 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-orange-600/30 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-3"
                        >
                          <span>Get Started</span>
                          <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                        </Link>

                        <Link
                          href="/contact"
                          className="px-8 py-3.5 bg-orange-600 text-white rounded-full font-semibold hover:bg-orange-700 transition-all duration-300 inline-flex items-center justify-center"
                        >
                          Contact
                        </Link>
                      </div>

                      {/* Additional link removed per request */}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>

          {/* Scroll indicator removed */}
        </section>

        {/* Keep the rest of your existing sections */}
        {/* Metrics Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, idx) => {
              const Icon = metric.icon
              return (
                <div 
                  key={idx} 
                  className="group p-8 bg-gradient-to-b from-card to-card/50 backdrop-blur-sm border border-border/50 rounded-2xl hover:border-primary/50 transition-all duration-500 hover:scale-[1.03] hover:shadow-xl hover:shadow-primary/10"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20 transition-all">
                      <Icon className="text-primary group-hover:scale-110 transition-transform" size={24} />
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

        {/* Service Overview */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Background decoration */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          
          <div className="relative z-10 text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full border border-primary/20 mb-2">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Service Overview</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              Comprehensive IT Solutions
            </h2>
            <p className="text-foreground/60 text-lg max-w-3xl mx-auto">
              Tailored for the evolving needs of modern businesses
            </p>
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-start">
            <div className="space-y-6 p-8 rounded-3xl bg-gradient-to-br from-card to-card/50 border border-border/50 backdrop-blur-sm shadow-xl">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Our Approach
                </h3>
                <div className="space-y-4 text-foreground/70">
                  <p className="leading-relaxed">
                    Techweight Technologies Enterprises is a technology consulting firm specialised in delivering innovative and efficient IT solutions tailored to our clients' operational, technical, and business goals.
                  </p>
                  <p className="leading-relaxed">
                    We understand the critical role of technology in driving business success, and we are committed to helping organisations achieve seamless IT operations through effective system delivery, deployment, and support.
                  </p>
                  <p className="leading-relaxed">
                    In today's fast‑evolving technological landscape, the success of any project hinges on robust, innovative, and sustainable IT solutions. Our IT team is committed to delivering high‑performance results tailored to your specific requirements.
                  </p>
                </div>
              </div>
              
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors group"
              >
                <span className="font-medium">Learn more about us</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: Settings, title: "Tailored Design & Development", desc: "Solutions aligned to operational goals through close collaboration.", color: "from-blue-500/10 to-cyan-500/10" },
                { icon: Cpu, title: "Cutting‑edge Technology", desc: "Latest tools and software for precision, efficiency, and innovation.", color: "from-purple-500/10 to-pink-500/10" },
                { icon: Leaf, title: "Sustainability Focus", desc: "Designed to minimise environmental impact while maximising efficiency.", color: "from-green-500/10 to-emerald-500/10" },
                { icon: Building2, title: "Cross‑Industry Expertise", desc: "Trusted across manufacturing, oil & gas, and diverse sectors.", color: "from-orange-500/10 to-yellow-500/10" },
              ].map((item, idx) => {
                const Icon = item.icon
                return (
                  <div key={idx} className="group p-6 rounded-2xl border border-border/50 bg-gradient-to-b from-card/50 to-card hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                    <div className={`mb-4 p-3 rounded-xl bg-gradient-to-br ${item.color} w-fit`}>
                      <Icon className="text-primary" size={22} />
                    </div>
                    <h4 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-foreground/60 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full border border-primary/20 mb-4">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Why Choose Techweight</span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Strategic Excellence
            </h2>
            <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
              Innovation, lifecycle optimization, collaboration, and seamless technology integration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <div
                  key={idx}
                  className="group relative p-8 bg-gradient-to-b from-card to-card/50 border border-border/50 rounded-2xl hover:border-primary/50 transition-all duration-500 hover:scale-[1.02] overflow-hidden"
                >
                  {/* Animated gradient border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                  
                  <div className="relative z-10">
                    <div className="mb-6 p-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 w-fit">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-foreground/60 group-hover:text-foreground/70 transition-colors leading-relaxed">
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
          {/* Background pattern */}
          <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
          
          <div className="relative z-10 text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full border border-primary/20 mb-4">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Scope of Services</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              Full‑stack IT Delivery
            </h2>
            <p className="text-foreground/60 max-w-3xl mx-auto mt-4 text-lg">
              Techweight Technologies offers comprehensive services across infrastructure, software, support, and advisory.
            </p>
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceScope.map((svc, idx) => {
              const Icon = svc.icon
              return (
                <div 
                  key={idx} 
                  className="group p-7 rounded-2xl border border-border/50 bg-gradient-to-b from-card/50 to-card hover:border-primary/50 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                      {svc.title}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {svc.points.map((p, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="mt-1 p-1 rounded-full bg-primary/10">
                          <CheckCircle className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-foreground/70 text-sm">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </section>

        {/* Technology Stack Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="relative">
            <div className="text-center mb-16 space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full border border-primary/20 mb-4">
                <Cpu className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Technology Stack</span>
              </div>
              <h2 className="text-5xl sm:text-6xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Built with Excellence
              </h2>
              <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
                Leverage the latest tools and frameworks for optimal performance
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {technologies.map((tech, idx) => (
                <div
                  key={idx}
                  className="group relative p-6 bg-gradient-to-b from-card to-card/50 border border-border/50 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-xl"
                >
                  <div className="text-center space-y-4">
                    <div className="text-3xl mb-2">{tech.icon}</div>
                    <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {tech.name}
                    </div>
                    <div className="text-xs text-foreground/60 group-hover:text-foreground/70 transition-colors">
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
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
            
            {/* Grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(30deg,_var(--primary)_1px,_transparent_1px),linear-gradient(60deg,_var(--primary)_1px,_transparent_1px)] bg-[size:60px_60px] opacity-[0.02]" />
            
            <div className="relative z-10 p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full border border-primary/20">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-primary">Cross‑Cutting Themes</span>
                  </div>
                  <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                    Strategic Excellence
                  </h2>
                  <p className="text-foreground/60 text-lg">
                    Guiding principles for every engagement and outcome
                  </p>
                </div>

                <div className="space-y-4">
                  {benefits.map((benefit, idx) => (
                    <div
                      key={idx}
                      className="group p-4 rounded-xl bg-gradient-to-r from-white/5 to-transparent border border-white/10 hover:border-primary/30 transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20 transition-all">
                          <CheckCircle className="w-5 h-5 text-primary" />
                        </div>
                        <p className="text-foreground/80 group-hover:text-foreground transition-colors">
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full border border-primary/20 mb-4">
              <BarChart className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Our Methodology</span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Proven Process
            </h2>
            <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
              Systematic approach to delivering exceptional results
            </p>
          </div>

          <div className="relative">
            {/* Connection line */}
            <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-y-1/2" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {processSteps.map((step, idx) => (
                <div key={idx} className="group relative">
                  <div className="relative p-8 bg-gradient-to-b from-card to-card/50 border border-border/50 rounded-2xl hover:border-primary/50 transition-all duration-300 hover:scale-[1.02]">
                    {/* Step number */}
                    <div className={`absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                      {step.step}
                    </div>
                    
                    <div className="space-y-4">
                      <div className="text-3xl mb-4">{step.icon}</div>
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-foreground/60 group-hover:text-foreground/70 transition-colors">
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
        <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden">
            {/* Solid background - removed gradient per request */}
            <div className="absolute inset-0 bg-primary" />
            
            {/* Animated orbs */}
            <div className="absolute top-1/4 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
            
            <div className="relative z-10 p-8 lg:p-10 text-center">
              <div className="max-w-2xl mx-auto space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-primary shadow-sm border border-primary/10">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">Ready to Transform?</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                  Let's Build Something <span className="text-white font-extrabold">Amazing</span> Together
                </h2>
                
                <p className="text-base sm:text-lg text-white/80 leading-relaxed">
                  Schedule a consultation and discover how Techweight can accelerate your digital journey
                </p>
                
                <div className="flex justify-center pt-6">
                  <Link
                    href="/contact"
                    className="group relative px-6 py-2.5 bg-white rounded-full font-semibold text-primary hover:shadow-md transition-all duration-200 hover:scale-[1.02] inline-flex items-center justify-center gap-3 overflow-hidden"
                  >
                    <span className="relative z-10">Contact Us</span>
                    <ArrowRight className="relative z-10 group-hover:translate-x-2 transition-transform" size={18} />
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