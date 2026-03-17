import { Leaf, Check, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const toiletProducts = [
  {
    id: 1,
    name: "Nature's Head",
    type: 'Self-Contained Composting',
    price: '$995 - $1,065',
    capacity: '2 people full-time, 4-6 weeks',
    power: '12V fan (optional)',
    bestFor: 'Tiny homes, boats, RVs',
    features: ['Urine-diverting', 'No water needed', 'Marine-grade build', 'Easy emptying'],
    affiliateLink: 'https://www.amazon.ca/dp/B003ABC123?tag=YOUR-AMAZON-CA-ID-20',
    recommended: true,
  },
  {
    id: 2,
    name: 'Separett Villa 9215',
    type: 'Urine-Diverting Composting',
    price: '$989',
    capacity: '2-3 people, 4-6 weeks',
    power: '12V fan (included)',
    bestFor: 'Permanent installations',
    features: ['Biodegradable bags', 'External urine drain', 'Odor-free', 'Swedish design'],
    affiliateLink: 'https://www.amazon.ca/dp/B00DEF456?tag=YOUR-AMAZON-CA-ID-20',
    recommended: true,
  },
  {
    id: 3,
    name: 'ThinkTank',
    type: 'Waterless Composting',
    price: '~$800 - $900',
    capacity: 'Family-friendly',
    power: '2.5W fan',
    bestFor: 'Cabins, bunkies, families',
    features: ['Compostable bags', 'Low power use', 'Sealed airflow', 'Simple maintenance'],
    affiliateLink: 'https://www.amazon.ca/dp/B07MNO345?tag=YOUR-AMAZON-CA-ID-20',
    recommended: false,
  },
  {
    id: 4,
    name: 'OGO Composting Toilet',
    type: 'Electric Composting',
    price: '~$1,130',
    capacity: '2 people full-time',
    power: 'Electric agitator',
    bestFor: 'Modern tiny homes',
    features: ['Auto mixing', 'Indicator light', 'Compact design', 'No cranking'],
    affiliateLink: 'https://www.amazon.ca/dp/B08GHI789?tag=YOUR-AMAZON-CA-ID-20',
    recommended: false,
  },
]

const greywaterProducts = [
  {
    id: 1,
    name: 'Grey-Flow Diverter System',
    type: 'Greywater Irrigation',
    price: '$500 - $1,200',
    bestFor: 'Garden irrigation',
    features: ['Filters included', 'Pump system', 'Drip-ready', 'Low maintenance'],
    affiliateLink: 'https://www.amazon.ca/dp/B07PQR789?tag=YOUR-AMAZON-CA-ID-20',
    recommended: true,
  },
  {
    id: 2,
    name: 'DIY Bucket System',
    type: 'Budget Greywater',
    price: '$20 - $50',
    bestFor: 'Simple hand-watering',
    features: ['5-gallon bucket', 'No installation', 'Portable', 'Immediate reuse'],
    affiliateLink: 'https://www.amazon.ca/dp/B07STU012?tag=YOUR-AMAZON-CA-ID-20',
    recommended: false,
  },
]

const WasteManagement = () => {
  return (
    <section id="waste-management" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-4">
            <Leaf className="w-5 h-5 text-emerald-500" />
            <span className="text-sm font-medium text-emerald-600 uppercase tracking-wide">
              Sustainable Living
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-4">
            Waste Management Solutions
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Waterless toilets and greywater systems for off-grid living. No plumbing required, 
            eco-friendly, and designed for Canadian climates.
          </p>
        </div>

        {/* Composting Toilets */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-semibold">Composting Toilets</h3>
            <Badge variant="outline" className="text-emerald-600 border-emerald-200">
              No Water Required
            </Badge>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {toiletProducts.map((product) => (
              <div
                key={product.id}
                className={`bg-slate-50 rounded-2xl p-6 border transition-all hover:shadow-lg ${
                  product.recommended ? 'border-emerald-200 ring-1 ring-emerald-100' : 'border-slate-200'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{product.type}</p>
                    <h4 className="text-xl font-semibold">{product.name}</h4>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-emerald-600">{product.price}</p>
                    {product.recommended && (
                      <Badge className="mt-1 bg-emerald-500 text-white">Top Pick</Badge>
                    )}
                  </div>
                </div>

                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Capacity:</span>
                    <span className="font-medium">{product.capacity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Power:</span>
                    <span className="font-medium">{product.power}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Best for:</span>
                    <span className="font-medium">{product.bestFor}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
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

        {/* Comparison Table */}
        <div className="bg-slate-50 rounded-2xl p-6 lg:p-8 mb-16 border border-slate-200">
          <h4 className="text-xl font-semibold mb-6">Quick Comparison</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-3 font-medium">Feature</th>
                  <th className="text-left py-3 font-medium">Nature's Head</th>
                  <th className="text-left py-3 font-medium">Separett Villa</th>
                  <th className="text-left py-3 font-medium">ThinkTank</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100">
                  <td className="py-3 text-muted-foreground">Price</td>
                  <td className="py-3">$995-1,065</td>
                  <td className="py-3">$989</td>
                  <td className="py-3">~$850</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 text-muted-foreground">Emptying</td>
                  <td className="py-3">Manual crank</td>
                  <td className="py-3">Bag system</td>
                  <td className="py-3">Bag replacement</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 text-muted-foreground">Urine</td>
                  <td className="py-3">Internal tank</td>
                  <td className="py-3">External drain</td>
                  <td className="py-3">Diverted</td>
                </tr>
                <tr>
                  <td className="py-3 text-muted-foreground">Best For</td>
                  <td className="py-3">Mobile/RVs</td>
                  <td className="py-3">Permanent</td>
                  <td className="py-3">Families</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Greywater Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8">Greywater Systems</h3>
          
          <div className="grid lg:grid-cols-2 gap-6">
            {greywaterProducts.map((product) => (
              <div
                key={product.id}
                className={`bg-slate-50 rounded-2xl p-6 border transition-all hover:shadow-lg ${
                  product.recommended ? 'border-blue-200 ring-1 ring-blue-100' : 'border-slate-200'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{product.type}</p>
                    <h4 className="text-xl font-semibold">{product.name}</h4>
                  </div>
                  <p className="text-xl font-bold text-blue-600">{product.price}</p>
                </div>

                <p className="text-sm text-muted-foreground mb-4">
                  Best for: {product.bestFor}
                </p>

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
                    View on Amazon
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

        {/* Tips */}
        <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-100">
          <h4 className="text-xl font-semibold mb-4 text-emerald-800">
            💡 Pro Tips for Composting Toilets
          </h4>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h5 className="font-medium mb-2 text-emerald-700">Use the Right Medium</h5>
              <p className="text-sm text-emerald-600">
                Coconut coir or peat moss work best. Avoid garden soil or wood chips 
                which don't absorb moisture properly.
              </p>
            </div>
            <div>
              <h5 className="font-medium mb-2 text-emerald-700">Ventilation is Key</h5>
              <p className="text-sm text-emerald-600">
                Always install the vent pipe properly. A 12V fan uses minimal power 
                and keeps everything odor-free.
              </p>
            </div>
            <div>
              <h5 className="font-medium mb-2 text-emerald-700">Empty Regularly</h5>
              <p className="text-sm text-emerald-600">
                Don't wait until it's full. Emptying every 3-4 weeks prevents odors 
                and makes the job easier.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WasteManagement
