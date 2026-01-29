import { useState } from 'react'
import { useCart } from '../context/CartContext'

export default function ProductCard({ product, onClick }) {
  const { addToCart } = useCart()
  const [quickAdded, setQuickAdded] = useState(false)

  const handleQuickAdd = (e) => {
    e.stopPropagation()
    addToCart(product, {
      size: 'M',
      color: product.colors?.[0] ?? 'Default',
      quantity: 1,
    })
    setQuickAdded(true)
    setTimeout(() => setQuickAdded(false), 1500)
  }

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onClick(product)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onClick(product)
        }
      }}
      className="group flex w-full cursor-pointer flex-col rounded-2xl bg-white text-left shadow-sm ring-1 ring-slate-200/80 transition hover:shadow-xl hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:bg-slate-800 dark:ring-slate-700/80 dark:hover:ring-slate-600 dark:focus:ring-slate-500"
    >
      <div className="relative aspect-[3/4] overflow-hidden rounded-t-2xl bg-slate-100 dark:bg-slate-700">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center transition duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-slate-900/0 transition group-hover:bg-slate-900/5" />
        <div className="absolute bottom-2 left-2 right-2 rounded-lg bg-slate-900/70 px-3 py-1.5 text-center text-xs font-medium text-white backdrop-blur-sm opacity-0 transition group-hover:opacity-100 group-focus-within:opacity-100">
          Tap for sizes & details
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="font-semibold text-slate-900 dark:text-slate-100">
          {product.name}
        </h3>
        <p className="line-clamp-2 text-sm text-slate-500 dark:text-slate-400">
          {product.description}
        </p>
        <p className="mt-1 font-medium text-slate-800 dark:text-slate-200">
          ${product.price.toFixed(2)}
        </p>
        <div className="mt-2 flex gap-2">
          <button
            type="button"
            onClick={handleQuickAdd}
            className="flex-1 rounded-xl bg-slate-900 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200"
          >
            {quickAdded ? 'Added!' : 'Add to cart'}
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              onClick(product)
            }}
            className="rounded-xl border border-slate-300 py-2.5 px-3 text-sm font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700"
            aria-label="View details"
          >
            Details
          </button>
        </div>
      </div>
    </div>
  )
}
