
import { sendData, validateForm, handleSubmit } from "./action"

export default function CustomFoodForm() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#FFF7ED] px-4 sm:px-6"> {/* Responsive padding */}
      <div className="p-4 sm:p-8 w-full max-w-md"> {/* Responsive padding and width */}
        <h1 className="text-[#4C220A] text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">Add Custom Food</h1> {/* Responsive text size */}
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <label className="text-[18px] text-[#4C220A]" htmlFor="foodName">Food Name:</label>
        <input
        className="border-2 border-[#4C220A] p-2 rounded"
        placeholder="Enter the calorie amount (Kcal)"
        id="Calorie Count"
        name="Calorie Count"
        type="number"
        min="0"
        required
      />
      <label className="text-[18px] text-[#4C220A]" htmlFor="Calories">Calorie Count:</label>
      <input
        className="border-2 border-[#4C220A] p-2 rounded"
        placeholder="Enter the calorie amount (Kcal)"
        id="Calorie Count"
        name="Calorie Count"
        type="number"
        min="0"
        required
      />
      <label className="text-[18px] text-[#4C220A]" htmlFor="Protein">Protein:</label>
      <input
        className="border-2 border-[#4C220A] p-2 rounded"
        placeholder="Enter the protein amount (g)"
        id="Protein"
        name="Protein"
        min="0"
        type="number"
      />
      <label className="text-[18px] text-[#4C220A]" htmlFor="Fat">Fat:</label>
      <input
        className="border-2 border-[#4C220A] p-2 rounded"
        placeholder="Enter the fat amount (g)"
        id="Fat"
        name="Fat"
        min="0"
        type="number"
      />
      <label className="text-[18px] text-[#4C220A]" htmlFor="Carbs">Carbs:</label>
      <input
        className="border-2 border-[#4C220A] p-2 rounded"
        placeholder="Enter the carbs amount (g)" 
        id="Carbs"
        name="Carbs"
        min="0"
        type="number"
      />
      <button className="bg-[#D79C59] text-[#FFF7ED] py-2 px-4 sm:py-3 sm:px-6 rounded font-semibold mt-4 "type="submit">ADD FOOD</button>

    </form>
    </div>
    </div>

  );
}