import { TreePine, Instagram, Youtube, Facebook, Twitter, Mail } from 'lucide-react'

const footerLinks = {
  explore: [
    { name: 'Featured Homes', href: '#featured' },
    { name: 'Designs', href: '#designs' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Power Systems', href: '#offgrid-power' },
    { name: 'Water Systems', href: '#water-systems' },
    { name: 'Builders', href: '#builders' },
  ],
  resources: [
    { name: "Buyer's Guide", href: '#' },
    { name: 'Power Calculator', href: '#' },
    { name: 'Financing', href: '#financing' },
    { name: 'Zoning Laws', href: '#' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Partners', href: '#' },
    { name: 'Contact', href: '#' },
    { name: 'Privacy', href: '#' },
  ],
}

const socialLinks = [
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'YouTube', icon: Youtube, href: '#' },
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
]

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Affiliate Disclosure Banner */}
      <div className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-xs text-slate-500 text-center">
            <span className="font-medium text-slate-400">Affiliate Disclosure:</span>{' '}
            This site contains affiliate links. We may earn a commission when you purchase through our links at no extra cost to you.{' '}
            <a href="#" className="text-emerald-500 hover:text-emerald-400 underline">Learn more</a>
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 lg:py-20">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <a href="#" className="flex items-center gap-2.5 mb-6">
                <div className="p-2 bg-slate-800 rounded-lg">
                  <TreePine className="w-5 h-5 text-emerald-400" />
                </div>
                <span className="text-lg font-semibold text-white">
                  True North Tiny
                </span>
              </a>
              <p className="text-slate-400 mb-6 max-w-sm text-sm leading-relaxed">
                Canada's premier destination for tiny home inspiration, off-grid solutions, 
                and connections to trusted builders. Helping Canadians discover affordable tiny living.
              </p>
              
              <a href="mailto:hello@truenorthtiny.ca" className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                <span>hello@truenorthtiny.ca</span>
              </a>

              <div className="flex items-center gap-3 mt-6">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
                      aria-label={social.name}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-white font-medium mb-4">Explore</h4>
              <ul className="space-y-3">
                {footerLinks.explore.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-medium mb-4">Resources</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-medium mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-slate-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500">
              © 2024 True North Tiny Homes. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-slate-500 hover:text-slate-300 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-slate-500 hover:text-slate-300 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-slate-500 hover:text-slate-300 transition-colors">
                Affiliate Disclosure
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
