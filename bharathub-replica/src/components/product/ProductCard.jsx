import { motion } from 'framer-motion'
import { ShoppingCart, Star } from 'lucide-react'

export default function ProductCard({ product, onAddToCart }) {
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="card-hover overflow-hidden group"
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Badge */}
        {product.badge && (
          <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold text-white ${
            product.badge === 'Best Seller' ? 'bg-gradient-to-r from-orange-500 to-red-500' :
            product.badge === 'New' ? 'bg-gradient-to-r from-green-500 to-emerald-500' :
            product.badge === 'Hot Deal' ? 'bg-gradient-to-r from-brand-primary to-brand-secondary' :
            'bg-gradient-to-r from-blue-500 to-purple-500'
          }`}>
            {product.badge}
          </span>
        )}

        {/* Discount Badge */}
        {discount > 0 && (
          <span className="absolute top-3 right-3 px-2 py-1 bg-red-500 text-white text-xs font-bold rounded-lg">
            -{discount}%
          </span>
        )}

        {/* Quick Add to Cart */}
        <button
          onClick={() => onAddToCart(product)}
          className="absolute bottom-4 right-4 p-3 bg-white rounded-full shadow-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-brand-primary hover:text-white"
        >
          <ShoppingCart className="w-5 h-5" />
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-sm mb-2 line-clamp-2 min-h-[2.5rem]">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{product.rating}</span>
          </div>
          <span className="text-xs text-gray-400">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-brand-primary">
            ₹{product.price.toLocaleString('en-IN')}
          </span>
          {discount > 0 && (
            <span className="text-sm text-gray-400 line-through">
              ₹{product.originalPrice.toLocaleString('en-IN')}
            </span>
          )}
        </div>

        {/* Stock Status */}
        {product.inStock ? (
          <p className="text-xs text-green-600 mt-2 font-medium">✓ In Stock</p>
        ) : (
          <p className="text-xs text-red-600 mt-2 font-medium">✗ Out of Stock</p>
        )}
      </div>
    </motion.div>
  )
}
