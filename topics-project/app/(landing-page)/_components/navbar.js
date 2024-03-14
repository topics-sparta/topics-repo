import { LogIn } from "lucide-react"

export const Navbar = () => {
    return (
        <div className={"w-full h-16"}>
            <div className="h-full flex justify-between items-center lg:max-w-screen-xl mx-auto px-4 xl:px-0">
                <div className="flex gap-2 items-center">
                    <p className="font-poppins font-bold text-2xl md:text-3xl text-customPrimary">Sparta</p>
                </div>
                {/* TO DO: Add routing to this to Sign In */}
                <div className="flex items-center gap-2">
                    <LogIn className="w-5 h-5 md:w-6 md:h-6 text-customPrimary" />
                    <p className="hidden lg:block text-xl text-redHatText text-customPrimary font-medium">Sign In</p>
                </div>
            </div>
        </div>
    )
}