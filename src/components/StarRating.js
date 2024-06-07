import React, { useState } from 'react';
import Star from './Star';
import '../style/style.css';

const StarRating = () => {
  const [rating, setRating] = useState(0);

  const handleClick = (value) => {
    setRating(value);
  };

  const getRatingText = () => {
    switch (rating) {
      case 1: return 'Poor';
      case 2: return 'Regular';
      case 3: return 'Good';
      case 4: return 'Very Good';
      case 5: return 'Excellent';
      default: return '';
    }
  };

  return (
    <div className="rating-container">
      <div className="star-rating">
        {[...Array(5)].map((_, i) => (
          <Star key={i} selected={i < rating} onClick={() => handleClick(i + 1)} />
        ))}
      </div>
      <div className="rating-text">
        <h2>{getRatingText()}</h2>
      </div>
    </div>
  );
};

export default StarRating;

