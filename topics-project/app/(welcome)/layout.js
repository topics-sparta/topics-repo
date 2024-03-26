import { Navbar } from "../components/navbar";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export default async function Layout({ children }) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    return redirect("/home");
  }

  return (
    <div className={"flex flex-col"}>
      <Navbar />
      {children}
    </div>
  );
}
