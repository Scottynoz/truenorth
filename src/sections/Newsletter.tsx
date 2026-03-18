import { useState } from 'react'
import { Mail, ArrowRight, Check, Gift, BookOpen, Calculator } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const benefits = [
  {
    icon: BookOpen,
    title: 'Exclusive Buyer\'s Guide',
    description: 'Complete step-by-step guide to buying your first tiny home in Canada.',
  },
  {
    icon: Calculator,
    title: 'Cost Calculator',
    description: 'Interactive tool to estimate your total tiny home investment.',
  },
  {
    icon: Gift,
    title: 'Builder Discounts',
    description: 'Exclusive offers and early access to promotions from partner builders.',
  },
]

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [honeypot, setHoneypot] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const endpoint = import.meta.env.VITE_FORMSPREE_NEWSLETTER_ENDPOINT as string | undefined

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!endpoint) {
      setError('Newsletter form is not configured.')
      return
    }

    if (honeypot) {
      setIsSubmitted(true)
      return
    }

    setIsSubmitting(true)
    setError(null)

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null
        throw new Error(data?.error || 'Failed to subscribe.')
      }

      setIsSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to subscribe.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-20 lg:py-32 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-white/10 rounded-full text-sm font-medium mb-6">
              Join 10,000+ Tiny Home Enthusiasts
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-6">
              Get the Ultimate Tiny Home Buyer's Guide
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
              Subscribe to our newsletter and receive exclusive access to our comprehensive 
              buyer's guide, cost calculator, and special offers from Canada's top tiny home builders.
            </p>

            {/* Benefits */}
            <div className="space-y-4">
              {benefits.map((benefit) => {
                const Icon = benefit.icon
                return (
                  <div key={benefit.title} className="flex items-start gap-4">
                    <div className="p-2 bg-white/10 rounded-lg">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{benefit.title}</h4>
                      <p className="text-sm text-primary-foreground/70">{benefit.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-10">
            {!isSubmitted ? (
              <>
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-serif font-semibold mb-2">
                    Get Instant Access
                  </h3>
                  <p className="text-primary-foreground/70">
                    Enter your email to receive your free guide
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                      tabIndex={-1}
                      autoComplete="off"
                      className="hidden"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-14"
                      required
                    />
                  </div>
                  {error && (
                    <p className="text-sm text-red-200 text-center">{error}</p>
                  )}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-white text-primary hover:bg-white/90 h-14 text-lg font-semibold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Me The Guide'}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </form>

                <p className="text-xs text-center text-primary-foreground/60 mt-4">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-10 h-10 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-serif font-semibold mb-3">
                  You're All Set!
                </h3>
                <p className="text-primary-foreground/70 mb-6">
                  Check your inbox for your Ultimate Tiny Home Buyer's Guide. 
                  Welcome to the True North Tiny community!
                </p>
                <div className="flex items-center justify-center gap-2 text-sm text-primary-foreground/60">
                  <Mail className="w-4 h-4" />
                  <span>Sent to {email}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
