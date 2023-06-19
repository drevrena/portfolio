import React from "react";
import SectionTitle from "../Cards/SectionTitle";

function About() {
    return <section id="about" className="relative flex flex-col items-center lg:items-start lg:pt16 lg:px-8 py-32 container">
        <div className="mx-auto lg:absolute lg:rotate-90 lg:-right-24 lg:top-32">
            <SectionTitle title="About Me"/>
        </div>
        <div className="lg:flex lg:gap-2 m-auto mb-8">
            <img className="lg:h-64 w-64 mx-auto my-4 lg:order-1 rounded-full" src="./assets/images/profile-picture.webp" alt="Profile picture" />
            <p className="text-center font-medium m-auto mr-8 py-12 lg:border-y-[1px] border-slate-500">
                Hello, I'm Davide, a passionate Fullstack Developer. I mainly develop web applications that use React.js and Spring.
            </p>
        </div>
        <p> 
            My favourite programming languages are JavaScript and Java, I love 
            to challenge myself with projects that allows me to sharpen my skills everyday.
            I have graduated with a bachelor's degree in Computer Science Engineering 
            from Università degli studi di Bergamo, Italy in 2022.
            I am open for any kind of job opportunity that suits my interests.</p>
        <div className="flex self-start mt-8 mb-8 gap-4">
            <a href="./assets/resume.pdf" target="_blank" className="btn btn-secondary rounded-md">Get Resume</a>
            <a href="#skills"className="btn btn-primary btn-outline border-2 rounded-md">My Skills</a>
        </div>
    </section>

}

export default About