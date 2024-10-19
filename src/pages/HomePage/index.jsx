import './style.css';

import { Header } from '../../components/header/Header';
import { Dashboard } from '../../components/Dashboard/Dashboard';



export const HomePage = () => {
  return (
    
    <>
      <div class="container">
        <Header title={"Chytrý dům"}/>
        <Dashboard data={Dashboard}/>

        

        

      </div>

    </>
  );
};
