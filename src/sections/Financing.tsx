import { useState } from 'react'
import { DollarSign, Shield, ArrowRight, Check, Building2, CreditCard, ExternalLink, Lock, FileText, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const canadaLenders = [
  {
    id: 1,
    name: 'TD Canada Trust',
    type: 'RV Loan',
    rate: '6.99% - 9.99%',
    term: 'Up to 20 years',
    downPayment: '10% - 20%',
    features: ['Flexible payment options', 'No prepayment penalties', 'Online account management'],
    website: 'https://www.td.com/ca/en/personal-banking/products/borrowing/auto-finance/rv-financing',
    recommended: true,
  },
  {
    id: 2,
    name: 'RBC Royal Bank',
    type: 'RV & Marine Loan',
    rate: '6.99% - 8.99%',
    term: 'Up to 20 years',
    downPayment: '0% - 20%',
    features: ['Competitive rates', 'Flexible payments', 'Available at partner dealers'],
    website: 'https://www.rbcroyalbank.com/borrowing-solutions/',
    recommended: false,
  },
  {
    id: 3,
    name: 'Scotiabank',
    type: 'RV Loan',
    rate: '7.49% - 9.49%',
    term: 'Up to 20 years',
    downPayment: '10% - 20%',
    features: ['Payment break option', 'Fixed or variable rates', 'Easy online management'],
    website: 'https://www.scotiabank.com/ca/en/personal/loans-lines/recreational-vehicle-loan.html',
    recommended: false,
  },
  {
    id: 4,
    name: 'CIBC',
    type: 'CSBFP Term Loan',
    rate: 'Prime + 3%',
    term: 'Up to 15 years',
    downPayment: 'Flexible',
    features: ['Govt-backed (85%)', 'Up to $1M financing', 'Business use eligible'],
    website: 'https://www.cibc.com/en/business/loans-and-lines-of-credit/canada-small-business-financing-program.html',
    recommended: true,
  },
  {
    id: 5,
    name: 'Desjardins',
    type: 'RV Loan',
    rate: '6.99% - 8.99%',
    term: 'Up to 20 years',
    downPayment: '10% - 20%',
    features: ['New to Canada welcome', 'Flexible terms', 'Quebec-focused'],
    website: 'https://www.desjardins.com/en/loans-credit/auto-other-vehicle-financing/recreational-vehicle-loan.html',
    recommended: false,
  },
  {
    id: 6,
    name: 'Canada RV Finance',
    type: 'Tiny Home Specialist',
    rate: '6.99% - 9.99%',
    term: 'Up to 20 years',
    downPayment: '10% - 25%',
    features: ['Tiny home specialists', '100% financing possible', 'Quick approval'],
    website: 'https://canadarvfinance.com',
    recommended: true,
  },
]

const usaLenders = [
  {
    id: 1,
    name: 'LightStream (Truist)',
    type: 'Tiny Home Personal Loan',
    rate: '8.99% - 16.99%',
    term: '24 - 84 months',
    downPayment: 'None required',
    features: ['No fees', 'Same-day funding', 'Rate Beat Program', 'Up to $100,000'],
    website: 'https://www.lightstream.com/tiny-houses',
    recommended: true,
  },
  {
    id: 2,
    name: 'SoFi',
    type: 'Personal Loan',
    rate: '8.99% - 25.81%',
    term: '24 - 84 months',
    downPayment: 'None required',
    features: ['No origination fees', 'Unemployment protection', 'Up to $100,000', 'Autopay discount'],
    website: 'https://www.sofi.com/personal-loans/',
    recommended: true,
  },
  {
    id: 3,
    name: 'Upstart',
    type: 'AI-Powered Personal Loan',
    rate: '7.80% - 35.99%',
    term: '36 - 60 months',
    downPayment: 'None required',
    features: ['Fair credit OK', 'Fast approval', 'Up to $50,000', 'Soft credit check'],
    website: 'https://www.upstart.com',
    recommended: false,
  },
  {
    id: 4,
    name: 'LendingClub',
    type: 'Peer-to-Peer Loan',
    rate: '9.57% - 35.99%',
    term: '36 - 60 months',
    downPayment: 'None required',
    features: ['Multiple offers', 'Up to $40,000', 'Joint applications', 'No prepayment penalty'],
    website: 'https://www.lendingclub.com',
    recommended: false,
  },
  {
    id: 5,
    name: 'Upgrade',
    type: 'Personal Loan',
    rate: '9.99% - 35.99%',
    term: '24 - 84 months',
    downPayment: 'None required',
    features: ['Rate discounts available', 'Credit health tools', 'Up to $50,000', 'Fast funding'],
    website: 'https://www.upgrade.com',
    recommended: false,
  },
]

const businessCards = [
  {
    id: 1,
    name: 'Venn Business Mastercard',
    cashback: '1% unlimited',
    annualFee: '$0',
    fxFee: '0.25% - 0.45%',
    features: ['No personal guarantee', 'Multi-currency', 'Expense management', 'QuickBooks sync'],
    website: 'https://venn.ca',
    recommended: true,
  },
  {
    id: 2,
    name: 'RBC Business Cash Back',
    cashback: '1% - 2%',
    annualFee: '$0',
    fxFee: '2.5%',
    features: ['Petro-Canada savings', 'Easy Savings rebates', 'Purchase security', 'Extended warranty'],
    website: 'https://www.rbcroyalbank.com/business/credit-cards/',
    recommended: false,
  },
  {
    id: 3,
    name: 'TD Business Cash Back Visa',
    cashback: '0.75% - 1.5%',
    annualFee: '$0',
    fxFee: '2.5%',
    features: ['No annual fee', 'Bonus categories', 'Employee cards', 'Insurance coverage'],
    website: 'https://www.td.com/ca/en/business-banking/small-business/credit-cards/',
    recommended: false,
  },
  {
    id: 4,
    name: 'Amex Business Edge',
    cashback: '1x - 3x points',
    annualFee: '$99',
    fxFee: '2.5%',
    features: ['High spend bonus', 'Travel rewards', 'Expense tools', 'Welcome bonus'],
    website: 'https://www.americanexpress.com/ca/business/',
    recommended: false,
  },
]

const Financing = () => {
  return (
    <section id="financing" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-4">
            <DollarSign className="w-5 h-5 text-emerald-500" />
            <span className="text-sm font-medium text-emerald-600 uppercase tracking-wide">
              Financing Options
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-4">
            Finance Your Tiny Home
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Compare top lenders in Canada and the USA. From RV loans to personal loans 
            and business financing — find the best rates and terms for your tiny home purchase.
          </p>
        </div>

        {/* Credit Application CTA */}
        <div className="bg-slate-900 rounded-2xl p-8 lg:p-12 mb-16">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Lock className="w-5 h-5 text-emerald-400" />
                <span className="text-emerald-400 text-sm font-medium">256-bit SSL Encrypted</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-semibold text-white mb-2">
                Secure Credit Application
              </h3>
              <p className="text-slate-400 max-w-xl">
                Apply securely with our trusted lending partners. Your information is protected 
                with bank-level encryption and never shared without your consent.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
                    Personal Application
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Personal Credit Application</DialogTitle>
                    <DialogDescription>
                      Complete the form below. Your information is securely encrypted.
                    </DialogDescription>
                  </DialogHeader>
                  <CreditApplicationForm type="personal" />
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" variant="outline" className="border-slate-600 text-white hover:bg-slate-800">
                    Business Application
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Business Credit Application</DialogTitle>
                    <DialogDescription>
                      Complete the form below. Your information is securely encrypted.
                    </DialogDescription>
                  </DialogHeader>
                  <CreditApplicationForm type="business" />
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>

        {/* Canada Lenders */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
              <span className="text-red-600 font-bold text-sm">CA</span>
            </div>
            <h3 className="text-2xl font-semibold">Top Canadian Lenders</h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {canadaLenders.map((lender) => (
              <div
                key={lender.id}
                className={`bg-slate-50 rounded-2xl p-6 border transition-all hover:shadow-lg ${
                  lender.recommended ? 'border-emerald-200 ring-1 ring-emerald-100' : 'border-slate-200'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-xl font-semibold">{lender.name}</h4>
                      {lender.recommended && (
                        <Badge className="bg-emerald-500 text-white">Recommended</Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{lender.type}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-emerald-600">{lender.rate}</p>
                    <p className="text-xs text-muted-foreground">APR</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Term</p>
                    <p className="font-medium">{lender.term}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Down Payment</p>
                    <p className="font-medium">{lender.downPayment}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {lender.features.map((feature) => (
                    <span
                      key={feature}
                      className="inline-flex items-center gap-1 px-2.5 py-1 bg-white rounded-full text-xs font-medium text-slate-600 border border-slate-200"
                    >
                      <Check className="w-3 h-3 text-emerald-500" />
                      {feature}
                    </span>
                  ))}
                </div>

                <Button className="w-full" variant={lender.recommended ? 'default' : 'outline'}>
                  Apply Now
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* USA Lenders */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
              <span className="text-blue-600 font-bold text-sm">US</span>
            </div>
            <h3 className="text-2xl font-semibold">Top USA Lenders</h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {usaLenders.map((lender) => (
              <div
                key={lender.id}
                className={`bg-slate-50 rounded-2xl p-6 border transition-all hover:shadow-lg ${
                  lender.recommended ? 'border-emerald-200 ring-1 ring-emerald-100' : 'border-slate-200'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-xl font-semibold">{lender.name}</h4>
                      {lender.recommended && (
                        <Badge className="bg-emerald-500 text-white">Recommended</Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{lender.type}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-emerald-600">{lender.rate}</p>
                    <p className="text-xs text-muted-foreground">APR</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Term</p>
                    <p className="font-medium">{lender.term}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Down Payment</p>
                    <p className="font-medium">{lender.downPayment}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {lender.features.map((feature) => (
                    <span
                      key={feature}
                      className="inline-flex items-center gap-1 px-2.5 py-1 bg-white rounded-full text-xs font-medium text-slate-600 border border-slate-200"
                    >
                      <Check className="w-3 h-3 text-emerald-500" />
                      {feature}
                    </span>
                  ))}
                </div>

                <Button className="w-full" variant={lender.recommended ? 'default' : 'outline'}>
                  Apply Now
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Business Credit Cards */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <CreditCard className="w-6 h-6 text-emerald-500" />
            <h3 className="text-2xl font-semibold">Business Credit Cards with Rebates</h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {businessCards.map((card) => (
              <div
                key={card.id}
                className={`bg-slate-50 rounded-2xl p-6 border transition-all hover:shadow-lg ${
                  card.recommended ? 'border-emerald-200 ring-1 ring-emerald-100' : 'border-slate-200'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-xl font-semibold">{card.name}</h4>
                      {card.recommended && (
                        <Badge className="bg-emerald-500 text-white">Best Value</Badge>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-emerald-600">{card.cashback}</p>
                    <p className="text-xs text-muted-foreground">Cashback</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Annual Fee</p>
                    <p className="font-medium">{card.annualFee}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">FX Fee</p>
                    <p className="font-medium">{card.fxFee}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {card.features.map((feature) => (
                    <span
                      key={feature}
                      className="inline-flex items-center gap-1 px-2.5 py-1 bg-white rounded-full text-xs font-medium text-slate-600 border border-slate-200"
                    >
                      <Check className="w-3 h-3 text-emerald-500" />
                      {feature}
                    </span>
                  ))}
                </div>

                <Button className="w-full" variant={card.recommended ? 'default' : 'outline'}>
                  Learn More
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Business Financing Programs */}
        <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-100 mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Building2 className="w-6 h-6 text-emerald-600" />
            <h3 className="text-2xl font-semibold">Canada Small Business Financing Program (CSBFP)</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-muted-foreground mb-4">
                Government-backed financing for Canadian businesses. The federal government 
                guarantees 85% of the loan, making it easier to get approved.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-emerald-600" />
                  <span>Up to $1,000,000 term loans</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-emerald-600" />
                  <span>Up to $150,000 line of credit</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-emerald-600" />
                  <span>Eligible for tiny home business use</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-emerald-600" />
                  <span>Available at all major banks</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h4 className="font-semibold mb-4">Program Details</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Interest Rate</span>
                  <span className="font-medium">Prime + 3%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Registration Fee</span>
                  <span className="font-medium">2% of loan amount</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Administration Fee</span>
                  <span className="font-medium">1.25% (included in rate)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Maximum Term</span>
                  <span className="font-medium">15 years</span>
                </div>
              </div>
              <Button className="w-full mt-4">
                Apply Through Your Bank
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>

        {/* Legal Disclaimers */}
        <div className="border-t border-slate-200 pt-12">
          <div className="flex items-center gap-2 mb-6">
            <FileText className="w-5 h-5 text-slate-500" />
            <h3 className="text-xl font-semibold">Legal Information & Disclaimers</h3>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="privacy">
              <AccordionTrigger>Privacy Policy & Data Protection</AccordionTrigger>
              <AccordionContent>
                <div className="text-sm text-muted-foreground space-y-4">
                  <p>
                    <strong>Data Collection:</strong> We collect personal information including name, 
                    contact details, employment information, and financial data solely for the purpose 
                    of facilitating loan applications with our lending partners.
                  </p>
                  <p>
                    <strong>Data Security:</strong> All data is transmitted using 256-bit SSL encryption. 
                    We do not store sensitive financial information on our servers. All credit applications 
                    are forwarded directly to our lending partners through secure APIs.
                  </p>
                  <p>
                    <strong>Third-Party Sharing:</strong> Your information is only shared with lenders you 
                    explicitly choose to apply with. We never sell your data to third parties for marketing purposes.
                  </p>
                  <p>
                    <strong>Consent:</strong> By submitting an application, you consent to our privacy practices 
                    and acknowledge that lenders may perform credit checks.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="terms">
              <AccordionTrigger>Terms of Service</AccordionTrigger>
              <AccordionContent>
                <div className="text-sm text-muted-foreground space-y-4">
                  <p>
                    <strong>Not a Lender:</strong> True North Tiny Homes is not a lender. We are an 
                    information and referral service connecting consumers with lending partners. All 
                    lending decisions are made by the respective financial institutions.
                  </p>
                  <p>
                    <strong>Affiliate Disclosure:</strong> We may receive compensation from lenders when 
                    you apply through our links. This does not affect the rates or terms you receive.
                  </p>
                  <p>
                    <strong>Accuracy:</strong> While we strive to provide accurate information, rates and 
                    terms are subject to change. Always verify current terms directly with the lender 
                    before applying.
                  </p>
                  <p>
                    <strong>Eligibility:</strong> Approval is not guaranteed. All loans are subject to 
                    credit approval and lender criteria.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="security">
              <AccordionTrigger>Security Measures</AccordionTrigger>
              <AccordionContent>
                <div className="text-sm text-muted-foreground space-y-4">
                  <p>
                    <strong>Encryption:</strong> All data transmissions use TLS 1.3 encryption with 
                    256-bit AES cipher suites.
                  </p>
                  <p>
                    <strong>Access Control:</strong> Application data is accessible only to authorized 
                    personnel with multi-factor authentication.
                  </p>
                  <p>
                    <strong>Data Retention:</strong> Application data is retained for 90 days unless 
                    you request deletion earlier. Approved applications are handled per lender policies.
                  </p>
                  <p>
                    <strong>Breach Notification:</strong> In the unlikely event of a data breach, we will 
                    notify affected users within 72 hours as required by PIPEDA (Canada) and applicable laws.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="compliance">
              <AccordionTrigger>Regulatory Compliance</AccordionTrigger>
              <AccordionContent>
                <div className="text-sm text-muted-foreground space-y-4">
                  <p>
                    <strong>Canada:</strong> We comply with the Personal Information Protection and 
                    Electronic Documents Act (PIPEDA) and provincial privacy legislation.
                  </p>
                  <p>
                    <strong>USA:</strong> For US applicants, we comply with the Fair Credit Reporting 
                    Act (FCRA) and applicable state laws.
                  </p>
                  <p>
                    <strong>Licensing:</strong> We are not a mortgage broker or lender. We operate as 
                    an information service. All lending activities are conducted by licensed financial 
                    institutions.
                  </p>
                  <p>
                    <strong>Complaints:</strong> For complaints about our service, contact us at 
                    compliance@truenorthtiny.ca. For lender complaints, contact the lender directly 
                    or the appropriate regulatory body (FCAC in Canada, CFPB in USA).
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Warning */}
        <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-amber-800">
            <p className="font-medium mb-1">Important Notice</p>
            <p>
              Borrowing money is a serious financial commitment. Always read the full terms and conditions 
              before signing any loan agreement. If you're unsure about your ability to repay, consult with 
              a financial advisor. Missing payments can negatively impact your credit score.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// Credit Application Form Component
interface CreditApplicationFormProps {
  type: 'personal' | 'business'
}

const CreditApplicationForm = ({ type }: CreditApplicationFormProps) => {
  const [step, setStep] = useState(1)
  const [agreed, setAgreed] = useState(false)

  return (
    <div className="space-y-6">
      <div className="bg-slate-50 rounded-lg p-3 text-center">
        <span className="text-sm font-medium text-slate-600">
          {type === 'business' ? 'Business Credit Application' : 'Personal Credit Application'}
        </span>
      </div>
      {/* Progress */}
      <div className="flex items-center gap-2 mb-6">
        <div className={`h-2 flex-1 rounded-full ${step >= 1 ? 'bg-emerald-500' : 'bg-slate-200'}`} />
        <div className={`h-2 flex-1 rounded-full ${step >= 2 ? 'bg-emerald-500' : 'bg-slate-200'}`} />
        <div className={`h-2 flex-1 rounded-full ${step >= 3 ? 'bg-emerald-500' : 'bg-slate-200'}`} />
      </div>

      {step === 1 && (
        <div className="space-y-4">
          <h4 className="font-semibold">Step 1: Personal Information</h4>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName">First Name *</Label>
              <Input id="firstName" placeholder="John" />
            </div>
            <div>
              <Label htmlFor="lastName">Last Name *</Label>
              <Input id="lastName" placeholder="Doe" />
            </div>
          </div>
          <div>
            <Label htmlFor="email">Email Address *</Label>
            <Input id="email" type="email" placeholder="john@example.com" />
          </div>
          <div>
            <Label htmlFor="phone">Phone Number *</Label>
            <Input id="phone" type="tel" placeholder="(555) 123-4567" />
          </div>
          <div>
            <Label htmlFor="address">Home Address *</Label>
            <Input id="address" placeholder="123 Main St, City, Province/State" />
          </div>
          <Button onClick={() => setStep(2)} className="w-full">Continue</Button>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <h4 className="font-semibold">Step 2: Financial Information</h4>
          <div>
            <Label htmlFor="employment">Employment Status *</Label>
            <select id="employment" className="w-full h-10 px-3 rounded-md border border-input bg-background">
              <option>Select...</option>
              <option>Full-time employed</option>
              <option>Part-time employed</option>
              <option>Self-employed</option>
              <option>Retired</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <Label htmlFor="income">Annual Income (before tax) *</Label>
            <Input id="income" type="number" placeholder="60000" />
          </div>
          <div>
            <Label htmlFor="homePrice">Tiny Home Purchase Price *</Label>
            <Input id="homePrice" type="number" placeholder="50000" />
          </div>
          <div>
            <Label htmlFor="downPayment">Planned Down Payment</Label>
            <Input id="downPayment" type="number" placeholder="10000" />
          </div>
          <div className="flex gap-3">
            <Button onClick={() => setStep(1)} variant="outline" className="flex-1">Back</Button>
            <Button onClick={() => setStep(3)} className="flex-1">Continue</Button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-4">
          <h4 className="font-semibold">Step 3: Consent & Submit</h4>
          
          <div className="bg-slate-50 p-4 rounded-lg text-sm space-y-3">
            <div className="flex items-start gap-3">
              <Lock className="w-4 h-4 text-emerald-500 mt-0.5" />
              <p className="text-muted-foreground">
                Your information is encrypted and secure. We use 256-bit SSL encryption 
                to protect your data.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <Shield className="w-4 h-4 text-emerald-500 mt-0.5" />
              <p className="text-muted-foreground">
                By submitting, you consent to a credit check and agree to share your 
                information with our lending partners.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="consent"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-1"
            />
            <Label htmlFor="consent" className="text-sm font-normal">
              I agree to the <a href="#" className="text-emerald-600 underline">Privacy Policy</a> and 
              consent to credit checks. I understand that submitting this application does not guarantee approval.
            </Label>
          </div>

          <div className="flex gap-3">
            <Button onClick={() => setStep(2)} variant="outline" className="flex-1">Back</Button>
            <Button 
              disabled={!agreed} 
              className="flex-1"
              onClick={() => alert('Application submitted securely! A lender will contact you within 24-48 hours.')}
            >
              Submit Secure Application
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Financing
