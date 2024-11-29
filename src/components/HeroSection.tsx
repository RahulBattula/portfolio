import { motion } from 'framer-motion';
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Youtube,
  MapPin,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="min-h-[calc(100vh-4rem)] pt-16 md:pt-20 flex items-center bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-8"
        >
          <div className="space-y-4">
            <span className="inline-block px-4 py-2 rounded-full bg-indigo-100 text-indigo-800 text-sm font-medium">
              Data Analyst & Engineer
            </span>
            <h1 className="text-4xl md:text-5xl font-bold">
              I'm Rahul, an analyst
              <span className="block text-indigo-600 mt-2">
                and engineer from the future.
              </span>
            </h1>
            <div className="flex items-center justify-center text-gray-600">
              <MapPin className="w-5 h-5 mr-2" />
              <span>India, Andhra Pradesh</span>
            </div>
            <div className="flex justify-center space-x-4">
              <a
                href="https://www.linkedin.com/in/rahul-battula"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-indigo-600 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/RahulBattula"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-indigo-600 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.youtube.com/@CodeClashes"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-indigo-600 transition-colors"
              >
                <Youtube className="w-6 h-6" />
              </a>
            </div>
            <span className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium">
              Available to work
            </span>
          </div>

          <div className="flex justify-center flex-wrap gap-4">
            <Link
              to="/about"
              className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              About Me
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <button className="inline-flex items-center px-6 py-3 border-2 border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors">
              Download CV
              <Download className="ml-2 h-5 w-5" />
            </button>
          </div>

          <div className="flex justify-center items-center space-x-12">
            <div>
              <h4 className="text-2xl md:text-3xl font-bold">3</h4>
              <p className="text-sm md:text-base text-gray-600">
                Months Experience
              </p>
            </div>
            <div>
              <h4 className="text-2xl md:text-3xl font-bold">8+</h4>
              <p className="text-sm md:text-base text-gray-600">
                Projects Completed
              </p>
            </div>
            <div>
              <h4 className="text-2xl md:text-3xl font-bold">15+</h4>
              <p className="text-sm md:text-base text-gray-600">
                Happy Testimonials
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
