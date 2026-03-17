// Affiliate Links Configuration
// Replace YOUR-AMAZON-CA-ID and YOUR-AMAZON-US-ID with your actual Amazon Associates IDs

export const AMAZON_CA_ID = 'YOUR-AMAZON-CA-ID-20'
export const AMAZON_US_ID = 'YOUR-AMAZON-US-ID-20'

// Helper function to create Amazon affiliate link
export const createAmazonLink = (asin: string, country: 'ca' | 'us' = 'ca') => {
  const baseUrl = country === 'ca' 
    ? 'https://www.amazon.ca/dp' 
    : 'https://www.amazon.com/dp'
  const tag = country === 'ca' ? AMAZON_CA_ID : AMAZON_US_ID
  return `${baseUrl}/${asin}?tag=${tag}`
}

// Solar Power Products
export const solarProducts = {
  ecoflowDelta2: {
    ca: createAmazonLink('B0B9J9XYZ', 'ca'),
    us: createAmazonLink('B0B9J9XYZ', 'us'),
    name: 'EcoFlow Delta 2',
  },
  ecoflowDeltaPro: {
    ca: createAmazonLink('B0B8XYZ123', 'ca'),
    us: createAmazonLink('B0B8XYZ123', 'us'),
    name: 'EcoFlow Delta Pro',
  },
  grapeSolar400W: {
    ca: createAmazonLink('B07XYZ789', 'ca'),
    us: createAmazonLink('B07XYZ789', 'us'),
    name: 'Grape Solar 400W Kit',
  },
  renogy100W: {
    ca: createAmazonLink('B07XYZ456', 'ca'),
    us: createAmazonLink('B07XYZ456', 'us'),
    name: 'Renogy 100W Solar Panel',
  },
  jackery500: {
    ca: createAmazonLink('B08XYZ123', 'ca'),
    us: createAmazonLink('B08XYZ123', 'us'),
    name: 'Jackery Explorer 500',
  },
}

// Water Filtration Products
export const waterProducts = {
  berkeyTravel: {
    ca: createAmazonLink('B001ABC123', 'ca'),
    us: createAmazonLink('B001ABC123', 'us'),
    name: 'Berkey Travel Water Filter',
  },
  berkeyBig: {
    ca: createAmazonLink('B001DEF456', 'ca'),
    us: createAmazonLink('B001DEF456', 'us'),
    name: 'Berkey Big Water Filter',
  },
  rainBarrel55: {
    ca: createAmazonLink('B07GHI789', 'ca'),
    us: createAmazonLink('B07GHI789', 'us'),
    name: '55-Gallon Rain Barrel',
  },
  firstFlush: {
    ca: createAmazonLink('B07JKL012', 'ca'),
    us: createAmazonLink('B07JKL012', 'us'),
    name: 'First Flush Diverter',
  },
}

// Composting Toilets
export const toiletProducts = {
  naturesHead: {
    ca: createAmazonLink('B003ABC123', 'ca'),
    us: createAmazonLink('B003ABC123', 'us'),
    name: "Nature's Head Composting Toilet",
  },
  separettVilla: {
    ca: createAmazonLink('B00DEF456', 'ca'),
    us: createAmazonLink('B00DEF456', 'us'),
    name: 'Separett Villa Composting Toilet',
  },
  ogoToilet: {
    ca: createAmazonLink('B08GHI789', 'ca'),
    us: createAmazonLink('B08GHI789', 'us'),
    name: 'OGO Composting Toilet',
  },
  thinktank: {
    ca: createAmazonLink('B07MNO345', 'ca'),
    us: createAmazonLink('B07MNO345', 'us'),
    name: 'ThinkTank Composting Toilet',
  },
}

// Wind Power
export const windProducts = {
  shineTurbine: {
    url: 'https://aurea.io/shine',
    name: 'Shine 2.0 Portable Wind Turbine',
    affiliate: false, // Direct link - apply for their program
  },
}

