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
    return new Response(JSON.stringify({ "calories": getTotalCalories(data),"fat":getTotalFat(data), "protein":getTotalProtein(data), "carbs":getTotalCarbs(data) }), { status: 200 });
}

function getUTCDate() {
  const currentDate = new Date();
  currentDate.setHours(currentDate.getHours() - 5);
  currentDate.setHours(0, 0, 0, 0);
  return currentDate.toISOString();
}
function getTotalCalories(data) {
  let totalCalories = 0;
  data.forEach(entry => {
    totalCalories += entry.calories;
  });
  return totalCalories;
}
function getTotalFat(data) {
  let totalFat = 0;
  data.forEach(entry => {
    totalFat += entry.fat;
  });
  return totalFat;
}
function getTotalProtein(data) {
  let totalProtein = 0;
  data.forEach(entry => {
    totalProtein += entry.protein;
  });
  return totalProtein;
}
function getTotalCarbs(data) {
  let totalCarbs = 0;
  data.forEach(entry => {
    totalCarbs += entry.carbs;
  });
  return totalCarbs;
}