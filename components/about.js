import Image from "next/image";

const About = () => {
  return (
    <section
      className="bg-gray-200 py-16 w-screen flex flex-wrap items-center justify-center"  data-aos="slide-up"
    >
      <div className="w-full md:w-1/3 px-4">
        <img
          src="https://via.placeholder.com/400x300"
          alt="Company Logo"
          className="rounded shadow-md w-full border border-red-400"
        />
      </div>
      <div className="w-full md:w-2/3 px-4">
        <h1 className="text-3xl font-bold text-black mb-4 mt-8 sm:mt-0 uppercase tracking-wider">
          About Me
        </h1>
        <p className="text-lg leading-relaxed text-black">
          Indranil Roy is an experienced Software Engineer in the field of
          Information Technology, with 18 months of hands-on experience. He has
          demonstrated skills in setting up and maintaining Teamcenter Servers,
          and in developing high-quality websites using Next JS.
          <br />
          Indranil holds a Techbee certification, demonstrating his dedication
          to staying up-to-date with the latest industry trends and
          technologies. He is currently pursuing a Bachelor&apos;s degree in
          Computer Application from Amity University, further enhancing his
          knowledge and skills in the field.
          <br />
          As a Software Engineer, Indranil is committed to delivering
          outstanding results and providing the highest level of service to
          clients. He is a strong communicator and collaborator, with the
          ability to work effectively in teams or individually. Indranil is
          known for his attention to detail, creativity, and innovative approach
          to problem-solving, ensuring that all projects are completed on time,
          within budget, and to the highest quality standards.
        </p>
      </div>
    </section>
  );
};

export default About;
