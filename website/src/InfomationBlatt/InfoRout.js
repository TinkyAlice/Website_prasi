import React from 'react'
import { Routes, Route, Switch, Link } from "react-router-dom";
import InfoBrunnenakte from './InfoBrunnenakte';
import InfoDashboard from './InfoDashboard';
import InfoMap from './InfoMap';
import InfoProjektTable from './InfoProjektTable';
import InfoUserTable from './InfoUserTable';
import InfoCustomerTable from './InfoCustomerTable';
import InfoUserProfile from './InfoUserProfile';
import InfoTabelle from './InfoTabelle';
import InfoPdf from './InfoPdf';
import InfoXmsl from './InfoXmsl';



const InfoRout = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<InfoDashboard/>} />
            <Route path="dashboard" element={<InfoDashboard />} />
            <Route path="brunnenakte" element={<InfoBrunnenakte />} />
            <Route path="worldmap" element={<InfoMap />} />
            <Route path="project-table" element={<InfoProjektTable />} />
            <Route path="user-table" element={<InfoUserTable />} />
            <Route path="customer-table" element={<InfoCustomerTable />} />
            <Route path="user-profile" element={<InfoUserProfile/>} />
            <Route path="tabelle" element={<InfoTabelle/>} />
            <Route path='pdf' element={<InfoPdf/>}/>
            <Route path='xlsx' element={<InfoXmsl/>}/>
        </Routes>
    </div>
  )
}

export default InfoRout