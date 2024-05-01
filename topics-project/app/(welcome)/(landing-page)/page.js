import { Hero } from "./_components/hero";
import { Infographics } from "./_components/infographics";

const LandingPage = () => {
    return (
      // Subtracting 64px accounts for the navbar height (64px) in the layout to make page non-scrollable
      <div className="min-h-[calc(100vh-64px)] flex flex-col bg-customPrimary w-full">
          <div className="flex flex-col bg-customSecondary md:min-h-[calc(calc(100vh/2)-64px)]">
                <div className="h-full my-auto">
                    <Hero />
                </div>
          </div>
          <div className="flex flex-col md:min-h-[calc(calc(100vh/2)-64px)] justify-center items-center w-full">
            <Infographics />
          </div>
      </div>
    );
  }

  export default LandingPage;