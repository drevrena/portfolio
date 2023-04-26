import { useEffect, useRef, useState }  from "react";
import randomString from "../utils/RandomString";

function useRevealingString(clearString, tickSpeed = 25, revealTick = 3) {
    const result = useRef("")
    const [tick, setTick] = useState(0)
    
    useEffect(() => {
        setTimeout(() => {
            if(result.current !== clearString)  {
                result.current = clearString.substring(0, tick / revealTick) + randomString(clearString.length - (tick / revealTick))
                setTick(prev => prev + 1)
            }
        }, tickSpeed)
    }, [tick]) 

    return [result.current]
}

export default useRevealingString