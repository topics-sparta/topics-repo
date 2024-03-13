import { NextResponse } from "next/server";
import { createClient } from "/src/utils/supabase/server";

export async function GET(request, context) {
  const supabase = createClient();
  const id = context.params.id;
  console.log(id);

  const { data, error, status } = await supabase
    .from("users")
    .select()
    .eq("uuid", "3523a764-3925-4f8a-bdac-0436313a2be6")
    .single();

  if (error) {
    return NextResponse.json({ error: error });
  } else {
    return NextResponse.json({ users: data, status });
  }
}
