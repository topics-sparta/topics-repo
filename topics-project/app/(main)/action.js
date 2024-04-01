"use server"
import { createClient } from "@/utils/supabase/server";

export async function signOut() {
    try {
        const supabase = createClient();
        const { error } = await supabase.auth.signOut();
        if(error) {
            throw error;
        }
        return { message: "success", error: null };
    } catch(error){
        console.log(error);
        return { message: "error", error: error.message };
    }
}