import { collections } from '../data/products'

export default function FilterBar({ filters, onFilterChange }) {
  const { collection, sort } = filters

  return (
    <div className="flex flex-wrap items-center gap-4 border-b border-slate-200 pb-4 dark:border-slate-700">
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
          Collection
        </span>
        <select
          value={collection}
          onChange={(e) => onFilterChange({ ...filters, collection: e.target.value })}
          className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300"
        >
          <option value="">All</option>
          {collections.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
          Sort
        </span>
        <select
          value={sort}
          onChange={(e) => onFilterChange({ ...filters, sort: e.target.value })}
          className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300"
        >
          <option value="default">Default</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="name">Name A–Z</option>
        </select>
      </div>
    </div>
  )
}
