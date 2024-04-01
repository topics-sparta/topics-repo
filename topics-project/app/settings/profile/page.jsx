import React from "react";
import ProfileForm from "../components/ProfileForm";

import Navbar from "../components/Navbar";
import NavbarDropDown from "../components/NavbarDropDown";

function Profile() {
  return (
    <div className="w-screen bg-[#FFF7ED] h-screen flex flex-col items-center ">
      <p className="font-bold text-3xl md:text-4xl text-customAccent font-poppins">
        Settings
      </p>
      <Navbar />
      <NavbarDropDown />
      <ProfileForm />
    </div>
  );
}

export default Profile;
