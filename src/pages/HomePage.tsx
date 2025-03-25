import React from 'react';
import Hero from '../components/Hero';
import Courses from '../components/Courses';
import Workshops from '../components/Workshops';
import Reviews from '../components/Reviews';
import CoreValues from '../components/CoreValues';
import Experts from '../components/Experts';

function HomePage() {
  return (
    <div className="pt-20">
      <Hero />
      <Courses />
      <Workshops />
      <Reviews />
      <CoreValues />
      <Experts />
    </div>
  );
}

export default HomePage;