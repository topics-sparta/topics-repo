"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Loader } from "lucide-react";

function FoodResults() {
  const searchParams = useParams();
  const [loading, setLoading] = useState(true);
  const [food_result, setFoods] = useState();

  const fetchUserQuery = async (query_string) => {
    console.log("running");
    const PATH = window.origin;
    const res = await fetch(`${PATH}/api/search-foods/${query_string}`);
    if (res.status === 200) {
      const data = await res.json();
      const { food_data, status } = data;
      setFoods(food_data);
      console.log(food_data[0]);
      setLoading(false);
    }
  };

  const { food_query } = searchParams; // pass into function . this may have spaces , represented as-> %20

  let title_food = food_query.split("%20").join(" "); // elimated the %20 and makes it a space

  useEffect(() => {
    fetchUserQuery(food_query);
  }, []);

  return (
    <div className="flex flex-col items-center-justify-center space-y-3">
      <h1 className="font-bold text-[50px]"> Results for : {title_food} </h1>
      {loading ? (
        <div className="w-full h-screen flex bg-customSecondary/25 justify-center items-center">
          <Loader className="w-10 h-10 animate-spin text-customSecondary" />
        </div>
      ) : (
        <div>
          {food_result?.map((item) => {
            return (
              <div
                key={item.brand_name}
                className="flex flex-col border-2 flex-col space-y-2"
              >
                <h1>Brand name: {item.brand_name}</h1>
                <h1>Item Description: {item.description}</h1>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default FoodResults;
