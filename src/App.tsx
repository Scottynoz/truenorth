import { useEffect, useState } from 'react'
import './App.css'
import Navigation from './sections/Navigation'
import Hero from './sections/Hero'
import FeaturedHomes from './sections/FeaturedHomes'
import DesignCategories from './sections/DesignCategories'
import PricingGuide from './sections/PricingGuide'
import OffGridPower from './sections/OffGridPower'
import WaterSystems from './sections/WaterSystems'
import WasteManagement from './sections/WasteManagement'
import Financing from './sections/Financing'
import BuildersDirectory from './sections/BuildersDirectory'
import Newsletter from './sections/Newsletter'
import Footer from './sections/Footer'
import AdminDashboard from './sections/AdminDashboard'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Check if we're on the admin page
  const isAdminPage = window.location.hash === '#admin'

  if (isAdminPage) {
    return <AdminDashboard />
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation isScrolled={isScrolled} />
      <main>
        <Hero />
        <FeaturedHomes />
        <DesignCategories />
        <PricingGuide />
        <OffGridPower />
        <WaterSystems />
        <WasteManagement />
        <Financing />
        <BuildersDirectory />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

export default App
