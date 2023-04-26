import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
    const [scrollAtZero, setScrollAtZero] = useState(true)
    const lastScroll = useRef(0)

    useEffect(() => {
        const handleScroll = () => {
            const nav = document.getElementById("nav")
            if(lastScroll.current - window.scrollY > 0) {
                nav.classList.remove("-translate-y-full")
            } else {
                nav.classList.add("-translate-y-full")
            }

            setScrollAtZero(window.scrollY === 0)
            lastScroll.current = window.scrollY
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    function downloadResume() {

    }

    return <nav id="nav" className={`flex sticky z-50 ${scrollAtZero ? "bg-transparent" : "bg-slate-800"} top-0 p-6 md:px-16 lg:mb-16 lg:px-[15%] xl:px-[20%] transition-all duration-1000`}>
    <div className="md:hidden flex justify-between w-full dropdown dropdown-end">
        <Link className="self-center" to="/">
            <img src="../assets/images/logo96.webp" width="32" height="32" alt="Personal logo"/>
        </Link>
        <button tabIndex={0} aria-label="Menu" className="bg-primary m-2 p-1.5 rounded-md">
            {/*Burger Menu*/}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.75} stroke="currentColor" className="w-5 h-5 text-slate-800">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.25h16.5M3.75 13h16.5m-16.5 6.25h16.5" />
            </svg>
        </button>
        <ul tabIndex={0} className="menu dropdown-content p-2 shadow bg-slate-800 rounded-box w-[80vw] mt-12">
            <li><a href="#about">About</a></li> 
            <li><a href="#skills">Skills</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="./assets/resume.pdf" target="_blank">Resume</a></li>
        </ul>
      </div>
      <div className="-md:hidden flex justify-between items-center w-full">
        <Link className="cursor-pointer" to="/">
            <img src="../assets/images/logo.webp" width="40" height="40" alt="Personal logo"/>
        </Link>
        <ul className="text-sm flex items-center uppercase font-medium gap-4">
            <li><a href="#about">About</a></li> 
            <li><a href="#skills">Skills</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="./assets/resume.pdf" target="_blank" className="btn btn-primary btn-outline border-2 text-sm font-bold min-h-0 h-8 rounded-md">Resume</a></li>
        </ul>
      </div>
    </nav>
}

export default NavBar