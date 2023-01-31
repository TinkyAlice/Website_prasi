import React from 'react'
import Dashboard from './Dashboard/Dashboard'
import Brunnenakte from './Brunnenakte/Brunnenakte';
import { Routes, Route, Switch, Link } from "react-router-dom";
import UserProfile from './UserProfile/UserProfile';
import Map from './Maps/Map';

const Rout = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="user-profile" element={<UserProfile />} />
                <Route path="brunnenakte" element={<Brunnenakte />} />
                <Route path="worldmap" element={<Map />} />
          {/**

          <Route path="project-table" element={<ProjectTable />} />
          <Route path="user-table" element={<UserTable />} />
          <Route path="customer-table" element={<CustomerTable />} />
          <Route path="new-customer" element={<NewCustomerWizard />} />
          <Route path="new-project" element={<NewProjectWizard />} />
          <Route path="new-user" element={<NewUserWizard />} />
          <Route path="charts" element={<Charts />} />
          <Route path="project" element={<ProjectDetails />} >
            <Route path=":id" element={<ProjectDetails />} />
          </Route>
          <Route path="projects" element={<Projects />}>
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