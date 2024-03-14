import { Navbar } from "./_components/navbar";
import { Hero } from "./_components/hero";
import { Infographics } from "./_components/infographics";

const LandingPage = () => {
    return (
      <div className="min-h-screen flex flex-col bg-customPrimary w-full">
          <div className="flex flex-col bg-customSecondary gap-5 md:min-h-[calc(100vh/2)]">
                <Navbar />
                <div className="h-full my-auto">
                    <Hero />
                </div>
          </div>
          <div className="flex flex-col md:min-h-[calc(100vh/2)] justify-center items-center w-full">
            <Infographics />
          </div>
      </div>
    );
  }

  export default LandingPage;