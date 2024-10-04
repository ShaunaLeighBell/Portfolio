import React from "react";
import Project6 from "/Users/shaunaleighbell/Documents/Projects/portfolio/src/Videos/Screen Recording 2024-09-06 at 22.13.27-1.mp4";
import Project5 from "/Users/shaunaleighbell/Documents/Projects/portfolio/src/Videos/Screen Recording 2024-09-06 at 22.13.12-1.mp4";
import Project4 from "/Users/shaunaleighbell/Documents/Projects/portfolio/src/Videos/Screen Recording 2024-09-06 at 22.06.07-1.mp4";
import Project3 from "/Users/shaunaleighbell/Documents/Projects/portfolio/src/Videos/Screen Recording 2024-09-06 at 22.10.08-1.mp4";
import Project2 from "/Users/shaunaleighbell/Documents/Projects/portfolio/src/Videos/Screen Recording 2024-09-06 at 21.31.00-1.mp4";
import Project1 from "/Users/shaunaleighbell/Documents/Projects/portfolio/src/Videos/Screen Recording 2024-09-06 at 21.31.37-1.mp4";

export default function Projects() {
    return (
      <section id="projects">
        <div className="video-container">
          <figure>
          <figcaption>
            <h3>Calculator App</h3>
            <p>Designed to perform basic and advanced mathematical calculations</p>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </figcaption>
         <video className="calculator" src={Project1} autoPlay loop muted> Your browser does not support the video tag.</video>
         </figure>
         <figure>
          <figcaption>
            <h3>About Me</h3>
            <p>First attempt at a portfolio and now a little insight project into me and why i chose to change my career path</p>
            <ul>
              <li>HTML</li>
              <li>Css</li>
              <li>JavaScript</li>
              <li>Links to external pages</li>
            </ul>
          </figcaption>
         <video className="aboutme" src={Project2} autoPlay loop muted> Your browser does not support the video tag.</video>
         </figure>
         <figure>
          <figcaption>
            <h3>Jamming</h3>
            <p>A React App designed to create playlists for spotify, add & remove songs to and rename created playlist</p>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React.js</li>
            </ul>
          </figcaption>
         <video className="jamming" src={Project3} autoPlay loop muted> Your browser does not support the video tag.</video>
         </figure>
         <figure>
          <figcaption>
            <h3>SS&A Fencing</h3>
            <p>Created with the desire of my partner wanting to set up his own fencing company </p>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Responsive Design</li>
            </ul>
          </figcaption>
         <video className="ssa" src={Project4} autoPlay loop muted> Your browser does not support the video tag.</video>
         </figure>
         <figure>
          <figcaption>
            <h3>Little Kickers</h3>
            <p>Created from inspiration of my 3 year old daughter who really wants to start playing at a football club</p>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Responsive Design</li>
              <li>Skeuomorphic Button Design</li>
            </ul>
          </figcaption>
         <video className="kickers" src={Project5} autoPlay loop muted> Your browser does not support the video tag.</video>
         </figure>
         <figure>
          <figcaption>
            <h3>Dev Project</h3>
            <p>A little starter project to become familiar with using DevTools with a little paragraph about my journey</p>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Responsive Design</li>
            </ul>
          </figcaption>
         <video className="coding" src={Project6} autoPlay loop muted> Your browser does not support the video tag.</video>
         </figure>
         </div>
      </section>
   )
};
