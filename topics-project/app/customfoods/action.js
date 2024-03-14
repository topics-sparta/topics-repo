"use server";
import { createClient } from "/src/utils/supabase/server";
// Create the client
const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );

  // takes our handled form and sends it to SB using a hard coded uuid for now 
export async function sendData(handeledformData) {
    try {
      const { data, error } = await supabase
      .from("nutrition_log")
      .insert([
        {
          uuid: "65567f92-7a4e-4d12-b1dc-1c4e2dd7343f",
          food_name: handeledformData.food_name,
          calories: handeledformData.calories,
          protein: handeledformData.protein,
          fat: handeledformData.fat,
          carbs: handeledformData.carbs,
        },
      ]);
      if (error) {
        console.error("Error sending data to Supabase:", error.message);
        return;
      }
      // Used to check for successfuly connection to DB
      //console.log("Data sent to Supabase successfully:");
    } catch (error) {
      console.error("Error submitting form:", error.message);
      // Handle error (e.g., show error message to user)
    }
  };



  