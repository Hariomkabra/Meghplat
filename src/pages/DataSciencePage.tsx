import React from 'react';
import { Database, LineChart, Brain, Star } from 'lucide-react';

function DataSciencePage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-white mb-12 text-center">Data Science</h1>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
              <Database className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Data Analytics</h3>
            <p className="text-gray-400">
              Transform raw data into actionable insights for better decision making.
            </p>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
              <LineChart className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Predictive Modeling</h3>
            <p className="text-gray-400">
              Forecast trends and outcomes using advanced statistical models.
            </p>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
              <Brain className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Machine Learning</h3>
            <p className="text-gray-400">
              Implement AI solutions to automate and optimize processes.
            </p>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">Our Data Science Services</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Data Mining & Analysis',
              'Statistical Modeling',
              'Machine Learning Solutions',
              'Business Intelligence',
              'Big Data Processing',
              'Data Visualization'
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

export default DataSciencePage;