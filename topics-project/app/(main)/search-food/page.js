"use client";
import Buttons from "./components/Buttons";

function SearchFood() {
  return (
    <div className="w-full h-full bg-customPrimary">
      <div className="flex items-center justify-center flex-col gap-10 pt-10">
        <Buttons />
        {/* history section, TO DO: move to its own component when logic is added */}
        <div className="w-10/12">
          <h1 className="text-customAccent font-bold font-poppins text-2xl">
            History
          </h1>
        </div>
      </div>
    </div>
  );
}

export default SearchFood;
