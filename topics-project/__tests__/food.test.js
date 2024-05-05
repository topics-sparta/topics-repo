/** @jest-environment jsdom */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Food from '../app/(main)/home/_components/food';

describe("Food component", () => {
    it("displays the food name, meal type, quantity, and calories correctly", () => {
        const props = {
            foodName: "Apple Pie",
            mealType: "Dessert",
            quantity: 2,
            kcals: 250
        };

        render(<Food {...props} />);

        expect(screen.getByText(props.foodName)).toBeInTheDocument();
        expect(screen.getByText(props.mealType)).toBeInTheDocument();
        expect(screen.getByText(`x${props.quantity}`)).toBeInTheDocument();
        expect(screen.getByText(`${props.kcals} kcal`)).toBeInTheDocument();
    });
});
