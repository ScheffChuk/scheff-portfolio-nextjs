import React from "react";
import { BsGithub } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="mb-10 flex flex-row items-center justify-center gap-2 px-4 text-center text-gray-500">
      <small className="block text-xs">
        © {new Date().getFullYear()} Scheff.
      </small>
      <a
        href="https://github.com/scheffchuk"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsGithub />
      </a>
    </footer>
  );
}
