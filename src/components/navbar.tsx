export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 bg-background/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-xl font-bold">
            Tom Freida
          </a>
          <div className="hidden sm:flex items-center gap-8">
            <a href="#about" className="hover:text-gray-600 dark:hover:text-gray-300">
              About Me
            </a>
            <a href="#projects" className="hover:text-gray-600 dark:hover:text-gray-300">
              Projects
            </a>
            <a href="#contact" className="hover:text-gray-600 dark:hover:text-gray-300">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}