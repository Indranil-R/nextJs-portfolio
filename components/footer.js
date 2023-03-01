import React from "react";
import {
  Si1Password,
  SiDiscord,
  SiFacebook,
  SiGithub,
  SiGmail,
  SiInstagram,
  SiLinkedin,
  SiTwitter,
} from "react-icons/si";
const Footer = () => {
  return (
    <footer class="bg-gray-100 py-6">
      <div class="container mx-auto flex justify-between items-center px-4">
        <p class="text-gray-700">
          © 2023 Indranil Roy. <span>All rights reserved.</span>
        </p>
        <div class="flex items-center text-gray-700 text-2xl">
          <a href="#" class="mr-4 hover:text-gray-900">
            <SiLinkedin />
          </a>
          <a href="#" class="mr-4 hover:text-gray-900">
            <Si1Password />
          </a>
          <a href="#" class="mr-4 hover:text-gray-900">
            <SiGmail />
          </a>
          <a href="#" class="mr-4 hover:text-gray-900">
            <SiGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
