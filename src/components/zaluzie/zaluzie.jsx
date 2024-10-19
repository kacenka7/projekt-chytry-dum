import zavreno from "./img/blinds-closed.svg"
import otevreno from "./img/blinds-open.svg"

import "./zaluzie.css"

export const Zaluzie = ()=>{
    return(
        <div class="blinds">
            <div class="blinds__icon">
              <img src={otevreno}/>
            </div>
            <div class="blinds__name">
              Žaluzie
            </div>
            <div class="blinds__controls">
              <button class="button button--active">Otevřeno</button>
              <button class="button">Zavřeno</button>
            </div>
          </div>
    )
}