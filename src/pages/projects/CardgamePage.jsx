import React from "react";
import { Link } from "react-router-dom";

function CardgamePage() {

    return <div className="bg-slate-900 w-full min-h-screen">
        <div className="flex flex-col py-8 container">
            <nav>
                <div className="flex flex-col sm:flex-row gap-4 my-4 justify-between items-center">
                    <div className="flex gap-4 items-center">
                        <img src="../assets/images/logo96.webp" alt="Personal logo" width="48"/>
                        <h1 className="text-2xl font-semibold">Card Game</h1>
                    </div>
                    <div className="flex gap-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                        </svg>
                        <Link className="text-sm uppercase font-medium" to="/">Back to Home </Link>
                    </div>
                </div>
            </nav>
            <div className="lg:bg-slate-800 lg:rounded-lg lg:p-8 lg:my-8 lg:flex items-center justify-between gap-16 mt-12">
                <img className="lg:w-1/2 mb-4 sm:mb-0" src="../assets/images/cardgame.webp" alt="Project Homepage mockup"/>
                <div>
                    <h2 className="text-secondary text-xl font-bold mb-4">What's the goal?</h2>
                    <p>The goal for this project was to learn about Typescript and Redux, applying the basic concepts to create a working app.</p>
                    <div className="flex gap-4 mt-4">
                        <a href="https://github.com/drevrena/memory-game" target="_blank">
                            <svg className="fill-gray-400 hover:fill-white duration-1000" aria-label="View project on Github" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" width="32px" height="32px">
                                <path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z"/>
                            </svg>
                        </a>
                        <a href="https://memory-game-tau-steel.vercel.app/" target="_blank">
                            <svg className=" w-6 h-6 stroke-gray-400 hover:stroke-white duration-1000" aria-label="View project live version" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <h3 className="text-secondary text-lg font-bold mt-8 my-4">What technologies does it use?</h3>
            <p>
            This project uses Typescript instead of regular Javascript, 
            which was something that I wanted to try out. 
            That allowed me to spot some bugs beforehand, saving me some time. The state that keeps track of tiles uses Redux, 
            which, for the complexity of this project, is way overkill, 
            but I wanted to learn the basics from it because 
            I think that it can be very useful for large scale projects that need complex state management.
            </p>
            <h3 className="text-secondary text-lg font-bold my-4">What I learned from it?</h3>
            <p>
            I learned the basics from both Typescript and Redux, 
            read a lot of Redux documentation that allowed me to understand more of how it works, 
            what the Redux toolkit is and why mutating state is allowed inside Redux slice thanks to Immer lib.
            </p>
        </div>
    </div>
}

export default CardgamePage