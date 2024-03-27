"use client"
import { Navbar } from "../components/navbar";
import { redirect, useRouter } from "next/navigation";
import { supabase } from "@/utils/supabase/clientTwo";
import { useState, useEffect } from "react";
import { Loader } from "lucide-react";
import { usePathname, useSearchParams } from 'next/navigation'


export default async function Layout({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname()
  const searchParams = useSearchParams()
  // const {
  //   data: { user },
  // } = await supabase.auth.getUser();

  // if (user) {
  //   return redirect("/home");
  // }
  const router = useRouter(); // Use useRouter for redirection
  
  useEffect(() => {
    async function checkUser() {
      try {
        // const {
        //   data, error
        // } = await supabase.auth.getSession();

        // if(error) {
        //   throw error;
        // }
        const user = supabase.auth.getSession().session.user
        console.log(user)
        if (user) {
          router.push('/home');
        } else {
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error)
        setIsLoading(false)
      }
    }
    checkUser();
  }, [pathname, searchParams]); // Empty dependency array means this effect runs once on mount

  if(isLoading) {
    return <div className="w-full h-screen flex bg-customSecondary/25 justify-center items-center"><Loader className="w-10 h-10 animate-spin text-customSecondary" /></div>
  }

  return (
      <div className={"flex flex-col"}>
        <Navbar />
        {children}
      </div>
  );
}
