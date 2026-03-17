import { Check } from 'lucide-react'

const pricingTiers = [
  {
    name: 'DIY Kit',
    price: '$3K - $30K',
    description: 'For hands-on builders',
    features: [
      'Pre-cut cabin kits',
      '106-200 sq ft',
      'DIY assembly 2-5 days',
      'No permit under 108 sq ft',
    ],
    examples: ['Bunkie Life $9,245', 'Summer Cabin $5,995'],
    highlighted: false,
  },
  {
    name: 'Budget Prefab',
    price: '$25K - $80K',
    description: 'Most popular choice',
    features: [
      'Turnkey delivery',
      '300-500 sq ft',
      'Kitchen & bath included',
      'CSA certified options',
    ],
    examples: ['Kaldees $25,999', 'Ballance $29,995'],
    highlighted: true,
  },
  {
    name: 'Premium Custom',
    price: '$80K - $200K+',
    description: 'Full-time luxury living',
    features: [
      'Custom designs',
      '400-800 sq ft',
      'High-end appliances',
      'Off-grid options',
    ],
    examples: ['Teacup from $135K', 'Summit from $160K'],
    highlighted: false,
  },
]

const additionalCosts = [
  { name: 'Delivery', cost: '$500 - $5,000' },
  { name: 'Foundation', cost: '$500 - $3,000' },
  { name: 'Utilities', cost: '$500 - $2,500' },
  { name: 'Permits', cost: '$0 - $2,000' },
]

const PricingGuide = () => {
  return (
    <section id="pricing" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-medium text-emerald-600 uppercase tracking-wide mb-2">
            Transparent Pricing
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-4">
            Affordable Tiny Living
          </h2>
          <p className="text-lg text-muted-foreground">
            Real prices from Canadian builders and international sources.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl p-6 border ${
                tier.highlighted
                  ? 'bg-slate-900 text-white border-slate-900'
                  : 'bg-slate-50 border-slate-200'
              }`}
            >
              <div className="mb-6">
                <h3 className={`text-lg font-semibold mb-1 ${
                  tier.highlighted ? 'text-white' : 'text-slate-900'
                }`}>
                  {tier.name}
                </h3>
                <p className={`text-sm ${tier.highlighted ? 'text-slate-400' : 'text-muted-foreground'}`}>
                  {tier.description}
                </p>
              </div>

              <p className={`text-3xl font-bold mb-6 ${
                tier.highlighted ? 'text-emerald-400' : 'text-emerald-600'
              }`}>
                {tier.price}
              </p>

              <ul className="space-y-3 mb-6">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                      tier.highlighted ? 'text-emerald-400' : 'text-emerald-600'
                    }`} />
                    <span className={tier.highlighted ? 'text-slate-300' : 'text-slate-600'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <div className={`pt-4 border-t ${
                tier.highlighted ? 'border-slate-700' : 'border-slate-200'
              }`}>
                <p className={`text-xs mb-2 ${tier.highlighted ? 'text-slate-500' : 'text-muted-foreground'}`}>
                  Examples:
                </p>
                <p className={`text-sm ${tier.highlighted ? 'text-slate-300' : 'text-slate-700'}`}>
                  {tier.examples.join(', ')}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Costs */}
        <div className="bg-slate-50 rounded-2xl p-6 lg:p-8">
          <h3 className="text-lg font-semibold mb-6">Additional Costs</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {additionalCosts.map((cost) => (
              <div key={cost.name} className="bg-white rounded-xl p-4 border border-slate-200">
                <p className="text-sm text-muted-foreground mb-1">{cost.name}</p>
                <p className="text-lg font-semibold text-slate-900">{cost.cost}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingGuide
