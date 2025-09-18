import { FaMobileAlt, FaBolt, FaLock, FaSearch, FaSlidersH, FaHeadset } from 'react-icons/fa';

const Features = () => {
  const features = [
    { title: "Responsive Design", description: "Perfectly adapted for all devices from desktop to mobile.", icon: <FaMobileAlt className="text-4xl text-gray-700 mb-6 group-hover:text-black transition-colors duration-300" /> },
    { title: "Fast Performance", description: "Optimized for speed and smooth user experience.", icon: <FaBolt className="text-4xl text-gray-700 mb-6 group-hover:text-black transition-colors duration-300" /> },
    { title: "Secure & Reliable", description: "Built with security best practices and reliable infrastructure.", icon: <FaLock className="text-4xl text-gray-700 mb-6 group-hover:text-black transition-colors duration-300" /> },
    { title: "SEO Friendly", description: "Designed to rank well in search engine results.", icon: <FaSearch className="text-4xl text-gray-700 mb-6 group-hover:text-black transition-colors duration-300" /> },
    { title: "Easy to Customize", description: "Flexible structure that's easy to modify and extend.", icon: <FaSlidersH className="text-4xl text-gray-700 mb-6 group-hover:text-black transition-colors duration-300" /> },
    { title: "24/7 Support", description: "Round-the-clock support for all your needs.", icon: <FaHeadset className="text-4xl text-gray-700 mb-6 group-hover:text-black transition-colors duration-300" /> }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Key <span className="text-gray-700">Features</span>
          </h2>
          <div className="w-24 h-1 bg-gray-700 mx-auto mb-8"></div>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Discover what makes our solutions reliable, scalable, and built for long-term success.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {feature.icon}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-16 text-center">
          <button className="bg-gray-900 hover:bg-black text-white font-medium rounded-xl px-8 py-4 text-lg shadow-md hover:shadow-xl transition-transform duration-300 hover:-translate-y-1">
            Explore All Features
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
