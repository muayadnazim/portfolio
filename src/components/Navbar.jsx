import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 z-10 flex w-full items-center justify-between 
    border-b border-b-gray-700 bg-black/70 px-16 py-6 text-white backdrop-blur-md md:justify-evenly"
    >
      <a
        href="/home"
        className="bg-gradient-to-r  
      from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80
      text-3xl font-semibold transition-all duration-300 hover:opacity-100
      "
      >
        Muayad
      </a>

      <ul className="hidden md:flex gap-10">
        <a
          href="#home"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li>Home</li>
        </a>
        <a
          href="#tech"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li>Tech</li>
        </a>
        <a
          href="#projects"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li>Projects</li>
        </a>
        <a
          href="#contact"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li>Contact</li>
        </a>
      </ul>

      <ul className="hidden md:flex gap-10">
        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:opacity-100 hover:text-orange-500">
          <a target="_blank" href="https://github.com/muayadnazim">
            <BsGithub />
          </a>
        </li>

        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:opacity-100 hover:text-blue-500">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/muayad-n-645ba2141/"
          >
            <BsLinkedin />
          </a>
        </li>
      </ul>

      {isOpen ? (
        <BiX
          className="block md:hidden text-4xl"
          onClick={() => setIsOpen(!isOpen)}
        />
      ) : (
        <BiMenu
          className="block md:hidden text-4xl"
          onClick={() => setIsOpen(!isOpen)}
        />
      )}

      {isOpen && (
        <div
          className="fixed right-0 top-[84px] flex h-screen 
        w-1/2 flex-col items-start justify-start gap-10
        border-1 border-gray-800 bg-black/90 p-12"
        >
          <ul className="flex flex-col gap-9">
            <a
              href="#home"
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              <li>Home</li>
            </a>
            <a
              href="#tech"
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              <li>Tech</li>
            </a>
            <a
              href="#projects"
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              <li>Projects</li>
            </a>
            <a
              href="#contact"
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              <li>Contact</li>
            </a>
          </ul>
          <ul className="flex flex-wrap gap-10">
            <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:opacity-100 hover:text-orange-500">
              <a target="_blank" href="https://github.com/muayadnazim">
                <BsGithub />
              </a>
            </li>
            <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:opacity-100 hover:text-blue-500">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/muayad-n-645ba2141/"
              >
                <BsLinkedin />
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
