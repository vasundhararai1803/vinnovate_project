import React, { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const Hero = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes swapcard-zoom {
        0% { transform: scale(0); opacity: 0; }
        8.33% { transform: scale(1); opacity: 1; }
        91.66% { transform: scale(1); opacity: 1; }
        100% { transform: scale(0); opacity: 0; }
      }
      @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
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
  const [activeFeature, setActiveFeature] = useState(0);
  const [progress, setProgress] = useState(0);
  const features = [
    {
      label: 'Email signatures',
      icon: (
        <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><rect x="4" y="8" width="24" height="4" rx="2" fill="currentColor"/><rect x="4" y="16" width="16" height="4" rx="2" fill="currentColor"/><rect x="4" y="24" width="8" height="4" rx="2" fill="currentColor"/></svg>
      ),
      image: '/f1.png',
      description: 'Deploy and manage email signatures across your organization.'
    },
    {
      label: 'Campaigns',
      icon: (
        <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><rect x="4" y="8" width="24" height="4" rx="2" fill="currentColor"/><rect x="4" y="16" width="24" height="4" rx="2" fill="currentColor"/></svg>
      ),
      image: '/f2.png',
      description: 'Use dynamic banners in your email signatures.'
    },
    {
      label: 'Business card',
      icon: (
        <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><rect x="4" y="8" width="24" height="16" rx="4" fill="currentColor"/><rect x="8" y="16" width="8" height="4" rx="2" fill="#fff"/></svg>
      ),
      image: '/f3.png',
      description: 'Give yourself business cards that are always up to date and ready to be shared.'
    },
    {
      label: 'Statistics',
      icon: (
        <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><path d="M8 24V16M16 24V8M24 24V20" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/></svg>
      ),
      image: '/f4.png',
      description: 'Analyze the impact of each campaign delivered via your email signatures.'
    }
  ];

  useEffect(() => {
    let start = Date.now();
    setProgress(0);
    const update = () => {
      const elapsed = Date.now() - start;
      setProgress(Math.min(1, elapsed / 10000));
      if (elapsed < 10000) {
        requestAnimationFrame(update);
      }
    };
    update();
    const timer = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % features.length);
      start = Date.now();
      setProgress(0);
      update();
    }, 10000);
    return () => clearInterval(timer);
  }, [features.length, activeFeature]);

  return (
    <div className="min-h-screen p-3">
      {/* Hero Section with Video Background */}
      <div className="relative overflow-hidden min-h-screen">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 rounded-3xl"
          src="/videoplayback.mp4"
        />
        {/* Content */}
        <div className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Native Solution Badge */}
            <div className="flex justify-center mb-12" style={{marginTop: '3rem'}}>
              <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <span className="text-sm text-gray-600 flex items-center space-x-4">
                  <span>Native solution for</span>
                  <span className="flex items-center space-x-1">
                    <img 
                      src="/microsoft365.png" 
                      alt="Microsoft" 
                      className="w-4 h-4"
                    />
                    <span className="font-medium">Microsoft 365</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <img 
                      src="/image.png" 
                      alt="Google" 
                      className="w-4 h-4"
                    />
                    <span className="font-medium">Google Workspace</span>
                  </span>
                </span>
              </div>
            </div>

            {/* Main Heading - 2 Lines */}
            <div className="text-center">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-800 mb-8 leading-tight flex flex-col items-center justify-center">
                <span className="block tracking-normal mb-6">Unleash the power of your email</span>
                <span className="block flex items-center justify-center gap-2 tracking-normal">
                  signatures
                  {/* Overlapping Gmail and Outlook Icons beside 'signatures' */}
                  <span className="relative flex items-center ml-4" style={{ height: '56px', width: '84px' }}>
                    <img
                      src="/gmail.png"
                      alt="Gmail"
                      className="absolute left-0 w-14 h-14 rounded-2xl shadow-lg border-2 border-white z-10 transition-transform duration-300 ease-in-out cursor-pointer object-cover hover:scale-125"
                      style={{ transform: 'rotate(-30deg)', transition: 'transform 0.3s' }}
                      onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.25) rotate(-20deg)'}
                      onMouseLeave={e => e.currentTarget.style.transform = 'rotate(-30deg)'}
                    />
                    <img
                      src="/outlook.png"
                      alt="Outlook"
                      className="absolute left-10 w-14 h-14 rounded-2xl shadow-lg border-2 border-white z-20 transition-transform duration-300 ease-in-out cursor-pointer object-cover hover:scale-125"
                      style={{ transform: 'rotate(30deg)', transition: 'transform 0.3s' }}
                      onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.25) rotate(20deg)'}
                      onMouseLeave={e => e.currentTarget.style.transform = 'rotate(30deg)'}
                    />
                  </span>
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
                Centralize, customize, and deploy email signatures for your teams with just a few clicks. Signitic enables you to align your brand image, run targeted campaigns, and monitor
                engagement.
              </p>

              

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-20">
                <button className="px-6 py-3 bg-white text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-all duration-200 border border-gray-200 shadow-lg hover:shadow-xl hover:rounded-full hover:opacity-80">
                  Book a Demo
                </button>
                <button className="group px-6 py-3 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-all duration-200 flex items-center space-x-2 shadow-lg hover:shadow-xl hover:rounded-full hover:opacity-80">
                  <ArrowUpRight className="arrow-fly-anim w-5 h-5 transition-all duration-500" />
                  <span>Create my email signature</span>
                </button>
              </div>

              {/* Companies Section */}
              <div className="text-center flex flex-col items-center">
                <div className="flex flex-row items-center justify-start gap-12 mb-12 w-full max-w-7xl mx-auto">
                  <div className="flex flex-col items-start">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 m-0 text-left">
                      <span className="block">+5000 companies use</span>
                      <span className="block">Signitic daily</span>
                    </h2>
                  </div>
                  {/* Animated PNG Images */}
                  <div className="flex flex-row items-center gap-28">
                    {['logo.png', 'twitch.png', 'wave.png', 'youtube.png', 'nike.png'].map((src, i) => (
                      <img
                        key={src}
                        src={`/${src}`}
                        alt={src.replace('.png', '')}
                        style={{
                          width: '5rem',
                          height: '5rem',
                          animationName: 'swapcard-zoom',
                          animationDuration: '6s',
                          animationTimingFunction: 'cubic-bezier(0.4,0,0.2,1)',
                          animationDelay: `${i * 0.08}s`,
                          animationIterationCount: 'infinite',
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* White Section Below */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 mt-16 tracking-tight" style={{ fontFamily: 'inherit' }}>
              The most trusted solution to standardize<br />
              your email signatures at scale
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'inherit' }}>
              Manage, deploy, and leverage each email signature as a powerful communication tool, all from a centralized platform with ease.
            </p>
          </div>

          {/* Features Buttons Section */}
          <div className="flex justify-center gap-8 my-12">
            {features.map((feature, idx) => (
              <button
                key={feature.label}
                onClick={() => setActiveFeature(idx)}
                className={`flex flex-col items-start px-10 py-3 rounded-2xl transition-all duration-200 focus:outline-none hover:opacity-80 ${activeFeature === idx ? 'bg-gradient-to-br from-pink-100 to-white shadow-lg' : ''}`}
                style={{ minWidth: '220px', maxWidth: '420px' }}
              >
                <span className={`mb-2 ${activeFeature === idx ? 'text-black' : 'text-gray-400'}`}>{feature.icon}</span>
                <span className={`text-lg font-semibold mb-2 ${activeFeature === idx ? 'text-black' : 'text-gray-400'}`}>{feature.label}</span>
                <span className={`text-base ${activeFeature === idx ? 'text-black' : 'text-gray-400'}`}>{feature.description}</span>
                {activeFeature === idx && (
                  <span className="block w-full h-1 mt-4 overflow-hidden relative">
                    <span
                      className="absolute left-0 top-0 h-full bg-pink-500 rounded-full"
                      style={{
                        width: `${progress * 100}%`,
                        transition: progress === 0 ? 'none' : 'width 0.1s linear',
                      }}
                    />
                  </span>
                )}
              </button>
            ))}
          </div>
          {/* Feature Image Section */}
          <div className="flex justify-center mb-25 px-8">
            <img
              src={features[activeFeature].image}
              alt={features[activeFeature].label}
              className="rounded-2xl w-full h-auto"
              style={{ minWidth: '1300px', maxWidth: '1500px', background: '#fff' }}
            />
          </div>
        </div>
      </div>

      {/* Add 100px gap before Leaderboard Marquee Section */}
      <div style={{ height: '100px' }} />


      {/* Leaderboard Marquee Section */}
      <div className="w-full flex justify-center items-center py-16 mb-12">
        <div className="w-full max-w-7xl bg-[#f3f4f6] rounded-3xl flex flex-col items-center justify-center px-6 sm:px-16 py-12">
          {/* Heading without border */}
          <h2 className="mb-10 text-5xl font-extrabold text-gray-900 text-center" style={{ fontFamily: 'inherit', letterSpacing: '-0.01em' }}>
            European leader 2025 by G2
          </h2>
          {/* Marquee badges section with gray background and edge fade */}
          <div className="relative w-full flex justify-center items-center overflow-hidden" style={{ background: '#f3f4f6' }}>
            {/* Edge fade overlays */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-32 z-20" style={{ background: 'linear-gradient(90deg, #f3f4f6 80%, rgba(243,244,246,0) 100%)' }} />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-32 z-20" style={{ background: 'linear-gradient(270deg, #f3f4f6 80%, rgba(243,244,246,0) 100%)' }} />
            {/* Marquee background images */}
            <div className="absolute left-0 top-1/2 w-full flex items-center -translate-y-1/2 z-0">
              <div className="flex animate-marquee space-x-8 opacity-60 z-0" style={{ animation: 'marquee 18s linear infinite' }}>
                {Array.from({ length: 6 }).map((_, i) => (
                  <img
                    key={`l2-${i}`}
                    src="/leader2.png"
                    alt="Leader 2"
                    className={`h-40 w-auto inline-block ${i === 0 ? 'opacity-30' : i === 5 ? 'opacity-30' : ''}`}
                    style={{ minWidth: '200px', transition: 'opacity 0.3s' }}
                  />
                ))}
                {Array.from({ length: 6 }).map((_, i) => (
                  <img
                    key={`l3-${i}`}
                    src="/leader3.png"
                    alt="Leader 3"
                    className={`h-40 w-auto inline-block ${i === 0 ? 'opacity-30' : i === 5 ? 'opacity-30' : ''}`}
                    style={{ minWidth: '200px', transition: 'opacity 0.3s' }}
                  />
                ))}
              </div>
            </div>
            {/* Foreground leader1 image with higher z-index */}
            <div className="relative z-10 flex justify-center items-center">
              <img
                src="/leader1.png"
                alt="Leader 1"
                className="h-56 w-auto"
                style={{ minWidth: '300px', zIndex: 10 }}
              />
            </div>
          </div>
        </div>
      </div>

      

      {/* Integrated into your environment section */}
      <div className="w-full flex flex-col items-center justify-center py-20 bg-transparent">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-2" style={{ fontFamily: 'inherit' }}>
          Integrated into your environment
        </h2>
        <p className="text-sm text-gray-600 mb-10 max-w-2xl text-center" style={{ fontFamily: 'inherit' }}>
          Why complicate your life? Our solution integrates natively and easily into your organization in less than a minute!
        </p>
        <div className="flex flex-col md:flex-row gap-10 justify-center items-center w-full max-w-6xl mx-auto">
          
          {/* Microsoft 365 Card */}
          <div className="bg-[#f1ffff] rounded-3xl p-8 flex flex-col relative min-h-[630px] min-w-[700px] max-w-[900px] cursor-pointer">
            <div className="flex items-center mb-4 justify-between w-full">
              <span className="text-3xl font-extrabold text-gray-900 mr-2" style={{ fontFamily: 'inherit' }}>
                Microsoft 365
              </span>
              <ArrowUpRight className="arrow-fly-anim w-8 h-8 ml-auto cursor-pointer" />
            </div>
            <p className="text-base text-gray-700 mb-4">Integrate Signitic into your Microsoft 365 environment with our native integration for Microsoft.</p>
            <div className="flex items-center gap-2 mb-6 bg-white rounded-full px-4 py-2 shadow text-base font-medium border border-blue-100 w-fit">
              <img src="/microsoft365.png" alt="Outlook" className="w-5 h-5 mr-1" />
              <span className="text-blue-700">Outlook</span>
              <span className="inline-flex items-center px-2 py-1 bg-black text-white rounded-full text-xs font-medium ml-2">IOS</span>
              <span className="inline-flex items-center px-2 py-1 bg-white border border-gray-200 rounded-full text-xs font-medium text-green-700 ml-2">android</span>
            </div>
            {/* Outlook image aligned bottom right, only top-left rounded */}
            <div className="absolute bottom-0 right-0 flex justify-end items-end w-full h-full p-0 m-0">
              <img
                src="/outlook_screen.png"
                alt="Outlook Screen"
                className="rounded-tl-2xl w-[550px] h-auto transition-transform duration-300 hover:scale-110 cursor-pointer"
                style={{ borderRadius: '1.5rem 0 0 0' }}
              />
            </div>
          </div>
          {/* Google Workspace Card */}
          <div className="bg-[#FFE9F0] rounded-3xl p-8 flex flex-col items-start relative min-h-[630px] min-w-[700px] max-w-[900px] cursor-pointer">
            <div className="flex items-center mb-4 justify-between w-full">
              <span className="text-3xl font-extrabold text-gray-900 mr-2" style={{ fontFamily: 'inherit' }}>
                Google Workspace
              </span>
              <ArrowUpRight className="arrow-fly-anim w-8 h-8 ml-auto cursor-pointer" />
            </div>
            <p className="text-base text-gray-700 mb-4">Integrate Signitic into your Google Workspace environment with our native integration for Google.</p>
            <div className="flex items-center gap-2 mb-6 bg-white rounded-full px-4 py-2 shadow text-base font-medium border border-red-100 w-fit">
              <img src="/gmail.png" alt="Gmail" className="w-5 h-5 mr-1" />
              <span className="text-red-700">gmail</span>
              <span className="inline-flex items-center px-2 py-1 bg-black text-white rounded-full text-xs font-medium ml-2">IOS</span>
              <span className="inline-flex items-center px-2 py-1 bg-white border border-gray-200 rounded-full text-xs font-medium text-green-700 ml-2">android</span>
            </div>
            {/* Gmail image aligned bottom right, only top-left rounded */}
            <div className="absolute bottom-0 right-0 flex justify-end items-end w-full h-full p-0 m-0">
              <img
                src="/gmail_screen.png"
                alt="Gmail Screen"
                className="rounded-tl-2xl w-[550px] h-auto transition-transform duration-300 hover:scale-110 cursor-pointer"
                style={{ borderRadius: '1.5rem 0 0 0' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Discover all our integrations section */}
      <div className="w-full flex justify-center">
        <div className="bg-[#f6f6f6] rounded-3xl px-7 py-2 flex items-center cursor-pointer transition group w-full max-w-[1450px]">
          <span className="text-2xl font-bold mr-4 select-none flex items-center">
            Discover all our integrations
            <img src="discover.png" alt="Discover" className="w-80 h-20 ml-3" />
          </span>
          <span className="ml-auto text-3xl text-gray-400 group-hover:text-blue-500 transition">↗</span>
        </div>
      </div>

      {/* Add huge gap above Marquee Section at the bottom */}
      <div style={{ height: '10rem' }} />

      {/* Marquee Section at the bottom */}
      <div className="w-full overflow-hidden mb-12 py-6 bg-transparent">
        <div className="relative w-full h-32">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 whitespace-nowrap animate-marquee text-8xl font-extrabold flex items-center">
            <span className="bg-gradient-to-r from-pink-400 to-pink-300 text-transparent bg-clip-text mr-2">+5000 </span>
            <span className="text-black mr-8">undertakings</span>
            <span className="bg-gradient-to-r from-pink-400 to-pink-300 text-transparent bg-clip-text mr-2">+600k </span>
            <span className="text-black mr-8">users</span>
            <span className="bg-gradient-to-r from-pink-400 to-pink-300 text-transparent bg-clip-text mr-2">+100M </span>
            <span className="text-black mr-8">clicks</span>
            {/* Repeat for smooth loop */}
            <span className="bg-gradient-to-r from-pink-400 to-pink-300 text-transparent bg-clip-text mr-2">+5000</span>
            <span className="text-black mr-8">undertakings</span>
            <span className="bg-gradient-to-r from-pink-400 to-pink-300 text-transparent bg-clip-text mr-2">+600k</span>
            <span className="text-black mr-8">users</span>
            <span className="bg-gradient-to-r from-pink-400 to-pink-300 text-transparent bg-clip-text mr-2">+100M</span>
            <span className="text-black mr-8">clicks</span>
          </div>
        </div>
      </div>

      {/* Add huge gap below at the bottom */}
      <div style={{ height: '10rem' }} />

        {/* Security Section */}
      <div className="w-full bg-white py-24 px-4 flex flex-col mb-12 items-center justify-center">
        <div className="max-w-7xl w-full flex flex-col lg:flex-row gap-12 items-start justify-between mx-auto">
          {/* Left Side */}
          <div className="flex-1 flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8 leading-tight" style={{ fontFamily: 'inherit', letterSpacing: '-0.02em' }}>
              Your security is at the core of our priorities.
            </h2>
            <p className="text-base text-gray-500 mb-8 max-w-2xl" style={{ fontFamily: 'inherit' }}>
              Our solution complies with GDPR requirements for transparency and traceability. We are dedicated to providing a secure and trustworthy environment, fully aware of the critical importance of security for our customers.
            </p>
            <button className="bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold text-base shadow hover:bg-gray-800 hover:rounded-2xl transition-all during-300 mb-12 w-fit">
              Learn more about Signitic security
            </button>
            <div className="flex flex-col md:flex-row gap-8">
              {/* Microsoft Partner Card */}
              <div className="bg-[#181F2A] rounded-3xl p-8 flex flex-col min-w-[390px] max-w-[420px] text-white">
                <div className="flex items-center mb-4">
                  <img src="/microsoft.png" alt="Microsoft Partner" className="w-10 h-10 mr-3" />
                  <span className="text-xl font-bold">Microsoft <span className="font-normal">Partner</span></span>
                </div>
                <p className="text-sm text-gray-200">Signitic is a Microsoft Partner, which guarantees optimal integration with Microsoft 365 and Outlook, while ensuring reliability, performance and continuous innovation.</p>
              </div>
              {/* Google Partner Card */}
              <div className="bg-[#181F2A] rounded-3xl p-8 flex flex-col min-w-[390px] max-w-[420px] text-white">
                <div className="flex items-center mb-4">
                  <span className="text-xl font-bold"><span className="text-[#4285F4]">G</span><span className="text-[#EA4335]">o</span><span className="text-[#FBBC05]">o</span><span className="text-[#34A853]">g</span><span className="text-[#EA4335]">l</span><span className="text-[#4285F4]">e</span><span className="font-normal text-white">Partner</span></span>
                </div>
                <p className="text-sm text-gray-200">Signitic is a Google Partner, ensuring a smooth integration with Gmail and Google Workspace, guaranteeing performance, security and constant innovation.</p>
              </div>
            </div>
          </div>
          {/* Right Side - ISO Card */}
          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="bg-gradient-to-br from-[#0A3D91] to-[#1669F2] rounded-3xl p-12 flex flex-col items-center justify-center min-h-[482px] min-w-[420px] max-w-[480px] w-full text-white relative">
              <span className="absolute top-6 right-8 text-2xl">↗</span>
              <div className="flex flex-col items-center mb-8">
                <div className="border-4 border-white rounded-full w-32 h-32 flex items-center justify-center mb-4">
                  <div className="text-center">
                    <div className="text-xl font-bold">ISO 27001</div>
                    <div className="text-sm font-light">Certified</div>
                  </div>
                </div>
                <div className="text-2xl font-extrabold mt-2 mb-4">ISO 27001</div>
                <p className="text-base text-white text-center max-w-xs">Signitic is ISO 27001 certified, proof of our commitment to protecting data through rigorous processes and controlled security management.</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Text Reveal Section */}
      <TextRevealSection />

      {/* Add huge gap below at the bottom */}
      <div style={{ height: '10rem' }} />

      <div
        className="w-full flex flex-col items-center mb-12 justify-center pt-24 pb-0 px-0"
        style={{
          backgroundImage: "url('/bg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '2rem',
        }}
      >
        <div className="max-w-7xl w-full mx-auto flex flex-col items-center justify-center px-4">
          <h2 className="text-5xl sm:text-6xl font-extrabold text-gray-900 text-center mb-4 mt-0" style={{ fontFamily: 'inherit', letterSpacing: '-0.03em' }}>
            Ready to get started?
          </h2>
          <p className="text-lg text-gray-700 text-center mb-8 max-w-2xl" style={{ fontFamily: 'inherit' }}>
            Harmonize your email signatures in no time and unlock the full potential of the hundreds of emails sent daily!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button className="flex items-center px-8 py-4 bg-gray-900 text-white rounded-xl font-semibold text-lg shadow hover:bg-gray-800 transition-all duration-200 hover:rounded-full hover:opacity-80">
              <span className="mr-2">↗</span> Try for free
            </button>
            <button className="px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold text-lg shadow border border-gray-200 hover:bg-gray-50 transition-all duration-200 hover:rounded-full hover:opacity-80">
              Book a demo
            </button>
          </div>
        </div>
        {/* Footer Section */}
        <div className="w-full flex justify-center pb-12">
          <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row gap-8 md:gap-0 items-start md:items-stretch px-4">
            {/* Card Wrapper for Footer Columns */}
            <div className="w-full rounded-3xl bg-white/60 border border-white/70 p-10 flex flex-col md:flex-row gap-8 md:gap-0 items-start md:items-stretch">
              {/* Signitic Brand and Description */}
              <div className="flex-1 min-w-[220px] max-w-[320px] flex flex-col mb-8 md:mb-0">
                <span className="text-4xl font-extrabold text-[#FF5A99] mb-4" style={{ fontFamily: 'inherit' }}>signitic</span>
                <p className="text-base text-gray-700 mb-6">Turn every message into an opportunity for impactful branding and communication.</p>
                <button className="border border-gray-400 rounded-lg px-4 py-2 text-base font-medium flex items-center w-fit">
                  English <span className="ml-2">v</span>
                </button>
              </div>
              {/* Footer Columns */}
              <div className="flex-[2] grid grid-cols-2 md:grid-cols-4 gap-8 w-full">
                {/* Solutions */}
                <div>
                  <div className="font-bold text-lg mb-3">Solutions</div>
                  <ul className="space-y-2 text-base text-gray-800">
                    <li>For IT service</li>
                    <li>For marketing</li>
                    <li>For trade</li>
                  </ul>
                </div>
                {/* Integrations */}
                <div>
                  <div className="font-bold text-lg mb-3">Integrations</div>
                  <ul className="space-y-2 text-base text-gray-800">
                    <li>Google Workspace</li>
                    <li>Microsoft 365</li>
                    <li>Marketplace</li>
                    <li>Business card</li>
                  </ul>
                </div>
                {/* About */}
                <div>
                  <div className="font-bold text-lg mb-3">About</div>
                  <ul className="space-y-2 text-base text-gray-800">
                    <li>Positive</li>
                    <li>Pricing</li>
                    <li>Security</li>
                    <li>Our CSR commitments</li>
                    <li>Legal documents</li>
                  </ul>
                </div>
                {/* Resources */}
                <div>
                  <div className="font-bold text-lg mb-3">Resources</div>
                  <ul className="space-y-2 text-base text-gray-800">
                    <li>Lexicon</li>
                    <li>Calculate ROI</li>
                    <li>Guides</li>
                    <li>Customer cases</li>
                    <li>Comparatives</li>
                    <li>Alternatives</li>
                    <li>White papers</li>
                    <li>Become a partner</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
const revealText = [
  [
    'Do', 'you', 'send', 'emails', 'daily,', 'but', 'struggle', 'with', 'inconsistent',
    'signatures?'
  ],
  [
    'Signitic', 'helps', 'you', 'centralize', 'and', 'automate', 'your',
    <span key="email-signatures" style={{ background: 'linear-gradient(90deg, #FFB6A9, #F7C8E0, #B6E0FE, #FFD6E0)', WebkitBackgroundClip: 'text', color: 'transparent', fontWeight: 700 }}>email signatures</span>,
    ','
  ],
  [
    'turning', 'them', 'into', 'a', 'powerful',
    <span key="marketing-tool" style={{ background: 'linear-gradient(90deg, #FFB6A9, #F7C8E0, #B6E0FE, #FFD6E0)', WebkitBackgroundClip: 'text', color: 'transparent', fontWeight: 700 }}>marketing tool</span>
  ]
];

function TextRevealSection() {
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const [reveal, setReveal] = React.useState(0);

  React.useEffect(() => {
    function onScroll() {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      if (rect.top < windowHeight && rect.bottom > 0) {
        const visible = Math.min(1, Math.max(0, (windowHeight - rect.top) / (rect.height + windowHeight/2)));
        setReveal(visible);
      }
    }
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Flatten all words for global reveal
  const flatWords = revealText.flat();
  let globalWordIndex = 0;

  return (
    <div ref={sectionRef} style={{ padding: '6rem 0', background: '#fff' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto', textAlign: 'center' }}>
        {revealText.map((line, i) => (
          <div key={i} style={{ fontSize: '2.8rem', fontWeight: 700, marginBottom: i < 2 ? '1.5rem' : 0, lineHeight: 1.2, letterSpacing: '-0.01em', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
            {line.map((word, j) => {
              // Each word's opacity increases as reveal increases, staggered by global word index
              const wordReveal = Math.min(1, Math.max(0, reveal * (flatWords.length + 2) - globalWordIndex));
              const isGradient = typeof word !== 'string';
              const baseStyle = isGradient
                ? {
                    background: word.props.style.background,
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    fontWeight: word.props.style.fontWeight,
                  }
                : {
                    color: '#E5E4E2', // Tailwind gray-400
                    fontWeight: 700,
                  };
              const revealStyle = isGradient
                ? {
                    opacity: wordReveal,
                  }
                : {
                    color: `rgba(17,24,39,${wordReveal})`, // Tailwind gray-900 with opacity
                  };
              const style = {
                transition: 'opacity 0.1s, color 0.1s',
                ...baseStyle,
                ...(wordReveal > 0 ? revealStyle : {}),
              };
              const rendered = (
                <span key={j} style={style}>
                  {isGradient ? word.props.children : word}
                </span>
              );
              globalWordIndex++;
              return rendered;
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
