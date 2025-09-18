import { FaMobileAlt, FaBolt, FaLock, FaSearch, FaSlidersH, FaHeadset } from 'react-icons/fa';

const Features = () => {
  const features = [
    { title: "Responsive Design", description: "Perfectly adapted for all devices from desktop to mobile.", icon: <FaMobileAlt className="text-4xl text-black-600 mb-4 mx-auto" /> },
    { title: "Fast Performance", description: "Optimized for speed and smooth user experience.", icon: <FaBolt className="text-4xl text-black-600 mb-4 mx-auto" /> },
    { title: "Secure & Reliable", description: "Built with security best practices and reliable infrastructure.", icon: <FaLock className="text-4xl text-black-600 mb-4 mx-auto" /> },
    { title: "SEO Friendly", description: "Designed to rank well in search engine results.", icon: <FaSearch className="text-4xl text-black-600 mb-4 mx-auto" /> },
    { title: "Easy to Customize", description: "Flexible structure that's easy to modify and extend.", icon: <FaSlidersH className="text-4xl text-black-600 mb-4 mx-auto" /> },
    { title: "24/7 Support", description: "Round-the-clock support for all your needs.", icon: <FaHeadset className="text-4xl text-black-600 mb-4 mx-auto" /> }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Key Features</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Discover what makes our solutions stand out from the competition.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              {feature.icon}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-lg px-8 py-3 text-lg shadow-sm hover:shadow-md transition">
            Explore All Features
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
