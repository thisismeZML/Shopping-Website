import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="container text-center text-white mt-auto">
      <div className=" mx-auto border-b">
        <div className="mb-6 flex gap-10 w-full">
          <FaFacebookF className="text-black" />
          <FaInstagram className="text-black" />
          <FaLinkedinIn className="text-black" />
          <FaTwitter className="text-black" />
          <FaGithub className="text-black" />
        </div>
      </div>

      {/* Copyright section */}
      <div className="pb-12 pt-6 text-black flex gap-3 text-sm">
        © 2024 Copyright .
        <a className="text-whitehite " href="https://tw-elements.com/">
          Developed By Zin Min Latt
        </a>
      </div>
    </footer>
  );
};

export default Footer;
