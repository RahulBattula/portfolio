import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Code2, ExternalLink, Github, Quote } from 'lucide-react';
import { projects } from '../data/projects';

export default function ProjectView() {
  const { id } = useParams();
  const project = projects[id as string];

  useEffect(() => {
    if (project) {
      document.title = `${project.title} - Project Details`;
    }
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project not found</h2>
          <Link
            to="/projects"
            className="inline-flex items-center text-indigo-600 hover:text-indigo-800"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/projects"
            className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="h-[400px] w-full">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-8">
              <div className="mb-6">
                <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
                <p className="text-gray-600">{project.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h2 className="text-xl font-bold mb-4">Project Details</h2>
                  <div className="space-y-2">
                    <p><strong>Domain:</strong> {project.domain}</p>
                    <p><strong>Duration:</strong> {project.duration}</p>
                    <p><strong>Type:</strong> {project.guided ? 'Guided' : 'Unguided'}</p>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-4">Tech Stack</h2>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
                      >
                        <Code2 className="w-4 h-4 mr-1" />
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <section>
                  <h2 className="text-xl font-bold mb-4">Problem Statement</h2>
                  <p className="text-gray-600">{project.problemStatement}</p>
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4">My Approach</h2>
                  <p className="text-gray-600">{project.approach}</p>
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4">Solution</h2>
                  <p className="text-gray-600">{project.solution}</p>
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4">Resources Used</h2>
                  <ul className="list-disc list-inside text-gray-600">
                    {project.resources.map((resource, index) => (
                      <li key={index}>{resource}</li>
                    ))}
                  </ul>
                </section>

                {project.testimonials && project.testimonials.length > 0 && (
                  <section>
                    <h2 className="text-xl font-bold mb-4">Client Testimonials</h2>
                    <div className="grid grid-cols-1 gap-6">
                      {project.testimonials.map((testimonial, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="bg-gray-50 rounded-xl p-6 shadow-lg"
                        >
                          <Quote className="h-8 w-8 text-indigo-600 mb-4" />
                          <p className="text-gray-600 mb-6">{testimonial.content}</p>
                          <div className="flex items-center">
                            <div>
                              <h4 className="font-bold">{testimonial.author}</h4>
                              <p className="text-sm text-gray-600">{testimonial.position}</p>
                              <p className="text-sm text-indigo-600">{testimonial.company}</p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </section>
                )}

                <div className="flex space-x-4 pt-4">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 border-2 border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}