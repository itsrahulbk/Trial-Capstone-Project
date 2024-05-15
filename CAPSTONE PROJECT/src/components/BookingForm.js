import React, { useState } from 'react';
import './BookingForm.css';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: 1,
    occasion: 'Birthday'
  });

  const [formErrors, setFormErrors] = useState({});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.date) {
      errors.date = 'Date is required';
    }
    if (!formData.time) {
      errors.time = 'Time is required';
    }
    if (formData.guests < 1 || formData.guests > 10) {
      errors.guests = 'Number of guests must be between 1 and 10';
    }
    if (!formData.occasion) {
      errors.occasion = 'Occasion is required';
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      setIsFormSubmitted(true);
      alert(`Reservation made for ${formData.guests} guests on ${formData.date} at ${formData.time} for ${formData.occasion}`);
      // Reset form data after submission
      setFormData({
        date: '',
        time: '',
        guests: 1,
        occasion: 'Birthday'
      });
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <form className="BookingForm" onSubmit={handleSubmit}>
      <label htmlFor="date">Choose date</label>
      <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} />
      {formErrors.date && <p className="error">{formErrors.date}</p>}

      <label htmlFor="time">Choose time</label>
      <input type="time" id="time" name="time" value={formData.time} onChange={handleChange} />
      {formErrors.time && <p className="error">{formErrors.time}</p>}

      <label htmlFor="guests">Number of guests</label>
      <input type="number" id="guests" name="guests" value={formData.guests} onChange={handleChange} min="1" max="10" />
      {formErrors.guests && <p className="error">{formErrors.guests}</p>}

      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" name="occasion" value={formData.occasion} onChange={handleChange}>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>
      {formErrors.occasion && <p className="error">{formErrors.occasion}</p>}

      <button type="submit">Make Your Reservation</button>
    </form>
  );
};

export default BookingForm;
