import React from "react";
import SectionTitle from "../Cards/SectionTitle";
import projects from "../../data/projects";
import ProjectCard from "../Cards/ProjectCard";


function Portfolio() {
    return <section id="portfolio" className="relative flex flex-col items-center lg:pt16 lg:px-8 py-32 container">
        <div className="mx-auto lg:absolute lg:rotate-90 lg:-right-24 lg:top-64">
            <SectionTitle title="Recent Projects"/>
        </div>
        <div className="grid grid-cols-1 w-full md:grid-cols-2 2xl:grid-cols-3 gap-4 mt-4">
            {projects.map(project => <ProjectCard key={project.id} {...project}/>)}
        </div>
    </section>

}

export default Portfolio