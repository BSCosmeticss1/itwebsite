import { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const navItems = [
  { name: "Home", href: "#home", active: true },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Workshop", href: "#workshop" },
  { name: "Careers", href: "#careers" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background shadow-sm">
      
      {/* Middle Section - Logo, Certifications, Search */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative w-14 h-14">
              <Image
                src="/thujn.jpeg"
                alt="Company Logo"
                width={56}
                height={56}
                className="rounded-full object-cover border-2 border-primary"
                priority
              />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-background"></div>
            </div>
            <div>
              <h1 className="font-display font-bold text-xl text-foreground">Techweight</h1>
              <p className="text-sm text-muted-foreground">Technologies Enterprises</p>
            </div>
          </div>

          
          {/* Search */}
          <div className="hidden md:flex items-center gap-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-48 lg:w-64 px-4 py-2 border border-border rounded-lg bg-muted/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
            </div>
            <Button size="icon" className="bg-primary hover:bg-primary-dark">
              <Search className="h-4 w-4" />
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-primary">
        <div className="container mx-auto px-4">
          <div className="hidden md:flex items-center justify-between">
            <ul className="flex items-center">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={`block px-6 py-4 font-medium transition-colors ${
                      item.active
                        ? "bg-primary-dark text-primary-foreground"
                        : "text-primary-foreground/90 hover:bg-primary-dark hover:text-primary-foreground"
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <Button className="my-2">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-primary">
          <ul className="px-4 py-2">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="block px-4 py-3 text-primary-foreground hover:bg-primary-dark rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li className="pt-2 pb-4">
              <Button className="w-full">
                Get Started
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
