"use client";
import { Food } from "./_components/food";
import { CalendarCarousel } from "./_components/calendarcarousel";
import { CalendarSearch } from "lucide-react";
import { useFetchMetrics, useFetchUserInfo } from "./action";
import Macros from "./_components/macros";
import { Calories } from "./_components/calories";
import { useMediaQuery } from "usehooks-ts";

export default function HomePage() {
  {
    /* take array / storage from action . js and map to the food component (adjust UI of food component as well) */
  }
  const name = "Johan";
  const userID = "65567f92-7a4e-4d12-b1dc-1c4e2dd7343f";
  const { calories, fat, carbs, protein, loading, error } =
    useFetchMetrics(userID);
  const { calorieGoal, proteinGoal, fatGoal, carbsGoal } = useFetchUserInfo(userID);
  const mobile = useMediaQuery('(max-width: 768px)');

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
                  <span class="text-3xl font-bold">{name}</span>
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
          <div class="flex flex-row justify-between w-full gap-2">
            <Calories calories={calories} calorieGoal={calorieGoal} />
            <Macros
              protein={protein}
              fat={fat}
              carbs={carbs}
              proteinGoal={proteinGoal}
              fatGoal={fatGoal}
              carbGoal={carbsGoal}
            />
          </div>
          <div class="flex flex-col gap-4">
            <h1 class="text-2xl font-semibold text-amber-950 text-start">
              Activity
            </h1>
            <Food
              foodName="Eggs"
              mealType="Breakfast"
              quantity={4}
              kcals={320}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
