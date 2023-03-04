import { SiLinkedin } from "react-icons/si";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto px-4 lg:px-8 lg:py-24 py-12">
      <img
        src="profile.png"
        alt="Profile"
        className="w-full  animate-bounce"
        style={{ animationDuration: "10s" }}
      />

      <div className="text-center md:text-left">
        <h1 className="font-bold text-5xl sm:text-6xl mb-6 max-w-3xl">
          <span className="text-blue-600 font-extrabold sm:font-bold">
            Indranil Roy
          </span>
          , Software Engineer
        </h1>
        <p className="font-light text-2xl max-w-3xl mb-12">
          As a <span className="font-medium">passionate software engineer</span>
          , I am committed to continuous learning and seeking new challenges to
          advance my personal and professional growth. I strive to enhance my
          skills and knowledge to deliver innovative solutions and achieve
          outstanding outcomes.
        </p>
        <div className="flex justify-center lg:justify-start">
          <a
            href="https://www.linkedin.com/in/indranil-r/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-3 py-2 text-lg font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <SiLinkedin className="h-5 w-5 mr-2" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
