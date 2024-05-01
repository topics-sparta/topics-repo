import { NextRequest, NextResponse } from "next/server";
import { createClient } from "/src/utils/supabase/server";

// pass in userID through params
// .../api/get-user-details/<userID>

export async function POST(request) {
  const supabase = createClient();

  const data = await request.json();

  try {
    //
    // get id from req.body
    // set .eq("id",req.body.id)
    // pass in data from form

    const { error, status } = await supabase
      .from("users")
      .update(data.formData)
      .eq("uuid", data.uuid);

    if (error) {
      console.log(error);
      return NextResponse.json({ error: error });
    } else {
      return NextResponse.json({ newUser: data.formData, status });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}
