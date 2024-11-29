import { Code2, ExternalLink, Github, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  id: string;
  image: string;
  title: string;
  description: string;
  technologies: string[];
  duration: string;
  demoLink: string;
  githubLink: string;
  onClick: () => void;
}

export default function ProjectCard({
  id,
  image,
  title,
  description,
  technologies,
  duration,
  demoLink,
  githubLink,
  onClick,
}: ProjectCardProps) {
  return (
    <div
      className="bg-white rounded-xl shadow-md overflow-hidden group hover:bg-black transition-all duration-300"
      onClick={onClick}
    >
      <div className="relative h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-80"
        />
        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-600 group-hover:bg-black group-hover:text-white transition-colors duration-300">
          {duration}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors duration-300">{title}</h3>
        <p className="text-gray-600 mb-4 group-hover:text-gray-300 transition-colors duration-300">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 group-hover:bg-indigo-800 group-hover:text-white transition-colors duration-300"
            >
              <Code2 className="w-4 h-4 mr-1" />
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-4">
          <Link
            to={`/projects/${id}`}
            className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 group-hover:bg-indigo-500 transition-colors duration-300"
          >
            <Eye className="w-4 h-4 mr-1" />
            View Details
          </Link>
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-indigo-600 hover:text-indigo-400 group-hover:text-indigo-400 transition-colors duration-300"
          >
            <ExternalLink className="w-4 h-4 mr-1" />
            Demo
          </a>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-600 hover:text-gray-300 group-hover:text-gray-300 transition-colors duration-300"
          >
            <Github className="w-4 h-4 mr-1" />
            Code
          </a>
        </div>
      </div>
    </div>
  );
}