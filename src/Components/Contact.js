import React from "react";
import icloud from "../Images/icloud-cloud-backup-visit-backupreview-outlook-apple-storage-site-win10-plugin-fix-update-logo-png-transparent-background-1.png";
import linkedin from "../Images/LinkedIn_logo_initials.png";
import github from "../Images/25231.png";
import cv from "../Images/Image 21-07-2024 at 21.27 copy.jpg";

export default function Contact() {
    return (
        <section id="contact">
            <div>
                <a href="https://docs.google.com/document/d/1VOMna2PMlIscY1KRx-OtXum2C8g6GYTR/edit?usp=sharing&ouid=101851668651426806402&rtpof=true&sd=true" target="_blank" download="Shauna Leigh Bell CV.docx"
                    className="cv"><img src={cv} alt="cv download" className="cv"/></a>
            </div>
            <div className="box">
                <h2>Email Me</h2>
                <a href="mailto:shaunaleighbell@icloud.com" target="_blank"><img src={icloud} alt="icloud image" className="icloud" /></a>
            </div>
            <div className="box">
                <h2>LinkendIn Profile</h2>
                <a href="https://www.linkedin.com/in/shauna-leigh-bell-ba8490276/" target="_blank"><img src={linkedin} alt="linkedin logo" className="linkedin" /></a>
            </div>
            <div className="box">
                <h2>GitHub Page</h2>
                <a href="https://github.com/ShaunaLeighBell" target="_blank"><img src={github} alt="github logo" className="github" /></a>
            </div>
        </section>
    );
}