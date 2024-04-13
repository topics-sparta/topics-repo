"use client";
import { SearchFood } from './_components/searchfood';
import { AddCustomFood } from './_components/addcustomfood';
import { GenerateMeal } from './_components/generatemeal';
import { ScanBarcodeBtn } from './_components/scanbarcode';
import { useRouter } from "next/navigation";

export default function AddFoodPage() {
  const router = useRouter();

  return (
    <div className="w-full min-h-[calc(100vh-64px)] bg-customPrimary">
      <div className="lg:max-w-screen-xl mx-auto px-4 xl:px-0 flex flex-col gap-8">
        <div className='flex justify-center pt-12 w-full'>
          <div className="w-full sm:max-w-xl lg:max-w-2xl mx-auto">
            <SearchFood />
          </div>
        </div>
        <div className='flex flex-wrap justify-start md:justify-center gap-4 sm:gap-12 w-full'>
          <div className="flex-grow-0 flex-shrink-0 min-w-[160px] lg:basis-[300px] lg:w-auto">
            <AddCustomFood router={router}/>
          </div>
          <div className="flex-grow-0 flex-shrink-0 min-w-[160px] lg:basis-[300px] lg:w-auto">
            <GenerateMeal />
          </div>
          <div className="flex-grow-0 flex-shrink-0 min-w-[160px] lg:basis-[300px] lg:w-auto">
            <ScanBarcodeBtn />
          </div>
        </div>
        <div className='flex justify-center w-full pt-12 lg:pt-0'>
          <div className="w-full sm:max-w-xl lg:max-w-2xl mx-auto">
            <h1 className="text-3xl font-semibold text-amber-950 text-left">
              History
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

