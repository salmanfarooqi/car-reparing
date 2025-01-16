'use client'
import React, { useState, useEffect } from 'react';
import { Car, X, Search, ChevronRight } from 'lucide-react';
import Header from '@/components/Header';

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  
  // Intersection Observer for animations
  useEffect(() => {
    setIsVisible(true);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const galleryItems = [
    {
      id: 1,
      category: 'Paint Jobs',
      title: 'Custom Pearl White BMW',
      description: 'Complete respray with premium pearl finish',
      image: "https://png.pngtree.com/background/20230411/original/pngtree-sports-car-wild-light-effect-creative-background-picture-image_2387864.jpg",
      tags: ['Custom Paint', 'Luxury', 'BMW']
    },
    {
      id: 2,
      category: 'Restoration',
      title: 'Classic Mercedes Restoration',
      description: 'Full body restoration and paint correction',
      image: "https://png.pngtree.com/background/20230411/original/pngtree-sports-car-wild-light-effect-creative-background-picture-image_2387864.jpg",
      tags: ['Restoration', 'Classic', 'Mercedes']
    },
    {
      id: 3,
      category: 'Collision Repair',
      title: 'Audi A4 Repair',
      description: 'Front-end collision repair and paint match',
      image: "https://png.pngtree.com/background/20230411/original/pngtree-sports-car-wild-light-effect-creative-background-picture-image_2387864.jpg",
      tags: ['Collision', 'Paint Match', 'Audi']
    },
    {
      id: 4,
      category: 'Custom Work',
      title: 'Modified Range Rover',
      description: 'Custom body kit installation and paint',
      image: 'https://png.pngtree.com/background/20230411/original/pngtree-sports-car-wild-light-effect-creative-background-picture-image_2387864.jpg',
      tags: ['Custom Work', 'Body Kit', 'Range Rover']
    },
    {
      id: 5,
      category: 'Paint Jobs',
      title: 'Metallic Blue Porsche',
      description: 'Premium metallic paint application',
      image: 'https://png.pngtree.com/background/20230411/original/pngtree-sports-car-wild-light-effect-creative-background-picture-image_2387864.jpg',
      tags: ['Custom Paint', 'Metallic', 'Porsche']
    },
    {
      id: 6,
      category: 'Restoration',
      title: 'Vintage Jaguar E-Type',
      description: 'Complete body restoration project',
      image: '/api/placeholder/600/400',
      tags: ['Restoration', 'Vintage', 'Jaguar']
    }
  ];

  const categories = ['All', ...new Set(galleryItems.map(item => item.category))];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Hero Section */}
      <Header/>
      <div className="relative py-20  overflow-hidden">
        {/* <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-blue-900/80 to-purple-900/90"></div> */}
        {/* <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div> */}
      
      </div>

      {/* Category Filter */}
      <div className="sticky top-1 z-30 bg-black/80 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full whitespace-nowrap transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative rounded-xl overflow-hidden cursor-pointer animate-on-scroll"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[400px] object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 p-6 flex flex-col justify-end transform transition-transform duration-300">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-sm px-3 py-1 rounded-full bg-blue-600/80 text-white backdrop-blur-sm">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, index) => (
                      <span key={index} className="text-xs px-2 py-1 rounded-full bg-white/10 text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="relative max-w-5xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="relative rounded-xl overflow-hidden">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="space-y-4">
                  <span className="px-3 py-1 rounded-full bg-blue-600/80 text-white text-sm">
                    {selectedImage.category}
                  </span>
                  <h3 className="text-3xl font-bold text-white">{selectedImage.title}</h3>
                  <p className="text-gray-300">{selectedImage.description}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {selectedImage.tags.map((tag, index) => (
                      <span key={index} className="text-xs px-2 py-1 rounded-full bg-white/10 text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;