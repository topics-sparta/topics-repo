"use server";

import { redirect } from "next/navigation";
import { createClient } from "../../../src/utils/supabase/server";

const insertDataInUserTable = async (id, formData) => {
  try {
    const supabase = createClient();

    const { data, error } = await supabase.from("users").insert({
      username: formData.name,
      height: formData.height,
      weight: formData.weight,
      goal: formData.goal,
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
