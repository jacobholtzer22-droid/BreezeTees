import { useState, useMemo } from 'react'
import { products } from '../data/products'
import FilterBar from './FilterBar'
import ProductCard from './ProductCard'
import ProductModal from './ProductModal'

export default function ProductGrid() {
  const [filters, setFilters] = useState({ collection: '', sort: 'default' })
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)

  const filteredAndSortedProducts = useMemo(() => {
    let list = [...products]
    if (filters.collection) {
      list = list.filter((p) => p.collection === filters.collection)
    }
    if (filters.sort === 'price-asc') list.sort((a, b) => a.price - b.price)
    if (filters.sort === 'price-desc') list.sort((a, b) => b.price - a.price)
    if (filters.sort === 'name') list.sort((a, b) => a.name.localeCompare(b.name))
    return list
  }, [filters])

  const handleProductClick = (product) => {
    setSelectedProduct(product)
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
    setSelectedProduct(null)
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h2 className="mb-6 text-2xl font-semibold text-slate-900 dark:text-slate-100">
        Shop Tees
      </h2>
      <FilterBar filters={filters} onFilterChange={setFilters} />
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredAndSortedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={handleProductClick}
          />
        ))}
      </div>
      <ProductModal
        product={selectedProduct}
        open={modalOpen}
        onClose={handleCloseModal}
      />
    </section>
  )
}
