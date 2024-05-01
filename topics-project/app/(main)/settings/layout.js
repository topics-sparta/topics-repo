import Navbar from "./components/Navbar";
import NavbarDropDown from "./components/NavbarDropDown";

export default function Layout({ children }) {
  return (
    <div className="w-full h-full flex flex-col bg-customPrimary">
        <div className="flex md:flex-col max-h-32 w-10/12 mx-auto items-center justify-between md:justify-center mt-4">
            <p className="text-3xl font-poppins font-bold text-customAccent">Settings</p>
            <Navbar />
            <NavbarDropDown />
        </div>
        <div className="w-full md:h-[calc(100vh-10rem)]">{children}</div>
    </div>
  );
}
