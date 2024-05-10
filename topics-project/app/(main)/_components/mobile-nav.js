import { X, Menu } from "lucide-react";

export default function MobileNav({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  router,
}) {
  return (
    <div className="w-full flex items-center justify-center h-20 border-b-2 border-customAccent/10">
      <div className="w-11/12 h-full flex items-center justify-between">
        <p
          className={
            "font-poppins font-bold text-4xl cursor-pointer text-customSecondary w-fit"
          }
          onClick={() => router.push("/home")}
        >
          Sparta
        </p>
        <button
          className="text-customSecondary"
          onClick={(e) => {
            e.preventDefault();
            setIsMobileMenuOpen(!isMobileMenuOpen);
          }}
        >
          {isMobileMenuOpen ? (
            <X className="w-8 h-8" />
          ) : (
            <Menu className="w-8 h-8" />
          )}
        </button>
      </div>
    </div>
  );
}
