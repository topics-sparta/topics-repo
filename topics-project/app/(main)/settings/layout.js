import Navbar from "./components/Navbar";
import NavbarDropDown from "./components/NavbarDropDown";

export default function Layout({ children }) {
  return (
    <div className="w-full h-full flex flex-col bg-customPrimary">
        <div className="flex flex-col max-h-32 w-full items-center">
            <p className="text-3xl font-poppins font-bold text-customAccent mt-8">Settings</p>
            <Navbar />
            <NavbarDropDown />
        </div>
        <div className="w-full md:h-[calc(100vh-10rem)]">{children}</div>
    </div>
  );
}
