import React from 'react';

const caseStudies = [
  {
    title: 'AI-Driven Healthcare',
    description: 'Revolutionizing patient care with predictive analytics',
    results: ['30% reduction in diagnosis time', 'Improved accuracy by 45%', 'Cost savings of $2M annually'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2070'
  },
  {
    title: 'Smart Manufacturing',
    description: 'Optimizing production with IoT and machine learning',
    results: ['Production efficiency increased by 35%', 'Downtime reduced by 50%', 'ROI achieved in 8 months'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2070'
  },
  {
    title: 'FinTech Innovation',
    description: 'Transforming financial services with AI',
    results: ['Fraud detection improved by 60%', 'Customer satisfaction up 40%', 'Processing time reduced by 75%'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070'
  }
];

function CaseStudiesPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-white mb-12 text-center">Case Studies</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden">
              <img 
                src={study.image} 
                alt={study.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{study.title}</h3>
                <p className="text-gray-400 mb-4">{study.description}</p>
                
                <h4 className="text-lg font-semibold text-primary mb-3">Key Results:</h4>
                <ul className="space-y-2">
                  {study.results.map((result, idx) => (
                    <li key={idx} className="text-gray-300">• {result}</li>
                  ))}
                </ul>
                
                <button className="w-full mt-6 bg-primary text-black font-semibold px-4 py-2 rounded-lg hover:bg-opacity-90 transition duration-300">
                  Read Full Case Study
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CaseStudiesPage;