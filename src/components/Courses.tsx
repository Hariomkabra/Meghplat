import React from 'react';
import { BookOpen, Clock, Star, Users } from 'lucide-react';

const courses = [
  {
    title: 'AI & Machine Learning Fundamentals',
    description: 'Learn the basics of AI and ML with hands-on projects',
    duration: '12 weeks',
    students: '1,200+',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=2070'
  },
  {
    title: 'Data Science Bootcamp',
    description: 'Comprehensive data science training with real-world applications',
    duration: '16 weeks',
    students: '800+',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2070'
  },
  {
    title: 'Cloud Computing Essentials',
    description: 'Master cloud platforms and deployment strategies',
    duration: '10 weeks',
    students: '950+',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072'
  },
  {
    title: 'Cybersecurity Professional',
    description: 'Learn advanced security techniques and threat prevention',
    duration: '14 weeks',
    students: '600+',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070'
  }
];

function Courses() {
  return (
    <section className="py-20 bg-dark">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-16">Featured Courses</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.slice(0, 3).map((course, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition duration-300">
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
                    <Star className="w-5 h-5 text-yellow-500 mr-2" />
                    <span className="text-gray-400">{course.rating}/5.0</span>
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="w-5 h-5 text-primary mr-2" />
                    <span className="text-gray-400">Certificate</span>
                  </div>
                </div>
                
                <button className="w-full bg-primary text-black px-4 py-2 rounded-lg hover:bg-opacity-90 transition duration-300 font-semibold">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Courses;