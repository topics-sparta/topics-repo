/** @jest-environment jsdom */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Macros from "../app/(main)/home/_components/macros";

const protein = 100;
const proteinGoal = 150;

const carbs = 150;
const carbGoal = 200;

const fats = 40;
const fatGoal = 80;

describe("Macros module", () => {
    it("displays correct macro values", () => {
        render(<Macros protein={protein} proteinGoal={proteinGoal} carbs={carbs} carbGoal={carbGoal} fat={fats} fatGoal={fatGoal} />)

        const proteinScreen = screen.queryByText('100');
        const carbScreen = screen.queryByText('150');
        const fatScreen = screen.queryByText('40');

        expect(proteinScreen).toBeInTheDocument();
        expect(carbScreen).toBeInTheDocument();
        expect(fatScreen).toBeInTheDocument();
    })
})