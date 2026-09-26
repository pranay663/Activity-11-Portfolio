function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-8 shadow-[0_30px_90px_rgba(12,18,28,0.7)] sm:p-10 lg:p-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="section-label">Contact</p>
              <h2 className="mt-4 text-3xl font-bold tracking-[-0.05em] text-white sm:text-4xl">
                Let's Connect
              </h2>
            </div>
            <a href="mailto:jayapranayraju@gmail.com" className="inline-flex items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-400/10 px-5 py-3 text-sm font-semibold text-cyan-200 transition hover:-translate-y-0.5 hover:border-cyan-300 hover:bg-cyan-400/15">
              Start a conversation
            </a>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <a href="tel:8317390449" className="group rounded-2xl border border-slate-800 bg-slate-950/60 p-5 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-slate-900">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Phone</p>
              <p className="mt-3 text-lg font-medium text-slate-100 group-hover:text-cyan-300">8317390449</p>
            </a>

            <a href="mailto:jayapranayraju@gmail.com" className="group rounded-2xl border border-slate-800 bg-slate-950/60 p-5 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-slate-900">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Email</p>
              <p className="mt-3 text-lg font-medium text-slate-100 group-hover:text-cyan-300">jayapranayraju@gmail.com</p>
            </a>

            <a href="https://github.com/pranay663" target="_blank" rel="noreferrer" className="group rounded-2xl border border-slate-800 bg-slate-950/60 p-5 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-slate-900">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">GitHub</p>
              <p className="mt-3 text-lg font-medium text-slate-100 group-hover:text-cyan-300">github.com/pranay663</p>
            </a>

            <div className="group rounded-2xl border border-slate-800 bg-slate-950/60 p-5 opacity-90 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-slate-900">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">LinkedIn</p>
              <p className="mt-3 text-lg font-medium text-slate-100">Placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
