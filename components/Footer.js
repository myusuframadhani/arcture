import React from "react";

const Footer = () => {
  return (
    <footer className="flex items-center justify-around bg-gray-800 h-14 w-full ml-8">
      <span className="text-sm text-gray-500 sm:text-center">
        © 2022{" "}
        <a
          href="https://flowbite.com"
          className="hover:underline"
          target="_blank"
        >
          ArcTure™
        </a>
        . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center">
        <li>
          <a href="#" className="mr-4 text-sm text-gray-400 hover:underline">
            About
          </a>
        </li>
        <li>
          <a href="#" className="mr-4 text-sm text-gray-400 hover:underline">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="#" className="mr-4 text-sm text-gray-400 hover:underline">
            Licensing
          </a>
        </li>
        <li>
          <a href="#" className="text-sm text-gray-400 hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
