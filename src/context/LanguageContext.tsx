'use client'

import { createContext, useState, useEffect, ReactNode } from 'react'

// Define all translations here
export const translations = {
  en: {
    // Navigation
    professionalProfile: "Professional Profile",
    aboutMe: "About Me",
    projects: "Projects",
    contact: "Contact",
    
    // Hero section
    followOnGitHub: "Follow on GitHub",
    contactMe: "Contact Me",
    
    // Professional section
    professionalTitle: "Professional Profile",
    professionalIntro: "Hi, I'm Tom! I'm a 3rd year Epitech student and passionate Full Stack Developer. I've gained professional experience through an internship at RCDevs in Luxembourg, working with PHP Symfony, and volunteering at E-MMA.",
    skills: "Skills",
    experience: "Experience",
    
    // About me section
    aboutMeTitle: "About Me",
    passions: "Interests & Passions",
    aboutMeText: "Beyond my professional endeavors, I'm passionate about technology and its potential to solve real-world problems. I enjoy exploring new frameworks and tools while contributing to open-source projects that align with my values.",
    
    // Projects section
    projectsTitle: "Featured Projects",
    viewOnGithub: "View on GitHub",
    
    // Contact section
    contactTitle: "Contact Me",
    email: "Email",
    connect: "Connect with me",
    
    // Footer
    rightsReserved: "© 2024 Tom Freida. All rights reserved."
  },
  fr: {
    // Navigation
    professionalProfile: "Profil Professionnel",
    aboutMe: "À Propos de Moi",
    projects: "Projets",
    contact: "Contact",
    
    // Hero section
    followOnGitHub: "Suivre sur GitHub",
    contactMe: "Me Contacter",
    
    // Professional section
    professionalTitle: "Profil Professionnel",
    professionalIntro: "Bonjour, je suis Tom ! Je suis étudiant en 3ème année à Epitech et passionné par le développement Full Stack. J'ai acquis de l'expérience professionnelle lors d'un stage chez RCDevs au Luxembourg, où j'ai travaillé avec PHP Symfony, ainsi qu'en tant que bénévole chez E-MMA.",
    skills: "Compétences",
    experience: "Expérience",
    
    // About me section
    aboutMeTitle: "À Propos de Moi",
    passions: "Intérêts & Passions",
    aboutMeText: "Au-delà de mes activités professionnelles, je suis passionné par la technologie et son potentiel pour résoudre des problèmes concrets. J'aime explorer de nouveaux frameworks et outils tout en contribuant à des projets open source qui correspondent à mes valeurs.",
    
    // Projects section
    projectsTitle: "Projets en Vedette",
    viewOnGithub: "Voir sur GitHub",
    
    // Contact section
    contactTitle: "Me Contacter",
    email: "Email",
    connect: "Connectez-vous avec moi",
    
    // Footer
    rightsReserved: "© 2024 Tom Freida. Tous droits réservés."
  }
}

type LanguageContextType = {
  language: string
  setLanguage: (lang: string) => void
  t: Record<string, string>
}

export const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: translations.en
})

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState('en')
  const [t, setT] = useState(translations.en)
  
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'en'
    setLanguage(savedLanguage)
    setT(translations[savedLanguage as 'en' | 'fr'])
  }, [])
  
  const changeLanguage = (lang: string) => {
    setLanguage(lang)
    setT(translations[lang as 'en' | 'fr'])
    localStorage.setItem('language', lang)
  }
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}