import { useState, useEffect } from 'react';
import { FaBriefcase, FaProjectDiagram, FaSmile, FaUsers } from 'react-icons/fa';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { icon: <FaBriefcase className="text-4xl text-gray-800 mx-auto animate-bounce" />, number: '5+', label: 'Years Experience' },
    { icon: <FaProjectDiagram className="text-4xl text-gray-800 mx-auto animate-bounce [animation-delay:200ms]" />, number: '200+', label: 'Projects Completed' },
    { icon: <FaSmile className="text-4xl text-gray-800 mx-auto animate-bounce [animation-delay:400ms]" />, number: '95%', label: 'Client Satisfaction' },
    { icon: <FaUsers className="text-4xl text-gray-800 mx-auto animate-bounce [animation-delay:600ms]" />, number: '50+', label: 'Team Members' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16 px-2 sm:px-0">
          <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-6">
            About <span className="text-black">Us</span>
          </h2>
          <div className="w-24 h-1 bg-gray-800 mx-auto mb-8"></div>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            We are a team of passionate professionals dedicated to delivering exceptional digital solutions.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center p-8 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center p-3 bg-gray-100 rounded-full mb-4 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl sm:text-4xl font-semibold text-gray-900 mt-2">{stat.number}</div>
              <div className="mt-2 text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center px-4 sm:px-6 lg:px-12">
  {/* Text Content */}
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 mb-4 sm:mb-6">
                Our <span className="text-black">Story</span>
              </h3>
              <p className="mt-2 sm:mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">
                Founded in 2018, we started as a small team with a big vision: to make quality digital 
                solutions accessible to businesses of all sizes. Today, we've grown into a full-service 
                digital agency serving clients across various industries.
              </p>
              <p className="mt-3 sm:mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">
                Our approach combines creative thinking with technical expertise to deliver solutions 
                that not only look great but also drive real business results.
              </p>
              <button className="mt-6 sm:mt-8 bg-gray-900 hover:bg-black text-white font-medium rounded-xl px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
                Learn More About Us
              </button>
            </div>

            {/* Illustration */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative w-full max-w-xs sm:max-w-md lg:max-w-lg">
                <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-gray-100 to-white flex items-center justify-center p-6 sm:p-8">
                    <svg viewBox="0 0 800 400" className="w-full h-full">
                      <defs>
                        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style={{ stopColor: '#6B7280', stopOpacity: 1 }} />
                          <stop offset="100%" style={{ stopColor: '#111827', stopOpacity: 1 }} />
                        </linearGradient>
                      </defs>

                      {/* Office buildings */}
                      <rect x="100" y="150" width="50" height="150" fill="url(#grad1)" opacity="0.7" />
                      <rect x="170" y="100" width="60" height="200" fill="url(#grad1)" opacity="0.8" />
                      <rect x="250" y="120" width="70" height="180" fill="url(#grad1)" opacity="0.9" />
                      <rect x="340" y="80" width="80" height="220" fill="url(#grad1)" />
                      <rect x="440" y="140" width="60" height="160" fill="url(#grad1)" opacity="0.6" />
                      <rect x="520" y="160" width="50" height="140" fill="url(#grad1)" opacity="0.5" />

                      {/* Windows */}
                      <rect x="115" y="170" width="20" height="20" fill="#FFFFFF" opacity="0.7" />
                      <rect x="190" y="120" width="20" height="20" fill="#FFFFFF" opacity="0.7" />
                      <rect x="270" y="140" width="25" height="25" fill="#FFFFFF" opacity="0.7" />
                      <rect x="360" y="100" width="30" height="30" fill="#FFFFFF" opacity="0.7" />
                      <rect x="455" y="160" width="20" height="20" fill="#FFFFFF" opacity="0.7" />
                      <rect x="535" y="180" width="15" height="15" fill="#FFFFFF" opacity="0.7" />

                      {/* Accent Circle */}
                      <circle cx="650" cy="100" r="25" fill="#9CA3AF" opacity="0.6" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

      </div>
    </section>
  );
};

export default About;
