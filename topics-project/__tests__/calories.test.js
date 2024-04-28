/** @jest-environment jsdom */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Calories } from "../app/(main)/home/_components/calories";

const calorieGoal = 2100;
const calories = 325;

describe("Calories module", () => {
    it("displays correct calories", () => {
        render(<Calories calorieGoal={calorieGoal} calories={calories} />)

        const calorieScreen = screen.queryByText('1775');

        expect(calorieScreen).toBeInTheDocument();
    })
})