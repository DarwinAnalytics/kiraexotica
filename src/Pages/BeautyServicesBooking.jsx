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
    'Eyebrow Wax': 150,
    'Upper Lip': 80,
    'Lower Lip': 80,
    'Chin': 80,
    'Cheeks': 150,
    'Neck': 150,
    'Side Lock': 150,
    'Nose': 80,
    'Forehead': 70,
    'Full Face': 450
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
  }
};

const MALE_SERVICES = {
  threading: {
    'Eyebrow': 50,
    'Cheeks': 100,
    'Nose': 50,
    'Forehead': 50
  },
  wax: {
    'Eyebrow Wax': 150,
    'Cheeks': 150,
    'Neck': 150,
    'Nose': 50,
    'Forehead': 70
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
  }
};

const BeautyServicesBooking = () => {
  const [selectedGender, setSelectedGender] = useState('female');
  const [selectedServices, setSelectedServices] = useState({
    female: { threading: {}, wax: {}, bleach: {} },
    male: { threading: {}, wax: {}, bleach: {} }
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

  const { femaleTotal, maleTotal, total } = calculateTotal();
  const discountedTotal = total > 1000 ? Math.round(total * 0.9) : total;
  const hasCombinedServices = hasServicesForGender('female') && hasServicesForGender('male');

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

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {['threading', 'wax', 'bleach'].map(category => (
                <div key={category} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 capitalize">
                    {category}
                  </h3>
                  <div className="space-y-1">
                    {renderServiceCheckboxes(category)}
                  </div>
                </div>
              ))}
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