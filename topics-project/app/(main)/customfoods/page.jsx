
"use client";
import { sendData } from "./action"
import { useState, useEffect } from "react";
import { createClient} from "@/utils/supabase/client";


export default function CustomFoodForm() {
  const supabase = createClient();

  const [userID, setUserID] = useState("");

  useEffect(() => {
    const getUserID = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (error) {
        console.error("Error fetching user:", error.message);
      } else {
        setUserID(data.user.id);
      }
    };
    getUserID();
  }, []);

  // states for out forms
  const [formData, setFormData] = useState({
    food_name: '',
    calories: '',
    protein: '',
    fat: '',
    carbs: ''
  })
  // handle typing
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // hand our form submission
  const handleSubmit = async (e) => {
    try {

      // if our forms have empty values change them to 0s
      const handledformData = {
        ...formData,
        protein: formData.protein === "" ? 0 : formData.protein,
        fat: formData.fat === "" ? 0 : formData.fat,
        carbs: formData.carbs === "" ? 0 : formData.carbs,
      };
      // send to supabase
      await sendData(handledformData, userID);

      // clear the form 
      setFormData({
        food_name: '',
        servings: '',
        calories: '',
        protein: '',
        fat: '',
        carbs: ''
      });
    } catch (error) {
      console.error("Error submitting form: ", error);
    }
  };


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#FFF7ED] px-4 sm:px-6"> {/* Responsive padding */}
      <div className="p-4 sm:p-8 w-full max-w-md"> {/* Responsive padding and width */}
        <h1 className="text-[#4C220A] text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">Add Custom Food</h1> {/* Responsive text size */}
        <form  className="flex flex-col space-y-4">
        <label className="text-[18px] text-[#4C220A]" htmlFor="food_name">Food Name:</label>
        <input
        className="border-2 border-[#4C220A] p-2 rounded"
        placeholder="Enter the meal's name"
        id="food_name"
        name="food_name"
        type="text"
        value={formData.food_name}
        onChange={handleChange}
        required
      />
      <label className="text-[18px] text-[#4C220A]" htmlFor="quantity">Servings:</label>
        <input
        className="border-2 border-[#4C220A] p-2 rounded"
        placeholder="Enter the amount of servings"
        id="servings"
        name="servings"
        type="number"
        min="1"
        value={formData.servings}
        onChange={handleChange}
        required
      />
      <label className="text-[18px] text-[#4C220A]" htmlFor="calories">Calorie Count (per serving):</label>
      <input
        className="border-2 border-[#4C220A] p-2 rounded"
        placeholder="Enter the calorie amount (Kcal)"
        id="calories"
        name="calories"
        type="number"
        min="0"
        value={formData.calories}
        onChange={handleChange}
        required
      />
      <label className="text-[18px] text-[#4C220A]" htmlFor="protein">Protein (per serving):</label>
      <input
        className="border-2 border-[#4C220A] p-2 rounded"
        placeholder="Enter the protein amount (g)"
        id="protein"
        name="protein"
        min="0"
        value={formData.protein}
        onChange={handleChange}
        type="number"
      />
      <label className="text-[18px] text-[#4C220A]" htmlFor="fat">Fat (per serving):</label>
      <input
        className="border-2 border-[#4C220A] p-2 rounded"
        placeholder="Enter the fat amount (g)"
        id="fat"
        name="fat"
        min="0"
        value={formData.fat}
        onChange={handleChange}
        type="number"
      />
      <label className="text-[18px] text-[#4C220A]" htmlFor="carbs">Carbs (per serving):</label>
      <input
        className="border-2 border-[#4C220A] p-2 rounded"
        placeholder="Enter the carbs amount (g)" 
        id="carbs"
        name="carbs"
        min="0"
        value={formData.carbs}
        onChange={handleChange}
        type="number"
      />
    <button className="bg-[#D79C59] text-[#FFF7ED] py-2 px-4 sm:py-3 sm:px-6 rounded font-semibold mt-4" formAction={handleSubmit}>ADD FOOD</button>

    </form>
    </div>
    </div>

  );
}