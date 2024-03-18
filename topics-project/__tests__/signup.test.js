/** @jest-environment jsdom */
import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import Signup from '../app/signup/page'
import * as actions from '../app/signup/actions'
import { expect } from '@playwright/test';

jest.mock('../app/signup/actions')

// Unit tests for signup component
describe('Signup Page', () => {
  it('renders sign up info form', () => {
    render(<Signup />)

    const nameField = screen.queryByPlaceholderText('Enter your name')
    expect(nameField).toBeInTheDocument()
  })

  it('does not render sign up metrics form', () => {
    render(<Signup />)

    const weightField = screen.queryByPlaceholderText('Enter your weight')
    expect(weightField).toBeNull()
  })

  it('renders sign up metrics form when user fills out form and clicks next', async () => {
    const user = userEvent.setup()
    render(<Signup />)

    const nameField = screen.getByPlaceholderText('Enter your name')
    const emailField = screen.getByPlaceholderText('Enter your email')
    const passwordField = screen.getByPlaceholderText('Create a password')
    const confirmPasswordField = screen.getByPlaceholderText('Confirm password')

    await userEvent.type(nameField, 'John Doe')
    await userEvent.type(emailField, 'jdoe@gmail.com')
    await userEvent.type(passwordField, 'test123')
    await userEvent.type(confirmPasswordField, 'test123')

    const nextButton = screen.getByRole('button', { name: "Next" })
    await user.click(nextButton)

    const weightField = screen.getByPlaceholderText('Enter your weight');
    expect(weightField).toBeInTheDocument();
  })

  it('does not render sign up metrics form when not all fields are filled', () => {
    render(<Signup />)
    const nameField = screen.getByPlaceholderText('Enter your name')
    const emailField = screen.getByPlaceholderText('Enter your email')
    const passwordField = screen.getByPlaceholderText('Create a password')

    userEvent.type(nameField, 'John Doe')
    userEvent.type(emailField, 'jdoe@gmail.com')
    userEvent.type(passwordField, 'test123')

    const nextButton = screen.getByText('Next')
    userEvent.click(nextButton)

    const weightField = screen.queryByPlaceholderText('Enter your weight')
    expect(weightField).toBeNull()
  })
});