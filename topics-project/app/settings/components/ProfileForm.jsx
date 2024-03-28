"use client";

import { useState } from "react";
import Slider from "./slider";
import DropDownTW from "./DropDownTW";

function ProfileForm() {
  const [formData, updateFormData] = useState({
    name: "",
    height: 0,
    weight: 0,
    goal: "",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    updateFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("clicked, ", formData);
  };

  return (
    <form
      className=" md:w-[70%] w-full flex items-center justify-center"
      onSubmit={handleFormSubmit}
    >
      {/* navbar/header for profile */}
      <div className=" w-[83%] flex items-center justify-center flex-col ">
        {/* navbar/header for profile */}
        <div className="items-center justify-start mt-5 w-full">
          <div className="flex flex-col md:justify-start md:items-start justify-center items-center w-full ">
            <h1 className="font-redHatText font-medium text-xl text-customAccent mt-[15px] ">
              Profile
            </h1>
            <h1 className=" text-[#4C220A] pb-2 pt-1 text opacity-[60%]">
              Update your personal details and goals
            </h1>
          </div>
          <hr className="  h-[1.6px] my-1  border-0  opacity-[12%] bg-[#4C220A] " />

          <div className="flex flex-col md:justify-start md:items-start justify-center items-center w-full">
            <h1 className="font-redHatText font-medium text-xl text-customAccent mt-[15px] ">
              Name
            </h1>
            <input
              className="h-8 w-[200px] mt-2 rounded-md border-[#4C220A] focus:outline-none opacity-[60%] border-2 border-solid pl-4 font-redHatText text-base"
              placeholder="Put Current Name here"
              // id="password"
              name="name"
              type="text"
              onChange={(e) => {
                handleFormChange(e);
              }}
              required
            />
          </div>
          <hr className=" h-[2px] my-6  border-0  opacity-[12%] bg-[#4C220A] " />
        </div>

        <div className="w-full flex items-center justify-center">
          <div className="w-[100%] flex flex-col  items-center justify-center ">
            {/* <div className="flex items-center space-x-[100px] w-full  "> */}
            <div className="flex md:flex-row flex-col  items-center md:space-x-[100px] md:w-full w-[80%]  ">
              <Slider
                formData={formData}
                label_tag={"Height"}
                metrics={"height"}
                handleFormChange={handleFormChange}
              />
              <Slider
                formData={formData}
                label_tag={"Weight (lbs)"}
                metrics={"weight"}
                handleFormChange={handleFormChange}
              />
            </div>
          </div>
        </div>
        <hr className="w-full h-[2px] mt-3  border-0  opacity-[12%] bg-[#4C220A] " />

        <hr className="  h-[1.6px]  border-0  opacity-[12%] bg-[#4C220A] " />
        <div className="flex flex-col md:justify-start justify-center md:items-start items-center w-full">
          <h1 className="font-redHatText font-medium text-xl text-customAccent mt-[18px] ">
            Goal
          </h1>
          <DropDownTW formData={formData} handleFormChange={handleFormChange} />
          {/* <GoalDropDown
            handleFormChange={handleFormChange}
            formData={formData}
          /> */}
        </div>
        <div className="flex space-x-6 w-full justify-end md:my-0 mt-5 mb-6 ">
          <button className="w-[150px] color-black rounded-md h-[35px] mt-4  border-2 border-[#4C220A] border-opacity-[30%] transition-colors font-medium font-redHatText color-[#4C220A] duration-300 flex justify-center items-center">
            Cancel
          </button>
          <button
            className="flex w-[190px] color-[#FFF7ED] rounded-md h-[35px] mt-4 bg-customSecondary 
          font-medium hover:bg-customAccent  transition-colors duration-300 flex justify-center items-center"
          >
            Save Changes
          </button>
        </div>
      </div>
    </form>
  );
}

export default ProfileForm;
