import { FaLaptopCode, FaPaintBrush, FaMobileAlt, FaCloud, FaChartLine, FaShoppingCart } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies for optimal performance.",
      icon: <FaLaptopCode className="text-4xl text-black-600 mx-auto mb-4" />
    },
    {
      title: "UI/UX Design",
      description: "User-centered designs that create seamless and engaging digital experiences.",
      icon: <FaPaintBrush className="text-4xl text-black-600 mx-auto mb-4" />
    },
    {
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android devices.",
      icon: <FaMobileAlt className="text-4xl text-black-600 mx-auto mb-4" />
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment solutions for your applications.",
      icon: <FaCloud className="text-4xl text-black-600 mx-auto mb-4" />
    },
    {
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to grow your online presence.",
      icon: <FaChartLine className="text-4xl text-black-600 mx-auto mb-4" />
    },
    {
      title: "E-commerce",
      description: "Complete e-commerce solutions tailored to your business needs.",
      icon: <FaShoppingCart className="text-4xl text-black-600 mx-auto mb-4" />
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Services</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of digital services to help your business succeed.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {service.icon}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              <button className="mt-6 text-blue-600 hover:text-blue-700 font-medium flex items-center transition-colors">
                Learn more
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
