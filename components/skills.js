import React from "react";
import {
  SiGithub,
  SiHtml5,
  SiJava,
  SiJavascript,
  SiLinux,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiStrapi,
} from "react-icons/si";

const skillCards = [
  {
    name: "JavaScript",
    description: "Proficient in vanilla JS, React, and Node.js.",
    colour: "text-blue-500",
    icon: <SiJavascript className="text-4xl mx-auto text-blue-500" />,
  },
  {
    name: "HTML/CSS",
    description: "Expertise in building responsive and accessible web pages.",
    colour: "text-orange-500",
    icon: <SiHtml5 className="text-4xl mb-2 mx-auto text-orange-500" />,
  },
  {
    name: "Next",
    description:
      "Experience in building single-page applications and reusable UI components.",
    colour: "",
    icon: <SiNextdotjs className="text-4xl mb-2 mx-auto" />,
  },
  {
    name: "Node.js",
    description:
      "Familiar with building server-side applications and RESTful APIs.",
    colour: "text-green-600",
    icon: <SiNodedotjs className=" text-green-600 text-4xl mb-2  mx-auto" />,
  },
  {
    name: "Git",
    description:
      "Experience with version control, branching, merging, and collaboration.",
    colour: "",
    icon: <SiGithub className=" text-4xl mb-4  mx-auto" />,
  },
  {
    name: "Linux/Unix",
    description:
      "Familiar with command-line interface, file systems, and package management.",
    colour: "text-yellow-400",
    icon: <SiLinux className="text-4xl mb-4 text-yellow-400 mx-auto" />,
  },
  {
    name: "Java",
    description:
      "Experience in building enterprise-level applications using Java and J2EE technologies.",
    colour: "text-red-700",
    icon: <SiJava className="text-4xl text-red-500 mb-4 mx-auto" />,
  },
  {
    name: "SQL",
    description:
      "Expertise in writing complex queries and managing relational databases.",
    colour: "text-cyan-600",
    icon: <SiMysql className="text-4xl text-cyan-600 mb-2 mx-auto" />,
  },
  {
    name: "Strapi",
    description:
      "Experience in using Strapi as a headless CMS to create APIs for web and mobile applications.",
    colour: "text-indigo-600",
    icon: <SiStrapi className="text-4xl mb-2 mx-auto text-indigo-600" />,
  },
];

const Skills = () => {
  return (
    <>
      <hr className="h-2 mx-8  bg-gray-200 border-0 dark:bg-gray-700 my-8" />
      <div className="container mx-auto px-16" id="skills" data-aos="fade-up">
        <h2 className="text-3xl font-extrabold mb-4 text-center text-gray-900 uppercase tracking-wider">
          Technical Skills & Expertise
        </h2>
        <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto">
          Below are some of the technical skills I possess and use to develop
          high-quality, efficient, and scalable software applications.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
          {skillCards.map((skill, index) => (
            <div
              key={index}
              className="card text-center bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
              data-aos="zoom-in"
            >
              <div className="p-6">
                {skill.icon}
                <h3 className={`text-lg font-bold my-2 ${skill.colour}`}>
                  {skill.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
