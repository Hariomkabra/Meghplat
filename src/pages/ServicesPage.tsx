import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

const services = [
  {
    title: 'Google Workspace',
    description: 'Custom, Secure Business e-mail solutions',
    image: 'https://www.proofhub.com/articles/wp-content/uploads/2024/05/Offer-help-and-support-whenever-possible-1024x576.jpg',
    features: [
      'Custom, Secure Business e-mail solutions',
      'Fast, Reliable & Affordable',
      'Guaranteed 24/7 Support'
    ]
  },
  {
    title: 'Bulk SMS',
    description: 'Media-rich personalized SMS solutions',
    image: 'https://www.navohosting.com/wp-content/uploads/2022/10/bulk-sms-1024x606.png',
    features: [
      'Media-rich personalized SMS',
      'Custom Sender ID',
      'Powerful Web APIs'
    ]
  },
  {
    title: 'Web Design',
    description: 'Professional and responsive web design',
    image: 'https://img.freepik.com/free-vector/static-website-concept-illustration_114360-7093.jpg',
    features: [
      'Dedicated Design Expert',
      'SEO-Friendly Design',
      'Mobile Responsive Design'
    ]
  },
  {
    title: 'Social Media Marketing (SMM)',
    description: 'Comprehensive social media management',
    image: 'https://www.rankontechnologies.com/wp-content/uploads/2022/09/Marketing-bro.png',
    features: [
      'Social Media Strategy Development',
      'Content Creation & Scheduling',
      'Analytics & Performance Reporting'
    ]
  },
  {
    title: 'Search Engine Optimization (SEO)',
    description: 'Boost your online visibility',
    image: 'https://www.deuglo.com/wp-content/uploads/2022/12/SEO-Services.png',
    features: [
      'On-Page & Off-Page SEO',
      'Keyword Research & Optimization',
      'Technical SEO Audits'
    ]
  },
  {
    title: 'Pay-Per-Click (PPC) Advertising',
    description: 'Results-driven advertising campaigns',
    image: 'https://reliqus.com/wp-content/uploads/2025/01/Pay_Per_Click.webp',
    features: [
      'Google Ads Management',
      'Remarketing Strategies',
      'Conversion Optimization'
    ]
  }
];

function ServicesPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-white mb-12 text-center">Our Services</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link 
              key={index}
              to={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
              className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition duration-300"
            >
              <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-400 flex items-start">
                      <Star className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;