import teplomer from "./img/temp.svg"

import "./teplomer.css"

import { useState } from "react"


export const Teplomer = ({temperature})=>{
  //Mám tu funkci dáte sem, nebo jí mám dát mimo komponentu?

  const [temp, setTemp] = useState(temperature)

  const handleIncrease=()=>{
    setTemp(temp+1)
  }

  const handleDecrease=()=>{
    setTemp(temp-1)
  }

    return(
        <div className="climate">
            <div className="climate__icon">
              <img src={teplomer}/>
            </div>
            <div className="climate__content">
              <div className="climate__temperature">{temp}&deg;C</div>
              <div className="climate__humidity">Vlhost vzduchu 75&nbsp;%</div>
            </div>
            <div className="climate__controls">
              <button onClick={handleIncrease}className="button">+</button>
              <button onClick={handleDecrease}className="button">-</button>
            </div>
          </div>
    )
}