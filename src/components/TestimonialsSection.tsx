import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    content: "Rahul's data analysis skills helped us increase our revenue by 30% through targeted marketing campaigns.",
    author: "Sarah Johnson",
    position: "Marketing Director",
    company: "Tech Solutions Inc",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
  },
  {
    content: "The machine learning model developed by Rahul revolutionized our customer segmentation approach.",
    author: "Michael Chen",
    position: "Product Manager",
    company: "DataCorp Analytics",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
  },
  {
    content: "Outstanding work on our predictive analytics project. The insights gained were invaluable.",
    author: "Emily Rodriguez",
    position: "CEO",
    company: "Innovation Labs",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Online Testimonials</h2>
          <p className="text-xl text-gray-600">What others say about my work</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-6 shadow-lg"
            >
              <Quote className="h-8 w-8 text-indigo-600 mb-4" />
              <p className="text-gray-600 mb-6">{testimonial.content}</p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h4 className="font-bold">{testimonial.author}</h4>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                  <p className="text-sm text-indigo-600">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}