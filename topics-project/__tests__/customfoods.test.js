/** @jest-environment jsdom */
import {
  render,
  fireEvent,
  waitFor,
  screen,
  getByLabelText,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import CustomFoodForm from "../app/customfoods/page";
import * as actionModule from "../app/customfoods/action";

jest.mock("../app/customfoods/action", () => ({
  sendData: jest.fn(),
}));

describe("customfood and integration test", () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  it("fills out the form and sends data", async () => {
    actionModule.sendData.mockResolvedValue();

    const { getByLabelText, container } = render(<CustomFoodForm />);

    fireEvent.change(getByLabelText(/Food Name:/i), {
      target: { value: "Test" },
    });
    fireEvent.change(getByLabelText(/Calorie Count:/i), {
      target: { value: 12345 },
    });
    fireEvent.change(getByLabelText(/Fat:/i), { target: { value: 0 } });
    fireEvent.change(getByLabelText(/Protein:/i), { target: { value: 999 } });
    fireEvent.change(getByLabelText(/Carbs:/i), { target: { value: 222 } });

    const form = container.querySelector("form");
    fireEvent.submit(form);

    await waitFor(() => {
      expect(actionModule.sendData).toHaveReturned(); // runs with no errors
      expect(getByLabelText(/Fat:/i)).toHaveTextContent("");
      expect(getByLabelText(/Protein:/i)).toHaveTextContent("");
      expect(getByLabelText(/Carbs:/i)).toHaveTextContent("");
    });
  });
});
