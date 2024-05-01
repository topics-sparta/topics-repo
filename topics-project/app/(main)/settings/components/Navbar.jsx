"use client";

import { usePathname } from "next/navigation";
import clsx from "clsx";

function Navbar() {
  const pathname = usePathname();
  const items_list = ["Profile", "Account", "Themes", "Help"];

  return (
    <div className="hidden md:flex items-center justify-center mt-4 h-full md:w-6/12 xl:w-4/12 2xl:w-3/12">
      <div className="grid grid-cols-4 grid-rows-1 h-full w-full">
        {items_list.map((item) => {
          const current = pathname.startsWith(`/settings/${item.toLowerCase()}`);
          return (
            <button
              key={item}
              className="cursor-pointer row-span-1 col-span-1 w-full h-full flex justify-center items-center"
            >
              <div className={clsx("w-fit h-full rounded-md p-2 px-4", current ? "bg-customSecondary/15" : "")}>
                <p className={clsx("font-medium font-redHatText transition-colors", current ? "text-customSecondary" : "text-customAccent/60 hover:text-customSecondary")}>
                  {item}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Navbar;
