import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BookingForm from './BookingForm';

describe('BookingForm', () => {
  beforeEach(() => {
    render(<BookingForm />);
  });

  test('renders BookingForm component', () => {
    expect(screen.getByLabelText('Choose date')).toBeInTheDocument();
    expect(screen.getByLabelText('Choose time')).toBeInTheDocument();
    expect(screen.getByLabelText('Number of guests')).toBeInTheDocument();
    expect(screen.getByLabelText('Occasion')).toBeInTheDocument();
    expect(screen.getByText('Make Your Reservation')).toBeInTheDocument();
  });

  test('shows error messages when form is submitted with empty fields', () => {
    fireEvent.click(screen.getByText('Make Your Reservation'));
    expect(screen.getByText('Date is required')).toBeInTheDocument();
    expect(screen.getByText('Time is required')).toBeInTheDocument();
    expect(screen.getByText('Number of guests must be between 1 and 10')).toBeInTheDocument();
    expect(screen.getByText('Occasion is required')).toBeInTheDocument();
  });

  test('submits the form with valid data', () => {
    fireEvent.change(screen.getByLabelText('Choose date'), { target: { value: '2023-10-10' } });
    fireEvent.change(screen.getByLabelText('Choose time'), { target: { value: '18:00' } });
    fireEvent.change(screen.getByLabelText('Number of guests'), { target: { value: '2' } });
    fireEvent.change(screen.getByLabelText('Occasion'), { target: { value: 'Birthday' } });
    fireEvent.click(screen.getByText('Make Your Reservation'));
    expect(screen.queryByText('Date is required')).not.toBeInTheDocument();
    expect(screen.queryByText('Time is required')).not.toBeInTheDocument();
    expect(screen.queryByText('Number of guests must be between 1 and 10')).not.toBeInTheDocument();
    expect(screen.queryByText('Occasion is required')).not.toBeInTheDocument();
  });
});
