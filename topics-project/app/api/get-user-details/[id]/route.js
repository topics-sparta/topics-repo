import { NextResponse } from "next/server";
import { createClient } from "/src/utils/supabase/server";

// pass in userID through params
// .../api/get-user-details/<userID>

export async function GET(request, context) {
  const supabase = createClient();
  const id = context.params.id;
  console.log(id);

  const { data, error, status } = await supabase
    .from("users")
    .select("*,nutrition_log(*)")
    .eq("uuid", id)
    .single();

  if (error) {
    console.log(error);
    return NextResponse.json({ error: error });
  } else {
    return NextResponse.json({ users: data, status });
  }
}
