"use server";

import { redirect } from "next/navigation";
import { createClient } from "../../../src/utils/supabase/server";

export async function signup(formData) {
  const supabase = createClient();

  const data = {
    email: formData.email,
    password: formData.password,
    options: {
      data: {
        name: formData.name,
        height: formData.height,
        weight: formData.weight,
        goal: formData.goal
      }
    }

  };

  try {
    const { error } = await supabase.auth.signUp(data);
    if (error) {
      throw error;
    }
    const { data: { user } } = await supabase.auth.getUser();
    console.log(user)
    return user;

  } catch (error) {
    console.log(error);
    redirect("/error");
  }
}