import { ArrowRight, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/hero-tiny-home.jpg"
          alt="Beautiful tiny home in Canadian forest"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <p className="text-white/70 text-sm font-medium uppercase tracking-widest mb-6">
            Canada's Tiny Home Resource
          </p>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-[1.1] mb-6">
            Tiny homes from{' '}
            <span className="text-emerald-300">$2,995</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-white/80 mb-10 leading-relaxed max-w-xl">
            Discover affordable tiny homes, off-grid power systems, and sustainable 
            living solutions — all shipped across Canada.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-white text-slate-900 hover:bg-white/90 font-medium px-6"
            >
              Browse Homes
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 px-6"
            >
              <Play className="w-4 h-4 mr-2" />
              Watch Tour
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-16 pt-8 border-t border-white/20">
            <div>
              <p className="text-3xl font-semibold text-white">50+</p>
              <p className="text-sm text-white/60">Home Designs</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-white">$2,995</p>
              <p className="text-sm text-white/60">Starting Price</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-white">Canada</p>
              <p className="text-sm text-white/60">Nationwide Shipping</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-white/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}

export default Hero
