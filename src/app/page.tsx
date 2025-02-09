import Image from 'next/image'
import { GitHubIcon, LinkedInIcon, EmailIcon } from '@/components/icons'
import ProjectCard from '@/components/project-card'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

const projects = [
  {
    title: "Maya",
    description: "A full-stack application with web and mobile interfaces featuring a JavaScript backend",
    tags: ["React", "TypeScript", "Tailwind CSS", "Flutter", "Node.js"],
    github: "https://github.com/TomFrda/MAYA/",
    image: "/projects/maya.png"
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center p-8 sm:p-20 mt-16">
        <div className="flex flex-col items-center text-center gap-8">
          <div className="relative h-32 w-32">
            <Image
              src="/profile.jpg"
              alt="Profile"
              fill
              className="rounded-full object-cover"
            />
          </div>
          <h1 className="text-4xl font-bold">Tom Freida</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Full Stack Developer | Python | C/C++ | Web Development
          </p>
          
          <a 
            href="https://github.com/tomfrda" 
            className="flex items-center gap-2 px-4 py-2 rounded bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#f2f2f2] transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
            Follow on GitHub
          </a>
        </div>

        <section id="about" className="mt-24 w-full max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8">About Me</h2>
          <div className="prose dark:prose-invert mx-auto">
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Hi, I'm Tom! I'm a passionate Full Stack Developer with expertise in web development, 
              system programming, and software architecture. With a strong foundation in Python 
              and C/C++, I enjoy building robust applications that solve real-world problems.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 text-left">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Skills</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                  <li>Web Development (Next.js, React)</li>
                  <li>Python Development</li>
                  <li>C/C++ Programming</li>
                  <li>System Architecture</li>
                  <li>Database Design</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Experience</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
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

        <section id="projects" className="mt-16 w-full">
          <h2 className="text-2xl font-bold mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <ProjectCard key={i} {...project} />
            ))}
          </div>
        </section>

        <section id="contact" className="mt-24 w-full max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-2xl font-bold mb-8">Contact Me</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Email */}
            <a
              href="mailto:your.email@example.com"
              className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-colors"
            >
              <EmailIcon size={24} />
              <div className="text-left">
                <h3 className="font-semibold">Email</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">tom.freida@epitech.eu</p>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/tom-freida"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-colors"
            >
              <LinkedInIcon size={24} />
              <div className="text-left">
                <h3 className="font-semibold">LinkedIn</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Connect with me</p>
              </div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/tomfrda"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-colors"
            >
              <GitHubIcon size={24} />
              <div className="text-left">
                <h3 className="font-semibold">GitHub</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Check my repositories</p>
              </div>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
