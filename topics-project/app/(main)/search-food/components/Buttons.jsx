import { Flame, Salad, ScanBarcode } from "lucide-react";

const Buttons = () => {
  return (
    
    <div className="grid grid-cols-11 grid-rows-1 w-full lg:w-10/12 lg:mx-auto max-h-32 mx-2 font-medium">
      <a href="/customfoods"className="group col-span-3 row-span-1 bg-customSecondary/20 transition-colors hover:bg-customSecondary/25 rounded-lg py-4">
        <div className="flex flex-col gap-2 text-center cursor-pointer items-center justify-center w-full h-full">
          <div className="w-12 h-12 bg-customSecondary/90 group-hover:bg-customSecondary flex justify-center items-center rounded-full transition-colors">
            <Flame className="w-6 h-6 text-customPrimary/90 group-hover:text-customPrimary transition-colors" />
          </div>
          <h3 className="font-redHatText font-customAccent text-customAccent/90 group-hover:text-customAccent transition-colors text-lg">
            Add Custom Food
          </h3>
        </div>
      </a>
      

      <div className="col-span-1"></div>

      <div className="group col-span-3 row-span-1 bg-customSecondary/20 hover:bg-customSecondary/25 transition-colors rounded-lg py-4">
        <div className="flex flex-col gap-2 text-center cursor-pointer items-center justify-center w-full h-full">
          <div className="w-12 h-12 bg-customSecondary/90 group-hover:bg-customSecondary transition-colors flex justify-center items-center rounded-full">
            <Salad className="w-6 h-6 text-customPrimary/90 group-hover:text-customPrimary transition-colors" />
          </div>
          <h3 className="font-redHatText text-customAccent/90 group-hover:text-customAccent transition-colors text-lg">
            Generate Meal
          </h3>
        </div>
      </div>

      <div className="col-span-1"></div>

      <div className="group col-span-3 row-span-1 bg-customSecondary/20 hover:bg-customSecondary/25 transition-colors rounded-lg py-4">
        <div className="flex flex-col gap-2 text-center cursor-pointer items-center justify-center w-full h-full">
          <div className="w-12 h-12 bg-customSecondary/90 group-hover:bg-customSecondary transition-colors flex justify-center items-center rounded-full">
            <ScanBarcode className="w-6 h-6 text-customPrimary/90 group-hover:text-customPrimary" />
          </div>
          <h3 className="font-redHatText text-customAccent/90 group-hover:text-customAccent text-lg">
            Scan Barcode
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Buttons;
