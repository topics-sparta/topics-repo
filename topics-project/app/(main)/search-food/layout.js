import SearchBar from "./components/SearchBar";
import Loading from "../../components/loading";
import { Suspense } from "react";

export default function SearchFoodLayout({ children }) {
  return (
    <div className="w-full h-screen grid grid-rows-8 bg-customPrimary">
      <SearchBar />
      <div className="h-[calc(100% - 3.5rem)]">
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </div>
    </div>
  );
}
