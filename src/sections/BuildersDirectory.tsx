import { ArrowRight, MapPin, Award, Star, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const builders = [
  {
    id: 1,
    name: 'Teacup Tiny Homes',
    location: 'Lethbridge, Alberta',
    specialty: 'Luxury THOWs & Park Models',
    priceRange: '$135K - $250K',
    rating: 4.9,
    reviews: 150,
    awards: ['Top Rated 2024', 'Pioneer Builder'],
    description: 'Alberta\'s oldest tiny home manufacturer. Expertly crafted designs with premium finishes and exceptional customer service.',
    shipsTo: 'All Canada & USA',
    certifications: ['CSA Z240', 'CSA A277'],
    website: 'teacuptinyhomes.com',
  },
  {
    id: 2,
    name: 'Summit Tiny Homes',
    location: 'Vernon, British Columbia',
    specialty: 'Award-Winning Custom Builds',
    priceRange: '$160K - $240K',
    rating: 4.8,
    reviews: 120,
    awards: ['Design Excellence 2024'],
    description: 'Crafting award-winning tiny homes for 8+ years. Now offering modular ADUs and garden suites alongside their signature THOWs.',
    shipsTo: 'Canada & USA',
    certifications: ['CSA Z240', 'NFPA 1192'],
    website: 'summittinyhomes.com',
  },
  {
    id: 3,
    name: 'Acorn Tiny Homes',
    location: 'Toronto, Ontario',
    specialty: 'Innovative Container Homes',
    priceRange: '$149K - $300K',
    rating: 4.7,
    reviews: 85,
    awards: ['Innovation Award 2023'],
    description: 'Pushing boundaries with innovative designs like the Sakura with its transforming interior. Specializing in unique, space-saving solutions.',
    shipsTo: 'Ontario & Eastern Canada',
    certifications: ['CSA A277'],
    website: 'acorntinyhomes.com',
  },
  {
    id: 4,
    name: 'Minimaliste',
    location: 'Quebec',
    specialty: 'Custom 100% Personalized',
    priceRange: '$50K - $120K',
    rating: 4.9,
    reviews: 200,
    awards: ['Best Value 2024'],
    description: 'Fully customizable tiny homes built to RVIA standards. Personal design service to create your perfect home, delivered anywhere in North America.',
    shipsTo: 'All Canada & USA',
    certifications: ['RVIA', 'CSA'],
    website: 'minimalistetinyhouses.com',
  },
  {
    id: 5,
    name: 'Mint Tiny Homes',
    location: 'Vancouver, BC',
    specialty: 'Eco-Conscious Builds',
    priceRange: '$70K - $150K',
    rating: 4.6,
    reviews: 95,
    awards: ['Green Builder 2024'],
    description: '100+ tiny homes built since 2014. Focus on quality craftsmanship, integrity, and environmentally conscious construction.',
    shipsTo: 'Canada & USA',
    certifications: ['RVIA'],
    website: 'minttinyhomes.com',
  },
  {
    id: 6,
    name: 'Sycamore Tiny Homes',
    location: 'Nova Scotia',
    specialty: 'East Coast Custom Homes',
    priceRange: '$125K - $175K',
    rating: 4.8,
    reviews: 60,
    awards: ['Atlantic Favorite'],
    description: 'Custom code-compliant tiny houses on Nova Scotia\'s South Shore. Fixed skid units that feel like conventional homes with reduced footprints.',
    shipsTo: 'Atlantic Canada',
    certifications: ['CSA A277'],
    website: 'sycamoretinyhomes.com',
  },
]

const BuildersDirectory = () => {
  return (
    <section id="builders" className="py-20 lg:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Trusted Partners
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mt-2">
            Canadian Builders Directory
          </h2>
          <p className="text-muted-foreground mt-4">
            We've partnered with Canada's most reputable tiny home builders. 
            Each builder is vetted for quality, certification, and customer satisfaction.
          </p>
        </div>

        {/* Builders Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {builders.map((builder) => (
            <div
              key={builder.id}
              className="group bg-card rounded-2xl p-6 border shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-serif font-semibold group-hover:text-primary transition-colors">
                    {builder.name}
                  </h3>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mt-1">
                    <MapPin className="w-4 h-4" />
                    <span>{builder.location}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                    <span className="font-semibold">{builder.rating}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{builder.reviews} reviews</p>
                </div>
              </div>

              {/* Awards */}
              <div className="flex flex-wrap gap-2 mb-4">
                {builder.awards.map((award) => (
                  <Badge key={award} variant="secondary" className="text-xs">
                    <Award className="w-3 h-3 mr-1" />
                    {award}
                  </Badge>
                ))}
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                {builder.description}
              </p>

              {/* Details */}
              <div className="grid grid-cols-2 gap-4 py-4 border-y mb-4">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Specialty</p>
                  <p className="text-sm font-medium">{builder.specialty}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Price Range</p>
                  <p className="text-sm font-medium text-primary">{builder.priceRange}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Ships To</p>
                  <p className="text-sm">{builder.shipsTo}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Certifications</p>
                  <p className="text-sm">{builder.certifications.join(', ')}</p>
                </div>
              </div>

              {/* CTA */}
              <div className="flex gap-3">
                <Button className="flex-1" variant="outline">
                  View Profile
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button variant="ghost" size="icon">
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Are you a tiny home builder? Join our directory and reach thousands of potential buyers.
          </p>
          <Button variant="outline">
            Become a Partner
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default BuildersDirectory
