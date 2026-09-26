function Footer({ onNavigate }) {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 text-sm text-slate-400 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="text-base font-semibold text-white">R Jaya Pranay Raju</p>
          <p className="mt-1">Computer Science Engineering Student</p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <a href="https://github.com/pranay663" target="_blank" rel="noreferrer" className="transition hover:text-cyan-300">
            GitHub
          </a>
          <span aria-hidden="true">•</span>
          <button type="button" onClick={() => onNavigate('contact')} className="transition hover:text-cyan-300">
            LinkedIn
          </button>
          <span aria-hidden="true">•</span>
          <a href="mailto:jayapranayraju@gmail.com" className="transition hover:text-cyan-300">
            Email
          </a>
        </div>

        <p>© 2026 R Jaya Pranay Raju</p>
      </div>
    </footer>
  )
}

export default Footer
