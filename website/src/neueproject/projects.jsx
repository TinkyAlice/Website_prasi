import React, { useEffect } from 'react'
import { NavLink, Outlet, useSearchParams } from "react-router-dom";




export default function Projects() {




    return (
        <div className="h-screen pl-4 w-full">
            <div style={{ display: "flex" }}>
                <nav
                    style={{
                    borderRight: "solid 1px",
                    padding: "1rem"
                    }}
                >
                    <input
                        className="border-2 border-black"
                        placeholder="Suche"
                    />

                        
                            <NavLink
                            className="w-3/12"
                                style={({ isActive }) => {
                                    return {
                                    display: "block",
                                    margin: "1rem 0",
                                    color: isActive ? "red" : ""
                                    };
                                }}

                            >
                                Projekt Name
                            </NavLink>
                        
                    
                </nav>
                <Outlet className="w-auto"/>
            </div>
        </div>
    );
    
}