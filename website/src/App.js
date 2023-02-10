import Dashboard from './Dashboard/Dashboard'
import SideBar from './Navi/SideBar';
import { Routes, Route, Switch, Link } from "react-router-dom";
import UserProfile from './UserProfile/UserProfile';
import Rout from './Rout';
import InfoRout from './InfomationBlatt/InfoRout';


function App() {
  return (
    <div className='grid grid-cols-3 h-screen w-full overflow-auto sticky top-0'>
      <div className=' overflow-auto col-span-2 flex flex-row '>
        <div class="relative h-full w-full ml-14">
          <Rout/>
          <footer className='text-center'>
            copy Right Sourcetronic
          </footer>
        </div>
        <div class="absolute z-10 h-full ">
          <div className="flex w-full h-full  justify-center">
            <div className="flex  flex-col w-full h-full text-gray-400 bg-gray-900 rounded z-50">
              <SideBar/>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-slate-800 grid grid-rows-3 grid-flow-col gap-4 overflow-auto'>
        <InfoRout />
      </div>
    </div>
  );
}

export default App;
