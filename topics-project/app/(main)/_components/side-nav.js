"use client";
import { Bolt, Plus, NotebookPen } from "lucide-react";
import SignOut from "./sign-out";
import clsx from "clsx";

export default function SideNav({ router, pathName }) {
  return (
    <div className="h-full w-44 bg-customSecondary/25 flex">
      <div className="flex flex-col items-center w-full my-8">
        <div className="flex flex-col gap-8 w-full h-full">
          <p
            className={
              "font-poppins font-bold text-4xl cursor-pointer text-customSecondary w-fit mx-auto"
            }
            onClick={() => router.push("/home")}
          >
            Sparta
          </p>
          <div className={clsx("group relative hover:text-customAccent flex items-center justify-start gap-3 font-redHatText w-full cursor-pointer overflow-hidden pl-4", pathName === "/home" ? "text-customAccent" : "text-customSecondary")}>
            <div className="w-11 h-11 bg-customPrimary rounded-full flex items-center justify-center">
              <NotebookPen className="h-8 transition-colors duration-300" />
            </div>
            <p className="text-lg font-medium transition-colors duration-300">
              Diary
            </p>
            <div className={clsx("absolute h-5/6 w-0.5 rounded-full right-0 bg-customAccent transition-all duration-300", pathName === "/home" ? "translate-x-0" : "translate-x-10 group-hover:translate-x-2")}></div>
          </div>
          <div className={clsx("group relative text-customSecondary hover:text-customAccent flex items-center justify-start gap-3 font-redHatText w-full cursor-pointer pl-4 overflow-hidden", pathName === "/addFood" ? "text-customAccent" : "text-customSecondary")}>
            <div className="w-11 h-11 bg-customPrimary rounded-full flex items-center justify-center">
              <Plus className="h-5 transition-colors duration-300" />
            </div>
            <p className="text-lg font-medium transition-colors duration-300">
              Add Food
            </p>
            <div className={clsx("absolute h-5/6 w-0.5 rounded-full right-0 bg-customAccent transition-all duration-300", pathName === "/addFood" ? "translate-x-2" : "translate-x-10 group-hover:translate-x-2")}></div>
          </div>
          <div className={clsx("group relative text-customSecondary hover:text-customAccent flex items-center justify-start gap-3 font-redHatText w-full cursor-pointer overflow-hidden pl-4", pathName === "/settings" ? "text-customAccent" : "text-customSecondary")}>
            <div className="w-11 h-11 bg-customPrimary rounded-full flex items-center justify-center">
              <Bolt className="h-8 transition-colors duration-300" />
            </div>
            <p className="text-lg font-medium transition-colors duration-300">
              Settings
            </p>
            <div className={clsx("absolute h-5/6 w-0.5 rounded-full right-0 bg-customAccent transition-all duration-300", pathName === "/settings" ? "translate-x-2" : "translate-x-10 group-hover:translate-x-2")}></div>
          </div>
          <div className="mt-auto w-full">
            <SignOut />
          </div>
        </div>
      </div>
    </div>
  );
}
