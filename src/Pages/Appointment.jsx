import React, { useState } from 'react';
import { Clock, Phone, Calendar, X, ArrowRight, MessageCircle, Star } from 'lucide-react';

const Appointment = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const features = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Flexible Hours",
      description: "Open daily 10:00 AM - 8:00 PM"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Confirmed Booking",
      description: "Verification call for confirmation"
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Easy Scheduling",
      description: "Book your preferred time slot"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f11_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f11_1px,transparent_1px)] bg-[size:14px_24px]" />

      <div className="relative mx-auto max-w-7xl px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Book Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Premium</span> Experience
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Transform your look with our expert services. Quick booking, professional consultation, and personalized care.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
              <div className="text-purple-400 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Booking Options */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800">
            {/* Timing Information */}
            <div className="flex items-center justify-between mb-8 pb-8 border-b border-gray-800">
              <div>
                <h2 className="text-2xl font-semibold text-white mb-2">Salon Hours</h2>
                <p className="text-gray-400">Monday to Sunday</p>
                <p className="text-purple-400 font-semibold">10:00 AM - 8:00 PM</p>
              </div>
              <div className="hidden md:block">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-400 mt-2">Rated 4.9 from 1000+ clients</p>
              </div>
            </div>

            {/* Confirmation Process */}
            <div className="mb-8">
              <div className="flex items-start gap-4 bg-gray-800/50 rounded-lg p-6">
                <Phone className="h-6 w-6 text-purple-400 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Booking Confirmation Process</h3>
                  <p className="text-gray-300">
                    After your booking request, our team will contact you for confirmation. 
                    Your appointment will be finalized after phone verification to ensure 
                    the best service scheduling.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <button
              onClick={() => setIsChatOpen(true)}
              className="w-full bg-white  py-4 rounded-lg 
                        transition-all duration-200 
                       flex items-center justify-center gap-2 group"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Start Booking Process</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>

      {/* Embedded Chat Modal */}
      {isChatOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
          <div className="relative w-full max-w-4xl h-[80vh] bg-white rounded-xl overflow-hidden">
            <div className="absolute top-4 right-4 z-10">
              <button
                onClick={() => setIsChatOpen(false)}
                className="p-2 rounded-full bg-gray-900/50 text-white hover:bg-gray-900 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <iframe
              src="https://shorturl.at/gMNRg"
              className="w-full h-full"
              title="WhatsApp Chat"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Appointment;