const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const api = {
  // Contact form submission
  submitContact: async (formData) => {
    const response = await fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    
    if (!response.ok) {
      throw new Error('Failed to submit contact form');
    }
    
    return response.json();
  },
  
  // Fetch testimonials
  getTestimonials: async () => {
    const response = await fetch(`${API_BASE_URL}/testimonials`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch testimonials');
    }
    
    return response.json();
  },
  
  // Fetch pricing plans
  getPricing: async () => {
    const response = await fetch(`${API_BASE_URL}/pricing`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch pricing plans');
    }
    
    return response.json();
  },
  
  // Fetch FAQs
  getFAQs: async () => {
    const response = await fetch(`${API_BASE_URL}/faqs`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch FAQs');
    }
    
    return response.json();
  }
};