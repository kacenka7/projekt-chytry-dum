import zavreno from "./img/blinds-closed.svg"
import otevreno from "./img/blinds-open.svg"

import "./zaluzie.css"

import { useState } from "react"

export const Zaluzie = ({state})=>{

  console.log(state)

  const [open, setOpen] = useState(state)
  
  const handleClick = ()=>{
    setOpen(open==="open"?"close":"open")
  }

    return(
        <div className="blinds">
            <div className="blinds__icon">
              <img src={open==="open"?otevreno:zavreno}/>
            </div>
            <div className="blinds__name">
              Žaluzie
            </div>
            <div className="blinds__controls">
              <button onClick={handleClick} className={open==="open"?"button button--active":"button"}>Otevřeno</button>
              <button onClick={handleClick} className={open==="open"?"button":"button button--active"}>Zavřeno</button>
            </div>
          </div>
    )
}