


'use client'
import React, { useState, useEffect } from 'react';
import { Car, Wrench, Shield, Settings, Clock, Phone, MapPin, Star, ChevronLeft, Award, Users, Calendar, ChevronRight, Camera, ArrowRight, MessageCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer'
import { useRouter } from 'next/navigation';
import Head from 'next/head';


const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentReview, setCurrentReview] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [activeTab, setActiveTab] = useState('vision');
  const router=useRouter()


  const reviews = [
    {
      name: "James Wilson",
      rating: 5,
      text: "Exceptional service! The paint job on my BMW exceeded expectations. The attention to detail was remarkable.",
      date: "March 2025",
      car: "BMW M3",
      image: "/review3.jpeg"
    },
    {
      name: "Sarah Parker",
      rating: 5,
      text: "Professional team and outstanding results. Best auto body shop in Nottingham! Their expertise is unmatched.",
      date: "February 2025",
      car: "Audi Q7",
      image: "/review1.jpeg"
    },
    {
      name: "Michael Thompson",
      rating: 5,
      text: "Fantastic collision repair work. My car looks brand new! The team was incredibly professional.",
      date: "January 2025",
      car: "Mercedes C-Class",
      image: "/review2.jpeg"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentReview((prev) => (prev + 1) % reviews.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovered]);

  const handleWhatsAppClick = () => {
   
    const phoneNumber = '+447490981676'.replace(/\s+/g, '');
   
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hi,%20I%20would%20like%20to%20know%20more%20about%20your%20services`;
    window.open(whatsappUrl, '_blank');
  };


  

  return (

<>




    <div className="relative min-h-screen flex flex-col bg-gradient-to-b from-gray-900 via-gray-800 to-black overflow-hidden">
   
    <Header />
    <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={handleWhatsAppClick}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 flex items-center gap-2"
        >
          <MessageCircle className="h-6 w-6" />
         
        </button>
      </div>
   
    <div className="pt-24 sm:pt-32 relative flex-grow flex items-center justify-center text-center">
   
      <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-blue-900/70 to-purple-900/90"></div>
      <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:50px_50px]"></div>
  
  
      <div className="relative z-10  mb-4 max-w-5xl px-6 sm:px-8 space-y-8">
  
        <h1
          className="text-5xl md:text-8xl font-extrabold text-white leading-tight tracking-tight animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >
          Transforming 
          <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Automotive Dreams
          </span>
          Into Reality
        </h1>
        <p
          className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up"
          style={{ animationDelay: '0.4s' }}
        >
          Where precision meets passion. Experience unmatched craftsmanship in auto body repair and custom modifications.
        </p>
  
 
        <div
          className="flex flex-wrap justify-center gap-6 animate-fade-in-up"
          style={{ animationDelay: '0.6s' }}
        >
          <h1 
          onClick={()=>router.push('/about')}
          
            className="inline-block cursor-pointer px-8 py-4 rounded-full font-semibold text-white transition-transform transform hover:scale-105 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
          >
           about us
          </h1>
          <h1
           onClick={()=>router.push('/contact')}
           
            className="inline-block cursor-pointer px-8 py-4 rounded-full font-semibold text-gray-300 hover:text-white border border-gray-500 hover:border-white transition duration-300"
          >
            contact us
          </h1>
        </div>
      </div>
    </div>
 
  


      {/* About Us Section */}
      <div className="py-24  relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 mt-16">
              <div>
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  About Dada Auto
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  With over 15 years of excellence, we've established ourselves as Nottingham's premier auto body repair specialists. Our commitment to quality and innovation drives everything we do.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-lg">
                    {/* <Tool className="h-6 w-6 text-white" /> */}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Expert Craftsmanship</h3>
                    <p className="text-gray-400">Our certified technicians bring decades of combined experience to every project.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-lg">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Quality Guarantee</h3>
                    <p className="text-gray-400">We stand behind our work with comprehensive warranties and guarantees.</p>
                  </div>
                </div>
              </div>

           
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative">
                <img 
                  src=" https://png.pngtree.com/background/20230411/original/pngtree-sports-car-wild-light-effect-creative-background-picture-image_2387864.jpg" 
                  alt="Workshop" 
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex items-center space-x-4 text-white">
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                      <Camera className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Take a Virtual Tour</h4>
                      <p className="text-sm text-gray-300">Explore our state-of-the-art facility</p>
                    </div>
                    <ArrowRight className="h-6 w-6 ml-auto" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> <div className="py-20 ">
         <div className="max-w-7xl mx-auto text-white px-4">
           <div className="text-center mb-16">
             <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Our Premium Services</h2>
             <p className="text-white max-w-2xl mx-auto">
               Comprehensive auto body services delivered with precision and care
             </p>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {[
              { title: 'Custom Paint', icon: Settings, description: 'Premium paint jobs with industry-leading materials' },
              { title: 'Frame Repair', icon: Wrench, description: 'Precision frame straightening and structural repairs' },
              { title: 'Collision Repair', icon: Car, description: 'Complete collision damage restoration' },
              { title: 'Custom Modifications', icon: Shield, description: 'Bespoke body modifications and enhancements' }
            ].map((service, index) => (
              <div
                key={index}
                className="  border border-blue-600 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="bg-blue-50 p-4 rounded-xl inline-block mb-6">
                  <service.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">{service.title}</h3>
                <p className="text-white">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Reviews Section */}
      <div className="py-20 text-white ">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Client Testimonials
            </h2>
            <p className="text-white">What our valued customers say about us</p>
          </div>
          <div className="relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <button 
              onClick={() => setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-10"
            >
              <ChevronLeft className="h-6 w-6 text-blue-600" />
            </button>
            <button 
              onClick={() => setCurrentReview((prev) => (prev + 1) % reviews.length)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-10"
            >
              <ChevronRight className="h-6 w-6 text-blue-600" />
            </button>
            <div className="relative overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentReview * 100}%)` }}
              >
                {reviews.map((review, index) => (
                  <div key={index} className="w-full text-white flex-shrink-0">
                    <div className=" border p-8 rounded-2xl shadow-lg max-w-3xl mx-auto transform transition-all duration-500 hover:shadow-xl">
                      <div className="flex items-center mb-6">
                        <img 
                          src={review.image}
                          alt={review.name}
                          className="w-16 h-16 rounded-full object-cover mr-4"
                        />
                        <div>
                          <h3 className="font-semibold text-lg">{review.name}</h3>
                          <p className="text-white">{review.car}</p>
                        </div>
                        <div className="ml-auto">
                          <div className="flex">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                            ))}
                          </div>
                          <p className="text-white text-sm text-right mt-1">{review.date}</p>
                        </div>
                      </div>
                      <p className="text-base text-white italic">"{review.text}"</p>
                      <div className="mt-6 pt-6 border-t border-gray-100">
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <span>Verified Customer</span>
                          <span>Service: Full Body Repair</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center mt-8 space-x-4">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentReview === index ? 'bg-gradient-to-r from-blue-600 to-purple-600 w-8' : 'bg-gray-300 w-2'
                  }`}
                  onClick={() => setCurrentReview(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
    </>
  );
};

export default HomePage;