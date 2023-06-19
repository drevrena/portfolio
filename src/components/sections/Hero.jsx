import React from "react";
import SectionTitle from "../Cards/SectionTitle";
import useRevealingString from "../../hooks/useRevealingString";

function Hero() {
    const [magicString] = useRevealingString("Davide Revrena")

    return <section className="relative flex flex-col lg:items-start lg:px-8 lg:py-16 py-32 my-36 items-center container">
        <p className="text-secondary font-medium sm:text-lg xl:text-xl">Hello! I am</p>
        <h1 className="text-white text-3xl sm:text-4xl xl:text-6xl font-bold">{magicString}</h1>
        <h2 className="text-secondary text-xl xl:text-2xl font-bold my-4">Fullstack Developer</h2>
        <ul className="lg:flex lg:list-disc lg:list-inside marker:text-primary marker:text-xl gap-8 text-center">
            <li>Software Engineer</li>
            <li>Web Developer</li>
            <li>Programmer</li>
        </ul>
        <div className="flex mt-8 mb-8 gap-4">
            <a href="./assets/resume.pdf" target="_blank" className="btn btn-secondary rounded-md">Get Resume</a>
            <a href="#about" className="btn btn-primary btn-outline border-2 rounded-md">About Me</a>
        </div>
        <div className="mx-auto lg:absolute lg:-rotate-90 lg:flex lg:-left-48 lg:top-48 gap-20">
            <SectionTitle title="Connect With Me"/>
            <ul className="flex justify-center gap-4 mt-4 lg:mt-2">
                <li>
                    <a href="https://github.com/drevrena" target="_blank" aria-label="View Github profile">
                        <svg className="lg:rotate-90 fill-gray-400 hover:fill-white duration-1000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" width="32px" height="32px"><path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z"/></svg>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/davide-revrena/" target="_blank" aria-label="View Linkedin profile">
                        <svg className="lg:rotate-90 fill-gray-400 hover:fill-white duration-1000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 32 32" width="32px" height="32px">    <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"/></svg>
                    </a>
                </li>
            </ul>
        </div>
    </section>

}

export default Hero