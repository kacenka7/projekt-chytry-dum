import teplomer from "./img/temp.svg"

import "./teplomer.css"


export const Teplomer = ()=>{
    return(
        <div class="climate">
            <div class="climate__icon">
              <img src={teplomer}/>
            </div>
            <div class="climate__content">
              <div class="climate__temperature">24&deg;C</div>
              <div class="climate__humidity">Vlhost vzduchu 51&nbsp;%</div>
            </div>
            <div class="climate__controls">
              <button class="button">+</button>
              <button class="button">-</button>
            </div>
          </div>
    )
}