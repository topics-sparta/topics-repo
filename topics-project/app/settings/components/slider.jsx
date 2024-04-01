"use client";

import { useState } from "react";

function Slider({ label_tag, metrics, handleFormChange, formData }) {
  return (
    <div className="md:w-[25%] w-full flex-col flex items-center justify-center md:my-0 mb-3 ">
      {metrics === "height" ? (
        <div className="flex flex-col  w-full items-center justify-center">
          <div className="w-full flex items-center justify-between text-center mb-3 ">
            <h1 className="font-redHatText font-medium text-xl text-customAccent ">
              {label_tag}
            </h1>
            <h1 className="font-redHatText font-bold ">{formData.height}</h1>
          </div>

          <input
            type="range"
            min="10"
            max="99"
            name="height"
            step="0.1"
            value={formData.height || 2}
            onChange={handleFormChange}
            className="w-full h-[2.2px] mb-6 rounded-lg appearance-none cursor-pointer bg-customAccent"
          />
        </div>
      ) : (
        <div className="flex flex-col  w-full items-center justify-center">
          <div className="w-full flex items-center justify-between text-center  mb-3">
            <h1 className="font-redHatText font-medium text-xl text-customAccent ">
              {label_tag}
            </h1>
            <h1 className="font-redHatText font-bold ">{formData.weight}</h1>
          </div>

          <input
            type="range"
            min="30" // 4 feet (48 inches)
            max="1100" // 7 feet (84 inches)
            name="weight"
            value={formData.weight || 30}
            onChange={handleFormChange}
            className="w-full h-[2.2px] mb-6 rounded-lg appearance-none cursor-pointer bg-customAccent"
          />
        </div>
      )}
    </div>
  );
}

export default Slider;
