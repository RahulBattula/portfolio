export interface Project {
  id: string;
  title: string;
  domain: string;
  image: string;
  description: string;
  technologies: string[];
  duration: string;
  demoLink: string;
  githubLink: string;
  problemStatement: string;
  approach: string;
  solution: string;
  resources: string[];
  guided: boolean;
  testimonials: Testimonial[];
}

export interface Testimonial {
  content: string;
  author: string;
  position: string;
  company: string;
}

export interface Internship {
  id: string;
  company: string;
  logo: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
}