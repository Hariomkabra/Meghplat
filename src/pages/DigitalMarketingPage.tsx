import React from 'react';
import { Target, Users, Award, Star } from 'lucide-react';

function DigitalMarketingPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-white mb-12 text-center">Digital Marketing</h1>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
              <Target className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Strategic Planning</h3>
            <p className="text-gray-400">
              Develop comprehensive digital marketing strategies tailored to your business goals.
            </p>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Audience Targeting</h3>
            <p className="text-gray-400">
              Reach your ideal customers through precise audience targeting and segmentation.
            </p>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Performance Analysis</h3>
            <p className="text-gray-400">
              Track and analyze campaign performance to optimize your marketing ROI.
            </p>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">Our Digital Marketing Services</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Social Media Marketing',
              'Content Marketing',
              'Email Marketing',
              'SEO Optimization',
              'PPC Advertising',
              'Analytics & Reporting'
            ].map((service, index) => (
              <div key={index} className="flex items-start">
                <Star className="w-5 h-5 text-primary mr-3 mt-1" />
                <span className="text-gray-300">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DigitalMarketingPage;