import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

function ContactPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-white mb-12 text-center">Contact Us</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Inquiry Form */}
          <div>
            <form className="space-y-6">
              <div>
                <label className="block text-white mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-primary text-white" 
                  required
                />
              </div>
              <div>
                <label className="block text-white mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-primary text-white" 
                  required
                />
              </div>
              <div>
                <label className="block text-white mb-2">Subject</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-primary text-white" 
                />
              </div>
              <div>
                <label className="block text-white mb-2">Message</label>
                <textarea 
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-primary text-white" 
                  rows={4}
                ></textarea>
              </div>
              <button className="w-full bg-primary text-black font-semibold px-4 py-2 rounded-lg hover:bg-opacity-90 transition duration-300">
                Send Message
              </button>
            </form>
          </div>
          
          {/* Contact Details & Scheduler */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
              <div className="space-y-4">
                <p className="flex items-center text-gray-400">
                  <Mail className="w-5 h-5 mr-3 text-primary" />
                  contact@meghplat.com
                </p>
                <p className="flex items-center text-gray-400">
                  <Phone className="w-5 h-5 mr-3 text-primary" />
                  +1 (555) 123-4567
                </p>
                <p className="flex items-center text-gray-400">
                  <MapPin className="w-5 h-5 mr-3 text-primary" />
                  123 Tech Street, Silicon Valley, CA 94025
                </p>
              </div>
            </div>

            {/* Scheduler Integration */}
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Schedule a Meeting</h3>
              <iframe 
                  src="https://cal.com/hariom-kabra-0wcop1" 
                  className="w-full h-[500px] border border-gray-700 rounded-lg"
                  title="Schedule a Meeting"
                ></iframe>

            </div>

            {/* Office Hours */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Office Hours</h3>
              <div className="space-y-2 text-gray-400">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
