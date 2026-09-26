import { projects } from '../data/projects'

function Projects() {
  const hasProjects = projects.length > 0

  return (
    <section id="projects" className="py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="section-label">Projects</p>
          <h2 className="mt-4 text-3xl font-bold tracking-[-0.05em] text-white sm:text-4xl">
            Practical ideas and growing technical exploration.
          </h2>
        </div>

        {hasProjects ? (
          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <article key={project.name} className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_30px_80px_rgba(34,211,238,0.08)]">
                <div className="h-48 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 p-6">
                  <div className="flex h-full items-end justify-between">
                    <span className="rounded-full border border-slate-700 bg-slate-950/70 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-slate-300">
                      {project.category || 'Project'}
                    </span>
                    <span className="text-xs uppercase tracking-[0.2em] text-cyan-300">Preview</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-semibold text-white">{project.name}</h3>
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" className="rounded-full border border-slate-700 px-2.5 py-1.5 text-xs uppercase tracking-[0.18em] text-slate-300 transition hover:border-cyan-400 hover:text-cyan-200">
                        GitHub
                      </a>
                    )}
                  </div>

                  <p className="mt-4 text-base leading-7 text-slate-300">{project.description}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span key={tech} className="rounded-full border border-slate-700 bg-slate-950 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-slate-300">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15">
                        Repository
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-slate-500 hover:bg-slate-800">
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-slate-700 bg-slate-900/50 p-10 text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Project placeholder</p>
            <h3 className="mt-4 text-2xl font-semibold text-white">Project showcase is ready for future work.</h3>
            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-400">
              Add project data to the array in the project data module to populate this section with your work, links, and tech stack.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects
