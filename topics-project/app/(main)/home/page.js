"use client";
import { Food } from "./_components/food";
import { CalendarCarousel } from "./_components/calendarcarousel";
import { CalendarSearch } from "lucide-react";
import { useFetchMetrics, useFetchUserInfo, useFetchNutritionByDate } from "./action";
import Macros from "./_components/macros";
import { createClient } from "@/utils/supabase/client";

export default function HomePage() {
  const supabase = createClient();

  var userID = "";

  const getUserID = async () => {
    const origin = window.location.origin;
    const { data, error } = await supabase.auth.getUser();

    if (error) {
      console.error("Error fetching user:", error.message);
    } else {
      console.log(data.user.id);
      userID = data.user.id;
    }
  };
  getUserID();

  const name = "Johan";
  
  const { calories, fat, carbs, protein, loading, error } = useFetchMetrics(userID);
  const { proteinGoal, fatGoal, carbsGoal, userName } = useFetchUserInfo(userID);

  const NutritionList = () => {
  const { nutritionEntries, loading, error } = useFetchNutritionByDate(userID, '04-14-2024');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="flex flex-wrap gap-4">
      {nutritionEntries.map((entry, index) => (
        <Food
          key={index}
          foodName={entry.foodName}
          mealType="Unknown" 
          quantity={1} 
          kcals={entry.calories}
        />
      ))}
    </div>
  );  
};

  function getFormattedDate() {
    const daysOfWeek = [
      "SUNDAY",
      "MONDAY",
      "TUESDAY",
      "WEDNESDAY",
      "THURSDAY",
      "FRIDAY",
      "SATURDAY",
    ];
    const monthsOfYear = [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ];

    const currentDate = new Date();
    const dayOfWeek = daysOfWeek[currentDate.getDay()];
    const month = monthsOfYear[currentDate.getMonth()];
    const dayOfMonth = currentDate.getDate();

    return `${dayOfWeek}, ${month} ${dayOfMonth}`;
  }

  const formattedDate = getFormattedDate();

  return (
    <div className="w-full h-full bg-customPrimary">
      <div className="w-full xl:w-11/12 mx-auto h-full">
      <div className="lg:max-w-screen-xl mx-auto px-4 xl:px-0 flex flex-col gap-8">
        <div class="flex items-center justify-between mt-8">
          <div class="flex items-center text-customAccent">
            <div class="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
            <div>
              <h1 className="greeting text-3xl font-poppins">
                <span className="font-normal">Hello, </span>
                <span class="text-3xl font-bold">{userName}</span>
              </h1>
              <p class="text-customAccent/50">{formattedDate}</p>
            </div>
          </div>

          <div>
            <CalendarSearch />
          </div>
        </div>
        <div class="flex items-center justify-center">
          <CalendarCarousel />
        </div>
        <div class="flex flex-row justify-around w-full">
          <div
            className="bg-customAccent/10 rounded-lg shadow-lg w-6/12 h-fit p-2 max-w-52 flex flex-col justify-between"
          >
            <h1
              className="text-base font-semibold font-poppins text-customAccent text-start md:text-lg"
            >
              Calories
            </h1>
            <div className="relative flex flex-grow justify-center items-center w-full h-full">
              <svg className="w-10/12 h-5/6" viewBox="0 0 190 190">
                <circle
                  className="progress-ring__circle"
                  stroke="white"
                  strokeWidth="6"
                  fill="transparent"
                  r="85"
                  cx="95"
                  cy="95"
                />
              </svg>
              <div className="absolute flex flex-col items-center justify-center inset-0">
                <span
                  className="text-md font-bold text-amber-950 
                                            sm:text-lg 
                                            md:text-xl 
                                            lg:text-2xl"
                >
                  {calories}
                </span>
                <span
                  className="text-xs font-redHatText text-customAccent/60
                                            sm:text-sm 
                                            md:text-sm 
                                            lg:text-sm"
                >
                  Kcal Left
                </span>
              </div>
            </div>
          </div>

          <Macros protein={protein} fat={fat} carbs={carbs} proteinGoal={proteinGoal} fatGoal={fatGoal} carbGoal={carbsGoal}/>
        </div>
        <div class="flex flex-col gap-4">
          <h1 class="text-2xl font-semibold text-amber-950 text-start">
            Activity
          </h1>
          <NutritionList />
        </div>
      </div>
      </div>
    </div>
  );
}
