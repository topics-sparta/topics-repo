"use server";

import { createClient } from "../../src/utils/supabase/client";

export async function login(formData) {
  const supabase = createClient();

  const data = {
    email: formData.email,
    password: formData.password,
  };

  try {
    const { error } = await supabase.auth.signInWithPassword(data);
    if (error) {
      throw error;
    }
    return { message: "success", error: null }
  } catch (error) {
    return { message: "error", error: error.message };
  }
}
