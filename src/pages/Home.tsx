import { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import SkillsScroll from '../components/SkillsScroll';
import FeaturedProjects from '../components/FeaturedProjects';
import TestimonialsSection from '../components/TestimonialsSection';

export default function Home() {
  useEffect(() => {
    document.title = 'Rahul Kumar - Data Analyst & ML Engineer';
  }, []);

  return (
    <div className="overflow-hidden">
      <HeroSection />
      <SkillsScroll />
      <FeaturedProjects />
      <TestimonialsSection />
    </div>
  );
}