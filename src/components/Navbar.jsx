const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Education', id: 'education' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
]

function Navbar({ activeSection, onNavigate }) {
  const handleNavigate = (event, id) => {
    event.preventDefault()
    onNavigate(id)
    event.currentTarget.closest('details')?.removeAttribute('open')
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/75 backdrop-blur-xl">
      <nav aria-label="Main navigation" className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <button type="button" onClick={(event) => handleNavigate(event, 'home')} className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-100 transition hover:text-cyan-300">
          RJR
        </button>

        <div className="hidden items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 p-1 md:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.id
            return (
              <button
                key={item.label}
                type="button"
                onClick={(event) => handleNavigate(event, item.id)}
                className={`rounded-full px-3 py-2 text-sm font-medium transition ${
                  isActive
                    ? 'bg-cyan-400/15 text-cyan-300 ring-1 ring-cyan-400/40'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            )
          })}
        </div>

        <button type="button" onClick={(event) => handleNavigate(event, 'contact')} className="hidden rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:-translate-y-0.5 hover:border-cyan-300 hover:bg-cyan-400/15 hover:text-white md:inline-flex">
          Contact
        </button>

        <div className="md:hidden">
          <details className="group relative">
            <summary className="flex cursor-pointer list-none items-center justify-center rounded-full border border-slate-700 bg-slate-900 p-2 text-slate-100 transition hover:border-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400">
              <span className="sr-only">Toggle navigation menu</span>
              <span className="flex w-5 flex-col gap-1.5">
                <span className="h-0.5 rounded-full bg-current" />
                <span className="h-0.5 rounded-full bg-current" />
                <span className="h-0.5 rounded-full bg-current" />
              </span>
            </summary>

            <div className="absolute right-0 top-[calc(100%+0.75rem)] w-56 rounded-2xl border border-slate-800 bg-slate-950/95 p-2 shadow-2xl shadow-slate-950/50">
              {navItems.map((item) => {
                const isActive = activeSection === item.id
                return (
                  <button
                    key={item.label}
                    type="button"
                    onClick={(event) => handleNavigate(event, item.id)}
                    className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm font-medium ${
                      isActive ? 'bg-cyan-400/10 text-cyan-200' : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                )
              })}
            </div>
          </details>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
