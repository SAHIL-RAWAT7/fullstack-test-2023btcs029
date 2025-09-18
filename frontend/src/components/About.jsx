import { FaBriefcase, FaProjectDiagram, FaSmile, FaUsers } from 'react-icons/fa';

const About = () => {
  const stats = [
    { icon: <FaBriefcase className="text-4xl text-black-600 mx-auto" />, number: '5+', label: 'Years Experience' },
    { icon: <FaProjectDiagram className="text-4xl text-black-600 mx-auto" />, number: '200+', label: 'Projects Completed' },
    { icon: <FaSmile className="text-4xl text-black-600 mx-auto" />, number: '95%', label: 'Client Satisfaction' },
    { icon: <FaUsers className="text-4xl text-black-600 mx-auto" />, number: '50+', label: 'Team Members' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 px-2 sm:px-0">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">About Us</h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            We are a team of passionate professionals dedicated to delivering exceptional digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition transform hover:-translate-y-1 duration-300"
            >
              {stat.icon}
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2">{stat.number}</div>
              <div className="mt-1 text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Our Story</h3>
            <p className="mt-4 text-gray-600 text-base sm:text-lg">
              Founded in 2018, we started as a small team with a big vision: to make quality digital 
              solutions accessible to businesses of all sizes. Today, we've grown into a full-service 
              digital agency serving clients across various industries.
            </p>
            <p className="mt-4 text-gray-600 text-base sm:text-lg">
              Our approach combines creative thinking with technical expertise to deliver solutions 
              that not only look great but also drive real business results.
            </p>
            <button className="mt-6 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-lg px-6 py-3 text-lg shadow-sm hover:shadow-md transition">
              Learn More About Us
            </button>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="w-full max-w-md sm:max-w-lg bg-gray-50 rounded-2xl shadow-lg p-4 sm:p-6">
              <div className="aspect-video bg-white rounded-xl flex items-center justify-center border border-gray-200">
                <span className="text-gray-700 text-lg sm:text-xl font-semibold">About Visual</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
