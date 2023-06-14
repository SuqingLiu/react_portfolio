import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import Marquee from 'react-fast-marquee';

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-white via-cyan-600 to-white"
    >
      <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center h-full md:flex-row">
        <div className="flex flex-col justify-center h-full ml-10">
        <h2 className="text-3xl sm:text-1xl mt-10 font-bold text-white">
          <Marquee speed={85} direction="left">
            Full Stack Development | DevOps | Cloud Computing |&nbsp;
          </Marquee>
          <Marquee speed={75} direction="left">
            Blockchain | Smart Contract |&nbsp;
          </Marquee>
          <Marquee speed={65} direction="left">
            Data Science | Machine Learning |&nbsp;
          </Marquee>
        </h2>
          <p className="text-yellow-500 py-4 max-w-md">
            Computer Science Specialist Undergrad from University of Toronto
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-1/2 md:w-1/2 transform hover:scale-105 duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
