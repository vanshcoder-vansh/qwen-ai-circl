import { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import CartSidebar from './CartSidebar'

export default function Layout({ children }) {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.classList.add('scroll-smooth')
    
    return () => {
      document.documentElement.classList.remove('scroll-smooth')
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-brand-bg">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <CartSidebar />
    </div>
  )
}
