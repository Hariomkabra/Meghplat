import React from 'react';
import { Linkedin } from 'lucide-react';

const experts = [
  {
    name: "Dr. Sarah Johnson",
    role: "AI Research Lead",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
    description: "PhD in Machine Learning from Stanford"
  },
  {
    name: "Prof. Michael Chen",
    role: "Data Science Expert",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    description: "15+ years in Data Science Education"
  },
  {
    name: "Dr. Emily Rodriguez",
    role: "Cloud Architecture Specialist",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400",
    description: "Former AWS Solutions Architect"
  },
  {
    name: "David Kim",
    role: "ML Engineering Lead",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
    description: "Expert in Deep Learning Systems"
  }
];

function Experts() {
  return (
    <section className="py-20 bg-dark">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-16">Meet Our Experts</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {experts.map((expert, index) => (
            <div 
              key={index} 
              className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition duration-300"
            >
              <img 
                src={expert.image} 
                alt={expert.name} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-white">{expert.name}</h3>
                  <Linkedin className="w-5 h-5 text-primary cursor-pointer" />
                </div>
                <p className="text-primary font-semibold mb-2">{expert.role}</p>
                <p className="text-gray-400 text-sm">{expert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experts;