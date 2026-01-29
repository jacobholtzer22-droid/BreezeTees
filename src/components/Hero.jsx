import { featuredProduct } from '../data/products'

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Breeze Tees
          </h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 sm:text-xl md:text-2xl">
            Wear Your Vibe
          </p>
          <p className="mx-auto mt-2 max-w-xl text-sm text-slate-500 dark:text-slate-400">
            Premium tees, minimal design. Made for everyday comfort.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#shop"
              className="inline-flex items-center rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-slate-900/25 transition hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:shadow-slate-100/25 dark:hover:bg-slate-200"
            >
              Shop Now
            </a>
            <a
              href="#about"
              className="inline-flex items-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
            >
              Our Story
            </a>
          </div>
          <p className="mt-10 text-xl font-semibold text-slate-700 dark:text-slate-300 sm:mt-12">
            Our top seller
          </p>
        </div>

        <div className="mt-8 sm:mt-10 lg:mt-12">
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl bg-slate-100 shadow-2xl shadow-slate-200/50 dark:bg-slate-800 dark:shadow-slate-900/50">
            <img
              src={featuredProduct.image}
              alt={featuredProduct.name}
              className="aspect-[4/5] w-full object-cover object-center transition duration-500 hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
