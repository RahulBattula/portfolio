import { Internship } from '../types';

export const internships: Internship[] = [
  {
    id: 'kulture-hire',
    company: 'Kulture Hire',
    logo: 'https://media.licdn.com/dms/image/v2/D4D0BAQErEAAYFwnEYA/company-logo_200_200/company-logo_200_200/0/1725520121285/kulturehire_logo?e=2147483647&v=beta&t=vqdj4npalZdJtRQ3WtMr0P4yhD2SGofDlXoP2VXMsEw',
    role: 'Data Analyst Intern',
    duration: 'Aug 2024 - Oct 2023',
    location: 'India, Remote',
    description:
      'Worked on developing and implementing data analysis solutions for Genaration Z data.',
    responsibilities: [
      'Developed automated reporting systems using Python and PowerBI',
      'Analyzed customer behavior patterns using SQL and Pandas',
      'Created interactive dashboards for stakeholder presentations',
      'Optimized database queries resulting in 40% faster report generation',
    ],
    technologies: ['Python', 'SQL', 'PowerBI', 'Pandas', 'Excel'],
    achievements: [
      'Reduced manual reporting time by 70% through automation',
      'Identified key customer segments that led to a 25% increase in sales',
      'Received "Outstanding Intern" award',
    ],
  },
  {
    id: '1stop',
    company: '1Stop.ai',
    logo: 'https://media.licdn.com/dms/image/v2/C560BAQElUigENTqY3Q/company-logo_200_200/company-logo_200_200/0/1630656187494/1stop_ai_logo?e=2147483647&v=beta&t=wIjcK2i3nQeG7fDP2Nn85cWtm9Ug8PG6OlxU8890aMk',
    role: 'Machine Learning Intern',
    duration: 'Sep 2022 - Dec 2022',
    location: 'India, Remote',
    description:
      'Assisted in developing business intelligence solutions for healthcare clients.',
    responsibilities: [
      'Created ETL pipelines for healthcare data processing',
      'Developed predictive models for patient readmission',
      'Built interactive dashboards using Tableau',
      'Collaborated with cross-functional teams for requirement gathering',
    ],
    technologies: ['Python', 'Tableau', 'SQL', 'R', 'Excel'],
    achievements: [
      'Improved data processing efficiency by 50%',
      'Developed a model with 90% accuracy in predicting patient readmissions',
      'Successfully completed 3 major client projects',
    ],
  },  
];
