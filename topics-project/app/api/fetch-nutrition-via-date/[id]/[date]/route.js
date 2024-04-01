import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export async function GET(request, context) {
  const { id, date } = context.params;

  let new_date = new Date(date); // gets the date passed in and makes obj

  let lowerbound_date = new_date.toISOString(); // turns the date into a str

  let upperbound_date = new Date(date); // new date obj
  upperbound_date.setDate(new_date.getDate() + 1); // make it exactly 1 day ahead
  upperbound_date = upperbound_date.toISOString(); // turns it in string

  const supabase = createClient();

  const { data: nutrition_data, error } = await supabase
    .from("nutrition_log")
    .select("*")
    .eq("uuid", id)
    .gte("created_at", lowerbound_date) // get all foods gte date
    .lte("created_at", upperbound_date); // but must be before the next day
  // so range is from CURRENT day to the END of day

  if (error) {
    return NextResponse.json({ error: error });
  }

  return NextResponse.json({ data_by_date: nutrition_data });
}
