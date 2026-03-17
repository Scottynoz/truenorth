import { ArrowRight, Home, TreePine, Zap, Building2, Hammer, Package } from 'lucide-react'
import { Button } from '@/components/ui/button'

const categories = [
  {
    id: 1,
    name: 'DIY Bunkie Kits',
    description: 'Pre-cut cabin kits you assemble yourself. No permit needed under 108 sq ft.',
    image: '/budget-bunkie.jpg',
    icon: Hammer,
    count: '20+ Models',
    priceRange: '$3K - $25K',
  },
  {
    id: 2,
    name: 'Budget Prefab',
    description: 'Turnkey homes delivered complete. Perfect for first-time buyers.',
    image: '/prefab-modular.jpg',
    icon: Package,
    count: '15+ Models',
    priceRange: '$25K - $80K',
  },
  {
    id: 3,
    name: 'Tiny Homes on Wheels',
    description: 'Road-legal THOWs perfect for the nomadic lifestyle.',
    image: '/tiny-home-wheels.jpg',
    icon: Home,
    count: '45+ Models',
    priceRange: '$80K - $200K',
  },
  {
    id: 4,
    name: 'Park Models',
    description: 'Wider luxury tiny homes ideal for seasonal stays.',
    image: '/park-model.jpg',
    icon: Building2,
    count: '30+ Models',
    priceRange: '$150K - $260K',
  },
  {
    id: 5,
    name: 'A-Frame Cabins',
    description: 'Iconic triangular designs that handle Canadian snow loads.',
    image: '/aframe-cabin.jpg',
    icon: TreePine,
    count: '15+ Models',
    priceRange: '$45K - $150K',
  },
  {
    id: 6,
    name: 'Off-Grid Solutions',
    description: 'Self-sufficient homes with solar and sustainable systems.',
    image: '/offgrid-home.jpg',
    icon: Zap,
    count: '20+ Models',
    priceRange: '$50K - $200K',
  },
]

const DesignCategories = () => {
  return (
    <section id="designs" className="py-24 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-medium text-emerald-600 uppercase tracking-wide mb-2">
            Explore by Style
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-4">
            Find Your Perfect Design
          </h2>
          <p className="text-lg text-muted-foreground">
            From DIY bunkie kits under $10K to luxury custom builds.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <div
                key={category.id}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-slate-300 transition-all cursor-pointer"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                    <div className="flex items-center gap-2">
                      <Icon className="w-4 h-4" />
                      <span className="text-sm">{category.count}</span>
                    </div>
                    <span className="text-sm font-medium">{category.priceRange}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-1 group-hover:text-emerald-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {category.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Button size="lg">
            Compare All Designs
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default DesignCategories
