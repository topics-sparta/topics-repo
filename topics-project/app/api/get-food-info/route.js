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
    const macros = {
      "name": data.foods[0].description,
      "calories": 0,
      "protein": 0,
      "carbohydrates": 0,
      "fat": 0
    }
    for (const nutrient of nutrients) {
      let nutrientID = nutrient.nutrientId;
      if (nutrientID === 1008)
        macros.calories = Math.round(nutrient.value / 2);
      else if (nutrientID === 1003)
        macros.protein = Math.round(nutrient.percentDailyValue / 100 * 50);
      else if (nutrientID === 1004)
        macros.fat = Math.round(nutrient.percentDailyValue / 100 * 75);
      else if (nutrientID === 1005)
        macros.carbohydrates = Math.round(nutrient.percentDailyValue / 100 * 257);

    }
    return new Response(JSON.stringify(macros), { status: 200 });

  } catch (error) {
    return new Response(error, { status: 500 });
  }
}