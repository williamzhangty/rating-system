import React from 'react';
import { FaStar } from 'react-icons/fa';


const Star = ({ selected, onClick }) => (
  <FaStar className={`star ${selected ? 'selected' : ''}`} onClick={onClick} />
);

export default Star;
