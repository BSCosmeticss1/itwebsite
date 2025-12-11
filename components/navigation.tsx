"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown, Phone, Mail, Globe, Search } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement | null>(null)
  const mobileMenuRef = useRef<HTMLDivElement | null>(null)
  const pathname = usePathname()
  const [searchQuery, setSearchQuery] = useState("")

  // Navigation links types
  type NavDropdownItem = { name: string; href: string }
  type NavLink = { key: string; name: string; href: string; dropdown?: NavDropdownItem[] }

  // Navigation links
  // About should not have a submenu

  

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
    setActiveDropdown(null)
  }, [pathname])

  const navLinks: NavLink[] = [
    { key: "home", name: "Home", href: "/" },
    { key: "about", name: "About", href: "/about" },
    { key: "services", name: "Services", href: "/services" },
    { key: "projects", name: "Projects", href: "/projects" },
    { key: "team", name: "Team", href: "/team" },
    { key: "contact", name: "Contact", href: "/contact" },
  ]

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Implement search navigation or logic here
      setSearchQuery("");
    }
  }

  const toggleDropdown = (key: string) => {
    setActiveDropdown(activeDropdown === key ? null : key)
  }

  return (
    <nav className={`sticky top-0 left-0 right-0 w-full z-50 ${isScrolled ? "shadow-lg" : ""}`}>
      {/* Top Bar */}
      <div className={`bg-blue-800 text-white transition-all duration-300 overflow-hidden ${isScrolled ? "h-0" : "h-10"}`}>
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Globe className="h-4 w-4 text-blue-200" />
              <span className="text-xs font-medium text-white">English</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-1.5">
              <Phone className="h-3.5 w-3.5 text-blue-200" />
              <span className="text-sm hover:text-blue-100 transition-colors">+234 (0) 123 456 7890</span>
              <span className="mx-2 text-blue-200">|</span>
              <Phone className="h-3.5 w-3.5 text-blue-200" />
              <span className="text-sm hover:text-blue-100 transition-colors">+234 (0) 987 654 3210</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-1.5">
              <Mail className="h-3.5 w-3.5 text-blue-200" />
              <span className="text-sm hover:text-blue-100 transition-colors">info@techweight.com</span>
            </div>
            
            <Link 
              href="/contact" 
              className="flex items-center space-x-1.5 group"
            >
              <Phone className="h-3.5 w-3.5 text-blue-200 group-hover:text-white transition-colors" />
              <span className="text-sm group-hover:text-white transition-colors">Get Started</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className={`bg-white transition-all duration-300 border-b border-blue-800 ${isScrolled ? "py-1 shadow-md" : "py-5 md:py-3"}`}>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <img 
              src="/thujn.jpeg" 
              alt="Techweight Logo" 
              className={`transition-all duration-300 ${isScrolled ? "h-10" : "h-14"} rounded-full object-cover`} 
            />
          </Link>
          
          <div className={`hidden md:flex items-center space-x-6 transition-opacity duration-300 ${isScrolled ? "opacity-0" : "opacity-100"}`}>
            <img src="/images/iso9001.png" alt="ISO 9001:2015" className="h-16 w-auto" />
            <img src="/images/iso27001.png" alt="ISO 27001" className="h-16 w-auto" />
          </div>
          
          <div className="flex items-center space-x-4">
            <form 
              onSubmit={handleSearch} 
              className={`hidden md:flex items-center bg-white border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 ${isScrolled ? "scale-90" : "scale-100"}`}
            >
              <Input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-10 pl-3 pr-2 text-sm focus:outline-none w-48 text-gray-700 bg-white placeholder-gray-400"
              />
              <Button
                type="submit"
                size="icon"
                className="h-10 px-3 bg-blue-800 text-white hover:bg-blue-700 flex items-center justify-center transition-colors"
              >
                <Search className="h-4 w-4" />
              </Button>
            </form>
            
            <button 
              className="md:hidden text-blue-800 p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Full-width Navigation */}
      <div className={`bg-blue-800 transition-all duration-300 ${isScrolled ? "shadow-md" : ""}`}>
        <div className="w-full">
          <div className="hidden md:flex items-center justify-center h-20 md:h-14">
            <div className="flex items-center w-full max-w-7xl mx-auto px-4">
              {navLinks.map((link) => (
                <div 
                  key={link.key} 
                  className="relative flex-1 text-center"
                  ref={dropdownRef}
                >
                  {link.dropdown ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(link.key)}
                        className={`flex items-center justify-center w-full h-14 space-x-1 px-2 font-medium transition-all duration-200
                          ${activeDropdown === link.key || (link.dropdown && link.dropdown.some(l => pathname === l.href))
                            ? "bg-blue-800 text-white"
                            : "hover:bg-blue-800 text-white"
                          } relative group`}
                      >
                        <span>{link.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === link.key ? "rotate-180" : ""
                        }`} />
                        {/* Hover underline effect */}
                        <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-white transition-all duration-300 ${
                          activeDropdown === link.key ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                        }`}></span>
                      </button>
                      
                      <AnimatePresence>
                        {activeDropdown === link.key && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute left-0 right-0 mt-2 bg-white shadow-xl py-2 px-2 border border-gray-100 z-10 rounded-b-lg"
                          >
                            <div className="flex flex-col items-center">
                              {link.dropdown.map((l) => (
                                <Link
                                  key={l.name}
                                  href={l.href}
                                  className={`block w-full py-2.5 text-sm whitespace-nowrap transition-colors rounded text-center ${
                                    pathname === l.href
                                      ? "bg-blue-800 text-white"
                                      : "hover:bg-blue-800 hover:text-white text-gray-700"
                                  }`}
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  {l.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className={`flex items-center justify-center w-full h-14 px-2 font-medium transition-colors duration-200 relative group ${
                        pathname === link.href
                          ? "bg-blue-900 text-white"
                          : "hover:bg-blue-700 text-white"
                      }`}
                    >
                      {link.name}
                      {/* Hover underline effect */}
                      <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-white transition-all duration-300 ${
                        pathname === link.href ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                      }`}></span>
                    </Link>
                  )}
                </div>
              ))}
              
              <div className="flex-1 text-center">
                <Link
                  href="/about/who-we-are"
                  className="inline-flex items-center justify-center h-10 px-4 text-sm font-medium text-blue-800 bg-white rounded-lg hover:bg-blue-50 transition-colors shadow-sm"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white shadow-xl border-t border-gray-200"
            ref={mobileMenuRef}
          >
            <div className="px-4 py-3">
              <form onSubmit={handleSearch} className="flex items-center mb-4">
                <Input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 h-10 pl-3 pr-2 text-sm border border-gray-300 rounded-l-lg focus:outline-none"
                />
                <Button
                  type="submit"
                  size="icon"
                  className="h-10 px-3 bg-blue-800 text-white rounded-r-lg"
                >
                  <Search className="h-5 w-5" />
                </Button>
              </form>
              
              <div className="space-y-1">
                {navLinks.map((link) => (
                  <div key={link.key} className="border-b border-gray-100 last:border-0">
                    {link.dropdown ? (
                      <div className="py-2">
                        <button
                          onClick={() => toggleDropdown(link.key)}
                          className={`flex items-center justify-between w-full px-3 py-2 text-left font-medium rounded-lg ${
                            (link.dropdown && link.dropdown.some(l => pathname === l.href))
                              ? "bg-blue-800 text-white"
                              : "text-gray-700 hover:bg-blue-50"
                          }`}
                        >
                          <span>{link.name}</span>
                          <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${
                            activeDropdown === link.key ? "rotate-180" : ""
                          }`} />
                        </button>
                        
                        <AnimatePresence>
                          {activeDropdown === link.key && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="pl-4 overflow-hidden"
                            >
                              <div className="py-2 space-y-1">
                                {link.dropdown.map((l) => (
                                  <Link
                                    key={l.name}
                                    href={l.href}
                                    className={`block px-3 py-2 text-sm rounded-md ${
                                      pathname === l.href
                                        ? "bg-blue-800 text-white"
                                        : "text-gray-700 hover:bg-blue-50"
                                    }`}
                                  >
                                    {l.name}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        className={`block px-3 py-2 font-medium rounded-lg ${
                          pathname === link.href
                            ? "bg-blue-800 text-white"
                            : "text-gray-700 hover:bg-blue-50"
                        }`}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
                
                <Link
                  href="/about/who-we-are"
                  className="block mt-2 px-4 py-2 text-center text-sm font-medium text-blue-800 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
