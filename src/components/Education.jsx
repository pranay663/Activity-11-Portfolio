function Education() {
  return (
    <section id="education" className="py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="section-label">Education</p>
          <h2 className="mt-4 text-3xl font-bold tracking-[-0.05em] text-white sm:text-4xl">
            Academic foundation in computer science.
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-5 top-0 h-full w-px bg-slate-800 sm:left-10" aria-hidden="true" />

          <div className="space-y-8">
            <div className="relative pl-14 sm:pl-20">
              <div className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/50 bg-slate-900 text-cyan-300 sm:h-12 sm:w-12">
                <span className="text-xs font-bold">01</span>
              </div>
              <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8">
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Bachelor's Degree</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">
                  Computer Science & Engineering
                </h3>
                <p className="mt-3 text-lg text-slate-300">REVA University, Bengaluru</p>
                <p className="mt-4 text-sm uppercase tracking-[0.2em] text-slate-500">Status: Current Student</p>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Start year</p>
                    <p className="mt-2 text-base text-slate-200">Editable placeholder</p>
                  </div>
                  <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Expected graduation</p>
                    <p className="mt-2 text-base text-slate-200">Editable placeholder</p>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Relevant coursework</p>
                  <p className="mt-2 text-base text-slate-200">Add relevant coursework here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
