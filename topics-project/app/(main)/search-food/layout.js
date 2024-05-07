import SearchBar from "./components/SearchBar";
import { Loader } from "lucide-react";
import { Suspense } from "react";

export default function SearchFoodLayout({ children }) {
  return (
    <div className="w-full min-h-screen flex flex-col gap-10 bg-customPrimary">
      <div className="w-full">
        <SearchBar />
      </div>
      <div className="min-h-[calc(100vh-3.5rem)] w-full">
        <Suspense fallback={<div className="w-full h-screen flex bg-customPrimary justify-center items-center"><Loader className="w-10 h-10 text-customSecondary animate-spin" /></div>}>{children}</Suspense>
      </div>
    </div>
  );
}
