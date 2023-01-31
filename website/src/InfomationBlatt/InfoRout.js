import React from 'react'
import { Routes, Route, Switch, Link } from "react-router-dom";
import InfoBrunnenakte from './InfoBrunnenakte';
import InfoDashboard from './InfoDashboard';


const InfoRout = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<InfoDashboard/>} />
            <Route path="dashboard" element={<InfoDashboard />} />
            <Route path="brunnenakte" element={<InfoBrunnenakte />} />

        </Routes>
    </div>
  )
}

export default InfoRout