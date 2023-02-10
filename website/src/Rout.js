import React from 'react'
import Dashboard from './Dashboard/Dashboard'
import Brunnenakte from './Brunnenakte/Brunnenakte';
import { Routes, Route, Switch, Link } from "react-router-dom";
import UserProfile from './UserProfile/UserProfile';
import MapView from './Maps/Map';
import ProjectTable from './Tables/ProjectTable'
import UserTable from './Tables/UserTable';
import CustomerTable from './Tables/CustomerTable'
import NewCustomerWizard from './Wizards/NewCustomerWizard'
import NewProjectWizard from './Wizards/NewProjectWizard'
import NewUserWizard from './Wizards/NewCustomerWizard';
import ProjectDetails from './Project/ProjectDetails';
import Projects from './neueproject/projects';
import Tabelle from './Tabelle/Tabelle';
import Pdf from './Tabelle/Reiter/Pdf';
import Xlsx from './Tabelle/Reiter/Xlsx';

const Rout = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="user-profile" element={<UserProfile />} />
        <Route path="brunnenakte" element={<Brunnenakte />} />
        <Route path="/worldmap" element={<MapView />} />
        <Route path="project-table" element={<ProjectTable />} />
        <Route path="user-table" element={<UserTable />} />
        <Route path="customer-table" element={<CustomerTable />} />

        <Route path="new-customer" element={<NewCustomerWizard />} />
        <Route path="new-project" element={<NewProjectWizard />} />
        <Route path="new-user" element={<NewUserWizard />} />

        <Route path="project" element={<ProjectDetails />} />

        <Route path="projects" element={<Projects />}/>
        <Route path='tabelle' element={<Tabelle/>}/>
        <Route path='pdf' element={<Pdf/>}/>
        <Route path='xlsx' element={<Xlsx/>}/>
        {/**
          <Route path="new-customer" element={<NewCustomerWizard />} />
          <Route path="new-project" element={<NewProjectWizard />} />
          <Route path="new-user" element={<NewUserWizard />} />
          
          <Route path="charts" element={<Charts />} />
          
            <Route path=":id" element={<ProjectDetails />} />
          </Route>
          
            <Route
              index element={
                <div className="w-screen">
                  <ProjectOverview />
                </div>
              }
            />
            <Route path=":projectId" element={<Project />} />
          </Route>
           */}
      </Routes>
    </div>
  )
}

export default Rout