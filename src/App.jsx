import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skill from "./components/Skill";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div id="home">
          <Home />
        </div>
        <div id="education">
          <Education />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="skill">
          <Skill />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <div>
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default App;
