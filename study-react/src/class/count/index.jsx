import { useState } from "react"
import './count.css'

export function Count(){
    const[count, setCount] = useState(0)

    function handleConsole(){
        setCount(count +125)
    }

    function resetCount(){
        setCount(0)
    }
    function reduceCount(){
        setCount(count -125)
    }

    return(
        <div>
        <h1>Count: {count}</h1>
        <button onClick= {handleConsole}>
            <p>+</p>
            </button>
        <button onClick= {resetCount}><p>reset</p></button>
        <button onClick= {reduceCount}><p>-</p></button>
        </div>
         
)
}