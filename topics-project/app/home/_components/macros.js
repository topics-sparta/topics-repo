export const Macros = ({ protein, fat, carbs, proteinGoal, fatGoal, carbGoal }) => {
  console.log("in macros",protein,fat,carbs, proteinGoal, fatGoal, carbGoal)
  return (
    <div className="bg-customAccent/10 rounded-lg shadow-lg w-6/12 h-200 p-2 max-w-52 flex flex-col justify-between">
      <h1 className="text-base font-semibold font-poppins text-customAccent text-start md:text-lg">
        Macros
        <span className="text-xs pl-2">(grams)</span>
      </h1>
      <div className="relative flex flex-col w-full h-full">
        {/* The idea here is going to be we grab the users info and we will put min 0, max their targets, value current  */}
        {/*Protein Slider */}
        <div>
          <h1 className="text-sm font-redHatText text-customAccent">Protein: {protein}/{proteinGoal}</h1>
          <input
            className="appearance-none bg-customAccent rounded-full w-10/12"
            type="range"
            min="0"
            max={proteinGoal}
            value={protein}
          />
        </div>
        {/*Fat Slider */}
        <div>
        <h1 className="text-sm font-redHatText text-customAccent">Fat: {fat}/{fatGoal}</h1>
          <input
            className="appearance-none bg-customAccent rounded-full w-10/12"
            type="range"
            min="0"
            max={fatGoal}
            value={fat}
          />
        </div>
        {/*Carbs Slider */}
        <div>
        <h1 className="text-sm font-redHatText text-customAccent">Carbs: {carbs}/{carbGoal}</h1>
          <input
            className="appearance-none bg-customAccent rounded-full w-10/12"
            type="range"
            min="0"
            max={carbGoal}
            value={carbs}
          />
        </div>
      </div>
    </div>
  );
};
export default Macros;
