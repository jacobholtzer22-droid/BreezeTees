import { useState } from 'react'
import { useCart } from '../context/CartContext'

const SIZES = ['XS', 'S', 'M', 'L', 'XL']

export default function ProductModal({ product, open, onClose }) {
  const [size, setSize] = useState('M')
  const [color, setColor] = useState(product?.colors?.[0] ?? 'Default')
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()

  if (!product || !open) return null

  const handleAddToCart = () => {
    addToCart(product, { size, color, quantity })
    onClose()
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl dark:bg-slate-800">
        <div className="grid gap-6 p-6 sm:grid-cols-2">
          <div className="aspect-[3/4] overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-700">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="flex flex-col">
            <h2 id="modal-title" className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
              {product.name}
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-400">
              {product.description}
            </p>
            <p className="mt-4 text-xl font-semibold text-slate-900 dark:text-slate-100">
              ${product.price.toFixed(2)}
            </p>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Choose size, color & quantity below
            </p>

            {product.colors?.length > 0 && (
              <div className="mt-4">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Color
                </label>
                <div className="mt-2 flex flex-wrap gap-2">
                  {product.colors.map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setColor(c)}
                      className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                        color === c
                          ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600'
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-4">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Size
              </label>
              <div className="mt-2 flex flex-wrap gap-2">
                {SIZES.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSize(s)}
                    className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                      size === s
                        ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Quantity
              </label>
              <div className="mt-2 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="rounded-lg border border-slate-300 px-3 py-1.5 text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700"
                >
                  −
                </button>
                <span className="w-8 text-center font-medium">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="rounded-lg border border-slate-300 px-3 py-1.5 text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700"
                >
                  +
                </button>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-2">
              <button
                type="button"
                onClick={handleAddToCart}
                className="w-full rounded-xl bg-slate-900 py-3 font-medium text-white shadow-lg transition hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200"
              >
                Add to Cart — ${(product.price * quantity).toFixed(2)}
              </button>
              <button
                type="button"
                onClick={onClose}
                className="w-full rounded-xl border border-slate-300 py-3 font-medium text-slate-700 dark:border-slate-600 dark:text-slate-300"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700"
          aria-label="Close"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  )
}
