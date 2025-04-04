'use client'

import { EmailIcon } from '../components/icons/email-icon'
import { LinkedInIcon } from '../components/icons/linkedin-icon'
import { GitHubIcon } from '../components/icons/github-icon'
import FadeIn from '@/components/fade-in'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Stars from '@/components/stars'
import Image from 'next/image'
import { useContext } from 'react'
import { LanguageContext } from '@/context/LanguageContext'

const projects = [
  {
    title: "Maya",
    description_en: "A full-stack application with web and mobile interfaces featuring a JavaScript backend",
    description_fr: "Une application full-stack avec interfaces web et mobile utilisant un backend JavaScript",
    tags: ["React", "TypeScript", "Tailwind CSS", "Flutter", "Node.js"],
    github: "https://github.com/TomFrda/MAYA/",
    image: "/myportfolio/projects/maya.png"
  },
  {
    title: "AI Soirée",
    description_en: "A surreal party simulator using GPT-4 and local AI to recreate absurd 3 AM student conversations",
    description_fr: "Un simulateur de soirée surréaliste utilisant GPT-4 et l'IA locale pour recréer des conversations absurdes d'étudiants à 3h du matin",
    tags: ["Python", "OpenAI API", "GPT-4", "CLI"],
    github: "https://github.com/TomFrda/IASoiree/",
    image: "/myportfolio/projects/aisoiree.png"
  },
];

const websites = [
  {
    title: "Restaurant Website",
    description_en: "A responsive restaurant website with a modern design and smooth animations",
    description_fr: "Un site web de restaurant responsive avec un design moderne et des animations fluides",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    link: "https://tomfrda.github.io/restaurant/",
    image: "/myportfolio/projects/restaurant.png"
  },
];

