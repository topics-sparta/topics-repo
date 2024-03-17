import React, { useState } from 'react';
import { format, addDays, isBefore, isSameDay, startOfToday } from 'date-fns';

export const CalendarCarousel = () => {
  const [selectedDate, setSelectedDate] = useState(startOfToday());

  // Function to determine if the date should be clickable
  const isClickable = (date) => {
    return isBefore(date, startOfToday()) || isSameDay(date, startOfToday());
  };

  // Generate an array of dates for the carousel
  const dates = Array.from({ length: 7 }, (_, i) => addDays(selectedDate, i - 3));

  // Render a single date block
  const renderDateBlock = (date) => {
    const isSelected = isSameDay(date, selectedDate);
    const isPastOrToday = isClickable(date);

    let baseStyle = "flex justify-center items-center w-12 h-16 "; // Adjusted for a skinnier oval
    let textStyle = "text-sm";
    let bgColor = isSelected ? "bg-[#D79C59]" : "bg-transparent";
    let textColor = isSelected ? "text-white" : (isPastOrToday ? "text-black" : "text-gray-400");
    let cursorStyle = isPastOrToday ? "cursor-pointer" : "cursor-default";
    let shapeStyle = isSelected ? "rounded-full" : "rounded-lg";

    return (
      <div
        key={date.toString()}
        className={`${baseStyle} ${shapeStyle} ${bgColor} ${textColor} ${cursorStyle}`}
        onClick={() => !isSelected && isPastOrToday && setSelectedDate(date)}
      >
        <div>
          <div className="font-semibold">{format(date, 'EEE')}</div>
          <div className="font-bold">{format(date, 'd')}</div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex space-x-1 my-4"> 
      {dates.map(renderDateBlock)}
    </div>
  );
};

export default CalendarCarousel;
