"use server";
import { createClient } from "../../src/utils/supabase/server";

// Create the client
const supabase = createClient();

// takes our handled form and sends it to SB using a hard coded uuid for now
export async function sendData(handledformData, userID) {
  try {
    const { error } = await supabase.from("nutrition_log").insert([
      {
        uuid: userID,
        food_name: handledformData.food_name,
        calories: handledformData.calories * handledformData.servings,
        protein: handledformData.protein * handledformData.servings,
        fat: handledformData.fat * handledformData.servings,
        carbs: handledformData.carbs * handledformData.servings,
      },
    ]);
    if (error) {
      throw error;
    }
  } catch (error) {
    console.error("Error reporting message:", error);
  }
}
