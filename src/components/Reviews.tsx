import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'John Smith',
    role: 'Software Engineer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
    review: 'The AI course exceeded my expectations. The practical projects really helped cement my understanding.',
    rating: 5
  },
  {
    name: 'Emily Chen',
    role: 'Data Analyst',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400',
    review: 'Excellent curriculum and supportive instructors. I landed a new job right after completing the course.',
    rating: 5
  },
  {
    name: 'Michael Brown',
    role: 'Product Manager',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
    review: 'The hands-on approach to learning made complex concepts easy to understand.',
    rating: 4
  }
];

function Reviews() {
  return (
    <section className="py-20 bg-dark">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-16">Student Reviews</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <img 
                  src={review.image} 
                  alt={review.name} 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold text-white">{review.name}</h3>
                  <p className="text-gray-400">{review.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-400">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;