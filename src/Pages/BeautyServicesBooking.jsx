  import React, { useState, useCallback } from 'react';

  // Separate pricing data by gender
  const FEMALE_SERVICES = {
    threading: {
      'Eyebrow': 50,
      'Upper Lip': 20,
      'Lower Lip': 20,
      'Chin': 30,
      'Cheeks': 50,
      'Neck': 50,
      'Side Lock': 50,
      'Nose': 20,
      'Forehead': 20,
      'Full Face': 150,
      'Full Face & Neck': 200
    },
    wax: {
      "Full Arms (Honey)": 350,
      "Full Arms (International)": 650,
    
      "Underarms (Honey)": 150,
      "Underarms (International)": 250,
    
      "Legs (Honey)": 550,
      "Legs (International)": 850,
    
      "Feet (Honey)": 150,
      "Feet (International)": 250,
    
      "Half Legs (Honey)": 350,
      "Half Legs (International)": 650,
    
      "Full Back (Honey)": 350,
      "Full Back (International)": 650,
    
      "Half Back (Honey)": 350,
      "Half Back (International)": 450,
    
      "Front (Honey)": 350,
      "Front (International)": 650,
    
      "Stomach (Honey)": 250,
      "Stomach (International)": 450,
    
      "Bikini (Honey)": 750,
      "Bikini (International)": 1250,
    
      "Bumb (Honey)": 450,
      "Bumb (International)": 750,
    
      "Full Wax (Arms, U/A, Legs) (Honey)": 750,
      "Full Wax (Arms, U/A, Legs) (International)": 1550,
    
      "Full Body (Excluded Bikini & Hips) (Honey)": 1250,
      "Full Body (Excluded Bikini & Hips) (International)": 2150
    }
    ,
    FaceWax:{
      'Eyebrow Wax': 150,
      'Upper Lip': 80,
      'Lower Lip': 80,
      'Chin': 80,
      'Cheeks': 150,
      'Neck': 150,
      'Side Lock': 150,
      'Nose': 80,
      'Forehead': 70,
      'Full Face': 450,
    },
    bleach: {
      'Upper Lip': 50,
      'Lower Lip': 50,
      'Chin': 50,
      'Face Bleach with Neck': 450,
      'Neck': 250,
      'Full Back': 750,
      'Half Back': 450,
      'Full Front': 750,
      'Stomach': 450,
      'Underarms': 250,
      'Full Arms': 550,
      'Half Arms': 350,
      'Half Legs': 550,
      'Full Legs': 850,
      'Feet': 250,
      'Full Body': 1550
    },
    deTan: {
      'Face': 450,
      'Neck': 250,
      'Face & Neck': 550,
      'Full Arms': 850,
      'Underarms': 250,
      'Legs': 1150,
      'Feet': 250,
      'Half Legs': 850,
      'Full Back': 850,
      'Half Back': 450,
      'Front': 850,
      'Stomach': 450,
      'Bikini': 550,  // Female only
      'Bumbs': 550,  // Female only
      'Full Body (Excluded Bikini & Hips)': 2250
  },

    massage: {
      "Body Massage with Vitamin C (60 Min)": 2550,
      "Body Oil Massage with Potli (60 Min)": 3550,
      "Body Massage with Olive (60 Min)": 2550,
      "Body Steam (5-8 Min)": 550,
      "Body Spa in Chocolate": 2050,
      "Exotic Body Spa": 3550,
      "Massage with Aroma Oil": 1550,
      "Massage Head to Toe": 2050,
      "Double Tissue Massage": 2550,
      "Foot Massage": 550,
      "Legs Massage": 950,
      "Hand Massage": 650,
      "Shoulder Massage": 450,
      "Back Massage": 750,
      "Head Massage": 450
    },
    bodyPolishing:{
      "Black Current": 3050,
      "Watermelon": 2050,
      "Cucumber": 2050,
      "Orange And Peach": 2550,
      "Strawberry": 2050,
      "Chocolate": 3550,
      "Stone Body Polish with Oil": 4550,
      "Body Exfoliation": 1550,
      "Body Detaining": 1550,
      "Body Potli with Oil": 5550
    },
    bodyPolishing:{
      "Black Current": 3050,
      "Watermelon": 2050,
      "Cucumber": 2050,
      "Orange And Peach": 2550,
      "Strawberry": 2050,
      "Chocolate": 3550,
      "Stone Body Polish with Oil": 4550,
      "Body Exfoliation": 1550,
      "Body Detaining": 1550,
      "Body Potli with Oil": 5550
    },
    skinCareFacial:{
      "Regular Clean-Up": 850,
      "Deep Cleansing": 450,
      "Hydration Clean-Up": 950,
      "Lubricant Clean-Up": 1250,
      "De-tan Clean-Up": 950,
      "Advance Clean-Up": 1250,
      "International Clean-Up": 2050,
      "Rejuvenation Facial": 1250,
      "Herbal Facial": 1350,
      "Fresh Fruit Facial": 1250,
      "Fruit Facial": 1250,
      "Radiance Facial": 1750,
      "Chocolate Facial": 1750,
      "Carbon Facial": 4550,
      "Wine Facial": 2550,
      "Vitamin C": 2550,
      "Signature Facial": 2850,
      "Experience Hydra Facial": 2550,
      "Hydra Facial With Anti-Aging": 3550,
      "Advance Hydra With Required": 5550
    },
    skinTreatment:{
      "Lubricant Facial": 1550,
      "Facial With Stone": 2500,
      "Antiaging & Firming Facial": 2550
    },
    facepack:{
      "De-Tan Pack": 450,
      "Advance De-Tan Pack": 650,
      "Glow Pack": 550,
      "Tightening Pack": 1050,
      "Regular Pack": 350,
      "Hydrating Pack": 750,
      "International Mask": 1250,
      "Acne Mask": 550,
      "Pigmentation Mask": 850
    },
    haircare:{
      "Split Ends Remove": 650,
      "Haircut Female": 550,
      "Advance Hair Cut": 750,
      "Colour Touch-Up Female": "750-950",
      "Highlight for Female per strip": "350-450",
      "Global Colour Shoulder Length": 2550,
      "Global Colour Waist Length": 3550,
      "Global Colour Lower Waist Length": 4550,
      "Colour Application": 450,
      "Global Fashion Colour Waist Length": 3050,
      "Global Fashion Colour Shoulder Length": 4550,
      "Global Fashion Colour Lower Waist Length": 5550,
      "Smoothening Shoulder Length": 5550,
      "Smoothening Middle Waist": 7550,
      "Smoothening Lower Waist": 9550,
      "Rebounding Shoulder Length": 7550,
      "Rebounding Middle Waist": 7550,
      "Rebounding Lower Middle Waist": 9550,
      "Hair Relaxing": 5550,
      "Kera Smooth": 7550,
      "Kera Rebound": 8550,
      "Rolling Style": 650,
      "Tong Style": 750,
      "Buns": 650,
      "Ironing Curls": 750,
      "Any Style": 750
    },
    ScalpHairTreatment:{
      "Anti-Dandruff": 750,
      "Anti-Hair Fall": 850,
      "Hair Regrowth": 4550,
      "Hair Hydrating": 1050,
      "Split Ends Treatment": 750,
      "Boost for Hydration": 1250,
      "Ritual Treatment": 1750,
      "Standalone Treatment": 2050,
      "L’Oréal Spa": 1250,
      "Keratin Spa": 2550
    },
    medicaltreatmentlaser:{
      "Side Blocks": 2050,
      "Upper Lips": 1050,
      "Chin": 1050,
      "Forehead": 1050,
      "Underarms": 1050,
      "Hands": 4050,
      "Chest": 3050,
      "Back (Upper)": 3050,
      "Back (Lower)": 3050,
      "Legs": 5050,
      "Bikini": 1550,
      "Abdomen": 3050,
      "Full Face": 3550,
      "Full Body": 5050,
      "Complete package for 10 sessions": 75000
    },
    pampercare:{
      "Nail Extension": 5550,
      "Regular Manicure": 450,
      "Regular Pedicure": 550,
      "French Manicure": 650,
      "Chocolate Manicure": 750,
      "Chocolate Pedicure": 950,
      "Aroma Deluxe Manicure": 650,
      "Aroma Deluxe Pedicure": 750,
      "Manicure Spa": 950,
      "Pedicure Spa": 1050,
      "De-Tan Manicure": 850,
      "De-Tan Pedicure": 950,
      "International Manicure Spa": 1250,
      "International Pedicure Spa": 1550,
      "Heel Peel Treatment Pedicure": 2050
    }
    



  };

  const MALE_SERVICES = {
    threading: {
      'Eyebrow': 50,
      'Cheeks': 100,
      'Nose': 50,
      'Forehead': 50
    },
  
    bleach: {
      'Face Bleach with Neck': 350,
      'Neck': 250,
      'Full Back': 850,
      'Half Back': 450,
      'Full Front': 850,
      'Stomach': 450,
      'Underarms': 250,
      'Full Arms': 650,
      'Half Arms': 450,
      'Half Legs': 650,
      'Full Legs': 950,
      'Feet': 250,
      'Full Body': 1750
    },
    deTan: {
        'Face': 450,
        'Neck': 250,
        'Face & Neck': 550,
        'Full Arms': 850,
        'Underarms': 250,
        'Legs': 1150,
        'Feet': 250,
        'Half Legs': 850,
        'Full Back': 850,
        'Half Back': 450,
        'Front': 850,
        'Stomach': 450,
        'Full Body (Excluded Bikini & Hips)': 2250
    },
    massage: {
      "Body Massage with Vitamin C (60 Min)": 2550,
      "Body Oil Massage with Potli (60 Min)": 3550,
      "Body Massage with Olive (60 Min)": 2550,
      "Body Steam (5-8 Min)": 550,
      "Body Spa in Chocolate": 2850,
      "Exotic Body Spa": 4550,
      "Massage with Aroma Oil": 2000,
      "Massage Head to Toe": 2550,
      "Double Tissue Massage": 2550,
      "Foot Massage": 550,
      "Legs Massage": 1150,
      "Hand Massage": 650,
      "Shoulder Massage": 450,
      "Back Massage": 750,
      "Head Massage": 450
    },
    bodyPolishing:{
      "Black Current": 3050,
      "Watermelon": 2050,
      "Cucumber": 2050,
      "Orange And Peach": 2550,
      "Strawberry": 2050,
      "Chocolate": 3550,
      "Stone Body Polish with Oil": 4550,
      "Body Exfoliation": 1550,
      "Body Detaining": 1550,
      "Body Potli with Oil": 5550
    },
    skinCareFacial:{
      "Regular Clean-Up": 850,
      "Deep Cleansing": 450,
      "Hydration Clean-Up": 950,
      "Lubricant Clean-Up": 1250,
      "De-tan Clean-Up": 950,
      "Advance Clean-Up": 1250,
      "International Clean-Up": 2050,
      "Rejuvenation Facial": 1250,
      "Herbal Facial": 1350,
      "Fresh Fruit Facial": 1250,
      "Fruit Facial": 1250,
      "Radiance Facial": 1750,
      "Chocolate Facial": 1750,
      "Carbon Facial": 4550,
      "Wine Facial": 2550,
      "Vitamin C": 2550,
      "Signature Facial": 2850,
      "Experience Hydra Facial": 2550,
      "Hydra Facial With Anti-Aging": 3550,
      "Advance Hydra With Required": 5550
    }
    ,
    skinTreatment:{
      "Lubricant Facial": 1550,
      "Facial With Stone": 2500,
      "Antiaging & Firming Facial": 2550
    },
    facepack:{
      "De-Tan Pack": 450,
      "Advance De-Tan Pack": 650,
      "Glow Pack": 550,
      "Tightening Pack": 1050,
      "Regular Pack": 350,
      "Hydrating Pack": 750,
      "International Mask": 1250,
      "Acne Mask": 550,
      "Pigmentation Mask": 850
    },
    haircare:{
      "Haircut Male": 350,
      "Shaving Whole Head": 550,
      "Advance Hair Cut Male": 550
    },
    ScalpHairTreatment:{
      "Anti-Dandruff": 750,
      "Anti-Hair Fall": 850,
      "Hair Regrowth": 4550,
      "Hair Hydrating": 1050,
      "Split Ends Treatment": 750,
      "Boost for Hydration": 1250,
      "Ritual Treatment": 1750,
      "Standalone Treatment": 2050,
      "L’Oréal Spa": 1250,
      "Keratin Spa": 2550
    },
    
    medicaltreatmentlaser:{
      "Side Blocks": 2050,
      "Upper Lips": 1050,
      "Chin": 1050,
      "Forehead": 1050,
      "Underarms": 1050,
      "Hands": 4050,
      "Chest": 3050,
      "Back (Upper)": 3050,
      "Back (Lower)": 3050,
      "Legs": 5050,
      "Bikini": 1550,
      "Abdomen": 3050,
      "Full Face": 3550,
      "Full Body": 5050,
      "Complete package for 10 sessions": 75000
    },
    wax: {
      
      "Full Arms": 1050,
      "Underarms": 450,
      "Legs": 1050,
      "Feet": 350,
      "Half Legs": 750,
      "Full Back": 1050,
      "Half Back": 850,
      "Front": 1050,
      "Stomach": 1050,
      "Bikini": 0,
      "Bumb": 850,
      "Full Wax (Arms, U/A, Legs)": 2550,
      "Full Body (Excluded Bikini & Hips)": 4550
    },
    FaceWax:{
      'Cheeks': 150,
      'Eyebrow Wax': 150, 
      'Neck': 150,
      'Nose': 50,
      'Forehead': 70,
    },
    pampercare:{
      "Regular Manicure": 450,
      "Regular Pedicure": 550,
      "French Manicure": 650,
      "Chocolate Manicure": 750,
      "Chocolate Pedicure": 950,
      "Aroma Deluxe Manicure": 650,
      "Aroma Deluxe Pedicure": 750,
      "Manicure Spa": 950,
      "Pedicure Spa": 1050,
      "De-Tan Manicure": 850,
      "De-Tan Pedicure": 950,
      "International Manicure Spa": 1250,
      "International Pedicure Spa": 1550,
      "Heel Peel Treatment Pedicure": 2050
    }

    
  };

  const BeautyServicesBooking = () => {
    const [selectedGender, setSelectedGender] = useState('female');
    const [selectedServices, setSelectedServices] = useState({
      female: {
        threading: {},
        wax: {},
        FaceWax: {},
        bleach: {},
        deTan: {},
        massage: {},
        bodyPolishing: {},
        skinCareFacial: {},
        skinTreatment: {},
        facepack: {},
        haircare: {},
        ScalpHairTreatment: {},
        medicaltreatmentlaser: {},
        pampercare: {}
      },
      male: {
        threading: {},
        wax: {},
        FaceWax: {},
        bleach: {},
        deTan: {},
        massage: {},
        bodyPolishing: {},
        skinCareFacial: {},
        skinTreatment: {},
        facepack: {},
        haircare: {},
        ScalpHairTreatment: {},
        medicaltreatmentlaser: {},
        pampercare: {}

      }
    });
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Existing calculation functions remain the same
    const calculateGenderTotal = (gender) => {
      const services = gender === 'female' ? FEMALE_SERVICES : MALE_SERVICES;
      let total = 0;
      Object.entries(selectedServices[gender]).forEach(([category, selectedItems]) => {
        Object.entries(selectedItems).forEach(([service, isSelected]) => {
          if (isSelected && services[category][service]) {
            total += services[category][service];
          }
        });
      });
      return total;
    };

    const calculateTotal = useCallback(() => {
      const femaleTotal = calculateGenderTotal('female');
      const maleTotal = calculateGenderTotal('male');
      return { femaleTotal, maleTotal, total: femaleTotal + maleTotal };
    }, [selectedServices]);

    const handleServiceToggle = (category, service) => {
      const services = selectedGender === 'female' ? FEMALE_SERVICES : MALE_SERVICES;
      if (!services[category][service]) return;

      setSelectedServices(prev => ({
        ...prev,
        [selectedGender]: {
          ...prev[selectedGender],
          [category]: {
            ...prev[selectedGender][category],
            [service]: !prev[selectedGender][category][service]
          }
        }
      }));
    };

    const hasServicesForGender = (gender) => {
      return Object.values(selectedServices[gender]).some(category => 
        Object.values(category).some(isSelected => isSelected)
      );
    };

    const renderServiceCheckboxes = (category) => {
      const services = selectedGender === 'female' ? FEMALE_SERVICES : MALE_SERVICES;
      if (!services[category]) return null;

      return Object.entries(services[category]).map(([service, price]) => (
        <div key={service} className="flex items-center gap-3 mb-3 group">
          <div className="relative">
            <input
              type="checkbox"
              id={`${category}-${service}`}
              checked={!!selectedServices[selectedGender][category][service]}
              onChange={() => handleServiceToggle(category, service)}
              className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 transition-all cursor-pointer"
            />
          </div>
          <label 
            htmlFor={`${category}-${service}`} 
            className="flex justify-between w-full text-sm font-medium text-gray-700 cursor-pointer group-hover:text-blue-600 transition-colors"
          >
            <span>{service}</span>
            <span className="text-gray-600 group-hover:text-blue-600">₹{price}/-</span>
          </label>
        </div>
      ));
    };

    // Create category order based on gender
    const getCategoryOrder = () => {
      // For female, keep original order
      if (selectedGender === 'female') {
        return [
          'threading', 
          'wax', 
          'FaceWax',
          'skinCareFacial', 
          'facepack', 
          'deTan', 
          'bleach', 
          'massage', 
          'bodyPolishing', 
          'skinTreatment', 
          'haircare', 
          'ScalpHairTreatment', 
          'medicaltreatmentlaser', 
          'pampercare'
        ];
      } 
      // For male, move wax and FaceWax to the end
      else {
        return [
          'haircare', 
          'ScalpHairTreatment', 
          'massage', 
          'skinCareFacial', 
          'facepack', 
          'deTan', 
          'threading',
          'bleach', 
          'bodyPolishing', 
          'skinTreatment', 
          'medicaltreatmentlaser',
          'wax',
          'FaceWax',
          'pampercare'

        ];
      }
    };

    const { femaleTotal, maleTotal, total } = calculateTotal();
    const discountedTotal = total > 1000 ? Math.round(total * 0.9) : total;
    const hasCombinedServices = hasServicesForGender('female') && hasServicesForGender('male');
    
    // Get the ordered categories based on selected gender
    const orderedCategories = getCategoryOrder();

    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
              <h1 className="text-2xl font-bold text-white">Beauty Services Booking</h1>
            </div>

            <div className="p-6">
              {/* Gender Selection */}
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Select Service Type</h2>
                <div className="flex gap-6">
                  {['female', 'male'].map((gender) => (
                    <label key={gender} className="relative flex items-center gap-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="gender"
                        value={gender}
                        checked={selectedGender === gender}
                        onChange={(e) => setSelectedGender(e.target.value)}
                        className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                      />
                      <span className="text-gray-700 font-medium capitalize group-hover:text-blue-600 transition-colors">
                        {gender} Services
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Services Grid - Using the orderedCategories */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {orderedCategories.map(category => {
                  // Skip categories that don't exist for the current gender
                  const services = selectedGender === 'female' ? FEMALE_SERVICES : MALE_SERVICES;
                  if (!services[category]) return null;
                  
                  return (
                    <div key={category} className="bg-gray-50 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-4 capitalize">
                        {
                        category === 'deTan' ? 'De-Tan' : 
                        category === 'ScalpHairTreatment' ? 'Scalp Hair Treatment' : 
                        category === 'medicaltreatmentlaser' ? 'Medical Treatment Laser' : 
                        category === 'FaceWax' ? 'Wax For Face' :
                        category === 'FaceWax' ? 'Wax For Face' :
                        category === 'bodyPolishing' ? 'Body Polishing' :
                        category === 'skinCareFacial' ? 'Skin Care Facial' :
                        category === 'skinTreatment' ? 'Skin Treatment' :
                        category}
                      </h3>
                      <div className="space-y-1">
                        {renderServiceCheckboxes(category)}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Combined Services Notice */}
              {hasCombinedServices && (
                <div className="mt-6 bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <p className="text-amber-800 flex items-center gap-2">
                    <span className="text-xl">⚠️</span>
                    <span>You have selected both male and female services. These will require separate appointments.</span>
                  </p>
                </div>
              )}

              {/* Totals and Action */}
              <div className="mt-8 flex flex-col items-center border-t border-gray-200 pt-6">
                {femaleTotal > 0 && (
                  <p className="text-gray-600">Female Services Total: ₹{femaleTotal}/-</p>
                )}
                {maleTotal > 0 && (
                  <p className="text-gray-600">Male Services Total: ₹{maleTotal}/-</p>
                )}
                <p className="text-xl font-semibold text-gray-800 mt-2">
                  Total Price: ₹{total}/-
                </p>
                {total > 1000 && (
                  <p className="text-blue-600 font-medium mt-1">
                    10% Discount Applied: ₹{discountedTotal}/-
                  </p>
                )}
                <button
                  onClick={() => setIsModalOpen(true)}
                  disabled={total === 0}
                  className={`mt-6 px-8 py-3 rounded-lg text-sm font-semibold transition-all transform hover:scale-105 ${
                    total === 0 
                      ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                      : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl'
                  }`}
                >
                  Proceed to Booking
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
                <h2 className="text-xl font-bold text-white">Booking Confirmation</h2>
              </div>
              
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
                {hasCombinedServices && (
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
                    <p className="text-amber-800 text-sm">
                      Note: Male and female services will be scheduled as separate appointments.
                    </p>
                  </div>
                )}

                {/* Services Summary */}
                {['female', 'male'].map(gender => {
                  if (!hasServicesForGender(gender)) return null;
                  const services = gender === 'female' ? FEMALE_SERVICES : MALE_SERVICES;
                  const genderTotal = calculateGenderTotal(gender);

                  return (
                    <div key={gender} className="mb-6">
                      <h3 className="font-semibold text-gray-800 capitalize mb-3">{gender} Services:</h3>
                      <div className="bg-gray-50 rounded-lg p-4">
                        {Object.entries(selectedServices[gender]).map(([category, selectedItems]) => {
                          const items = Object.entries(selectedItems).filter(([, isSelected]) => isSelected);
                          if (items.length === 0) return null;

                          return (
                            <div key={category} className="mb-4">
                              <h4 className="font-medium text-gray-700 capitalize mb-2">{category}</h4>
                              {items.map(([service]) => (
                                <div key={service} className="flex justify-between text-sm text-gray-600">
                                  <span>{service}</span>
                                  <span>₹{services[category][service]}/-</span>
                                </div>
                              ))}
                            </div>
                          );
                        })}
                        <div className="border-t border-gray-200 mt-3 pt-3">
                          <p className="text-sm font-medium text-gray-700">Subtotal: ₹{genderTotal}/-</p>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* Total */}
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <div className="text-lg font-semibold text-gray-800">
                    Total Price: ₹{total}/-
                    {total > 1000 && (
                      <p className="text-blue-600 text-sm mt-1">
                        Discounted Price: ₹{discountedTotal}/-
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Modal Actions */}
              <div className="border-t border-gray-200 p-4 bg-gray-50 flex justify-end gap-4">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Edit Services
                </button>
                <button
                  onClick={() => alert('Payment Processing!')}
                  className="px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-md hover:shadow-lg"
                >
                  Proceed to Pay
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  export default BeautyServicesBooking;