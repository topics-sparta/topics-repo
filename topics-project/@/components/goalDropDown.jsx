"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../@/components/dropdown-menu";

import { useState } from "react";

function GoalDropDown({ formData, handleFormChange }) {
  const [selected, setSelected] = useState("Nothing");

  const updateDropDown = (e) => {
    console.log(e.target.getHTML);
  };
  return (
    <div className=" w-[200px] h-8 mt-2 rounded-md border-customAccent border-2 border-solid pl-4 font-redHatText ">
      <DropdownMenu>
        <DropdownMenuTrigger>{selected} ^</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem
            onClick={() => {
              setSelected("Losing Weight");
              formData.goal = "Losing Weight";
            }}
          >
            Losing Weight
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              setSelected("Gaining Muscle");
              formData.goal = "Gaining Muscle";
            }}
          >
            Gaining Muscle
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              setSelected("Power Lifting");
              formData.goal = "Power Lifting";
            }}
          >
            PowerLifting
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              setSelected("Maintenance");
              formData.goal = "Maintenance";
            }}
          >
            Maintenance
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default GoalDropDown;
