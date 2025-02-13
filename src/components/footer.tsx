import { GitHubIcon } from './icons'

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Tom Freida. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a 
              href="https://github.com/tomfrda"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon size={20} />
            </a>
            {/* Ajoutez d'autres liens sociaux ici */}
          </div>
        </div>
      </div>
    </footer>
  )
}