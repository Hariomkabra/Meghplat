import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, LogOut, User } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentUser, logout } = useAuth();

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
        <div className="hidden md:flex items-center space-x-10">
          <Link to="/" className="nav-link">Home</Link>
  
          {/* Courses Dropdown */}
          <div className="relative group">
            <Link to="/courses" className="nav-link">Learning</Link>
            <div className="absolute left-0 mt-2 w-56 bg-dark border border-gray-800 rounded-lg shadow-xl hidden group-hover:block z-50">
              {/* You would map through your courses data here */}
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
            {currentUser ? (
              <div className="flex items-center space-x-4">
                <div className="text-gray-300 flex items-center">
                  {/* Assuming User and LogOut are imported icons */}
                  {/* <User className="w-4 h-4 mr-1" /> */}
                  <span>{currentUser.displayName || currentUser.email}</span>
                </div>
                <button
                  onClick={() => logout()}
                  className="flex items-center text-gray-300 hover:text-white transition-colors"
                >
                  {/* <LogOut className="w-4 h-4 mr-1" /> */}
                  Logout
                </button>
              </div>
            ) : (
              <>
                <Link to="/login" className="text-gray-300 hover:text-white transition-colors">
                  LogIn
                </Link>
                <Link
                  to="/signup"
                  className="bg-primary text-black px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors font-semibold"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
  
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
            {/* Assuming X and Menu are imported icons */}
            {isMenuOpen ? <div>X</div> : <div>Menu</div>}
          </button>
        </div>
      </div>
  
      {/* Mobile Navigation (Now mirroring Desktop) */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pb-4 border-t border-gray-800 space-y-2">
          <Link to="/" className="block py-2 nav-link">Home</Link>
  
          {/* Mobile Learning Dropdown */}
          <div className="relative group">
            <Link to="/courses" className="block py-2 nav-link">Learning</Link>
            {/* You might need to implement a similar dropdown behavior as desktop here */}
            {/* For simplicity, I'm not adding the dropdown content in this mobile view */}
          </div>
  
          {/* Mobile Services Dropdown */}
          <div className="relative group">
            <Link to="/services" className="block py-2 nav-link">Services</Link>
            <div className="absolute left-0 mt-2 w-64 bg-dark border border-gray-800 rounded-lg shadow-xl hidden group-hover:block z-50">
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
  
          <Link to="/case-studies" className="block py-2 nav-link">Case blog</Link>
  
          <Link to="/contact" className="block py-2 nav-link">Contact</Link>
  
          <a
            href="https://uptorr.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="block py-2 nav-link"
          >
            Courses
          </a>
  
          <a
            href="https://uptorsite.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="block py-2 nav-link"
          >
            Carrer
          </a>
  
          <a
            href="https://workshopuptor.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="block py-2 nav-link"
          >
            Workshop
          </a>
  
          <Link to="/about-us" className="block py-2 nav-link">About Us</Link>
  
          {/* Mobile Auth Buttons */}
          <div className="mt-4 space-y-2">
            {currentUser ? (
              <div className="space-y-2">
                <div className="text-gray-300 flex items-center justify-center py-2">
                  {/* <User className="w-4 h-4 mr-1" /> */}
                  <span>{currentUser.displayName || currentUser.email}</span>
                </div>
                <button
                  onClick={() => logout()}
                  className="flex items-center justify-center w-full py-2 text-gray-300 hover:text-white transition-colors"
                >
                  {/* <LogOut className="w-4 h-4 mr-1" /> */}
                  Logout
                </button>
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="block w-full text-center py-2 text-gray-300 hover:text-white transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="block w-full text-center bg-primary text-black py-2 rounded-lg hover:bg-opacity-90 transition-colors font-semibold"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  </header>
  );
}

export default Header;
