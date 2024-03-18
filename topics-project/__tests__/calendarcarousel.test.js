/** @jest-environment jsdom */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CalendarCarousel } from '../app/home/_components/calendarcarousel';
import { format, addDays, startOfToday } from 'date-fns';

describe('CalendarCarousel Component', () => {
    // Test rendering of the component
    it('renders correctly and displays current week', () => {
      render(<CalendarCarousel />);
      const today = startOfToday();
      const dates = Array.from({ length: 7 }, (_, i) => addDays(today, i - 3));
      dates.forEach(date => {
        expect(screen.getByText(format(date, 'EEE'))).toBeInTheDocument();
        expect(screen.getByText(format(date, 'd'))).toBeInTheDocument();
      });
    });
  
    // Test that future dates are not selectable
    it('does not allow selecting a future date', () => {
      render(<CalendarCarousel />);
      const futureDate = addDays(startOfToday(), 1); 
      const futureDateElement = screen.getByText(format(futureDate, 'd')).closest('div');
      fireEvent.click(futureDateElement);
      expect(futureDateElement).not.toHaveClass('bg-[#D79C59]');
    });
  
    // Test that past dates are selectable
    it('allows selecting a past date', () => {
      render(<CalendarCarousel />);
      const pastDate = addDays(startOfToday(), -1); 
      const pastDateElement = screen.getByText(format(pastDate, 'd')).closest('div');
      fireEvent.click(pastDateElement);
      expect(pastDateElement).toHaveClass('font-bold');
    });
  });
