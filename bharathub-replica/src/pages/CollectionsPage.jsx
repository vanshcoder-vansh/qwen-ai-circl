import { useState } from 'react'
import { motion } from 'framer-motion'
import { Filter, SlidersHorizontal, X } from 'lucide-react'
import ProductCard from '../components/product/ProductCard'
import { products, categories } from '../data/products'
import { useCart } from '../contexts/CartContext'
import { useParams } from 'react-router-dom'

export default function CollectionsPage() {
  const { category: categoryParam } = useParams()
  const { addToCart } = useCart()
  const [showFilters, setShowFilters] = useState(false)
  const [sortBy, setSortBy] = useState('featured')
  const [priceRange, setPriceRange] = useState([0, 10000])

  // Filter products based on category
  let filteredProducts = products
  if (categoryParam && categoryParam !== 'all') {
    if (categoryParam === 'trending') {
      filteredProducts = products.filter(p => p.badge === 'Best Seller' || p.badge === 'Trending')
    } else if (categoryParam === 'deals') {
      filteredProducts = products.filter(p => p.originalPrice > p.price)
    } else if (categoryParam === 'new') {
      filteredProducts = products.filter(p => p.badge === 'New')
    } else if (categoryParam === 'bestsellers') {
      filteredProducts = products.filter(p => p.badge === 'Best Seller')
    } else {
      filteredProducts = products.filter(p => p.category === categoryParam)
    }
  }

  // Sort products
  filteredProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'rating':
        return b.rating - a.rating
      case 'reviews':
        return b.reviews - a.reviews
      default:
        return 0
    }
  })

  const currentCategory = categories.find(c => c.id === categoryParam)

  return (
    <div className="min-h-screen bg-brand-bg">
      {/* Header */}
      <div className={`bg-gradient-to-r ${currentCategory?.color || 'from-brand-primary to-brand-secondary'} text-white py-12`}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              {currentCategory?.icon || '🛍️'} {currentCategory?.name || 'All Products'}
            </h1>
            <p className="text-white/80 text-lg">
              {filteredProducts.length} products found
            </p>
          </motion.div>
        </div>
      </div>

      {/* Toolbar */}
      <div className="sticky top-[140px] lg:top-[80px] z-40 bg-white shadow-soft">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 border rounded-xl hover:bg-gray-50 transition-colors"
            >
              <Filter className="w-5 h-5" />
              <span className="hidden sm:inline">Filters</span>
            </button>

            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600 hidden sm:inline">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="reviews">Most Reviews</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Filters Sidebar */}
          {showFilters && (
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="fixed inset-y-0 left-0 z-50 w-80 bg-white shadow-large p-6 overflow-y-auto lg:static lg:w-64 lg:shadow-none lg:p-0"
            >
              <div className="flex items-center justify-between mb-6 lg:hidden">
                <h2 className="text-xl font-bold">Filters</h2>
                <button onClick={() => setShowFilters(false)}>
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Categories Filter */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Categories</h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <label key={cat.id} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        checked={categoryParam === cat.id}
                        onChange={() => window.location.href = `/collections/${cat.id}`}
                        className="text-brand-primary focus:ring-brand-primary"
                      />
                      <span className="text-sm">{cat.icon} {cat.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Price Range</h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="price" className="text-brand-primary" />
                    <span className="text-sm">Under ₹500</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="price" className="text-brand-primary" />
                    <span className="text-sm">₹500 - ₹1000</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="price" className="text-brand-primary" />
                    <span className="text-sm">₹1000 - ₹2000</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="price" className="text-brand-primary" />
                    <span className="text-sm">Above ₹2000</span>
                  </label>
                </div>
              </div>

              {/* Rating Filter */}
              <div>
                <h3 className="font-semibold mb-3">Rating</h3>
                <div className="space-y-2">
                  {[4, 3, 2, 1].map((rating) => (
                    <label key={rating} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="text-brand-primary rounded" />
                      <span className="text-sm">{rating}+ Stars</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              <button className="mt-6 w-full py-2 border border-brand-primary text-brand-primary rounded-xl hover:bg-brand-primary hover:text-white transition-colors">
                Clear All Filters
              </button>
            </motion.aside>
          )}

          {/* Products Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">😔</div>
                <h2 className="text-2xl font-bold mb-2">No products found</h2>
                <p className="text-gray-600">Try adjusting your filters or search criteria</p>
              </div>
            ) : (
              <div className="product-grid">
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <ProductCard product={product} onAddToCart={addToCart} />
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
