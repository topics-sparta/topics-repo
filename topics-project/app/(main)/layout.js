import SideNav from "./_components/side-nav";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";


export default async function Layout({ children }) {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if(!user) {
    return redirect('/');
  }

  return (
      <div className={"flex w-full h-screen"}>
        <SideNav />
        <div className="w-[calc(100vw-176px)]">
            {children}
        </div>
      </div>
  );
}