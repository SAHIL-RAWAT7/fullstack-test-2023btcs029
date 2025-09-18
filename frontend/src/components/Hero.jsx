import React from 'react';

const Hero = () => {
  return (
    <section className="pt-28 sm:pt-32 pb-16 sm:pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">
        
        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            Transform Your Digital Experience
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0">
            Discover innovative solutions that empower your business to thrive in the digital era. Our platform delivers exceptional results with a focus on simplicity and efficiency.
          </p>
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <a
              href="#contact"
              className="bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-lg px-6 sm:px-8 py-3 text-base sm:text-lg text-center transition-all shadow-sm hover:shadow-md"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Visual Section */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="bg-gray-50 rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 w-full max-w-md sm:max-w-lg">
            <div className="aspect-video bg-white rounded-xl flex items-center justify-center border border-gray-200">
              <span className="text-gray-700 text-xl sm:text-2xl md:text-3xl font-semibold">
                Hero Visual
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
