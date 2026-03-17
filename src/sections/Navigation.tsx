import { useState } from 'react'
import { Menu, X, TreePine, Lock } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface NavigationProps {
  isScrolled: boolean
}

const Navigation = ({ isScrolled }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Homes', href: '#featured' },
    { name: 'Designs', href: '#designs' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Power', href: '#offgrid-power' },
    { name: 'Water', href: '#water-systems' },
    { name: 'Waste', href: '#waste-management' },
    { name: 'Financing', href: '#financing' },
    { name: 'Builders', href: '#builders' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-200'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className={`p-2 rounded-lg transition-colors ${
              isScrolled ? 'bg-slate-100' : 'bg-white/20 backdrop-blur-sm'
            }`}>
              <TreePine className={`w-5 h-5 transition-colors ${
                isScrolled ? 'text-slate-800' : 'text-white'
              }`} />
            </div>
            <span className={`text-lg font-semibold tracking-tight transition-colors ${
              isScrolled ? 'text-slate-900' : 'text-white'
            }`}>
              True North Tiny
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isScrolled 
                    ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-100' 
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.name}
              </a>
            ))}
            
            {/* Admin Link */}
            <a
              href="#admin"
              className={`ml-2 px-3 py-2 text-sm font-medium rounded-lg transition-colors flex items-center gap-1.5 ${
                isScrolled 
                  ? 'text-slate-400 hover:text-slate-600 hover:bg-slate-100' 
                  : 'text-white/50 hover:text-white/70 hover:bg-white/10'
              }`}
            >
              <Lock className="w-3.5 h-3.5" />
              Admin
            </a>
            
            <Button
              size="sm"
              className={`ml-4 ${
                isScrolled 
                  ? 'bg-slate-900 text-white hover:bg-slate-800' 
                  : 'bg-white text-slate-900 hover:bg-white/90'
              }`}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-slate-800' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2.5 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#admin"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2.5 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-lg transition-colors flex items-center gap-2"
            >
              <Lock className="w-4 h-4" />
              Admin Access
            </a>
            <div className="pt-2">
              <Button className="w-full bg-slate-900 text-white">Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation
