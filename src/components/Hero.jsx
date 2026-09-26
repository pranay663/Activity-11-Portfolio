function Hero({ onNavigate }) {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.14),transparent_34%)]" aria-hidden="true" />

      <div className="mx-auto grid max-w-6xl gap-12 px-4 pb-20 pt-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:pb-28 lg:pt-20">
        <div className="relative z-10 flex flex-col justify-center">
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.22em] text-cyan-200">
            <span className="inline-block h-2 w-2 rounded-full bg-cyan-300" aria-hidden="true" />
            Computer Science Engineer
          </div>

          <h1 className="max-w-xl text-4xl font-black tracking-[-0.08em] text-white sm:text-5xl lg:text-7xl">
            R Jaya Pranay Raju
          </h1>

          <p className="mt-4 max-w-xl text-lg font-medium text-slate-300 sm:text-xl">
            Computer Science Engineering Student
          </p>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
            I am a curious developer focused on computer science, programming, and building practical technology solutions through learning, experimentation, and thoughtful engineering.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button type="button" onClick={() => onNavigate('projects')} className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition duration-200 hover:-translate-y-0.5 hover:bg-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">
              View Projects
            </button>
            <button type="button" onClick={() => onNavigate('contact')} className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/70 px-6 py-3 text-sm font-semibold text-slate-100 transition duration-200 hover:-translate-y-0.5 hover:border-slate-500 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400">
              Contact Me
            </button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 text-xs uppercase tracking-[0.2em] text-slate-500">
            <span>Programming</span>
            <span className="hidden h-1 w-1 rounded-full bg-slate-600 sm:inline-block" aria-hidden="true" />
            <span>Development</span>
            <span className="hidden h-1 w-1 rounded-full bg-slate-600 sm:inline-block" aria-hidden="true" />
            <span>Learning</span>
          </div>
        </div>

        <div className="relative z-10 flex items-center justify-center">
          <div className="relative w-full max-w-lg">
            <div className="absolute inset-0 rounded-[2rem] bg-cyan-500/10 blur-3xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-700 bg-slate-900/75 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.7)]">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" aria-hidden="true" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" aria-hidden="true" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" aria-hidden="true" />
                </div>
                <span className="text-[10px] uppercase tracking-[0.22em] text-slate-400">portfolio</span>
              </div>

              <div className="mt-6 space-y-4 font-mono text-sm text-slate-200">
                <div className="flex items-center gap-3 text-cyan-300">
                  <span className="text-slate-500">$</span>
                  <span>developer --init</span>
                </div>
                <div className="ml-5 space-y-2 text-slate-400">
                  <p>const focus = ["CS", "Problem Solving", "Build"]</p>
                  <p>const mindset = "continuous learning"</p>
                  <p>const goal = "practical technology solutions"</p>
                </div>
                <div className="mt-8 grid grid-cols-3 gap-3">
                  {['HTML', 'CSS', 'React'].map((item) => (
                    <div key={item} className="rounded-xl border border-slate-700 bg-slate-800/80 px-3 py-3 text-center text-xs uppercase tracking-[0.16em] text-slate-300">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
