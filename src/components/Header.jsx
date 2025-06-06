export function Header({ setActiveSection, activeSection }) {
  return (
    <header className="fixed top-4 left-10 w-full">
      <nav>
        <ul className="flex space-x-4">
          <li>
            <button
              className={activeSection === 'about' ? 'text-blue-500 font-bold' : 'text-gray-700'}
              onClick={() => setActiveSection('about')}
            >
              About Me
            </button>
          </li>
          <li>
            <button
              className={activeSection === 'projects' ? 'text-blue-500 font-bold' : 'text-gray-700'}
              onClick={() => setActiveSection('projects')}
            >
              Projects
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
