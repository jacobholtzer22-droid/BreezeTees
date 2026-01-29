import { ThemeProvider } from './context/ThemeContext'
import { CartProvider } from './context/CartContext'
import Header from './components/Header'
import Hero from './components/Hero'
import ProductGrid from './components/ProductGrid'
import About from './components/About'
import Contact from './components/Contact'

export default function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100">
          <Header />
          <main>
            <Hero />
            <ProductGrid />
            <About />
            <Contact />
          </main>
          <footer className="border-t border-slate-200 bg-slate-50 py-8 dark:border-slate-700 dark:bg-slate-800/50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <p className="text-center text-sm text-slate-500 dark:text-slate-400">
                © {new Date().getFullYear()} Breeze Tees. Wear Your Vibe.
              </p>
            </div>
          </footer>
        </div>
      </CartProvider>
    </ThemeProvider>
  )
}
