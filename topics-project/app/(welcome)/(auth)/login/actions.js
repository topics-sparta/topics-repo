"use server";
import { supabase } from "@/utils/supabase/clientTwo";

export async function login(prevState, formData) {
  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  try {
    const { error } = await supabase.auth.signInWithPassword(data);
    if (error) {
      throw error;
    }
    return {
      message: "success",
      errors: undefined,
      fieldValues: {
        email: "",
        password: ""
      }
    }
  } catch (error) {
    return {
      message: "error",
      errors: error.message,
      fieldValues: {
        email: data.email,
        password: data.password
      }
    }
  }
}
