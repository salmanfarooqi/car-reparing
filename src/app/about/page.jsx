'use client'
import React from 'react';
import { Shield, Star, Tool, Users, SparkleIcon, MessageCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AboutPage = () => {
  const features = [
    {
      icon: Shield,
      title: 'Expert Craftsmanship',
      description: 'Our team brings decades of combined experience in automotive customization and repair, ensuring your vehicle receives the highest quality care.'
    },
    {
      icon: Star,
      title: 'Premium Service',
      description: 'We treat every vehicle as if it were our own, providing meticulous attention to detail and exceptional customer service throughout the process.'
    },
    {
      icon: Tool,
      title: 'Advanced Technology',
      description: 'Using state-of-the-art equipment and techniques, we deliver cutting-edge solutions for all your automotive transformation needs.'
    },
    {
      icon: Users,
      title: 'Customer Focused',
      description: 'Your satisfaction is our priority. We work closely with you to understand your vision and bring it to life.'
    }
  ];

  const achievements = [
    {
      number: '15+',
      title: 'Years Experience',
      description: 'Serving the Nottingham community since 2009'
    },
    {
      number: '5000+',
      title: 'Vehicles Transformed',
      description: 'Successfully completed projects'
    },
    {
      number: '98%',
      title: 'Customer Satisfaction',
      description: 'Based on post-service surveys'
    },
    {
      number: '25+',
      title: 'Expert Staff',
      description: 'Certified professionals'
    }
  ];


  const handleWhatsAppClick = () => {
   
    const phoneNumber = '+447490981676'.replace(/\s+/g, '');
   
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hi,%20I%20would%20like%20to%20know%20more%20about%20your%20services`;
    window.open(whatsappUrl, '_blank');
  };
  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-black">
      <Header />

      <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={handleWhatsAppClick}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 flex items-center gap-2"
        >
          <MessageCircle className="h-6 w-6" />
         
        </button>
      </div>
      <div className="relative pt-24 pb-20">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
        
     
        <div className="relative max-w-7xl mx-auto px-4 pt-16 pb-12 text-center">
          <h1 className=" text-4xl sm:text-5xl text-wrap md:text-6xl font-bold text-white mb-6">
            Transforming Dreams Into
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Automotive Reality
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            At Dada Auto, we combine passion, expertise, and innovation to deliver exceptional automotive customization services.
          </p>
        </div>

        {/* Features Grid */}
        <div className="max-w-7xl mx-auto px-4 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((item, index) => (
              <div
                key={index}
                className="border border-blue-600/20 bg-gray-900/50 p-6 rounded-2xl backdrop-blur-sm"
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  {/* <item.icon className="h-6 w-6 text-white" /> */}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Story Section */}
        <div className="max-w-7xl mx-auto px-4 mb-16">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-30"></div>
            <div className="relative bg-gray-900/50 border border-blue-600/20 p-8 rounded-2xl backdrop-blur-sm">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
                  <div className="space-y-4 text-gray-300">
                    <p>
                      Founded in 2009, Dada Auto has grown from a small garage to one of Nottingham's premier automotive customization centers. Our journey has been driven by a simple philosophy: every vehicle has the potential to be extraordinary.
                    </p>
                    <p>
                      We've built our reputation on delivering exceptional results, whether it's through our custom paint jobs, precision repairs, or innovative modifications. Our team's dedication to excellence has earned us the trust of car enthusiasts and everyday drivers alike.
                    </p>
                    <p>
                      Today, we continue to push the boundaries of what's possible in automotive transformation, combining traditional craftsmanship with cutting-edge technology to create truly unique results for our clients.
                    </p>
                  </div>
                </div>
                <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden">
                  <img
                    src=" https://png.pngtree.com/background/20230411/original/pngtree-sports-car-wild-light-effect-creative-background-picture-image_2387864.jpg"
                    alt="Workshop"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((item, index) => (
              <div
                key={index}
                className="border border-blue-600/20 bg-gray-900/50 p-6 rounded-2xl backdrop-blur-sm text-center"
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <SparkleIcon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{item.number}</h3>
                <h4 className="text-xl font-bold text-blue-400 mb-2">{item.title}</h4>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;