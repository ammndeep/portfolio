import React, { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [ menu, setMenu ] = useState(false);

  const showIcons = () => {
    setMenu(!menu);
  };

  return (
    <div className="w-full">
      <div className="flex flex-row justify-between p-3 md:px-32 shadow-lg">
        <div>
          <Link
            to=""
            className="font-bold text-2xl p-1 cursor-pointer text-blue-600 hover:text-blue-400"
          >
            Portfolio
          </Link>
        </div>

        <nav className="hidden md:flex gap-5 items-center p-1">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="text-1xl text-semibold transition-all  hover:text-blue-600 cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="education"
            spy={true}
            smooth={true}
            duration={500}
            className="text-1xl text-semibold transition-all  hover:text-blue-600 cursor-pointer"
          >
            Education
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            className="text-1xl text-semibold transition-all  hover:text-blue-600 cursor-pointer"
          >
            Projects
          </Link>
          <Link
            to="skill"
            spy={true}
            smooth={true}
            duration={500}
            className="text-1xl text-semibold transition-all  hover:text-blue-600 cursor-pointer"
          >
            Skills
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className="text-1xl text-semibold transition-all  hover:text-blue-600 cursor-pointer"
          >
            Contact
          </Link>
        </nav>

        <div className="flex md:hidden" onClick={showIcons}>
          <div className="p-2">
            <AiOutlineMenu size={22} />
          </div>
        </div>
      </div>

      <div
        className={`${menu ? "translate-x-0 " : "-translate-x-full"} 
                md:hidden flex flex-col bg-white absolute left-0 top-20 font-medium text-1xl text-center pb-4 w-screen h-fit gap-5 transition-transform duration-300`}
      >
        <Link
          to="home"
          spy={true} transition-all 
          smooth={true}
          duration={500}
          className="text-1xl text-semibold transition-all hover:text-blue-600 cursor-pointer"
        >
          Home
        </Link>
        <Link
          to="education"
          spy={true}
          smooth={true}
          duration={500}
          className="text-1xl text-semibold transition-all hover:text-blue-600 cursor-pointer"
        >
          Education
        </Link>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          duration={500}
          className="text-1xl text-semibold transition-all hover:text-blue-600 cursor-pointer"
        >
          Projects
        </Link>
        <Link
          to="skill"
          spy={true}
          smooth={true}
          duration={500}
          className="text-1xl text-semibold transition-all hover:text-blue-600 cursor-pointer"
        >
          Skills
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          className="text-1xl text-semibold transition-all hover:text-blue-600 cursor-pointer"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
