import { NextResponse } from "next/server";

export async function GET(request, context) {
  const food_name = context.params.food_name; // grabs food name

  try {
    const response = await fetch(
      `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${process.env.FDC_API_KEY}&query=${food_name}`
    );

    const data = await response.json();
    const foods = data.foods; // gets the resulting array of foods fro the daya
    const food_result = []; // returning this as json

    for (const food of foods) {
      let nutrients = getfoodNutrients(food.foodNutrients); // grabs all the nutrients

      // console.log(food.packageWeight);

      // creates object and pushes it to food_result
      food_result.push({
        brand_Owner: food.brandOwner,
        weight: food.packageWeight,
        brand_name: food.brandName,
        serving_size: food.servingSize,
        unit_name: food.unitName,
        description: food.description,
        nutrients: nutrients,
      });
    }

    const first_15_foods = food_result.slice(0, 15);

    return NextResponse.json({
      food_data: first_15_foods,
      status: 200,
    });
  } catch (error) {
    if (error) {
      return NextResponse.json({ error: error.message, status: 500 });
    }
  }
}

// pre: arr of nutrients
// returns an array of objects where its {nutrient_name: nutrient_value}
const getfoodNutrients = (foodNutrients) => {
  const arr = []; // what we are returning

  // loops through the array of nutrients and takes the data that we want {name , value}
  for (let item of foodNutrients) {
    let obj = { name: item.nutrientName, value: item.value };
    arr.push(obj);
  }
  return arr;
};
