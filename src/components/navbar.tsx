'use client'

import { useContext, useState, useEffect } from 'react'
import { LanguageContext } from '@/context/LanguageContext'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { language, setLanguage, t } = useContext(LanguageContext)
  
  // Handle scroll events to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  // Toggle mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  
  // Language switcher
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en')
  }

  return (
    <nav className={`w-full fixed top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-background/80 backdrop-blur-lg shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a 
            href="#" 
            className="text-xl font-bold relative group"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              Tom Freida
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden sm:flex items-center gap-8">
            {[
              { key: 'about', translationKey: 'professionalProfile' },
              { key: 'personal', translationKey: 'aboutMe' },
              { key: 'websites', translationKey: 'websites' },
              { key: 'projects', translationKey: 'projects' },
              { key: 'contact', translationKey: 'contact' }
            ].map((item) => (
              <a 
                key={item.key} 
                href={`#${item.key}`} 
                className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              >
                {t[item.translationKey]}
              </a>
            ))}
            
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
            {[
              { key: 'about', translationKey: 'professionalProfile' },
              { key: 'personal', translationKey: 'aboutMe' },
              { key: 'websites', translationKey: 'websites' },
              { key: 'projects', translationKey: 'projects' },
              { key: 'contact', translationKey: 'contact' }
            ].map((item) => (
              <a 
                key={item.key} 
                href={`#${item.key}`} 
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-500"
                onClick={toggleMenu}
              >
                {t[item.translationKey]}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}