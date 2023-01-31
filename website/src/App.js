import Dashboard from './Dashboard/Dashboard'
import SideBar from './Navi/SideBar';
import { Routes, Route, Switch, Link } from "react-router-dom";
import UserProfile from './UserProfile/UserProfile';
import Rout from './Rout';
import InfoRout from './InfomationBlatt/InfoRout';


function App() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 h-screen w-full overflow-auto sticky top-0'>
      <div className='hidden sm:block overflow-auto col-span-2'>
        <SideBar />
        <h1>
          <Rout/>
        </h1>
      </div>
      <div className='bg-slate-800 grid grid-rows-3 grid-flow-col gap-4 overflow-auto'>
    	  <InfoRout/>
      </div>
    </div>
  );
}

export default App;
