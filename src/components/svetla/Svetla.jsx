
import svetloOn from "./img/light-on.svg"
import svetlaOff from "./img/light-off.svg"
import { useState } from "react"

import "./svetla.css"

const Svetlo = ({name, state})=>{
  const [light, setLight] = useState(state)

  const handleClick = ()=>{
    setLight(light==="on"? "off" : "on")
}
    return(
      <div onClick={handleClick}className="light">
        <div className="light__icon">
          <img src={light==="on"?svetloOn:svetlaOff}/>
        </div>
        <div className="light__name">
          {name}
        </div>
      </div>
    )
}


export const Svetla = ({lights})=>{

  return(
    <div className="lights">

      {lights.map(({name, state})=>{
        return(
          <Svetlo name={name} state={state}/>
        )
      })}
    </div>
  )}