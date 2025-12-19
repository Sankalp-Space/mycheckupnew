import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import HomeHero from './components/HomeHero'
import HealthPackages from './components/HealthPackages'
import DiagnosticCategories from './components/DiagnosticCategories'
import WhyMyCheckup from './components/WhyMyCheckup'
import HomeSampleCollection from './components/HomeSampleCollection'
import CustomerReviews from './components/CustomerReviews'
import Footer from './components/Footer'
import DiscountPopup from './components/DiscountPopup'

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPopupOpen(true)
    }, 5000) // 5 seconds

    return () => clearTimeout(timer)
  }, [])

  const handleClosePopup = () => {
    setIsPopupOpen(false)
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HomeHero />
      <HealthPackages />
      <DiagnosticCategories />
      <WhyMyCheckup />
      <HomeSampleCollection />
      <CustomerReviews />
      <Footer/>
      <DiscountPopup open={isPopupOpen} onClose={handleClosePopup} />
      {/* Add more sections here as you provide descriptions */}
    </div>
  )
}

export default App
