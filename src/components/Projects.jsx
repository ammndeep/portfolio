import React from "react";
import nikeImg from "../images/nike.png";
import movieImg from "../images/movie.png";
import notesImg from "../images/notes.png";
import passImg from "../images/password.png";
import textspeechImg from "../images/textspeech.png";
import calculatorImg from "../images/calculator.png";
import clockImg from "../images/clock.png";

const Projects = () => {
  return (
    <>
      <div className="h-fit px-10 py-10">
        <div className="flex flex-col">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600">
            Projects
          </h1>
          <p className="md:w-[530px] bg-yellow-200 px-4 py-4 rounded-xl text-gray-800 shadow-xl shadow-gray-300 my-5">
            "Turning Ideas into Reality: Where Innovation Meets Execution."
          </p>
        </div>

        <div className="flex flex-col md:flex md:flex-row md:gap-10 md:flex-wrap">

          <div className="md:w-[350px] rounded-xl shadow-xl shadow-gray-400 mb-5">
            <img src={nikeImg} alt="img" className="rounded-lg"/>
            <h2 className="text-xl font-semibold text-center px-3 mt-2">Nike Store Clone</h2>
            <div className="my-3 flex flew-row justify-center gap-4">
            <a
            
            href=" https://nike-store-sage.vercel.app/"
            className="bg-green-300 px-2 py-1 rounded-lg text-sm hover:bg-green-500">Live 📈</a> 
            <a 
            href="https://github.com/ammndeep/nike-store"
            className="bg-yellow-200 px-2 py-1 rounded-lg text-sm hover:bg-yellow-500">Source Code 🔗</a>

            </div>
          </div>

          <div className="md:w-[350px] rounded-xl shadow-xl shadow-gray-400 mb-5">
            <img src={movieImg} alt="img" className="rounded-lg"/>
            <h2 className="text-xl font-semibold text-center px-3 mt-2">Movie Web App</h2>
            <div className="my-3 flex flew-row justify-center gap-4">
            <a 
            href="https://movie-self-eta.vercel.app/"
            className="bg-green-300 px-2 py-1 rounded-lg text-sm hover:bg-green-500">Live 📈</a> 
            <a
            href="https://github.com/ammndeep/movie"
             className="bg-yellow-200 px-2 py-1 rounded-lg text-sm hover:bg-yellow-500">Source Code 🔗</a>
            </div>
          </div>

          <div className="md:w-[350px] rounded-xl shadow-xl shadow-gray-400 mb-5">
            <img src={notesImg} alt="img" className="rounded-lg"/>
            <h2 className="text-xl font-semibold text-center px-3 mt-2">Notes App</h2>
            <div className="my-3 flex flew-row justify-center gap-4">
            <a 
            href="https://notes-app-three-sandy.vercel.app/"
            className="bg-green-300 px-2 py-1 rounded-lg text-sm hover:bg-green-500">Live 📈</a> 
            <a 
            href="https://github.com/ammndeep/notes-app"
            className="bg-yellow-200 px-2 py-1 rounded-lg text-sm hover:bg-yellow-500">Source Code 🔗</a>
            </div>
          </div>

          <div className="md:w-[350px] rounded-xl shadow-xl shadow-gray-400 mb-5">
            <img src={passImg} alt="img" className="rounded-lg"/>
            <h2 className="text-xl font-semibold text-center px-3 mt-2">Password Generator App</h2>
            <div className="my-3 flex flew-row justify-center gap-4">
            <a 
            href="https://ammndeep.github.io/password-generator/"
            className="bg-green-300 px-2 py-1 rounded-lg text-sm hover:bg-green-500">Live 📈</a> 
            <a
            href="https://github.com/ammndeep/password-generator" className="bg-yellow-200 px-2 py-1 rounded-lg text-sm hover:bg-yellow-500">Source Code 🔗</a>
            </div>
          </div>

          <div className="md:w-[350px] rounded-xl shadow-xl shadow-gray-400 mb-5">
            <img src={textspeechImg} alt="img" className="rounded-lg"/>
            <h2 className="text-xl font-semibold text-center px-3 mt-2">Text-To-Speech Convertor</h2>
            <div className="my-3 flex flew-row justify-center gap-4">
            <a 
            href=" https://ammndeep.github.io/Text-To-Voice/"
            className="bg-green-300 px-2 py-1 rounded-lg text-sm hover:bg-green-500">Live 📈</a> 
            <a
            href="https://github.com/ammndeep/Text-To-Voice" className="bg-yellow-200 px-2 py-1 rounded-lg text-sm hover:bg-yellow-500">Source Code 🔗</a>
            </div>
          </div>

          <div className="md:w-[350px] rounded-xl shadow-xl shadow-gray-400 mb-5">
            <img src={calculatorImg} alt="img" className="rounded-lg"/>
            <h2 className="text-xl font-semibold text-center px-3 mt-2">Calculator</h2>
            <div className="my-3 flex flew-row justify-center gap-4">
            <a 
            href="https://ammndeep.github.io/calculator/"
            className="bg-green-300 px-2 py-1 rounded-lg text-sm hover:bg-green-500">Live 📈</a> 
            <a
            href="https://github.com/ammndeep/calculator" className="bg-yellow-200 px-2 py-1 rounded-lg text-sm hover:bg-yellow-500">Source Code 🔗</a>
            </div>
          </div>

          <div className="md:w-[350px] rounded-xl shadow-xl shadow-gray-400 mb-5">
            <img src={clockImg} alt="img" className="rounded-lg  shadow"/>
            <h2 className="text-xl font-semibold text-center px-3 mt-2">Clock App</h2>
            <div className="my-3 flex flew-row justify-center gap-4">
            <a 
            href="https://ammndeep.github.io/analog-clock/"
            className="bg-green-300 px-2 py-1 rounded-lg text-sm hover:bg-green-500">Live 📈</a> 
            <a href="https://github.com/ammndeep/analog-clock" className="bg-yellow-200 px-2 py-1 rounded-lg text-sm hover:bg-yellow-500">Source Code 🔗</a>
            </div>
          </div>
          

        </div>
      </div>
    </>
  );
};

export default Projects;
