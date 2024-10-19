
import svetloOn from "./img/light-on.svg"
import svetlaOff from "./img/light-off.svg"

import "./svetla.css"


export const Svetla = ()=>{

    return(
    <div class="lights">

            <div class="light">
              <div class="light__icon">
                <img src={svetloOn}/>
              </div>
              <div class="light__name">
                Obývací pokoj
              </div>
            </div>

            <div class="light">
              <div class="light__icon">
                <img src={svetloOn}/>
              </div>
              <div class="light__name">
                Ložnice
              </div>
            </div>

            <div class="light">
              <div class="light__icon">
                <img src={svetloOn}/>
              </div>
              <div class="light__name">
                Kuchyň
              </div>
            </div>

            <div class="light">
              <div class="light__icon">
                <img src={svetlaOff}/>
              </div>
              <div class="light__name">
                Chodba
              </div>
            </div>

          </div>
    )
}