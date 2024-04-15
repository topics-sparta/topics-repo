"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronLeft, Loader, Plus } from "lucide-react";
import { PieChart } from "react-minimal-pie-chart";
import MealTimeDropDown from "../_components/mealTimeDropdown";

export default function FoodItem() {
  const [isLoading, setIsLoading] = useState(true);
  const [numberOfServings, setNumberOfServings] = useState(1);
  // TO DO: Mimic retrieving barcode from params
  const foodItemParams = useSearchParams();
  const barcode = foodItemParams.get("barcode");
  // TO DO: Mimic the api endpoint call using the barcode from params
  // For now, we will hardcode the response
  const macros = {
    name: "CHOCOLATE PEANUT BUTTER BAR, CHOCOLATE PEANUT BUTTER",
    brand: "PURE PROTEIN",
    servingSize: 50,
    servingSizeUnit: "GRM",
    calories: 200,
    protein: 20,
    carbohydrates: 17,
    fat: 7,
  };

  useEffect(() => {
    // TO DO: Once the response is retrieved, then display either an error page or the actual food-item page
    // This is the case if wrong response is retrieved (an error)
    if (macros === null) {
    } else {
      setIsLoading(false);
    }
  });

  if (isLoading) {
    return (
      <div className="w-full h-screen flex bg-customSecondary/25 justify-center items-center">
        <Loader className="w-10 h-10 animate-spin text-customSecondary" />
      </div>
    );
  }

  return (
    <div className="w-full h-screen flex relative bg-customSecondary/25 lg:bg-customPrimary">
      <div className="w-11/12 mx-auto h-full flex flex-col">
        <div className="w-full mt-4 grid gap-2 grid-cols-12 lg:flex items-start justify-between text-customAccent">
          <div className="group col-span-1 flex w-full lg:w-fit gap-2 items-start justify-between text-customAccent">
            <ChevronLeft className="translate-x-0 group-hover:-translate-x-2 w-12 mt-[2px] transition-transform" />
          </div>
          <div className="col-span-11 flex flex-col gap-4 w-full">
            <div className="flex flex-col gap-2 w-full">
              <p className="text-2xl font-poppins font-bold">
                {macros["name"]}
              </p>
              <div className="w-full lg:gap-4 lg:w-fit flex justify-between items-center text-customAccent/60">
                <p className="text-base font-bold">{macros["brand"]}</p>
                <p className="text-base font-medium">
                  {"Serving Size: " +
                    macros["servingSize"] +
                    macros["servingSizeUnit"]}
                </p>
              </div>
            </div>
            <hr className="w-full text-customAccent bg-customAccent/20 h-[2px]" />
            <div className="w-full lg:w-5/12 flex justify-between items-center">
              <div className="flex flex-col items-center justify-center h-full">
                <p className="text-3xl lg:text-5xl font-bold">
                  {macros["calories"] * numberOfServings}
                </p>
                <p className="text-base lg:text-lg text-customAccent/60">calories</p>
              </div>
              <hr className="w-[2px] text-customAccent bg-customAccent/20 h-6" />
              <div className="flex gap-4 items-center justify-between">
                <PieChart
                  className="h-20 w-20 lg:w-32 lg:h-32"
                  data={[
                    {
                      title: "Protein",
                      value: macros["protein"] * numberOfServings,
                      color: "#9861FF",
                    },
                    {
                      title: "Carbs",
                      value: macros["carbohydrates"] * numberOfServings,
                      color: "#D79C59",
                    },
                    {
                      title: "Fat",
                      value: macros["fat"] * numberOfServings,
                      color: "#00E224",
                    },
                  ]}
                />
                {/* POSSIBLE TO DO: Sort these by grams (highest gram is listed first) */}
                <div className="flex flex-col justify-start gap-2">
                  <div className="flex gap-2">
                    <div className="w-4 h-4 lg:w-6 lg:h-6 bg-[#9861FF] rounded-sm"></div>
                    <p className="text-xs lg:text-base text-customAccent font-redHatText">
                      <span className="font-bold">
                        {macros["protein"] * numberOfServings}g
                      </span>{" "}
                      Protein
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-4 h-4 lg:w-6 lg:h-6 bg-[#D79C59] rounded-sm"></div>
                    <p className="text-xs lg:text-base text-customAccent font-redHatText">
                      <span className="font-bold">
                        {macros["carbohydrates"] * numberOfServings}g
                      </span>{" "}
                      Carbs
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-4 h-4 lg:w-6 lg:h-6 bg-[#00E224] rounded-sm"></div>
                    <p className="text-xs lg:text-base text-customAccent font-redHatText">
                      <span className="font-bold">
                        {macros["fat"] * numberOfServings}g
                      </span>{" "}
                      Fat
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 w-full lg:w-5/12">
              <div className="flex w-full justify-between items-center">
                <p className="text-customAccent font-redHatText font-medium text-base lg:text-lg">
                  Number of Servings
                </p>
                <input
                  className="w-8 bg-transparent text-customSecondary text-right font-normal font-redHatText"
                  defaultValue={numberOfServings}
                  onChange={(e) => setNumberOfServings(e.target.value)}
                  type="number"
                />
              </div>
              <hr className="w-full text-customAccent bg-customAccent/20 h-[2px]" />
              <div className="flex w-full justify-between items-center">
                <p className="text-customAccent font-redHatText font-medium text-base lg:text-lg">
                  Meal Time
                </p>
                <MealTimeDropDown />
              </div>
              <hr className="w-full text-customAccent bg-customAccent/20 h-[2px]" />
            </div>
            <div className="flex flex-col gap-1 lg:gap-2 w-full lg:w-5/12">
              <button className="w-full h-10 rounded-full lg:rounded-md bg-customSecondary/80 hover:bg-customSecondary transition-colors text-customPrimary flex gap-1 items-center justify-center">
                <Plus className="w-4 h-4" />
                <p className="font-medium text-base lg:text-lg">Add Item</p>
              </button>
              <p className="text-xs text-customAccent/40">*Data is provided by the US Dept. of Agriculture’s Food Central API </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
