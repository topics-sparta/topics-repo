import { useRouter } from "next/navigation";
import { signOut } from "../action";
import { LogOut, LoaderCircle } from 'lucide-react';
import { useState } from "react";
import clsx from "clsx";

export default function SignOut(){
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const handleSignOut = async () => {
        setIsLoading(true);
        const result = await signOut();
        if(result.message === "success") {
            router.push('/')
        }
    }

    return (
        <div className="text-customSecondary flex items-center justify-start gap-3 font-redHatText w-full pl-4">
            <div className="group flex gap-3 items-center justify-start cursor-pointer" onClick={() => handleSignOut()}>
                <LogOut className="h-8 transition-colors duration-300 group-hover:text-customAccent" />
                <p className="text-lg font-medium transition-colors duration-300 group-hover:text-customAccent">Sign out</p>
            </div>
            <LoaderCircle className={clsx("h-8 animate-spin", isLoading ? "flex" : "hidden")} />
        </div>
    )
}