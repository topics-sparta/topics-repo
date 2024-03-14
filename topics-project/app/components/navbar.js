"use client"
import { LogIn } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"
import clsx from "clsx";

export const Navbar = () => {
    const pathName = usePathname();
    // Need this because homepage requires nav to be secondary color, rest of pages need nav to be primary color
    const color = pathName === "/" ? "dark" : "light";
    const router = useRouter();

    return (
        <div className={clsx("w-full h-16", color === 'dark' ? 'bg-customSecondary' : 'bg-customPrimary')}>
            <div className={"h-full flex justify-between items-center lg:max-w-screen-xl mx-auto px-4 xl:px-0"}>
                <div className="flex gap-2 items-center">
                    <p className={clsx("font-poppins font-bold text-2xl md:text-3xl cursor-pointer", color === "dark" ? "text-customPrimary" : "text-customSecondary")} onClick={() => router.push("/")}>Sparta</p>
                </div>
                {/* TO DO: Switch this with log out if user is signed in */}
                {/* TO DO: Add routing to this to Sign In */}
                <div className={clsx("flex items-center gap-2 p-2 transition-colors duration-300 cursor-pointer rounded-md", color === "dark" ? "text-customPrimary hover:bg-customAccent/15" : "text-customSecondary hover:bg-customSecondary/10")} onClick={() => router.push('/login')}>
                    <LogIn className="w-5 h-5 md:w-6 md:h-6 " />
                    <p className="hidden lg:block text-xl text-redHatText font-medium">Sign In</p>
                </div>
            </div>
        </div>
    )
}