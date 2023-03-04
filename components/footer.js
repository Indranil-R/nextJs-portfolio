import React from "react";
import { Si1Password, SiDiscord, SiFacebook, SiGithub, SiGmail, SiInstagram, SiLinkedin, SiTwitter } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6 w-screen flex justify-between items-center px-4">
      <p className="text-gray-700">© 2023 Indranil Roy. <span>All rights reserved.</span></p>
      <div className="flex items-center text-gray-700 text-2xl">
        <a href="#" className="mr-4 hover:text-gray-900"><SiLinkedin /></a>
        <a href="#" className="mr-4 hover:text-gray-900"><Si1Password /></a>
        <a href="#" className="mr-4 hover:text-gray-900"><SiGmail /></a>
        <a href="#" className="mr-4 hover:text-gray-900"><SiGithub /></a>
      </div>
    </footer>
  );
};

export default Footer;
