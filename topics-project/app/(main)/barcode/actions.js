"use server";

import { CloudHail } from "lucide-react";

export const fetchFoodInfo = async (barcode) => {
  const foodInfo = {
    brandName: "",
    name: "",
    servingSize: "",
    servingSizeUnit: "",
    calories: 0,
    protein: 0,
    carbohydrates: 0,
    fat: 0,
    fiber: 0,
  };

  try {
    const response = await fetch(`http://localhost:3000/api/get-food-info?barcode=${barcode}`)
    const data = await response.json();
    if (data.error) {
      throw data.error;
    } else {
      foodInfo.brandName = data.brandName;
      foodInfo.name = data.name;
      foodInfo.servingSize = data.servingSize;
      foodInfo.servingSizeUnit = data.servingSizeUnit;
      foodInfo.calories = data.calories;
      foodInfo.protein = data.protein;
      foodInfo.carbohydrates = data.carbohydrates;
      foodInfo.fat = data.fat;
      foodInfo.fiber = data.fiber;
      return foodInfo;
    }
  } catch (error) {
    console.error('Error:', error);
  }
};