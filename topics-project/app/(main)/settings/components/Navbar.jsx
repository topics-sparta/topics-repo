"use client";

import { usePathname } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

function Navbar() {
  const pathname = usePathname();
  const pathnameSplit = pathname.split("/");
  const currentPath = pathnameSplit[pathnameSplit.length - 1]; // get last element in array

  const [current, setCurrent] = useState(currentPath);
  const items_list = ["Profile", "Account", "Themes", "Helps"];

  return (
    <div className="hidden md:flex flex-col items-center justify-center mt-5 ">
      <div className="flex items-center justify-center space-x-[60px]   ">
        {items_list.map((item) => {
          if (item.toLowerCase() === current) {
            return (
              <button
                key={item}
                className="text-[#4C220A] color-red cursor-pointer bg-[#D79C59] w-[110px] h-[30px] rounded  bg-opacity-[33.5%] text-opacity-[60%]"
              >
                {item}
              </button>
            );
          } else {
            return (
              <button
                key={item}
                className="text-[#4C220A] opacity-[60%] cursor-pointer "
              >
                {item}
              </button>
            );
          }
        })}
      </div>
    </div>
  );
}

export default Navbar;
