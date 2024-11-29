import { motion } from 'framer-motion';
import InternshipCard from '../components/InternshipCard';
import { internships } from '../data/internships';

export default function Internships() {
  return (
    <div className="min-h-screen pt-20 pb-12 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Professional Experience</h1>
          <p className="text-xl text-gray-600">My journey through various internships and roles</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {internships.map((internship, index) => (
            <motion.div
              key={internship.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <InternshipCard {...internship} onClick={() => {}} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}