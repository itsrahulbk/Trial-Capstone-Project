import React, { useState, useEffect } from 'react';
import './ReservationForm.css';

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: 1,
    occasion: 'Birthday'
  });

  const [availableTimes, setAvailableTimes] = useState([
    '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
  ]);

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const isDateValid = formData.date !== '';
    const isTimeValid = formData.time !== '';
    const isGuestsValid = formData.guests >= 1 && formData.guests <= 10;
    const isOccasionValid = formData.occasion === 'Birthday' || formData.occasion === 'Anniversary';
    
    setIsFormValid(isDateValid && isTimeValid && isGuestsValid && isOccasionValid);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Reservation made for ${formData.guests} guests on ${formData.date} at ${formData.time} for ${formData.occasion}`);
  };

  return (
    <form className="ReservationForm" onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" name="date" value={formData.date} onChange={handleChange} required />

      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" name="time" value={formData.time} onChange={handleChange} required>
        {availableTimes.map((time, index) => (
          <option key={index} value={time}>{time}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input type="number" id="guests" name="guests" value={formData.guests} onChange={handleChange} placeholder="1" min="1" max="10" required />

      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" name="occasion" value={formData.occasion} onChange={handleChange} required>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <button type="submit" disabled={!isFormValid}>Make Your Reservation</button>
    </form>
  );
}

export default ReservationForm;
