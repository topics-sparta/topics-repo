"use server";
import { createClient } from "../../src/utils/supabase/server";
// Create the client
const supabase = createClient();

  // takes our handled form and sends it to SB using a hard coded uuid for now 
export async function sendData(handledformData) {
  if (!handledformData.food_name) {
    console.error("Error: Food name is required.");
    return { error: new Error("Food name is required.") };
  }
  if (typeof handledformData.calories !== 'number' || handledformData.calories <= 0) {
    console.error("Error: Calories must be a positive number.");
    return { error: new Error("Calories must be a positive number.") };
  }
  if (typeof handledformData.protein !== 'number' || handledformData.calories <= 0) {
    console.error("Error: Protein must be a positive number.");
    return { error: new Error("Protein must be a positive number.") };
  }
  if (typeof handledformData.fat !== 'number' || handledformData.calories <= 0) {
    console.error("Error: Fat must be a positive number.");
    return { error: new Error("Fat must be a positive number.") };
  }
  if (typeof handledformData.carbs !== 'number' || handledformData.calories <= 0) {
    console.error("Error: Carbs must be a positive number.");
    return { error: new Error("Carbs must be a positive number.") };
  }
    try {
      const { error } = await supabase
      .from("nutrition_log")
      .insert([
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
  };



  