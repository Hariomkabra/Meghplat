import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Search, Award, Share2 } from 'lucide-react';

function VerifyCertificate() {
  const [certificateId, setCertificateId] = useState('');
  const [searchPerformed, setSearchPerformed] = useState(false);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchPerformed(true);
  };

  return (
    <div className="min-h-screen bg-dark text-white">
      <Header />
      
      <div className="pt-24">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Certificate Verification</h1>
            <p className="text-xl text-gray-400">
              Verify the authenticity of certificates issued by Meghplat
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleVerify} className="mb-12">
              <div className="relative">
                <input
                  type="text"
                  value={certificateId}
                  onChange={(e) => setCertificateId(e.target.value)}
                  placeholder="Enter certificate ID"
                  className="w-full px-6 py-4 bg-gray-800 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary text-white px-6 py-2 rounded-lg hover:bg-opacity-90"
                >
                  Verify
                </button>
              </div>
            </form>

            {searchPerformed && (
              <div className="bg-gray-800 rounded-lg p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <Award className="w-12 h-12 text-primary mr-4" />
                    <div>
                      <h2 className="text-2xl font-bold">Certificate Verified</h2>
                      <p className="text-gray-400">Certificate ID: {certificateId}</p>
                    </div>
                  </div>
                  <button className="p-2 hover:bg-gray-700 rounded-full">
                    <Share2 className="w-6 h-6 text-primary" />
                  </button>
                </div>
                
                <div className="border-t border-gray-700 pt-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Certificate Details</h3>
                      <ul className="space-y-2 text-gray-400">
                        <li>Course: AI & Machine Learning Fundamentals</li>
                        <li>Issue Date: March 15, 2024</li>
                        <li>Expiry: No Expiration</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Recipient Details</h3>
                      <ul className="space-y-2 text-gray-400">
                        <li>Name: John Doe</li>
                        <li>Email: j***@example.com</li>
                        <li>Status: Completed</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default VerifyCertificate;