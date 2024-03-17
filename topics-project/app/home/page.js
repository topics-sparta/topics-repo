"use client";
import { Food } from './_components/food';
import { CalendarCarousel } from './_components/calendarcarousel';
import { CalendarSearch } from 'lucide-react';
import { useFetchCalories } from './action'


export default function HomePage() {
    {/* Issue with full sized screen, white space on both corners and bottom, whitespace always present after food card (needs addressing) */}
    {/* take array / storage from action . js and map to the food component (adjust UI of food component as well) */}

    const name = "Johan";
    const userID = '3523a764-3925-4f8a-bdac-0436313a2be6'
    const { calories, loading, error } = useFetchCalories(userID);

    function getFormattedDate() {
        const daysOfWeek = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
        const monthsOfYear = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
      
        const currentDate = new Date();
        const dayOfWeek = daysOfWeek[currentDate.getDay()];
        const month = monthsOfYear[currentDate.getMonth()];
        const dayOfMonth = currentDate.getDate();
        
        return `${dayOfWeek}, ${month} ${dayOfMonth}`;
      }
      
      const formattedDate = getFormattedDate();



    return (
        <div className="lg:max-w-screen-xl mx-auto px-4 xl:px-0 flex flex-col bg-customPrimary w-full">

            <div class="px-4 xl:px-0 flex items-center justify-between p-4">
                <div class="flex items-center">
                    <div class="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                        <div>
                        <h1 className="greeting">
                            <span class="text-3xl text-[#4C220A]">Hello, </span>
                            <span class="text-[#4C220A] text-3xl font-extrabold">{name}</span>
                        </h1>
                        <p class="text-[#4C220A] text-opacity-50">{formattedDate}</p>
                    </div>
                </div>

                <div>
                    <CalendarSearch />
                </div>
            </div>

            <div class="flex items-center justify-center pt-12 pb-16">
                <CalendarCarousel />
            </div>

            <div class="pl-6">
                <div className="bg-[#EDE2D6] rounded-lg shadow-lg w-36 h-40 flex flex-col justify-between 
                                sm:w-48 sm:h-52 sm:p-4 
                                md:w-56 md:h-60 
                                lg:w-60 lg:h-64 lg:p-4">
                    <h1 className="text-sm font-semibold text-amber-950 text-start 
                                    sm:text-md 
                                    md:text-lg 
                                    lg:text-lg">Calories
                    </h1>
                    <div className="relative flex flex-grow justify-center items-center w-full h-full">
                        <svg className="w-full h-full max-w-full" viewBox="0 0 190 190">
                        <circle className="progress-ring__circle"
                                stroke="white"
                                strokeWidth="6" 
                                fill="transparent"
                                r="85" 
                                cx="95" cy="95"/>
                        </svg>
                        <div className="absolute flex flex-col items-center justify-center inset-0">
                            <span className="text-md font-bold text-amber-950 
                                            sm:text-lg 
                                            md:text-xl 
                                            lg:text-2xl">{calories}</span>
                            <span className="text-xs text-amber-950 
                                            sm:text-sm 
                                            md:text-sm 
                                            lg:text-sm">Kcal Left</span>
                        </div>
                    </div>

                </div>
            </div>

            <h1 class="text-2xl font-semibold text-amber-950 text-start pl-6 pt-12 pb-12">Activity</h1>

            <div class="pl-6">
                <Food foodName="Eggs" mealType="Breakfast" quantity={4} kcals={320}/>
            </div>      

        </div>

    )
}