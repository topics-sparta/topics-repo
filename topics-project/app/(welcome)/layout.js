"use client"
import { Navbar } from "../components/navbar";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Loader } from "lucide-react";
import { createClient } from "@/utils/supabase/client";


export default async function Layout({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const supabase = createClient()
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      const { data, error } = await supabase.auth.getUser();

      if (error) {
        console.error('Error fetching user:', error.message);
        setIsLoading(false);
      } else if (!data.user) {
        setIsLoading(false);
      } else {
        // means that their is a user signed in so redirect to home dashboard
        router.push('/home')
      }
    };

    checkUser();
  }, []);

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
