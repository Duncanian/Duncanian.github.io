import { GrLinkedin, GrGithub } from 'react-icons/gr'

function Header() {
  return (
    <header className="flex w-full items-center justify-between border-b border-amber-400 bg-slate-900">
      <div className="p-4 text-2xl">Ian Duncan</div>
      <div className="mr-4 flex items-center justify-around space-x-4">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/ian-duncan-abidha/"
          rel="noreferrer"
        >
          <GrLinkedin className="h-6 w-6" color="white" />
        </a>
        <a
          target="_blank"
          href="https://github.com/Duncanian"
          rel="noreferrer"
        >
          <GrGithub className="h-6 w-6" />
        </a>
      </div>
    </header>
  )
}

export default Header
