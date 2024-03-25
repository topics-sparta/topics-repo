"use client";
import { Food } from "./_components/food";
import { CalendarCarousel } from "./_components/calendarcarousel";
import { CalendarSearch } from "lucide-react";
import { useFetchCalories } from "./action";

export default function HomePage() {
  {
    /* Issue with full sized screen, white space on both corners and bottom, whitespace always present after food card (needs addressing) */
  }
  {
    /* take array / storage from action . js and map to the food component (adjust UI of food component as well) */
  }

  const name = "Johan";
  const userID = "3523a764-3925-4f8a-bdac-0436313a2be6";
  const { calories, loading, error } = useFetchCalories(userID);

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
    <div className="w-full min-h-[calc(100vh-64px)] bg-customPrimary">
      <div className="lg:max-w-screen-xl mx-auto px-4 xl:px-0 flex flex-col gap-8">
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center text-customAccent">
            <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
            <div>
              <h1 className="greeting text-3xl font-poppins">
                <span className="font-normal">Hello, </span>
                <span className="text-3xl font-bold">{name}</span>
              </h1>
              <p className="text-customAccent/50">{formattedDate}</p>
            </div>
          </div>

          <div>
            <CalendarSearch />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <CalendarCarousel />
        </div>
        <div className="flex flex-col">
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
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-semibold text-amber-950 text-start">
            Activity
          </h1>
          <Food foodName="Eggs" mealType="Breakfast" quantity={4} kcals={320} />
        </div>
      </div>
    </div>
  );
}
