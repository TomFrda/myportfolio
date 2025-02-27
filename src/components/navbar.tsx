'use client'

import { useContext } from 'react'
import { LanguageContext } from '@/context/LanguageContext'
import { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, setLanguage, t } = useContext(LanguageContext)
  
  // Toggle mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  
  // Language switcher
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en')
  }

  return (
    <nav className="w-full fixed top-0 bg-background/60 backdrop-blur-md border-b border-gray-200/20 dark:border-gray-800/20 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-xl font-bold hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
            Tom Freida
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden sm:flex items-center gap-8">
            <a href="#about" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
              {t.professionalProfile}
            </a>
            <a href="#personal" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
              {t.aboutMe}
            </a>
            <a href="#projects" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
              {t.projects}
            </a>
            <a href="#contact" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
              {t.contact}
            </a>
            
            {/* Language Switcher */}
            <button 
              onClick={toggleLanguage}
              className="px-3 py-1 border border-gray-300 dark:border-gray-700 rounded-md hover:bg-foreground hover:text-background transition-colors"
            >
              {language === 'en' ? 'FR' : 'EN'}
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="sm:hidden flex items-center gap-2">
            <button 
              onClick={toggleLanguage}
              className="px-2 py-1 border border-gray-300 dark:border-gray-700 rounded-md text-sm hover:bg-foreground hover:text-background transition-colors mr-2"
            >
              {language === 'en' ? 'FR' : 'EN'}
            </button>
            
            <button 
              onClick={toggleMenu}
              className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                {!isMenuOpen ? (
                  <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                ) : (
                  <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="sm:hidden py-4 space-y-4 bg-background/95 backdrop-blur-md">
            <a 
              href="#about" 
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-500"
              onClick={toggleMenu}
            >
              {t.professionalProfile}
            </a>
            <a 
              href="#personal" 
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-500"
              onClick={toggleMenu}
            >
              {t.aboutMe}
            </a>
            <a 
              href="#projects" 
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-500"
              onClick={toggleMenu}
            >
              {t.projects}
            </a>
            <a 
              href="#contact" 
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-500"
              onClick={toggleMenu}
            >
              {t.contact}
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}