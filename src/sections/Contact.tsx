import { useState } from 'react'
import { Mail, Send, Check, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [honeypot, setHoneypot] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const endpoint = import.meta.env.VITE_FORMSPREE_CONTACT_ENDPOINT as string | undefined

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!endpoint) {
      setError('Contact form is not configured.')
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
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      })

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null
        throw new Error(data?.error || 'Failed to send message.')
      }

      setIsSubmitted(true)
      setName('')
      setEmail('')
      setMessage('')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send message.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-6">
              Contact
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 mb-6">
              Get in touch
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8 max-w-xl">
              Have a question about tiny homes, off-grid systems, or partnerships? Send a message and we’ll get back to you.
            </p>

            <div className="flex items-center gap-3 text-slate-700">
              <div className="p-2 bg-white rounded-lg border border-slate-200">
                <Mail className="w-5 h-5" />
              </div>
              <a href="mailto:hello@truenorthtiny.ca" className="font-medium hover:underline">
                hello@truenorthtiny.ca
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 lg:p-10">
            {!isSubmitted ? (
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

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email address"
                      required
                      className="h-12"
                    />
                  </div>
                </div>

                <div>
                  <Textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="How can we help?"
                    required
                    className="min-h-36"
                  />
                </div>

                {error && (
                  <div className="flex items-start gap-2 text-sm text-red-600">
                    <AlertCircle className="w-4 h-4 mt-0.5" />
                    <span>{error}</span>
                  </div>
                )}

                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-12"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send message'}
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-10 h-10 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-serif font-semibold mb-3 text-slate-900">
                  Message sent
                </h3>
                <p className="text-slate-600 mb-6">
                  Thanks for reaching out. We’ll reply as soon as we can.
                </p>
                <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                  Send another
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
