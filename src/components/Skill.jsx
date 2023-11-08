import React from "react";
import { MdVerified } from "react-icons/md";

import html from "../logo/html.png";
import css from "../logo/css.png";
import js from "../logo/js.png";
import react from "../logo/react.png";
import redux from "../logo/redux.png";
import router from "../logo/router.png";
import typescript from "../logo/typescript.png";
import bootstrap from "../logo/bootstrap.png";
import tailwindcss from "../logo/tailwindcss.png";
import github from "../logo/github.png";
import git from "../logo/git.png";
import python from "../logo/python.png";
import mongodb from "../logo/mongodb.png";
import firebase from "../logo/firebase.png";
import mysql from "../logo/mysql.png";
import nodejs from "../logo/nodejs.png";
import c from "../logo/c.png";
import cplus from "../logo/cplus.png";

const Skill = () => {
  const iconStyles= "text-blue-600 text-xl";

  const skills = [
    {
      name: "HTMl 5",
      level: "Advanced ✅",
      logo: html,
    },
    {
      name: "CSS 3",
      level: "Advanced ✅",
      logo: css,
    },
    {
      name: "Java Script",
      level: "Advanced ✅",
      logo: js,
    },
    {
      name: "React",
      level: "Advanced ✅",
      logo: react,
    },
    {
      name: "Redux",
      level: "Advanced ✅",
      logo: redux,
    },
    {
      name: "React-Router",
      level: "Advanced ✅",
      logo: router,
    },
    {
      name: "Type Script",
      level: "Advanced ✅",
      logo: typescript,
    },
    {
      name: "BootStrap",
      level: "Advanced ✅",
      logo: bootstrap,
    },
    {
      name: "TailwindCSS",
      level: "Advanced ✅",
      logo: tailwindcss,
    },
    {
      name: "GitHub",
      level: "Medium",
      logo: github,
    },
    {
      name: "Git",
      level: "Medium",
      logo: git,
    },
    {
      name: "Python",
      level: "Medium",
      logo: python,
    },
    {
      name: "MongoDB",
      level: "Medium",
      logo: mongodb,
    },
    {
      name: "Firebase",
      level: "Medium",
      logo: firebase,
    },
    {
      name: "My SQL",
      level: "Medium",
      logo: mysql,
    },
    {
      name: "Node Js",
      level: "Medium",
      logo: nodejs,
    },
    {
      name: "C",
      level: "Basic",
      logo: c,
    },
    {
      name: "C++",
      level: "Basic",
      logo: cplus,
    },
  ];

  return (
    <div className="h-fit px-10 py-10">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600">
          <span className="text-black">My</span> Skills
        </h1>
        <p className="px-4 py-4 bg-green-200 my-10 rounded-xl shadow-xl shadow-gray-300 text-gray-800 md:w-[900px]">
          "Elevate your potential with Skills: Unleashing Abilities, Igniting
          Passions, and Transforming Dreams into{" "}
          <span className="text-blue-500">Realities</span>."
        </p>
      </div>

      <div className="flex flex-row flex-wrap gap-4 justify-center">
        {skills.map((data, index) => (
          <div
            className="w-fit shadow-xl rounded-xl text-center border px-2 py-2"
            key={index}
          >
            <img src={data.logo} alt="" className=" w-28 md:w-32 px-2 py-3" />
            <h1 className="text-sm font-semibold flex flex-row gap-2 justify-center">
              {data.name} <span className=""><MdVerified className={iconStyles}/></span>
            </h1>
            <p className="text-sm text-gray-600 font-semibold">{data.level}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
