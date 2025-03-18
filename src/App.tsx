import React, { useState } from 'react';
import { 
  Brain, 
  Cloud, 
  Database, 
  LineChart,
  Github,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  Users,
  Target,
  Award,
  Rocket,
  Coffee,
  Heart,
  Globe,
  Zap,
  MessageSquare,
  Share2,
  Search,
  MousePointer,
  Star
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
      description: "15+ years experience in AI & Machine Learning"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
      description: "Former Tech Lead at Google AI"
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Innovation",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400",
      description: "PhD in Computer Science from MIT"
    },
    {
      name: "David Kim",
      role: "Lead Data Scientist",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
      description: "Expert in Deep Learning & Neural Networks"
    }
  ];

  const services = [
    {

      title: 'Google Workspace',
      description: 'Custom, Secure Business e-mail solutions',
      image: 'https://www.proofhub.com/articles/wp-content/uploads/2024/05/Offer-help-and-support-whenever-possible-1024x576.jpg',
      features: [
        'Custom, Secure Business e-mail solutions',
        'Fast, Reliable & Affordable',
        'Guaranteed 24/7 Support'
      ]
    },
    {
    
      title: 'Bulk SMS',
      description: 'Media-rich personalized SMS solutions',
      image:'https://www.navohosting.com/wp-content/uploads/2022/10/bulk-sms-1024x606.png',
      features: [
        'Media-rich personalized SMS',
        'Custom Sender ID',
        'Powerful Web APIs'
      ]
    },
    {
    
      title: 'Web Design',
      description: 'Professional and responsive web design',
      image:'https://img.freepik.com/free-vector/static-website-concept-illustration_114360-7093.jpg',
      features: [
        'Dedicated Design Expert',
        'SEO-Friendly Design',
        'Mobile Responsive Design'
      ]
    },
    {
  
      title: 'Social Media Marketing (SMM)',
      description: 'Comprehensive social media management',
      image:'https://www.rankontechnologies.com/wp-content/uploads/2022/09/Marketing-bro.png',
      features: [
        'Social Media Strategy Development',
        'Content Creation & Scheduling',
        'Paid Ad Campaigns (Facebook, Instagram, LinkedIn, etc.)',
        'Community Engagement & Management',
        'Analytics & Performance Reporting'
      ]
    },
    {
  
      title: 'Search Engine Optimization (SEO)',
      description: 'Boost your online visibility',
      image:'https://www.deuglo.com/wp-content/uploads/2022/12/SEO-Services.png',
      features: [
        'On-Page & Off-Page SEO',
        'Keyword Research & Optimization',
        'Technical SEO Audits',
        'Link Building Strategies',
        'Local SEO for Businesses'
      ]
    },
    {
  
      title: 'Pay-Per-Click (PPC) Advertising',
      description: 'Results-driven advertising campaigns',
      image:'https://reliqus.com/wp-content/uploads/2025/01/Pay_Per_Click.webp',
      features: [
        'Google Ads Management',
        'Bing Ads Campaigns',
        'Remarketing & Retargeting Strategies',
        'Conversion Rate Optimization',
        'Landing Page Design & Optimization'
      ]
    }
  ];

  const caseStudies = [
    {
      title: 'AI-Driven Healthcare',
      description: 'Revolutionizing patient care with predictive analytics',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2070'
    },
    {
      title: 'Smart Manufacturing',
      description: 'Optimizing production with IoT and machine learning',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2070'
    },
    {
      title: 'FinTech Innovation',
      description: 'Transforming financial services with AI',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070'
    }
  ];


  const openPositions = [
    {
      title: 'Senior AI Engineer',
      location: 'San Francisco, CA',
      type: 'Full-time',
      description: 'Lead the development of cutting-edge AI solutions',
      requirements: ['5+ years ML/AI experience', 'Strong Python skills', 'Deep Learning expertise']
    },
    {
      title: 'Data Scientist',
      location: 'Remote',
      type: 'Full-time',
      description: 'Build and optimize data pipelines and ML models',
      requirements: ['3+ years experience', 'Statistics background', 'SQL expertise']
    },
    {
      title: 'ML Operations Engineer',
      location: 'New York, NY',
      type: 'Full-time',
      description: 'Design and maintain ML infrastructure',
      requirements: ['DevOps experience', 'Kubernetes knowledge', 'CI/CD expertise']
    }
  ];

  const benefits = [
    { icon: <Rocket className="w-6 h-6 text-primary" />, title: 'Career Growth', description: 'Continuous learning and development opportunities' },
    { icon: <Coffee className="w-6 h-6 text-primary" />, title: 'Work-Life Balance', description: 'Flexible schedules and remote options' },
    { icon: <Heart className="w-6 h-6 text-primary" />, title: 'Health & Wellness', description: 'Comprehensive healthcare and wellness programs' },
    { icon: <Zap className="w-6 h-6 text-primary" />, title: 'Innovation Time', description: '20% time for personal projects and research' }
  ];

  return (
    <div className="min-h-screen bg-dark text-white">
      {/* Header */}
      <header className="fixed w-full bg-dark/90 backdrop-blur-sm border-b border-gray-800 z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-primary">Meghplat</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="nav-link">Home</a>
              <a href="#about" className="nav-link">About</a>
              <a href="#services" className="nav-link">Services</a>
              <a href="#case-studies" className="nav-link">Case Studies</a>
              <a href="#careers" className="nav-link">Careers</a>
              <a href="#contact" className="nav-link">Contact</a>
              <button className="btn-primary">
                Get Started
              </button>
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
              <a href="#home" className="block py-2 nav-link">Home</a>
              <a href="#about" className="block py-2 nav-link">About</a>
              <a href="#services" className="block py-2 nav-link">Services</a>
              <a href="#case-studies" className="block py-2 nav-link">Case Studies</a>
              <a href="#careers" className="block py-2 nav-link">Careers</a>
              <a href="#contact" className="block py-2 nav-link">Contact</a>
              <button className="mt-4 w-full btn-primary">
                Get Started
              </button>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-24 lg:pt-32 pb-16 hero-gradient">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                Transforming Business Through AI Innovation
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                Unlock the power of artificial intelligence and data analytics to drive your business forward.
              </p>
              <button className="btn-primary text-lg px-8 py-3">
                Explore Our Solutions
              </button>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072" 
                alt="Earth from space" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                To empower businesses with cutting-edge AI solutions that drive innovation, 
                efficiency, and growth in the digital age. We're committed to making advanced 
                technology accessible and practical for organizations of all sizes.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                To be the global leader in AI-driven business transformation, creating a future 
                where every organization can harness the full potential of artificial intelligence 
                to achieve extraordinary results and make a positive impact on society.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            <div className="text-center p-8 bg-gray-800 rounded-lg">
              <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation First</h3>
              <p className="text-gray-400">
                Constantly pushing the boundaries of what's possible with AI technology.
              </p>
            </div>
            <div className="text-center p-8 bg-gray-800 rounded-lg">
              <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Client Success</h3>
              <p className="text-gray-400">
                Dedicated to delivering measurable results and exceptional value.
              </p>
            </div>
            <div className="text-center p-8 bg-gray-800 rounded-lg">
              <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Global Impact</h3>
              <p className="text-gray-400">
                Creating positive change through technology across industries worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

     {/* Services Section */}
     <section id="services" className="py-20 bg-dark">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-white mb-16">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition duration-300">
                <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-400 flex items-start">
                        <Star className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-6 w-full bg-primary text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-16 bg-dark">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-white mb-16">Case Studies</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition duration-300">
                <img src={study.image} alt={study.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{study.title}</h3>
                  <p className="text-gray-400">{study.description}</p>
                  <button className="mt-4 text-primary font-semibold hover:text-opacity-80">
                    Learn More 
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section id="careers" className="py-16 bg-dark">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Join Our Team</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Be part of a team that's shaping the future of AI technology. We're always looking for passionate individuals who share our vision.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition duration-300">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{position.title}</h3>
                    <p className="text-gray-400">{position.location}</p>
                  </div>
                  <span className="px-3 py-1 bg-primary bg-opacity-10 text-primary rounded-full text-sm">
                    {position.type}
                  </span>
                </div>
                <p className="text-gray-400 mb-4">{position.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold text-white mb-2">Requirements:</h4>
                  <ul className="list-disc list-inside text-gray-400 space-y-1">
                    {position.requirements.map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                  </ul>
                </div>
                <button className="w-full btn-primary">
                  Apply Now
                </button>
              </div>
            ))}
          </div>

          <div className="bg-gray-800 rounded-lg p-8 mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Why Join Meghplat?</h3>
            <div className="grid md:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="inline-block p-3 bg-primary bg-opacity-10 rounded-full mb-4">
                    {benefit.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">{benefit.title}</h4>
                  <p className="text-gray-400">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Don't see the right role?</h3>
            <p className="text-gray-400 mb-6">
              We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <button className="btn-primary">
              Send Your Resume
            </button>
          </div>
        </div>
      </section>



     {/* Team Section */}
      <section id="team" className="py-20 bg-dark">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Meet the experts and innovators who are driving the future of AI technology
              and helping businesses transform through digital innovation.
            </p>
          </div>


          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {teamMembers.map((member, index) => (
                    <div 
                      key={index} 
                      className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition duration-300"
                    >
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-64 object-cover"
                      />
                      <div className="p-6">
                        <div className="flex items-center justify-between">
                          <h3 className="text-xl font-bold text-white">{member.name}</h3>
                          
                          <Linkedin className="w-7 h-7 text-blue-600" />
                        </div>
                        <p className="text-primary font-semibold mb-3">{member.role}</p>
                        <p className="text-gray-400 mb-4">{member.description}</p>
                        
                        <a 
                          href="#" 
                          className="inline-flex items-center text-gray-400 hover:text-primary transition-colors"
                        >
                          
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-dark">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-white mb-16">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <form className="space-y-6">
                <div>
                  <label className="block text-white mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-primary text-white" />
                </div>
                <div>
                  <label className="block text-white mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-primary text-white" />
                </div>
                <div>
                  <label className="block text-white mb-2">Message</label>
                  <textarea className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-primary text-white" rows={4}></textarea>
                </div>
                <button className="w-full btn-primary">
                  Send Message
                </button>
              </form>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Location</h3>
                <p className="flex items-center text-gray-400">
                  <MapPin className="w-5 h-5 mr-2 text-primary" />
                  123 Tech Street, Silicon Valley, CA 94025
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Contact Info</h3>
                <div className="space-y-2">
                  <p className="flex items-center text-gray-400">
                    <Mail className="w-5 h-5 mr-2 text-primary" />
                    contact@meghplat.com
                  </p>
                  <p className="flex items-center text-gray-400">
                    <Phone className="w-5 h-5 mr-2 text-primary" />
                    +1 (555) 123-4567
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-primary">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-primary">
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-primary">
                    <Github className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}

       <footer className="bg-[#020617] text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-4 gap-12">
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
                <li><a href="#home" className="text-gray-400 hover:text-primary transition-colors">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-primary transition-colors">About</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors">Services</a></li>
                <li><a href="#case-studies" className="text-gray-400 hover:text-primary transition-colors">Case Studies</a></li>
                <li><a href="#careers" className="text-gray-400 hover:text-primary transition-colors">Careers</a></li>
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
            © 2025 Meghplat. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

