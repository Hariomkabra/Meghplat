import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    'Google Workspace',
    'Bulk SMS',
    'Web Design',
    'Social Media Marketing (SMM)',
    'Search Engine Optimization (SEO)',
    'Pay-Per-Click (PPC) Advertising'
  ];

  return (
    <header className="fixed w-full bg-dark/90 backdrop-blur-sm border-b border-gray-800 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-primary">Meghplat</Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link">Home</Link>
         
            
            
           
          {/* Courses Dropdown */}
            <div className="relative group">
            <Link to="/courses" className="nav-link">Courses</Link>
              <div className="absolute left-0 mt-2 w-56 bg-dark border border-gray-800 rounded-lg shadow-xl hidden group-hover:block z-50">
              </div>
            </div>


            {/* Services Dropdown */}
            <div className="relative group">
              <Link to="/services" className="nav-link">Services</Link>
              <div className="absolute left-0 mt-2 w-64 bg-dark border border-gray-800 rounded-lg shadow-xl hidden group-hover:block">
                {services.map((service, index) => (
                  <Link
                    key={index}
                    to={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white"
                  >
                    {service}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/case-studies" className="nav-link">Case blog</Link>
            
            <Link to="/contact" className="nav-link">Contact</Link>


            <a 
                    href="https://uptorr.netlify.app/"  
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="nav-link "
                  >
                    Courses
              </a>


            <a 
                    href="https://uptorsite.netlify.app/"  
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="nav-link "
                  >
                    Carrer
              </a>

             <a 
                    href="https://workshopuptor.netlify.app/"  
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="nav-link "
                  >
                    Workshop
              </a>

              <Link to="/about-us" className="nav-link">About Us</Link>
            
            {/* Auth Buttons */}
            <div className="flex items-center space-x-4">
              <Link to="/login" className=" text-gray-300 hover:text-white transition-colors">
                LogIn
              </Link>
              <Link 
                to="/signup" 
                className=" bg-primary text-black px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors font-semibold"
              >
                Sign Up
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-800">
            <Link to="/" className="block py-2 nav-link">Home</Link>
            <Link to="/about-us" className="block py-2 nav-link">About Us</Link>
            <Link to="/services" className="block py-2 nav-link">Services</Link>
            {services.map((service, index) => (
              <Link
                key={index}
                to={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`}
                className="block py-2 pl-4 text-sm nav-link"
              >
                {service}
              </Link>
            ))}
            <Link to="/courses" className="block py-2 nav-link">Courses</Link>
            <Link to="/digital-marketing" className="block py-2 nav-link">Digital Marketing</Link>
            <Link to="/data-science" className="block py-2 nav-link">Data Science</Link>
            <Link to="/case-studies" className="block py-2 nav-link">Case Studies</Link>
            <Link to="/blog" className="block py-2 nav-link">Blog</Link>
            <Link to="/contact" className="block py-2 nav-link">Contact</Link>



             <a 
                    href="https://uptorr.netlify.app/"  
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="nav-link "
                  >
                    Courses
              </a>


            <a 
                    href="https://uptorsite.netlify.app/"  
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="nav-link "
                  >
                    Carrer
              </a>

              <a 
                    href="https://workshopuptor.netlify.app/"  
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="nav-link "
                  >
                    Workshop
              </a>
            
            {/* Mobile Auth Buttons */}
            <div className="mt-4 space-y-2">
              <Link 
                to="/login" 
                className="block w-full text-center py-2 text-gray-300 hover:text-white transition-colors"
              >
                Login 
              </Link>
              <Link 
                to="/register" 
                className="block w-full text-center bg-primary text-black py-2 rounded-lg hover:bg-opacity-90 transition-colors font-semibold"
              >
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;