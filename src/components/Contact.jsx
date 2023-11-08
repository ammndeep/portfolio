import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import profile from "../assets/profile2.jpg";
import Resume from "../assets/Resume.pdf";

const Contact = () => {
  const filePath = "Amandeep_singh_Resume.pdf";
  const emailAddress = 'amandeepsinghbti11@gmail.com';
  const phoneNumber = '7652888799';
 
  return (
    <div className="h-fit px-10 py-10">
      <div>
        <h1 className="text-4xl md:text-5xl text-blue-600 font-bold">
          Contact Me
        </h1>
        {/* <p className="bg-red-200 px-3 py-3 rounded-xl shadow-xl shadow-gray-300 my-5">
          "Turning Ideas into Reality, Crafting Your Success Story with
          Expertise and Dedication."
        </p> */}
      </div>

      <div className="flex flex-col md:flex-row gap-10  mt-10 md:mt-0">
        <div className="relative">
          <div className="absolute">
            <img
              src={profile}
              alt="profile"
              className="rounded-full  mx-20 md:mx-[120px] md
            :w-40 w-36 shadow-xl z-10 shadow-gray-400 md:mt-5"
            />
          </div>
        </div>

        <div className="w-[320px] h-fit bg-white border shadow-xl shadow-gray-300 mt-10 md:mt-24 rounded-xl">
          <div className="mt-20 flex flex-col items-center">
            <h1 className="text-2xl font-bold">Amandeep Singh</h1>
            <p className="text-gray-700 text-[16px]">Web Developer</p>
            <div className="flex flex-row gap-2 items-center mt-2">
              <a href="https://www.linkedin.com/in/amandeep-singh-801a09264/">
                <AiFillLinkedin size={24} className="text-blue-600" />
              </a>

              <a href={`mailto:${emailAddress}`}>
                <MdEmail size={25} className="text-white-600" />
              </a>
              <a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer">
                <BsWhatsapp size={21} className="text-green-600" />
              </a>
              <a href="https://github.com/ammndeep">
              <AiFillGithub size={24} className="text-black" />
              </a>
            </div>
          </div>

          <div className="bg-slate-200 p-2 m-2 rounded-xl flex flex-col gap-2">
            <div className="flex gap-2">
              <BsFillTelephoneFill size={20} />
              <span>+91 7652888799</span>
            </div>
            <div className="flex gap-2">
              <MdEmail size={20} />
              <span>amandeepsinghbti11@gmail.com</span>
            </div>
            <div className="flex gap-2">
              <FaLocationDot size={20} />
              <span>Ludhiana, Punjab, India</span>
            </div>
          </div>

          <div className="flex items-center justify-center my-4">
            <a
              href={Resume}
              download={filePath}
              className="bg-blue-600 text-white px-2 py-1 rounded-lg hover:bg-blue-800"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="my-[100px] gap-4 bg-white rounded-xl border shadow-xl shadow-gray-300 p-4  mt-10">
          <h1 className="text-2xl font-bold text-blue-600 mb-2">Summary</h1>
          <p className="text-sm text-gray-700 mb-4 bg-yellow-200 p-4 rounded-xl">
            "In the digital landscape, I am your catalyst for transformation.
            With a passion for web development and a commitment to excellence, I
            bring your vision to life. My experience, innovation, and dedication
            are your assets in creating cutting-edge, user-friendly websites.
            Let's collaborate to shape your success in the digital realm."
            <br />
            My passion for web development remains at the core of everything I
            do.
          </p>
          <span className="my-4 text-blue-600 text-2xl font-bold">
            What I Do
          </span>

          <div className="flex md:gap-3 flex-col md:flex-row">
            <div className="md:m-10 m-4 bg-green-200 rounded-xl shadow-xl shadow-gray-300 p-4">
              <h1 className="text-xl font-bold text-blue-600 mb-2">
                UI/UX Design
              </h1>
              <p className="text-sm text-gray-700 mb-4">
                I do user-centric UI/UX design, ensuring intuitive interfaces,
                accessibility, and seamless navigation to enhance digital
                experiences for all.
              </p>
            </div>

            <div className="md:m-10 m-4 bg-red-200 rounded-xl shadow-xl shadow-gray-300 p-4">
              <h1 className="text-xl font-bold text-blue-600 mb-2">
                Website Development
              </h1>
              <p className="text-sm text-gray-700 mb-4">
                I specialize in website development, crafting dynamic online
                solutions that engage users, drive results, and deliver
                exceptional digital experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
