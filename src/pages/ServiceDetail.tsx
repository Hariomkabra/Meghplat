import React from 'react';
import { useParams } from 'react-router-dom';
import { Star, Check } from 'lucide-react';

function ServiceDetail() {
  const { serviceId } = useParams();
  
  // This would typically come from an API or database
  const serviceDetails = {
    features: [
      'Comprehensive Solution',
      '24/7 Support',
      'Expert Consultation',
      'Regular Updates',
      'Performance Monitoring'
    ],
    benefits: [
      'Increased Efficiency',
      'Cost Reduction',
      'Better ROI',
      'Improved Performance',
      'Scalable Solutions'
    ]
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-white mb-6 capitalize">
          {serviceId?.replace(/-/g, ' ')}
        </h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-primary mb-6">Key Features</h2>
            <ul className="space-y-4">
              {serviceDetails.features.map((feature, index) => (
                <li key={index} className="flex items-start text-gray-300">
                  <Star className="w-5 h-5 text-primary mr-3 mt-1" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-primary mb-6">Benefits</h2>
            <ul className="space-y-4">
              {serviceDetails.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start text-gray-300">
                  <Check className="w-5 h-5 text-primary mr-3 mt-1" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <button className="bg-primary text-black font-semibold px-8 py-3 rounded-lg hover:bg-opacity-90 transition duration-300">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetail;