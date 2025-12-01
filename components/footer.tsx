export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Techweight</h3>
            <p className="text-foreground/60 text-sm">Empowering businesses with technology</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <a href="#" className="hover:text-primary transition">
                  Cloud Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  AI & ML
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Security
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <a href="#" className="hover:text-primary transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <a href="#" className="hover:text-primary transition">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="divider-line mb-8"></div>
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-foreground/60">
          <p>&copy; 2025 Techweight. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition">
              Twitter
            </a>
            <a href="#" className="hover:text-primary transition">
              LinkedIn
            </a>
            <a href="#" className="hover:text-primary transition">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
