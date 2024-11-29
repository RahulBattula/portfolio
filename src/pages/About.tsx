import { motion } from 'framer-motion';
import {
  Book,
  Code,
  Gamepad,
  Camera,
  Video,
  GlobeLock,
  Podcast,
  PlaySquare,
} from 'lucide-react';

export default function About() {
  const education = [
    {
      degree: 'Bachelor of Engineering in Information Technology',
      school: 'Lakireddy Balireddy College of Engineering',
      year: '2021-2024',
      description: 'Focus on Computer Science Fundamentals',
    },
    {
      degree: 'Industrial Training of Institute in Electrician',
      school: 'Venkatanarayana Memorial Industrial Training Centre Chebrolu',
      year: '2019-2021',
      description: 'Focus on Electrical Circuits, electronics etc',
    },
    {
      degree: 'Diploma in Electrical & Electronics Engineering',
      school: 'Government Polytechnic Gannavaram',
      year: '2016-2019',
      description: 'Focus on Electrical Circuits, electronics etc',
    },
  ];

  const interests = [
    { icon: Code, name: 'Programming' },
    { icon: Book, name: 'Reading' },
    { icon: Podcast, name: 'Listening to Podcasts' },
    { icon: PlaySquare, name: 'Digital Content' },
  ];

  const hobbies = [
    { icon: Video, name: 'Video Editing' },
    { icon: Camera, name: 'Photo Editing' },
    { icon: Gamepad, name: 'Gaming' },
    { icon: GlobeLock, name: 'Exploring new Tech' },
  ];

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="relative w-48 h-48 mx-auto mb-8">
            <img
              src="https://media.licdn.com/dms/image/v2/D5603AQEjU6T6lF7Adg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1698577803120?e=1738195200&v=beta&t=nNKHY3A7PMj0a4KvKsReL5LO0MBI6Oo5qJ9D72CeLyQ"
              alt="Profile"
              className="rounded-full w-full h-full object-cover shadow-xl"
            />
          </div>
          <h1 className="text-4xl font-bold mb-4">Rahul Battula</h1>
          <p className="text-xl text-gray-600 mb-8">
            Passionate data analyst with a love for transforming complex data
            into actionable insights
          </p>
        </motion.div>

        {/* Education Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-6">Education</h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-indigo-600">
                  {edu.degree}
                </h3>
                <p className="text-gray-600">{edu.school}</p>
                <p className="text-sm text-gray-500 mb-2">{edu.year}</p>
                <p className="text-gray-700">{edu.description}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Interests Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-6">Interests</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {interests.map((interest, index) => {
              const Icon = interest.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md p-4 text-center"
                >
                  <Icon className="w-8 h-8 mx-auto mb-2 text-indigo-600" />
                  <span className="font-medium">{interest.name}</span>
                </div>
              );
            })}
          </div>
        </motion.section>

        {/* Hobbies Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-6">Hobbies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {hobbies.map((hobby, index) => {
              const Icon = hobby.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md p-4 text-center"
                >
                  <Icon className="w-8 h-8 mx-auto mb-2 text-indigo-600" />
                  <span className="font-medium">{hobby.name}</span>
                </div>
              );
            })}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
