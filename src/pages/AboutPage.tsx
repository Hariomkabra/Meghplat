import React from 'react';
import { Users, Target, Award } from 'lucide-react';

function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-6">About Meghplat</h1>
          <p className="text-xl text-gray-400">
            Leading provider of innovative digital solutions, helping businesses transform 
            through cutting-edge technology and strategic expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-gray-800 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              To empower businesses with innovative digital solutions that drive growth, 
              efficiency, and success in the modern digital landscape.
            </p>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              To be the global leader in digital transformation, creating a future where 
              every organization can harness the full potential of technology.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="text-center p-8 bg-gray-800 rounded-lg">
            <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
              <Target className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Innovation First</h3>
            <p className="text-gray-400">
              Constantly pushing the boundaries of what's possible with technology.
            </p>
          </div>
          <div className="text-center p-8 bg-gray-800 rounded-lg">
            <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Client Success</h3>
            <p className="text-gray-400">
              Dedicated to delivering measurable results and exceptional value.
            </p>
          </div>
          <div className="text-center p-8 bg-gray-800 rounded-lg">
            <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Excellence</h3>
            <p className="text-gray-400">
              Maintaining the highest standards in everything we do.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;