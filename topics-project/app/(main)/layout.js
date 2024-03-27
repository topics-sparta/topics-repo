"use client"
import SideNav from "./_components/side-nav";
import { useRouter } from "next/navigation";
import { supabase } from "@/utils/supabase/clientTwo";
import { useState, useEffect } from "react";
import { Loader } from "lucide-react";
import { usePathname, useSearchParams } from 'next/navigation'


export default async function Layout({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const router = useRouter(); // Use useRouter for redirection
  
  useEffect(() => {
    async function checkUser() {
      try {
        const user = supabase.auth.getSession().session.user
        console.log(user)
        if (!user) {
          router.push('/');
        } else {
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error)
        setIsLoading(false)
      }
    }
    checkUser();
  }, [pathname, searchParams]);

  if(isLoading) {
    return <div className="w-full h-screen flex bg-customSecondary/25 justify-center items-center"><Loader className="w-10 h-10 animate-spin text-customSecondary" /></div>
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