export default function Home() {
  const { language, t } = useContext(LanguageContext)
  
  return (
    <>
      <Stars />
      <Navbar />
      <main className="flex min-h-screen flex-col items-center p-6 sm:p-8 lg:p-20 mt-16">
        {/* Hero Section */}
        <FadeIn>
          <div className="flex flex-col items-center text-center gap-6 w-full max-w-3xl mx-auto">
            <div className="relative h-28 w-28 sm:h-32 sm:w-32 group">
              <Image
                src="/myportfolio/profile.jpg"
                alt="Profile"
                fill
                className="rounded-full object-cover transition-transform duration-300 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-all duration-300" />
            </div>
            <h1 className="title-gradient">Tom Freida</h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
              Full Stack Developer | React & Next.js | PHP & Symfony | Python | C/C++ | JavaScript
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a 
                href="https://github.com/tomfrda" 
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-foreground text-background hover:scale-105 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon size={20} />
                <span>{t.followOnGitHub}</span>
              </a>
              <a 
                href="#contact" 
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-foreground hover:bg-foreground hover:text-background transition-all duration-300"
              >
                {t.contactMe}
              </a>
            </div>
          </div>
        </FadeIn>

        {/* About Section - Professional */}
        <FadeIn>
          <section id="about" className="mt-20 sm:mt-32 w-full max-w-4xl">
            <h2 className="title-gradient mb-12 text-center">{t.professionalTitle}</h2>
            <div className="prose dark:prose-invert mx-auto">
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed text-center mb-12">
                {t.professionalIntro}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <div className="glass-card p-6 rounded-xl card-hover h-full">
                  <h3 className="text-xl font-semibold mb-4 gradient-text">{t.skills}</h3>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                    <li>• C/C++ Development</li>
                    <li>• Python Development</li>
                    <li>• React & React Native</li>
                    <li>• Next.js</li>
                    <li>• PHP & Symfony</li>
                    <li>• Node.js</li>
                    <li>• AI Development</li>
                    <li>• Git & GitHub</li>
                  </ul>
                </div>
                
                <div className="glass-card p-6 rounded-xl card-hover h-full">
                  <h3 className="text-xl font-semibold mb-4 gradient-text">{t.experience}</h3>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                    <li>• {language === 'fr' ? '3ème Année Epitech' : '3rd Year Epitech Student'}</li>
                    <li>• {language === 'fr' ? 'Stage chez RCDevs (Luxembourg)' : 'Internship at RCDevs (Luxembourg)'}
                      <ul className="ml-6 mt-2 space-y-2">
                        <li>- PHP Symfony Development</li>
                        <li>- {language === 'fr' ? 'Système de Gestion de Comptes' : 'Account Management System'}</li>
                        <li>- {language === 'fr' ? 'Authentification & Autorisation' : 'Authentication & Authorization'}</li>
                      </ul>
                    </li>
                    <li>• {language === 'fr' ? 'Bénévole chez E-MMA' : 'Volunteer at E-MMA'}</li>
                    <li>• {language === 'fr' ? 'Projets Personnels' : 'Personal Projects'}</li>
                    <li>• {language === 'fr' ? 'Collaboration en Équipe' : 'Team Collaboration'}</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Personal Section */}
        <FadeIn>
          <section id="personal" className="mt-20 sm:mt-32 w-full max-w-4xl">
            <h2 className="title-gradient mb-12 text-center">{t.aboutMeTitle}</h2>
            <div className="prose dark:prose-invert mx-auto">
              <div className="glass-card p-6 rounded-xl card-hover">
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {t.aboutMeText}
                </p>
                
                <h3 className="text-xl font-semibold mb-4 gradient-text">{t.passions}</h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                  <li>• {language === 'fr' ? 'Intelligence Artificielle & Machine Learning' : 'Artificial Intelligence & Machine Learning'}</li>
                  <li>• {language === 'fr' ? 'Développement Open Source' : 'Open Source Development'}</li>
                  <li>• {language === 'fr' ? 'Technologies Web & Mobile' : 'Web & Mobile Technologies'}</li>
                  <li>• {language === 'fr' ? 'Résolution de Problèmes & Conception d\'Algorithmes' : 'Problem Solving & Algorithm Design'}</li>
                  <li>• {language === 'fr' ? 'Apprentissage Continu & Innovation Technologique' : 'Continuous Learning & Tech Innovation'}</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Websites Section */}
        <FadeIn>
          <section id="websites" className="mt-20 sm:mt-32 w-full">
            <h2 className="title-gradient mb-12 text-center">{t.websites}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {websites.map((website, i) => (
                <div key={i} className="glass-card p-6 rounded-xl hover-glow">
                  <h3 className="text-xl font-semibold mb-4">{website.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {language === 'fr' ? website.description_fr : website.description_en}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {website.tags.map((tag, j) => (
                      <span key={j} className="px-2 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-800">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={website.link}
                    className="flex items-center gap-2 text-sm hover:text-blue-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Visit Website
                  </a>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* Projects Section */}
        <FadeIn>
          <section id="projects" className="mt-20 sm:mt-32 w-full">
            <h2 className="title-gradient mb-12 text-center">{t.projectsTitle}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {projects.map((project, i) => (
                <div key={i} className="glass-card p-6 rounded-xl hover-glow">
                  <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {language === 'fr' ? project.description_fr : project.description_en}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, j) => (
                      <span key={j} className="px-2 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-800">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.github}
                    className="flex items-center gap-2 text-sm hover:text-blue-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHubIcon size={16} />
                    {t.viewOnGithub}
                  </a>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* Contact Section */}
        <FadeIn>
          <section id="contact" className="mt-20 sm:mt-32 w-full max-w-2xl mx-auto mb-16">
            <h2 className="title-gradient mb-12 text-center">{t.contactTitle}</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <a
                href="mailto:tom.freida@epitech.eu"
                className="glass-card flex items-center gap-4 p-6 rounded-xl card-hover group"
              >
                <div className="p-3 rounded-full bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                  <EmailIcon size={24} className="text-blue-500" />
                </div>
                <div>
                  <h3 className="font-semibold">{t.email}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">tom.freida@epitech.eu</p>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/tom-freida"
                className="glass-card flex items-center gap-4 p-6 rounded-xl card-hover group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="p-3 rounded-full bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                  <LinkedInIcon size={24} className="text-blue-500" />
                </div>
                <div>
                  <h3 className="font-semibold">LinkedIn</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{t.connect}</p>
                </div>
              </a>
            </div>
          </section>
        </FadeIn>
      </main>
      <Footer />
    </>
  )
}
