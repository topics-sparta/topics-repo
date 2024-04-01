import { createClient } from "../../../src/utils/supabase/server";

export const fetchUserDetails = async () => {
  const { data: session, error } = await supabase.auth.getSession();

  if (error) {
    // Handle error
  } else if (session) {
    // Session is active
    console.log(session);
  } else {
    // No active session
  }
  const data = await fetch(
    "http://localhost:3000/api/get-user-details/3523a764-3925-4f8a-bdac-0436313a2be6"
  );

  const res = await data.json();
  console.log(res);
};
