import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white m-5 rounded-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
            <div className="space-y-2">
              <a
                href="mailto:contact@example.com"
                className="flex items-center space-x-2 hover:text-indigo-400 transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>rahul.battula.analyst@gmail.comm</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/projects"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/internships"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Internships
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-indigo-400 transition-colors"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Follow Me</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400 transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400 transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>
            &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
