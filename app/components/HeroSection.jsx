"use client";
import React from "react";
import Image from "next/image";
import img5 from "@/app/assets/images/img5.png";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="mt-20">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text  bg-gradient-to-r from-purple-400 to-yellow-400">
              Hello, I'm{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Jamila",
                4000,
                "23",
                4000,
                "Frontend Developer",
                4000,
                // "Cool",
                // 1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-lg mb-6 lg:text-xl">
            I love turning ideas into beautiful, interactive designs. Front-end
            development lets me bring imagination to life — and I’m here for
            every challenge it throws at me.
          </p>
          <div>
            <button className="px-6 py-4 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-yellow-500 hover:bg-slate-200 text-white">
              Goals
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-red-400 via-yellow-300 to-red-600 hover:bg-slate-800 text-white mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Fun Facts
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0 ">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] relative lg:w-[300px] lg:h-[300px]">
            <Image
              src={img5}
              alt="me"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
