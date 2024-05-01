import { Apple, Flame, Scale } from "lucide-react"

export const Infographics = () => {
    return (
        <div className="lg:max-w-screen-xl w-full flex flex-col gap-5 lg:gap-0 md:flex-row md:flex-wrap justify-between mx-auto px-4 xl:px-0 my-6 md:my-0">
            <div className="flex flex-col items-center md:flex-row gap-4">
                <div className="w-20 h-20 bg-customSecondary rounded-full flex justify-center items-center"><Apple className="w-10/12 h-3/6 text-customPrimary" /></div>
                <div className="flex flex-col gap-1 max-w-72 text-center md:text-left">
                    <p className="font-poppins font-bold text-xl text-customAccent">Tracking Macros</p>
                    <p className="font-redHatText font-medium text-base text-customAccent/60">Make sure you are hitting your macro needs - Whether its high-protein, keto, or any other diet!</p>
                </div>
            </div>
            <div className="flex flex-col items-center md:flex-row gap-4">
                <div className="w-20 h-20 bg-customSecondary rounded-full flex justify-center items-center"><Scale className="w-10/12 h-3/6 text-customPrimary" /></div>
                <div className="flex flex-col gap-1 max-w-72 text-center md:text-left">
                    <p className="font-poppins font-bold text-xl text-customAccent">Weight Logging</p>
                    <p className="font-redHatText font-medium text-base text-customAccent/60">Log your daily weight and keep tabs on your progress towards smashing those health and fitness goals!</p>
                </div>
            </div>
            <div className="flex flex-col items-center md:flex-row gap-4">
                <div className="w-20 h-20 bg-customSecondary rounded-full flex justify-center items-center"><Flame className="w-10/12 h-3/6 text-customPrimary" /></div>
                <div className="flex flex-col gap-1 max-w-72 text-center md:text-left">
                    <p className="font-poppins font-bold text-xl text-customAccent">Counting Calories</p>
                    <p className="font-redHatText font-medium text-base text-customAccent/60">Counting your calories has never been easier! Just input the food and we will do the rest!</p>
                </div>
            </div>
        </div>
    )
}