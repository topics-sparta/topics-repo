"use client";

import { redirect } from "next/navigation";
import { createClient } from "/src/utils/supabase/client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import UserDetailsComp from "/src/components/user-details-comp.jsx";
const supabase = createClient();

const fetchUser = async () => {
  const res = await supabase.auth.getSession();
  const id = res.data.session.user.id;
  return id;
};

const signOutUser = async () => {
  console.log("clicked");
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.log(error);
  }
  location.reload();
};

function Details() {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const id = await fetchUser(); // i dont like this but it works

      setUserId(id);
    };

    fetchData();
  }, []);

  // PATH: http://localhost:3000/api/user-details/
  return (
    <div>
      <UserDetailsComp id={userId} />
      <button onClick={signOutUser} className="w-50 h-50 bg-red-400">
        sign out
      </button>
    </div>
  );
}

export default Details;
