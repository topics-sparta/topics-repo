"use client"
import { ChevronRight } from "lucide-react"
import mobileView from "../../../../public/mobileView.png"
import desktopView from "../../../../public/DesktopView.png"
import Image from "next/image"
import Link from "next/link"

export const Hero = () => {
    return (
        <div className="w-full mb-4 mt-4">
            <div className="lg:max-w-screen-xl mx-auto px-4 xl:px-0 flex flex-col gap-6 sm:gap-0 sm:grid grid-cols-2">
                <div className="col-span-1 flex flex-col items-start gap-4 lg:gap-8">
                    <div className="flex flex-col font-poppins">
                        <p className="text-4xl md:text-6xl text-customPrimary font-bold">Empower your health.</p>
                        <p className="text-4xl md:text-6xl text-customAccent font-bold">Reach your goals.</p>
                    </div>
                    <Link href="/signup" className="w-full">
                        <button className="w-full md:w-80 h-14 flex justify-center items-center gap-2 rounded-md bg-customPrimary text-customAccent hover:text-customPrimary hover:bg-customAccent transition-colors duration-300">
                            <p className="font-poppins font-bold text-base md:text-xl">START TODAY</p>
                            <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                        </button>
                    </Link>
                </div>
                <div className="col-span-1 relative w-full overflow-hidden">
                    <figure className="absolute left-[60px] sm:left-[120px] h-[200px] w-[265px] rounded-md sm:w-[465px] sm:h-[350px]"><Image className="rounded-sm" fill src={desktopView} alt="image of desktop version of app" /></figure>
                    <figure className="relative z-10 mt-6 sm:mt-12 h-[175px] w-[82px] sm:h-[300px] sm:w-[140px]">
                        <Image fill src={mobileView} alt="image of mobile version of app" />
                    </figure>
                </div>
            </div>
        </div>
    )
}