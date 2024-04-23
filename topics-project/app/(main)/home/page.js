"use client";
import React, { useState, useEffect } from 'react';
import { Food } from "./_components/food";
import { CalendarCarousel } from "./_components/calendarcarousel";
import { CalendarSearch } from "lucide-react";
import { useFetchMetrics, useFetchUserInfo, useFetchNutritionByDate } from "./action";
import Macros from "./_components/macros";
import { Calories } from "./_components/calories";
import { createClient } from "@/utils/supabase/client";
import { format } from 'date-fns';

export default function HomePage() {
  const supabase = createClient();

  const [userID, setUserID] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    const getUserID = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (error) {
        console.error("Error fetching user:", error.message);
      } else {
        setUserID(data.user.id);
      }
    };
    getUserID();
  }, []);

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate); 
  };

  const carouseldate = format(selectedDate, 'MM-dd-yyyy');
    
  const { calories, fat, carbs, protein, loading, error } = useFetchMetrics(userID);
  const { calorieGoal, proteinGoal, fatGoal, carbsGoal, userName } = useFetchUserInfo(userID);

  const NutritionList = () => {
  const { nutritionEntries, loading, error } = useFetchNutritionByDate(userID, carouseldate);

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
            <CalendarCarousel onDateChange={handleDateChange} />
          </div>
          <div className="flex flex-row justify-between w-full gap-2">
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
            <NutritionList />
          </div>
        </div>
      </div>
    </div>
  );
}
