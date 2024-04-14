"use server";

import { redirect } from "next/navigation";
import { createClient } from "../../../../src/utils/supabase/server";

const insertDataInUserTable = async (id, formData) => {
  try {
    let dailyCalorieGoal, dailyFatGoal, dailyProteinGoal, dailyCarbGoal;
    
    // using some standard multipliers we can estimate a goal for daily goals
    if (formData.goal === "maintain") {
      dailyCalorieGoal = Math.round(formData.weight * 15);
      dailyProteinGoal = Math.round(formData.weight * 0.8);
      dailyFatGoal = Math.round(formData.weight * 0.35); 
      dailyCarbGoal = Math.round(formData.weight * 1);

    } else if (formData.goal =="gaining weight") {
        dailyCalorieGoal = Math.round(formData.weight * 180);
        dailyProteinGoal = Math.round(formData.weight * 1);
        dailyFatGoal = Math.round(formData.weight * 0.38); 
        dailyCarbGoal = Math.round(formData.weight * 1.2); 
    }
    else{
      dailyCalorieGoal = Math.round(formData.weight * 140); 
      dailyProteinGoal = Math.round(formData.weight * 0.8); 
      dailyFatGoal = Math.round(formData.weight * 0.30); 
      dailyCarbGoal = Math.round(formData.weight * .8);
    }
    const supabase = createClient();

    const { data, error } = await supabase.from("users").insert({
      username: formData.name,
      height: formData.height,
      weight: formData.weight,
      goal: formData.goal,
      daily_fat_goal: dailyFatGoal,
      daily_protein_goal: dailyProteinGoal,
      daily_carb_goal: dailyCarbGoal, 
      daily_calorie_goal: dailyCalorieGoal,
      uuid: id,
    });
    if (error) {
      console.log(error);
    }
  } catch (error) {
    console.log(error);
  }
};

export async function signup(formData) {
  const supabase = createClient();

  const data_ = {
    email: formData.email,
    password: formData.password,
    options: {
      data: {
        name: formData.name,
        height: formData.height,
        weight: formData.weight,
        goal: formData.goal,
      },
    },
  };

  try {
    const { data, error } = await supabase.auth.signUp(data_);
    if (error) {
      throw error;
    }

    insertDataInUserTable(data.user.id, formData);

    const {
      data: { user },
    } = await supabase.auth.getUser();

    return user;
  } catch (error) {
    console.log(error);
    redirect("/error");
  }
}
