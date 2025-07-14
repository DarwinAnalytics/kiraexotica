import React, { useState } from 'react';
import { Heart, Share2, MoreHorizontal, Star } from 'lucide-react';

const Review = () => {
  const [likedReviews, setLikedReviews] = useState({});

  const reviews = [
    {
      id: 1,
      name: "Ravi Ratnakar",
      role: "Local Guide",
      avatar: "RR",
      avatarBg: "bg-orange-500",
      reviewCount: 28,
      photoCount: 2,
      rating: 5,
      timeAgo: "4 weeks ago",
      text: "Just had a truly refreshing experience at Kira Exotica Salon in Kanadia!\n\nThe place is not only super clean and well-maintained, but the calm and cozy atmosphere instantly puts you at ease. The staff is friendly, attentive, and really skilled at what they do. I went in for a haircut, skincare, and a head massage — and all three services were absolutely relaxing and professionally handled.\n\nSpecial thanks to Ms. Poonam Chauhan, the owner, for maintaining such high standards of hygiene, comfort, and customer care. Her personal attention and the salon's peaceful vibe made the entire visit feel like a true self-care session.\n\nHighly recommended for anyone looking for quality service with a calm and premium touch in the Kanadia area!",
      hasPhoto: true,
      src:'https://lh3.googleusercontent.com/geougc-cs/AB3l90C_TcJpgdyBAxKIM4gsODQ4U68mMD7nm0-gYMqYRx_f2py1CQqIdTgMalx3BOiB_GYOMfvkVPM-TD9qmRo7GSpRLkTA_2oWrYIqEpk83c8vfVq-QvHOYL4Ej5o-i_p6uZudUXGQ2g=s125-p-k-rw',
      likes: 3
    },
    {
      id: 2,
      name: "Kajal Sachdeva",
      role: "",
      avatar: "K",
      avatarBg: "bg-purple-500",
      reviewCount: 6,
      photoCount: 0,
      rating: 5,
      timeAgo: "4 weeks ago",
      text: "One Stop destination for your Entire Look\nHair care 👍\nSkin care 👍\nLaser Therapy 👍\nWe ask and she provides\nThanks For all Mrs Poonam Chauhan 👍\nHighly Recommended",
      hasPhoto: false,
      likes: 0
    },
    {
      id: 3,
      name: "Aman",
      role: "",
      avatar: "A",
      avatarBg: "bg-gray-800",
      reviewCount: 4,
      photoCount: 0,
      rating: 5,
      timeAgo: "9 months ago",
      text: "Great Service and Style\n\nI had a fantastic experience at Kira Exotica The staff was friendly, and my stylist, really listened to what I wanted. The haircut turned out amazing, and my hair feels healthier than ever. The salon had a relaxing atmosphere, and they used great products too. I'll definitely be back and highly recommend them!\n\nRating ⭐⭐⭐⭐⭐ (5/5)",
      hasPhoto: false,
      likes: 1
    },
    {
      id: 4,
      name: "Renu Gurjar",
      role: "",
      avatar: "R",
      avatarBg: "bg-teal-600",
      reviewCount: 1,
      photoCount: 1,
      rating: 5,
      timeAgo: "10 months ago",
      text: "Very nice work good service must visit for a professional salon services",
      hasPhoto: true,
      src:'https://lh3.googleusercontent.com/geougc-cs/AB3l90DBdxTv9Gyv7rKy9qRavuWUxkUYeFUD16Con4mFygjE0XUMNUibtat-YKcQis5YDqqunbKl8Y7ILejLNf4kj6C8HHvl2BHegLnt5JbXZ9GgbYW1CfXr3LA-oRZDYrkg89SF3n8x=s125-p-k-rw',
      likes: 1
    },
    {
      id: 5,
      name: "SIMRAN SHADIJA",
      role: "",
      avatar: "S",
      avatarBg: "bg-amber-600",
      reviewCount: 8,
      photoCount: 2,
      rating: 5,
      timeAgo: "4 months ago",
      text: "I had the pleasure nd honour to visit Kira exotica at kanadia road...wonderful people , excellent and co operative staff, with bang on services...I took free manicure that too on pampering session ..being a Home maker doing all my chores by myself, my hands were all dull nd chapped..with their manicure my hands were all soft nd supple and I could feel warmth of this softness for many days...apart from service the love care nd respect was all worth it..💯💯💯\n\nServices\nManicure",
      hasPhoto: false,
      likes: 1
    },
    {
      id: 6,
      name: "Vidushi Diwan",
      role: "Local Guide",
      avatar: "VD",
      avatarBg: "bg-pink-500",
      reviewCount: 19,
      photoCount: 5,
      rating: 5,
      timeAgo: "a year ago",
      text: "Got Pedicure Manicure Facial hair spa and loved all the services, Rishi and Deepa were really wonderful understood that i needed deep relaxation and provided appropriate services!! Salon is really large n staff is courteous!",
      hasPhoto: true,
      src:'https://lh3.googleusercontent.com/geougc-cs/AB3l90DQZS0psr6nIZrK3klp0T5JwxskGaDp3mK2THSrNIr6ZMzBmOaD-ZRQgUmcKJ4lpSe30YwpFzKhfkn4yLNtI6rnejZISOMGMhFlYdR-idD7OaeJWODgxFYExeQxFiT5BgNglBPk=s125-p-k-rw',
      likes: 1
    }
  ];

  const handleLike = (reviewId) => {
    setLikedReviews(prev => ({
      ...prev,
      [reviewId]: !prev[reviewId]
    }));
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  const formatText = (text) => {
    return text.split('\n').map((line, index) => (
      <span key={index}>
        {line}
        {index < text.split('\n').length - 1 && <br />}
      </span>
    ));
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-4">
      {/* Header */}
      <div className="border-b border-gray-200 pb-4 mb-6">
        {/* <h1 className="text-2xl font-normal text-gray-900">Reviews</h1> */}
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="border-b border-gray-100 pb-6 last:border-b-0">
            {/* Review Header */}
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center space-x-3">
                {/* Avatar */}
                <div className={`w-10 h-10 rounded-full ${review.avatarBg} flex items-center justify-center text-white font-medium text-sm`}>
                  {review.avatar}
                </div>
                
                {/* User Info */}
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-medium text-gray-900">{review.name}</span>
                    {review.role && (
                      <span className="text-sm text-gray-600">{review.role}</span>
                    )}
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <span>{review.reviewCount} reviews</span>
                    {review.photoCount > 0 && (
                      <>
                        <span>•</span>
                        <span>{review.photoCount} photos</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
              
              {/* More Options */}
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <MoreHorizontal className="w-4 h-4 text-gray-500" />
              </button>
            </div>

            {/* Rating and Date */}
            <div className="flex items-center space-x-3 mb-3">
              <div className="flex items-center space-x-1">
                {renderStars(review.rating)}
              </div>
              <span className="text-sm text-gray-500">{review.timeAgo}</span>
            </div>

            {/* Review Text */}
            <div className="text-gray-700 mb-4 leading-relaxed">
              {formatText(review.text)}
            </div>

            {/* Photo Placeholder */}
            {review.hasPhoto && (
              <div className="mb-4">
                <div className="w-32 h-32 bg-gray-100 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500">
                    
                  <span className="text-sm"><img src={review.src} alt="" /></span>
                </div>
              </div>
            )}

            {/* Review Actions */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => handleLike(review.id)}
                className="flex items-center space-x-2 text-gray-500 hover:text-red-500 transition-colors"
              >
                <Heart
                  className={`w-5 h-5 ${likedReviews[review.id] ? 'text-red-500 fill-current' : ''}`}
                />
                <span className="text-sm">
                  {review.likes + (likedReviews[review.id] ? 1 : 0)}
                </span>
              </button>
              
              <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {/* <div className="flex justify-center mt-8 mb-4">
        <button className="px-6 py-2 text-blue-600 hover:bg-blue-50 rounded-full transition-colors">
          Show more reviews
        </button>
      </div> */}
    </div>
  );
};

export default Review;