// import { _api } from "@iconify/react";
import fetch from "cross-fetch";

function Buttoncard({ item }) {
  console.log(item);
  const icons = [];
  return (
    <div className="flex flex-col items-center justify-center w-[33%] h-[131.25px] bg-[#D79C59] bg-opacity-[20%] rounded-md ">
      {
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
      }
      <h1 className=" font-redHatText font-[430] text-[24px] pt-5 text-[#4C220A]">
        Something Something
      </h1>
    </div>
  );
}

export default Buttoncard;
