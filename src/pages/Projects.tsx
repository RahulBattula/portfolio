import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Code2, Database, BarChart3, FileSpreadsheet, Server } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const projectTypes = [
  { label: 'All', icon: Filter },
  { label: 'Data Analysis', icon: BarChart3 },
  { label: 'Machine Learning', icon: Code2 },
  { label: 'Data Engineering', icon: Server },
  { label: 'PowerBI', icon: BarChart3 },
  { label: 'Python', icon: Code2 },
  { label: 'MySQL', icon: Database },
  { label: 'Excel', icon: FileSpreadsheet },
];

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [showGuided, setShowGuided] = useState(true);
  const [showUnguided, setShowUnguided] = useState(true);

  const filteredProjects = Object.values(projects).filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesType = selectedType === 'All' || project.domain === selectedType ||
                       project.technologies.includes(selectedType);
    const matchesGuidance = (showGuided && project.guided) || (showUnguided && !project.guided);
    
    return matchesSearch && matchesType && matchesGuidance;
  });

  return (
    <div className="min-h-screen pt-20 pb-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">My Projects</h1>
          <p className="text-xl text-gray-600">Explore my portfolio of data projects</p>
        </motion.div>

        {/* Filters Section */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>

            {/* Project Type Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent appearance-none"
              >
                {projectTypes.map(type => (
                  <option key={type.label} value={type.label}>{type.label}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Guided/Unguided Toggle */}
          <div className="flex space-x-4">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={showGuided}
                onChange={(e) => setShowGuided(e.target.checked)}
                className="form-checkbox h-5 w-5 text-indigo-600 rounded focus:ring-indigo-500"
              />
              <span>Guided Projects</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={showUnguided}
                onChange={(e) => setShowUnguided(e.target.checked)}
                className="form-checkbox h-5 w-5 text-indigo-600 rounded focus:ring-indigo-500"
              />
              <span>Unguided Projects</span>
            </label>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard {...project} onClick={() => {}} />
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No projects match your filters. Try adjusting your search criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}