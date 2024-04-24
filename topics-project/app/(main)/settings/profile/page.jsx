"use client";
import ProfileForm from "../components/ProfileForm";
import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { Loader } from "lucide-react";

function Profile() {
  const [currentUser, setCurrentUser] = useState("");
  const [loading, setLoading] = useState(true);
  const supabase = createClient();
  const router = useRouter();

  const getCurrentUser = async () => {
    const origin = window.location.origin;
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
    const data = await fetch(`${origin}/api/get-user-details/${id}`);

    const res = await data.json();

    if (res.status == 200) {
      setCurrentUser(res.users);
      setLoading(false);
    }
  };

  useEffect(() => {
    getCurrentUser();
  }, []);
  return (
    <div className="w-full bg-customPrimary h-full flex flex-col items-center">
      {loading ? <div className="w-full h-full flex justify-center items-center"><Loader className="w-8 h-8 animate-spin text-customSecondary" /></div> : <ProfileForm currentUser={currentUser} />}
    </div>
  );
}

export default Profile;
