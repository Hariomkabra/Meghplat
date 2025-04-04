import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { MessageSquare, Search, MousePointer } from 'lucide-react';

const faqs = [
  {
    question: "How do I access my course materials?",
    answer: "After enrollment, you can access all course materials through your student dashboard. Simply log in and navigate to 'My Courses'."
  },
  {
    question: "What is the refund policy?",
    answer: "We offer a 30-day money-back guarantee for all our courses. If you're not satisfied, contact our support team for a full refund."
  },
  {
    question: "Do I get a certificate upon completion?",
    answer: "Yes, you receive a verified digital certificate upon successful completion of your course."
  },
  {
    question: "How long do I have access to the course?",
    answer: "You have lifetime access to all course materials after enrollment."
  }
];

function HelpSupport() {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Header />
      
      <div className="pt-24">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-center mb-12">Help & Support</h1>
          
          {/* Search Section */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for help..."
                className="w-full px-6 py-4 bg-gray-800 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <MessageSquare className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Live Chat</h3>
              <p className="text-gray-400 mb-4">Get instant help from our support team</p>
              <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-opacity-90">
                Start Chat
              </button>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <Search className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Knowledge Base</h3>
              <p className="text-gray-400 mb-4">Browse our detailed documentation</p>
              <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-opacity-90">
                View Articles
              </button>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <MousePointer className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Video Tutorials</h3>
              <p className="text-gray-400 mb-4">Learn through step-by-step videos</p>
              <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-opacity-90">
                Watch Now
              </button>
            </div>
          </div>
          
          {/* FAQs */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default HelpSupport;