import './App.css';
import React from "react";
import About from "./Components/About";
import Contact from "./Components/Contact";
import { Navbar } from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Image from "./Components/Image";


function App() {
  return (
    <main>
      <Image />
      <About />
      <Navbar />
      <Contact />
      <Projects />
      <Skills />
    </main>
  );
}

export default App;



