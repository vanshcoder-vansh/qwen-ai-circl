import { useState } from 'react'
import { Search, Filter } from 'lucide-react'
import { useSearchParams, Link } from 'react-router-dom'
import ProductCard from '../components/product/ProductCard'
import { products } from '../data/products'
import { useCart } from '../contexts/CartContext'

export default function SearchPage() {
  const [searchParams] = useSearchParams()
  const { addToCart } = useCart()
  const query = searchParams.get('q') || ''
  
  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase()) ||
    p.description.toLowerCase().includes(query.toLowerCase()) ||
    p.category.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-brand-bg py-8">
      <div className="container mx-auto px-4">
        {/* Search Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            {query ? `Search Results for "${query}"` : 'Search Products'}
          </h1>
          <p className="text-gray-600">
            {filteredProducts.length} products found
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mb-8">
          <form className="relative">
            <input
              type="text"
              defaultValue={query}
              name="q"
              placeholder="Search for products..."
              className="w-full px-6 py-4 pl-14 rounded-2xl border-2 border-gray-200 focus:border-brand-primary focus:outline-none text-lg"
            />
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 btn-primary py-2 px-6"
            >
              Search
            </button>
          </form>
        </div>

        {/* Results */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h2 className="text-2xl font-bold mb-2">No products found</h2>
            <p className="text-gray-600 mb-6">
              Try searching with different keywords or browse our collections
            </p>
            <Link to="/collections" className="btn-primary inline-block">
              Browse All Products
            </Link>
          </div>
        ) : (
          <div className="product-grid">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <ProductCard product={product} onAddToCart={addToCart} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
