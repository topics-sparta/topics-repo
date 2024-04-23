"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

function SearchFood() {
  const [searchValue, setSearchValue] = useState();
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchValue)
    router.push(`/search-food/${searchValue}`);
  };
  return (
    <div className="w-full h-full bg-customPrimary">
      <div className="flex items-center justify-center flex-col md:pt-20 pt-10 ">
        {/* for input */}
        <div>
          <form onSubmit={handleSubmit}>
            <input
              className="w-[347px]  md:w-[650px] h-[60px] text-[24px] text-[#FFF7ED] placeholder-[#FFF7ED] bg-[#D79C59] rounded-[999px] px-10 outline-none drop-shadow-2xl "
              placeholder="Search for any foods..."
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
            />
          </form>
        </div>
        {/* for input */}

        {/* for buttons */}
        <div className="flex  items-center flex-wrap  md:flex-nowrap justify-center w-full md:w-[75%] mt-14 md:space-x-10   ">
          {/* <div className="flex items-center justify-center w-full space-x-5"> */}
          <div className="flex text-center cursor-pointer flex-col items-center justify-center w-[36%] md:w-[33%]  md:mr-0 mr-5 h-[158px] md:h-[143.25px] bg-[#D79C59] bg-opacity-[20%] rounded-md ">
            <svg
              className="bg-[#D79C59]  text-[#FFF7ED] w-[50px] h-[50px] rounded-[999px]  p-2"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 1024 1024"
            >
              <path
                fill="currentColor"
                d="M834.1 469.2A347.5 347.5 0 0 0 751.2 354l-29.1-26.7a8.09 8.09 0 0 0-13 3.3l-13 37.3c-8.1 23.4-23 47.3-44.1 70.8c-1.4 1.5-3 1.9-4.1 2s-2.8-.1-4.3-1.5c-1.4-1.2-2.1-3-2-4.8c3.7-60.2-14.3-128.1-53.7-202C555.3 171 510 123.1 453.4 89.7l-41.3-24.3c-5.4-3.2-12.3 1-12 7.3l2.2 48c1.5 32.8-2.3 61.8-11.3 85.9c-11 29.5-26.8 56.9-47 81.5a295.6 295.6 0 0 1-47.5 46.1a352.6 352.6 0 0 0-100.3 121.5A347.75 347.75 0 0 0 160 610c0 47.2 9.3 92.9 27.7 136a349.4 349.4 0 0 0 75.5 110.9c32.4 32 70 57.2 111.9 74.7C418.5 949.8 464.5 959 512 959s93.5-9.2 136.9-27.3A348.6 348.6 0 0 0 760.8 857c32.4-32 57.8-69.4 75.5-110.9a344.2 344.2 0 0 0 27.7-136c0-48.8-10-96.2-29.9-140.9M713 808.5c-53.7 53.2-125 82.4-201 82.4s-147.3-29.2-201-82.4c-53.5-53.1-83-123.5-83-198.4c0-43.5 9.8-85.2 29.1-124c18.8-37.9 46.8-71.8 80.8-97.9a349.6 349.6 0 0 0 58.6-56.8c25-30.5 44.6-64.5 58.2-101a240 240 0 0 0 12.1-46.5c24.1 22.2 44.3 49 61.2 80.4c33.4 62.6 48.8 118.3 45.8 165.7a74.01 74.01 0 0 0 24.4 59.8a73.36 73.36 0 0 0 53.4 18.8c19.7-1 37.8-9.7 51-24.4c13.3-14.9 24.8-30.1 34.4-45.6c14 17.9 25.7 37.4 35 58.4c15.9 35.8 24 73.9 24 113.1c0 74.9-29.5 145.4-83 198.4"
              />
            </svg>

            <h1 className=" font-redHatText font-[430] text-[18px] md:text-[24px] pt-5 text-[#4C220A]">
              Add Custom Food
            </h1>
          </div>
          <div className="flex text-center cursor-pointer flex-col items-center justify-center w-[36%] md:w-[33%]  h-[158px] md:h-[143.25px] bg-[#D79C59] bg-opacity-[20%] rounded-md ">
            <svg
              className="bg-[#D79C59]  text-[#FFF7ED] w-[50px] h-[50px] rounded-[999px] p-2"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M15 3h7v2h-1v5h1v2c0 5.523-4.477 10-10 10S2 17.523 2 12v-2h1a6 6 0 1 1 12 0h1V5h-1zm3 2v5h1V5zM4 12a8 8 0 1 0 16 0zm1-2h1a3 3 0 0 1 6 0h1a4 4 0 0 0-8 0m5 0a1 1 0 0 0-2 0z"
              />
            </svg>

            <h1 className=" font-redHatText font-[430] text-[18px] md:text-[24px] pt-5 text-[#4C220A]">
              Generate Meal
            </h1>
          </div>
          {/* </div> */}

          <div className="flex cursor-pointer flex-col items-center justify-center w-[80%] md:mt-0 mt-8 md:w-[33%]  h-[130px] md:h-[143.25px] bg-[#D79C59] bg-opacity-[20%] rounded-md ">
            <svg
              className="bg-[#D79C59]  text-[#FFF7ED] w-[50px] h-[50px] rounded-[999px] p-2"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M2 2h7v2H4v5H2zm13 0h7v7h-2V4h-5zM9 8v8H7V8zm4 0v8h-2V8zm4 0v8h-2V8zM4 15v5h5v2H2v-7zm18 0v7h-7v-2h5v-5z"
              />
            </svg>

            <h1 className=" font-redHatText font-[430] text-[20px] md:text-[24px] pt-5 text-[#4C220A]">
              Scan Barcode
            </h1>
          </div>
        </div>
        {/* for buttons */}

        {/* history section */}
        <div className="w-[75%]">
          <h1 className="pt-20 text-[#4C220A] font-bold text-[32px] ">
            History
          </h1>
        </div>
      </div>
    </div>
  );
}

export default SearchFood;
