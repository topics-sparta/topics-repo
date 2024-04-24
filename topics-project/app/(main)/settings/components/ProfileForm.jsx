"use client";

import { useEffect, useState } from "react";
import Slider from "./slider";
import DropDownTW from "./DropDownTW";
import { useRouter, usePathname } from "next/navigation";

function ProfileForm({ currentUser }) {
  const origin = window.location.origin; // gets origin , either prod url or localhost

  const [formData, updateFormData] = useState({
    username: currentUser.username,
    height: currentUser.height,
    weight: currentUser.weight,
    goal: currentUser.goal,
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    updateFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`${origin}/api/update-user-details`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        formData,
        uuid: currentUser.uuid,
      }),
    });
    const { newUser, status, error } = await response.json();
    if (error) {
      console.log(error);
    } else if (status === 204) {
      window.location.reload();
    }
  };

  useEffect(() => {
    formData.height = currentUser.height;
    formData.weight = currentUser.weight;
    formData.username = currentUser.username;
    formData.goal = currentUser.goal;
  }, [currentUser]);

  return (
    <form
      className="w-full flex items-center justify-center"
      onSubmit={handleFormSubmit}
    >
      {/* navbar/header for profile */}
      <div className="flex items-center justify-center flex-col w-10/12 mb-6">
        {/* navbar/header for profile */}
        <div className="flex flex-col justify-start gap-2 mt-5 w-full">
          <div className="flex flex-col gap-1 md:gap-2 md:justify-start md:items-start justify-center items-center w-full ">
            <h1 className="font-poppins font-bold text-xl md:text-2xl text-customAccent">
              Profile
            </h1>
            <p className="text-base font-medium text-customAccent/60 font-redHatText">
              Update your personal details and goals
            </p>
          </div>
          <hr className="h-0.5 bg-customAccent/10 w-full" />
          <div className="flex flex-col md:justify-start md:items-start justify-center items-center w-full my-2">
            <p className="font-redHatText font-bold text-xl text-customAccent">
              Name
            </p>
            <input
              className="h-8 w-full md:w-5/12 lg:w-3/12 2xl:w-2/12 mt-2 rounded-md border-[#4C220A] focus:outline-none opacity-[60%] border-2 border-solid pl-3 font-redHatText text-base"
              placeholder={formData.username}
              name="username"
              type="text"
              onChange={(e) => {
                handleFormChange(e);
              }}
            />
          </div>
          <hr className="h-0.5 bg-customAccent/10 w-full" />
          <div className="w-full flex flex-col items-start justify-center my-2 mb-4">
            <div className="flex md:flex-row flex-col md:justify-between md:items-start items-center md:w-10/12 xl:w-7/12 w-full">
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
          <hr className="h-0.5 bg-customAccent/10 w-full" />
          <div className="flex flex-col md:justify-start justify-center md:items-start items-center w-full">
            <h1 className="font-redHatText font-bold text-xl text-customAccent">
              Goal
            </h1>
            <DropDownTW
              formData={formData}
              handleFormChange={handleFormChange}
              goalOnInit={currentUser.goal}
            />
          </div>
          <div className="flex gap-4 w-full justify-around md:justify-end mt-6 md:mt-12 text-base">
            <button className="w-5/12 max-w-40 rounded-md h-9 border-2 border-[#4C220A]/30 bg-transparent transition-colors hover:bg-customSecondary/5 text-center">
              <p className="text-customAccent font-medium font-redHatText">
                Cancel
              </p>
            </button>
            <button className="w-5/12 max-w-40 rounded-md h-9 bg-customSecondary/80 transition-colors hover:bg-customSecondary text-center">
              <p className="text-customPrimary font-medium">
                Save Changes
              </p>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ProfileForm;
