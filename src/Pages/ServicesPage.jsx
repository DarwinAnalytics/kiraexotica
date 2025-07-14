import React from 'react';
import { 
  Brush as BrushIcon, 
  Camera as CameraIcon,
  Heart as HeartIcon,
  User as UserIcon
} from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      title: "Hair Styling",
      icon: <BrushIcon className="w-16 h-16 text-cyan-400" />,
      description: "Personalized cutting, styling, and transformative hair treatments.",
      image: "/images/hairstyle home2.jpg",
      details: [
        "Precision Cuts",
        "Color Treatments", 
        "Highlights & Balayage",
        "Hair Repair Treatments"
      ]
    },
    {
      title: "Spa Wellness",
      icon: <HeartIcon className="w-16 h-16 text-cyan-400" />,
      description: "Holistic wellness treatments for complete mind-body rejuvenation.",
      image: "/images/sap wellness home.jpg",
      details: [
        "Massage Therapy",
        "Facial Treatments",
        "Body Treatments", 
        "Aromatherapy"
      ]
    },
    {
      title: "Makeup & Bridal",
      icon: <CameraIcon className="w-16 h-16 text-cyan-400" />,
      description: "Professional makeup artistry for every occasion and life moment.",
      image: "/images/bridal home.jpg",
      details: [
        "Bridal Makeup",
        "Photoshoot Styling",
        "Evening Makeup",
        "Makeup Workshops"
      ]
    },
    {
      title: "Skin Care",
      icon: <UserIcon className="w-16 h-16 text-cyan-400" />,
      description: "Advanced skincare treatments tailored to your unique skin needs.",
      image: "/images/skincare 2 home.jpg",
      details: [
        "Facial Treatments",
        "Chemical Peels",
        "Microdermabrasion",
        "Skin Analysis"
      ]
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
          Our Comprehensive Services
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-300 ease-in-out flex flex-col h-full"
            >
              {/* Image Container with Fixed Height */}
              <div className="relative h-64 overflow-hidden rounded-t-3xl">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content Container */}
              <div className="p-6 flex-1 flex flex-col">
                {/* Header Section */}
                <div className="flex items-center mb-4">
                  {/* {service.icon} */}
                  <h2 className="text-2xl font-bold text-gray-800 ml-3">
                    {service.title}
                  </h2>
                </div>
                
                {/* Description */}
                <p className="text-gray-600 text-base mb-4 flex-grow">
                  {service.description}
                </p>
                
                {/* Service Details Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {service.details.map((detail, idx) => (
                    <button 
                      key={idx}
                      className="px-3 py-1.5 border-2 border-cyan-400 text-cyan-600 rounded-xl text-sm font-medium hover:bg-cyan-50 transition-colors duration-200"
                    >
                      {detail}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;