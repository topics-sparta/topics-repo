"use client"
import SideNav from "./_components/side-nav";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Loader } from "lucide-react";
import { createClient } from "@/utils/supabase/client";
import { useMediaQuery } from "usehooks-ts";
import clsx from "clsx";
import MobileNav from "./_components/mobile-nav";


export default async function Layout({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const supabase = createClient();
  const router = useRouter();
  const pathName = usePathname();
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
  }, [pathName, router]);

  if(isLoading) {
    return <div className="w-full h-screen flex bg-customSecondary/25 justify-center items-center"><Loader className="w-10 h-10 animate-spin text-customSecondary" /></div>
  }

  return (
      <div className={"flex relative w-full h-screen"}>
        {isMobile ? <MobileNav router={router} pathName={pathName} /> : <SideNav router={router} pathName={pathName} />}
        <div className={clsx("relative", isMobile ? "w-[100vw] h-full" : "w-[calc(100vw-176px)] h-full overflow-y-scroll")}>
            {children}
        </div>
      </div>
  );
}