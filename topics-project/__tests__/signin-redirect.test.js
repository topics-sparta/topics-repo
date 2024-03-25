/** @jest-environment jsdom */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginPage from "../app/login/page";
import { createClient } from "../src/utils/supabase/client";
import { login } from "../app/login/actions";

jest.mock("../src/utils/supabase/client", () => ({
  createClient: jest.fn().mockReturnValue({
    auth: {
      signInWithPassword: jest.fn().mockResolvedValue({ error: null }), // Simulate success
    },
  }),
}));

jest.mock("../app/login/actions", () => ({
  login: jest.fn().mockResolvedValue({ message: "success", error: null }), // Mock login function
}));

describe("Sign-in form", () => {
  const user = userEvent.setup();

  // Integration Tests are the two below
  it("Form redirects after login", async () => {
    render(<LoginPage />);

    const emailField = screen.getByPlaceholderText("Enter email");
    const passwordField = screen.getByPlaceholderText("Enter password");
    const submitButton = screen.getByRole("button", { name: "LOGIN" });

    await user.type(emailField, "mansij@gmail.com");
    await user.type(passwordField, "password");

    await user.click(submitButton);

    await waitFor(() => {
        expect(window.location.pathname).toBe('/home');
      });

    const successTag = screen.getByText("Success!");

  });
});