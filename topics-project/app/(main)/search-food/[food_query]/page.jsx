"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { Loader } from "lucide-react";
import IndividualFoodItem from "../components/IndividualFoodItem";

// on each food item result , make it so that on click , it routes to food_item and shows the
// correct items

function FoodResults() {
  const searchParams = useParams();

  const { food_query } = searchParams; // pass into function . this may have spaces , represented as-> %20

  let title_food = food_query.split("%20").join(" "); // elimated the %20 and makes it a space
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [food_result, setFoods] = useState();
  const [searchValue, setSearchValue] = useState(title_food);

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search-food/${searchValue}`);
  };
  const goToFoodItem = () => {
    console.log("go to food item details"); // go to food item and either fetch by id, or pass in props
  };

  const fetchUserQuery = async (query_string) => {
    const PATH = window.origin;
    const res = await fetch(`${PATH}/api/search-foods/${query_string}`);
    if (res.status === 200) {
      const data = await res.json();
      const { food_data, status } = data;
      setFoods(food_data);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserQuery(food_query);
  }, []);

  return (
    <div className="flex flex-col items-center-justify-center space-y-3 w-full h-screen bg-customPrimary">
      {loading ? (
        <div className="w-full h-screen flex bg-customSecondary/25 justify-center items-center">
          <Loader className="w-10 h-10 animate-spin text-customSecondary" />
        </div>
      ) : (
        <div className="flex flex-col space-y-4 items-center justify-center w-full">
          <form className="mt-10" onSubmit={handleSubmit}>
            <input
              className="w-[347px]  md:w-[900px] h-[60px] text-[24px] text-[#FFF7ED] placeholder-[#FFF7ED] bg-[#D79C59] rounded-[999px] px-10 outline-none drop-shadow-2xl "
              placeholder="Search for any foods..."
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
            />
          </form>
          <div className="md:w-[900px] pt-5">
            {food_result?.map((item) => {
              return (
                <>
                  <IndividualFoodItem item={item} />
                  <hr className="last:hidden  border-[#4C220A] border-opacity-[10%] " />
                </>
              );
            })}
          </div>
        </div>
      )}
      {food_result?.length === 0 && <h1>No Foods Found</h1>}
    </div>
  );
}

export default FoodResults;
