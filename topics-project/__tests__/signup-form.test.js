/** @jest-environment jsdom */
import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import Signup from '../app/(welcome)/(auth)/signup/page'
import { InfoForm } from '../app/(welcome)/(auth)/signup/_components/infoForm'
import { MetricsForm } from '../app/(welcome)/(auth)/signup/_components/metricsForm'
import * as actions from '../app/(welcome)/(auth)/signup/actions'
import { expect } from '@playwright/test';

jest.mock('../app/(welcome)/(auth)/signup/actions')

// Unit tests for info form component
describe('Info Form', () => {
  it('happy path: renders info form', () => {
    const formData = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      height: 54,
      weight: 160,
      goal: ""
    };

    const handleInputChange = jest.fn();
    const toggleNext = jest.fn();
    render(<InfoForm formData={formData} handleInputChange={handleInputChange} toggleNext={toggleNext} />)

    const nameField = screen.queryByPlaceholderText('Enter your name')
    expect(nameField).toBeInTheDocument()
  })

  it('happy path: form fields fill out as expected', async () => {
    const formData = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      height: 54,
      weight: 160,
      goal: ""
    };

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      formData[name] = formData[name] + value;
    };
    const toggleNext = jest.fn();
    render(<InfoForm formData={formData} handleInputChange={handleInputChange} toggleNext={toggleNext} />)

    const nameField = screen.getByPlaceholderText('Enter your name');
    const emailField = screen.getByPlaceholderText('Enter your email');
    const passwordField = screen.getByPlaceholderText('Create a password');
    const confirmPasswordField = screen.getByPlaceholderText('Confirm password');

    await userEvent.type(nameField, 'John Doe');
    await userEvent.type(emailField, 'jdoe@gmail.com');
    await userEvent.type(passwordField, 'test123');
    await userEvent.type(confirmPasswordField, 'test123');

    expect(formData.name).toEqual('John Doe');
    expect(formData.email).toEqual('jdoe@gmail.com');
    expect(formData.password).toEqual('test123');
    expect(formData.confirmPassword).toEqual('test123');

  })
});

describe('Metrics Form', () => {
  it('happy path: renders metrics form', () => {
    const formData = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      height: 54,
      weight: 160,
      goal: ""
    };

    const handleInputChange = jest.fn();
    const handleSubmit = jest.fn();
    const toggleNext = jest.fn();
    render(<MetricsForm formData={formData} handleInputChange={handleInputChange} handleSubmit={handleSubmit} toggleNext={toggleNext} />)

    const weightField = screen.queryByPlaceholderText('Enter your weight')
    expect(weightField).toBeInTheDocument()
  })

<<<<<<< HEAD
=======
  it('sad path: error in info form when no params sent', () => {
    expect(() => render(<MetricsForm />)).toThrow("Cannot read properties of undefined");
  })
>>>>>>> b58c045 (combining tests)

  it('happy path: form fields fill out as expected', async () => {
    const formData = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      height: "",
      weight: "",
      goal: ""
    };

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      formData[name] = formData[name] + value;
    };
    const handleSubmit = jest.fn();
    const toggleNext = jest.fn();
    render(<MetricsForm formData={formData} handleInputChange={handleInputChange} handleSubmit={handleSubmit} toggleNext={toggleNext} />)

    const weightField = screen.queryByPlaceholderText('Enter your weight');
    const maleRadioButton = screen.getByLabelText('Male');
    const goalSelect = screen.getByLabelText('Goal');

    fireEvent.click(maleRadioButton);
    fireEvent.change(goalSelect, { target: { value: 'maintenance' } });

    expect(maleRadioButton).toBeTruthy();
    expect(formData.goal).toEqual('maintenance');

  })

  it('sad path: weightField does not fill out with letters', async () => {
    const formData = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      height: 54,
      weight: "",
      goal: ""
    };

    const handleInputChange = jest.fn();
    const handleSubmit = jest.fn();
    const toggleNext = jest.fn();
    render(<MetricsForm formData={formData} handleInputChange={handleInputChange} handleSubmit={handleSubmit} toggleNext={toggleNext} />)

    const weightField = screen.queryByPlaceholderText('Enter your weight');

    await userEvent.type(weightField, 'xyz');

    expect(weightField.value).toEqual('');
  })

});

// Integration tests for signup
// Test action to create new user
// Check if new user exists in db using /get-user endpoint

describe('Signup integration tests', () => {
  it('happy path: renders sign up info form', () => {
    render(<Signup />)

    const nameField = screen.queryByPlaceholderText('Enter your name')
    expect(nameField).toBeInTheDocument()
  })

  it('sad path: does not render sign up metrics form', () => {
    render(<Signup />)

    const weightField = screen.queryByPlaceholderText('Enter your weight')
    expect(weightField).toBeNull()
  })

  it('happy path: renders sign up metrics form when user fills out form and clicks next', async () => {
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

  it('sad path: does not render sign up metrics form when not all fields are filled', () => {
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
  it('happy path: calls signup action when user fills out form and clicks create account', async () => {
    const user = userEvent.setup()
    render(<Signup />)

    const nameField = screen.getByPlaceholderText('Enter your name');
    const emailField = screen.getByPlaceholderText('Enter your email');
    const passwordField = screen.getByPlaceholderText('Create a password');
    const confirmPasswordField = screen.getByPlaceholderText('Confirm password');

    await userEvent.type(nameField, 'John Doe');
    await userEvent.type(emailField, 'jdoe@gmail.com');
    await userEvent.type(passwordField, 'test123');
    await userEvent.type(confirmPasswordField, 'test123');

    const nextButton = screen.getByRole('button', { name: "Next" });
    await user.click(nextButton);

    const weightField = screen.queryByPlaceholderText('Enter your weight');
    const maleRadioButton = screen.getByLabelText('Male');
    const goalSelect = screen.getByLabelText('Goal');

    await userEvent.type(weightField, '180');
    fireEvent.click(maleRadioButton);
    fireEvent.change(goalSelect, { target: { value: 'maintenance' } });

    const createAccountButton = screen.getByRole('button', { name: "CREATE ACCOUNT" })
    await user.click(createAccountButton)
    expect(actions.signup).toBeCalled();

  })
});