import elektrina  from "./img/electricity.svg"
import voda  from "./img/water.svg"

import "./energie.css"

export const Energie = ({electricity, water})=>{
    return(

        <div class="energy">
            <div class="energy__source">
              <div class="energy__icon">
                <img src={elektrina}/>
              </div>
              <div class="energy__consumption">
                <div class="energy__description">Elektřina</div>
                <div class="energy__value">{electricity} kW</div>
              </div>
            </div>
            <div class="energy__source">
              <div class="energy__icon">
                <img src={voda}/>
              </div>
              <div class="energy__consumption">
                <div class="energy__description">Voda</div>
                <div class="energy__value">{water} m<sup>3</sup></div>
              </div>
            </div>
          </div>
    )
}