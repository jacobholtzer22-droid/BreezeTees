import { useCart } from '../context/CartContext'

export default function CartDrawer({ open, onClose }) {
  const { items, cartCount, cartTotal, removeFromCart, updateQuantity } = useCart()

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label="Cart">
      <div className="absolute inset-0 bg-slate-900/50" onClick={onClose} aria-hidden="true" />
      <div className="absolute right-0 top-0 h-full w-full max-w-md overflow-y-auto bg-white shadow-2xl dark:bg-slate-800">
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4 dark:border-slate-700">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Cart ({cartCount})
            </h2>
            <button
              type="button"
              onClick={onClose}
              className="rounded-full p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700"
              aria-label="Close cart"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <p className="text-center text-slate-500 dark:text-slate-400">
                Your cart is empty.
              </p>
            ) : (
              <ul className="space-y-4">
                {items.map((item, index) => (
                  <li
                    key={`${item.id}-${item.size}-${item.color}-${index}`}
                    className="flex gap-4 rounded-xl border border-slate-200 p-3 dark:border-slate-700"
                  >
                    <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-700">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-medium text-slate-900 dark:text-slate-100">
                        {item.name}
                      </h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        {item.size} · {item.color}
                      </p>
                      <div className="mt-1 flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => updateQuantity(index, item.quantity - 1)}
                          className="rounded border border-slate-300 px-2 py-0.5 text-sm dark:border-slate-600"
                        >
                          −
                        </button>
                        <span className="text-sm font-medium">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(index, item.quantity + 1)}
                          className="rounded border border-slate-300 px-2 py-0.5 text-sm dark:border-slate-600"
                        >
                          +
                        </button>
                        <button
                          type="button"
                          onClick={() => removeFromCart(index)}
                          className="ml-2 text-sm text-red-600 hover:underline dark:text-red-400"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                    <div className="text-right font-medium text-slate-900 dark:text-slate-100">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {items.length > 0 && (
            <div className="border-t border-slate-200 px-6 py-4 dark:border-slate-700">
              <div className="flex justify-between text-lg font-semibold text-slate-900 dark:text-slate-100">
                <span>Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Shipping calculated at checkout (demo — no backend).
              </p>
              <button
                type="button"
                className="mt-4 w-full rounded-xl bg-slate-900 py-3 font-medium text-white dark:bg-slate-100 dark:text-slate-900"
              >
                Checkout (Demo)
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
