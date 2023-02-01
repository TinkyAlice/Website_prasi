import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

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

        <div class="flex flex-col items-center w-40 h-full overflow-hidden text-gray-400 bg-gray-900 rounded">
            <div >
                <Link to="/dashboard">
                    <a class="flex items-center w-full px-3 mt-3" href="#">

                        <svg class="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                        </svg>

                        <span class="ml-2 text-sm font-bold">The App</span>
                    </a>
                </Link>

                <div class="w-full px-2">
                    <div class="flex flex-col items-center w-full mt-3 border-t border-gray-700">
                        <Link to="/dashboard">
                            <a class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" href="#">

                                <svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>

                                <span class="ml-2 text-sm font-medium">Dasboard</span>
                            </a>
                        </Link>
                        <Link to="/user-profile">
                            <a class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" href="#">
                                <svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                <span class="ml-2 text-sm font-medium">User profile</span>
                            </a>
                        </Link>

                        <details className="group">
                            <summary className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" href="#">
                                <ClipboardListIcon className="h-8 w-8" />
                                <span className="ml-3 text-xl font-medium"> Forms </span>
                                <span className="ml-auto transition duration-300 shrink-0 group-open:-rotate-180">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 stroke-current"
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
                            </summary>
                            <nav className="flex flex-col ml-12 justify-between text-gray-300 hover:text-gray-500 cursor-pointer">
                                <ul>
                                    <li>
                                        <Link to="/new-user">
                                            <div className="flex items-center ">
                                                <span className="text-lg text-gray-300 hover:text-gray-500">New User</span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/new-customer">
                                            <div className="flex items-center ">
                                                <span className="text-lg text-gray-300 hover:text-gray-500">New Customer</span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/new-project">
                                            <div className="flex items-center">
                                                <span className="text-lg text-gray-300 hover:text-gray-500">New Project</span>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </details>

                        <details className="group">
                            <summary className="flex items-center px-4 py-4 text-gray-300 rounded-lg cursor-pointer hover:text-gray-500">
                                <TableIcon className="h-8 w-8" />
                                <span className="ml-3 text-xl font-medium"> Tables </span>
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
                            </summary>
                            <nav className="flex flex-col ml-12 justify-between text-gray-300 hover:text-gray-500 cursor-pointer">
                                <ul>

                                    <div>
                                        <li>
                                            <Link to="/user-table">
                                                <div className="flex items-center ">
                                                    <span className="text-lg text-gray-300 hover:text-gray-500">Table of Users</span>
                                                </div>
                                            </Link>
                                        </li>
                                    </div>
                                    <li>
                                        <Link to="/customer-table">
                                            <div className="flex items-center">
                                                <span className="text-lg text-gray-300 hover:text-gray-500">Table of Customers</span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/project-table">
                                            <div className="flex items-center">
                                                <span className="text-lg text-gray-300 hover:text-gray-500">Table of Projects</span>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </details>

                        <Link to="/projects/">
                            <a class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" href="#">
                                <svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                                </svg>
                                <span class="ml-2 text-sm font-medium">Projekts</span>
                            </a>
                        </Link>

                        <Link to="/brunnenakte/">
                            <a class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" href="#">
                                <svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                                </svg>
                                <span class="ml-2 text-sm font-medium">Brunnenakte</span>
                            </a>
                        </Link>

                    </div>

                </div>
                <a class="flex items-center justify-center w-full h-16 mt-auto bg-gray-800 hover:bg-gray-700 hover:text-gray-300" href="#">
                    <svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span class="ml-2 text-sm font-medium">Account</span>
                </a>
            </div>
        </div>
    )
}

