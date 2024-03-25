/** @jest-environment jsdom */
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import HomePage from '../app/home/page'; // Adjust the import path based on your file structure
import * as hooks from '../app/home/action'; // Adjust the import path to where your useFetchCalories hook is defined

// Mock the useFetchCalories hook
jest.mock('../app/home/action', () => ({
  useFetchCalories: jest.fn(),
}));

//Integration tests
describe('API provides 0 to the component', () => {
  beforeEach(() => {
    // Before each test, mock the hook to return 0 calories, and no loading or error state
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
    // Clear all mocks after each test
    jest.clearAllMocks();
  });
});

