import React from "react";


function SectionTitle({title}) {
    return <div className="relative z-10 mb-4">
        <h3 className="text-lg font-semibold bg-slate-800 p-2 px-4 strike lg:after:w-[35%] lg:after:left-full rounded-md">{title}</h3>
    </div>

}

export default SectionTitle