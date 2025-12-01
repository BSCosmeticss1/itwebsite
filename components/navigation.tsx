"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/solutions", label: "Solutions" },
    { href: "/team", label: "Team" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">TW</span>
            </div>
            <span className="font-bold text-xl hidden sm:inline">Techweight</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300 text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 hover:bg-secondary rounded-lg transition">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-fade-in-down">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-foreground/80 hover:text-primary hover:bg-secondary rounded-lg transition"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
