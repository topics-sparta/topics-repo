{/* Make mobile responsive and correct design based on figma*/}
export const Food = ({ foodName, mealType, quantity, kcals }) => {
    return (
      <div className="flex flex-col bg-[#D79C59] rounded-lg shadow-lg overflow-hidden w-64" >
        <div className="flex justify-between items-center p-4">
          <span className="text-white font-bold text-lg">{foodName}</span>
          <span className="bg-white text-[#D79C59] text-sm px-3 py-1 rounded-full font-medium">
            {mealType}
          </span>
        </div>
        <div className="flex justify-between items-center p-4">
          <span className="text-white text-sm font-medium">{`x${quantity}`}</span>
          <span className="text-white text-sm font-medium">
            {`${kcals} kcal`}
          </span>
        </div>
      </div>
    );
  };
  
  export default Food;
  
  
  
  