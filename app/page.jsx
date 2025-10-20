import { Button } from "@/components/UI/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";
import Photo from "@/components/Photo";

const Home = () => {
  return (
    <section className="h-[85%] bg-primary overflow-x-hidden">
      <div className="container mx-auto h-[85%]">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start h-full">
          {/* Left Section */}
          <div className="text-center lg:text-left order-2 lg:order-1 flex-1 lg:pr-16 lg:pt-0">
            <span className="text-lg sm:text-xl block mb-2 text-accent-hover">
              Associate Software Engineer
            </span>
            <h1 className="text-3xl lg:text-5xl font-bold mb-6">
              Hello I'm <br />
              <span className="text-accent-hover">
                Lakchika Jekanathan
              </span>
            </h1>
            <p className="max-w-[500px] mx-auto lg:mx-0 text-base sm:text-lg mb-6 text-white/70 leading-relaxed">
              Passionate software development with a knack for creating
              innovative solutions. My enthusiasm for tackling new challenges
              and collaborating with dynamic teams drives me to deliver
              impactful results.
            </p>

            {/* Buttons and Social Links */}
            <div className="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start">
              <a href="/Lakchika_Jekanathan.pdf" download target="_blank">
                <Button className="text-md flex items-center gap-2">
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-1 lg:mb-0">
                <Social
                  containerStyles="flex gap-6 justify-center lg:justify-start"
                  iconStyles="w-11 h-11 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent-hover hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* Right Section (Photo) */}
          <div className="order-1 lg:order-2 mb-8 lg:mb-0 lg:pt-6">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;



/* export const CirculerText = ({className,...rest}) => (
  <svg xmlns="http://www.w3.org/2000/svg"
  width="496"
  height="496"
  viewBox="0 0 496 496"
  xmlSpace="preserve"
  className={`w-full h-auto ${className}`}
  {...rest}
  >
  <image href="./svgs/HireMe.png" x="0" y="0" height="550px" width="550px"/>
   
  </svg>
); */
