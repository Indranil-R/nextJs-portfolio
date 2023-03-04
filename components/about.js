import Image from "next/image";

const About = () => {
  return (
    <>
      <hr class="h-2 mx-8  bg-gray-200 border-0 dark:bg-gray-700 my-8" />
      <h1
        id="about"
        className="text-3xl font-extrabold text-center text-gray-900 uppercase tracking-wider"
      >
        About Me
      </h1>
      <div
        className="py-8 flex flex-wrap items-center justify-center"
        data-aos="fade-up"
      >
        <div className="w-full md:w-1/3 px-4  items-center justify-center flex">
          <img
            src="/about.jpg"
            alt="Company Logo"
            className="rounded-lg shadow-md border border-gray-300 w-80"
          />
        </div>
        <div className="w-full md:w-2/3 p-4">
          <p className="text-lg leading-relaxed  font-sans">
            Indranil Roy is an experienced software engineer who has been
            working in the information technology field for the last 18 months.
            He has extensive knowledge and skills in setting up and maintaining
            Teamcenter servers, a popular product lifecycle management software,
            and developing high-quality websites using Next JS. His expertise
            and dedication to his work make him an asset to any organization.
            <br />
            Indranil holds a Techbee certification, which is evidence of his
            commitment to staying up-to-date with the latest industry trends and
            technologies. He is currently pursuing a Bachelor's degree in
            Computer Application from Amity University, which further enhances
            his knowledge and skills in the field. He is a dedicated learner and
            continually seeks opportunities to improve his skills.
            <br />
            As a software engineer, Indranil is committed to delivering
            outstanding results and providing the highest level of service to
            his clients. He is a strong communicator and collaborator and can
            work effectively in teams or individually. Indranil is known for his
            attention to detail, creativity, and innovative approach to
            problem-solving, ensuring that all projects are completed on time,
            within budget, and to the highest quality standards.
            <br />
            Indranil's dedication and professionalism make him an excellent
            addition to any organization looking for a software engineer with
            his skills and expertise. He has a proven track record of delivering
            high-quality work and meeting client expectations. With his passion
            for technology and commitment to excellence, Indranil is a valuable
            asset to the software development industry.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
