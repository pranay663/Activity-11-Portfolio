function About() {
  return (
    <section id="about" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="section-label">About Me</p>
          <h2 className="mt-4 text-3xl font-bold tracking-[-0.05em] text-white sm:text-4xl">
            Building a foundation in software development and a mindset for continuous learning.
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/65 p-7 shadow-[0_24px_80px_rgba(15,23,42,0.25)] sm:p-8">
            <p className="text-lg leading-8 text-slate-300">
              I am <span className="font-semibold text-white">R Jaya Pranay Raju</span>, a Computer Science Engineering student at <span className="font-semibold text-cyan-300">REVA University, Bengaluru</span>. My interest lies in programming, software development, and understanding how technology can solve practical problems.
            </p>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              I enjoy learning through hands-on experimentation, exploring modern development tools, and building projects that strengthen both technical skill and product thinking. I am motivated by the process of turning ideas into working digital experiences.
            </p>
          </div>

          <div className="grid gap-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Focus</p>
              <p className="mt-3 text-base font-medium text-slate-100">Programming and software development</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Interest</p>
              <p className="mt-3 text-base font-medium text-slate-100">Technology, problem solving, and practical projects</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Mindset</p>
              <p className="mt-3 text-base font-medium text-slate-100">Continuous learning and thoughtful experimentation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
