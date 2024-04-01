import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export async function GET(request) {
  const supabase = createClient();
  const userID = request.nextUrl.searchParams.get("userID");

  const currentUTCDate = getUTCDate();

  const { data, error } = await supabase
    .from("nutrition_log")
    .select('*')
    .eq('uuid', userID)
    .gte('created_at', currentUTCDate)
    .lte('created_at', new Date().toISOString());

  if (error)
    return new Response(JSON.stringify({ "error": error.message }), { status: 500 });
  else
    return new Response(JSON.stringify({ "calories": getTotalMetric(data, 'calories'),"fat": getTotalMetric(data, 'fat'), "protein":getTotalMetric(data, 'protein'), "carbs":getTotalMetric(data, 'carbs') }), { status: 200 });
}

function getUTCDate() {
  const currentDate = new Date();
  currentDate.setHours(currentDate.getHours() - 5);
  currentDate.setHours(0, 0, 0, 0);
  return currentDate.toISOString();
}
function getTotalMetric(data, metric) {
  let totalMetric = 0;
  data.forEach(entry => {
    totalMetric += entry[metric];
  });
  return totalMetric;
}
