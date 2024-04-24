import React, { useState } from 'react';
import { format, addDays, isBefore, isSameDay, startOfToday } from 'date-fns';
import clsx from 'clsx';

export const CalendarCarousel = ({ onDateChange }) => {
  const [selectedDate, setSelectedDate] = useState(startOfToday());

  const isClickable = (date) => {
    return isBefore(date, startOfToday()) || isSameDay(date, startOfToday());
  };

  const dates = Array.from({ length: 7 }, (_, i) => addDays(selectedDate, i - 3));

  const handleDateClick = (date) => {
    if (!isSameDay(date, selectedDate) && isClickable(date)) {
      setSelectedDate(date);
      onDateChange(date);  
    }
  };

  const renderDateBlock = (date) => {
    const isSelected = isSameDay(date, selectedDate);
    const isPastOrToday = isClickable(date);

    return (
      <div
        key={date.toString()}
        className={clsx('flex justify-center items-center w-12 h-16', isSelected ? 'bg-[#D79C59] rounded-full text-white' : clsx('bg-transparent rounded-lg', isPastOrToday ? 'text-black cursor-pointer' : 'text-gray-400 cursor-default'))}
        onClick={() => handleDateClick(date)}
      >
        <div className='flex flex-col justify-center items-center'>
          <div className="font-semibold">{format(date, 'EEE')}</div>
          <div className="font-bold">{format(date, 'd')}</div>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-full w-full flex justify-center items-center lg:mx-auto">
      <div className="w-full lg:w-9/12 grid grid-cols-7">
        {dates.map(renderDateBlock)}
      </div>
    </div>
  );
};
