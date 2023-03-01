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

const Skills = () => {
  return (
    <section
      id="skills"
      class=" py-10"
      data-aos="fade-right"
      data-aos-duration="1000"
    >
      <div class="container mx-auto px-16">
        <h2 class="text-3xl font-extrabold mb-4 text-center text-gray-900 uppercase tracking-wider">
          Technical Skills & Expertise
        </h2>
        <p class="text-gray-500 text-center mb-10 max-w-xl mx-auto">
          Below are some of the technical skills I possess and use to develop
          high-quality, efficient, and scalable software applications.
        </p>
        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <div class="card text-center bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out">
            <div class="p-6">
              <SiJavascript class="text-4xl mb-2 text-blue-500 mx-auto" />
              <h3 class="text-lg font-bold mb-2 text-gray-800">JavaScript</h3>
              <p class="text-gray-600 leading-relaxed">
                Proficient in vanilla JS, React, and Node.js.
              </p>
            </div>
          </div>

          <div class="card bg-white shadow-md rounded-lg overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg text-center">
            <div class="p-6">
              <SiHtml5 class="text-4xl mb-2 mx-auto text-orange-500" />
              <h3 class="text-lg font-bold mb-2 text-orange-500">HTML/CSS</h3>
              <p class="text-gray-600 leading-relaxed">
                Expertise in building responsive and accessible web pages.
              </p>
            </div>
          </div>

          <div class="card bg-white  shadow-md rounded-lg overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
            <div class="p-6">
              <SiNextdotjs class="text-4xl mb-2 mx-auto" />
              <h3 class="text-lg font-bold mb-2">Next</h3>
              <p class="text-gray-600 leading-relaxed">
                Experience in building single-page applications and reusable UI
                components.
              </p>
            </div>
          </div>
          <div class="card bg-white shadow-md rounded-lg overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
            <div class="p-6">
              <SiNodedotjs class=" text-green-600 text-4xl mb-2  mx-auto" />
              <h3 class="text-lg text-green-600 font-bold mb-2">Node.js</h3>
              <p class="text-gray-600 leading-relaxed">
                Familiar with building server-side applications and RESTful
                APIs.
              </p>
            </div>
          </div>
          <div class="card shadow-md rounded-lg overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
            <div class="p-6">
              <SiGithub class=" text-4xl mb-4  mx-auto" />
              <h3 class="text-lg font-bold mb-2">Git</h3>
              <p class="text-gray-600 leading-relaxed">
                Experience with version control, branching, merging, and
                collaboration.
              </p>
            </div>
          </div>
          <div class="card shadow-md rounded-lg overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
            <div class="p-6">
              <SiLinux class="text-4xl mb-4  mx-auto" />
              <h3 class="text-lg font-bold mb-2">Linux/Unix</h3>
              <p class="text-gray-600 leading-relaxed">
                Familiar with command-line interface, file systems, and package
                management.
              </p>
            </div>
          </div>

          <div class="card  shadow-md rounded-lg overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
            <div class="p-6">
              <SiJava class="text-4xl mb-4 mx-auto" />
              <h3 class="text-lg font-bold mb-2">Java</h3>
              <p class="text-gray-600 leading-relaxed">
                Experience in building enterprise-level applications using Java
                and J2EE technologies.
              </p>
            </div>
          </div>
          <div class="card bg-white shadow-md rounded-lg overflow-hidden  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
            <div class="p-6">
              <SiMysql class="text-4xl mb-2 mx-auto" />
              <h3 class="text-lg font-bold mb-2">SQL</h3>
              <p class="text-gray-600 leading-relaxed">
                Expertise in writing complex queries and managing relational
                databases.
              </p>
            </div>
          </div>

          <div class="card  shadow-md rounded-lg overflow-hidden  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
            <div class="p-6">
              <SiStrapi class="text-4xl mb-2 mx-auto text-teal-600" />
              <h3 class="text-lg font-bold mb-2 text-teal-600">Strapi</h3>
              <p class="text-gray-600 leading-relaxed">
                Experience in using Strapi as a headless CMS to create APIs for
                web and mobile applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
