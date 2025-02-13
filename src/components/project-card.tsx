import Image from 'next/image'
import { GitHubIcon } from '@/components/icons'

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  github: string
  image: string
}

export default function ProjectCard({ title, description, tags, github, image }: ProjectCardProps) {
  return (
    <div className="glass-card hover-lift flex flex-col gap-4 p-4 rounded-lg transition-all duration-300">
      <div className="relative aspect-video overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
      
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span 
            key={tag} 
            className="px-2 py-1 text-sm rounded-full bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-sm"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <a 
        href={github} 
        className="flex items-center gap-2 mt-auto text-sm hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
      >
        <GitHubIcon size={16} />
        View on GitHub
      </a>
    </div>
  )
}