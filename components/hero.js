import React from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";

const Hero = () => {
  return (
    <section
      className="flex flex-col justify-center items-center h-screen px-4"
      data-aos="fade-up"
      data-aos-delay="500"
      data-aos-duration="1000"
    >
      <h1 className="font-bold sm:text-7xl text-5xl mb-6 text-center max-w-3xl">
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
        class="border border-blue-500 text-blue-500 font-bold py-3 px-6 flex items-center gap-2 transition duration-300 ease-in-out hover:bg-blue-700 hover:text-white"
        data-aos="fade-up"
        data-aos-delay="800"
        data-aos-duration="1500"
      >
        <SiLinkedin class="text-xl" />
        <span>View profile</span>
      </a>
    </section>
  );
};

export default Hero;
