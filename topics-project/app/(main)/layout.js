"use client"
import SideNav from "./_components/side-nav";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Loader } from "lucide-react";
import { createClient } from "@/utils/supabase/client";
import { useMediaQuery } from "usehooks-ts";
import clsx from "clsx";


export default async function Layout({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const supabase = createClient()
  const router = useRouter();
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    const checkUser = async () => {
      const { data, error } = await supabase.auth.getUser();

      if (error) {
        console.error('Error fetching user:', error.message);
        router.push('/login');
      } else if (!data.user) {
        router.push('/login');
      } else {
        setIsLoading(false);
      }
    };

    checkUser();
  }, []);

  if(isLoading) {
    return <div className="w-full h-screen flex bg-customSecondary/25 justify-center items-center"><Loader className="w-10 h-10 animate-spin text-customSecondary" /></div>
  }

  return (
      <div className={"flex w-full h-screen"}>
        {isMobile ? <></> : <SideNav />}
        <div className={clsx(isMobile ? "w-[100vw]" : "w-[calc(100vw-176px)]")}>
            {children}
        </div>
      </div>
  );
}