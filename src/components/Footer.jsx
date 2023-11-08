import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="h-fit">
      <footer className="bg-gray-700 text-white md:p-5 p-2 py-4">
        <div className="flex flex-row md:justify-center gap-3 md:gap-44 overflow-hidden">
          <div className="flex flex-col">
            <h1 className="md:text-lg text-sm font-semibold mb-2 cursor-pointer">
              PROJECTS
            </h1>
            <span className="text-xs md:text-sm mb-2">Movie App</span>
            <span className="text-xs md:text-sm mb-2">Nike Store</span>
            <span className="text-xs md:text-sm mb-2">Notes App</span>
            <span className="text-xs md:text-sm mb-2">TextUtils App</span>
          </div>

          <div className="flex flex-col ">
            <h1 className="md:text-lg text-sm font-semibold mb-2 cursor-pointer">LINKS</h1>
            <span className="text-xs md:text-sm mb-2">LinkedIn</span>
            <span className="text-xs md:text-sm mb-2">GitHub</span>
            <span className="text-xs md:text-sm mb-2">Whatsapp</span>
            <span className="text-xs md:text-sm mb-2">Email</span>
          </div>

          <div className="flex flex-col">
            <h1 className="md:text-lg text-sm font-semibold mb-2 cursor-pointer">
              CONTACT
            </h1>

           <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <FaLocationDot />
              <p className="text-xs md:text-sm">Ludhiana, Punjab, India</p>
            </div>
            <div className="flex items-center gap-2">
              <MdEmail />
              <p className="text-xs md:text-sm">
                amandeepsinghbti11@gmail.com
              </p>
            </div>
            <div className="flex items-center gap-2">
              <BsFillTelephoneFill />
              <p className="text-xs md:text-sm">+91 76528-88799</p>
            </div>
            <div className="flex items-center gap-2">
              <AiFillLinkedin />
              <p className="text-xs md:text-sm">@amandeep-singh1010</p>
            </div>
          </div>
          </div>
        </div>
        <p className="text-center mt-5 text-sm">
          copyright <sup>&#169;</sup> All Reserved Rights <span>@amandeep</span>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
