import { Flame, Salad, ScanBarcode } from "lucide-react";
import { useRouter } from "next/navigation";

const Buttons = () => {
  const router = useRouter();
  return (
    <div className="lg:grid lg:grid-cols-11 lg:grid-rows-1 w-full flex justify-around flex-wrap gap-4 items-center lg:w-10/12 lg:mx-auto lg:max-h-32 mx-2 font-medium">
      <a href="/customfoods" className="group col-span-3 row-span-1 bg-customSecondary/20 transition-colors hover:bg-customSecondary/25 rounded-lg py-4">
        <div className="flex flex-col gap-2 text-center cursor-pointer items-center justify-center w-full h-full min-w-40">
          <div className="w-8 h-8 lg:w-12 lg:h-12 bg-customSecondary/90 group-hover:bg-customSecondary flex justify-center items-center rounded-full transition-colors">
            <Flame className="w-4 h-4 lg:w-6 lg:h-6 text-customPrimary/90 group-hover:text-customPrimary transition-colors" />
          </div>
          <h3 className="font-redHatText font-customAccent text-customAccent/90 group-hover:text-customAccent transition-colors text-base lg:text-lg">
            Add Custom Food
          </h3>
        </div>
      </a>
      

      <div className="col-span-1 hidden lg:flex"></div>

      <div className="group col-span-3 row-span-1 bg-customSecondary/20 hover:bg-customSecondary/25 transition-colors rounded-lg py-4 min-w-40">
        <div className="flex flex-col gap-2 text-center cursor-pointer items-center justify-center w-full h-full">
          <div className="w-8 h-8 lg:w-12 lg:h-12 bg-customSecondary/90 group-hover:bg-customSecondary transition-colors flex justify-center items-center rounded-full">
            <Salad className="w-4 h-4 lg:w-6 lg:h-6 text-customPrimary/90 group-hover:text-customPrimary transition-colors" />
          </div>
          <h3 className="font-redHatText text-customAccent/90 group-hover:text-customAccent transition-colors text-base lg:text-lg">
            Generate Meal
          </h3>
        </div>
      </div>

      <div className="col-span-1 hidden lg:flex"></div>

      <div className="group col-span-3 row-span-1 bg-customSecondary/20 hover:bg-customSecondary/25 transition-colors rounded-lg py-4 min-w-40" onClick={() => router.push('/barcode')}>
        <div className="flex flex-col gap-2 text-center cursor-pointer items-center justify-center w-full h-full">
          <div className="w-8 h-8 lg:w-12 lg:h-12 bg-customSecondary/90 group-hover:bg-customSecondary transition-colors flex justify-center items-center rounded-full">
            <ScanBarcode className="w-4 h-4 lg:w-6 lg:h-6 text-customPrimary/90 group-hover:text-customPrimary" />
          </div>
          <h3 className="font-redHatText text-customAccent/90 group-hover:text-customAccent text-base lg:text-lg">
            Scan Barcode
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Buttons;
