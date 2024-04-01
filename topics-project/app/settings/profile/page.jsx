"use client";
import ProfileForm from "../components/ProfileForm";

import Navbar from "../components/Navbar";
import NavbarDropDown from "../components/NavbarDropDown";
import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

// import { createClient } from "../../../src/utils/supabase/server";

function Profile() {
  const [currentUser, setCurrentUser] = useState("");
  const [loading, setLoading] = useState(true);
  const supabase = createClient();
  const router = useRouter();

  const getCurrentUser = async () => {
    const { data, error } = await supabase.auth.getUser();

    if (error) {
      console.error("Error fetching user:", error.message);
      router.push("/login");
    } else if (!data.user) {
      router.push("/login");
    } else {
      setLoading(false);
      fetchUserDetails(data.user.id);
    }
  };

  const fetchUserDetails = async (id) => {
    const data = await fetch(
      `http://localhost:3000/api/get-user-details/${id}`
    );
    console.log("running!");
    const res = await data.json();

    if (res.status == 200) {
      setCurrentUser(res.users);
    }
  };

  useEffect(() => {
    getCurrentUser();
    // fetchUserDetails();
  }, []);
  return (
    <div className="w-screen bg-[#FFF7ED] h-screen flex flex-col items-center ">
      <p className="font-bold text-3xl md:text-4xl text-customAccent font-poppins">
        Settings
      </p>
      <Navbar />
      <NavbarDropDown />
      {loading ? <div>loading</div> : <ProfileForm currentUser={currentUser} />}
    </div>
  );
}

export default Profile;
