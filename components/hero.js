import React from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";

const Hero = () => {
  return (
    <section className="flex flex-col justify-center items-center h-screen w-screen overflow-hidden px-4"  data-aos="slide-up">
      <h1 className="font-bold text-5xl sm:text-7xl mb-6 text-center max-w-3xl" >
        <span className="text-blue-600 font-extrabold sm:font-bold">
          Indranil Roy
        </span>
        , Software Engineer
      </h1>
      <p className="font-light text-2xl max-w-3xl text-center mb-12">
        As a <span className="font-medium">passionate software engineer</span>,
        I am committed to continuous learning and seeking new challenges to
        advance my personal and professional growth. I strive to enhance my
        skills and knowledge to deliver innovative solutions and achieve
        outstanding outcomes.
      </p>
      <a
        href="https://www.linkedin.com/in/indranil-r/"
        target="_blank"
        rel="noopener noreferrer"
        className="border border-blue-500 text-blue-500 font-bold py-3 px-6 flex items-center gap-2 transition duration-300 ease-in-out hover:bg-blue-700 hover:text-white"
        >
        <SiLinkedin className="text-xl" />
        <span>View profile</span>
      </a>
    </section>
  );
};

export default Hero;
