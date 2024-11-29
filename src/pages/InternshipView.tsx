import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, MapPin, Briefcase, CheckCircle2, Code2 } from 'lucide-react';
import { internships } from '../data/internships';

export default function InternshipView() {
  const { id } = useParams();
  const internship = internships.find(intern => intern.id === id);

  useEffect(() => {
    if (internship) {
      document.title = `${internship.role} at ${internship.company}`;
    }
  }, [internship]);

  if (!internship) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Internship not found</h2>
          <Link
            to="/internships"
            className="inline-flex items-center text-indigo-600 hover:text-indigo-800"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Internships
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
            to="/internships"
            className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Internships
          </Link>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8">
              <div className="flex items-center space-x-6 mb-8">
                <img
                  src={internship.logo}
                  alt={internship.company}
                  className="w-24 h-24 rounded-xl object-cover"
                />
                <div>
                  <h1 className="text-3xl font-bold mb-2">{internship.role}</h1>
                  <p className="text-xl text-indigo-600">{internship.company}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center space-x-3 text-gray-600">
                  <Calendar className="w-5 h-5" />
                  <span>{internship.duration}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <MapPin className="w-5 h-5" />
                  <span>{internship.location}</span>
                </div>
              </div>

              <div className="space-y-8">
                <section>
                  <h2 className="text-xl font-bold mb-4 flex items-center">
                    <Briefcase className="w-5 h-5 mr-2" />
                    Description
                  </h2>
                  <p className="text-gray-600">{internship.description}</p>
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4 flex items-center">
                    <CheckCircle2 className="w-5 h-5 mr-2" />
                    Key Responsibilities
                  </h2>
                  <ul className="space-y-3">
                    {internship.responsibilities.map((responsibility, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 mr-3 text-indigo-600 flex-shrink-0 mt-1" />
                        <span className="text-gray-600">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4 flex items-center">
                    <Code2 className="w-5 h-5 mr-2" />
                    Technologies Used
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {internship.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4 flex items-center">
                    <CheckCircle2 className="w-5 h-5 mr-2" />
                    Key Achievements
                  </h2>
                  <ul className="space-y-3">
                    {internship.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 mr-3 text-indigo-600 flex-shrink-0 mt-1" />
                        <span className="text-gray-600">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}