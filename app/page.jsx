import { Button } from "@/components/UI/button";
import { FiDownload } from "react-icons/fi";

import Social from "@/components/Social";
import Photo from "@/components/Photo";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex justify-between xl:pt-8 xl:pb-24">
          <div className="text-left xl:text-left">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br />{" "}
              <span className="text-accent-hover">Lakchika Jekanathan</span>
            </h1>

            <p className="max-w-[500px] mb-6 text-white/70 leading-snug">
              Passionate software development with a knack for creating
              innovative solutions. My enthusiasm for tackling new challenges
              and collaborating with dynamic teams drives me to deliver
              impactful results.
            </p>

            <div className="flex items-center gap-5">
              <a href="/Lakchika_Jekanathan_CV.pdf" download>
                <Button className="text-md flex items-center gap-2">
                  <span>Download CV </span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-1 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-11 h-11 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent-hover hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          <div className="order-1 xl:order-none mb-8 xl:mb-0">
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
