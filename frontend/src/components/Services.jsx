import { FaLaptopCode, FaPaintBrush, FaMobileAlt, FaCloud, FaChartLine, FaShoppingCart } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom websites and applications built with modern technologies for performance and scalability.",
      icon: <FaLaptopCode className="text-4xl text-gray-700 mx-auto mb-4 group-hover:animate-bounce" />
    },
    {
      title: "UI/UX Design",
      description: "User-focused designs that provide seamless and engaging digital experiences.",
      icon: <FaPaintBrush className="text-4xl text-gray-700 mx-auto mb-4 group-hover:animate-bounce" />
    },
    {
      title: "Mobile Apps",
      description: "High-quality native and cross-platform mobile applications for iOS and Android.",
      icon: <FaMobileAlt className="text-4xl text-gray-700 mx-auto mb-4 group-hover:animate-bounce" />
    },
    {
      title: "Cloud Solutions",
      description: "Reliable and scalable cloud infrastructure solutions tailored to your business needs.",
      icon: <FaCloud className="text-4xl text-gray-700 mx-auto mb-4 group-hover:animate-bounce" />
    },
    {
      title: "Digital Marketing",
      description: "Data-driven digital marketing strategies to expand your online presence and reach.",
      icon: <FaChartLine className="text-4xl text-gray-700 mx-auto mb-4 group-hover:animate-bounce" />
    },
    {
      title: "E-commerce",
      description: "Complete e-commerce solutions designed to grow and streamline your online business.",
      icon: <FaShoppingCart className="text-4xl text-gray-700 mx-auto mb-4 group-hover:animate-bounce" />
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-gray-700">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gray-700 mx-auto mb-8"></div>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            We provide tailored digital solutions that help businesses grow, innovate, and succeed in a competitive landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">{service.title}</h3>
              <p className="text-gray-600 text-center">{service.description}</p>
              <div className="flex justify-center">
                <button className="mt-6 text-gray-700 hover:text-black font-medium flex items-center transition-colors">
                  Learn more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
