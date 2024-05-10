"use client"
import SideNav from "./_components/side-nav";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Bolt, ChevronRight, Loader, NotebookPen, Plus } from "lucide-react";
import { createClient } from "@/utils/supabase/client";
import { useMediaQuery } from "usehooks-ts";
import clsx from "clsx";
import MobileNav from "./_components/mobile-nav";

export default function Layout({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const supabase = createClient();
  const router = useRouter();
  const pathName = usePathname();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const checkUser = async () => {
      const { data, error } = await supabase.auth.getUser();

      if (error) {
        console.error("Error fetching user:", error.message);
        router.push("/login");
      } else if (!data.user) {
        router.push("/login");
      } else {
        setIsLoading(false);
      }
    };

    checkUser();
    setTimeout(() => {
      setIsMobileMenuOpen(false);
    }, 300);
  }, [pathName, router]);

  if (isLoading) {
    return (
      <div className="w-full h-screen flex bg-customSecondary/25 justify-center items-center">
        <Loader className="w-10 h-10 animate-spin text-customSecondary" />
      </div>
    );
  }

  return (
    <div
      className={clsx(
        "flex relative w-full h-screen bg-customPrimary",
        isMobile ? "flex-col" : ""
      )}
    >
      {isMobile ? (
        <MobileNav
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          router={router}
        />
      ) : (
        <SideNav router={router} pathName={pathName} />
      )}
      <div
        className={clsx(
          "relative",
          isMobile
            ? "w-[100vw] min-h-[calc(100vh-5rem)] overflow-x-hidden"
            : "w-[calc(100vw-176px)] h-full overflow-y-scroll"
        )}
      >
        {children}
        <div
          className={clsx(
            isMobile && isMobileMenuOpen
              ? "flex translate-x-0"
              : "-translate-x-full",
            "absolute inset-0 z-50 bg-customPrimary transition-transform"
          )}
        >
          <div className="w-11/12 mx-auto h-full py-4 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div
                className="flex gap-3 items-center"
                onClick={() => console.log("Need to add routing to diary")}
              >
                <div className="w-10 h-10 bg-customSecondary rounded-full flex items-center justify-center">
                  <NotebookPen className="w-5 h-5 text-customPrimary" />
                </div>
                <p className="text-xl font-medium text-customSecondary">
                  Diary
                </p>
              </div>
              <ChevronRight className="w-5 h-10 text-customSecondary" />
            </div>
            <div className="flex items-center justify-between">
              <div
                className="flex gap-3 items-center"
                onClick={() => {
                  router.push("/search-food");
                }}
              >
                <div className="w-10 h-10 bg-customSecondary rounded-full flex items-center justify-center">
                  <Plus className="w-5 h-5 text-customPrimary" />
                </div>
                <p className="text-xl font-medium text-customSecondary">
                  Add Food
                </p>
              </div>
              <ChevronRight className="w-5 h-10 text-customSecondary" />
            </div>
            <div className="flex items-center justify-between">
              <div
                className="flex gap-3 items-center"
                onClick={() => router.push("/settings/profile")}
              >
                <div className="w-10 h-10 bg-customSecondary rounded-full flex items-center justify-center">
                  <Bolt className="w-5 h-5 text-customPrimary" />
                </div>
                <p className="text-xl font-medium text-customSecondary">
                  Settings
                </p>
              </div>
              <ChevronRight className="w-5 h-10 text-customSecondary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}