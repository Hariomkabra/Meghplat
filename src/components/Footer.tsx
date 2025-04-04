import React from 'react';
import { Github, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-[#020617] text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1">
            <h4 className="text-xl font-bold text-primary mb-6">About Meghplat</h4>
            <p className="text-gray-400 mb-8">
              Leading provider of AI and data solutions, helping businesses transform through technology innovation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h4 className="text-xl font-bold text-primary mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-400 hover:text-primary transition-colors">Home</Link></li>
              <li><a href="#about" className="text-gray-400 hover:text-primary transition-colors">About</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors">Services</a></li>
              <li><Link to="/courses" className="text-gray-400 hover:text-primary transition-colors">Courses</Link></li>
              <li><a href="#contact" className="text-gray-400 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-xl font-bold text-primary mb-6">Resources</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Whitepapers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">FAQs</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-xl font-bold text-primary mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-400">
                <Mail className="w-5 h-5 mr-3 text-primary" />
                contact@meghplat.com
              </li>
              <li className="flex items-center text-gray-400">
                <Phone className="w-5 h-5 mr-3 text-primary" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center text-gray-400">
                <MapPin className="w-5 h-5 mr-3 text-primary" />
                123 Tech Street, CA
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          © {new Date().getFullYear()} Meghplat. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;