// Lender Affiliate Links (Apply to these programs)
export const lenderAffiliates = {
  lightstream: {
    url: 'https://www.lightstream.com/tiny-houses',
    network: 'impact.com',
    commission: '$100-$300 per funded loan',
    applyUrl: 'https://app.impact.com/campaign-campaigns-list/lightstream.brand',
  },
  sofi: {
    url: 'https://www.sofi.com/personal-loans/',
    network: 'Direct or Impact.com',
    commission: '$100-$150 per funded loan',
    applyUrl: 'https://www.sofi.com/affiliates/',
  },
  upstart: {
    url: 'https://www.upstart.com',
    network: 'Partnerize',
    commission: '$75-$200 per funded loan',
    applyUrl: 'https://www.upstart.com/partners',
  },
  lendingClub: {
    url: 'https://www.lendingclub.com',
    network: 'Commission Junction (CJ)',
    commission: '$50-$100 per funded loan',
    applyUrl: 'https://www.cj.com/',
  },
}

// Tiny Home Builder Partnerships (Contact directly)
export const builderPartnerships = {
  teacup: {
    name: 'Teacup Tiny Homes',
    url: 'https://teacuptinyhomes.com',
    contact: 'info@teacuptinyhomes.com',
    potentialCommission: '$500-$1,000 per sale',
  },
  summit: {
    name: 'Summit Tiny Homes',
    url: 'https://summittinyhomes.com',
    contact: 'info@summittinyhomes.com',
    potentialCommission: '$500-$1,000 per sale',
  },
  bunkieLife: {
    name: 'Bunkie Life',
    url: 'https://bunkielife.com',
    contact: 'info@bunkielife.com',
    potentialCommission: '$100-$250 per sale',
  },
  kaldees: {
    name: 'Kaldees',
    url: 'https://kaldees.com',
    contact: 'info@kaldees.com',
    potentialCommission: '$200-$500 per sale',
  },
  acorn: {
    name: 'Acorn Tiny Homes',
    url: 'https://acorntinyhomes.com',
    contact: 'info@acorntinyhomes.com',
    potentialCommission: '$500-$1,000 per sale',
  },
}

// Business Credit Cards
export const businessCards = {
  venn: {
    url: 'https://venn.ca',
    name: 'Venn Business Mastercard',
    features: ['1% unlimited cashback', 'No personal guarantee', '0.25% FX fee'],
  },
  rbc: {
    url: 'https://www.rbcroyalbank.com/business/credit-cards/',
    name: 'RBC Business Cash Back',
    features: ['1-2% cashback', 'Petro-Canada savings', '$0 annual fee'],
  },
  td: {
    url: 'https://www.td.com/ca/en/business-banking/small-business/credit-cards/',
    name: 'TD Business Cash Back Visa',
    features: ['0.75-1.5% cashback', 'No annual fee', 'Employee cards'],
  },
  amex: {
    url: 'https://www.americanexpress.com/ca/business/',
    name: 'Amex Business Edge',
    features: ['1-3x points', 'High spend bonus', '$99 annual fee'],
  },
}

// Disclosure text (required by law)
export const affiliateDisclosure = {
  short: 'This site contains affiliate links. We may earn a commission at no extra cost to you.',
  full: `True North Tiny Homes participates in affiliate marketing programs. This means we may earn a commission when you click on or make purchases through affiliate links on our website. This comes at no additional cost to you.

We only recommend products and services we genuinely believe in and that we think would be valuable to our readers. Our editorial content is not influenced by affiliate partnerships.

As an Amazon Associate, we earn from qualifying purchases. We also participate in affiliate programs with various lenders, builders, and service providers.

If you have any questions about our affiliate relationships, please contact us at hello@truenorthtiny.ca.`,
}

// UTM tracking parameters
export const createTrackingUrl = (baseUrl: string, source: string, medium: string, campaign: string) => {
  const separator = baseUrl.includes('?') ? '&' : '?'
  return `${baseUrl}${separator}utm_source=${source}&utm_medium=${medium}&utm_campaign=${campaign}`
}
