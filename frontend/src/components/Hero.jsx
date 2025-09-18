import React from 'react';

const Hero = () => {
  return (
    <section className="pt-24 sm:pt-28 pb-16 sm:pb-20 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">
        
        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-gray-900 leading-tight animate-pulse">
            Transform Your <span className="text-gray-700">Digital Experience</span>
          </h1>
          <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0">
            Discover innovative solutions that empower your business to thrive in the digital era. 
            Our platform delivers exceptional results with a focus on simplicity and efficiency.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <a
              href="#contact"
              className="bg-gray-900 hover:bg-black text-white font-medium rounded-xl px-8 py-4 text-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              Get Started
            </a>
            <a
              href="#demo"
              className="border-2 border-gray-400 hover:border-gray-900 text-gray-900 font-medium rounded-xl px-8 py-4 text-lg transition-all duration-300"
            >
              Watch Demo
            </a>
          </div>
        </div>

        {/* Visual Section */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-lg">
            <svg viewBox="0 0 800 600" className="w-full h-auto">
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#4B5563', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#111827', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              
              {/* Background elements */}
              <circle cx="400" cy="300" r="280" fill="url(#grad1)" opacity="0.05" />
              <circle cx="100" cy="100" r="60" fill="url(#grad1)" opacity="0.08" />
              <circle cx="700" cy="500" r="80" fill="url(#grad1)" opacity="0.08" />
              
              {/* Main illustration */}
              <rect x="250" y="150" width="300" height="250" rx="20" fill="white" stroke="url(#grad1)" strokeWidth="4" />
              
              {/* Screen content */}
              <circle cx="350" cy="220" r="30" fill="#6B7280" opacity="0.2" />
              <circle cx="450" cy="220" r="30" fill="#6B7280" opacity="0.4" />
              <circle cx="550" cy="220" r="30" fill="#6B7280" opacity="0.6" />
              
              <rect x="300" y="270" width="200" height="10" rx="5" fill="#6B7280" opacity="0.4" />
              <rect x="280" y="290" width="240" height="10" rx="5" fill="#6B7280" opacity="0.6" />
              <rect x="260" y="310" width="280" height="10" rx="5" fill="#6B7280" opacity="0.8" />
              
              <rect x="320" y="340" width="80" height="40" rx="10" fill="#111827" />
              <rect x="420" y="340" width="80" height="40" rx="10" fill="white" stroke="#111827" strokeWidth="2" />
              
              {/* Floating elements */}
              <circle cx="200" cy="180" r="15" fill="#6B7280" opacity="0.5" />
              <circle cx="180" cy="400" r="20" fill="#6B7280" opacity="0.4" />
              <circle cx="600" cy="150" r="12" fill="#6B7280" opacity="0.5" />
              <circle cx="650" cy="380" r="18" fill="#6B7280" opacity="0.3" />
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
