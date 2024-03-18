/** @jest-environment jsdom */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginPage from "../app/login/page";
import { createClient } from "../src/utils/supabase/client";
import { login } from "../app/login/actions"; // Adjust the import path to where your login function is

jest.mock("../src/utils/supabase/client", () => ({
  createClient: jest.fn().mockReturnValue({
    auth: {
      signInWithPassword: jest.fn().mockResolvedValue({ error: null }), // Simulate success
    },
  }),
}));

jest.mock("../app/login/actions", () => ({
  login: jest.fn().mockResolvedValue({ message: "success", error: null }), // Mock your login function
}));

describe("Sign-in form", () => {
  const user = userEvent.setup();
  it("Form renders properly", () => {
    render(<LoginPage />);

    const emailField = screen.getByPlaceholderText("Enter email");
    const passwordField = screen.getByPlaceholderText("Enter password");

    expect(emailField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();
  });

  it("Form email field requires email formatting", async () => {
    render(<LoginPage />);

    const emailField = screen.getByPlaceholderText("Enter email");

    await user.type(emailField, "johan");
    expect(emailField).toBeInvalid();

    await user.type(emailField, "test@gmail.com");
    expect(emailField).toBeValid();
  });
  it("Form resets after success", async () => {
    render(<LoginPage />);

    const emailField = screen.getByPlaceholderText("Enter email");
    const passwordField = screen.getByPlaceholderText("Enter password");
    const submitButton = screen.getByRole("button", { name: "LOGIN" });

    await user.type(emailField, "johandelao10@gmail.com");
    await user.type(passwordField, "password");

    await user.click(submitButton);

    expect(login).toHaveBeenCalledWith({
      email: "johandelao10@gmail.com",
      password: "password",
    });

    const successTag = screen.getByText("Success!");
    expect(successTag).toBeInTheDocument();
    expect(emailField).toBeInvalid();
    expect(passwordField).toBeInvalid();
  });
  it("Form shows error on invalid credentials", async () => {
    login.mockImplementationOnce(() =>
      Promise.resolve({ message: "error", error: "Invalid credentials" })
    );

    render(<LoginPage />);

    const emailField = screen.getByPlaceholderText("Enter email");
    const passwordField = screen.getByPlaceholderText("Enter password");
    const submitButton = screen.getByRole("button", { name: "LOGIN" });

    // Use the "wrong" credentials that trigger an error
    await user.type(emailField, "wrong@example.com");
    await user.type(passwordField, "wrongpass");

    await user.click(submitButton);

    expect(login).toHaveBeenCalledWith({
      email: "wrong@example.com",
      password: "wrongpass",
    });

    // Assuming your UI shows an error message in a specific element when login fails
    const errorTag = await screen.findByText("Invalid credentials");
    expect(errorTag).toBeInTheDocument();
    expect(emailField.value).toBe("wrong@example.com");
    expect(passwordField.value).toBe("wrongpass");
  });
});
