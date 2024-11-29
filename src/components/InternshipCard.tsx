import { Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

interface InternshipCardProps {
  id: string;
  company: string;
  logo: string;
  role: string;
  duration: string;
  location: string;
  onClick: () => void;
}

export default function InternshipCard({
  id,
  company,
  logo,
  role,
  duration,
  location,
  onClick,
}: InternshipCardProps) {
  return (
    <div
      className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-[1.02] transition-transform duration-300"
      onClick={onClick}
    >
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <img
            src={logo}
            alt={company}
            className="w-16 h-16 object-contain rounded-full object-cover"
          />
        </div>
        
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900">{company}</h3>
          <p className="text-lg text-indigo-600 font-medium">{role}</p>
          
          <div className="mt-4 flex flex-wrap gap-4 text-gray-600">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>{location}</span>
            </div>
          </div>
        </div>
      </div>
      
      <Link
        to={`/internships/${id}`}
        className="mt-6 block w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors text-center font-medium"
      >
        View Details
      </Link>
    </div>
  );
}