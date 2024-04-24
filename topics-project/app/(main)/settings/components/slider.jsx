"use client";
import inchesToFeetInches from "../../../helper/heightConversion";

function Slider({ label_tag, metrics, handleFormChange, formData }) {
  return (
    <div className="md:w-5/12 w-full flex-col flex items-center justify-center md:my-0 mb-3 ">
      {metrics === "height" ? (
        <div className="flex flex-col  w-full items-center justify-center">
          <div className="w-full flex items-center justify-between text-center mb-3 ">
            <p className="font-redHatText font-bold text-xl text-customAccent">
              {label_tag}
            </p>
            <h1 className="font-redHatText font-bold text-base">{inchesToFeetInches(formData.height)}</h1>
          </div>

          <input
            type="range"
            min="24"
            max="84"
            name="height"
            step="1"
            value={formData.height || 2}
            onChange={handleFormChange}
            className="w-full h-0.5 rounded-lg appearance-none cursor-pointer bg-customAccent"
          />
        </div>
      ) : (
        <div className="flex flex-col  w-full items-center justify-center">
          <div className="w-full flex items-center justify-between text-center  mb-3">
            <p className="font-redHatText font-bold text-xl text-customAccent">
              {label_tag}
            </p>
            <h1 className="font-redHatText text-base font-bold ">{formData.weight}</h1>
          </div>

          <input
            type="range"
            min="30"
            max="600"
            name="weight"
            value={formData.weight || 30}
            onChange={handleFormChange}
            className="w-full h-0.5 rounded-lg appearance-none cursor-pointer bg-customAccent"
          />
        </div>
      )}
    </div>
  );
}

export default Slider;
