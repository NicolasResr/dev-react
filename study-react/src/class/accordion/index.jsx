import { useState } from "react"
import './accordion.css'
import setaCima from './assets/seta-cima.svg'
import setaBaixo from './assets/seta-baixo.svg'

export default function Accordion(){

    const[active, setAccordion] = useState(false)

    function handleAccordion(){
        setAccordion(prevState => !prevState)
    }


    return <div className="accordion">
        <div className="close">
        <h1>Question text goes here</h1>
        <button onClick= {handleAccordion}> <img src={active ? setaCima : setaBaixo } alt="" /></button>
        </div>
        {active &&(<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>)}
        
    </div>
    
}