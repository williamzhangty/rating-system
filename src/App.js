import React, { useState } from 'react';
import StarRating from './components/StarRating';
import Dialog from './components/Dialog';
import './style/style.css';

const App = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  return (
    <>
    <div className="app">
      <StarRating />
    </div>
    <button className="dialog-button" onClick={openDialog}>Open Dialog</button>
     {isDialogOpen && <Dialog closeDialog={closeDialog} />}
    </>
  );
};

export default App;
