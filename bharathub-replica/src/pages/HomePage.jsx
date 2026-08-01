import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Star, ChevronRight, Truck, Shield, Headphones, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/product/ProductCard'
import CategoryCard from '../components/ui/CategoryCard'
import { products, categories, testimonials } from '../data/products'
import { useCart } from '../contexts/CartContext'

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const { addToCart } = useCart()

  const heroSlides = [
    {
      title: '🔥 Mega Sale Live!',
      subtitle: 'Up to 70% Off on Electronics',
      cta: 'Shop Now',
      gradient: 'from-brand-primary via-brand-secondary to-brand-accent',
      image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&h=600&fit=crop',
    },
    {
      title: '⚡ Express Delivery',
      subtitle: 'Get it delivered in 24 hours',
      cta: 'Explore Products',
      gradient: 'from-blue-600 via-purple-600 to-pink-600',
      image: 'https://images.unsplash.com/photo-1586864387967-d02ef55c9a69?w=800&h=600&fit=crop',
    },
    {
      title: '🎉 New Arrivals',
      subtitle: 'Check out the latest trending products',
      cta: 'View All',
      gradient: 'from-green-600 via-teal-600 to-cyan-600',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=600&fit=crop',
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const features = [
    { icon: Truck, title: 'Free Shipping', desc: 'On orders above ₹499' },
    { icon: Shield, title: 'Secure Payment', desc: '100% secure transactions' },
    { icon: Headphones, title: '24/7 Support', desc: 'Dedicated customer support' },
    { icon: Zap, title: 'Express Delivery', desc: 'Fast delivery across India' },
  ]

  const featuredProducts = products.slice(0, 8)
  const trendingProducts = products.filter(p => p.badge === 'Best Seller' || p.badge === 'Trending')

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentSlide ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className={`absolute inset-0 bg-gradient-to-r ${slide.gradient}`}
          >
            <div className="container mx-auto px-4 h-full flex items-center">
              <div className="grid md:grid-cols-2 gap-8 items-center w-full">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: index === currentSlide ? 1 : 0, x: index === currentSlide ? 0 : -50 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-white space-y-6"
                >
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl opacity-90">{slide.subtitle}</p>
                  <button className="btn-primary text-lg px-8 py-4">
                    {slide.cta}
                    <ChevronRight className="inline-block ml-2 w-5 h-5" />
                  </button>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: index === currentSlide ? 1 : 0, scale: index === currentSlide ? 1 : 0.8 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="hidden md:block"
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="rounded-2xl shadow-large w-full h-[400px] object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl hover:bg-gray-50 transition-colors"
              >
                <feature.icon className="w-12 h-12 mx-auto mb-4 text-brand-primary" />
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-brand-bg">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Shop by Category</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our wide range of categories and find exactly what you're looking for
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <CategoryCard category={category} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Featured Products</h2>
              <p className="text-gray-600">Handpicked products just for you</p>
            </motion.div>
            <Link
              to="/collections"
              className="hidden md:flex items-center text-brand-primary font-semibold hover:underline"
            >
              View All <ChevronRight className="w-5 h-5 ml-1" />
            </Link>
          </div>

          <div className="product-grid">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <ProductCard product={product} onAddToCart={addToCart} />
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link to="/collections" className="btn-primary inline-block">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="py-16 bg-brand-bg">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2">🔥 Trending Now</h2>
            <p className="text-gray-600">Our most popular products this week</p>
          </motion.div>

          <div className="product-grid">
            {trendingProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <ProductCard product={product} onAddToCart={addToCart} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-br from-brand-primary/10 via-brand-secondary/10 to-brand-accent/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2">What Our Customers Say</h2>
            <p className="text-gray-600">Real reviews from verified buyers</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-soft"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.comment}"</p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Join 50,000+ Happy Customers
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Subscribe to get special offers, free giveaways, and exclusive deals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="bg-white text-brand-primary font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
