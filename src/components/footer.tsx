import { GitHubIcon } from './icons/github-icon'
import { LinkedInIcon } from './icons/linkedin-icon'

export default function Footer() {
  return (
    <footer className="w-full py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © 2024 Tom Freida. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/tomfrda"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
            >
              <GitHubIcon size={20} />
            </a>
            <a
              href="https://linkedin.com/in/tom-freida"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
            >
              <LinkedInIcon size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}