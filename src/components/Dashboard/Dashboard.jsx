import { Svetla } from '../../components/svetla/Svetla';
import { Teplomer } from '../../components/teplomer/teplomer';
import { Zaluzie } from '../../components/zaluzie/zaluzie';
import { Energie } from '../../components/energie/energie';

import {smartHomeData} from "../../smartHomeData.js";


export const Dashboard = ()=>{
    return(
        <main className="dashboard">
          <Svetla lights={smartHomeData.lights} />
          <Teplomer temperature={smartHomeData.climate.temperature}/>
          <Zaluzie state={smartHomeData.blinds}/>
          <Energie electricity={smartHomeData.energyConsumption.electricity} water={smartHomeData.energyConsumption.water}/>
        </main>
    )
} 