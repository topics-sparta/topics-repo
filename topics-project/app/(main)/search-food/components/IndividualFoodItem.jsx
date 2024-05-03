import { useRouter } from "next/navigation";
import { Flame } from "lucide-react";

function IndividualFoodItem({ item }) {
  const router = useRouter();
  let calories = 0;

  let { description, brand_Owner, brand_name, weight } = item;

  const toTitleCase = (text) => {
    description = description
      .toLowerCase()
      .split(" ")
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  };

  let weightInG = weight?.split("/")[1];
  let wieghtInOz = weight?.split("/")[0];

  console.log(weightInG, wieghtInOz);

  // getting calories helper
  const gettingCalories = () => {
    for (item of item.nutrients) {
      if (item.name === "Energy") {
        calories = item.value;
      }
    }
  };

  gettingCalories();
  toTitleCase();
  // splittingWeight();

  return (
    <div className="flex w-full justify-between items-center px-4">
      {/* div for food name and brand name */}
      <div className="flex flex-col gap-3 py-3">
        <div className="flex items-center gap-4">
          <h1 className="font-bold font-poppins text-2xl text-customAccent">
            {description}
          </h1>{" "}
          <h1 className="font-medium font-redHatText text-base text-customAccent/70">
            {brand_Owner ? brand_Owner : brand_name}
          </h1>
        </div>
        {/* div for calories and weight*/}
        <div className="flex gap-2 text-customSecondary text-lg items-center font-semibold font-poppins">
          <Flame className="w-5 h-5" />
          <h3>{calories}</h3>
          <h3>•</h3>
          <h3>{weightInG ? weightInG : wieghtInOz}</h3>
        </div>
      </div>
      <div
        className="cursor-pointer hover:opacity-[30%] ease-out duration-100"
        onClick={() => {
          router.push("/foodItem");
        }}
      >
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 32 32"
          className=" w-[24px] h-[24px] md:w-[30px] md:h-[30px] text-[#4C220A] "
        >
          <path
            fill="currentColor"
            d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.087 0 11 4.913 11 11s-4.913 11-11 11S5 22.087 5 16S9.913 5 16 5m-1 5v5h-5v2h5v5h2v-5h5v-2h-5v-5z"
          />
        </svg>
      </div>
    </div>
  );
}

export default IndividualFoodItem;
