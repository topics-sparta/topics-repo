"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Search } from "lucide-react";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState();
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search-food/${searchValue}`);
  };

  return (
    <div className="w-8/12 h-14 mx-auto mt-10">
      <form
        className="w-full h-full relative text-customPrimary transition-colors bg-customSecondary/80 hover:bg-customSecondary rounded-full overflow-hidden"
        onSubmit={handleSubmit}
      >
        <input
          className="w-full h-full text-lg placeholder:text-customPrimary bg-inherit hover:bg-inherit text-inherit pl-12 outline-none"
          placeholder="Search for any foods..."
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
        <div className="absolute left-4 top-0 bottom-0 my-auto w-fit h-fit">
          <Search className="text-customPrimary w-6 h-6" />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
