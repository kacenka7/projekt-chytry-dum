import { Svetla } from '../../components/svetla/Svetla';
import { Teplomer } from '../../components/teplomer/teplomer';
import { Zaluzie } from '../../components/zaluzie/zaluzie';
import { Energie } from '../../components/energie/energie';

import {smartHomeData} from "../../smartHomeData.js"


export const Dashboard = ({data})=>{
    return(
        <main class="dashboard">
          <Svetla/>
          <Teplomer/>
          <Zaluzie/>
          <Energie/>
        </main>
    )
} 