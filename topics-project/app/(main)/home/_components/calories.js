export const Calories = ({ calorieGoal, calories }) => {
  return (
    <div className="bg-customAccent/10 rounded-2xl w-6/12 p-3 md:p-4 h-52 md:h-72 max-w-72">
      <div className="h-full w-full">
        <div className="grid grid-rows-6 grid-cols-1 h-full w-full">
          <h1 className="text-lg font-semibold font-poppins text-customAccent text-start md:text-2xl row-span-1 col-span-1">
            Calories
          </h1>
          <div className="row-span-5 col-span-1">
            <div className="relative flex flex-grow justify-center items-center w-full h-full">
              {/* may need to redo this (not use svg circle) due to it not being reasonable to use as a progress circle */}
              <svg className="w-full md:w-10/12 h-full" viewBox="0 0 190 190">
                <circle
                  className="progress-ring__circle"
                  stroke="white"
                  strokeWidth="10"
                  fill="transparent"
                  r="85"
                  cx="95"
                  cy="95"
                />
              </svg>
              <div className="absolute flex flex-col md:gap-1 mt-0 md:mt-2 items-center justify-center inset-0">
                <span
                  className="text-md font-poppins font-bold text-customAccent text-2xl md:text-4xl"
                >
                  {calorieGoal - calories}
                </span>
                <span
                  className="text-sm md:text-base font-medium font-redHatText text-customAccent/60"
                >
                  Kcal Left
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
