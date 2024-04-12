"use client";
import { SearchFood } from './_components/searchfood';
import { AddCustomFood } from './_components/addcustomfood';
import { GenerateMeal } from './_components/generatemeal'
import { ScanBarcode_ } from './_components/scanbarcode'
import { useRouter } from "next/navigation";

export default function AddFoodPage() {

  const router = useRouter();

  return (
    <div className="w-full min-h-[calc(100vh-64px)] bg-customPrimary">
      <div className="lg:max-w-screen-xl mx-auto px-4 xl:px-0 flex flex-col gap-8">
        <div className='flex justify-center pt-12'>
          <SearchFood />
        </div>
        <div className='flex justify-center gap-12'>
          <AddCustomFood router={router}/>
          <GenerateMeal />
          <ScanBarcode_ />
        </div>
        <h1 class="text-3xl font-semibold text-amber-950 text-center">
            History
        </h1>
      </div>
    </div>
  );
}
