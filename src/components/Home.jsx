import React from "react";
import Img from "../assets/Profile.jpg";
import { Link } from "react-scroll";
import Button from "../layouts/Button";
import Resume from '../assets/Resume.pdf';


const Home = () => {

  const filePath = 'Amandeep_Singh_Resume.pdf';

  return (
    <div className="h-fit  mb-20 my-10 mx-10 flex flex-col md:flex md:flex-row md:justify-between md:mx-28  md:gap-16">
      <div className="md:my-10">
        <h1 className="md:text-5xl text-4xl font-bold">
          <span className="md:text-5xl text-4xl font-bold text-blue-600">
            Hi
          </span>
          , I'm Amandeep Singh
        </h1>
        <span className="text-2xl text-blue-600">Web Developer</span>
        <p className="mt-3 text-slate-500 pb-3">
          As a dedicated web developer, I'm driven to craft seamless and
          visually captivating digital experiences.I am excited to continuous
          learning and growth with in the ever-evolving field of web
          development.
        </p>

        <div className=" flex flex-row gap-5 md:flex md:flex-row md:gap-5 mt-5">
          <a
            href={Resume}
            download={filePath}
            className="bg-blue-600 px-3 py-2 rounded-xl font-medium text-white hover:bg-blue-500 mb-3">
            Download CV
          </a>

          <Link to="contact" spy={true} smooth={true} duration={500}>
            <Button title="Contact" />
          </Link>
        </div>
      </div>

      <div className="mt-4">
        <img
          src={Img}
          alt="Image"
          className="rounded-2xl shadow-xl shadow-gray-600"
        />
      </div>
    </div>
  );
};

export default Home;
