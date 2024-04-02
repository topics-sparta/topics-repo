"use client";
import ProfileForm from "../components/ProfileForm";
import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

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
      // setLoading(false);
      fetchUserDetails(data.user.id);
    }
  };

  const fetchUserDetails = async (id) => {
    const data = await fetch(
      `https://sparta-ten.vercel.app/api/get-user-details/${id}`
      // `http://localhost:3000/api/get-user-details/${id}`
    );
    console.log("running!");
    const res = await data.json();

    if (res.status == 200) {
      setCurrentUser(res.users);
      setLoading(false);
    }
  };

  useEffect(() => {
    getCurrentUser();
    // fetchUserDetails();
  }, []);
  return (
    <div className="w-full bg-[#FFF7ED] h-full flex flex-col items-center ">
      {loading ? <div>loading</div> : <ProfileForm currentUser={currentUser} />}
    </div>
  );
}

export default Profile;
