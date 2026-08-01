import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ShoppingBag, Search, User, Menu, ChevronDown } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../../contexts/CartContext'
import { useAuth } from '../../contexts/AuthContext'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const { cartCount, setIsCartOpen } = useCart()
  const { isAuthenticated, user, logout } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`)
      setSearchQuery('')
      setIsMobileMenuOpen(false)
    }
  }

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Collections', path: '/collections' },
    { name: 'Trending', path: '/collections/trending' },
    { name: 'Deals', path: '/collections/deals' },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-medium'
            : 'bg-transparent'
        }`}
      >
        {/* Top Announcement Bar */}
        <div className="bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent text-white text-sm py-2 px-4 text-center overflow-hidden">
          <motion.div
            animate={{ x: [0, -100] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="whitespace-nowrap inline-block"
          >
            🎉 Free Shipping on Orders Above ₹499 | 🔥 Flat 20% Off on First Order | ⚡ Express Delivery Available
          </motion.div>
        </div>

        {/* Main Header */}
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-2xl font-bold gradient-text"
              >
                🛒 BHARAT HUB
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-brand-text hover:text-brand-primary font-medium transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-primary to-brand-secondary group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </nav>

            {/* Search Bar - Desktop */}
            <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-md mx-4">
              <div className="relative w-full">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="w-full px-4 py-2.5 pl-10 rounded-xl border border-gray-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>
            </form>

            {/* Actions */}
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Mobile Search */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Search className="w-5 h-5 text-brand-text" />
              </button>

              {/* User */}
              <div className="relative group">
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors flex items-center gap-2">
                  <User className="w-5 h-5 text-brand-text" />
                  {isAuthenticated && (
                    <span className="hidden sm:inline text-sm font-medium">
                      {user?.name?.split(' ')[0]}
                    </span>
                  )}
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </button>
                
                {/* Dropdown */}
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-large opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2">
                  {isAuthenticated ? (
                    <>
                      <Link
                        to="/account"
                        className="block px-4 py-2 hover:bg-gray-50 rounded-t-xl text-sm"
                      >
                        My Account
                      </Link>
                      <Link
                        to="/orders"
                        className="block px-4 py-2 hover:bg-gray-50 text-sm"
                      >
                        Orders
                      </Link>
                      <button
                        onClick={logout}
                        className="w-full text-left px-4 py-2 hover:bg-gray-50 rounded-b-xl text-sm text-brand-danger"
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <Link
                        to="/login"
                        className="block px-4 py-2 hover:bg-gray-50 rounded-t-xl text-sm"
                      >
                        Login
                      </Link>
                      <Link
                        to="/register"
                        className="block px-4 py-2 hover:bg-gray-50 rounded-b-xl text-sm"
                      >
                        Register
                      </Link>
                    </>
                  )}
                </div>
              </div>

              {/* Cart */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ShoppingBag className="w-5 h-5 text-brand-text" />
                {cartCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-brand-primary to-brand-secondary text-white text-xs font-bold rounded-full flex items-center justify-center"
                  >
                    {cartCount > 99 ? '99+' : cartCount}
                  </motion.span>
                )}
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Menu className="w-5 h-5 text-brand-text" />
              </button>
            </div>
          </div>

          {/* Mobile Search & Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="lg:hidden mt-4 pb-4 space-y-4 overflow-hidden"
              >
                <form onSubmit={handleSearch} className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search products..."
                    className="w-full px-4 py-2.5 pl-10 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
                  />
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                </form>

                <nav className="flex flex-col space-y-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="px-4 py-2 hover:bg-gray-50 rounded-lg font-medium transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-[140px] lg:h-[80px]" />
    </>
  )
}
