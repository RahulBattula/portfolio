import { Project } from '../types';

export const projects: Record<string, Project> = {
  'data-pipeline': {
    id: 'data-pipeline',
    title: 'Real-time Data Pipeline',
    domain: 'Data Engineering',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800',
    description: 'Scalable data pipeline for processing streaming data using Apache Kafka and Apache Spark',
    technologies: ['Apache Kafka', 'Apache Spark', 'Python', 'AWS', 'Docker'],
    duration: '4 months',
    demoLink: 'https://example.com/demo',
    githubLink: 'https://github.com/example/data-pipeline',
    problemStatement: 'A large e-commerce platform needed a robust system to process millions of user events in real-time for instant analytics and monitoring.',
    approach: 'Implemented a microservices architecture using Kafka for message queuing and Spark for stream processing. Deployed on AWS using Docker containers.',
    solution: 'Created a scalable pipeline processing 10,000+ events per second with sub-second latency. Implemented real-time dashboards and alerting systems.',
    resources: ['Apache Kafka Documentation', 'Spark Streaming Guide', 'AWS Documentation', 'Docker Docs'],
    guided: false,
    testimonials: [
      {
        content: "The data pipeline transformed our ability to respond to customer behavior in real-time.",
        author: "James Wilson",
        position: "CTO",
        company: "E-Commerce Plus"
      }
    ]
  },
  'data-lake': {
    id: 'data-lake',
    title: 'Enterprise Data Lake',
    domain: 'Data Engineering',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    description: 'Centralized data lake solution for enterprise-wide data management',
    technologies: ['Apache Hadoop', 'Apache Hive', 'Python', 'AWS S3', 'Airflow'],
    duration: '6 months',
    demoLink: 'https://example.com/demo',
    githubLink: 'https://github.com/example/data-lake',
    problemStatement: 'A multinational corporation struggled with siloed data across departments, making it difficult to perform cross-functional analytics.',
    approach: 'Designed a data lake architecture using AWS S3 for storage and Apache Hadoop ecosystem for processing. Implemented automated ETL workflows using Airflow.',
    solution: 'Built a centralized data platform handling 5+ petabytes of data with automated governance and security controls.',
    resources: ['Hadoop Documentation', 'AWS S3 Guide', 'Airflow Documentation', 'Data Lake Best Practices'],
    guided: true,
    testimonials: [
      {
        content: "The data lake implementation has become the backbone of our data strategy.",
        author: "Maria Garcia",
        position: "Data Architecture Lead",
        company: "Global Corp"
      }
    ]
  },
  'sales-analytics': {
    id: 'sales-analytics',
    title: 'Sales Analytics Dashboard',
    domain: 'Business Intelligence',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    description: 'Advanced dashboard for real-time sales data analysis using PowerBI and Python',
    technologies: ['Python', 'PowerBI', 'Pandas', 'SQL'],
    duration: '3 months',
    demoLink: 'https://example.com/demo',
    githubLink: 'https://github.com/example/sales-analytics',
    problemStatement: 'The client needed a real-time sales analytics solution to track performance metrics and make data-driven decisions. The existing manual reporting process was time-consuming and prone to errors.',
    approach: 'Implemented a comprehensive ETL pipeline using Python for data processing and PowerBI for visualization. Used automated data refresh and custom DAX measures for real-time insights.',
    solution: 'Developed an automated system that processes sales data in real-time and presents key metrics through interactive visualizations. The dashboard includes sales trends, customer behavior analysis, and predictive forecasting.',
    resources: ['PowerBI Documentation', 'Python Pandas Library', 'SQL Server', 'DAX Patterns'],
    guided: false,
    testimonials: [
      {
        content: "The sales analytics dashboard transformed our decision-making process. We saw a 25% increase in sales efficiency.",
        author: "John Smith",
        position: "Sales Director",
        company: "Tech Corp"
      }
    ]
  },
  'customer-segmentation': {
    id: 'customer-segmentation',
    title: 'Customer Segmentation Model',
    domain: 'Machine Learning',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    description: 'Machine learning model to segment customers based on purchasing behavior',
    technologies: ['Python', 'Scikit-learn', 'MySQL', 'Tableau'],
    duration: '2 months',
    demoLink: 'https://example.com/demo',
    githubLink: 'https://github.com/example/customer-segmentation',
    problemStatement: 'The e-commerce company struggled with targeted marketing campaigns due to a lack of customer segmentation. They needed a data-driven approach to understand customer behavior.',
    approach: 'Used K-means clustering algorithm with RFM (Recency, Frequency, Monetary) analysis. Implemented feature engineering to extract meaningful patterns from raw transaction data.',
    solution: 'Created a robust segmentation model that categorizes customers into distinct groups. Developed an automated pipeline for regular updates and a dashboard for marketing teams.',
    resources: ['Scikit-learn Documentation', 'RFM Analysis Guide', 'MySQL Documentation'],
    guided: true,
    testimonials: [
      {
        content: "The customer segmentation model helped us achieve a 40% higher conversion rate in our marketing campaigns.",
        author: "Lisa Chen",
        position: "Marketing Manager",
        company: "E-Shop Global"
      }
    ]
  },
  'inventory-prediction': {
    id: 'inventory-prediction',
    title: 'Inventory Prediction System',
    domain: 'Predictive Analytics',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800',
    description: 'Forecasting model for inventory management using time series analysis',
    technologies: ['Python', 'TensorFlow', 'Pandas', 'Prophet'],
    duration: '4 months',
    demoLink: 'https://example.com/demo',
    githubLink: 'https://github.com/example/inventory-prediction',
    problemStatement: 'A retail chain faced significant losses due to stockouts and overstock situations. They needed an accurate prediction system for optimal inventory management.',
    approach: 'Implemented LSTM neural networks for time series forecasting. Incorporated external factors like seasonality, promotions, and market trends.',
    solution: 'Developed a prediction system that forecasts inventory needs with 95% accuracy. Created an interactive dashboard for inventory managers with alerts and recommendations.',
    resources: ['TensorFlow Documentation', 'Time Series Analysis Guide', 'Prophet Documentation'],
    guided: false,
    testimonials: [
      {
        content: "This prediction system reduced our inventory costs by 30% and virtually eliminated stockouts.",
        author: "David Wilson",
        position: "Supply Chain Director",
        company: "Retail Solutions Inc"
      }
    ]
  }
};