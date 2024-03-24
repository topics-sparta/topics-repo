"use server";
import { createClient } from "../../src/utils/supabase/server";

// Create the client
const supabase = createClient();

// Helper function to validate a number field
function validateNumberField(field, fieldName) {
  if (typeof field !== "number" || field < 0) {
    console.error(`Error: ${fieldName} must be a positive number.`);
    return { errorMessage: `${fieldName} must be a positive number.` };
  }
  return null;
}

// Function to send handled form data to Supabase
export async function sendData(handledformData) {
  const errors = [];

  if (!handledformData.food_name) {
    console.error("Error: Food name is required.");
    errors.push("Food name is required.");
  }

  errors.push(validateNumberField(handledformData.calories, "Calories"));
  errors.push(validateNumberField(handledformData.protein, "Protein"));
  errors.push(validateNumberField(handledformData.fat, "Fat"));
  errors.push(validateNumberField(handledformData.carbs, "Carbs"));

  const hasErrors = errors.some((error) => error !== null);
  if (hasErrors) {
    return { errorMessage: errors.filter((error) => error !== null).join(" ") };
  }

  try {
    const { error } = await supabase.from("nutrition_log").insert([
      {
        uuid: "65567f92-7a4e-4d12-b1dc-1c4e2dd7343f",
        food_name: handledformData.food_name,
        calories: handledformData.calories,
        protein: handledformData.protein,
        fat: handledformData.fat,
        carbs: handledformData.carbs,
      },
    ]);
    if (error) {
      throw error;
    }
  } catch (error) {
    console.error("Error reporting message:", error);
  }
}
