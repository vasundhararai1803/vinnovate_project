import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes arrow-fly-exit-enter {
        0% { transform: translate(0, 0) scale(1); opacity: 1; }
        40% { transform: translate(18px, -18px) scale(0.7); opacity: 0; }
        41% { transform: translate(-18px, 18px) scale(0.7); opacity: 0; }
        100% { transform: translate(0, 0) scale(1); opacity: 1; }
      }
      .arrow-fly-anim:hover {
        animation: arrow-fly-exit-enter 1.5s cubic-bezier(.4,0,.2,1);
      }
    `;
    document.head.appendChild(style);
    return () => { document.head.removeChild(style); };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'} pt-8`} style={{ paddingTop: '5px' }}>
      <div className="max-w-screen-2xl mx-6 mt-5 px-12"> 
        <div className="bg-white rounded-2xl px-12 py-2 flex items-center justify-between">
          {/* Left: Logo and Nav Links */}
          <div className="flex items-center space-x-10">
            {/* Logo */}
            <h1 className="text-2xl font-bold cursor-pointer hover:scale-95 transition-transform duration-200" style={{ color: '#FF6B6B' }}>signitic</h1>
            {/* Nav Links */}
            <div className="flex items-center space-x-6 text-base font-medium text-gray-900">
              <div className="flex items-center space-x-1 cursor-pointer hover:text-gray-700">Features <span className="ml-1">ᘁ</span></div>
              <div className="flex items-center space-x-1 cursor-pointer hover:text-gray-700">Solutions <span className="ml-1">ᘁ</span></div>
              <div className="flex items-center space-x-1 cursor-pointer hover:text-gray-700">Resources <span className="ml-1">ᘁ</span></div>
              <div className="cursor-pointer hover:text-gray-700">Pricing</div>
            </div>
          </div>
          {/* Right: Buttons */}
          <div className="flex items-center space-x-4">
            <div className="text-gray-900 font-medium cursor-pointer hover:text-gray-700">Login</div>
            <button className="px-6 py-2 border border-gray-300 bg-white text-gray-900 rounded-xl font-medium hover:bg-gray-50 hover:rounded-2xl transition-all duration-300">Schedule a call</button>
            <button className="flex items-center px-6 py-2 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 hover:rounded-2xl transition-all duration-300 space-x-2">
              <ArrowUpRight className="arrow-fly-anim w-4 h-4" />
              <span>Create my email signature</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;