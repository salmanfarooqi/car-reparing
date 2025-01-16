import { Car, Clock, MapPin, Phone } from 'lucide-react'
import { useRouter } from 'next/navigation';
import React from 'react'

const Footer = () => {


  const router = useRouter();

  const handleClick = (link) => {
    const targetPath = link === 'Home' ? '/' : `/${link.toLowerCase().replace(/ /g, '-')}`;
    console.log("called")
    router.push(targetPath);
  };
  return (
    <div>
      <footer className="bg-black/50 backdrop-blur-lg text-white py-16  relative">
        <div className="absolute inset-0 bg-gradient-to-b  from-transparent to-black/80"></div>
        <div className="w-full mx-auto  relative">
          <footer className=" text-white py-16">
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                <div>
                  <div className="flex items-center space-x-3 ">
                    <img src='/logo.png' className='w-[150px] h-[80px]' />
                  </div>
                  <p className="text-gray-400">
                    Premier auto body repair and custom paint services in Nottingham.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                  <ul className="space-y-2">
                    {['Home', 'About', 'Contact'].map(link => (
                      <li key={link}>
                        <button
                          onClick={()=>handleClick(link)}
                          className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer"
                        >
                          {link}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
                  <ul className="space-y-4">
                    <li className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-blue-400" />
                      <span className="text-gray-400">Unit 1E New Road Radford NG7 3FR Nottingham</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-blue-400" />
                      <span className="text-gray-400">+447853669254</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-blue-400" />
                      <span className="text-gray-400">Mon-Fri: 8:00-18:00</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
                  <p className="text-gray-400 mb-4">Subscribe for updates and special offers</p>
                  <div className="flex">
                    <input
                      type="email"
                      placeholder="Your email"
                      className="bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button className="bg-blue-600 px-2 py-2 rounded-r-lg hover:bg-blue-700 transition-colors">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                <p>© 2025 Dada Auto Bodywork. All rights reserved.</p>
              </div>
            </div>
          </footer>

        </div>
      </footer>
    </div>
  )
}

export default Footer