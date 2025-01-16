import {  Menu, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';

const Header = () => {
  const router = useRouter();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleNavigation = (item) => {
    router.push(item === "Home" ? "/" : `/${item.toLowerCase()}`);
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className={`backdrop-blur-md text-white bg-gradient-to-r from-black/90 via-blue-900/80 to-purple-900/90 shadow-lg fixed w-full z-50 transition-all duration-500 ${
        scrollPosition > 50 ? 'h-20' : 'h-24'
      }`}>
        <div className="max-w-7xl mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
         
            <div className="flex-shrink-0">
              <div className="relative p-2 cursor-pointer" onClick={()=>router.push('/')} >
                <img 
                  src='/logo.png' 
                  alt="Logo"
                  className="h-[100px] w-[280px] md:h-[100px] md:w-[300px] object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] transition-all duration-300"
                />
              </div>
            </div>

            <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center space-x-12">
              {['Home', 'About', 'Contact'].map((item) => (
                <h1
                  key={item}
                  onClick={() => handleNavigation(item)}
                  className="hover:text-blue-600 transition-colors text-lg font-medium relative group cursor-pointer"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </h1>
              ))}
            </div>

            {/* Mobile Menu Button - Right aligned */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 focus:outline-none"
              >
                {isMenuOpen ? (
                  <X className="h-8 w-8" />
                ) : (
                  <Menu className="h-8 w-8" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
    
          <div className="absolute inset-0 bg-black/95" />
          

          <div className="relative h-full">
            <div className="flex flex-col items-center justify-center h-full space-y-8 pt-20">
              {['Home', 'About', 'Contact'].map((item) => (
                <h1
                  key={item}
                  onClick={() => handleNavigation(item)}
                  className="text-white text-3xl font-medium hover:text-blue-400 transition-colors cursor-pointer"
                >
                  {item}
                </h1>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;