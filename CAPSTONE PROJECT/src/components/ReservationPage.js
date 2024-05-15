import React from 'react';
import BookingForm from './BookingForm';
import './ReservationPage.css';

const ReservationPage = () => {
  return (
    <main className="ReservationPage">
      <h2>Book a Table</h2>
      <div className="form-container">
        <BookingForm />
      </div>
    </main>
  );
};

export default ReservationPage;
