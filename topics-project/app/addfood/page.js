"use client";
import { SearchFood } from './_components/searchfood';
import { AddCustomFood } from './_components/addcustomfood';

export default function AddFoodPage() {


  return (
    <div className="w-full min-h-[calc(100vh-64px)] bg-customPrimary">
      <div className="lg:max-w-screen-xl mx-auto px-4 xl:px-0 flex flex-col gap-8">
        <div className='flex justify-center pt-12'>
          <SearchFood />
        </div>
        <div className='flex justify-center'>
          <AddCustomFood />
        </div>
      </div>
    </div>
  );
}
