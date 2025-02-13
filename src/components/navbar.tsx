export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 bg-background/60 backdrop-blur-md border-b border-gray-200/20 dark:border-gray-800/20 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-xl font-bold hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
            Tom Freida
          </a>
          <div className="hidden sm:flex items-center gap-8">
            {["About Me", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}