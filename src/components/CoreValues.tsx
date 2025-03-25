import React from 'react';
import { Target, Users, Globe, Zap } from 'lucide-react';

const values = [
  {
    icon: <Target className="w-8 h-8 text-primary" />,
    title: 'Excellence',
    description: 'Committed to delivering the highest quality education'
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: 'Community',
    description: 'Building a supportive learning environment'
  },
  {
    icon: <Globe className="w-8 h-8 text-primary" />,
    title: 'Global Impact',
    description: 'Making education accessible worldwide'
  },
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: 'Innovation',
    description: 'Staying ahead with cutting-edge technology'
  }
];

function CoreValues() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-16">Our Core Values</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center p-6 bg-gray-800 rounded-lg">
              <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
              <p className="text-gray-400">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoreValues;