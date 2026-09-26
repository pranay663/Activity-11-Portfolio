import { skills } from '../data/skills'

const skillSections = [
  { title: 'Programming Languages', items: skills.programmingLanguages },
  { title: 'Web Technologies', items: skills.webTechnologies },
  { title: 'Database', items: skills.database },
  { title: 'Tools & Development', items: skills.tools },
]

function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-label">Skills</p>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.05em] text-white sm:text-4xl">
              Building a strong technical foundation.
            </h2>
          </div>
        </div>

        <div className="space-y-10">
          {skillSections.map((section) => (
            <div key={section.title}>
              <div className="mb-5 flex items-center justify-between gap-4">
                <h3 className="text-xl font-semibold text-white">{section.title}</h3>
                <span className="h-px flex-1 bg-slate-800" aria-hidden="true" />
              </div>

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {section.items.map((skill) => (
                  <article key={skill.name} className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-slate-900 hover:shadow-[0_20px_50px_rgba(34,211,238,0.08)]" tabIndex={0} aria-label={`${skill.name} skill`}>
                    <div className="mb-4 flex items-center justify-between">
                      <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-400/10 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
                        {skill.name}
                      </span>
                      <span className="text-xl text-slate-500 transition group-hover:text-cyan-300" aria-hidden="true">
                        →
                      </span>
                    </div>
                    <p className="text-sm leading-6 text-slate-400 transition group-hover:text-slate-300">
                      {skill.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
