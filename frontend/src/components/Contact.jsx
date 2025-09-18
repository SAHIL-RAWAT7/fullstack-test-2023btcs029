import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { api } from '../services/api';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email address';
    if (formData.phone && !/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/[\s\-\(\)]/g, ''))) newErrors.phone = 'Invalid phone number';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      await api.submitContact(formData);
      toast.success("Thank you! We'll get back to you soon.");
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error(error);
      toast.error("Error sending message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-white">
      <ToastContainer position="top-right" autoClose={4000} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">
            Get In Touch
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions or want to discuss a project? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6 sm:mb-8">
              Contact Information
            </h3>
            <div className="space-y-5 sm:space-y-6">
              {[
                {
                  icon: <FaMapMarkerAlt className="w-6 h-6 text-gray-700" />,
                  title: "Address",
                  detail: <>123 Business Avenue, Suite 100<br />City, State 12345</>
                },
                {
                  icon: <FaPhoneAlt className="w-6 h-6 text-gray-700" />,
                  title: "Phone",
                  detail: "+1 (555) 123-4567"
                },
                {
                  icon: <FaEnvelope className="w-6 h-6 text-gray-700" />,
                  title: "Email",
                  detail: "hello@company.com"
                }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start">
                  <div className="bg-gray-100 p-3 rounded-lg mr-4 shadow-sm flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{item.title}</h4>
                    <p className="text-gray-600 text-sm sm:text-base">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 sm:mt-10">
              <h4 className="font-medium text-gray-900 mb-2">Business Hours</h4>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Monday - Friday: 9:00 AM - 6:00 PM<br />
                Saturday: 10:00 AM - 4:00 PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              {[
                { label: 'Full Name', name: 'name', type: 'text', required: true },
                { label: 'Email Address', name: 'email', type: 'email', required: true },
                { label: 'Phone Number', name: 'phone', type: 'tel', required: false },
              ].map((field, idx) => (
                <div key={idx}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {field.label} {field.required && '*'}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    placeholder={field.label}
                    className={`w-full px-4 py-2.5 sm:py-3 border rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent 
                      ${errors[field.name] ? 'border-red-500' : 'border-gray-300'} 
                      transition text-sm sm:text-base`}
                  />
                  {errors[field.name] && <p className="mt-1 text-sm text-red-600">{errors[field.name]}</p>}
                </div>
              ))}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  className={`w-full px-4 py-2.5 sm:py-3 border rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent 
                    ${errors.message ? 'border-red-500' : 'border-gray-300'} 
                    transition text-sm sm:text-base`}
                ></textarea>
                {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-lg px-5 py-2.5 sm:py-3 text-sm sm:text-lg 
                  disabled:opacity-50 disabled:cursor-not-allowed transition-shadow shadow-sm hover:shadow-md"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
