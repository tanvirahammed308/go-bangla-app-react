import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const TestimonialCarousel = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Frequent Traveler',
      content: 'The luxury suite exceeded all expectations! Impeccable service, breathtaking views, and the most comfortable bed I\'ve ever slept in. Will definitely return!',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      rating: 5,
      stayDate: 'Stayed May 2023'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Business Traveler',
      content: 'Perfect location for my conference. The executive lounge access was a game-changer, and the 24/7 room service came in clutch after late meetings.',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      rating: 4,
      stayDate: 'Stayed March 2023'
    },
    {
      id: 3,
      name: 'The Rodriguez Family',
      role: 'Family Vacation',
      content: 'Our kids loved the pool and kids club! The connecting rooms were perfect for our family, and the staff went above and beyond to make our stay special.',
      avatar: 'https://randomuser.me/api/portraits/women/63.jpg',
      rating: 5,
      stayDate: 'Stayed July 2023'
    },
    {
      id: 4,
      name: 'Emily & David Wilson',
      role: 'Honeymooners',
      content: 'The romantic package with champagne and rose petals was absolutely magical. Private beach dinner was worth every penny - memories we\'ll cherish forever!',
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
      rating: 5,
      stayDate: 'Stayed June 2023'
    },
    {
      id: 5,
      name: 'James Peterson',
      role: 'Solo Traveler',
      content: 'As a single traveler, I felt completely safe and welcomed. The concierge gave excellent local dining recommendations. The spa services were world-class!',
      avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
      rating: 5,
      stayDate: 'Stayed April 2023'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-amber-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-16 sm:px-6 lg:px-8 ">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
        Guest <span className='text-[#5C98F2]'> Experiences</span> 
      </h2>
      <p className="text-lg text-center text-gray-600 mb-5">
        Hear what our valued guests say about their stay
      </p>
      
      <div className="relative bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
        <div className="relative h-[470px] md:h-96  ">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[currentIndex].id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 p-8 md:p-12 flex flex-col"
            >
              <div className="flex mb-4 justify-center">
                {renderStars(testimonials[currentIndex].rating)}
              </div>
              
              <blockquote className="text-xl md:text-2xl font-medium text-gray-700 flex-grow text-center italic">
                "{testimonials[currentIndex].content}"
              </blockquote>
              
              <div className="flex flex-col items-center ">
                <img 
                  src={testimonials[currentIndex].avatar} 
                  alt={testimonials[currentIndex].name} 
                  className="w-16 h-16 rounded-full object-cover mb-4 border-4 border-[#5C98F2]"
                />
                <div className="text-center">
                  <p className="text-lg font-semibold text-gray-900">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-[#5C98F2]">
                    {testimonials[currentIndex].role}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    {testimonials[currentIndex].stayDate}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Navigation */}
        <div className="absolute bottom-3 left-0 right-0 flex justify-center space-x-2 ">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentIndex === index ? 'bg-[#5C98F2]' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        
        <button
          onClick={prevTestimonial}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md text-[#5C98F2] hover:bg-amber-50 transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </button>
        
        <button
          onClick={nextTestimonial}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md text-[#5C98F2] hover:bg-amber-50 transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRightIcon className="w-6 h-6" />
        </button>
      </div>

      
    </div>
  );
};

export default TestimonialCarousel;