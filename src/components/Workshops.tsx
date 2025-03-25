import React from 'react';
import { Calendar, Users, Clock } from 'lucide-react';

const workshops = [
  {
    title: 'AI in Healthcare Workshop',
    date: 'March 25, 2024',
    participants: '50 max',
    duration: '4 hours',
    description: 'Explore the applications of AI in modern healthcare'
  },
  {
    title: 'Data Science Masterclass',
    date: 'April 2, 2024',
    participants: '40 max',
    duration: '6 hours',
    description: 'Deep dive into advanced data science concepts'
  },
  {
    title: 'Cloud Architecture Workshop',
    date: 'April 15, 2024',
    participants: '45 max',
    duration: '5 hours',
    description: 'Learn to design scalable cloud solutions'
  }
];

function Workshops() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-16">Upcoming Workshops</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {workshops.map((workshop, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 hover:transform hover:scale-105 transition duration-300">
              <h3 className="text-xl font-bold text-white mb-4">{workshop.title}</h3>
              <p className="text-gray-400 mb-6">{workshop.description}</p>
              
              <div className="space-y-3">
                <div className="flex items-center text-gray-400">
                  <Calendar className="w-5 h-5 text-primary mr-2" />
                  {workshop.date}
                </div>
                <div className="flex items-center text-gray-400">
                  <Users className="w-5 h-5 text-primary mr-2" />
                  {workshop.participants}
                </div>
                <div className="flex items-center text-gray-400">
                  <Clock className="w-5 h-5 text-primary mr-2" />
                  {workshop.duration}
                </div>
              </div>
              
              <button className="w-full mt-6 bg-primary text-black px-4 py-2 rounded-lg hover:bg-opacity-90 transition duration-300">
                Register Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Workshops;