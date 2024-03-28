"use client"
import { useRouter } from "next/navigation";
import { signOut } from "../action";

export default function SideNav() {
    const router = useRouter();

    const handleSignOut = async () => {
        const result = await signOut();
        if(result.message === "success") {
            router.push('/')
        }
    }
    
    return (
        <div className="h-full w-44 bg-customSecondary/25 flex">
            <div className="flex flex-col items-center w-full mt-8">
                <div className="flex gap-2 items-center">
                    <p className={"font-poppins font-bold text-4xl cursor-pointer text-customSecondary"} onClick={() => handleSignOut()}>Sparta</p>
                </div>
            </div>
        </div>
    )
}