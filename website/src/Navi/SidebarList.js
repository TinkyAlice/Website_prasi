import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SourcetronicLogo from "../Bilder/SourcetronicLogo";
import LogoST from '../Bilder/IconST-Fontaine-200x-200x.png'

import {
    UserCircleIcon,
    ClipboardListIcon,
    NewspaperIcon,
    TableIcon,
    TemplateIcon,
    TrendingUpIcon,
    BellIcon,
    LocationMarkerIcon,
    BookOpenIcon
} from '@heroicons/react/outline'


export default function SideBarList() {

    var user;

    if (localStorage.getItem("user")) {
        console.log(localStorage.getItem("user"));
        user = JSON.parse(localStorage.getItem("user"));
        console.log(user.roles);
        console.log("E-Mail bestätigt? " + user.activated);
    } else {
        console.log("Kein User im Cache");
    }


    return (

        <div class="flex flex-col items-stretch w-40 h-full overflow-hidden text-gray-400 bg-slate-800 rounded">
            <div class='items-stretch' >
                <Link to="/dashboard">
                    <a class="flex items-center w-full px-3 mt-3" href="#">

                        <img src={LogoST} className="w-8 h-8 fill-current" />

                        <span class="ml-2 text-sm font-bold">Sourcetronic</span>
                    </a>
                </Link>

                <div class="w-full px-2 items-stretch">
                    <div class="flex flex-col items-stretch w-full mt-3 border-t border-gray-700">
                        <Link to="/dashboard">
                            <a class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" href="#">

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                                    <path d="M17 2.75a.75.75 0 00-1.5 0v5.5a.75.75 0 001.5 0v-5.5zM17 15.75a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5zM3.75 15a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75zM4.5 2.75a.75.75 0 00-1.5 0v5.5a.75.75 0 001.5 0v-5.5zM10 11a.75.75 0 01.75.75v5.5a.75.75 0 01-1.5 0v-5.5A.75.75 0 0110 11zM10.75 2.75a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5zM10 6a2 2 0 100 4 2 2 0 000-4zM3.75 10a2 2 0 100 4 2 2 0 000-4zM16.25 10a2 2 0 100 4 2 2 0 000-4z" />
                                </svg>


                                <span class="ml-2 text-sm font-medium">Dasboard</span>
                            </a>
                        </Link>
                        <Link to="/user-profile">
                            <a class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A6.483 6.483 0 0010 16.5a6.483 6.483 0 004.793-2.11A5.99 5.99 0 0010 12z" clip-rule="evenodd" />
                                </svg>
                                <span class="ml-2 text-sm font-medium">Profile</span>
                            </a>
                        </Link>
                        <Link to='tabelle'>                        
                        <details className="group">
                            <summary className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                                        <path fill-rule="evenodd" d="M10 1c3.866 0 7 1.79 7 4s-3.134 4-7 4-7-1.79-7-4 3.134-4 7-4zm5.694 8.13c.464-.264.91-.583 1.306-.952V10c0 2.21-3.134 4-7 4s-7-1.79-7-4V8.178c.396.37.842.688 1.306.953C5.838 10.006 7.854 10.5 10 10.5s4.162-.494 5.694-1.37zM3 13.179V15c0 2.21 3.134 4 7 4s7-1.79 7-4v-1.822c-.396.37-.842.688-1.306.953-1.532.875-3.548 1.369-5.694 1.369s-4.162-.494-5.694-1.37A7.009 7.009 0 013 13.179z" clip-rule="evenodd" />
                                    </svg>

                                <span className="ml-2 text-sm font-medium"> Tabellen </span>
                                {/**
                                <span className="ml-auto transition duration-300 shrink-0 group-open:-rotate-180">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </span>
                                 */}
                            </summary>
                            {/**
                            <nav className="flex flex-col ml-12 justify-between text-gray-300 hover:text-gray-500 cursor-pointer">
                                <ul>

                                    <div>
                                        <li>
                                            <Link to="/user-table">
                                                <div className="flex items-center ">
                                                    <span className="text-lg text-gray-300 hover:text-gray-500">Benutzertabelle</span>
                                                </div>
                                            </Link>
                                        </li>
                                    </div>
                                    <li>
                                        <Link to="/customer-table">
                                            <div className="flex items-center">
                                                <span className="text-lg text-gray-300 hover:text-gray-500">Kundentabelle</span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/project-table">
                                            <div className="flex items-center">
                                                <span className="text-lg text-gray-300 hover:text-gray-500">Projektetabelle</span>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                             */}
                        </details>
                        </Link>
                        <Link to="/brunnenakte/">
                            <a class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                                    <path fill-rule="evenodd" d="M4.5 2A1.5 1.5 0 003 3.5v13A1.5 1.5 0 004.5 18h11a1.5 1.5 0 001.5-1.5V7.621a1.5 1.5 0 00-.44-1.06l-4.12-4.122A1.5 1.5 0 0011.378 2H4.5zm2.25 8.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5zm0 3a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z" clip-rule="evenodd" />
                                </svg>
                                <span class="ml-2 text-sm font-medium">Brunnenakte</span>
                            </a>
                        </Link>

                        <Link to="/worldmap">
                            <a class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                                    <path fill-rule="evenodd" d="M8.157 2.175a1.5 1.5 0 00-1.147 0l-4.084 1.69A1.5 1.5 0 002 5.251v10.877a1.5 1.5 0 002.074 1.386l3.51-1.453 4.26 1.763a1.5 1.5 0 001.146 0l4.083-1.69A1.5 1.5 0 0018 14.748V3.873a1.5 1.5 0 00-2.073-1.386l-3.51 1.452-4.26-1.763zM7.58 5a.75.75 0 01.75.75v6.5a.75.75 0 01-1.5 0v-6.5A.75.75 0 017.58 5zm5.59 2.75a.75.75 0 00-1.5 0v6.5a.75.75 0 001.5 0v-6.5z" clip-rule="evenodd" />
                                </svg>
                                <span class="ml-2 text-sm font-medium">Karte</span>
                            </a>
                        </Link>

                    </div>

                </div>

            </div>
        </div>
    )
}

