import React, { useState } from 'react';
import { ArrowRight, Check, Star, Users, TrendingUp, HeartHandshake } from 'lucide-react';

const FranchiseInquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    investment: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Franchise Inquiry Submitted:', formData);
    alert('Thank you for your inquiry! We will contact you soon.');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl shadow-lg">
      <div className="text-center space-y-2">
        <h2 className="text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Begin Your Success Story
        </h2>
        <p className="text-gray-600">Join our network of successful entrepreneurs</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            required
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            required
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            required
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            required
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">Investment Range</label>
        <input
          type="text"
          name="investment"
          value={formData.investment}
          onChange={handleChange}
          className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2 group"
      >
        <span>Submit Your Application</span>
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
      </button>
    </form>
  );
};

const SalonFranchiseApp = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-purple-900/50 mix-blend-multiply"></div>
        <img
          src="/api/placeholder/1920/1080"
          alt="Luxury Salon Interior"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="space-y-8 max-w-4xl px-4">
            <h1 className="text-6xl md:text-7xl font-bold text-white">
              Kira Exotica Salon
            </h1>
            <p className="text-2xl md:text-3xl text-white/90">
              Transform the Beauty Industry with Our Premium Franchise Opportunity
            </p>
            <button className="bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors duration-200 inline-flex items-center space-x-2">
              <span>Explore Opportunities</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="text-4xl font-bold text-blue-600 mb-2">₹27,000 Cr</div>
            <p className="text-gray-600">Industry Value</p>
          </div>
          <div className="text-center p-8 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="text-4xl font-bold text-purple-600 mb-2">25%</div>
            <p className="text-gray-600">Annual Growth Rate</p>
          </div>
          <div className="text-center p-8 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="text-4xl font-bold text-blue-600 mb-2">200+</div>
            <p className="text-gray-600">Active Franchises</p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Why Partner With Us
            </h2>
            <p className="text-xl text-gray-600">Join the future of beauty and wellness</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
                title: 'Premium Returns',
                description: 'High-margin business model with consistent revenue streams'
              },
              {
                icon: <Star className="w-8 h-8 text-purple-600" />,
                title: 'Brand Loyalty',
                description: 'Strong customer retention through excellence in service'
              },
              {
                icon: <HeartHandshake className="w-8 h-8 text-blue-600" />,
                title: 'Complete Support',
                description: 'Comprehensive training and operational guidance'
              },
              {
                icon: <Users className="w-8 h-8 text-purple-600" />,
                title: 'Strategic Growth',
                description: 'Optimized expansion strategy with maximum returns'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">Partnership Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "Strategic location analysis and selection",
              "Complete interior design and layout support",
              "Equipment and inventory procurement",
              "Legal compliance assistance",
              "Management software and training",
              "Digital marketing strategy",
              "Staff recruitment and training",
              "Regular skill development programs",
              "Marketing and branding support"
            ].map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3 p-6 rounded-lg bg-white/10 backdrop-blur-lg">
                <Check className="w-6 h-6 text-blue-400 flex-shrink-0" />
                <p className="text-white/90">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <FranchiseInquiryForm />
        </div>
      </section>
    </div>
  );
};

export default SalonFranchiseApp;