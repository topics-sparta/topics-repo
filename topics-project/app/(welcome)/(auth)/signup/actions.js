"use server";

import { createClient } from "../../../../src/utils/supabase/server";

const insertDataInUserTable = async (id, formData) => {
  try {
    let dailyCalorieGoal, dailyFatGoal, dailyProteinGoal, dailyCarbGoal;
    
    // using some standard multipliers we can estimate a goal for daily goals
    if (formData.goal === "maintenance") {
      dailyCalorieGoal = Math.round(formData.weight * 15);
      dailyProteinGoal = Math.round(formData.weight * 0.8);
      dailyFatGoal = Math.round((dailyCalorieGoal * 0.20) / 9); 
      dailyCarbGoal = Math.round((dailyCalorieGoal - ((dailyProteinGoal * 4) + (dailyFatGoal * 9))) / 4);

    } else if (formData.goal =="gaining weight") {
        dailyCalorieGoal = Math.round((formData.weight * 15)  + 300);
        dailyProteinGoal = Math.round(formData.weight * .8);
        dailyFatGoal = Math.round((dailyCalorieGoal * 0.20) / 9); 
        dailyCarbGoal = Math.round((dailyCalorieGoal - ((dailyProteinGoal * 4) + (dailyFatGoal * 9))) / 4); 
    }
    else{
      dailyCalorieGoal = Math.round((formData.weight * 15)  - 300); 
      dailyProteinGoal = Math.round(formData.weight * .8); 
      dailyFatGoal = Math.round((dailyCalorieGoal * 0.20) / 9); 
      dailyCarbGoal = Math.round((dailyCalorieGoal - ((dailyProteinGoal * 4) + (dailyFatGoal * 9))) / 4);
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

  const { data, error } = await supabase.auth.signUp(data_);
  if (error) {
    throw error;
  }

  insertDataInUserTable(data.user.id, formData);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user;
}