import React from 'react';

const blogPosts = [
  {
    title: 'The Future of AI in Business',
    excerpt: 'Explore how artificial intelligence is transforming modern business operations...',
    date: 'March 15, 2024',
    category: 'Artificial Intelligence',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=2070'
  },
  {
    title: 'Digital Marketing Trends 2024',
    excerpt: 'Stay ahead of the curve with these emerging digital marketing strategies...',
    date: 'March 12, 2024',
    category: 'Digital Marketing',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2070'
  },
  {
    title: 'Data Science Best Practices',
    excerpt: 'Learn the essential practices for successful data science projects...',
    date: 'March 10, 2024',
    category: 'Data Science',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070'
  }
];

function BlogPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-white mb-12 text-center">Blog</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-primary text-sm">{post.category}</span>
                  <span className="mx-2 text-gray-500">•</span>
                  <span className="text-gray-400 text-sm">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{post.title}</h3>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <button className="text-primary hover:text-primary-dark transition duration-300">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogPage;