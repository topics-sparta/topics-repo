export async function GET(request) {
  const barcode = request.nextUrl.searchParams.get("barcode");
  const key = process.env.FDC_API_KEY;
  const url = `https://api.nal.usda.gov/fdc/v1/foods/search/?query=${barcode}&api_key=${key}`
  try {
    const response = await fetch(url, { method: "GET" })
    const data = await response.json();

    if (data.totalHits === 0) {
      throw new Error("No food found");
    }

    const nutrients = data.foods[0].foodNutrients;
    const foodInfo = {
      "brandName": data.foods[0].brandName,
      "name": data.foods[0].description,
      "servingSize": data.foods[0].servingSize,
      "servingSizeUnit": data.foods[0].servingSizeUnit,
      "calories": 0,
      "protein": 0,
      "carbohydrates": 0,
      "fat": 0,
      "fiber": 0,
    }
    for (const nutrient of nutrients) {
      let nutrientID = nutrient.nutrientId;
      if (nutrientID === 1008)
        foodInfo.calories = Math.round(nutrient.value / 2);
      else if (nutrientID === 1003)
        foodInfo.protein = Math.round(nutrient.percentDailyValue / 100 * 50);
      else if (nutrientID === 1004)
        foodInfo.fat = Math.round(nutrient.percentDailyValue / 100 * 75);
      else if (nutrientID === 1005)
        foodInfo.carbohydrates = Math.round(nutrient.percentDailyValue / 100 * 257);
      else if (nutrientID === 1079)
        foodInfo.fiber = Math.round(nutrient.percentDailyValue / 100 * 28);

    }
    return new Response(JSON.stringify(foodInfo), { status: 200 });

  } catch (error) {
    return new Response({ error: error }, { status: 500 });
  }
}