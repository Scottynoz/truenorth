import { ArrowRight, Bed, Maximize, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const featuredHomes = [
  {
    id: 1,
    name: 'Cabana Bunkie Kit',
    builder: 'Bunkie Life',
    location: 'Canada-Wide',
    price: '$9,245',
    size: '106 sq ft',
    beds: 'Studio',
    image: '/budget-bunkie.jpg',
    tag: 'Best Value',
    description: 'DIY cabin kit with pre-cut pieces. Assembles in 2-3 days. No permit required.',
  },
  {
    id: 2,
    name: '2BR Prefab Home',
    builder: 'Kaldees',
    location: 'Ships to Canada',
    price: '$25,999',
    size: '400 sq ft',
    beds: '2 Bedrooms',
    image: '/prefab-modular.jpg',
    tag: 'Under $30K',
    description: 'Complete turnkey home with kitchen, bathroom, and 2 bedrooms.',
  },
  {
    id: 3,
    name: 'Container Bunkie',
    builder: 'Ballance Containers',
    location: 'Ontario',
    price: '$29,995',
    size: '106 sq ft',
    beds: 'Studio',
    image: '/container-bunkie.jpg',
    tag: 'Trending',
    description: 'Converted shipping container with rustic charm. Weather-resistant.',
  },
  {
    id: 4,
    name: 'The Nordic Retreat',
    builder: 'Teacup Tiny Homes',
    location: 'Alberta',
    price: '$159,999',
    size: '325 sq ft',
    beds: '1 Bed + Loft',
    image: '/tiny-home-wheels.jpg',
    tag: 'Premium',
    description: 'Scandinavian-inspired design with panoramic windows.',
  },
]

const FeaturedHomes = () => {
  return (
    <section id="featured" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <p className="text-sm font-medium text-emerald-600 uppercase tracking-wide mb-2">
              Featured Collection
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
              Most Sought-After Designs
            </h2>
          </div>
          <Button variant="outline" className="self-start lg:self-auto">
            View All Homes
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Homes Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {featuredHomes.map((home) => (
            <div
              key={home.id}
              className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 hover:border-slate-300 transition-all"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={home.image}
                  alt={home.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={`${
                    home.tag === 'Best Value' ? 'bg-emerald-500' :
                    home.tag === 'Under $30K' ? 'bg-amber-500' :
                    home.tag === 'Trending' ? 'bg-blue-500' :
                    'bg-slate-800'
                  } text-white`}>
                    {home.tag}
                  </Badge>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-xl font-semibold group-hover:text-emerald-600 transition-colors">
                      {home.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">by {home.builder}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-emerald-600">{home.price}</p>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-4">
                  {home.description}
                </p>

                {/* Specs */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground pt-4 border-t border-slate-200">
                  <div className="flex items-center gap-1.5">
                    <Maximize className="w-4 h-4" />
                    <span>{home.size}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Bed className="w-4 h-4" />
                    <span>{home.beds}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" />
                    <span>{home.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedHomes
