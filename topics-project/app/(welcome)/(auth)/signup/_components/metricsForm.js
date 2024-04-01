"use client";

export const MetricsForm = ({ formData, handleInputChange, handleSubmit }) => {
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-[300px] md:w-[400px] gap-1"
      >
        <label className="text-2xl font-bold mb-3" htmlFor="height">
          Height
        </label>
        <input
          className="appearance-none h-1 w-full bg-customAccent rounded-full cursor-pointer"
          id="height"
          name="height"
          type="range"
          min="24"
          max="84"
          step="1"
          value={formData.height}
          onChange={handleInputChange}
          required
        />
        <div
          className="text-center relative font-bold text-lg mb-2"
          htmlFor="height"
        >
          {inchesToFeetInches(formData.height)}
        </div>

        <label className="text-2xl font-bold mb-3" htmlFor="weight">
          Weight (lbs)
        </label>
        <input
          className="border-2 border-[#4C220A] p-2 pl-4 rounded-sm mb-5"
          id="name"
          name="name"
          type="number"
          placeholder="Enter your weight"
          value={formData.name}
          onChange={handleInputChange}
          required
        />

        <label className="text-2xl font-bold mb-2">Gender</label>
        <div className="flex items-center mb-5">
          <div className="border-2 border-[#4C220A] rounded-md mr-2 pl-2 pr-2 p-1 cursor-pointer bg-[#fff] ">
            <input
              className="mr-2 text-red-600"
              type="radio"
              id="male"
              name="gender"
              value="male"
              checked={formData.gender === "male"}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="male">Male</label>
          </div>
          <div className="border-2 border-[#4C220A] rounded-md ml-4 mr-2 pl-2 pr-2 p-1 cursor-pointer bg-[#fff]">
            <input
              className="mr-2"
              type="radio"
              id="female"
              name="gender"
              value="female"
              checked={formData.gender === "female"}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="female">Female</label>
          </div>
        </div>

        <label className="text-2xl font-bold">Goal</label>
        <select
          className="w-[170px] border-2 border-[#4C220A] p-2 rounded-sm mb-5 mr-2 cursor-pointer"
          id="goal"
          name="goal"
          value={formData.goal}
          onChange={handleInputChange}
          required
        >
          <option value="">Select goal</option>
          <option value="losing">Losing weight</option>
          <option value="maintenance">Maintenance</option>
          <option value="gaining">Gaining weight</option>
        </select>

        <div className="flex gap-2 items-center justify-center w-full mt-3">
          <div className="w-3 h-3 rounded-full bg-slate-400"></div>
          <div className="w-3 h-3 rounded-full bg-black"></div>
        </div>
        <button className="w-full mt-1 h-14 flex justify-center items-center rounded-md bg-customSecondary text-customPrimary hover:text-customPrimary hover:bg-customAccent transition-colors duration-300">
          <p className="font-poppins font-bold text-base md:text-xl">
            CREATE ACCOUNT
          </p>
        </button>
      </form>
    </div>
  );
};

function inchesToFeetInches(inches) {
  const feet = Math.floor(inches / 12);
  const remainingInches = inches % 12;
  return `${feet}' ${remainingInches}"`;
}
