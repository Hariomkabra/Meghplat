import React from 'react';
import { BookOpen, Clock, Star, Users } from 'lucide-react';

const courses = [
  {
    category: 'Digital Marketing',
    courses: [
      {
        title: 'Digital Marketing Strategy',
        description: 'Comprehensive digital marketing training',
        duration: '10 weeks',
        students: '2,000+',
        rating: 4.7,
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2070'
      },
      {
        title: 'Social Media Marketing',
        description: 'Master social media platforms and strategies',
        duration: '8 weeks',
        students: '1,800+',
        rating: 4.8,
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=2070'
      },
      {
        title: 'Marketing analytics',
        description: 'Marketing analytics is the practice of measuring, managing, and analyzing marketing performance data to maximize effectiveness and optimize return on investment (ROI).',
        duration: '8 weeks',
        students: '1,400+',
        rating: 4.8,
        image: 'https://martech.org/wp-content/uploads/2025/01/AI-in-marketing-analytics-concept.png'
      }
    ],
    services: [
      'Social Media Marketing',
      'Content Marketing',
      'Email Marketing',
      'SEO Optimization',
      'PPC Advertising',
      'Analytics & Reporting'
    ]
  },
  {
    category: 'Data Science',
    courses: [
      {
        title: 'Data Science Fundamentals',
        description: 'Learn the basics of data science and analytics',
        duration: '12 weeks',
        students: '1,500+',
        rating: 4.8,
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070'
      },
      {
        title: 'Machine Learning Mastery',
        description: 'Advanced machine learning concepts and applications',
        duration: '16 weeks',
        students: '1,200+',
        rating: 4.9,
        image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=2070'
      },
      {
        title: 'Data Visualization',
        description: 'Data visualization is the graphical representation of information and data',
        duration: '12 weeks',
        students: '1,400+',
        rating: 4.9,
        image: 'https://img.freepik.com/premium-photo/colorful-financial-data-charts-graphs-dark-background-representing-business-analytics-data-visualization_963414-20235.jpg'
      }
    ],
    services: [
      'Data Mining & Analysis',
      'Statistical Modeling',
      'Machine Learning Solutions',
      'Business Intelligence',
      'Big Data Processing',
      'Data Visualization'
    ]
  }
];

function CoursesPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-white mb-12 text-center">Our Courses</h1>

        {courses.map((category, index) => (
          <div key={index} className="mb-20">
            {/* Category Title */}
            <h2 className="text-2xl font-bold text-primary mb-8">{category.category}</h2>

            {/* Courses */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {category.courses.map((course, courseIndex) => (
                <div
                  key={courseIndex}
                  className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition duration-300"
                >
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3">{course.title}</h3>
                    <p className="text-gray-400 mb-4">{course.description}</p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center">
                        <Clock className="w-5 h-5 text-primary mr-2" />
                        <span className="text-gray-400">{course.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="w-5 h-5 text-primary mr-2" />
                        <span className="text-gray-400">{course.students}</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-5 h-5 text-primary mr-2" />
                        <span className="text-gray-400">{course.rating}/5.0</span>
                      </div>
                      <div className="flex items-center">
                        <BookOpen className="w-5 h-5 text-primary mr-2" />
                        <span className="text-gray-400">Certificate</span>
                      </div>
                    </div>

                    <button className="w-full bg-primary text-black font-semibold px-4 py-2 rounded-lg hover:bg-opacity-90 transition duration-300">
                      Enroll Now
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Services */}
            <div className="bg-gray-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-8">Our {category.category} Services</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {category.services.map((service, i) => (
                  <div key={i} className="flex items-start">
                    <Star className="w-5 h-5 text-primary mr-3 mt-1" />
                    <span className="text-gray-300">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CoursesPage;
