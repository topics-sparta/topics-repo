/** @jest-environment jsdom */
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import HomePage from '../app/home/page'; 
import * as hooks from '../app/home/action'; 

// Mock the useFetchCalories hook
jest.mock('../app/home/action', () => ({
  useFetchCalories: jest.fn(),
}));

//Integration test
describe('API provides 0 to the component', () => {
  beforeEach(() => {
    hooks.useFetchCalories.mockReturnValue({
      calories: 0,
      loading: false,
      error: null,
    });
  });

  it('displays 0 calories correctly in the calories box', () => {
    // Render the HomePage component
    render(<HomePage />);

    // Assert that the calories box displays "0"
    expect(screen.getByText('0')).toBeInTheDocument();
    expect(screen.getByText('Kcal Left')).toBeInTheDocument();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

