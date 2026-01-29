export default function Contact() {
  return (
    <section id="contact" className="bg-white py-16 dark:bg-slate-900 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Questions, collabs, or just saying hi? We’d love to hear from you.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            <a
              href="mailto:hello@breezetees.com"
              className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-medium text-slate-700 shadow-sm transition hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
            >
              hello@breezetees.com
            </a>
            <a
              href="#"
              className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-medium text-slate-700 shadow-sm transition hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
