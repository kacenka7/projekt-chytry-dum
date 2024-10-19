import elektrina  from "./img/electricity.svg"
import voda  from "./img/water.svg"

import "./energie.css"

export const Energie = ()=>{
    return(

        <div class="energy">
            <div class="energy__source">
              <div class="energy__icon">
                <img src={elektrina}/>
              </div>
              <div class="energy__consumption">
                <div class="energy__description">Elektřina</div>
                <div class="energy__value">36.7 kW</div>
              </div>
            </div>
            <div class="energy__source">
              <div class="energy__icon">
                <img src={voda}/>
              </div>
              <div class="energy__consumption">
                <div class="energy__description">Voda</div>
                <div class="energy__value">14.1 m<sup>3</sup></div>
              </div>
            </div>
          </div>
    )
}