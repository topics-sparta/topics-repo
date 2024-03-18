/** @jest-environment jsdom */
import React from 'react';
import { render, fireEvent, waitFor, screen, getByLabelText } from '@testing-library/react';
import '@testing-library/jest-dom';
import CustomFoodForm from '../app/customfoods/page'; 
import * as actionModule from '../app/customfoods/action';


// Mock the module 
jest.mock('../app/customfoods/action', () => ({
    sendData: jest.fn(),
  }));

describe('CustomFoodForm and sendData Integration', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  it('successfully submits data through the form and calls sendData', async () => {
    actionModule.sendData.mockResolvedValue();
  
    const { getByLabelText, container } = render(<CustomFoodForm />);
  
    // Fill out the form fields
    fireEvent.change(getByLabelText(/Food Name:/i), { target: { value: 'Test Food' } });
    fireEvent.change(getByLabelText(/Calorie Count:/i), { target: { value: 100 } });
    fireEvent.change(getByLabelText(/Protein:/i), { target: { value: 5 } });
    fireEvent.change(getByLabelText(/Fat:/i), { target: { value: 0 } });
    fireEvent.change(getByLabelText(/Carbs:/i), { target: { value: 20 } });
  
    const form = container.querySelector('form');
    fireEvent.submit(form);
  
    await waitFor(() => {
      expect(actionModule.sendData).toHaveBeenCalledWith(expect.anything()); 
    });
  });  
});

