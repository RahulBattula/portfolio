import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen pt-20 pb-12 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-600">
            Let's discuss how we can work together
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-indigo-100 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <a
                      href="mailto:contact@example.com"
                      className="text-lg font-medium hover:text-indigo-600"
                    >
                      rahul.battula.analyst@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-indigo-100 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Phone</p>
                    <a
                      href="tel:+1234567890"
                      className="text-lg font-medium hover:text-indigo-600"
                    >
                      +91 9346138678
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-indigo-100 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Location</p>
                    <p className="text-lg font-medium">Andhra Pradesh, India</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-indigo-100 p-3 rounded-lg">
                    <Linkedin className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">LinkedIn</p>
                    <a
                      href="https://www.linkedin.com/in/rahul-battula"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-medium hover:text-indigo-600"
                    >
                      View Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-xl shadow-md p-8"
            >
              <h2 className="text-2xl font-bold mb-6">Send Message</h2>

              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
