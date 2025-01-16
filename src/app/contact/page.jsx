'use client'
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, MessageCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'general',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {

      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'general',
        message: ''
      });
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+447490981676',
      description: 'Monday to Saturday, 9am to 6pm'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'dadaautobodywork@gmail.com',
      description: 'We will respond within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'Unit 1E New Road Radford NG7 3FR Nottingham',
      description: 'Find us in the heart of Nottingham'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon-Sat: 9am - 6pm',
      description: 'Closed on Sundays'
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


        <div className="relative max-w-7xl mx-auto text-wrap px-4 pt-16 pb-12 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Let's Start Your
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Transformation Journey
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to elevate your vehicle's appearance? Get in touch with our expert team today.
          </p>
        </div>


        <div className="max-w-7xl mx-auto px-4 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="border border-blue-600/20 bg-gray-900/50 p-6 rounded-2xl backdrop-blur-sm"
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-blue-400 font-medium mb-1">{item.details}</p>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-30"></div>
              <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden">
                <Image
                  src="/map.png"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  className="rounded-2xl"
                ></Image>
              </div>
            </div>

            {/* Form */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-30"></div>
              <div className="relative bg-gray-900/50 border border-blue-600/20 p-8 rounded-2xl backdrop-blur-sm">
                <h2 className="text-3xl font-bold text-white mb-6">Send Us a Message</h2>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="bg-green-500/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <MessageSquare className="h-8 w-8 text-green-500" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Message Sent Successfully!</h3>
                    <p className="text-gray-300">We'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-300 mb-2">Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-300 mb-2">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-300 mb-2">Phone</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-300 mb-2">Service</label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                        >
                          <option value="general">General Inquiry</option>
                          <option value="paint">Custom Paint</option>
                          <option value="repair">Collision Repair</option>
                          <option value="modification">Custom Modification</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="4"
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold py-4 px-8 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center space-x-2"
                    >
                      {loading ? (
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      ) : (
                        <>
                          <Send className="h-5 w-5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;