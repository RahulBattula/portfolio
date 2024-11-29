import React from 'react';
import { 
  Database, 
  LineChart, 
  GitBranch, 
  Table, 
  BarChart, 
  Terminal,
  Brain,
  FileSpreadsheet
} from 'lucide-react';

const Skills = () => {
  const skills = [
    { name: 'Python', icon: <Terminal className="w-8 h-8" /> },
    { name: 'Data Analysis', icon: <LineChart className="w-8 h-8" /> },
    { name: 'Machine Learning', icon: <Brain className="w-8 h-8" /> },
    { name: 'MySQL', icon: <Database className="w-8 h-8" /> },
    { name: 'PowerBI', icon: <BarChart className="w-8 h-8" /> },
    { name: 'Excel', icon: <FileSpreadsheet className="w-8 h-8" /> },
    { name: 'Pandas', icon: <Table className="w-8 h-8" /> },
    { name: 'Git', icon: <GitBranch className="w-8 h-8" /> },
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
        <div className="flex overflow-x-auto pb-4 gap-6 scrollbar-hide">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex-none w-32 bg-white rounded-xl shadow-md p-4 transform hover:scale-105 transition-all"
            >
              <div className="flex flex-col items-center space-y-2">
                <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600">
                  {skill.icon}
                </div>
                <span className="text-sm font-medium">{skill.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;