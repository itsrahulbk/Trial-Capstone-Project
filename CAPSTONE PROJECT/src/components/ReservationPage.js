import React from 'react';
import ReservationForm from './ReservationForm';
import './ReservationPage.css';

const ReservationPage = () => {
  return (
    <main className="ReservationPage">
      <h2>Book a Table</h2>
      <div className="form-container">
        <ReservationForm />
      </div>
    </main>
  );
};

export default ReservationPage;
