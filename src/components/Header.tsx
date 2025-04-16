import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, LogOut, User, ChevronDown, BookOpen, Briefcase, FileText, Users, Mail, GraduationCap } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthDropdownOpen, setIsAuthDropdownOpen] = useState(false);
  const [isLearningDropdownOpen, setIsLearningDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);

  const authDropdownRef = useRef<HTMLDivElement>(null);
  const learningDropdownRef = useRef<HTMLDivElement>(null);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const resourcesDropdownRef = useRef<HTMLDivElement>(null);

  const { currentUser, logout } = useAuth();

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (authDropdownRef.current && !authDropdownRef.current.contains(event.target as Node)) {
        setIsAuthDropdownOpen(false);
      }
      if (learningDropdownRef.current && !learningDropdownRef.current.contains(event.target as Node)) {
        setIsLearningDropdownOpen(false);
      }
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target as Node)) {
        setIsServicesDropdownOpen(false);
      }
      if (resourcesDropdownRef.current && !resourcesDropdownRef.current.contains(event.target as Node)) {
        setIsResourcesDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
          <Link to="/" className="nav-link flex items-center">
            <span>Home</span>
          </Link>

          {/* Learning Dropdown */}
          <div className="relative" ref={learningDropdownRef}>
            <button
              onClick={() => {
                setIsLearningDropdownOpen(!isLearningDropdownOpen);
                setIsServicesDropdownOpen(false);
                setIsResourcesDropdownOpen(false);
                setIsAuthDropdownOpen(false);
              }}
              className="nav-link flex items-center cursor-pointer"
            >
              <span>Learning</span>
              <ChevronDown className="w-4 h-4 ml-1" />
            </button>
            {isLearningDropdownOpen && (
              <div className="absolute left-0 mt-2 w-56 bg-dark border border-gray-800 rounded-lg shadow-xl z-50">
                <Link
                  to="/courses"
                  className="px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white flex items-center"
                  onClick={() => setIsLearningDropdownOpen(false)}
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  Courses
                </Link>
                <a
                  href="https://workshopuptor.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white flex items-center"
                  onClick={() => setIsLearningDropdownOpen(false)}
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  Workshops
                </a>
                <a
                  href="https://uptorsite.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white flex items-center"
                  onClick={() => setIsLearningDropdownOpen(false)}
                >
                  <GraduationCap className="w-4 h-4 mr-2" />
                  Career
                </a>
              </div>
            )}
          </div>

          {/* Services Dropdown */}
          <div className="relative" ref={servicesDropdownRef}>
            <button
              onClick={() => {
                setIsServicesDropdownOpen(!isServicesDropdownOpen);
                setIsLearningDropdownOpen(false);
                setIsResourcesDropdownOpen(false);
                setIsAuthDropdownOpen(false);
              }}
              className="nav-link flex items-center cursor-pointer"
            >
               <Link to="/services" className="nav-link">Services</Link>
              <ChevronDown className="w-4 h-4 ml-1" />
            </button>
            {isServicesDropdownOpen && (
              <div className="absolute left-0 mt-2 w-64 bg-dark border border-gray-800 rounded-lg shadow-xl z-50">
                {services.map((service, index) => (
                  <Link
                    key={index}
                    to={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`}
                    className="px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white flex items-center"
                    onClick={() => setIsServicesDropdownOpen(false)}
                  >
                    <Briefcase className="w-4 h-4 mr-2" />
                    {service}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Resources Dropdown */}
          <div className="relative" ref={resourcesDropdownRef}>
            <button
              onClick={() => {
                setIsResourcesDropdownOpen(!isResourcesDropdownOpen);
                setIsLearningDropdownOpen(false);
                setIsServicesDropdownOpen(false);
                setIsAuthDropdownOpen(false);
              }}
              className="nav-link flex items-center cursor-pointer"
            >
              <span>Resources</span>
              <ChevronDown className="w-4 h-4 ml-1" />
            </button>
            {isResourcesDropdownOpen && (
              <div className="absolute left-0 mt-2 w-56 bg-dark border border-gray-800 rounded-lg shadow-xl z-50">
                <Link
                  to="/case-studies"
                  className="px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white flex items-center"
                  onClick={() => setIsResourcesDropdownOpen(false)}
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Case Blog
                </Link>
                <a
                  href="https://uptorr.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white flex items-center"
                  onClick={() => setIsResourcesDropdownOpen(false)}
                >
                  <Briefcase className="w-4 h-4 mr-2" />
                  career
                </a>
              </div>
            )}
          </div>

          <Link to="/about-us" className="nav-link flex items-center">
            <Users className="w-4 h-4 mr-1" />
            <span>About Us</span>
          </Link>

          <Link to="/contact" className="nav-link flex items-center">
            <Mail className="w-4 h-4 mr-1" />
            <span>Contact</span>
          </Link>

          {/* Auth Dropdown */}
          <div className="relative" ref={authDropdownRef}>
            {currentUser ? (
              <div className="flex items-center space-x-4">
                <div className="text-gray-300 flex items-center">
                  <User className="w-4 h-4 mr-1" />
                  <span>{currentUser.displayName || currentUser.email}</span>
                </div>
                <button
                  onClick={() => logout()}
                  className="flex items-center text-gray-300 hover:text-white transition-colors"
                >
                  <LogOut className="w-4 h-4 mr-1" />
                  Logout
                </button>
              </div>
            ) : (
              <>
                <button
                  onClick={() => {
                    setIsAuthDropdownOpen(!isAuthDropdownOpen);
                    setIsLearningDropdownOpen(false);
                    setIsServicesDropdownOpen(false);
                    setIsResourcesDropdownOpen(false);
                  }}
                  className="bg-primary text-black px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors font-semibold flex items-center"
                >
                  <User className="w-4 h-4 mr-1" />
                  <span>Account</span>
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>

                {isAuthDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-dark border border-gray-800 rounded-lg shadow-xl z-50">
                    <Link
                      to="/login"
                      className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white"
                      onClick={() => setIsAuthDropdownOpen(false)}
                    >
                      Login
                    </Link>
                    <Link
                      to="/signup"
                      className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white"
                      onClick={() => setIsAuthDropdownOpen(false)}
                    >
                      Sign Up
                    </Link>
                  </div>
                )}
              </>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pb-4 border-t border-gray-800 space-y-2">
          <Link to="/" className="py-2 nav-link flex items-center">
            <span>Home</span>
          </Link>

          {/* Mobile Learning Section */}
          <div className="py-2 nav-link font-semibold">Learning</div>
          <Link to="/courses" className="py-2 pl-4 text-sm nav-link flex items-center">
            <BookOpen className="w-4 h-4 mr-2" />
            Courses
          </Link>
          <a
            href="https://workshopuptor.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 pl-4 text-sm nav-link flex items-center"
          >
            <BookOpen className="w-4 h-4 mr-2" />
            Workshops
          </a>
          <a
            href="https://uptorsite.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 pl-4 text-sm nav-link flex items-center"
          >
            <GraduationCap className="w-4 h-4 mr-2" />
            Career
          </a>

          {/* Mobile Services Section */}
          <div className="py-2 nav-link font-semibold">Services</div>
          {services.map((service, index) => (
            <Link
              key={index}
              to={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`}
              className="py-2 pl-4 text-sm nav-link flex items-center"
            >
              <Briefcase className="w-4 h-4 mr-2" />
              {service}
            </Link>
          ))}

          {/* Mobile Resources Section */}
          <div className="py-2 nav-link font-semibold">Resources</div>
          <Link to="/case-studies" className="py-2 pl-4 text-sm nav-link flex items-center">
            <FileText className="w-4 h-4 mr-2" />
            Case Blog
          </Link>

          <Link to="/about-us" className="py-2 nav-link flex items-center">
            <Users className="w-4 h-4 mr-2" />
            About Us
          </Link>

          <Link to="/contact" className="py-2 nav-link flex items-center">
            <Mail className="w-4 h-4 mr-2" />
            Contact
          </Link>

          {/* Mobile Auth Buttons */}
          <div className="mt-4 space-y-2">
            {currentUser ? (
              <div className="space-y-2">
                <div className="text-gray-300 flex items-center justify-center py-2">
                  <User className="w-4 h-4 mr-1" />
                  <span>{currentUser.displayName || currentUser.email}</span>
                </div>
                <button
                  onClick={() => logout()}
                  className="flex items-center justify-center w-full py-2 text-gray-300 hover:text-white transition-colors"
                >
                  <LogOut className="w-4 h-4 mr-1" />
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
