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
    <div className="flex flex-col gap-4 p-4 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-colors">
      <div className="relative aspect-video">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded"
        />
      </div>
      
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
      
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="px-2 py-1 text-sm rounded bg-gray-100 dark:bg-gray-800">
            {tag}
          </span>
        ))}
      </div>
      
      <a href={github} 
         className="flex items-center gap-2 mt-auto text-sm hover:underline hover:underline-offset-4">
        <GitHubIcon size={16} />
        View on GitHub
      </a>
    </div>
  )
}