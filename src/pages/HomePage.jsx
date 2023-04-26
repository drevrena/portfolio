import React from "react";
import NavBar from "../components/Navbar/Navbar";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Portfolio from "../components/sections/Portfolio";
import ContactMe from "../components/sections/ContactMe";
import Footer from "../components/sections/Footer";

function HomePage() {
    return <div className="bg-slate-900 ">
        <NavBar/>
        {/*Screen size - (navbar padding + margin + logo icon size) */}
        <div className="min-h-[calc(100vh-7rem-48px)]">
            <Hero/>
        </div>
        <About/>
        <Skills/>
        <Portfolio/>
        <ContactMe/>
        <Footer/>
    </div>

}

export default HomePage