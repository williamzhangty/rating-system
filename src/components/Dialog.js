import React from 'react';
import { FaReact } from 'react-icons/fa';
import '../style/style.css';

const Dialog = ({ closeDialog }) => (
  <div className="dialog">
    <div className="dialog-content">
      <FaReact size={80} color="#61dafb" />
      <p> </p>
      <button onClick={closeDialog}>Close dialog</button>
    </div>
  </div>
);

export default Dialog;
