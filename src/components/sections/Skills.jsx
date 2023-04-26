import React, { useState } from "react";
import SectionTitle from "../Cards/SectionTitle";
import SkillCard from "../Cards/SkillCard";
import skills from "../../data/skills";

function Skills() {
    const [selectedCategory, setSelectedCategory] = useState("Web")
    const categories = ["Programming", "Web", "Tools"]

    return <section id="skills" className="relative flex flex-col items-center md:pt16 md:px-8 py-32 container ">
        <div className="mx-auto lg:absolute lg:-rotate-90 lg:-left-24 lg:top-80">
            <SectionTitle title="My Skills"/>
        </div>
        <ul className="flex flex-col xsm:flex-row justify-center gap-4 m-8">
            {categories.map((cat,idx) => <li key={idx} onClick={() => setSelectedCategory(cat)} className="btn btn-primary btn-outline border-2 rounded-md">{cat}</li>)}
        </ul>
        <div className="grid grid-cols-1 w-full md:grid-cols-2 gap-4 mt-4">
            {skills.filter(skill => skill.category === selectedCategory).map(skill=> <SkillCard key={skill.id} {...skill} />)}
        </div>
    </section>

}

export default Skills