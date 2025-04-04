import React from 'react';

function Hero() {
  return (
    <section className="pt-24 lg:pt-32 pb-16 hero-gradient">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6 text-white">
              Transform Your Career with Our Courses
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Industry-leading courses designed to help you master the latest technologies
              and advance your career in tech.
            </p>
            <button className="bg-primary text-black px-8 py-3 rounded-lg hover:bg-opacity-90 transition duration-300">
              Explore Courses
            </button>
          </div>
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072" 
              alt="Technology concept" 
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;