import React from "react";
import html from "../Images/4781249 copy.webp";
import css from "../Images/919826 copy.png";
import java from "../Images/Javascript_badge copy.svg.png";
import git from "../Images/25231.png";

export default function Skills() {
    return (
        <section id="skills">
            <h2>Hard Skills</h2>
            <div className="skills">
                <ul className="set-1">
                    <li className="list">HTML-5</li>
                    <li className="list">CSS</li>
                    <li className="list">JavaScript</li>
                    <li className="list">JSX</li>
                    <li className="list">React.js</li>
                    <li className="list">JSON</li>
                </ul>
                <ul className="set-2">
                    <li className="list">Responsive Design</li>
                    <li className="list">Node.js</li>
                    <li className="list">Testing & Debugging</li>
                    <li className="list">Wireframing</li>
                    <li className="list">GitHub</li>
                    <li className="list">GitBash</li>
                </ul>
            </div>
            <figure className="logos">
                <img className="logo" src={html} />
                <img className="logo" src={css} />
                <img className="logo" src={java} />
                <img className="logo" src={git} />
            </figure>
        </section>
    )
}