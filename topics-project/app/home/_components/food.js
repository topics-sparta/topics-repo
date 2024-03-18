{/* Make mobile responsive and correct design based on figma*/}
export const Food = ({ foodName, mealType, quantity, kcals }) => {
    return (
      <div className="flex flex-col bg-customSecondary rounded-lg shadow-lg overflow-hidden w-fit p-4 gap-2" >
        <div className="flex justify-between items-center gap-8">
          <span className="text-white font-bold text-lg md:text-xl">{foodName}</span>
          <span className="bg-white text-[#D79C59] text-sm px-3 py-1 rounded-full font-medium">
            {mealType}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-white/60 text-sm font-medium">{`x${quantity}`}</span>
          <span className="text-white/60 text-sm font-medium">
            {`${kcals} kcal`}
          </span>
        </div>
      </div>
    );
  };
  
  export default Food;
  
  
  
  