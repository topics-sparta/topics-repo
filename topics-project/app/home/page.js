"use client";
import { useState } from "react";

export default function HomePage() {



    return (
        <div className="min-h-[calc(100vh-64px)] flex flex-col bg-customPrimary w-full">

            <div class="flex items-center justify-between p-4 border-b border-gray-200">
            <div class="flex items-center">
            <div class="w-10 h-10 bg-gray-200 rounded-full mr-4"></div>
            <div>
                <h1 class="text-xl font-semibold">Hello, Johan</h1>
                <p class="text-sm text-gray-600">MONDAY, MAR 10</p>
            </div>
            </div>
            <div>
            <button class="p-2 rounded-full hover:bg-gray-100 focus:outline-none">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7H5H21"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 20h12a2 2 0 002-2V9a2 2 0 00-2-2H6a2 2 0 00-2 2v9a2 2 0 002 2z"></path>
                </svg>
            </button>
            </div>
            </div>

            <div class="flex justify-center items-center mt-4 p-4">
                <div class="flex space-x-4">
                <div class="text-center">
                    <div class="text-sm font-medium text-gray-500">Fri</div>
                    <div class="text-lg font-medium">7</div>
                </div>
                <div class="text-center">
                    <div class="text-sm font-medium text-gray-500">Sat</div>
                    <div class="text-lg font-medium">8</div>
                </div>

                <div class="text-center">
                    <div class="text-sm font-medium text-gray-500">Sun</div>
                    <div class="text-lg font-medium">9</div>
                </div>
                <div class="text-center rounded-full bg-orange-200">
                    <div class="text-sm font-medium text-gray-500">Mon</div>
                    <div class="text-lg font-medium text-white bg-orange-500 rounded-full w-10 h-10 flex items-center justify-center">10</div>
                </div>
                <div class="text-center">
                    <div class="text-sm font-medium text-gray-500">Tue</div>
                    <div class="text-lg font-medium">11</div>
                </div>
                </div>
            </div>

        <div class="bg-orange-100 rounded-lg shadow-lg w-60 h-64 flex flex-col justify-between p-2">
        <h1 class="text-lg font-semibold text-amber-950 text-start">Calories</h1>
        <div class="relative flex flex-grow justify-center items-center w-full h-full">
            <svg class="progress-ring w-50 h-42" width="150" height="150">
                <circle class="progress-ring__circle"
                        stroke="white"
                        stroke-width="4"
                        fill="transparent"
                        r="90"
                        cx="64"
                        cy="64"/>
                <circle class="progress-ring__circle"
                        stroke="blue"
                        stroke-width="4"
                        stroke-dasharray="326.725" /* Circumference */
                        stroke-dashoffset="326.725" /* Adjust this value */
                        fill="transparent"
                        r="52"
                        cx="64"
                        cy="64"/>
            </svg>
            <div class="absolute flex flex-col items-center justify-center">
                <span class="text-2xl text-amber-950 font-bold">720</span>
                <span class="block text-amber-950 text-sm">Kcal Left</span>
            </div>
        </div>
        </div> 

        <h1 class="text-lg font-semibold text-amber-950 text-start">Activity</h1>


        </div>

    )
}