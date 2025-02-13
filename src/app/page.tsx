import Image from 'next/image'
import { GitHubIcon, LinkedInIcon, EmailIcon } from '@/components/icons'
import ProjectCard from '@/components/project-card'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import FadeIn from '@/components/fade-in'

const projects = [
  {
    title: "Maya",
    description: "A full-stack application with web and mobile interfaces featuring a JavaScript backend",
    tags: ["React", "TypeScript", "Tailwind CSS", "Flutter", "Node.js"],
    github: "https://github.com/TomFrda/MAYA/",
    image: "/myportfolio/projects/maya.png"
  },
  {
    title: "AI Soirée",
    description: "A surreal party simulator using GPT-4 and local AI to recreate absurd 3 AM student conversations",
    tags: ["Python", "OpenAI API", "GPT-4", "CLI"],
    github: "https://github.com/TomFrda/IASoiree/",
    image: "/myportfolio/projects/aisoiree.png"
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center p-6 sm:p-8 lg:p-20 mt-16">
        <div className="flex flex-col items-center text-center space-y-8 max-w-3xl">
          <div className="relative h-28 w-28 sm:h-32 sm:w-32 group">
            <Image
              src="/myportfolio/profile.jpg"
              alt="Profile"
              fill
              className="rounded-full object-cover transition-transform duration-300 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold gradient-text">Tom Freida</h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
            Full Stack Developer | Python | C/C++ | Web Development
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a 
              href="https://github.com/tomfrda" 
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-foreground text-background hover:scale-105 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
              <span>Follow on GitHub</span>
            </a>
            <a 
              href="#contact" 
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-foreground hover:bg-foreground hover:text-background transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>

        <FadeIn className="w-full max-w-4xl">
          <section id="about" className="mt-24 sm:mt-32">
            <h2 className="text-3xl font-bold mb-12 text-center gradient-text">About Me</h2>
            <div className="prose dark:prose-invert mx-auto">
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed text-center mb-12">
                Hi, I&apos;m Tom! I&apos;m a passionate Full Stack Developer with expertise in web development, 
                system programming, and software architecture.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <div className="glass-card p-6 rounded-xl card-hover h-full">
                  <h3 className="text-xl font-semibold mb-4 gradient-text">Skills</h3>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                    <li>Web Development (Next.js, React)</li>
                    <li>Python Development</li>
                    <li>C/C++ Programming</li>
                    <li>System Architecture</li>
                    <li>Database Design</li>
                  </ul>
                </div>
                
                <div className="glass-card p-6 rounded-xl card-hover h-full">
                  <h3 className="text-xl font-semibold mb-4 gradient-text">Experience</h3>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                    <li>Full Stack Development</li>
                    <li>Backend Architecture</li>
                    <li>API Development</li>
                    <li>Performance Optimization</li>
                    <li>System Integration</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn className="w-full">
          <section id="projects" className="mt-24 sm:mt-32">
            <h2 className="text-3xl font-bold mb-12 text-center gradient-text">Featured Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {projects.map((project, i) => (
                <ProjectCard key={i} {...project} />
              ))}
            </div>
          </section>
        </FadeIn>

        <FadeIn className="w-full max-w-2xl">
          <section id="contact" className="mt-24 sm:mt-32 mb-16">
            <h2 className="text-3xl font-bold mb-12 text-center gradient-text">Contact Me</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <a
                href="mailto:tom.freida@epitech.eu"
                className="glass-card flex items-center gap-4 p-6 rounded-xl card-hover group"
              >
                <div className="p-3 rounded-full bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                  <EmailIcon size={24} className="text-blue-500" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">tom.freida@epitech.eu</p>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/tom-freida"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card flex items-center gap-4 p-6 rounded-xl card-hover group"
              >
                <div className="p-3 rounded-full bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                  <LinkedInIcon size={24} className="text-blue-500" />
                </div>
                <div>
                  <h3 className="font-semibold">LinkedIn</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Connect with me</p>
                </div>
              </a>

              <a
                href="https://github.com/tomfrda"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card flex items-center gap-4 p-6 rounded-xl card-hover group"
              >
                <div className="p-3 rounded-full bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                  <GitHubIcon size={24} className="text-blue-500" />
                </div>
                <div>
                  <h3 className="font-semibold">GitHub</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Check my repositories</p>
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
