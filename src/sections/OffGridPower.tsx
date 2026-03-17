import { Zap, Sun, Wind, Battery, ArrowRight, Check, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const solarProducts = [
  {
    id: 1,
    name: 'EcoFlow Delta 2',
    type: 'Portable Power Station',
    price: '$1,415',
    capacity: '1,024Wh (expandable to 3kWh)',
    output: '1,800W AC (X-Boost to 2,400W)',
    bestFor: 'Entry-level off-grid, camping, backup',
    features: ['LiFePO4 battery', 'Fast charge (50 min)', 'Solar input 500W', 'App control'],
    affiliateLink: 'https://www.amazon.ca/dp/B0B9J9XYZ?tag=YOUR-AMAZON-CA-ID-20',
    recommended: true,
  },
  {
    id: 2,
    name: 'EcoFlow Delta Pro',
    type: 'Power Station',
    price: '$2,699',
    capacity: '3,600Wh (expandable to 25kWh)',
    output: '3,600W AC (7,200W surge)',
    bestFor: 'Full-time tiny home living',
    features: ['EV charging compatible', '3,500 cycles', 'Smart Home Panel ready', '5-year warranty'],
    affiliateLink: 'https://www.amazon.ca/dp/B0B8XYZ123?tag=YOUR-AMAZON-CA-ID-20',
    recommended: false,
  },
  {
    id: 3,
    name: 'Growatt 3.5kW Solar Kit',
    type: 'Complete Solar System',
    price: '$5,499',
    capacity: '5.12kWh battery + 1.2kW solar',
    output: '3,500W continuous',
    bestFor: 'Permanent off-grid installation',
    features: ['All-in-one inverter', 'Stackable expansion', '48V system', 'Batteries included'],
    affiliateLink: 'https://www.amazon.ca/dp/B08XYZ456?tag=YOUR-AMAZON-CA-ID-20',
    recommended: false,
  },
  {
    id: 4,
    name: 'Grape Solar 400W Kit',
    type: 'Solar Panel Kit',
    price: '$1,399',
    capacity: '400W panels',
    output: 'For charging batteries directly',
    bestFor: 'DIY budget builds',
    features: ['Easy to expand', 'Charge controller included', 'CSA certified', 'Budget-friendly'],
    affiliateLink: 'https://www.amazon.ca/dp/B07XYZ789?tag=YOUR-AMAZON-CA-ID-20',
    recommended: false,
  },
]

const OffGridPower = () => {
  return (
    <section id="offgrid-power" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-4">
            <Zap className="w-5 h-5 text-emerald-500" />
            <span className="text-sm font-medium text-emerald-600 uppercase tracking-wide">
              Off-Grid Living
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-4">
            Power Your Tiny Home
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Complete solar, wind, and battery solutions for off-grid tiny living. 
            From portable power stations to full rooftop installations — everything 
            you need to generate and store your own electricity.
          </p>
        </div>

        {/* Solar Section */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-amber-100 rounded-lg">
              <Sun className="w-5 h-5 text-amber-600" />
            </div>
            <h3 className="text-2xl font-semibold">Solar Power Systems</h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {solarProducts.map((product) => (
              <div
                key={product.id}
                className={`group relative bg-slate-50 rounded-2xl p-6 border transition-all hover:shadow-lg ${
                  product.recommended ? 'border-emerald-200 ring-1 ring-emerald-100' : 'border-slate-200'
                }`}
              >
                {product.recommended && (
                  <Badge className="absolute top-4 right-4 bg-emerald-500 text-white">
                    Recommended
                  </Badge>
                )}
                
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{product.type}</p>
                    <h4 className="text-xl font-semibold group-hover:text-emerald-600 transition-colors">
                      {product.name}
                    </h4>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-emerald-600">{product.price}</p>
                  </div>
                </div>

                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Capacity:</span>
                    <span className="font-medium">{product.capacity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Output:</span>
                    <span className="font-medium">{product.output}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Best for:</span>
                    <span className="font-medium">{product.bestFor}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {product.features.map((feature) => (
                    <span
                      key={feature}
                      className="inline-flex items-center gap-1 px-2.5 py-1 bg-white rounded-full text-xs font-medium text-slate-600 border border-slate-200"
                    >
                      <Check className="w-3 h-3 text-emerald-500" />
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a 
                    href={product.affiliateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button className="w-full bg-slate-900 hover:bg-slate-800">
                      Check Price on Amazon
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </a>
                </div>
                
                <p className="text-xs text-muted-foreground mt-3 text-center">
                  Affiliate link - we earn a small commission at no extra cost to you
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Wind Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Wind className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="text-2xl font-semibold">Wind Power</h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-6 border border-blue-100">
              <img
                src="/wind-turbine.jpg"
                alt="Portable wind turbine"
                className="w-full h-48 object-cover rounded-xl mb-6"
              />
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Portable Wind Generator</p>
                  <h4 className="text-xl font-semibold">Shine 2.0 Turbine</h4>
                </div>
                <Badge className="bg-blue-500 text-white">Unique</Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Water-bottle-sized portable wind turbine that generates power day or night. 
                Perfect for supplementing solar in windy areas.
              </p>
              <div className="flex gap-3">
                <a 
                  href="https://aurea.io/shine"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Learn More
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col justify-center">
              <Battery className="w-12 h-12 text-slate-400 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Solar + Wind Combo</h4>
              <p className="text-muted-foreground mb-6">
                For reliable off-grid power, combine solar panels with a small wind turbine. 
                Wind generates power at night and during cloudy days when solar is limited.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span>24/7 power generation</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span>Reduces battery storage needs</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span>Best for coastal/mountain locations</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-slate-900 rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="text-2xl lg:text-3xl font-semibold text-white mb-4">
            Not Sure How Much Power You Need?
          </h3>
          <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
            Use our power calculator to estimate your daily energy consumption and 
            find the perfect solar setup for your tiny home.
          </p>
          <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
            Calculate Your Power Needs
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default OffGridPower
