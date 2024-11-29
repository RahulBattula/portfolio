import { useRef, useEffect } from 'react';

const skills = [
  {
    name: 'Python',
    iconUrl: 'https://img.icons8.com/3d-fluency/94/python.png'
  },
  {
    name: 'Pandas',
    iconUrl: 'https://img.icons8.com/color/48/pandas.png'
  },
  {
    name: 'NumPy',
    iconUrl: 'https://img.icons8.com/color/48/numpy.png'
  },
  {
    name: 'Machine Learning',
    iconUrl: 'https://img.icons8.com/color/48/artificial-intelligence.png'
  },
  {
    name: 'MySQL',
    iconUrl: 'https://img.icons8.com/color/48/mysql-logo.png'
  },
  {
    name: 'PowerBI',
    iconUrl: 'https://img.icons8.com/color/48/power-bi.png'
  },
  {
    name: 'Excel',
    iconUrl: 'https://img.icons8.com/fluency/48/microsoft-excel-2019.png'
  },
  {
    name: 'Github',
    iconUrl: 'https://img.icons8.com/3d-fluency/94/github.png'
  },
  {
    name: 'MongoDB',
    iconUrl: 'https://img.icons8.com/external-tal-revivo-green-tal-revivo/36/external-mongodb-a-cross-platform-document-oriented-database-program-logo-green-tal-revivo.png'
  },
  {
    name: 'Figma',
    iconUrl: 'https://img.icons8.com/fluency/48/figma.png'
  },
  {
    name: 'HTML5',
    iconUrl: 'https://img.icons8.com/color/48/html-5.png'
  },
  {
    name: 'CSS3',
    iconUrl: 'https://img.icons8.com/fluency/48/css3.png'
  },
  {
    name: 'JavaScript',
    iconUrl: 'https://img.icons8.com/color/48/javascript--v1.png'
  },
  {
    name: 'AWS',
    iconUrl: 'https://img.icons8.com/color/48/amazon-web-services.png'
  }
];

export default function SkillsScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;

    const scroll = () => {
      element.scrollLeft += 1;
      if (element.scrollLeft >= (element.scrollWidth - element.clientWidth)) {
        element.scrollLeft = 0;
      }
    };

    const intervalId = setInterval(scroll, 20);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="w-full overflow-hidden bg-gradient-to-r from-indigo-50 via-white to-indigo-50 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Skills & Technologies</h2>
      <div
        ref={scrollRef}
        className="flex space-x-12 overflow-x-hidden whitespace-nowrap py-8"
      >
        {[...skills, ...skills].map((skill, index) => (
          <div
            key={index}
            className="inline-flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 min-w-[150px]"
          >
            <img 
              src={skill.iconUrl} 
              alt={skill.name}
              className="w-16 h-16 mb-4"
              loading="lazy"
            />
            <span className="font-medium text-gray-800">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}