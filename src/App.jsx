import { useState, useEffect, lazy, Suspense } from 'react'

const Navbar = lazy(() => import('./components/Navbar'))
const HomeHero = lazy(() => import('./components/HomeHero'))
const HealthPackages = lazy(() => import('./components/HealthPackages'))
const DiagnosticCategories = lazy(() => import('./components/DiagnosticCategories'))
const WhyMyCheckup = lazy(() => import('./components/WhyMyCheckup'))
const HomeSampleCollection = lazy(() => import('./components/HomeSampleCollection'))
const CustomerReviews = lazy(() => import('./components/CustomerReviews'))
const Footer = lazy(() => import('./components/Footer'))
const DiscountPopup = lazy(() => import('./components/DiscountPopup'))

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
      <Suspense fallback={<div className="flex justify-center items-center h-screen"><div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div></div>}>
        <Navbar />
        <HomeHero />
        <HealthPackages />
        <DiagnosticCategories />
        <WhyMyCheckup />
        <HomeSampleCollection />
        <CustomerReviews />
        <Footer/>
        <DiscountPopup open={isPopupOpen} onClose={handleClosePopup} />
      </Suspense>
      {/* Add more sections here as you provide descriptions */}
    </div>
  )
}

export default App
