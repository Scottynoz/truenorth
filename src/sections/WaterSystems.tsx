import { Droplets, Filter, Check, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const rainwaterProducts = [
  {
    id: 1,
    name: 'DIY Rain Barrel System',
    type: 'Budget Collection',
    price: '$150 - $400',
    capacity: '55-100 gallons',
    bestFor: 'Garden watering, basic needs',
    features: ['Food-grade barrel', 'Spigot included', 'Mosquito screen', 'Easy setup'],
    affiliateLink: 'https://www.amazon.ca/dp/B07GHI789?tag=YOUR-AMAZON-CA-ID-20',
    recommended: true,
  },
  {
    id: 2,
    name: 'Rainwater Management Complete Kit',
    type: 'Professional System',
    price: '$1,300 - $4,900',
    capacity: '300-3,000 gallons',
    bestFor: 'Whole-home water supply',
    features: ['Pre-plumbed', 'Pump included', 'Filtration ready', 'Underground options'],
    affiliateLink: 'https://rainwatermanagement.com',
    recommended: false,
  },
  {
    id: 3,
    name: 'Rewatec Rain Harvester',
    type: 'Premium System',
    price: '$3,500+',
    capacity: 'Custom sizing',
    bestFor: 'Year-round potable water',
    features: ['CSA certified', 'Auto backup', 'Low maintenance', 'Professional install'],
    affiliateLink: 'https://premiertechaqua.com',
    recommended: false,
  },
]

const filtrationProducts = [
  {
    id: 1,
    name: 'Berkey Water Filter',
    type: 'Gravity Filter',
    price: '$400 - $700',
    capacity: '6,000+ gallons per filter',
    bestFor: 'Drinking water purification',
    features: ['No electricity', 'Removes 99.9% contaminants', 'Portable', 'Long-lasting'],
    affiliateLink: 'https://www.amazon.ca/dp/B001ABC123?tag=YOUR-AMAZON-CA-ID-20',
    recommended: true,
  },
  {
    id: 2,
    name: 'UV + Carbon System',
    type: 'Whole-House Filtration',
    price: '$800 - $1,500',
    capacity: 'Whole home flow rate',
    bestFor: 'Complete water treatment',
    features: ['UV sterilization', 'Activated carbon', 'Auto shutoff', 'CSA approved'],
    affiliateLink: 'https://www.amazon.ca/dp/B002DEF456?tag=YOUR-AMAZON-CA-ID-20',
    recommended: false,
  },
]

const WaterSystems = () => {
  return (
    <section id="water-systems" className="py-24 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-4">
            <Droplets className="w-5 h-5 text-blue-500" />
            <span className="text-sm font-medium text-blue-600 uppercase tracking-wide">
              Water Independence
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-4">
            Collect & Purify Rainwater
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Complete rainwater harvesting systems for tiny homes. From simple barrel setups 
            to professional-grade filtration — achieve water independence in any Canadian climate.
          </p>
        </div>

        {/* Image Banner */}
        <div className="relative rounded-2xl overflow-hidden mb-16">
          <img
            src="/rainwater-collection.jpg"
            alt="Rainwater collection system"
            className="w-full h-64 lg:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
            <div className="p-8 lg:p-12 max-w-lg">
              <h3 className="text-2xl lg:text-3xl font-semibold text-white mb-2">
                Canadian Climate Ready
              </h3>
              <p className="text-white/80 text-sm lg:text-base">
                Systems designed for freezing temperatures, heavy snowfall, and variable rainfall. 
                Underground and insulated above-ground options available.
              </p>
            </div>
          </div>
        </div>

        {/* Rainwater Collection */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold mb-8">Rainwater Collection Systems</h3>
          
          <div className="grid lg:grid-cols-3 gap-6">
            {rainwaterProducts.map((product) => (
              <div
                key={product.id}
                className={`bg-white rounded-2xl p-6 border transition-all hover:shadow-lg ${
                  product.recommended ? 'border-blue-200 ring-1 ring-blue-100' : 'border-slate-200'
                }`}
              >
                {product.recommended && (
                  <Badge className="mb-4 bg-blue-500 text-white">Best Value</Badge>
                )}
                
                <p className="text-sm text-muted-foreground mb-1">{product.type}</p>
                <h4 className="text-xl font-semibold mb-2">{product.name}</h4>
                <p className="text-2xl font-bold text-blue-600 mb-4">{product.price}</p>
                
                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Capacity:</span>
                    <span className="font-medium">{product.capacity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Best for:</span>
                    <span className="font-medium">{product.bestFor}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  {product.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-blue-500" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <a 
                  href={product.affiliateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button className="w-full" variant={product.recommended ? 'default' : 'outline'}>
                    View Details
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </a>
                
                <p className="text-xs text-muted-foreground mt-3 text-center">
                  Affiliate link - we earn a small commission
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Filtration */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-emerald-100 rounded-lg">
              <Filter className="w-5 h-5 text-emerald-600" />
            </div>
            <h3 className="text-2xl font-semibold">Water Filtration</h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {filtrationProducts.map((product) => (
              <div
                key={product.id}
                className={`bg-white rounded-2xl p-6 border transition-all hover:shadow-lg ${
                  product.recommended ? 'border-emerald-200 ring-1 ring-emerald-100' : 'border-slate-200'
                }`}
              >
                {product.recommended && (
                  <Badge className="mb-4 bg-emerald-500 text-white">Top Rated</Badge>
                )}
                
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{product.type}</p>
                    <h4 className="text-xl font-semibold">{product.name}</h4>
                  </div>
                  <p className="text-2xl font-bold text-emerald-600">{product.price}</p>
                </div>

                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Capacity:</span>
                    <span className="font-medium">{product.capacity}</span>
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
                      className="inline-flex items-center gap-1 px-2.5 py-1 bg-slate-50 rounded-full text-xs font-medium text-slate-600 border border-slate-200"
                    >
                      <Check className="w-3 h-3 text-emerald-500" />
                      {feature}
                    </span>
                  ))}
                </div>

                <a 
                  href={product.affiliateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button className="w-full" variant={product.recommended ? 'default' : 'outline'}>
                    Check Price on Amazon
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </a>
                
                <p className="text-xs text-muted-foreground mt-3 text-center">
                  Affiliate link - we earn a small commission
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Winter Tips */}
        <div className="bg-white rounded-2xl p-8 border border-slate-200">
          <h4 className="text-xl font-semibold mb-4">❄️ Winter-Proofing Your Water System</h4>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h5 className="font-medium mb-2">Underground Tanks</h5>
              <p className="text-sm text-muted-foreground">
                Install tanks below the frost line (4-6 feet in most of Canada) for year-round 
                protection from freezing.
              </p>
            </div>
            <div>
              <h5 className="font-medium mb-2">Insulated Above-Ground</h5>
              <p className="text-sm text-muted-foreground">
                Use insulated tanks with heat tape for above-ground installations. 
                Keep pumps in heated spaces.
              </p>
            </div>
            <div>
              <h5 className="font-medium mb-2">First Flush Diverter</h5>
              <p className="text-sm text-muted-foreground">
                Essential for clean water — diverts the first flow of rain that carries 
                roof debris and contaminants.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WaterSystems
