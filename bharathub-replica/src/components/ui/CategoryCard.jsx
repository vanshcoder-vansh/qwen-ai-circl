import { Link } from 'react-router-dom'

export default function CategoryCard({ category }) {
  return (
    <Link
      to={`/collections/${category.id}`}
      className={`block p-6 rounded-2xl bg-gradient-to-br ${category.color} text-white text-center hover:shadow-large transition-all duration-300 transform hover:-translate-y-2`}
    >
      <div className="text-4xl mb-3">{category.icon}</div>
      <h3 className="font-semibold text-sm">{category.name}</h3>
    </Link>
  )
}
