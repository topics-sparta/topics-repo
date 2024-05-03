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
  const [loading, setLoading] = useState(true);
  const [food_result, setFoods] = useState();

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
    <div className="flex items-center justify-center w-full h-full bg-customPrimary">
      {loading ? (
        <div className="w-full h-full flex bg-customPrimary justify-center items-center">
          <Loader className="w-10 h-10 animate-spin text-customSecondary" />
        </div>
      ) : (
        <div className="flex items-center justify-center w-full h-full">
          <div className="w-10/12 h-full">
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
