import React from "react";

function SkillCard({name}) {
    return <div className="relative flex justify-between px-6 py-4 pb-8 w-full bg-slate-800 rounded-md">
        <p className="text-2xl font-bold">{name}</p>
        <div className="bg-primary absolute bottom-0 left-0 h-2.5 w-full rounded-full"></div>
    </div>
}

export default SkillCard