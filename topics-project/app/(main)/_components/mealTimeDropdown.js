"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../../@/components/dropdown-menu";
import { useState } from "react";

function MealTimeDropDown({ formData, handleFormChange }) {
  const [selected, setSelected] = useState("Breakfast");

  return (
    <div className="bg-transparent text-customSecondary text-base">
      <DropdownMenu>
        <DropdownMenuTrigger className="font-redHatText">{selected}</DropdownMenuTrigger>
        <DropdownMenuContent className="bg-customPrimary border-2 border-customAccent/15 text-customSecondary font-redHatText flex flex-col gap-3 w-40">
          <DropdownMenuItem onClick={() => { setSelected("Breakfast") }} className="text-lg">
            Breakfast
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => { setSelected("Lunch") }} className="text-lg">Lunch</DropdownMenuItem>
          <DropdownMenuItem onClick={() => { setSelected("Dinner") }} className="text-lg">Dinner</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default MealTimeDropDown;
